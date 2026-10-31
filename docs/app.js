'use strict';

(() => {
  const rows = window.KEYMAP_DATA.rows;
  const describeBinding = window.keymapLabel;
  const elements = {
    search: document.querySelector('#search'),
    group: document.querySelector('#group'),
    disabled: document.querySelector('#disabled'),
    count: document.querySelector('#count'),
    empty: document.querySelector('#empty'),
    cards: document.querySelector('#cards'),
    sources: document.querySelector('#sources'),
    fullscreen: document.querySelector('#fullscreen'),
  };
  const sourceButtons = document.querySelectorAll('#sources button');
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  const keyNames = {
    ctrl: 'Ctrl',
    alt: 'Alt',
    shift: 'Shift',
    cmd: 'Cmd',
    space: 'Space',
    enter: 'Enter',
    escape: 'Esc',
    backspace: 'Backspace',
    tab: 'Tab',
    up: '↑',
    down: '↓',
    left: '←',
    right: '→',
  };
  let selectedSource = 'custom';

  function escapeHtml(value) {
    return String(value).replace(
      /[&<>"']/g,
      (character) => htmlEntities[character],
    );
  }

  function formatKey(key) {
    if (key.startsWith('shift-') && key.length === 7) {
      return key.at(-1).toUpperCase();
    }
    return key
      .split('-')
      .map((part) => keyNames[part] ?? part)
      .join('+');
  }

  function matchesSource(row) {
    return selectedSource === 'all' || row.source === selectedSource;
  }

  function renderOverrides(overrides = []) {
    if (overrides.length === 0) {
      return '';
    }
    const rules = overrides
      .map(
        (override) =>
          `<p>${escapeHtml(override.label)}<br>${escapeHtml(override.context)}</p>`,
      )
      .join('');
    return `<strong>CUSTOM RULES FOR THIS KEY</strong>${rules}`;
  }

  function renderBinding(row) {
    const keys = row.key
      .split(' ')
      .map((key) => `<kbd>${escapeHtml(formatKey(key))}</kbd>`)
      .join('');
    const overrideTag =
      row.overrides?.length > 0
        ? '<small class="tag">CONTEXT OVERRIDES</small>'
        : '';

    return `<details class="${row.disabled ? 'disabled' : ''}">
      <summary>
        <span class="keys">${keys}</span>
        <span class="description">${escapeHtml(describeBinding(row))}${overrideTag}</span>
      </summary>
      <div class="meta">
        <strong>CONTEXT</strong><p>${escapeHtml(row.context)}</p>
        <pre>${escapeHtml(JSON.stringify(row.action, null, 2))}</pre>
        ${renderOverrides(row.overrides)}
      </div>
    </details>`;
  }

  function renderGroup(name, bindings) {
    return `<article class="card">
      <h2>${escapeHtml(name)}<span>${String(bindings.length).padStart(2, '0')}</span></h2>
      ${bindings.map(renderBinding).join('')}
    </article>`;
  }

  function render() {
    const query = elements.search.value.trim().toLowerCase();
    const selectedGroup = elements.group.value;
    const showDisabled = elements.disabled.checked;
    const filteredRows = rows.filter((row) => {
      if (!matchesSource(row)) {
        return false;
      }
      if (selectedGroup !== '' && row.group !== selectedGroup) {
        return false;
      }
      if (!showDisabled && row.disabled) {
        return false;
      }
      if (query === '') {
        return true;
      }
      const searchText = [
        row.key,
        formatKey(row.key),
        describeBinding(row),
        row.context,
        JSON.stringify(row.action),
      ]
        .join(' ')
        .toLowerCase();
      return searchText.includes(query);
    });

    elements.count.textContent = `${filteredRows.length} BINDINGS`;
    elements.empty.hidden = filteredRows.length > 0;
    const groupedRows = new Map();
    for (const row of filteredRows) {
      const prefix =
        selectedSource === 'all'
          ? `${row.source === 'custom' ? 'Custom' : 'Native'} / `
          : '';
      const name = prefix + row.group;
      if (!groupedRows.has(name)) {
        groupedRows.set(name, []);
      }
      groupedRows.get(name).push(row);
    }
    elements.cards.innerHTML = [...groupedRows]
      .map(([name, bindings]) => renderGroup(name, bindings))
      .join('');
  }

  function renderGroupOptions() {
    const groups = [
      ...new Set(rows.filter(matchesSource).map((row) => row.group)),
    ].sort();
    elements.group.innerHTML =
      '<option value="">All contexts</option>' +
      groups.map((group) => `<option>${escapeHtml(group)}</option>`).join('');
  }

  function handleSourceChange(event) {
    const button = event.target.closest('button');
    if (!button || !elements.sources.contains(button)) {
      return;
    }
    selectedSource = button.dataset.source;
    for (const sourceButton of sourceButtons) {
      sourceButton.setAttribute(
        'aria-pressed',
        String(sourceButton === button),
      );
    }
    renderGroupOptions();
    render();
  }

  function handleKeydown(event) {
    const activeElement = document.activeElement;
    const isEditing =
      ['INPUT', 'SELECT', 'TEXTAREA'].includes(activeElement?.tagName) ||
      activeElement?.isContentEditable;
    if (event.key === '/' && !isEditing) {
      event.preventDefault();
      elements.search.focus();
    }
    if (event.key === 'Escape' && activeElement === elements.search) {
      elements.search.value = '';
      elements.search.blur();
      render();
    }
  }

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      elements.fullscreen.textContent = 'Use F11';
    }
  }

  elements.sources.addEventListener('click', handleSourceChange);
  elements.search.addEventListener('input', render);
  elements.group.addEventListener('change', render);
  elements.disabled.addEventListener('change', render);
  document.addEventListener('keydown', handleKeydown);
  elements.fullscreen.addEventListener('click', toggleFullscreen);
  renderGroupOptions();
  render();
})();
