import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import vm from 'node:vm';
import { isVimReference } from './native-scope.mjs';

const reference = {
  version: '1.25.3',
  commit: '8dd255c3eafb5231056fe4e6f601cedd011f1c93',
};
const contextGroups = [
  ['AgentPanel', 'Agent editor'],
  ['GitDiff', 'Diff editor'],
  ['multibuffer', 'Multibuffers'],
  ['ProjectPanel', 'Project tree'],
  ['CommitEditor', 'Commit editor'],
  ['GitPanel', 'Git panel'],
  ['Terminal && vi_mode', 'Terminal selection'],
  ['Dock || Terminal', 'Dock focus'],
  ['!Dock', 'Center tabs'],
  ['VimControl || !vim_mode', 'Workspace leader'],
  ['EmptyPane', 'Editor leader'],
  ['vim_mode == visual', 'Visual mode'],
  ['vim_mode == normal', 'Normal mode'],
  ['vim_mode == insert', 'Insert mode'],
  ['vim_mode == replace', 'Replace mode'],
  ['vim_operator', 'Operators & objects'],
  ['Workspace', 'Workspace'],
];
const conventionalKey =
  /(?:^| )(?:left|right|up|down|home|end|pageup|pagedown|insert|delete)(?: |$)/;
const duplicateControlChord = /^ctrl-w (?:ctrl-|shift-s$)/;

function projectUrl(path) {
  return new URL(`../${path}`, import.meta.url);
}

function readKeymap(path) {
  // These trusted repository files are JSONC and may contain trailing commas.
  const text = fs.readFileSync(projectUrl(path), 'utf8');
  return vm.runInNewContext(`(${text})`, Object.create(null), {
    timeout: 1000,
  });
}

function loadLabelFormatter() {
  const sandbox = { window: {} };
  vm.runInNewContext(
    fs.readFileSync(projectUrl('docs/labels.js'), 'utf8'),
    sandbox,
    { timeout: 1000 },
  );
  return sandbox.window.keymapLabel;
}

function getGroupName(context) {
  for (const [match, name] of contextGroups) {
    if (context.includes(match)) {
      return name;
    }
  }
  if (context === 'Global') {
    return 'Pane navigation';
  }
  if (context.startsWith('VimControl')) {
    return 'Vim motions & commands';
  }
  return context
    .split(/ &&| >| \|\|/)[0]
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^!/, 'Outside ');
}

function humanizeAction(action) {
  if (action === null) {
    return 'Disabled / reserved prefix';
  }
  const name = Array.isArray(action) ? action[0] : action;
  if (name === 'action::Sequence') {
    return action[1].map(humanizeAction).join(' → ');
  }
  if (name === 'workspace::SendKeystrokes') {
    return `Send ${action[1]}`;
  }
  return name
    .split('::')
    .at(-1)
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
}

function createRows(source, blocks) {
  const rows = [];
  for (const [index, block] of blocks.entries()) {
    const context = block.context || 'Global';
    // Keep shared Vim/Helix contexts from the Linux reference snapshot.
    if (source === 'vim') {
      if (/os == windows/.test(context)) {
        continue;
      }
      if (
        /helix/.test(context) &&
        !/vim_mode == (normal|visual|insert)|vim_operator == (a |i |cs )/.test(
          context,
        )
      ) {
        continue;
      }
    }
    for (const kind of ['bindings', 'unbind']) {
      for (const [key, action] of Object.entries(block[kind] ?? {})) {
        rows.push({
          source,
          context,
          group: getGroupName(context),
          block: index,
          key,
          action,
          label: humanizeAction(action),
          disabled: kind === 'unbind' || action === null,
          kind,
        });
      }
    }
  }
  return rows;
}

function sameAction(first, second) {
  return JSON.stringify(first.action) === JSON.stringify(second.action);
}

function markUnboundRows(customRows) {
  const unbinds = customRows.filter((row) => row.kind === 'unbind');
  for (const row of customRows) {
    if (
      row.kind === 'bindings' &&
      unbinds.some(
        (unbind) =>
          unbind.block > row.block &&
          unbind.context === row.context &&
          unbind.key === row.key &&
          sameAction(unbind, row),
      )
    ) {
      row.disabled = true;
      row.label = 'Removed by later unbind';
    }
  }
}

function isStandardAlias(row) {
  return conventionalKey.test(row.key) || duplicateControlChord.test(row.key);
}

function filterEffectiveRows(rows, customRows) {
  const bindings = customRows.filter((row) => row.kind === 'bindings');
  // Global overrides and exact-context replacements take precedence.
  return rows.filter(
    (row) =>
      row.source === 'custom' ||
      !bindings.some(
        (binding) =>
          binding.key === row.key &&
          (binding.context === 'Global' || binding.context === row.context),
      ),
  );
}

