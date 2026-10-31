import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Exercise rendering and events without a browser; this is not a layout test.
function createAppFixture(prepare = () => {}) {
  const elements = new Map();
  const documentListeners = new Map();
  const body = { tagName: 'BODY' };
  const document = {
    activeElement: body,
    fullscreenElement: null,
    querySelector: getElement,
    querySelectorAll: () => sourceButtons,
    addEventListener(name, listener) {
      documentListeners.set(name, listener);
    },
    async exitFullscreen() {
      this.fullscreenElement = null;
    },
    documentElement: {
      async requestFullscreen() {
        document.fullscreenElement = this;
      },
    },
  };

  function getElement(selector) {
    if (!elements.has(selector)) {
      const element = {
        tagName: selector === '#search' ? 'INPUT' : 'DIV',
        value: '',
        checked: false,
        hidden: false,
        textContent: '',
        attributes: new Map(),
        listeners: new Map(),
        addEventListener(name, listener) {
          this.listeners.set(name, listener);
        },
        setAttribute(name, value) {
          this.attributes.set(name, value);
        },
        contains(target) {
          return sourceButtons.includes(target);
        },
        focus() {
          document.activeElement = this;
        },
        blur() {
          document.activeElement = body;
        },
      };
      let html = '';
      Object.defineProperty(element, 'innerHTML', {
        get: () => html,
        set(value) {
          html = value;
          // Replacing the select's options resets its selection in the browser.
          if (selector === '#group') {
            element.value = '';
          }
        },
      });
      elements.set(selector, element);
    }
    return elements.get(selector);
  }

  const sourceButtons = ['custom', 'vim', 'all'].map((source) => {
    const button = getElement(`#source-${source}`);
    button.dataset = { source };
    return button;
  });
  const sandbox = vm.createContext({ window: {}, document });
  function loadScript(path) {
    vm.runInContext(
      fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8'),
      sandbox,
      { filename: path, timeout: 1000 },
    );
  }
  loadScript('docs/keymaps.js');
  loadScript('docs/labels.js');
  prepare(sandbox.window);
  loadScript('docs/app.js');

  return {
    window: sandbox.window,
    document,
    getElement,
    sourceButtons,
    get html() {
      return getElement('#cards').innerHTML;
    },
    dispatch(selector, name, event = {}) {
      return getElement(selector).listeners.get(name)(event);
    },
    selectSource(source) {
      const button = sourceButtons.find(
        (item) => item.dataset.source === source,
      );
      this.dispatch('#sources', 'click', { target: { closest: () => button } });
    },
    keydown(event) {
      documentListeners.get('keydown')(event);
    },
  };
}

function checkFilters(app) {
  const search = app.getElement('#search');
  const group = app.getElement('#group');
  assert(app.html.includes('Copy relative path'));
  assert(app.html.includes('Copy selected entry'));

  search.value = '  COPY RELATIVE PATH  ';
  app.dispatch('#search', 'input');
  assert(app.html.includes('ProjectPanel'));
  assert(!app.html.includes('Close active tab'));
  search.value = 'no-such-binding-xyz';
  app.dispatch('#search', 'input');
  assert.equal(app.getElement('#empty').hidden, false);
  assert.equal(app.getElement('#count').textContent, '0 BINDINGS');

  search.value = '';
  app.selectSource('vim');
  assert(app.html.includes('CONTEXT OVERRIDES'));
  assert(app.html.includes('Select next occurrence'));
  for (const button of app.sourceButtons) {
    assert.equal(
      button.attributes.get('aria-pressed'),
      String(button.dataset.source === 'vim'),
    );
  }
  group.value = 'Project tree';
  app.dispatch('#group', 'change');
  assert(app.html.includes('Project tree'));
  assert(!app.html.includes('Vim motions &amp; commands'));
  app.selectSource('all');
  assert.equal(group.value, '');
  assert(app.html.includes('Custom / '));
  assert(app.html.includes('Native / '));
  assert(!app.html.includes('<details class="disabled">'));
  app.getElement('#disabled').checked = true;
  app.dispatch('#disabled', 'change');
  assert(app.html.includes('<details class="disabled">'));
  const html = app.html;
  app.dispatch('#sources', 'click', { target: { closest: () => null } });
  assert.equal(app.html, html);
  app.selectSource('custom');
  app.getElement('#disabled').checked = false;
  app.dispatch('#disabled', 'change');
}

