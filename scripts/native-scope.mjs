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
export function isVimReference(row) {
  if (row.source !== 'vim') return true;
  const action = Array.isArray(row.action) ? row.action[0] : row.action;
  // Literal entry documents characters produced after Ctrl+v, not UI shortcuts.
  if (action === 'vim::Literal') return true;
  if (action === 'vim::PushLiteral' && ['ctrl-q', 'ctrl-shift-q'].includes(row.key)) return false;
  if (interfaceActions.has(action)) return false;
  if (['ctrl-pageup', 'ctrl-pagedown', 'ctrl-shift-v', 'insert'].includes(row.key)) return false;
  if (/^ctrl-w shift-(left|right|up|down)$/.test(row.key)) return false;
  if (action === 'editor::ShowSignatureHelp' && row.key === 'ctrl-s') return false;
  if (action === 'git_panel::FocusChanges' && ['tab', 'shift-tab'].includes(row.key)) return false;
  if (action === 'editor::ToggleFocus' && row.key === 'enter' && row.context.startsWith('OutlinePanel')) return false;
  if (action === 'menu::Cancel' && row.key === 'enter' && row.context === 'OutlinePanel && editing') return false;
  if (action === 'notebook::EnterEditMode' && row.key === 'enter') return false;
  if (action === 'editor::Newline' && row.key === 'enter' && row.context.startsWith('ThreadsSidebar')) return false;
  // Retain Vim editing, text objects, motions, Ex entry, searches, Ctrl+w windows,
  // z-folds, LSP g-motions, and Vim-style panel navigation regardless of namespace.
  return true;
}
