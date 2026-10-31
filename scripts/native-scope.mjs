// The upstream Vim file also includes ordinary Zed UI shortcuts.
// This policy affects documentation only; it never disables editor bindings.
const interfaceActions = new Set([
  'git_graph::FocusNextTabStop',
  'git_graph::FocusPreviousTabStop',
  'skill_creator::FocusNextField',
  'skill_creator::FocusPreviousField',
  'editor::AcceptEditPrediction',
  'agent::Chat',
  'notebook::Run',
  'notebook::RunAndAdvance',
]);
const interfaceKeys = new Set([
  'ctrl-pageup',
  'ctrl-pagedown',
  'ctrl-shift-v',
  'insert',
]);
const literalKeys = new Set(['ctrl-q', 'ctrl-shift-q']);
const traversalKeys = new Set(['tab', 'shift-tab']);

export function isVimReference(row) {
  if (row.source !== 'vim') {
    return true;
  }
  const action = Array.isArray(row.action) ? row.action[0] : row.action;
  // Literal entry documents characters produced after entering literal mode.
  if (action === 'vim::Literal') {
    return true;
  }
  if (interfaceActions.has(action) || interfaceKeys.has(row.key)) {
    return false;
  }
  if (/^ctrl-w shift-(left|right|up|down)$/.test(row.key)) {
    return false;
  }

  switch (action) {
    case 'vim::PushLiteral':
      return !literalKeys.has(row.key);
    case 'editor::ShowSignatureHelp':
      return row.key !== 'ctrl-s';
    case 'git_panel::FocusChanges':
      return !traversalKeys.has(row.key);
    case 'editor::ToggleFocus':
      return !(row.key === 'enter' && row.context.startsWith('OutlinePanel'));
    case 'menu::Cancel':
      return !(
        row.key === 'enter' && row.context === 'OutlinePanel && editing'
      );
    case 'notebook::EnterEditMode':
      return row.key !== 'enter';
    case 'editor::Newline':
      return !(row.key === 'enter' && row.context.startsWith('ThreadsSidebar'));
    default:
      // Retain Vim editing, text objects, motions, Ex entry, searches, Ctrl+w
      // windows, folds, LSP g-motions and Vim-style panel navigation.
      return true;
  }
}
