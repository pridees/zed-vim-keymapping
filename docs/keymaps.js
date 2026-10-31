window.KEYMAP_DATA = {
  "version": "1.25.3",
  "commit": "8dd255c3eafb5231056fe4e6f601cedd011f1c93",
  "rows": [
    {
      "source": "custom",
      "context": "Global",
      "group": "Pane navigation",
      "block": 0,
      "key": "ctrl-h",
      "action": "workspace::ActivatePaneLeft",
      "label": "Focus left pane",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Global",
      "group": "Pane navigation",
      "block": 0,
      "key": "ctrl-j",
      "action": "workspace::ActivatePaneDown",
      "label": "Focus lower pane",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Global",
      "group": "Pane navigation",
      "block": 0,
      "key": "ctrl-k",
      "action": "workspace::ActivatePaneUp",
      "label": "Focus upper pane",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Global",
      "group": "Pane navigation",
      "block": 0,
      "key": "ctrl-l",
      "action": "workspace::ActivatePaneRight",
      "label": "Focus right pane",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Workspace",
      "group": "Workspace",
      "block": 2,
      "key": "alt-r",
      "action": "multi_workspace::ToggleWorkspaceSidebar",
      "label": "Toggle workspace sidebar",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Workspace",
      "group": "Workspace",
      "block": 3,
      "key": "ctrl-alt-j",
      "action": "multi_workspace::ToggleWorkspaceSidebar",
      "label": "Binding removed",
      "disabled": true,
      "kind": "unbind"
    },
    {
      "source": "custom",
      "context": "Workspace",
      "group": "Workspace",
      "block": 4,
      "key": "ctrl-/",
      "action": "terminal_panel::Toggle",
      "label": "Toggle terminal panel",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Workspace",
      "group": "Workspace",
      "block": 5,
      "key": "ctrl-`",
      "action": "terminal_panel::Toggle",
      "label": "Binding removed",
      "disabled": true,
      "kind": "unbind"
    },
    {
      "source": "custom",
      "context": "Editor",
      "group": "Editor",
      "block": 6,
      "key": "ctrl-/",
      "action": [
        "editor::ToggleComments",
        {
          "advance_downwards": false,
          "comment_empty_lines": true
        }
      ],
      "label": "Binding removed",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor",
      "group": "Editor",
      "block": 7,
      "key": "ctrl-/",
      "action": [
        "editor::ToggleComments",
        {
          "advance_downwards": false,
          "comment_empty_lines": true
        }
      ],
      "label": "Binding removed",
      "disabled": true,
      "kind": "unbind"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "shift-h",
      "action": "pane::ActivatePreviousItem",
      "label": "Previous tab",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "shift-l",
      "action": "pane::ActivateNextItem",
      "label": "Next tab",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space b b",
      "action": "pane::AlternateFile",
      "label": "Alternate tab",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space b o",
      "action": "pane::CloseOtherItems",
      "label": "Close other tabs",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space b h",
      "action": "pane::CloseItemsToTheLeft",
      "label": "Close left tabs",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space b l",
      "action": "pane::CloseItemsToTheRight",
      "label": "Close right tabs",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space b a",
      "action": "pane::CloseAllItems",
      "label": "Close all tabs",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space b c",
      "action": "pane::CloseCleanItems",
      "label": "Close unmodified tabs",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space b p",
      "action": "pane::TogglePinTab",
      "label": "Toggle tab pin",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space b u",
      "action": "pane::ReopenClosedItem",
      "label": "Reopen closed tab",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space -",
      "action": "pane::SplitDown",
      "label": "Split pane down",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space |",
      "action": "pane::SplitRight",
      "label": "Split pane right",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space /",
      "action": "pane::DeploySearch",
      "label": "Search project",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space s g",
      "action": "pane::DeploySearch",
      "label": "Search project",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space s r",
      "action": [
        "pane::DeploySearch",
        {
          "replace_enabled": true
        }
      ],
      "label": "Replace across project",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space s s",
      "action": "outline::Toggle",
      "label": "Find file symbol",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space s shift-s",
      "action": "project_symbols::Toggle",
      "label": "Find project symbol",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space g",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space g g",
      "action": "git_panel::ToggleFocus",
      "label": "Focus Git panel",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space g d",
      "action": "git::Diff",
      "label": "Open project diff",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space g shift-d",
      "action": "git::CompareWithBranch",
      "label": "Compare with branch",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space t",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space u h",
      "action": "editor::ToggleInlayHints",
      "label": "Toggle inlay hints",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "g d",
      "action": "editor::GoToDefinition",
      "label": "Jump to definition",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "g r",
      "action": "editor::FindAllReferences",
      "label": "Find symbol references",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space c r",
      "action": "editor::Rename",
      "label": "Rename symbol",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space c a",
      "action": "editor::ToggleCodeActions",
      "label": "Show code actions",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space c f",
      "action": "editor::Format",
      "label": "Format document",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space c d",
      "action": "editor::Hover",
      "label": "Show symbol information",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space c s",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space c i",
      "action": "call_hierarchy::ShowIncomingCalls",
      "label": "Show incoming calls",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space c o",
      "action": "call_hierarchy::ShowOutgoingCalls",
      "label": "Show outgoing calls",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space c l",
      "action": "editor::RestartLanguageServer",
      "label": "Restart language server",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "g s",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "g s a",
      "action": [
        "workspace::SendKeystrokes",
        "y s"
      ],
      "label": "Add surrounding delimiters",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "g s d",
      "action": [
        "workspace::SendKeystrokes",
        "d s"
      ],
      "label": "Delete surrounding delimiters",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "g s r",
      "action": [
        "workspace::SendKeystrokes",
        "c s"
      ],
      "label": "Change surrounding delimiters",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 9,
      "key": "ctrl-v",
      "action": "editor::Paste",
      "label": "Paste clipboard",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 9,
      "key": "ctrl-q",
      "action": [
        "vim::PushLiteral",
        {}
      ],
      "label": "Quote next character",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "vim_mode == replace",
      "group": "Replace mode",
      "block": 10,
      "key": "ctrl-v",
      "action": "editor::Paste",
      "label": "Paste clipboard",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "vim_mode == replace",
      "group": "Replace mode",
      "block": 10,
      "key": "ctrl-q",
      "action": [
        "vim::PushLiteral",
        {}
      ],
      "label": "Quote next character",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Visual mode",
      "block": 11,
      "key": "space ,",
      "action": [
        "editor::ToggleComments",
        {
          "advance_downwards": false,
          "comment_empty_lines": false
        }
      ],
      "label": "Toggle line comments",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor && vim_mode == normal && !menu",
      "group": "Normal mode",
      "block": 12,
      "key": "[ space",
      "action": "vim::InsertEmptyLineAbove",
      "label": "Blank line above",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor && vim_mode == normal && !menu",
      "group": "Normal mode",
      "block": 12,
      "key": "] space",
      "action": "vim::InsertEmptyLineBelow",
      "label": "Blank line below",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor && vim_mode == visual && !menu",
      "group": "Visual mode",
      "block": 13,
      "key": "space c a",
      "action": "editor::ToggleCodeActions",
      "label": "Show code actions",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor && vim_mode == visual && !menu",
      "group": "Visual mode",
      "block": 13,
      "key": "space c f",
      "action": "editor::FormatSelections",
      "label": "Format selection",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && mode == full && (vim_mode == normal || vim_mode == visual))) && !menu",
      "group": "Editor leader",
      "block": 14,
      "key": "space a",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && mode == full && (vim_mode == normal || vim_mode == visual))) && !menu",
      "group": "Editor leader",
      "block": 14,
      "key": "space a a",
      "action": "agent::FocusAgent",
      "label": "Focus agent panel",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && mode == full && (vim_mode == normal || vim_mode == visual))) && !menu",
      "group": "Editor leader",
      "block": 14,
      "key": "space a t",
      "action": "agent::AddSelectionToThread",
      "label": "Attach selected context",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && mode == full && (vim_mode == normal || vim_mode == visual))) && !menu",
      "group": "Editor leader",
      "block": 14,
      "key": "space a d",
      "action": [
        "action::Sequence",
        [
          "agent::FocusAgent",
          "editor::MoveToEnd",
          [
            "editor::InsertSnippet",
            {
              "snippet": " @diagnostics"
            }
          ],
          "editor::ShowCompletions"
        ]
      ],
      "label": "Attach diagnostics context",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Terminal && vi_mode",
      "group": "Terminal selection",
      "block": 15,
      "key": "space a",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Terminal && vi_mode",
      "group": "Terminal selection",
      "block": 15,
      "key": "space a a",
      "action": "agent::FocusAgent",
      "label": "Focus agent panel",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Terminal && vi_mode",
      "group": "Terminal selection",
      "block": 15,
      "key": "space a t",
      "action": "agent::AddSelectionToThread",
      "label": "Attach selected context",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Terminal && vi_mode",
      "group": "Terminal selection",
      "block": 15,
      "key": "space a d",
      "action": [
        "action::Sequence",
        [
          "agent::FocusAgent",
          "editor::MoveToEnd",
          [
            "editor::InsertSnippet",
            {
              "snippet": " @diagnostics"
            }
          ],
          "editor::ShowCompletions"
        ]
      ],
      "label": "Attach diagnostics context",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "j",
      "action": "vim::MenuSelectNext",
      "label": "Select next item",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "k",
      "action": "vim::MenuSelectPrevious",
      "label": "Select previous item",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "h",
      "action": "project_panel::CollapseSelectedEntry",
      "label": "Collapse selected folder",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "l",
      "action": "project_panel::OpenPermanent",
      "label": "Open selected file",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "enter",
      "action": "project_panel::OpenPermanent",
      "label": "Open selected file",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "t",
      "action": "project_panel::OpenPermanent",
      "label": "Open selected file",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "s",
      "action": "project_panel::OpenSplitVertical",
      "label": "Open right split",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "shift-s",
      "action": "project_panel::OpenSplitHorizontal",
      "label": "Open lower split",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "shift-p",
      "action": "project_panel::Open",
      "label": "Preview selected file",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "shift-o",
      "action": "workspace::OpenWithSystem",
      "label": "Open externally",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "backspace",
      "action": "project_panel::SelectParent",
      "label": "Select parent folder",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "g g",
      "action": "menu::SelectFirst",
      "label": "Select first item",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "shift-g",
      "action": "menu::SelectLast",
      "label": "Select last item",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "shift-c",
      "action": "project_panel::CollapseSelectedEntry",
      "label": "Collapse selected folder",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "z",
      "action": "project_panel::CollapseAllEntries",
      "label": "Collapse all folders",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "a",
      "action": "project_panel::NewFile",
      "label": "Create file",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "shift-a",
      "action": "project_panel::NewDirectory",
      "label": "Create folder",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "r",
      "action": "project_panel::Rename",
      "label": "Rename selected entry",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "d",
      "action": [
        "project_panel::Delete",
        {
          "skip_prompt": false
        }
      ],
      "label": "Delete selected entry",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "shift-t",
      "action": [
        "project_panel::Trash",
        {
          "skip_prompt": false
        }
      ],
      "label": "Trash selected entry",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "c",
      "action": "project_panel::Copy",
      "label": "Copy selected entry",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "x",
      "action": "project_panel::Cut",
      "label": "Cut selected entry",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "p",
      "action": "project_panel::Paste",
      "label": "Paste copied entry",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "y",
      "action": "workspace::CopyRelativePath",
      "label": "Copy relative path",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "shift-y",
      "action": "workspace::CopyPath",
      "label": "Copy full path",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "u",
      "action": "project_panel::Undo",
      "label": "Undo file operation",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "/",
      "action": "file_finder::Toggle",
      "label": "Find project file",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "shift-h",
      "action": "project_panel::ToggleHideHidden",
      "label": "Toggle hidden files",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "[ g",
      "action": "project_panel::SelectPrevGitEntry",
      "label": "Previous changed file",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "] g",
      "action": "project_panel::SelectNextGitEntry",
      "label": "Next changed file",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "?",
      "action": "project_panel::OpenContextMenu",
      "label": "Open context menu",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "q",
      "action": "project_panel::Toggle",
      "label": "Toggle project tree",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "space",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "space a",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "space a a",
      "action": "agent::FocusAgent",
      "label": "Focus agent panel",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "space a d",
      "action": [
        "action::Sequence",
        [
          "agent::FocusAgent",
          "editor::MoveToEnd",
          [
            "editor::InsertSnippet",
            {
              "snippet": " @diagnostics"
            }
          ],
          "editor::ShowCompletions"
        ]
      ],
      "label": "Attach diagnostics context",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "shift-d",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "shift-r",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 16,
      "key": "o",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "EmptyPane || (Editor && (vim_mode == normal || vim_mode == visual)) || (ProjectPanel && not_editing) || (Terminal && vi_mode)",
      "group": "Project tree",
      "block": 17,
      "key": "space a n",
      "action": [
        "action::Sequence",
        [
          "agent::FocusAgent",
          "agent::NewThread"
        ]
      ],
      "label": "New agent thread",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "EmptyPane || (Editor && (vim_mode == normal || vim_mode == visual)) || (ProjectPanel && not_editing) || (Terminal && vi_mode)",
      "group": "Project tree",
      "block": 17,
      "key": "space a c",
      "action": [
        "action::Sequence",
        [
          "agent::FocusAgent",
          "agent::OpenAddContextMenu"
        ]
      ],
      "label": "Choose agent context",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "EmptyPane || (Editor && (vim_mode == normal || vim_mode == visual)) || (ProjectPanel && not_editing) || (Terminal && vi_mode)",
      "group": "Project tree",
      "block": 17,
      "key": "space a r",
      "action": [
        "action::Sequence",
        [
          "agent::FocusAgent",
          "agent::OpenAgentDiff"
        ]
      ],
      "label": "Review agent changes",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "AgentPanel > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Agent editor",
      "block": 18,
      "key": "space",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "AgentPanel > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Agent editor",
      "block": 18,
      "key": "space a",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "AgentPanel > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Agent editor",
      "block": 18,
      "key": "space a a",
      "action": "agent::Toggle",
      "label": "Toggle agent panel",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "AgentPanel > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Agent editor",
      "block": 18,
      "key": "space a m",
      "action": "agent::ToggleModelSelector",
      "label": "Choose agent model",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "AgentPanel > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Agent editor",
      "block": 18,
      "key": "space a f",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "AgentPanel > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Agent editor",
      "block": 18,
      "key": "space a e",
      "action": "agent::ToggleThinkingEffortMenu",
      "label": "Choose reasoning effort",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitDiff > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Diff editor",
      "block": 19,
      "key": "g a",
      "action": "git::ToggleStaged",
      "label": "Toggle staging",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitDiff > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Diff editor",
      "block": 19,
      "key": "g x",
      "action": "git::Restore",
      "label": "Discard selected changes",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor && multibuffer && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Multibuffers",
      "block": 20,
      "key": "g space",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor && multibuffer && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Multibuffers",
      "block": 20,
      "key": "g f",
      "action": "editor::OpenExcerpts",
      "label": "Open source files",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "space",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "enter",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "l",
      "action": [
        "action::Sequence",
        [
          "menu::Confirm",
          "workspace::FocusCenterPane"
        ]
      ],
      "label": "Focus selected diff",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "s",
      "action": "git::ToggleStaged",
      "label": "Toggle staging",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "shift-s",
      "action": "git::StageAll",
      "label": "Stage all changes",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "t",
      "action": "git_panel::ToggleTreeView",
      "label": "Toggle tree layout",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "b",
      "action": "git::Branch",
      "label": "Choose Git branch",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "p",
      "action": "git::Pull",
      "label": "Pull Git changes",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "shift-p",
      "action": "git::Push",
      "label": "Push Git changes",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "r",
      "action": "git::PullRebase",
      "label": "Pull with rebase",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "f",
      "action": "git::Fetch",
      "label": "Fetch Git remotes",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "shift-f p",
      "action": "git::ForcePush",
      "label": "Force Git push",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "d",
      "action": [
        "git::RestoreFile",
        {
          "skip_prompt": false
        }
      ],
      "label": "Discard file changes",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "tab",
      "action": "git_panel::FocusEditor",
      "label": "Focus commit editor",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "c",
      "action": "git_panel::FocusEditor",
      "label": "Focus commit editor",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "g d",
      "action": "menu::Confirm",
      "label": "Open project diff",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "g shift-d",
      "action": "menu::SecondaryConfirm",
      "label": "Open file diff",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "g f",
      "action": "git::ViewFile",
      "label": "Open source file",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 21,
      "key": "g h",
      "action": "git::FileHistory",
      "label": "Show file history",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "CommitEditor > Editor",
      "group": "Commit editor",
      "block": 22,
      "key": "tab",
      "action": "git_panel::FocusChanges",
      "label": "Focus changed files",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space e",
      "action": "project_panel::Toggle",
      "label": "Toggle project tree",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space f",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space space",
      "action": "file_finder::Toggle",
      "label": "Find project file",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space s f",
      "action": "file_finder::Toggle",
      "label": "Find project file",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space f n",
      "action": "workspace::NewFile",
      "label": "New file",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space f h",
      "action": "git::FileHistory",
      "label": "Show file history",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space f y",
      "action": "workspace::CopyRelativePath",
      "label": "Copy relative path",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space f shift-y",
      "action": "workspace::CopyPath",
      "label": "Copy full path",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space f p",
      "action": "projects::OpenRecent",
      "label": "Open recent project",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space f b",
      "action": "tab_switcher::OpenInActivePane",
      "label": "Choose open tab",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space b d",
      "action": [
        "pane::CloseActiveItem",
        {
          "close_pinned": true
        }
      ],
      "label": "Close any tab",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space g shift-g",
      "action": "git_graph::Open",
      "label": "Open Git graph",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space g b",
      "action": "git::Branch",
      "label": "Choose Git branch",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space g f",
      "action": "git::Fetch",
      "label": "Fetch Git remotes",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space g p",
      "action": "git::Pull",
      "label": "Pull Git changes",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space g shift-p",
      "action": "git::Push",
      "label": "Push Git changes",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space g r",
      "action": "git::PullRebase",
      "label": "Pull with rebase",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space x",
      "action": "diagnostics::Deploy",
      "label": "Show project diagnostics",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space r",
      "action": "task::Spawn",
      "label": "Run task",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space shift-r",
      "action": "task::Rerun",
      "label": "Rerun last task",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w h",
      "action": "workspace::ToggleLeftDock",
      "label": "Toggle left dock",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w j",
      "action": "workspace::ToggleBottomDock",
      "label": "Toggle bottom dock",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w k",
      "action": "workspace::ToggleRightDock",
      "label": "Toggle right dock",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w tab",
      "action": "workspace::ToggleAllDocks",
      "label": "Toggle all docks",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w q",
      "action": [
        "action::Sequence",
        [
          "workspace::CloseActiveDock",
          [
            "workspace::ActivatePane",
            0
          ]
        ]
      ],
      "label": "Close active dock",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w shift-q",
      "action": [
        "action::Sequence",
        [
          "workspace::CloseAllDocks",
          [
            "workspace::ActivatePane",
            0
          ]
        ]
      ],
      "label": "Close all docks",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w e",
      "action": "project_panel::Toggle",
      "label": "Toggle project tree",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w g",
      "action": "git_panel::Toggle",
      "label": "Toggle Git panel",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w t",
      "action": "terminal_panel::Toggle",
      "label": "Toggle terminal panel",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w a",
      "action": "agent::Toggle",
      "label": "Toggle agent panel",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w o",
      "action": "outline_panel::Toggle",
      "label": "Toggle outline panel",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w d",
      "action": "debug_panel::Toggle",
      "label": "Toggle debug panel",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w c",
      "action": "collab_panel::Toggle",
      "label": "Toggle collaboration panel",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w m",
      "action": "workspace::ToggleZoom",
      "label": "Toggle pane zoom",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w l",
      "action": "lsp_tool::ToggleMenu",
      "label": "Open LSP tools",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w s",
      "action": [
        "action::Sequence",
        [
          "workspace::FocusCenterPane",
          "pane::SplitDown"
        ]
      ],
      "label": "Split editor down",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w v",
      "action": [
        "action::Sequence",
        [
          "workspace::FocusCenterPane",
          "pane::SplitRight"
        ]
      ],
      "label": "Split editor right",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w =",
      "action": "workspace::ResetPaneSizes",
      "label": "Equalize pane sizes",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 23,
      "key": "space w shift-o",
      "action": [
        "action::Sequence",
        [
          "workspace::FocusCenterPane",
          "pane::JoinAll"
        ]
      ],
      "label": "Join editor panes",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && !Dock && (!Terminal || vi_mode)",
      "group": "Center tabs",
      "block": 24,
      "key": "space w q",
      "action": "pane::CloseActiveItem",
      "label": "Close active tab",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Dock || Terminal",
      "group": "Dock focus",
      "block": 25,
      "key": "ctrl-;",
      "action": "editor::ToggleFocus",
      "label": "Focus editor",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 26,
      "key": "space",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "0",
      "action": "vim::StartOfLine",
      "label": "Line start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "1",
      "action": [
        "vim::Number",
        1
      ],
      "label": "Count digit 1",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "2",
      "action": [
        "vim::Number",
        2
      ],
      "label": "Count digit 2",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "3",
      "action": [
        "vim::Number",
        3
      ],
      "label": "Count digit 3",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "4",
      "action": [
        "vim::Number",
        4
      ],
      "label": "Count digit 4",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "5",
      "action": [
        "vim::Number",
        5
      ],
      "label": "Count digit 5",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "6",
      "action": [
        "vim::Number",
        6
      ],
      "label": "Count digit 6",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "7",
      "action": [
        "vim::Number",
        7
      ],
      "label": "Count digit 7",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "8",
      "action": [
        "vim::Number",
        8
      ],
      "label": "Count digit 8",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "9",
      "action": [
        "vim::Number",
        9
      ],
      "label": "Count digit 9",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "i",
      "action": [
        "vim::PushObject",
        {
          "around": false
        }
      ],
      "label": "Inside text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "a",
      "action": [
        "vim::PushObject",
        {
          "around": true
        }
      ],
      "label": "Around text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Create file",
          "action": "project_panel::NewFile"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "h",
      "action": "vim::Left",
      "label": "Move left",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Collapse selected folder",
          "action": "project_panel::CollapseSelectedEntry"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "backspace",
      "action": "vim::WrappingLeft",
      "label": "Move left wrapping",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select parent folder",
          "action": "project_panel::SelectParent"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "j",
      "action": "vim::Down",
      "label": "Move down",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select next item",
          "action": "vim::MenuSelectNext"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-m",
      "action": "vim::NextLineStart",
      "label": "Next line start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "+",
      "action": "vim::NextLineStart",
      "label": "Next line start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "enter",
      "action": "vim::NextLineStart",
      "label": "Next line start",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open selected file",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "-",
      "action": "vim::PreviousLineStart",
      "label": "Previous line start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-tab",
      "action": "vim::Tab",
      "label": "Next tab stop",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "tab",
      "action": "vim::Tab",
      "label": "Next tab stop",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus commit editor",
          "action": "git_panel::FocusEditor"
        },
        {
          "context": "CommitEditor > Editor",
          "label": "Focus changed files",
          "action": "git_panel::FocusChanges"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "k",
      "action": "vim::Up",
      "label": "Move up",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select previous item",
          "action": "vim::MenuSelectPrevious"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "l",
      "action": "vim::Right",
      "label": "Move right",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open selected file",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus selected diff",
          "action": [
            "action::Sequence",
            [
              "menu::Confirm",
              "workspace::FocusCenterPane"
            ]
          ]
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "$",
      "action": "vim::EndOfLine",
      "label": "Line end",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "^",
      "action": "vim::FirstNonWhitespace",
      "label": "First nonblank character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "_",
      "action": "vim::StartOfLineDownward",
      "label": "Counted line start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g _",
      "action": "vim::EndOfLineDownward",
      "label": "Counted line end",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-g",
      "action": "vim::EndOfDocument",
      "label": "Document end",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select last item",
          "action": "menu::SelectLast"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "{",
      "action": "vim::StartOfParagraph",
      "label": "Previous paragraph boundary",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "}",
      "action": "vim::EndOfParagraph",
      "label": "Next paragraph boundary",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "(",
      "action": "vim::SentenceBackward",
      "label": "Previous sentence",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": ")",
      "action": "vim::SentenceForward",
      "label": "Next sentence",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "|",
      "action": "vim::GoToColumn",
      "label": "Go to column",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "w",
      "action": "vim::NextWordStart",
      "label": "Next word start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "e",
      "action": "vim::NextWordEnd",
      "label": "Next word end",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "b",
      "action": "vim::PreviousWordStart",
      "label": "Previous word start",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Choose Git branch",
          "action": "git::Branch"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g e",
      "action": "vim::PreviousWordEnd",
      "label": "Previous word end",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-w",
      "action": [
        "vim::NextWordStart",
        {
          "ignore_punctuation": true
        }
      ],
      "label": "Next WORD start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-e",
      "action": [
        "vim::NextWordEnd",
        {
          "ignore_punctuation": true
        }
      ],
      "label": "Next WORD end",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-b",
      "action": [
        "vim::PreviousWordStart",
        {
          "ignore_punctuation": true
        }
      ],
      "label": "Previous WORD start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g shift-e",
      "action": [
        "vim::PreviousWordEnd",
        {
          "ignore_punctuation": true
        }
      ],
      "label": "Previous WORD end",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "/",
      "action": "vim::Search",
      "label": "Search forward",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Find project file",
          "action": "file_finder::Toggle"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g /",
      "action": "pane::DeploySearch",
      "label": "Search project",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "?",
      "action": [
        "vim::Search",
        {
          "backwards": true
        }
      ],
      "label": "Search backward",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open context menu",
          "action": "project_panel::OpenContextMenu"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "*",
      "action": "vim::MoveToNext",
      "label": "Next matching word",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "#",
      "action": "vim::MoveToPrevious",
      "label": "Previous matching word",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "n",
      "action": "vim::MoveToNextMatch",
      "label": "Next search match",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-n",
      "action": "vim::MoveToPreviousMatch",
      "label": "Previous search match",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "%",
      "action": [
        "vim::Matching",
        {
          "match_quotes": true
        }
      ],
      "label": "Jump matching bracket",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "f",
      "action": [
        "vim::PushFindForward",
        {
          "before": false,
          "multiline": false
        }
      ],
      "label": "Find next character",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Fetch Git remotes",
          "action": "git::Fetch"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "t",
      "action": [
        "vim::PushFindForward",
        {
          "before": true,
          "multiline": false
        }
      ],
      "label": "Till next character",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open selected file",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle tree layout",
          "action": "git_panel::ToggleTreeView"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-f",
      "action": [
        "vim::PushFindBackward",
        {
          "after": false,
          "multiline": false
        }
      ],
      "label": "Find previous character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-t",
      "action": [
        "vim::PushFindBackward",
        {
          "after": true,
          "multiline": false
        }
      ],
      "label": "Till previous character",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Trash selected entry",
          "action": [
            "project_panel::Trash",
            {
              "skip_prompt": false
            }
          ]
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "m",
      "action": "vim::PushMark",
      "label": "Set named mark",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "'",
      "action": [
        "vim::PushJump",
        {
          "line": true
        }
      ],
      "label": "Jump mark line",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "`",
      "action": [
        "vim::PushJump",
        {
          "line": false
        }
      ],
      "label": "Jump mark position",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": ";",
      "action": "vim::RepeatFind",
      "label": "Repeat character search",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": ",",
      "action": "vim::RepeatFindReversed",
      "label": "Reverse character search",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-o",
      "action": "pane::GoBack",
      "label": "Previous navigation location",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-i",
      "action": "pane::GoForward",
      "label": "Next navigation location",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-]",
      "action": "editor::GoToDefinition",
      "label": "Jump to definition",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-t",
      "action": "pane::GoToOlderTag",
      "label": "Previous definition jump",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "escape",
      "action": "vim::SwitchToNormalMode",
      "label": "Enter Normal mode",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-[",
      "action": "vim::SwitchToNormalMode",
      "label": "Enter Normal mode",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "v",
      "action": "vim::ToggleVisual",
      "label": "Toggle character selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-v",
      "action": "vim::ToggleVisualLine",
      "label": "Toggle line selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-g",
      "action": "vim::ShowLocation",
      "label": "Show cursor location",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-v",
      "action": "vim::ToggleVisualBlock",
      "label": "Toggle block selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "vim_mode == insert",
          "label": "Paste clipboard",
          "action": "editor::Paste"
        },
        {
          "context": "vim_mode == replace",
          "label": "Paste clipboard",
          "action": "editor::Paste"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-q",
      "action": "vim::ToggleVisualBlock",
      "label": "Toggle block selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "vim_mode == insert",
          "label": "Quote next character",
          "action": [
            "vim::PushLiteral",
            {}
          ]
        },
        {
          "context": "vim_mode == replace",
          "label": "Quote next character",
          "action": [
            "vim::PushLiteral",
            {}
          ]
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-k",
      "action": "editor::Hover",
      "label": "Show symbol information",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-r",
      "action": "vim::ToggleReplace",
      "label": "Enter Replace mode",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-f",
      "action": "vim::PageDown",
      "label": "Page down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-b",
      "action": "vim::PageUp",
      "label": "Page up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-d",
      "action": "vim::ScrollDown",
      "label": "Half-page down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-u",
      "action": "vim::ScrollUp",
      "label": "Half-page up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-e",
      "action": "vim::LineDown",
      "label": "Scroll line down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-y",
      "action": "vim::LineUp",
      "label": "Scroll line up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g shift-r",
      "action": "vim::PushReplaceWithRegister",
      "label": "Replace using register",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g r n",
      "action": "editor::Rename",
      "label": "Rename symbol",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g r r",
      "action": "editor::FindAllReferences",
      "label": "Find symbol references",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g r i",
      "action": "editor::GoToImplementation",
      "label": "Jump to implementation",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g r a",
      "action": "editor::ToggleCodeActions",
      "label": "Show code actions",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g g",
      "action": "vim::StartOfDocument",
      "label": "Document start",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select first item",
          "action": "menu::SelectFirst"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g h",
      "action": "editor::Hover",
      "label": "Show symbol information",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Show file history",
          "action": "git::FileHistory"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g B",
      "action": "editor::BlameHover",
      "label": "Show line blame",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g d",
      "action": "editor::GoToDefinition",
      "label": "Jump to definition",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
          "label": "Jump to definition",
          "action": "editor::GoToDefinition"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Open project diff",
          "action": "menu::Confirm"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g shift-d",
      "action": "editor::GoToDeclaration",
      "label": "Jump to declaration",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Open file diff",
          "action": "menu::SecondaryConfirm"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g y",
      "action": "editor::GoToTypeDefinition",
      "label": "Jump to type",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g shift-i",
      "action": "editor::GoToImplementation",
      "label": "Jump to implementation",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g x",
      "action": "editor::OpenUrl",
      "label": "Open URL",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitDiff > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
          "label": "Discard selected changes",
          "action": "git::Restore"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g f",
      "action": "editor::OpenSelectedFilename",
      "label": "Open referenced file",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "Editor && multibuffer && (vim_mode == normal || vim_mode == visual) && !menu",
          "label": "Open source files",
          "action": "editor::OpenExcerpts"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Open source file",
          "action": "git::ViewFile"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g n",
      "action": "vim::SelectNextMatch",
      "label": "Select search match",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g shift-n",
      "action": "vim::SelectPreviousMatch",
      "label": "Select previous match",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g l",
      "action": "vim::SelectNext",
      "label": "Select next occurrence",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g shift-l",
      "action": "vim::SelectPrevious",
      "label": "Select previous occurrence",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g >",
      "action": [
        "editor::SelectNext",
        {
          "replace_newest": true
        }
      ],
      "label": "Skip match forward",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g <",
      "action": [
        "editor::SelectPrevious",
        {
          "replace_newest": true
        }
      ],
      "label": "Skip match backward",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g a",
      "action": "editor::SelectAllMatches",
      "label": "Select all matches",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitDiff > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
          "label": "Toggle staging",
          "action": "git::ToggleStaged"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g s",
      "action": "outline::Toggle",
      "label": "Find file symbol",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g shift-o",
      "action": "outline::Toggle",
      "label": "Find file symbol",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g shift-s",
      "action": "project_symbols::Toggle",
      "label": "Find project symbol",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g .",
      "action": "editor::ToggleCodeActions",
      "label": "Show code actions",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g shift-a",
      "action": "editor::FindAllReferences",
      "label": "Find symbol references",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g space",
      "action": "editor::OpenExcerpts",
      "label": "Open source files",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "Editor && multibuffer && (vim_mode == normal || vim_mode == visual) && !menu",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g *",
      "action": [
        "vim::MoveToNext",
        {
          "partial_word": true
        }
      ],
      "label": "Next substring match",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g #",
      "action": [
        "vim::MoveToPrevious",
        {
          "partial_word": true
        }
      ],
      "label": "Previous substring match",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g j",
      "action": [
        "vim::Down",
        {
          "display_lines": true
        }
      ],
      "label": "Screen line down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g k",
      "action": [
        "vim::Up",
        {
          "display_lines": true
        }
      ],
      "label": "Screen line up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g $",
      "action": [
        "vim::EndOfLine",
        {
          "display_lines": true
        }
      ],
      "label": "Screen line end",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g 0",
      "action": [
        "vim::StartOfLine",
        {
          "display_lines": true
        }
      ],
      "label": "Screen line start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g shift-m",
      "action": [
        "vim::MiddleOfLine",
        {
          "display_lines": true
        }
      ],
      "label": "Screen line midpoint",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g ^",
      "action": [
        "vim::FirstNonWhitespace",
        {
          "display_lines": true
        }
      ],
      "label": "Screen first nonblank",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g v",
      "action": "vim::RestoreVisualSelection",
      "label": "Restore previous selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g ]",
      "action": "editor::GoToDiagnostic",
      "label": "Next diagnostic",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g [",
      "action": "editor::GoToPreviousDiagnostic",
      "label": "Previous diagnostic",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g i",
      "action": "vim::InsertAtPrevious",
      "label": "Resume previous insertion",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g ,",
      "action": "vim::ChangeListNewer",
      "label": "Newer edit location",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "g ;",
      "action": "vim::ChangeListOlder",
      "label": "Older edit location",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-h",
      "action": "vim::WindowTop",
      "label": "Viewport top line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
          "label": "Previous tab",
          "action": "pane::ActivatePreviousItem"
        },
        {
          "context": "ProjectPanel && not_editing",
          "label": "Toggle hidden files",
          "action": "project_panel::ToggleHideHidden"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-m",
      "action": "vim::WindowMiddle",
      "label": "Viewport middle line",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-l",
      "action": "vim::WindowBottom",
      "label": "Viewport bottom line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
          "label": "Next tab",
          "action": "pane::ActivateNextItem"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "q",
      "action": "vim::ToggleRecord",
      "label": "Toggle macro recording",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Toggle project tree",
          "action": "project_panel::Toggle"
        }
      ]
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-q",
      "action": "vim::ReplayLastRecording",
      "label": "Replay last macro",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "@",
      "action": "vim::PushReplayRegister",
      "label": "Replay register macro",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z enter",
      "action": [
        "workspace::SendKeystrokes",
        "z t ^"
      ],
      "label": "Top-align line start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z -",
      "action": [
        "workspace::SendKeystrokes",
        "z b ^"
      ],
      "label": "Bottom-align line start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z ^",
      "action": [
        "workspace::SendKeystrokes",
        "shift-h k z b ^"
      ],
      "label": "Previous screenful",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z +",
      "action": [
        "workspace::SendKeystrokes",
        "shift-l j z t ^"
      ],
      "label": "Next screenful",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z t",
      "action": "editor::ScrollCursorTop",
      "label": "Align cursor top",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z z",
      "action": "editor::ScrollCursorCenter",
      "label": "Center cursor vertically",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z .",
      "action": [
        "workspace::SendKeystrokes",
        "z z ^"
      ],
      "label": "Center line start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z b",
      "action": "editor::ScrollCursorBottom",
      "label": "Align cursor bottom",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z a",
      "action": "editor::ToggleFold",
      "label": "Toggle code fold",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z shift-a",
      "action": "editor::ToggleFoldRecursive",
      "label": "Toggle nested folds",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z c",
      "action": "editor::Fold",
      "label": "Fold code",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z shift-c",
      "action": "editor::FoldRecursive",
      "label": "Fold nested code",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z o",
      "action": "editor::UnfoldLines",
      "label": "Unfold code",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z shift-o",
      "action": "editor::UnfoldRecursive",
      "label": "Unfold nested code",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z f",
      "action": "editor::FoldSelectedRanges",
      "label": "Fold selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z shift-m",
      "action": "editor::FoldAll",
      "label": "Fold all code",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z shift-r",
      "action": "editor::UnfoldAll",
      "label": "Unfold all code",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z l",
      "action": "vim::ColumnRight",
      "label": "Scroll column right",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z h",
      "action": "vim::ColumnLeft",
      "label": "Scroll column left",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z shift-l",
      "action": "vim::HalfPageRight",
      "label": "Half-page right",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "z shift-h",
      "action": "vim::HalfPageLeft",
      "label": "Half-page left",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-z shift-q",
      "action": [
        "pane::CloseActiveItem",
        {
          "save_intent": "skip"
        }
      ],
      "label": "Close without saving",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-z shift-z",
      "action": [
        "pane::CloseActiveItem",
        {
          "save_intent": "save_all"
        }
      ],
      "label": "Close active tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-w d",
      "action": "editor::GoToDefinitionSplit",
      "label": "Split definition view",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-w g d",
      "action": "editor::GoToDefinitionSplit",
      "label": "Split definition view",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-w ]",
      "action": "editor::GoToDefinitionSplit",
      "label": "Split definition view",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-w shift-d",
      "action": "editor::GoToTypeDefinitionSplit",
      "label": "Split type view",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-w g shift-d",
      "action": "editor::GoToTypeDefinitionSplit",
      "label": "Split type view",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-w space",
      "action": "editor::OpenExcerptsSplit",
      "label": "Split source files",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-w g space",
      "action": "editor::OpenExcerptsSplit",
      "label": "Split source files",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-^",
      "action": "pane::AlternateFile",
      "label": "Alternate tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": ".",
      "action": "vim::Repeat",
      "label": "Repeat last change",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] ]",
      "action": "vim::NextSectionStart",
      "label": "Next section start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] [",
      "action": "vim::NextSectionEnd",
      "label": "Next section end",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ [",
      "action": "vim::PreviousSectionStart",
      "label": "Previous section start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ ]",
      "action": "vim::PreviousSectionEnd",
      "label": "Previous section end",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] m",
      "action": "vim::NextMethodStart",
      "label": "Next method start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] shift-m",
      "action": "vim::NextMethodEnd",
      "label": "Next method end",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ m",
      "action": "vim::PreviousMethodStart",
      "label": "Previous method start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ shift-m",
      "action": "vim::PreviousMethodEnd",
      "label": "Previous method end",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ *",
      "action": "vim::PreviousComment",
      "label": "Previous comment",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ /",
      "action": "vim::PreviousComment",
      "label": "Previous comment",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] *",
      "action": "vim::NextComment",
      "label": "Next comment",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] /",
      "action": "vim::NextComment",
      "label": "Next comment",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ -",
      "action": "vim::PreviousLesserIndent",
      "label": "Previous shallower indent",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ +",
      "action": "vim::PreviousGreaterIndent",
      "label": "Previous deeper indent",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ =",
      "action": "vim::PreviousSameIndent",
      "label": "Previous equal indent",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] -",
      "action": "vim::NextLesserIndent",
      "label": "Next shallower indent",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] +",
      "action": "vim::NextGreaterIndent",
      "label": "Next deeper indent",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] =",
      "action": "vim::NextSameIndent",
      "label": "Next equal indent",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] b",
      "action": "pane::ActivateNextItem",
      "label": "Next tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ b",
      "action": "pane::ActivatePreviousItem",
      "label": "Previous tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] shift-b",
      "action": "pane::ActivateLastItem",
      "label": "Last tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ shift-b",
      "action": [
        "pane::ActivateItem",
        0
      ],
      "label": "First tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] space",
      "action": "vim::InsertEmptyLineBelow",
      "label": "Blank line below",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "Editor && vim_mode == normal && !menu",
          "label": "Blank line below",
          "action": "vim::InsertEmptyLineBelow"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ space",
      "action": "vim::InsertEmptyLineAbove",
      "label": "Blank line above",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "Editor && vim_mode == normal && !menu",
          "label": "Blank line above",
          "action": "vim::InsertEmptyLineAbove"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ e",
      "action": "editor::MoveLineUp",
      "label": "Move line up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] e",
      "action": "editor::MoveLineDown",
      "label": "Move line down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ f",
      "action": "workspace::FollowNextCollaborator",
      "label": "Follow next collaborator",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] f",
      "action": "workspace::FollowNextCollaborator",
      "label": "Follow next collaborator",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] }",
      "action": [
        "vim::UnmatchedForward",
        {
          "char": "}"
        }
      ],
      "label": "Next unmatched }",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ {",
      "action": [
        "vim::UnmatchedBackward",
        {
          "char": "{"
        }
      ],
      "label": "Previous unmatched {",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] )",
      "action": [
        "vim::UnmatchedForward",
        {
          "char": ")"
        }
      ],
      "label": "Next unmatched )",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ (",
      "action": [
        "vim::UnmatchedBackward",
        {
          "char": "("
        }
      ],
      "label": "Previous unmatched (",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ r",
      "action": "vim::GoToPreviousReference",
      "label": "Previous symbol reference",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] r",
      "action": "vim::GoToNextReference",
      "label": "Next symbol reference",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "[ x",
      "action": "vim::SelectLargerSyntaxNode",
      "label": "Expand syntax selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal || vim_mode == visual || vim_mode == operator",
      "group": "Visual mode",
      "block": 1,
      "key": "] x",
      "action": "vim::SelectSmallerSyntaxNode",
      "label": "Shrink syntax selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "i",
      "action": "vim::InsertBefore",
      "label": "Insert before cursor",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "a",
      "action": "vim::InsertAfter",
      "label": "Insert after cursor",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Create file",
          "action": "project_panel::NewFile"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "ctrl-[",
      "action": "editor::Cancel",
      "label": "Cancel editor action",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": ":",
      "action": "command_palette::Toggle",
      "label": "Open command palette",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "c",
      "action": "vim::PushChange",
      "label": "Change motion target",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy selected entry",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus commit editor",
          "action": "git_panel::FocusEditor"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "shift-c",
      "action": "vim::ChangeToEndOfLine",
      "label": "Change line suffix",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Collapse selected folder",
          "action": "project_panel::CollapseSelectedEntry"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "d",
      "action": "vim::PushDelete",
      "label": "Delete motion target",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Delete selected entry",
          "action": [
            "project_panel::Delete",
            {
              "skip_prompt": false
            }
          ]
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Discard file changes",
          "action": [
            "git::RestoreFile",
            {
              "skip_prompt": false
            }
          ]
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "g shift-j",
      "action": "vim::JoinLinesNoWhitespace",
      "label": "Join without spaces",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "y",
      "action": "vim::PushYank",
      "label": "Copy motion target",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy relative path",
          "action": "workspace::CopyRelativePath"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "shift-y",
      "action": "vim::YankLine",
      "label": "Copy current line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy full path",
          "action": "workspace::CopyPath"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "x",
      "action": "vim::DeleteRight",
      "label": "Delete next character",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Cut selected entry",
          "action": "project_panel::Cut"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "shift-x",
      "action": "vim::DeleteLeft",
      "label": "Delete previous character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "ctrl-a",
      "action": "vim::Increment",
      "label": "Increment number",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "ctrl-x",
      "action": "vim::Decrement",
      "label": "Decrement number",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "ctrl-r",
      "action": "vim::Redo",
      "label": "Redo change",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": ">",
      "action": "vim::PushIndent",
      "label": "Indent motion target",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "<",
      "action": "vim::PushOutdent",
      "label": "Outdent motion target",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "=",
      "action": "vim::PushAutoIndent",
      "label": "Reindent motion target",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "!",
      "action": "vim::PushShellCommand",
      "label": "Filter motion target",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "g u",
      "action": "vim::PushLowercase",
      "label": "Lowercase motion target",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "g shift-u",
      "action": "vim::PushUppercase",
      "label": "Uppercase motion target",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "g ~",
      "action": "vim::PushOppositeCase",
      "label": "Invert target case",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "g ?",
      "action": "vim::PushRot13",
      "label": "ROT13 motion target",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "g w",
      "action": "vim::PushRewrap",
      "label": "Rewrap motion target",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "g q",
      "action": "vim::PushRewrap",
      "label": "Rewrap motion target",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "] d",
      "action": "editor::GoToDiagnostic",
      "label": "Next diagnostic",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "[ d",
      "action": "editor::GoToPreviousDiagnostic",
      "label": "Previous diagnostic",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "] c",
      "action": "editor::GoToHunk",
      "label": "Next diff hunk",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "[ c",
      "action": "editor::GoToPreviousHunk",
      "label": "Previous diff hunk",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "g c",
      "action": "vim::PushToggleComments",
      "label": "Comment motion target",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == normal",
      "group": "Normal mode",
      "block": 2,
      "key": "g b",
      "action": "vim::PushToggleBlockComments",
      "label": "Block-comment motion target",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && VimCount",
      "group": "Vim motions & commands",
      "block": 3,
      "key": "0",
      "action": [
        "vim::Number",
        0
      ],
      "label": "Count digit 0",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && VimCount",
      "group": "Vim motions & commands",
      "block": 3,
      "key": ":",
      "action": "vim::CountCommand",
      "label": "Command counted lines",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && VimCount",
      "group": "Vim motions & commands",
      "block": 3,
      "key": "%",
      "action": "vim::GoToPercentage",
      "label": "Jump file percentage",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": ":",
      "action": "vim::VisualCommand",
      "label": "Command selected range",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "u",
      "action": "vim::ConvertToLowerCase",
      "label": "Lowercase selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Undo file operation",
          "action": "project_panel::Undo"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "shift-u",
      "action": "vim::ConvertToUpperCase",
      "label": "Uppercase selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "shift-o",
      "action": "vim::OtherEnd",
      "label": "Opposite selection corner",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open externally",
          "action": "workspace::OpenWithSystem"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "o",
      "action": "vim::OtherEndRowAware",
      "label": "Opposite selection endpoint",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "d",
      "action": "vim::VisualDelete",
      "label": "Delete selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Delete selected entry",
          "action": [
            "project_panel::Delete",
            {
              "skip_prompt": false
            }
          ]
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Discard file changes",
          "action": [
            "git::RestoreFile",
            {
              "skip_prompt": false
            }
          ]
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "x",
      "action": "vim::VisualDelete",
      "label": "Delete selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Cut selected entry",
          "action": "project_panel::Cut"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "shift-d",
      "action": "vim::VisualDeleteLine",
      "label": "Delete selected lines",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "shift-x",
      "action": "vim::VisualDeleteLine",
      "label": "Delete selected lines",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "y",
      "action": "vim::VisualYank",
      "label": "Copy selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy relative path",
          "action": "workspace::CopyRelativePath"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "shift-y",
      "action": "vim::VisualYankLine",
      "label": "Copy selected lines",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy full path",
          "action": "workspace::CopyPath"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "p",
      "action": "vim::Paste",
      "label": "Paste over selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Paste copied entry",
          "action": "project_panel::Paste"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull Git changes",
          "action": "git::Pull"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "shift-p",
      "action": [
        "vim::Paste",
        {
          "preserve_clipboard": true
        }
      ],
      "label": "Paste preserving register",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Preview selected file",
          "action": "project_panel::Open"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Push Git changes",
          "action": "git::Push"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "c",
      "action": "vim::Substitute",
      "label": "Replace selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy selected entry",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus commit editor",
          "action": "git_panel::FocusEditor"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "s",
      "action": "vim::Substitute",
      "label": "Replace selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open right split",
          "action": "project_panel::OpenSplitVertical"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle staging",
          "action": "git::ToggleStaged"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "shift-r",
      "action": "vim::SubstituteLine",
      "label": "Replace selected lines",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "shift-s",
      "action": "vim::SubstituteLine",
      "label": "Replace selected lines",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open lower split",
          "action": "project_panel::OpenSplitHorizontal"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Stage all changes",
          "action": "git::StageAll"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "~",
      "action": "vim::ChangeCase",
      "label": "Invert character case",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "*",
      "action": [
        "vim::MoveToNext",
        {
          "partial_word": true
        }
      ],
      "label": "Next substring match",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "#",
      "action": [
        "vim::MoveToPrevious",
        {
          "partial_word": true
        }
      ],
      "label": "Previous substring match",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "ctrl-a",
      "action": "vim::Increment",
      "label": "Increment number",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "ctrl-x",
      "action": "vim::Decrement",
      "label": "Decrement number",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "g ctrl-a",
      "action": [
        "vim::Increment",
        {
          "step": true
        }
      ],
      "label": "Increment progressive sequence",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "g ctrl-x",
      "action": [
        "vim::Decrement",
        {
          "step": true
        }
      ],
      "label": "Decrement progressive sequence",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "shift-i",
      "action": "vim::InsertBefore",
      "label": "Insert before cursor",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "shift-a",
      "action": "vim::InsertAfter",
      "label": "Insert after cursor",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Create folder",
          "action": "project_panel::NewDirectory"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "g shift-i",
      "action": "vim::VisualInsertFirstNonWhiteSpace",
      "label": "Insert line starts",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "g shift-a",
      "action": "vim::VisualInsertEndOfLine",
      "label": "Append selected lines",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "shift-j",
      "action": "vim::JoinLines",
      "label": "Join with spaces",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "g shift-j",
      "action": "vim::JoinLinesNoWhitespace",
      "label": "Join without spaces",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "r",
      "action": "vim::PushReplace",
      "label": "Replace character",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Rename selected entry",
          "action": "project_panel::Rename"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull with rebase",
          "action": "git::PullRebase"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "ctrl-c",
      "action": "vim::SwitchToNormalMode",
      "label": "Enter Normal mode",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "ctrl-[",
      "action": "vim::SwitchToNormalMode",
      "label": "Enter Normal mode",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "escape",
      "action": "vim::SwitchToNormalMode",
      "label": "Enter Normal mode",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": ">",
      "action": "vim::Indent",
      "label": "Indent selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "<",
      "action": "vim::Outdent",
      "label": "Outdent selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "=",
      "action": "vim::AutoIndent",
      "label": "Reindent selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "!",
      "action": "vim::ShellCommand",
      "label": "Filter selected text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "i",
      "action": [
        "vim::PushObject",
        {
          "around": false
        }
      ],
      "label": "Inside text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "a",
      "action": [
        "vim::PushObject",
        {
          "around": true
        }
      ],
      "label": "Around text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Create file",
          "action": "project_panel::NewFile"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "g shift-r",
      "action": [
        "vim::Paste",
        {
          "preserve_clipboard": true
        }
      ],
      "label": "Paste preserving register",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "g c",
      "action": "vim::ToggleComments",
      "label": "Toggle line comments",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "g b",
      "action": "vim::ToggleBlockComments",
      "label": "Toggle block comments",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "g q",
      "action": "vim::Rewrap",
      "label": "Rewrap selected text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "g w",
      "action": "vim::Rewrap",
      "label": "Rewrap selected text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "g ?",
      "action": "vim::ConvertToRot13",
      "label": "ROT13 selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == visual",
      "group": "Visual mode",
      "block": 4,
      "key": "\"",
      "action": "vim::PushRegister",
      "label": "Choose register",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-c",
      "action": "vim::NormalBefore",
      "label": "Exit insertion",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-[",
      "action": "vim::NormalBefore",
      "label": "Exit insertion",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "escape",
      "action": "vim::NormalBefore",
      "label": "Exit insertion",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-x",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-x ctrl-o",
      "action": "editor::ShowCompletions",
      "label": "Show completions",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-x ctrl-a",
      "action": "assistant::InlineAssist",
      "label": "Open inline assistant",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-x ctrl-c",
      "action": "editor::ShowEditPrediction",
      "label": "Show edit prediction",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-x ctrl-l",
      "action": "editor::ToggleCodeActions",
      "label": "Show code actions",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-x ctrl-z",
      "action": "editor::Cancel",
      "label": "Cancel editor action",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-x ctrl-e",
      "action": "vim::LineDown",
      "label": "Scroll line down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-x ctrl-y",
      "action": "vim::LineUp",
      "label": "Scroll line up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-w",
      "action": [
        "editor::DeleteToPreviousWordStart",
        {
          "ignore_newlines": false,
          "ignore_brackets": false
        }
      ],
      "label": "Delete previous word",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-u",
      "action": "editor::DeleteToBeginningOfLine",
      "label": "Delete line prefix",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-t",
      "action": "vim::Indent",
      "label": "Indent selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-d",
      "action": "vim::Outdent",
      "label": "Outdent selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-y",
      "action": "vim::InsertFromAbove",
      "label": "Copy character above",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-e",
      "action": "vim::InsertFromBelow",
      "label": "Copy character below",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-r",
      "action": "vim::PushRegister",
      "label": "Choose register",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-o",
      "action": "vim::TemporaryNormal",
      "label": "One Normal command",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "showing_completions",
      "group": "showing_completions",
      "block": 7,
      "key": "ctrl-d",
      "action": "vim::ScrollDown",
      "label": "Half-page down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "showing_completions",
      "group": "showing_completions",
      "block": 7,
      "key": "ctrl-u",
      "action": "vim::ScrollUp",
      "label": "Half-page up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "showing_completions",
      "group": "showing_completions",
      "block": 7,
      "key": "ctrl-e",
      "action": "vim::LineDown",
      "label": "Scroll line down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "showing_completions",
      "group": "showing_completions",
      "block": 7,
      "key": "ctrl-y",
      "action": "vim::LineUp",
      "label": "Scroll line up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "escape",
      "action": "editor::Cancel",
      "label": "Cancel editor action",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "shift-d",
      "action": "vim::DeleteToEndOfLine",
      "label": "Delete line suffix",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "shift-j",
      "action": "vim::JoinLines",
      "label": "Join with spaces",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "shift-y",
      "action": "vim::YankLine",
      "label": "Copy current line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy full path",
          "action": "workspace::CopyPath"
        }
      ]
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "shift-i",
      "action": "vim::InsertFirstNonWhitespace",
      "label": "Insert line start",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "shift-a",
      "action": "vim::InsertEndOfLine",
      "label": "Append line end",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Create folder",
          "action": "project_panel::NewDirectory"
        }
      ]
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "o",
      "action": "vim::InsertLineBelow",
      "label": "Insert line below",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "shift-o",
      "action": "vim::InsertLineAbove",
      "label": "Insert line above",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open externally",
          "action": "workspace::OpenWithSystem"
        }
      ]
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "~",
      "action": "vim::ChangeCase",
      "label": "Invert character case",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "ctrl-a",
      "action": "vim::Increment",
      "label": "Increment number",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "ctrl-x",
      "action": "vim::Decrement",
      "label": "Decrement number",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "p",
      "action": "vim::Paste",
      "label": "Paste after cursor",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Paste copied entry",
          "action": "project_panel::Paste"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull Git changes",
          "action": "git::Pull"
        }
      ]
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "shift-p",
      "action": [
        "vim::Paste",
        {
          "before": true
        }
      ],
      "label": "Paste before cursor",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Preview selected file",
          "action": "project_panel::Open"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Push Git changes",
          "action": "git::Push"
        }
      ]
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "u",
      "action": "vim::Undo",
      "label": "Undo change",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Undo file operation",
          "action": "project_panel::Undo"
        }
      ]
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "shift-u",
      "action": "vim::UndoLastLine",
      "label": "Undo line changes",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "r",
      "action": "vim::PushReplace",
      "label": "Replace character",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Rename selected entry",
          "action": "project_panel::Rename"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull with rebase",
          "action": "git::PullRebase"
        }
      ]
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "s",
      "action": "vim::Substitute",
      "label": "Replace selection",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open right split",
          "action": "project_panel::OpenSplitVertical"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle staging",
          "action": "git::ToggleStaged"
        }
      ]
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "shift-s",
      "action": "vim::SubstituteLine",
      "label": "Replace selected lines",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open lower split",
          "action": "project_panel::OpenSplitHorizontal"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Stage all changes",
          "action": "git::StageAll"
        }
      ]
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "\"",
      "action": "vim::PushRegister",
      "label": "Choose register",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert && !(showing_code_actions || showing_completions)",
      "group": "Insert mode",
      "block": 15,
      "key": "ctrl-p",
      "action": "editor::ShowWordCompletions",
      "label": "Complete buffer word",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert && !(showing_code_actions || showing_completions)",
      "group": "Insert mode",
      "block": 15,
      "key": "ctrl-n",
      "action": "editor::ShowWordCompletions",
      "label": "Complete buffer word",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "(vim_mode == insert || vim_mode == normal) && showing_signature_help && !showing_completions",
      "group": "Normal mode",
      "block": 16,
      "key": "ctrl-p",
      "action": "editor::SignatureHelpPrevious",
      "label": "Previous function signature",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "(vim_mode == insert || vim_mode == normal) && showing_signature_help && !showing_completions",
      "group": "Normal mode",
      "block": 16,
      "key": "ctrl-n",
      "action": "editor::SignatureHelpNext",
      "label": "Next function signature",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "Replace mode",
      "block": 17,
      "key": "ctrl-c",
      "action": "vim::NormalBefore",
      "label": "Exit insertion",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "Replace mode",
      "block": 17,
      "key": "ctrl-[",
      "action": "vim::NormalBefore",
      "label": "Exit insertion",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "Replace mode",
      "block": 17,
      "key": "escape",
      "action": "vim::NormalBefore",
      "label": "Exit insertion",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "Replace mode",
      "block": 17,
      "key": "backspace",
      "action": "vim::UndoReplace",
      "label": "Undo character replacement",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select parent folder",
          "action": "project_panel::SelectParent"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "Replace mode",
      "block": 17,
      "key": "tab",
      "action": "vim::Tab",
      "label": "Next tab stop",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus commit editor",
          "action": "git_panel::FocusEditor"
        },
        {
          "context": "CommitEditor > Editor",
          "label": "Focus changed files",
          "action": "git_panel::FocusChanges"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "Replace mode",
      "block": 17,
      "key": "enter",
      "action": "vim::Enter",
      "label": "Insert newline",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open selected file",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == waiting",
      "group": "vim_mode == waiting",
      "block": 18,
      "key": "tab",
      "action": "vim::Tab",
      "label": "Next tab stop",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus commit editor",
          "action": "git_panel::FocusEditor"
        },
        {
          "context": "CommitEditor > Editor",
          "label": "Focus changed files",
          "action": "git_panel::FocusChanges"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == waiting",
      "group": "vim_mode == waiting",
      "block": 18,
      "key": "enter",
      "action": "vim::Enter",
      "label": "Insert newline",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open selected file",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == waiting",
      "group": "vim_mode == waiting",
      "block": 18,
      "key": "ctrl-c",
      "action": "vim::ClearOperators",
      "label": "Cancel pending operator",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == waiting",
      "group": "vim_mode == waiting",
      "block": 18,
      "key": "ctrl-[",
      "action": "vim::ClearOperators",
      "label": "Cancel pending operator",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == waiting",
      "group": "vim_mode == waiting",
      "block": 18,
      "key": "escape",
      "action": "vim::ClearOperators",
      "label": "Cancel pending operator",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == waiting",
      "group": "vim_mode == waiting",
      "block": 18,
      "key": "ctrl-v",
      "action": [
        "vim::PushLiteral",
        {}
      ],
      "label": "Quote next character",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "vim_mode == insert",
          "label": "Paste clipboard",
          "action": "editor::Paste"
        },
        {
          "context": "vim_mode == replace",
          "label": "Paste clipboard",
          "action": "editor::Paste"
        }
      ]
    },
    {
      "source": "vim",
      "context": "Editor && vim_mode == waiting && (vim_operator == ys || vim_operator == cs)",
      "group": "Operators & objects",
      "block": 19,
      "key": "escape",
      "action": "vim::SwitchToNormalMode",
      "label": "Enter Normal mode",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == operator",
      "group": "vim_mode == operator",
      "block": 20,
      "key": "ctrl-c",
      "action": "vim::ClearOperators",
      "label": "Cancel pending operator",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == operator",
      "group": "vim_mode == operator",
      "block": 20,
      "key": "ctrl-[",
      "action": "vim::ClearOperators",
      "label": "Cancel pending operator",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == operator",
      "group": "vim_mode == operator",
      "block": 20,
      "key": "escape",
      "action": "vim::ClearOperators",
      "label": "Cancel pending operator",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == operator",
      "group": "vim_mode == operator",
      "block": 20,
      "key": "g c",
      "action": "vim::Comment",
      "label": "Comment text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "w",
      "action": "vim::Word",
      "label": "Word text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "shift-w",
      "action": [
        "vim::Word",
        {
          "ignore_punctuation": true
        }
      ],
      "label": "WORD text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "t",
      "action": "vim::Tag",
      "label": "Tag text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open selected file",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle tree layout",
          "action": "git_panel::ToggleTreeView"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "s",
      "action": "vim::Sentence",
      "label": "Sentence text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open right split",
          "action": "project_panel::OpenSplitVertical"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle staging",
          "action": "git::ToggleStaged"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "p",
      "action": "vim::Paragraph",
      "label": "Paragraph text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Paste copied entry",
          "action": "project_panel::Paste"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull Git changes",
          "action": "git::Pull"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "'",
      "action": "vim::Quotes",
      "label": "Single-quoted text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "`",
      "action": "vim::BackQuotes",
      "label": "Backtick-quoted text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "\"",
      "action": "vim::DoubleQuotes",
      "label": "Double-quoted text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "q",
      "action": "vim::MiniQuotes",
      "label": "Nearest quoted text",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Toggle project tree",
          "action": "project_panel::Toggle"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "|",
      "action": "vim::VerticalBars",
      "label": "Bar-delimited text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "(",
      "action": [
        "vim::Parentheses",
        {
          "opening": true
        }
      ],
      "label": "Parenthesized text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": ")",
      "action": "vim::Parentheses",
      "label": "Parenthesized text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "b",
      "action": "vim::Parentheses",
      "label": "Parenthesized text",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Choose Git branch",
          "action": "git::Branch"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "[",
      "action": [
        "vim::SquareBrackets",
        {
          "opening": true
        }
      ],
      "label": "Square-bracketed text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "]",
      "action": "vim::SquareBrackets",
      "label": "Square-bracketed text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "r",
      "action": "vim::SquareBrackets",
      "label": "Square-bracketed text",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Rename selected entry",
          "action": "project_panel::Rename"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull with rebase",
          "action": "git::PullRebase"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "{",
      "action": [
        "vim::CurlyBrackets",
        {
          "opening": true
        }
      ],
      "label": "Brace-delimited text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "}",
      "action": "vim::CurlyBrackets",
      "label": "Brace-delimited text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "shift-b",
      "action": "vim::CurlyBrackets",
      "label": "Brace-delimited text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "<",
      "action": [
        "vim::AngleBrackets",
        {
          "opening": true
        }
      ],
      "label": "Angle-bracketed text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": ">",
      "action": "vim::AngleBrackets",
      "label": "Angle-bracketed text",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "a",
      "action": "vim::Argument",
      "label": "Argument text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Create file",
          "action": "project_panel::NewFile"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "i",
      "action": "vim::IndentObj",
      "label": "Indentation text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "shift-i",
      "action": [
        "vim::IndentObj",
        {
          "include_below": true
        }
      ],
      "label": "Indentation including below",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "f",
      "action": "vim::Method",
      "label": "Method text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Fetch Git remotes",
          "action": "git::Fetch"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "c",
      "action": "vim::Class",
      "label": "Class text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy selected entry",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus commit editor",
          "action": "git_panel::FocusEditor"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == a || vim_operator == i || vim_operator == cs || vim_operator == helix_next || vim_operator == helix_previous",
      "group": "Operators & objects",
      "block": 21,
      "key": "e",
      "action": "vim::EntireFile",
      "label": "Entire file object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "(vim_operator == a || vim_operator == i || vim_operator == helix_next || vim_operator == helix_previous) && helix_mode",
      "group": "Operators & objects",
      "block": 22,
      "key": "m",
      "action": "vim::AnyPair",
      "label": "Nearest paired delimiters",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "(vim_operator == a || vim_operator == i || vim_operator == helix_next || vim_operator == helix_previous) && helix_mode",
      "group": "Operators & objects",
      "block": 22,
      "key": "t",
      "action": "vim::Class",
      "label": "Class text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open selected file",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle tree layout",
          "action": "git_panel::ToggleTreeView"
        }
      ]
    },
    {
      "source": "vim",
      "context": "(vim_operator == a || vim_operator == i || vim_operator == helix_next || vim_operator == helix_previous) && helix_mode",
      "group": "Operators & objects",
      "block": 22,
      "key": "c",
      "action": "vim::Comment",
      "label": "Comment text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy selected entry",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus commit editor",
          "action": "git_panel::FocusEditor"
        }
      ]
    },
    {
      "source": "vim",
      "context": "(vim_operator == a || vim_operator == i || vim_operator == helix_next || vim_operator == helix_previous) && helix_mode",
      "group": "Operators & objects",
      "block": 22,
      "key": "x",
      "action": "vim::Tag",
      "label": "Tag text object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Cut selected entry",
          "action": "project_panel::Cut"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == c",
      "group": "Operators & objects",
      "block": 26,
      "key": "c",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy selected entry",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus commit editor",
          "action": "git_panel::FocusEditor"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == c",
      "group": "Operators & objects",
      "block": 26,
      "key": "x",
      "action": "vim::Exchange",
      "label": "Exchange text regions",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Cut selected entry",
          "action": "project_panel::Cut"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == c",
      "group": "Operators & objects",
      "block": 26,
      "key": "d",
      "action": "editor::Rename",
      "label": "Rename symbol",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Delete selected entry",
          "action": [
            "project_panel::Delete",
            {
              "skip_prompt": false
            }
          ]
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Discard file changes",
          "action": [
            "git::RestoreFile",
            {
              "skip_prompt": false
            }
          ]
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == c",
      "group": "Operators & objects",
      "block": 26,
      "key": "s",
      "action": [
        "vim::PushChangeSurrounds",
        {}
      ],
      "label": "Change surrounding delimiters",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open right split",
          "action": "project_panel::OpenSplitVertical"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle staging",
          "action": "git::ToggleStaged"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == d",
      "group": "Operators & objects",
      "block": 27,
      "key": "d",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Delete selected entry",
          "action": [
            "project_panel::Delete",
            {
              "skip_prompt": false
            }
          ]
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Discard file changes",
          "action": [
            "git::RestoreFile",
            {
              "skip_prompt": false
            }
          ]
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == d",
      "group": "Operators & objects",
      "block": 27,
      "key": "s",
      "action": "vim::PushDeleteSurrounds",
      "label": "Delete surrounding delimiters",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open right split",
          "action": "project_panel::OpenSplitVertical"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle staging",
          "action": "git::ToggleStaged"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == d",
      "group": "Operators & objects",
      "block": 27,
      "key": "v",
      "action": "vim::PushForcedMotion",
      "label": "Force motion type",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == d",
      "group": "Operators & objects",
      "block": 27,
      "key": "o",
      "action": "editor::ToggleSelectedDiffHunks",
      "label": "Toggle diff hunks",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == d",
      "group": "Operators & objects",
      "block": 27,
      "key": "shift-o",
      "action": "git::ToggleStaged",
      "label": "Toggle staging",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open externally",
          "action": "workspace::OpenWithSystem"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == d",
      "group": "Operators & objects",
      "block": 27,
      "key": "p",
      "action": "git::Restore",
      "label": "Discard selected changes",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Paste copied entry",
          "action": "project_panel::Paste"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull Git changes",
          "action": "git::Pull"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == d",
      "group": "Operators & objects",
      "block": 27,
      "key": "u",
      "action": "git::StageAndNext",
      "label": "Stage; next hunk",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Undo file operation",
          "action": "project_panel::Undo"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == d",
      "group": "Operators & objects",
      "block": 27,
      "key": "shift-u",
      "action": "git::UnstageAndNext",
      "label": "Unstage; next hunk",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == gu",
      "group": "Operators & objects",
      "block": 28,
      "key": "g u",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == gu",
      "group": "Operators & objects",
      "block": 28,
      "key": "u",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Undo file operation",
          "action": "project_panel::Undo"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == gU",
      "group": "Operators & objects",
      "block": 29,
      "key": "g shift-u",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == gU",
      "group": "Operators & objects",
      "block": 29,
      "key": "shift-u",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == g~",
      "group": "Operators & objects",
      "block": 30,
      "key": "g ~",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == g~",
      "group": "Operators & objects",
      "block": 30,
      "key": "~",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == g?",
      "group": "Operators & objects",
      "block": 31,
      "key": "g ?",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == g?",
      "group": "Operators & objects",
      "block": 31,
      "key": "?",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open context menu",
          "action": "project_panel::OpenContextMenu"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == gq",
      "group": "Operators & objects",
      "block": 32,
      "key": "g q",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == gq",
      "group": "Operators & objects",
      "block": 32,
      "key": "q",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Toggle project tree",
          "action": "project_panel::Toggle"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == gq",
      "group": "Operators & objects",
      "block": 32,
      "key": "g w",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == gq",
      "group": "Operators & objects",
      "block": 32,
      "key": "w",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == y",
      "group": "Operators & objects",
      "block": 33,
      "key": "y",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy relative path",
          "action": "workspace::CopyRelativePath"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == y",
      "group": "Operators & objects",
      "block": 33,
      "key": "v",
      "action": "vim::PushForcedMotion",
      "label": "Force motion type",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == y",
      "group": "Operators & objects",
      "block": 33,
      "key": "s",
      "action": [
        "vim::PushAddSurrounds",
        {}
      ],
      "label": "Add surrounding delimiters",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open right split",
          "action": "project_panel::OpenSplitVertical"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle staging",
          "action": "git::ToggleStaged"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == ys",
      "group": "Operators & objects",
      "block": 34,
      "key": "s",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open right split",
          "action": "project_panel::OpenSplitVertical"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle staging",
          "action": "git::ToggleStaged"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == >",
      "group": "Operators & objects",
      "block": 35,
      "key": ">",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == <",
      "group": "Operators & objects",
      "block": 36,
      "key": "<",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == eq",
      "group": "Operators & objects",
      "block": 37,
      "key": "=",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == sh",
      "group": "Operators & objects",
      "block": 38,
      "key": "!",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_operator == gc",
      "group": "Operators & objects",
      "block": 39,
      "key": "c",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy selected entry",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus commit editor",
          "action": "git_panel::FocusEditor"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == gb",
      "group": "Operators & objects",
      "block": 40,
      "key": "c",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy selected entry",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus commit editor",
          "action": "git_panel::FocusEditor"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == gR",
      "group": "Operators & objects",
      "block": 41,
      "key": "r",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Rename selected entry",
          "action": "project_panel::Rename"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull with rebase",
          "action": "git::PullRebase"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == gR",
      "group": "Operators & objects",
      "block": 41,
      "key": "shift-r",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == cx",
      "group": "Operators & objects",
      "block": 42,
      "key": "x",
      "action": "vim::CurrentLine",
      "label": "Current line object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Cut selected entry",
          "action": "project_panel::Cut"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_operator == cx",
      "group": "Operators & objects",
      "block": 42,
      "key": "c",
      "action": "vim::ClearExchange",
      "label": "Cancel text exchange",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy selected entry",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus commit editor",
          "action": "git_panel::FocusEditor"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-@",
      "action": [
        "vim::Literal",
        [
          "ctrl-@",
          "\u0000"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-a",
      "action": [
        "vim::Literal",
        [
          "ctrl-a",
          "\u0001"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-b",
      "action": [
        "vim::Literal",
        [
          "ctrl-b",
          "\u0002"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-c",
      "action": [
        "vim::Literal",
        [
          "ctrl-c",
          "\u0003"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-d",
      "action": [
        "vim::Literal",
        [
          "ctrl-d",
          "\u0004"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-e",
      "action": [
        "vim::Literal",
        [
          "ctrl-e",
          "\u0005"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-f",
      "action": [
        "vim::Literal",
        [
          "ctrl-f",
          "\u0006"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-g",
      "action": [
        "vim::Literal",
        [
          "ctrl-g",
          "\u0007"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-i",
      "action": [
        "vim::Literal",
        [
          "ctrl-i",
          "\t"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-m",
      "action": [
        "vim::Literal",
        [
          "ctrl-m",
          "\r"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-n",
      "action": [
        "vim::Literal",
        [
          "ctrl-n",
          "\u000e"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-o",
      "action": [
        "vim::Literal",
        [
          "ctrl-o",
          "\u000f"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-p",
      "action": [
        "vim::Literal",
        [
          "ctrl-p",
          "\u0010"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-q",
      "action": [
        "vim::Literal",
        [
          "ctrl-q",
          "\u0011"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "vim_mode == insert",
          "label": "Quote next character",
          "action": [
            "vim::PushLiteral",
            {}
          ]
        },
        {
          "context": "vim_mode == replace",
          "label": "Quote next character",
          "action": [
            "vim::PushLiteral",
            {}
          ]
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-r",
      "action": [
        "vim::Literal",
        [
          "ctrl-r",
          "\u0012"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-s",
      "action": [
        "vim::Literal",
        [
          "ctrl-s",
          "\u0013"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-t",
      "action": [
        "vim::Literal",
        [
          "ctrl-t",
          "\u0014"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-u",
      "action": [
        "vim::Literal",
        [
          "ctrl-u",
          "\u0015"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-v",
      "action": [
        "vim::Literal",
        [
          "ctrl-v",
          "\u0016"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "vim_mode == insert",
          "label": "Paste clipboard",
          "action": "editor::Paste"
        },
        {
          "context": "vim_mode == replace",
          "label": "Paste clipboard",
          "action": "editor::Paste"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-w",
      "action": [
        "vim::Literal",
        [
          "ctrl-w",
          "\u0017"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-x",
      "action": [
        "vim::Literal",
        [
          "ctrl-x",
          "\u0018"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-y",
      "action": [
        "vim::Literal",
        [
          "ctrl-y",
          "\u0019"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-z",
      "action": [
        "vim::Literal",
        [
          "ctrl-z",
          "\u001a"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-[",
      "action": [
        "vim::Literal",
        [
          "ctrl-[",
          "\u001b"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-\\",
      "action": [
        "vim::Literal",
        [
          "ctrl-\\",
          "\u001c"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-]",
      "action": [
        "vim::Literal",
        [
          "ctrl-]",
          "\u001d"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-^",
      "action": [
        "vim::Literal",
        [
          "ctrl-^",
          "\u001e"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "ctrl-_",
      "action": [
        "vim::Literal",
        [
          "ctrl-_",
          "\u001f"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "escape",
      "action": [
        "vim::Literal",
        [
          "escape",
          "\u001b"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "enter",
      "action": [
        "vim::Literal",
        [
          "enter",
          "\r"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open selected file",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "tab",
      "action": [
        "vim::Literal",
        [
          "tab",
          "\t"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus commit editor",
          "action": "git_panel::FocusEditor"
        },
        {
          "context": "CommitEditor > Editor",
          "label": "Focus changed files",
          "action": "git_panel::FocusChanges"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "backspace",
      "action": [
        "vim::Literal",
        [
          "backspace",
          "\b"
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select parent folder",
          "action": "project_panel::SelectParent"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == literal",
      "group": "vim_mode == literal",
      "block": 43,
      "key": "delete",
      "action": [
        "vim::Literal",
        [
          "delete",
          ""
        ]
      ],
      "label": "Literal control character",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "BufferSearchBar && !in_replace",
      "group": "Buffer Search Bar",
      "block": 44,
      "key": "enter",
      "action": "vim::SearchSubmit",
      "label": "Confirm search",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open selected file",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "BufferSearchBar && !in_replace",
      "group": "Buffer Search Bar",
      "block": 44,
      "key": "escape",
      "action": "buffer_search::Dismiss",
      "label": "Close file search",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w h",
      "action": "workspace::ActivatePaneLeft",
      "label": "Focus left pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w l",
      "action": "workspace::ActivatePaneRight",
      "label": "Focus right pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w k",
      "action": "workspace::ActivatePaneUp",
      "label": "Focus upper pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w j",
      "action": "workspace::ActivatePaneDown",
      "label": "Focus lower pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w x",
      "action": "workspace::SwapPaneAdjacent",
      "label": "Swap adjacent panes",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w shift-h",
      "action": "workspace::MovePaneLeft",
      "label": "Move pane left",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w shift-l",
      "action": "workspace::MovePaneRight",
      "label": "Move pane right",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w shift-k",
      "action": "workspace::MovePaneUp",
      "label": "Move pane up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w shift-j",
      "action": "workspace::MovePaneDown",
      "label": "Move pane down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w >",
      "action": "vim::ResizePaneRight",
      "label": "Widen pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w <",
      "action": "vim::ResizePaneLeft",
      "label": "Narrow pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w -",
      "action": "vim::ResizePaneDown",
      "label": "Shorten pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w +",
      "action": "vim::ResizePaneUp",
      "label": "Heighten pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w _",
      "action": "vim::MaximizePane",
      "label": "Maximize pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w =",
      "action": "vim::ResetPaneSizes",
      "label": "Equalize pane sizes",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w g t",
      "action": "pane::ActivateNextItem",
      "label": "Next tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w g shift-t",
      "action": "pane::ActivatePreviousItem",
      "label": "Previous tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w w",
      "action": "workspace::ActivateNextPane",
      "label": "Focus next pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w p",
      "action": "workspace::ActivatePreviousPane",
      "label": "Focus previous pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w shift-w",
      "action": "workspace::ActivatePreviousPane",
      "label": "Focus previous pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w v",
      "action": "pane::SplitVertical",
      "label": "Split pane right",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w s",
      "action": "pane::SplitHorizontal",
      "label": "Split pane down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w c",
      "action": "pane::CloseActiveItem",
      "label": "Close active tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w q",
      "action": "pane::CloseActiveItem",
      "label": "Close active tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w a",
      "action": "pane::CloseAllItems",
      "label": "Close all tabs",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w o",
      "action": "workspace::CloseInactiveTabsAndPanes",
      "label": "Keep active editor",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w n",
      "action": "workspace::NewFileSplitHorizontal",
      "label": "New split file",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "g t",
      "action": "vim::GoToTab",
      "label": "Next tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "g shift-t",
      "action": "vim::GoToPreviousTab",
      "label": "Previous tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "!Editor && !Terminal",
      "group": "Outside Editor",
      "block": 46,
      "key": ":",
      "action": "command_palette::Toggle",
      "label": "Open command palette",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "!Editor && !Terminal",
      "group": "Outside Editor",
      "block": 46,
      "key": "g /",
      "action": "pane::DeploySearch",
      "label": "Search project",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "!Editor && !Terminal",
      "group": "Outside Editor",
      "block": 46,
      "key": "] b",
      "action": "pane::ActivateNextItem",
      "label": "Next tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "!Editor && !Terminal",
      "group": "Outside Editor",
      "block": 46,
      "key": "[ b",
      "action": "pane::ActivatePreviousItem",
      "label": "Previous tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "!Editor && !Terminal",
      "group": "Outside Editor",
      "block": 46,
      "key": "] shift-b",
      "action": "pane::ActivateLastItem",
      "label": "Last tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "!Editor && !Terminal",
      "group": "Outside Editor",
      "block": 46,
      "key": "[ shift-b",
      "action": [
        "pane::ActivateItem",
        0
      ],
      "label": "First tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "!Editor && !Terminal",
      "group": "Outside Editor",
      "block": 46,
      "key": "space f",
      "action": "file_finder::Toggle",
      "label": "Find project file",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "!Editor && !Terminal",
      "group": "Outside Editor",
      "block": 46,
      "key": "space /",
      "action": "pane::DeploySearch",
      "label": "Search project",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
          "label": "Search project",
          "action": "pane::DeploySearch"
        }
      ]
    },
    {
      "source": "vim",
      "context": "!Editor && !Terminal",
      "group": "Outside Editor",
      "block": 46,
      "key": "space shift-s",
      "action": "project_symbols::Toggle",
      "label": "Find project symbol",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "!Editor && !Terminal",
      "group": "Outside Editor",
      "block": 46,
      "key": "space w h",
      "action": "workspace::ActivatePaneLeft",
      "label": "Focus left pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
          "label": "Toggle left dock",
          "action": "workspace::ToggleLeftDock"
        }
      ]
    },
    {
      "source": "vim",
      "context": "!Editor && !Terminal",
      "group": "Outside Editor",
      "block": 46,
      "key": "space w j",
      "action": "workspace::ActivatePaneDown",
      "label": "Focus lower pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
          "label": "Toggle bottom dock",
          "action": "workspace::ToggleBottomDock"
        }
      ]
    },
    {
      "source": "vim",
      "context": "!Editor && !Terminal",
      "group": "Outside Editor",
      "block": 46,
      "key": "space w k",
      "action": "workspace::ActivatePaneUp",
      "label": "Focus upper pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
          "label": "Toggle right dock",
          "action": "workspace::ToggleRightDock"
        }
      ]
    },
    {
      "source": "vim",
      "context": "!Editor && !Terminal",
      "group": "Outside Editor",
      "block": 46,
      "key": "space w l",
      "action": "workspace::ActivatePaneRight",
      "label": "Focus right pane",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
          "label": "Open LSP tools",
          "action": "lsp_tool::ToggleMenu"
        }
      ]
    },
    {
      "source": "vim",
      "context": "!Editor && !Terminal",
      "group": "Outside Editor",
      "block": 46,
      "key": "space w q",
      "action": "pane::CloseActiveItem",
      "label": "Close active tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
          "label": "Close active dock",
          "action": [
            "action::Sequence",
            [
              "workspace::CloseActiveDock",
              [
                "workspace::ActivatePane",
                0
              ]
            ]
          ]
        },
        {
          "context": "(VimControl || !vim_mode) && !Dock && (!Terminal || vi_mode)",
          "label": "Close active tab",
          "action": "pane::CloseActiveItem"
        }
      ]
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "0",
      "action": [
        "vim::Number",
        0
      ],
      "label": "Count digit 0",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "1",
      "action": [
        "vim::Number",
        1
      ],
      "label": "Count digit 1",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "2",
      "action": [
        "vim::Number",
        2
      ],
      "label": "Count digit 2",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "3",
      "action": [
        "vim::Number",
        3
      ],
      "label": "Count digit 3",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "4",
      "action": [
        "vim::Number",
        4
      ],
      "label": "Count digit 4",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "5",
      "action": [
        "vim::Number",
        5
      ],
      "label": "Count digit 5",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "6",
      "action": [
        "vim::Number",
        6
      ],
      "label": "Count digit 6",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "7",
      "action": [
        "vim::Number",
        7
      ],
      "label": "Count digit 7",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "8",
      "action": [
        "vim::Number",
        8
      ],
      "label": "Count digit 8",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "9",
      "action": [
        "vim::Number",
        9
      ],
      "label": "Count digit 9",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": ":",
      "action": "command_palette::Toggle",
      "label": "Open command palette",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "%",
      "action": "project_panel::NewFile",
      "label": "Create file",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "escape",
      "action": "vim::ToggleProjectPanelFocus",
      "label": "Toggle project focus",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "v",
      "action": "project_panel::OpenSplitVertical",
      "label": "Open right split",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "z d",
      "action": "project_panel::CompareMarkedFiles",
      "label": "Compare marked files",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "] c",
      "action": "project_panel::SelectNextGitEntry",
      "label": "Next changed file",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "[ c",
      "action": "project_panel::SelectPrevGitEntry",
      "label": "Previous changed file",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "] d",
      "action": "project_panel::SelectNextDiagnostic",
      "label": "Next diagnostic file",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "[ d",
      "action": "project_panel::SelectPrevDiagnostic",
      "label": "Previous diagnostic file",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "}",
      "action": "project_panel::SelectNextDirectory",
      "label": "Next folder",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "{",
      "action": "project_panel::SelectPrevDirectory",
      "label": "Previous folder",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "-",
      "action": "project_panel::SelectParent",
      "label": "Select parent folder",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "ctrl-u",
      "action": "project_panel::ScrollUp",
      "label": "Scroll tree up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "ctrl-d",
      "action": "project_panel::ScrollDown",
      "label": "Scroll tree down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "z t",
      "action": "project_panel::ScrollCursorTop",
      "label": "Align selection top",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "z z",
      "action": "project_panel::ScrollCursorCenter",
      "label": "Center selected entry",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "z c",
      "action": "project_panel::ScrollCursorCenter",
      "label": "Center selected entry",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 47,
      "key": "z b",
      "action": "project_panel::ScrollCursorBottom",
      "label": "Align selection bottom",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "0",
      "action": [
        "vim::Number",
        0
      ],
      "label": "Count digit 0",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "1",
      "action": [
        "vim::Number",
        1
      ],
      "label": "Count digit 1",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "2",
      "action": [
        "vim::Number",
        2
      ],
      "label": "Count digit 2",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "3",
      "action": [
        "vim::Number",
        3
      ],
      "label": "Count digit 3",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "4",
      "action": [
        "vim::Number",
        4
      ],
      "label": "Count digit 4",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "5",
      "action": [
        "vim::Number",
        5
      ],
      "label": "Count digit 5",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "6",
      "action": [
        "vim::Number",
        6
      ],
      "label": "Count digit 6",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "7",
      "action": [
        "vim::Number",
        7
      ],
      "label": "Count digit 7",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "8",
      "action": [
        "vim::Number",
        8
      ],
      "label": "Count digit 8",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "9",
      "action": [
        "vim::Number",
        9
      ],
      "label": "Count digit 9",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "h",
      "action": "outline_panel::CollapseSelectedEntry",
      "label": "Collapse outline entry",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Collapse selected folder",
          "action": "project_panel::CollapseSelectedEntry"
        }
      ]
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "j",
      "action": "vim::MenuSelectNext",
      "label": "Select next item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select next item",
          "action": "vim::MenuSelectNext"
        }
      ]
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "k",
      "action": "vim::MenuSelectPrevious",
      "label": "Select previous item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select previous item",
          "action": "vim::MenuSelectPrevious"
        }
      ]
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "l",
      "action": "outline_panel::ExpandSelectedEntry",
      "label": "Expand outline entry",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open selected file",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus selected diff",
          "action": [
            "action::Sequence",
            [
              "menu::Confirm",
              "workspace::FocusCenterPane"
            ]
          ]
        }
      ]
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "shift-g",
      "action": "menu::SelectLast",
      "label": "Select last item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select last item",
          "action": "menu::SelectLast"
        }
      ]
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "g g",
      "action": "menu::SelectFirst",
      "label": "Select first item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select first item",
          "action": "menu::SelectFirst"
        }
      ]
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "-",
      "action": "outline_panel::SelectParent",
      "label": "Select parent symbol",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "/",
      "action": "menu::Cancel",
      "label": "Dismiss menu",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Find project file",
          "action": "file_finder::Toggle"
        }
      ]
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "ctrl-u",
      "action": "outline_panel::ScrollUp",
      "label": "Scroll outline up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "ctrl-d",
      "action": "outline_panel::ScrollDown",
      "label": "Scroll outline down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "z t",
      "action": "outline_panel::ScrollCursorTop",
      "label": "Align selection top",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "z z",
      "action": "outline_panel::ScrollCursorCenter",
      "label": "Center selected symbol",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "z c",
      "action": "outline_panel::ScrollCursorCenter",
      "label": "Center selected symbol",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "z b",
      "action": "outline_panel::ScrollCursorBottom",
      "label": "Align selection bottom",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "GitGraph && !GitGraphSearchBar",
      "group": "Git Graph",
      "block": 52,
      "key": "j",
      "action": "vim::MenuSelectNext",
      "label": "Select next item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select next item",
          "action": "vim::MenuSelectNext"
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitGraph && !GitGraphSearchBar",
      "group": "Git Graph",
      "block": 52,
      "key": "k",
      "action": "vim::MenuSelectPrevious",
      "label": "Select previous item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select previous item",
          "action": "vim::MenuSelectPrevious"
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitGraph && !GitGraphSearchBar",
      "group": "Git Graph",
      "block": 52,
      "key": "ctrl-d",
      "action": "git_graph::ScrollDown",
      "label": "Scroll graph down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "GitGraph && !GitGraphSearchBar",
      "group": "Git Graph",
      "block": 52,
      "key": "ctrl-u",
      "action": "git_graph::ScrollUp",
      "label": "Scroll graph up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "GitGraph && !GitGraphSearchBar",
      "group": "Git Graph",
      "block": 52,
      "key": "shift-g",
      "action": "menu::SelectLast",
      "label": "Select last item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select last item",
          "action": "menu::SelectLast"
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitGraph && !GitGraphSearchBar",
      "group": "Git Graph",
      "block": 52,
      "key": "g g",
      "action": "menu::SelectFirst",
      "label": "Select first item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select first item",
          "action": "menu::SelectFirst"
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitPanel && (ChangesList || HistoryList) && !GitBranchSelector && !GitRepositorySelector",
      "group": "Git panel",
      "block": 53,
      "key": "j",
      "action": "menu::SelectNext",
      "label": "Select next item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select next item",
          "action": "vim::MenuSelectNext"
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitPanel && (ChangesList || HistoryList) && !GitBranchSelector && !GitRepositorySelector",
      "group": "Git panel",
      "block": 53,
      "key": "k",
      "action": "menu::SelectPrevious",
      "label": "Select previous item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select previous item",
          "action": "vim::MenuSelectPrevious"
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitPanel && (ChangesList || HistoryList) && !GitBranchSelector && !GitRepositorySelector",
      "group": "Git panel",
      "block": 53,
      "key": "g f",
      "action": "menu::Confirm",
      "label": "Open project diff",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "Editor && multibuffer && (vim_mode == normal || vim_mode == visual) && !menu",
          "label": "Open source files",
          "action": "editor::OpenExcerpts"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Open source file",
          "action": "git::ViewFile"
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitPanel && ChangesList && !GitBranchSelector && !GitRepositorySelector",
      "group": "Git panel",
      "block": 54,
      "key": "h",
      "action": "git_panel::CollapseSelectedEntry",
      "label": "Collapse selected folder",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Collapse selected folder",
          "action": "project_panel::CollapseSelectedEntry"
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitPanel && ChangesList && !GitBranchSelector && !GitRepositorySelector",
      "group": "Git panel",
      "block": 54,
      "key": "l",
      "action": "git_panel::ExpandSelectedEntry",
      "label": "Expand selected folder",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open selected file",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus selected diff",
          "action": [
            "action::Sequence",
            [
              "menu::Confirm",
              "workspace::FocusCenterPane"
            ]
          ]
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitPanel && ChangesList && !GitBranchSelector && !GitRepositorySelector",
      "group": "Git panel",
      "block": 54,
      "key": "g g",
      "action": "menu::SelectFirst",
      "label": "Select first item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select first item",
          "action": "menu::SelectFirst"
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitPanel && ChangesList && !GitBranchSelector && !GitRepositorySelector",
      "group": "Git panel",
      "block": 54,
      "key": "shift-g",
      "action": "menu::SelectLast",
      "label": "Select last item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select last item",
          "action": "menu::SelectLast"
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitPanel && ChangesList && !GitBranchSelector && !GitRepositorySelector",
      "group": "Git panel",
      "block": 54,
      "key": "i",
      "action": "git_panel::FocusEditor",
      "label": "Focus commit editor",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "GitPanel && ChangesList && !GitBranchSelector && !GitRepositorySelector",
      "group": "Git panel",
      "block": 54,
      "key": "x",
      "action": "git::ToggleStaged",
      "label": "Toggle staging",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Cut selected entry",
          "action": "project_panel::Cut"
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitPanel && ChangesList && !GitBranchSelector && !GitRepositorySelector",
      "group": "Git panel",
      "block": 54,
      "key": "shift-x",
      "action": "git::StageAll",
      "label": "Stage all changes",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "GitPanel && ChangesList && !GitBranchSelector && !GitRepositorySelector",
      "group": "Git panel",
      "block": 54,
      "key": "g x",
      "action": "git::StageRange",
      "label": "Stage selected range",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitDiff > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
          "label": "Discard selected changes",
          "action": "git::Restore"
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitPanel && ChangesList && !GitBranchSelector && !GitRepositorySelector",
      "group": "Git panel",
      "block": 54,
      "key": "shift-u",
      "action": "git::UnstageAll",
      "label": "Unstage all changes",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "Editor && mode == auto_height && VimControl",
      "group": "Editor",
      "block": 55,
      "key": "/",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Find project file",
          "action": "file_finder::Toggle"
        }
      ]
    },
    {
      "source": "vim",
      "context": "Editor && mode == auto_height && VimControl",
      "group": "Editor",
      "block": 55,
      "key": "?",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open context menu",
          "action": "project_panel::OpenContextMenu"
        }
      ]
    },
    {
      "source": "vim",
      "context": "Editor && mode == auto_height && VimControl",
      "group": "Editor",
      "block": 55,
      "key": "#",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "Editor && mode == auto_height && VimControl",
      "group": "Editor",
      "block": 55,
      "key": "*",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "Editor && mode == auto_height && VimControl",
      "group": "Editor",
      "block": 55,
      "key": "n",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "Editor && mode == auto_height && VimControl",
      "group": "Editor",
      "block": 55,
      "key": "shift-n",
      "action": null,
      "label": "Disabled / prefix",
      "disabled": true,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "Picker > Editor",
      "group": "Picker",
      "block": 56,
      "key": "ctrl-u",
      "action": "editor::DeleteToBeginningOfLine",
      "label": "Delete line prefix",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "Picker > Editor",
      "group": "Picker",
      "block": 56,
      "key": "ctrl-w",
      "action": "editor::DeleteToPreviousWordStart",
      "label": "Delete previous word",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "Picker > Editor",
      "group": "Picker",
      "block": 56,
      "key": "ctrl-p",
      "action": "menu::SelectPrevious",
      "label": "Select previous item",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "Picker > Editor",
      "group": "Picker",
      "block": 56,
      "key": "ctrl-n",
      "action": "menu::SelectNext",
      "label": "Select next item",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "GitCommit > Editor && VimControl && vim_mode == normal",
      "group": "Normal mode",
      "block": 57,
      "key": "ctrl-c",
      "action": "menu::Cancel",
      "label": "Dismiss menu",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "GitCommit > Editor && VimControl && vim_mode == normal",
      "group": "Normal mode",
      "block": 57,
      "key": "escape",
      "action": "menu::Cancel",
      "label": "Dismiss menu",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "SettingsWindow > NavigationMenu && !search",
      "group": "Settings Window",
      "block": 61,
      "key": "l",
      "action": "settings_editor::ExpandNavEntry",
      "label": "Expand settings section",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open selected file",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus selected diff",
          "action": [
            "action::Sequence",
            [
              "menu::Confirm",
              "workspace::FocusCenterPane"
            ]
          ]
        }
      ]
    },
    {
      "source": "vim",
      "context": "SettingsWindow > NavigationMenu && !search",
      "group": "Settings Window",
      "block": 61,
      "key": "h",
      "action": "settings_editor::CollapseNavEntry",
      "label": "Collapse settings section",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Collapse selected folder",
          "action": "project_panel::CollapseSelectedEntry"
        }
      ]
    },
    {
      "source": "vim",
      "context": "SettingsWindow > NavigationMenu && !search",
      "group": "Settings Window",
      "block": 61,
      "key": "k",
      "action": "settings_editor::FocusPreviousNavEntry",
      "label": "Previous settings section",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select previous item",
          "action": "vim::MenuSelectPrevious"
        }
      ]
    },
    {
      "source": "vim",
      "context": "SettingsWindow > NavigationMenu && !search",
      "group": "Settings Window",
      "block": 61,
      "key": "j",
      "action": "settings_editor::FocusNextNavEntry",
      "label": "Next settings section",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select next item",
          "action": "vim::MenuSelectNext"
        }
      ]
    },
    {
      "source": "vim",
      "context": "SettingsWindow > NavigationMenu && !search",
      "group": "Settings Window",
      "block": 61,
      "key": "g g",
      "action": "settings_editor::FocusFirstNavEntry",
      "label": "First settings section",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select first item",
          "action": "menu::SelectFirst"
        }
      ]
    },
    {
      "source": "vim",
      "context": "SettingsWindow > NavigationMenu && !search",
      "group": "Settings Window",
      "block": 61,
      "key": "shift-g",
      "action": "settings_editor::FocusLastNavEntry",
      "label": "Last settings section",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select last item",
          "action": "menu::SelectLast"
        }
      ]
    },
    {
      "source": "vim",
      "context": "MarkdownPreview",
      "group": "Markdown Preview",
      "block": 62,
      "key": "ctrl-u",
      "action": "markdown::ScrollPageUp",
      "label": "Page preview up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "MarkdownPreview",
      "group": "Markdown Preview",
      "block": 62,
      "key": "ctrl-d",
      "action": "markdown::ScrollPageDown",
      "label": "Page preview down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "MarkdownPreview",
      "group": "Markdown Preview",
      "block": 62,
      "key": "ctrl-y",
      "action": "markdown::ScrollUp",
      "label": "Scroll preview up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "MarkdownPreview",
      "group": "Markdown Preview",
      "block": 62,
      "key": "ctrl-e",
      "action": "markdown::ScrollDown",
      "label": "Scroll preview down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "MarkdownPreview",
      "group": "Markdown Preview",
      "block": 62,
      "key": "ctrl-o",
      "action": "pane::GoBack",
      "label": "Previous navigation location",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "MarkdownPreview",
      "group": "Markdown Preview",
      "block": 62,
      "key": "ctrl-i",
      "action": "pane::GoForward",
      "label": "Next navigation location",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "MarkdownPreview",
      "group": "Markdown Preview",
      "block": 62,
      "key": "g g",
      "action": "markdown::ScrollToTop",
      "label": "Preview start",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select first item",
          "action": "menu::SelectFirst"
        }
      ]
    },
    {
      "source": "vim",
      "context": "MarkdownPreview",
      "group": "Markdown Preview",
      "block": 62,
      "key": "shift-g",
      "action": "markdown::ScrollToBottom",
      "label": "Preview end",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select last item",
          "action": "menu::SelectLast"
        }
      ]
    },
    {
      "source": "vim",
      "context": "MarkdownPreview",
      "group": "Markdown Preview",
      "block": 62,
      "key": "/",
      "action": "buffer_search::Deploy",
      "label": "Search current view",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Find project file",
          "action": "file_finder::Toggle"
        }
      ]
    },
    {
      "source": "vim",
      "context": "FileHistoryView",
      "group": "File History View",
      "block": 63,
      "key": "j",
      "action": "menu::SelectNext",
      "label": "Select next item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select next item",
          "action": "vim::MenuSelectNext"
        }
      ]
    },
    {
      "source": "vim",
      "context": "FileHistoryView",
      "group": "File History View",
      "block": 63,
      "key": "k",
      "action": "menu::SelectPrevious",
      "label": "Select previous item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select previous item",
          "action": "vim::MenuSelectPrevious"
        }
      ]
    },
    {
      "source": "vim",
      "context": "FileHistoryView",
      "group": "File History View",
      "block": 63,
      "key": "g g",
      "action": "menu::SelectFirst",
      "label": "Select first item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select first item",
          "action": "menu::SelectFirst"
        }
      ]
    },
    {
      "source": "vim",
      "context": "FileHistoryView",
      "group": "File History View",
      "block": 63,
      "key": "shift-g",
      "action": "menu::SelectLast",
      "label": "Select last item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select last item",
          "action": "menu::SelectLast"
        }
      ]
    },
    {
      "source": "vim",
      "context": "NotebookEditor > Editor && VimControl && vim_mode == normal",
      "group": "Normal mode",
      "block": 64,
      "key": "j",
      "action": "notebook::NotebookMoveDown",
      "label": "Next notebook cell",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select next item",
          "action": "vim::MenuSelectNext"
        }
      ]
    },
    {
      "source": "vim",
      "context": "NotebookEditor > Editor && VimControl && vim_mode == normal",
      "group": "Normal mode",
      "block": 64,
      "key": "k",
      "action": "notebook::NotebookMoveUp",
      "label": "Previous notebook cell",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select previous item",
          "action": "vim::MenuSelectPrevious"
        }
      ]
    },
    {
      "source": "vim",
      "context": "NotebookEditor > Editor && VimControl && vim_mode == normal",
      "group": "Normal mode",
      "block": 64,
      "key": "escape",
      "action": "notebook::EnterCommandMode",
      "label": "Enter Command mode",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "NotebookEditor && notebook_mode == command",
      "group": "Notebook Editor",
      "block": 65,
      "key": "j",
      "action": "menu::SelectNext",
      "label": "Select next item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select next item",
          "action": "vim::MenuSelectNext"
        }
      ]
    },
    {
      "source": "vim",
      "context": "NotebookEditor && notebook_mode == command",
      "group": "Notebook Editor",
      "block": 65,
      "key": "k",
      "action": "menu::SelectPrevious",
      "label": "Select previous item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select previous item",
          "action": "vim::MenuSelectPrevious"
        }
      ]
    },
    {
      "source": "vim",
      "context": "NotebookEditor && notebook_mode == command",
      "group": "Notebook Editor",
      "block": 65,
      "key": "g g",
      "action": "menu::SelectFirst",
      "label": "Select first item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select first item",
          "action": "menu::SelectFirst"
        }
      ]
    },
    {
      "source": "vim",
      "context": "NotebookEditor && notebook_mode == command",
      "group": "Notebook Editor",
      "block": 65,
      "key": "shift-g",
      "action": "menu::SelectLast",
      "label": "Select last item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select last item",
          "action": "menu::SelectLast"
        }
      ]
    },
    {
      "source": "vim",
      "context": "NotebookEditor && notebook_mode == command",
      "group": "Notebook Editor",
      "block": 65,
      "key": "i",
      "action": "notebook::EnterEditMode",
      "label": "Edit notebook cell",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "NotebookEditor && notebook_mode == command",
      "group": "Notebook Editor",
      "block": 65,
      "key": "a",
      "action": "notebook::EnterEditMode",
      "label": "Edit notebook cell",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Create file",
          "action": "project_panel::NewFile"
        }
      ]
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "j",
      "action": "menu::SelectNext",
      "label": "Select next item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select next item",
          "action": "vim::MenuSelectNext"
        }
      ]
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "k",
      "action": "menu::SelectPrevious",
      "label": "Select previous item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select previous item",
          "action": "vim::MenuSelectPrevious"
        }
      ]
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "h",
      "action": "menu::SelectParent",
      "label": "Select parent item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Collapse selected folder",
          "action": "project_panel::CollapseSelectedEntry"
        }
      ]
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "l",
      "action": "menu::SelectChild",
      "label": "Select child item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open selected file",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus selected diff",
          "action": [
            "action::Sequence",
            [
              "menu::Confirm",
              "workspace::FocusCenterPane"
            ]
          ]
        }
      ]
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "g g",
      "action": "menu::SelectFirst",
      "label": "Select first item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select first item",
          "action": "menu::SelectFirst"
        }
      ]
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "shift-g",
      "action": "menu::SelectLast",
      "label": "Select last item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select last item",
          "action": "menu::SelectLast"
        }
      ]
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "/",
      "action": "agents_sidebar::FocusSidebarFilter",
      "label": "Filter agent threads",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Find project file",
          "action": "file_finder::Toggle"
        }
      ]
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "d d",
      "action": "agent::RemoveSelectedThread",
      "label": "Delete selected thread",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "o",
      "action": "agents_sidebar::NewThreadInGroup",
      "label": "New group thread",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "shift-o",
      "action": "agents_sidebar::NewThreadInGroup",
      "label": "New group thread",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open externally",
          "action": "workspace::OpenWithSystem"
        }
      ]
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "] p",
      "action": "multi_workspace::NextProject",
      "label": "Next workspace project",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "[ p",
      "action": "multi_workspace::PreviousProject",
      "label": "Previous workspace project",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "z a",
      "action": "editor::ToggleFold",
      "label": "Toggle code fold",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "z c",
      "action": "menu::SelectParent",
      "label": "Select parent item",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "z o",
      "action": "menu::SelectChild",
      "label": "Select child item",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "z shift-m",
      "action": "editor::FoldAll",
      "label": "Fold all code",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "z shift-r",
      "action": "editor::UnfoldAll",
      "label": "Unfold all code",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar > Editor && VimControl && vim_mode == normal",
      "group": "Normal mode",
      "block": 67,
      "key": "j",
      "action": "editor::MoveDown",
      "label": "Move cursor down",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select next item",
          "action": "vim::MenuSelectNext"
        }
      ]
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar > Editor && VimControl && vim_mode == normal",
      "group": "Normal mode",
      "block": 67,
      "key": "k",
      "action": "editor::MoveUp",
      "label": "Move cursor up",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select previous item",
          "action": "vim::MenuSelectPrevious"
        }
      ]
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar > Editor && VimControl && vim_mode == normal",
      "group": "Normal mode",
      "block": 67,
      "key": "/",
      "action": "vim::SwitchToInsertMode",
      "label": "Enter Insert mode",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Find project file",
          "action": "file_finder::Toggle"
        }
      ]
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar > Editor && VimControl && vim_mode == normal",
      "group": "Normal mode",
      "block": 67,
      "key": "escape",
      "action": "menu::Cancel",
      "label": "Dismiss menu",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    }
  ]
};