function checkGroups(app) {
  const rows = app.window.KEYMAP_DATA.rows;
  const removedGroups = new Set([
    'Workspace leader',
    'Diff editor',
    'Agent editor',
    'Editor leader',
    'Dock focus',
    'Center tabs',
    'Commit editor',
    'Normal mode',
  ]);
  assert(!rows.some((row) => removedGroups.has(row.group)));
  assert(
    rows.some(
      (row) =>
        row.key === 'alt-r' &&
        row.group === 'Workspace' &&
        row.label === 'Toggle AI Chats',
    ),
  );
  assert(
    rows
      .filter((row) => row.context.includes('GitDiff'))
      .every((row) => row.group === 'Diff multibuffer'),
  );
  assert(
    rows
      .filter((row) => row.context.includes('CommitEditor'))
      .every((row) => row.group === 'Git panel'),
  );
  assert(
    rows.some(
      (row) => row.context === 'vim_mode == normal' && row.group === 'Editor',
    ),
  );

  // Regrouping must retain both meanings of closing a tab or a dock.
  const closeRows = rows.filter(
    (row) => row.source === 'custom' && row.key === 'space w q',
  );
  assert.equal(closeRows.length, 2);
  assert(closeRows.every((row) => row.group === 'Workspace'));
  assert(
    closeRows.some(
      (row) =>
        row.context.includes('!Dock') && row.action === 'pane::CloseActiveItem',
    ),
  );
  assert(closeRows.some((row) => row.label === 'Close active dock'));
  assert(
    rows.some(
      (row) =>
        row.source === 'custom' &&
        row.context === 'Dock || Terminal' &&
        row.key === 'ctrl-;' &&
        row.action === 'editor::ToggleFocus' &&
        row.group === 'Workspace',
    ),
  );

  const editorControl = rows.find(
    (row) =>
      row.source === 'vim' && row.context === 'Editor' && row.key === 'ctrl-;',
  );
  assert.equal(editorControl.action, 'editor::ToggleLineNumbers');
  assert.equal(editorControl.group, 'Editor');
  const agentControl = rows.find(
    (row) =>
      row.source === 'vim' &&
      row.context === 'AcpThread > Editor' &&
      row.key === 'ctrl-;',
  );
  assert.equal(agentControl.action, 'agent::OpenAddContextMenu');
  assert.equal(agentControl.group, 'Agent panel');
  assert.equal(agentControl.use_key_equivalents, true);

  app.selectSource('vim');
  for (const [group, description] of [
    ['Editor', 'Toggle line numbers'],
    ['Agent panel', 'Toggle context menu'],
  ]) {
    app.getElement('#group').value = group;
    app.dispatch('#group', 'change');
    assert(app.html.includes(description));
    assert(!app.html.includes('<span class="description">Focus editor'));
  }
  app.selectSource('custom');
}

function checkKeyboard(app) {
  const search = app.getElement('#search');
  let prevented = false;
  app.keydown({
    key: '/',
    preventDefault() {
      prevented = true;
    },
  });
  assert(prevented);
  assert.equal(app.document.activeElement, search);
  search.value = 'no-such-binding-xyz';
  app.dispatch('#search', 'input');
  app.keydown({ key: 'Escape' });
  assert.equal(search.value, '');
  assert.notEqual(app.document.activeElement, search);
  assert.equal(app.getElement('#empty').hidden, true);
  for (const activeElement of [
    { tagName: 'INPUT' },
    { tagName: 'SELECT' },
    { tagName: 'TEXTAREA' },
    { tagName: 'DIV', isContentEditable: true },
  ]) {
    app.document.activeElement = activeElement;
    app.keydown({
      key: '/',
      preventDefault() {
        assert.fail('Typing must not focus search');
      },
    });
    assert.equal(app.document.activeElement, activeElement);
  }
}

async function checkFullscreen(app) {
  await app.dispatch('#fullscreen', 'click');
  assert.equal(app.document.fullscreenElement, app.document.documentElement);
  await app.dispatch('#fullscreen', 'click');
  assert.equal(app.document.fullscreenElement, null);
  app.document.documentElement.requestFullscreen = async () => {
    throw new Error('Fullscreen unavailable');
  };
  await app.dispatch('#fullscreen', 'click');
  assert.equal(app.getElement('#fullscreen').textContent, 'Use F11');
}

function checkDescriptions({ window }) {
  const rows = window.KEYMAP_DATA.rows;
  const describe = window.keymapLabel;
  for (const row of rows) {
    const description = describe(row);
    assert.equal(
      typeof description,
      'string',
      `Missing description: ${row.key}`,
    );
    assert(description.trim().length > 0, `Empty description: ${row.key}`);
    assert(
      description.trim().split(/\s+/).length <= 3,
      `Long label: ${description}`,
    );
    assert(
      !/^(Toggle|Open|Deploy|Spawn|Sequence|Send Keystrokes)$/.test(
        description,
      ),
      `Vague label: ${description}`,
    );
    assert.equal(
      row.label,
      description,
      `Stored and rendered descriptions differ: ${row.key}`,
    );
    for (const override of row.overrides ?? []) {
      const custom = rows.find(
        (candidate) =>
          candidate.source === 'custom' &&
          candidate.key === row.key &&
          candidate.context === override.context &&
          JSON.stringify(candidate.action) === JSON.stringify(override.action),
      );
      assert(custom, `Override has no custom binding: ${row.key}`);
      assert.equal(override.label, describe(custom));
    }
  }
  const expectations = [
    [(row) => row.action === 'terminal_panel::Toggle', 'Toggle terminal panel'],
    [(row) => row.action === 'diagnostics::Deploy', 'Show project diagnostics'],
    [(row) => row.key === 'space s r', 'Replace across project'],
    [
      (row) => row.key === 'g shift-d' && row.context.includes('GitPanel'),
      'Open file diff',
    ],
    [
      (row) => row.source === 'custom' && row.key === 'space s s',
      'Find file symbol',
    ],
    [
      (row) => row.source === 'custom' && row.key === 'space s shift-s',
      'Find project symbol',
    ],
  ];
  for (const [predicate, expected] of expectations) {
    assert.equal(describe(rows.find(predicate)), expected);
  }
  console.log(
    `All ${rows.length} descriptions and context override labels are consistent.`,
  );
}