function filterVisibleRows(vimRows, effectiveRows) {
  // Compare full arguments and context before hiding conventional aliases.
  return vimRows.filter(
    (row) =>
      row.source !== 'vim' ||
      row.disabled ||
      !isStandardAlias(row) ||
      !effectiveRows.some(
        (other) =>
          other !== row &&
          !other.disabled &&
          !isStandardAlias(other) &&
          row.context === other.context &&
          sameAction(row, other),
      ),
  );
}

function describeRows(visibleRows, customRows, describe) {
  for (const row of visibleRows) {
    row.label = describe(row);
    assert(
      typeof row.label === 'string' && row.label.trim().length > 0,
      `Missing description: ${row.key}`,
    );
    assert(
      row.label.split(/\s+/).length <= 3,
      `Long description: ${row.label}`,
    );
  }
  for (const row of visibleRows) {
    if (row.source !== 'vim') {
      continue;
    }
    row.overrides = customRows
      .filter((custom) => custom.key === row.key)
      .map(({ context, label, action }) => ({ context, label, action }));
  }
}

function validateRows(rows, visible, effective, custom) {
  assert(visible.some((row) => row.key === 'h' && row.action === 'vim::Left'));
  assert(
    !visible.some((row) => row.key === 'left' && row.action === 'vim::Left'),
  );
  assert(
    visible.some(
      (row) =>
        row.key === 'ctrl-w h' && row.action === 'workspace::ActivatePaneLeft',
    ),
  );
  assert(
    !visible.some(
      (row) =>
        row.key === 'ctrl-w ctrl-h' &&
        row.action === 'workspace::ActivatePaneLeft',
    ),
  );
  // These are distinct Vim commands, even though the upstream action name is shared.
  assert(
    visible.some(
      (row) =>
        row.key === 'ctrl-p' && row.action === 'editor::ShowWordCompletions',
    ),
  );
  assert(
    visible.some(
      (row) =>
        row.key === 'ctrl-n' && row.action === 'editor::ShowWordCompletions',
    ),
  );
  assert.equal(
    rows.filter((row) => row.source === 'custom').length,
    custom.reduce(
      (count, block) =>
        count +
        Object.keys(block.bindings || {}).length +
        Object.keys(block.unbind || {}).length,
      0,
    ),
  );
  assert(
    effective.some(
      (row) =>
        row.context === 'ProjectPanel && not_editing' &&
        row.key === 'y' &&
        row.action === 'workspace::CopyRelativePath',
    ),
  );
  assert(
    effective.some(
      (row) =>
        row.context === 'ProjectPanel && not_editing' &&
        row.key === 'c' &&
        row.action === 'project_panel::Copy',
    ),
  );
}

function updateFile(path, content, checkOnly, message) {
  if (checkOnly) {
    assert.equal(fs.readFileSync(projectUrl(path), 'utf8'), content, message);
  } else {
    fs.writeFileSync(projectUrl(path), content);
  }
}

function updateAssetVersions(keymapContent, checkOnly) {
  let html = fs.readFileSync(projectUrl('docs/index.html'), 'utf8');
  for (const asset of ['style.css', 'keymaps.js', 'labels.js', 'app.js']) {
    const bytes =
      asset === 'keymaps.js'
        ? keymapContent
        : fs.readFileSync(projectUrl(`docs/${asset}`));
    const hash = createHash('sha256').update(bytes).digest('hex').slice(0, 12);
    const escaped = asset.replaceAll('.', '\\.');
    html = html.replace(
      new RegExp(`((?:src|href)="${escaped})(?:\\?v=[a-f0-9]+)?"`, 'g'),
      `$1?v=${hash}"`,
    );
  }
  updateFile(
    'docs/index.html',
    html,
    checkOnly,
    'Asset versions are stale. Run node scripts/build.mjs',
  );
}

function main() {
  const checkOnly = process.argv.includes('--check');
  const custom = readKeymap('keymap.json');
  const defaults = readKeymap('reference/vim.json');
  const customRows = createRows('custom', custom);
  const rows = [...customRows, ...createRows('vim', defaults)];
  markUnboundRows(customRows);
  const effective = filterEffectiveRows(rows, customRows);
  const vimScoped = effective.filter(isVimReference);
  const visible = filterVisibleRows(vimScoped, effective);
  validateRows(rows, visible, effective, custom);
  describeRows(visible, customRows, loadLabelFormatter());

  const content = `window.KEYMAP_DATA = ${JSON.stringify({ ...reference, rows: visible }, null, 2)};\n`;
  updateFile(
    'docs/keymaps.js',
    content,
    checkOnly,
    'Cheat sheet is stale. Run node scripts/build.mjs',
  );
  updateAssetVersions(content, checkOnly);
  console.log(
    `${customRows.length} custom entries; ${visible.filter((row) => row.source === 'vim').length} inherited Vim entries; ${effective.length - vimScoped.length} Zed UI shortcuts and ${vimScoped.length - visible.length} standard aliases hidden. Coverage OK.`,
  );
}

main();
