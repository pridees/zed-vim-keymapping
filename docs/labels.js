'use strict';

(() => {
  // Curated descriptions: at most three words; full action details remain expandable.
  window.KEYMAP_LABELS = {
    'workspace::ActivatePaneLeft': 'Focus left pane',
    'workspace::ActivatePaneDown': 'Focus lower pane',
    'workspace::ActivatePaneUp': 'Focus upper pane',
    'workspace::ActivatePaneRight': 'Focus right pane',
    'multi_workspace::ToggleWorkspaceSidebar': 'Toggle workspace sidebar',
    'terminal_panel::Toggle': 'Toggle terminal panel',
    'editor::ToggleComments': 'Toggle line comments',
    'pane::ActivatePreviousItem': 'Previous tab',
    'pane::ActivateNextItem': 'Next tab',
    'pane::AlternateFile': 'Alternate tab',
    'pane::CloseOtherItems': 'Close other tabs',
    'pane::CloseItemsToTheLeft': 'Close left tabs',
    'pane::CloseItemsToTheRight': 'Close right tabs',
    'pane::CloseAllItems': 'Close all tabs',
    'pane::CloseCleanItems': 'Close unmodified tabs',
    'pane::TogglePinTab': 'Toggle tab pin',
    'pane::ReopenClosedItem': 'Reopen closed tab',
    'pane::SplitDown': 'Split pane down',
    'pane::SplitRight': 'Split pane right',
    'pane::DeploySearch': 'Search project',
    'outline::Toggle': 'Find file symbol',
    'project_symbols::Toggle': 'Find project symbol',
    'git_panel::ToggleFocus': 'Focus Git panel',
    'git::Diff': 'Open project diff',
    'git::CompareWithBranch': 'Compare with branch',
    'terminal_panel::ToggleFocus': 'Focus terminal panel',
    'editor::ToggleInlayHints': 'Toggle inlay hints',
    'editor::GoToDefinition': 'Jump to definition',
    'editor::FindAllReferences': 'Find symbol references',
    'editor::Rename': 'Rename symbol',
    'editor::ToggleCodeActions': 'Show code actions',
    'editor::Format': 'Format document',
    'editor::Hover': 'Show symbol information',
    'call_hierarchy::ShowIncomingCalls': 'Show incoming calls',
    'call_hierarchy::ShowOutgoingCalls': 'Show outgoing calls',
    'editor::RestartLanguageServer': 'Restart language server',
    'vim::InsertEmptyLineAbove': 'Blank line above',
    'vim::InsertEmptyLineBelow': 'Blank line below',
    'editor::FormatSelections': 'Format selection',
    'agent::FocusAgent': 'Focus agent panel',
    'agent::AddSelectionToThread': 'Attach selected context',
    'vim::MenuSelectNext': 'Select next item',
    'vim::MenuSelectPrevious': 'Select previous item',
    'project_panel::CollapseSelectedEntry': 'Collapse selected folder',
    'project_panel::OpenPermanent': 'Open selected file',
    'project_panel::OpenSplitVertical': 'Open right split',
    'project_panel::OpenSplitHorizontal': 'Open lower split',
    'project_panel::Open': 'Preview selected file',
    'workspace::OpenWithSystem': 'Open externally',
    'project_panel::SelectParent': 'Select parent folder',
    'menu::SelectFirst': 'Select first item',
    'menu::SelectLast': 'Select last item',
    'project_panel::CollapseAllEntries': 'Collapse all folders',
    'project_panel::NewFile': 'Create file',
    'project_panel::NewDirectory': 'Create folder',
    'project_panel::Rename': 'Rename selected entry',
    'project_panel::Delete': 'Delete selected entry',
    'project_panel::Trash': 'Trash selected entry',
    'project_panel::Copy': 'Copy selected entry',
    'project_panel::Cut': 'Cut selected entry',
    'project_panel::Paste': 'Paste copied entry',
    'workspace::CopyRelativePath': 'Copy relative path',
    'workspace::CopyPath': 'Copy full path',
    'project_panel::Undo': 'Undo file operation',
    'file_finder::Toggle': 'Find project file',
    'project_panel::ToggleHideHidden': 'Toggle hidden files',
    'project_panel::SelectPrevGitEntry': 'Previous changed file',
    'project_panel::SelectNextGitEntry': 'Next changed file',
    'project_panel::OpenContextMenu': 'Open context menu',
    'project_panel::Toggle': 'Toggle project tree',
    'agent::Toggle': 'Toggle agent panel',
    'agent::ToggleModelSelector': 'Choose agent model',
    'agent::ToggleThinkingEffortMenu': 'Choose reasoning effort',
    'git::ToggleStaged': 'Toggle staging',
    'git::Restore': 'Discard selected changes',
    'editor::OpenExcerpts': 'Open source files',
    'git::StageAll': 'Stage all changes',
    'git_panel::ToggleTreeView': 'Toggle tree layout',
    'git::Branch': 'Choose Git branch',
    'git::Pull': 'Pull Git changes',
    'git::Push': 'Push Git changes',
    'git::PullRebase': 'Pull with rebase',
    'git::Fetch': 'Fetch Git remotes',
    'git::ForcePush': 'Force Git push',
    'git::RestoreFile': 'Discard file changes',
    'git_panel::FocusEditor': 'Focus commit editor',
    'menu::Confirm': 'Confirm selected item',
    'menu::SecondaryConfirm': 'Alternate item action',
    'git::ViewFile': 'Open source file',
    'git::FileHistory': 'Show file history',
    'git_panel::FocusChanges': 'Focus changed files',
    'workspace::NewFile': 'New file',
    'projects::OpenRecent': 'Open recent project',
    'tab_switcher::OpenInActivePane': 'Choose open tab',
    'pane::CloseActiveItem': 'Close active tab',
    'git_graph::Open': 'Open Git graph',
    'diagnostics::Deploy': 'Show project diagnostics',
    'task::Spawn': 'Run task',
    'task::Rerun': 'Rerun last task',
    'workspace::ToggleLeftDock': 'Toggle left dock',
    'workspace::ToggleBottomDock': 'Toggle bottom dock',
    'workspace::ToggleRightDock': 'Toggle right dock',
    'workspace::ToggleAllDocks': 'Toggle all docks',
    'git_panel::Toggle': 'Toggle Git panel',
    'outline_panel::Toggle': 'Toggle outline panel',
    'debug_panel::Toggle': 'Toggle debug panel',
    'collab_panel::Toggle': 'Toggle collaboration panel',
    'workspace::ToggleZoom': 'Toggle pane zoom',
    'lsp_tool::ToggleMenu': 'Open LSP tools',
    'workspace::ResetPaneSizes': 'Equalize pane sizes',
    'editor::ToggleFocus': 'Focus editor',
    'vim::StartOfLine': 'Line start',
    'vim::PushObject': 'Choose text object',
    'vim::Left': 'Move left',
    'vim::WrappingLeft': 'Move left wrapping',
    'vim::Down': 'Move down',
    'vim::NextLineStart': 'Next line start',
    'vim::PreviousLineStart': 'Previous line start',
    'vim::Tab': 'Next tab stop',
    'vim::Up': 'Move up',
    'vim::Right': 'Move right',
    'vim::EndOfLine': 'Line end',
    'vim::FirstNonWhitespace': 'First nonblank character',
    'vim::StartOfLineDownward': 'Counted line start',
    'vim::EndOfLineDownward': 'Counted line end',
    'vim::EndOfDocument': 'Document end',
    'vim::StartOfParagraph': 'Previous paragraph boundary',
    'vim::EndOfParagraph': 'Next paragraph boundary',
    'vim::SentenceBackward': 'Previous sentence',
    'vim::SentenceForward': 'Next sentence',
    'vim::GoToColumn': 'Go to column',
    'vim::NextWordStart': 'Next word start',
    'vim::NextWordEnd': 'Next word end',
    'vim::PreviousWordStart': 'Previous word start',
    'vim::PreviousWordEnd': 'Previous word end',
    'vim::MoveToNext': 'Next matching word',
    'vim::MoveToPrevious': 'Previous matching word',
    'vim::MoveToNextMatch': 'Next search match',
    'vim::MoveToPreviousMatch': 'Previous search match',
    'vim::Matching': 'Jump matching bracket',
    'vim::PushMark': 'Set named mark',
    'vim::RepeatFind': 'Repeat character search',
    'vim::RepeatFindReversed': 'Reverse character search',
    'pane::GoBack': 'Previous navigation location',
    'pane::GoForward': 'Next navigation location',
    'pane::GoToOlderTag': 'Previous definition jump',
    'vim::SwitchToNormalMode': 'Enter Normal mode',
    'vim::ToggleVisual': 'Toggle character selection',
    'vim::ToggleVisualLine': 'Toggle line selection',
    'vim::ShowLocation': 'Show cursor location',
    'vim::ToggleVisualBlock': 'Toggle block selection',
    'vim::ToggleReplace': 'Enter Replace mode',
    'vim::PageDown': 'Page down',
    'vim::PageUp': 'Page up',
    'vim::ScrollDown': 'Half-page down',
    'vim::ScrollUp': 'Half-page up',
    'vim::LineDown': 'Scroll line down',
    'vim::LineUp': 'Scroll line up',
    'vim::PushReplaceWithRegister': 'Replace using register',
    'editor::GoToImplementation': 'Jump to implementation',
    'vim::StartOfDocument': 'Document start',
    'editor::BlameHover': 'Show line blame',
    'editor::GoToDeclaration': 'Jump to declaration',
    'editor::GoToTypeDefinition': 'Jump to type',
    'editor::OpenUrl': 'Open URL',
    'editor::OpenSelectedFilename': 'Open referenced file',
    'vim::SelectNextMatch': 'Select search match',
    'vim::SelectPreviousMatch': 'Select previous match',
    'vim::SelectNext': 'Select next occurrence',
    'vim::SelectPrevious': 'Select previous occurrence',
    'editor::SelectNext': 'Select next match',
    'editor::SelectPrevious': 'Select previous match',
    'editor::SelectAllMatches': 'Select all matches',
    'vim::MiddleOfLine': 'Line midpoint',
    'vim::RestoreVisualSelection': 'Restore previous selection',
    'editor::GoToDiagnostic': 'Next diagnostic',
    'editor::GoToPreviousDiagnostic': 'Previous diagnostic',
    'vim::InsertAtPrevious': 'Resume previous insertion',
    'vim::ChangeListNewer': 'Newer edit location',
    'vim::ChangeListOlder': 'Older edit location',
    'vim::WindowTop': 'Viewport top line',
    'vim::WindowMiddle': 'Viewport middle line',
    'vim::WindowBottom': 'Viewport bottom line',
    'vim::ToggleRecord': 'Toggle macro recording',
    'vim::ReplayLastRecording': 'Replay last macro',
    'vim::PushReplayRegister': 'Replay register macro',
    'editor::ScrollCursorTop': 'Align cursor top',
    'editor::ScrollCursorCenter': 'Center cursor vertically',
    'editor::ScrollCursorBottom': 'Align cursor bottom',
    'editor::ToggleFold': 'Toggle code fold',
    'editor::ToggleFoldRecursive': 'Toggle nested folds',
    'editor::Fold': 'Fold code',
    'editor::FoldRecursive': 'Fold nested code',
    'editor::UnfoldLines': 'Unfold code',
    'editor::UnfoldRecursive': 'Unfold nested code',
    'editor::FoldSelectedRanges': 'Fold selection',
    'editor::FoldAll': 'Fold all code',
    'editor::UnfoldAll': 'Unfold all code',
    'vim::ColumnRight': 'Scroll column right',
    'vim::ColumnLeft': 'Scroll column left',
    'vim::HalfPageRight': 'Half-page right',
    'vim::HalfPageLeft': 'Half-page left',
    'editor::GoToDefinitionSplit': 'Split definition view',
    'editor::GoToTypeDefinitionSplit': 'Split type view',
    'editor::OpenExcerptsSplit': 'Split source files',
    'vim::Repeat': 'Repeat last change',
    'vim::NextSectionStart': 'Next section start',
    'vim::NextSectionEnd': 'Next section end',
    'vim::PreviousSectionStart': 'Previous section start',
    'vim::PreviousSectionEnd': 'Previous section end',
    'vim::NextMethodStart': 'Next method start',
    'vim::NextMethodEnd': 'Next method end',
    'vim::PreviousMethodStart': 'Previous method start',
    'vim::PreviousMethodEnd': 'Previous method end',
    'vim::PreviousComment': 'Previous comment',
    'vim::NextComment': 'Next comment',
    'vim::PreviousLesserIndent': 'Previous shallower indent',
    'vim::PreviousGreaterIndent': 'Previous deeper indent',
    'vim::PreviousSameIndent': 'Previous equal indent',
    'vim::NextLesserIndent': 'Next shallower indent',
    'vim::NextGreaterIndent': 'Next deeper indent',
    'vim::NextSameIndent': 'Next equal indent',
    'pane::ActivateLastItem': 'Last tab',
    'pane::ActivateItem': 'First tab',
    'editor::MoveLineUp': 'Move line up',
    'editor::MoveLineDown': 'Move line down',
    'workspace::FollowNextCollaborator': 'Follow next collaborator',
    'vim::GoToPreviousReference': 'Previous symbol reference',
    'vim::GoToNextReference': 'Next symbol reference',
    'vim::SelectLargerSyntaxNode': 'Expand syntax selection',
    'vim::SelectSmallerSyntaxNode': 'Shrink syntax selection',
    'vim::InsertBefore': 'Insert before cursor',
    'vim::InsertAfter': 'Insert after cursor',
    'editor::Cancel': 'Cancel editor action',
    'command_palette::Toggle': 'Open command palette',
    'vim::PushChange': 'Change motion target',
    'vim::ChangeToEndOfLine': 'Change line suffix',
    'vim::PushDelete': 'Delete motion target',
    'vim::DeleteRight': 'Delete next character',
    'vim::JoinLinesNoWhitespace': 'Join without spaces',
    'vim::PushYank': 'Copy motion target',
    'vim::YankLine': 'Copy current line',
    'vim::DeleteLeft': 'Delete previous character',
    'vim::Increment': 'Increment number',
    'vim::Decrement': 'Decrement number',
    'vim::Redo': 'Redo change',
    'vim::PushIndent': 'Indent motion target',
    'vim::PushOutdent': 'Outdent motion target',
    'vim::PushAutoIndent': 'Reindent motion target',
    'vim::PushShellCommand': 'Filter motion target',
    'vim::PushLowercase': 'Lowercase motion target',
    'vim::PushUppercase': 'Uppercase motion target',
    'vim::PushOppositeCase': 'Invert target case',
    'vim::PushRot13': 'ROT13 motion target',
    'vim::PushRewrap': 'Rewrap motion target',
    'editor::GoToHunk': 'Next diff hunk',
    'editor::GoToPreviousHunk': 'Previous diff hunk',
    'vim::PushToggleComments': 'Comment motion target',
    'vim::PushToggleBlockComments': 'Block-comment motion target',
    'vim::CountCommand': 'Command counted lines',
    'vim::GoToPercentage': 'Jump file percentage',
    'vim::VisualCommand': 'Command selected range',
    'vim::ConvertToLowerCase': 'Lowercase selection',
    'vim::ConvertToUpperCase': 'Uppercase selection',
    'vim::OtherEnd': 'Opposite selection corner',
    'vim::OtherEndRowAware': 'Opposite selection endpoint',
    'vim::VisualDelete': 'Delete selection',
    'vim::VisualDeleteLine': 'Delete selected lines',
    'vim::VisualYank': 'Copy selection',
    'vim::VisualYankLine': 'Copy selected lines',
    'vim::Paste': 'Paste register',
    'vim::Substitute': 'Replace selection',
    'vim::SubstituteLine': 'Replace selected lines',
    'vim::ChangeCase': 'Invert character case',
    'vim::VisualInsertFirstNonWhiteSpace': 'Insert line starts',
    'vim::VisualInsertEndOfLine': 'Append selected lines',
    'vim::JoinLines': 'Join with spaces',
    'vim::PushReplace': 'Replace character',
    'vim::Indent': 'Indent selection',
    'vim::Outdent': 'Outdent selection',
    'vim::AutoIndent': 'Reindent selection',
    'vim::ShellCommand': 'Filter selected text',
    'vim::ToggleComments': 'Toggle line comments',
    'vim::ToggleBlockComments': 'Toggle block comments',
    'vim::Rewrap': 'Rewrap selected text',
    'vim::ConvertToRot13': 'ROT13 selection',
    'vim::PushRegister': 'Choose register',
    'vim::NormalBefore': 'Exit insertion',
    'editor::ShowCompletions': 'Show completions',
    'assistant::InlineAssist': 'Open inline assistant',
    'editor::ShowEditPrediction': 'Show edit prediction',
    'editor::DeleteToPreviousWordStart': 'Delete previous word',
    'editor::DeleteToBeginningOfLine': 'Delete line prefix',
    'vim::InsertFromAbove': 'Copy character above',
    'vim::InsertFromBelow': 'Copy character below',
    'vim::PushLiteral': 'Quote next character',
    'editor::Paste': 'Paste clipboard',
    'vim::TemporaryNormal': 'One Normal command',
    'editor::ShowSignatureHelp': 'Show function signature',
    'vim::DeleteToEndOfLine': 'Delete line suffix',
    'vim::InsertFirstNonWhitespace': 'Insert line start',
    'vim::InsertEndOfLine': 'Append line end',
    'vim::InsertLineBelow': 'Insert line below',
    'vim::InsertLineAbove': 'Insert line above',
    'vim::Undo': 'Undo change',
    'vim::UndoLastLine': 'Undo line changes',
    'editor::ShowWordCompletions': 'Complete buffer word',
    'editor::SignatureHelpPrevious': 'Previous function signature',
    'editor::SignatureHelpNext': 'Next function signature',
    'vim::UndoReplace': 'Undo character replacement',
    'vim::Enter': 'Insert newline',
    'vim::ClearOperators': 'Cancel pending operator',
    'vim::Comment': 'Comment text object',
    'vim::Word': 'Word text object',
    'vim::Tag': 'Tag text object',
    'vim::Sentence': 'Sentence text object',
    'vim::Paragraph': 'Paragraph text object',
    'vim::Quotes': 'Single-quoted text',
    'vim::BackQuotes': 'Backtick-quoted text',
    'vim::DoubleQuotes': 'Double-quoted text',
    'vim::MiniQuotes': 'Nearest quoted text',
    'vim::VerticalBars': 'Bar-delimited text',
    'vim::Parentheses': 'Parenthesized text',
    'vim::SquareBrackets': 'Square-bracketed text',
    'vim::CurlyBrackets': 'Brace-delimited text',
    'vim::AngleBrackets': 'Angle-bracketed text',
    'vim::Argument': 'Argument text object',
    'vim::IndentObj': 'Indentation text object',
    'vim::Method': 'Method text object',
    'vim::Class': 'Class text object',
    'vim::EntireFile': 'Entire file object',
    'vim::AnyPair': 'Nearest paired delimiters',
    'vim::CurrentLine': 'Current line object',
    'vim::Exchange': 'Exchange text regions',
    'vim::PushChangeSurrounds': 'Change surrounding delimiters',
    'vim::PushDeleteSurrounds': 'Delete surrounding delimiters',
    'vim::PushForcedMotion': 'Force motion type',
    'editor::ToggleSelectedDiffHunks': 'Toggle diff hunks',
    'git::StageAndNext': 'Stage; next hunk',
    'git::UnstageAndNext': 'Unstage; next hunk',
    'vim::PushAddSurrounds': 'Add surrounding delimiters',
    'vim::ClearExchange': 'Cancel text exchange',
    'vim::Literal': 'Literal control character',
    'vim::SearchSubmit': 'Confirm search',
    'buffer_search::Dismiss': 'Close file search',
    'workspace::SwapPaneLeft': 'Swap pane left',
    'workspace::SwapPaneRight': 'Swap pane right',
    'workspace::SwapPaneUp': 'Swap pane up',
    'workspace::SwapPaneDown': 'Swap pane down',
    'workspace::SwapPaneAdjacent': 'Swap adjacent panes',
    'workspace::MovePaneLeft': 'Move pane left',
    'workspace::MovePaneRight': 'Move pane right',
    'workspace::MovePaneUp': 'Move pane up',
    'workspace::MovePaneDown': 'Move pane down',
    'vim::ResizePaneRight': 'Widen pane',
    'vim::ResizePaneLeft': 'Narrow pane',
    'vim::ResizePaneDown': 'Shorten pane',
    'vim::ResizePaneUp': 'Heighten pane',
    'vim::MaximizePane': 'Maximize pane',
    'vim::ResetPaneSizes': 'Equalize pane sizes',
    'workspace::ActivateNextPane': 'Focus next pane',
    'workspace::ActivatePreviousPane': 'Focus previous pane',
    'pane::SplitVertical': 'Split pane right',
    'pane::SplitHorizontal': 'Split pane down',
    'workspace::CloseInactiveTabsAndPanes': 'Keep active editor',
    'workspace::NewFileSplitHorizontal': 'New split file',
    'vim::GoToTab': 'Next tab',
    'vim::GoToPreviousTab': 'Previous tab',
    'vim::ToggleProjectPanelFocus': 'Toggle project focus',
    'project_panel::CompareMarkedFiles': 'Compare marked files',
    'project_panel::SelectNextDiagnostic': 'Next diagnostic file',
    'project_panel::SelectPrevDiagnostic': 'Previous diagnostic file',
    'project_panel::SelectNextDirectory': 'Next folder',
    'project_panel::SelectPrevDirectory': 'Previous folder',
    'project_panel::ScrollUp': 'Scroll tree up',
    'project_panel::ScrollDown': 'Scroll tree down',
    'project_panel::ScrollCursorTop': 'Align selection top',
    'project_panel::ScrollCursorCenter': 'Center selected entry',
    'project_panel::ScrollCursorBottom': 'Align selection bottom',
    'outline_panel::CollapseSelectedEntry': 'Collapse outline entry',
    'outline_panel::ExpandSelectedEntry': 'Expand outline entry',
    'outline_panel::SelectParent': 'Select parent symbol',
    'menu::Cancel': 'Dismiss menu',
    'outline_panel::ScrollUp': 'Scroll outline up',
    'outline_panel::ScrollDown': 'Scroll outline down',
    'outline_panel::ScrollCursorTop': 'Align selection top',
    'outline_panel::ScrollCursorCenter': 'Center selected symbol',
    'outline_panel::ScrollCursorBottom': 'Align selection bottom',
    'git_graph::FocusNextTabStop': 'Focus next control',
    'git_graph::FocusPreviousTabStop': 'Focus previous control',
    'git_graph::ScrollDown': 'Scroll graph down',
    'git_graph::ScrollUp': 'Scroll graph up',
    'menu::SelectNext': 'Select next item',
    'menu::SelectPrevious': 'Select previous item',
    'git_panel::CollapseSelectedEntry': 'Collapse selected folder',
    'git_panel::ExpandSelectedEntry': 'Expand selected folder',
    'git::StageRange': 'Stage selected range',
    'git::UnstageAll': 'Unstage all changes',
    'editor::AcceptEditPrediction': 'Accept edit prediction',
    'agent::Chat': 'Send agent message',
    'settings_editor::ExpandNavEntry': 'Expand settings section',
    'settings_editor::CollapseNavEntry': 'Collapse settings section',
    'settings_editor::FocusPreviousNavEntry': 'Previous settings section',
    'settings_editor::FocusNextNavEntry': 'Next settings section',
    'settings_editor::FocusFirstNavEntry': 'First settings section',
    'settings_editor::FocusLastNavEntry': 'Last settings section',
    'markdown::ScrollPageUp': 'Page preview up',
    'markdown::ScrollPageDown': 'Page preview down',
    'markdown::ScrollUp': 'Scroll preview up',
    'markdown::ScrollDown': 'Scroll preview down',
    'markdown::ScrollToTop': 'Preview start',
    'markdown::ScrollToBottom': 'Preview end',
    'buffer_search::Deploy': 'Search current view',
    'notebook::NotebookMoveDown': 'Next notebook cell',
    'notebook::NotebookMoveUp': 'Previous notebook cell',
    'notebook::EnterCommandMode': 'Enter Command mode',
    'notebook::EnterEditMode': 'Edit notebook cell',
    'notebook::RunAndAdvance': 'Run; next cell',
    'notebook::Run': 'Run notebook cell',
    'menu::SelectParent': 'Select parent item',
    'menu::SelectChild': 'Select child item',
    'agents_sidebar::FocusSidebarFilter': 'Filter agent threads',
    'agent::RemoveSelectedThread': 'Delete selected thread',
    'agents_sidebar::NewThreadInGroup': 'New group thread',
    'multi_workspace::NextProject': 'Next workspace project',
    'multi_workspace::PreviousProject': 'Previous workspace project',
    'editor::MoveDown': 'Move cursor down',
    'editor::MoveUp': 'Move cursor up',
    'vim::SwitchToInsertMode': 'Enter Insert mode',
    'editor::Newline': 'Insert newline',
    'skill_creator::FocusNextField': 'Focus next field',
    'skill_creator::FocusPreviousField': 'Focus previous field',
  };

  const sequenceLabels = {
    'space a d': 'Attach diagnostics context',
    'space a n': 'New agent thread',
    'space a c': 'Choose agent context',
    'space a r': 'Review agent changes',
    'space w q': 'Close active dock',
    'space w shift-q': 'Close all docks',
    'space w s': 'Split editor down',
    'space w v': 'Split editor right',
    'space w shift-o': 'Join editor panes',
    'l': 'Focus selected diff',
  };

  const keystrokeLabels = {
    'y s': 'Add surrounding delimiters',
    'd s': 'Delete surrounding delimiters',
    'c s': 'Change surrounding delimiters',
    'z t ^': 'Top-align line start',
    'z b ^': 'Bottom-align line start',
    'shift-h k z b ^': 'Previous screenful',
    'shift-l j z t ^': 'Next screenful',
    'z z ^': 'Center line start',
  };

  const displayLineLabels = {
    'vim::Down': 'Screen line down',
    'vim::Up': 'Screen line up',
    'vim::StartOfLine': 'Screen line start',
    'vim::EndOfLine': 'Screen line end',
    'vim::MiddleOfLine': 'Screen line midpoint',
    'vim::FirstNonWhitespace': 'Screen first nonblank',
  };

  window.keymapLabel = function describeBinding(row) {
    const action = Array.isArray(row.action) ? row.action[0] : row.action;
    const args = Array.isArray(row.action) ? row.action[1] : null;
    if (row.kind === 'unbind' || (row.disabled && action !== null)) {
      return 'Binding removed';
    }
    if (row.disabled) {
      return 'Disabled / prefix';
    }

    switch (action) {
      case 'action::Sequence':
        return sequenceLabels[row.key];
      case 'workspace::SendKeystrokes':
        return keystrokeLabels[args];
      case 'pane::CloseActiveItem':
        if (args?.close_pinned) {
          return 'Close any tab';
        }
        if (args?.save_intent === 'skip') {
          return 'Close without saving';
        }
        return 'Close active tab';
      case 'pane::DeploySearch':
        if (args?.replace_enabled) {
          return 'Replace across project';
        }
        break;
      case 'menu::Confirm':
        if (row.context.includes('GitPanel')) {
          return 'Open project diff';
        }
        break;
      case 'menu::SecondaryConfirm':
        if (row.context.includes('GitPanel')) {
          return 'Open file diff';
        }
        break;
      case 'editor::SelectNext':
        return args?.replace_newest
          ? 'Skip match forward'
          : 'Select next match';
      case 'editor::SelectPrevious':
        return args?.replace_newest
          ? 'Skip match backward'
          : 'Select previous match';
      case 'vim::PushObject':
        return args?.around ? 'Around text object' : 'Inside text object';
      case 'vim::Number':
        return `Count digit ${args}`;
      case 'vim::Search':
        return args?.backwards ? 'Search backward' : 'Search forward';
      case 'vim::PushFindForward':
        return args?.before ? 'Till next character' : 'Find next character';
      case 'vim::PushFindBackward':
        return args?.after
          ? 'Till previous character'
          : 'Find previous character';
      case 'vim::PushJump':
        return args?.line ? 'Jump mark line' : 'Jump mark position';
      case 'vim::UnmatchedForward':
        return `Next unmatched ${args.char}`;
      case 'vim::UnmatchedBackward':
        return `Previous unmatched ${args.char}`;
      case 'vim::Paste':
        if (args?.preserve_clipboard) {
          return 'Paste preserving register';
        }
        if (args?.before) {
          return 'Paste before cursor';
        }
        return row.context.includes('visual')
          ? 'Paste over selection'
          : 'Paste after cursor';
    }

    if (args?.step && action === 'vim::Increment') {
      return 'Increment progressive sequence';
    }
    if (args?.step && action === 'vim::Decrement') {
      return 'Decrement progressive sequence';
    }
    if (args?.partial_word) {
      return action === 'vim::MoveToNext'
        ? 'Next substring match'
        : 'Previous substring match';
    }
    if (args?.display_lines) {
      return displayLineLabels[action];
    }
    if (action === 'vim::IndentObj' && args?.include_below) {
      return 'Indentation including below';
    }
    const text = window.KEYMAP_LABELS[action];
    return args?.ignore_punctuation ? text?.replace(/word/i, 'WORD') : text;
  };
})();