function checkNativeScope({ window }) {
  const rows = window.KEYMAP_DATA.rows;
  const nativeRows = rows.filter((row) => row.source === 'vim');
  for (const action of [
    'agent::Chat',
    'notebook::Run',
    'skill_creator::FocusNextField',
    'editor::AcceptEditPrediction',
  ]) {
    assert(
      !nativeRows.some((row) => row.action === action),
      `Standard UI action leaked: ${action}`,
    );
  }
  for (const [key, action] of [
    ['ctrl-o', 'pane::GoBack'],
    ['ctrl-i', 'pane::GoForward'],
    ['ctrl-w h', 'workspace::ActivatePaneLeft'],
    ['z a', 'editor::ToggleFold'],
    ['g d', 'editor::GoToDefinition'],
    ['ctrl-p', 'editor::ShowWordCompletions'],
    ['p', 'vim::Paste'],
    ['shift-r', 'vim::ToggleReplace'],
    ['g t', 'vim::GoToTab'],
    ['ctrl-v', 'vim::ToggleVisualBlock'],
  ]) {
    assert(
      nativeRows.some((row) => row.key === key && row.action === action),
      `Vim command missing: ${key}`,
    );
  }
  assert(!nativeRows.some((row) => row.key === 'ctrl-pageup'));
  assert(
    rows.some(
      (row) =>
        row.source === 'custom' &&
        row.key === 'tab' &&
        row.action === 'git_panel::FocusChanges',
    ),
  );
  for (const mode of ['insert', 'replace']) {
    const modeRows = nativeRows.filter(
      (row) => row.context === `vim_mode == ${mode}`,
    );
    assert(!modeRows.some((row) => row.action === 'editor::Paste'));
    if (mode === 'insert') {
      assert(
        modeRows.some(
          (row) => row.key === 'ctrl-r' && row.action === 'vim::PushRegister',
        ),
      );
    }
    assert(
      !modeRows.some((row) =>
        ['ctrl-v', 'ctrl-q', 'ctrl-shift-q'].includes(row.key),
      ),
    );
    const customRows = rows.filter(
      (row) => row.source === 'custom' && row.context === `vim_mode == ${mode}`,
    );
    assert.equal(
      customRows.find((row) => row.key === 'ctrl-v').action,
      'editor::Paste',
    );
    const literal = customRows.find((row) => row.key === 'ctrl-q');
    assert.equal(literal.action[0], 'vim::PushLiteral');
    assert.equal(literal.label, 'Quote next character');
  }
}

function checkEscaping() {
  const unsafe = `<script>&"'`;
  const escaped = '&lt;script&gt;&amp;&quot;&#39;';
  const app = createAppFixture((window) => {
    window.KEYMAP_LABELS['test::Unsafe'] = unsafe;
    window.KEYMAP_DATA.rows = [
      {
        source: 'custom',
        key: unsafe,
        group: unsafe,
        context: unsafe,
        action: 'test::Unsafe',
        disabled: false,
        overrides: [{ label: unsafe, context: unsafe }],
      },
    ];
  });
  assert(!app.html.includes(unsafe));
  assert(app.html.includes(`<kbd>${escaped}</kbd>`));
  assert(app.html.includes(`<span class="description">${escaped}`));
  assert(app.html.includes(`<p>${escaped}</p>`));
  assert(app.html.includes(`<p>${escaped}<br>${escaped}</p>`));
  assert(
    app.getElement('#group').innerHTML.includes(`<option>${escaped}</option>`),
  );
}

const app = createAppFixture();
checkFilters(app);
checkGroups(app);
checkKeyboard(app);
await checkFullscreen(app);
checkDescriptions(app);
checkNativeScope(app);
checkEscaping();
console.log(
  'UI logic OK: search, source/context/disabled filters, keyboard, fullscreen and HTML escaping.',
);
console.log(
  'Native scope OK: Vim commands retained; unrelated Zed UI shortcuts excluded.',
);
