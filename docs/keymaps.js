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
      "label": "Activate Pane Left",
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
      "label": "Activate Pane Down",
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
      "label": "Activate Pane Up",
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
      "label": "Activate Pane Right",
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
      "label": "Toggle Workspace Sidebar",
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
      "label": "Toggle Workspace Sidebar",
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
      "label": "Toggle",
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
      "label": "Toggle",
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
      "label": "Removed by later unbind",
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
      "label": "Toggle Comments",
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
      "label": "Activate Previous Item",
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
      "label": "Activate Next Item",
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
      "label": "Alternate File",
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
      "label": "Close Other Items",
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
      "label": "Close Items To The Left",
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
      "label": "Close Items To The Right",
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
      "label": "Close All Items",
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
      "label": "Close Clean Items",
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
      "label": "Toggle Pin Tab",
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
      "label": "Reopen Closed Item",
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
      "label": "Split Down",
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
      "label": "Split Right",
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
      "label": "Deploy Search",
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
      "label": "Deploy Search",
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
      "label": "Deploy Search",
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
      "label": "Toggle",
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
      "label": "Toggle",
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
      "label": "Disabled / reserved prefix",
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
      "label": "Toggle Focus",
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
      "label": "Diff",
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
      "label": "Compare With Branch",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space t",
      "action": "terminal_panel::ToggleFocus",
      "label": "Toggle Focus",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
      "group": "Editor leader",
      "block": 8,
      "key": "space u h",
      "action": "editor::ToggleInlayHints",
      "label": "Toggle Inlay Hints",
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
      "label": "Go To Definition",
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
      "label": "Find All References",
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
      "label": "Rename",
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
      "label": "Toggle Code Actions",
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
      "label": "Format",
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
      "label": "Hover",
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
      "label": "Disabled / reserved prefix",
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
      "label": "Show Incoming Calls",
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
      "label": "Show Outgoing Calls",
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
      "label": "Restart Language Server",
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
      "label": "Disabled / reserved prefix",
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
      "label": "Send y s",
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
      "label": "Send d s",
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
      "label": "Send c s",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Visual mode",
      "block": 9,
      "key": "space ,",
      "action": [
        "editor::ToggleComments",
        {
          "advance_downwards": false,
          "comment_empty_lines": false
        }
      ],
      "label": "Toggle Comments",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor && vim_mode == normal && !menu",
      "group": "Normal mode",
      "block": 10,
      "key": "[ space",
      "action": "vim::InsertEmptyLineAbove",
      "label": "Insert Empty Line Above",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor && vim_mode == normal && !menu",
      "group": "Normal mode",
      "block": 10,
      "key": "] space",
      "action": "vim::InsertEmptyLineBelow",
      "label": "Insert Empty Line Below",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor && vim_mode == visual && !menu",
      "group": "Visual mode",
      "block": 11,
      "key": "space c a",
      "action": "editor::ToggleCodeActions",
      "label": "Toggle Code Actions",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor && vim_mode == visual && !menu",
      "group": "Visual mode",
      "block": 11,
      "key": "space c f",
      "action": "editor::FormatSelections",
      "label": "Format Selections",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && mode == full && (vim_mode == normal || vim_mode == visual))) && !menu",
      "group": "Editor leader",
      "block": 12,
      "key": "space a",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && mode == full && (vim_mode == normal || vim_mode == visual))) && !menu",
      "group": "Editor leader",
      "block": 12,
      "key": "space a a",
      "action": "agent::FocusAgent",
      "label": "Focus Agent",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && mode == full && (vim_mode == normal || vim_mode == visual))) && !menu",
      "group": "Editor leader",
      "block": 12,
      "key": "space a t",
      "action": "agent::AddSelectionToThread",
      "label": "Add Selection To Thread",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(EmptyPane || (Editor && mode == full && (vim_mode == normal || vim_mode == visual))) && !menu",
      "group": "Editor leader",
      "block": 12,
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
      "label": "Focus Agent → Move To End → Insert Snippet → Show Completions",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Terminal && vi_mode",
      "group": "Terminal selection",
      "block": 13,
      "key": "space a",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Terminal && vi_mode",
      "group": "Terminal selection",
      "block": 13,
      "key": "space a a",
      "action": "agent::FocusAgent",
      "label": "Focus Agent",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Terminal && vi_mode",
      "group": "Terminal selection",
      "block": 13,
      "key": "space a t",
      "action": "agent::AddSelectionToThread",
      "label": "Add Selection To Thread",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Terminal && vi_mode",
      "group": "Terminal selection",
      "block": 13,
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
      "label": "Focus Agent → Move To End → Insert Snippet → Show Completions",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "j",
      "action": "vim::MenuSelectNext",
      "label": "Menu Select Next",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "k",
      "action": "vim::MenuSelectPrevious",
      "label": "Menu Select Previous",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "h",
      "action": "project_panel::CollapseSelectedEntry",
      "label": "Collapse Selected Entry",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "l",
      "action": "project_panel::OpenPermanent",
      "label": "Open Permanent",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "enter",
      "action": "project_panel::OpenPermanent",
      "label": "Open Permanent",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "t",
      "action": "project_panel::OpenPermanent",
      "label": "Open Permanent",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "s",
      "action": "project_panel::OpenSplitVertical",
      "label": "Open Split Vertical",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "shift-s",
      "action": "project_panel::OpenSplitHorizontal",
      "label": "Open Split Horizontal",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "shift-p",
      "action": "project_panel::Open",
      "label": "Open",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "shift-o",
      "action": "workspace::OpenWithSystem",
      "label": "Open With System",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "backspace",
      "action": "project_panel::SelectParent",
      "label": "Select Parent",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "g g",
      "action": "menu::SelectFirst",
      "label": "Select First",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "shift-g",
      "action": "menu::SelectLast",
      "label": "Select Last",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "shift-c",
      "action": "project_panel::CollapseSelectedEntry",
      "label": "Collapse Selected Entry",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "z",
      "action": "project_panel::CollapseAllEntries",
      "label": "Collapse All Entries",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "a",
      "action": "project_panel::NewFile",
      "label": "New File",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "shift-a",
      "action": "project_panel::NewDirectory",
      "label": "New Directory",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "r",
      "action": "project_panel::Rename",
      "label": "Rename",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "d",
      "action": [
        "project_panel::Delete",
        {
          "skip_prompt": false
        }
      ],
      "label": "Delete",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "shift-t",
      "action": [
        "project_panel::Trash",
        {
          "skip_prompt": false
        }
      ],
      "label": "Trash",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "c",
      "action": "project_panel::Copy",
      "label": "Copy",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "x",
      "action": "project_panel::Cut",
      "label": "Cut",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "p",
      "action": "project_panel::Paste",
      "label": "Paste",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "y",
      "action": "workspace::CopyRelativePath",
      "label": "Copy Relative Path",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "shift-y",
      "action": "workspace::CopyPath",
      "label": "Copy Path",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "u",
      "action": "project_panel::Undo",
      "label": "Undo",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "/",
      "action": "file_finder::Toggle",
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "shift-h",
      "action": "project_panel::ToggleHideHidden",
      "label": "Toggle Hide Hidden",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "[ g",
      "action": "project_panel::SelectPrevGitEntry",
      "label": "Select Prev Git Entry",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "] g",
      "action": "project_panel::SelectNextGitEntry",
      "label": "Select Next Git Entry",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "?",
      "action": "project_panel::OpenContextMenu",
      "label": "Open Context Menu",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "q",
      "action": "project_panel::Toggle",
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "space",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "space a",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "space a a",
      "action": "agent::FocusAgent",
      "label": "Focus Agent",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
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
      "label": "Focus Agent → Move To End → Insert Snippet → Show Completions",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "shift-d",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "shift-r",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "ProjectPanel && not_editing",
      "group": "Project tree",
      "block": 14,
      "key": "o",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "EmptyPane || (Editor && (vim_mode == normal || vim_mode == visual)) || (ProjectPanel && not_editing) || (Terminal && vi_mode)",
      "group": "Project tree",
      "block": 15,
      "key": "space a n",
      "action": [
        "action::Sequence",
        [
          "agent::FocusAgent",
          "agent::NewThread"
        ]
      ],
      "label": "Focus Agent → New Thread",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "EmptyPane || (Editor && (vim_mode == normal || vim_mode == visual)) || (ProjectPanel && not_editing) || (Terminal && vi_mode)",
      "group": "Project tree",
      "block": 15,
      "key": "space a c",
      "action": [
        "action::Sequence",
        [
          "agent::FocusAgent",
          "agent::OpenAddContextMenu"
        ]
      ],
      "label": "Focus Agent → Open Add Context Menu",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "EmptyPane || (Editor && (vim_mode == normal || vim_mode == visual)) || (ProjectPanel && not_editing) || (Terminal && vi_mode)",
      "group": "Project tree",
      "block": 15,
      "key": "space a r",
      "action": [
        "action::Sequence",
        [
          "agent::FocusAgent",
          "agent::OpenAgentDiff"
        ]
      ],
      "label": "Focus Agent → Open Agent Diff",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "AgentPanel > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Agent editor",
      "block": 16,
      "key": "space",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "AgentPanel > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Agent editor",
      "block": 16,
      "key": "space a",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "AgentPanel > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Agent editor",
      "block": 16,
      "key": "space a a",
      "action": "agent::Toggle",
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "AgentPanel > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Agent editor",
      "block": 16,
      "key": "space a m",
      "action": "agent::ToggleModelSelector",
      "label": "Toggle Model Selector",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "AgentPanel > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Agent editor",
      "block": 16,
      "key": "space a f",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "AgentPanel > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Agent editor",
      "block": 16,
      "key": "space a e",
      "action": "agent::ToggleThinkingEffortMenu",
      "label": "Toggle Thinking Effort Menu",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitDiff > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Diff editor",
      "block": 17,
      "key": "g a",
      "action": "git::ToggleStaged",
      "label": "Toggle Staged",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitDiff > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Diff editor",
      "block": 17,
      "key": "g x",
      "action": "git::Restore",
      "label": "Restore",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor && multibuffer && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Multibuffers",
      "block": 18,
      "key": "g space",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Editor && multibuffer && (vim_mode == normal || vim_mode == visual) && !menu",
      "group": "Multibuffers",
      "block": 18,
      "key": "g f",
      "action": "editor::OpenExcerpts",
      "label": "Open Excerpts",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "space",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "enter",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "l",
      "action": [
        "action::Sequence",
        [
          "menu::Confirm",
          "workspace::FocusCenterPane"
        ]
      ],
      "label": "Confirm → Focus Center Pane",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "s",
      "action": "git::ToggleStaged",
      "label": "Toggle Staged",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "shift-s",
      "action": "git::StageAll",
      "label": "Stage All",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "t",
      "action": "git_panel::ToggleTreeView",
      "label": "Toggle Tree View",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "b",
      "action": "git::Branch",
      "label": "Branch",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "p",
      "action": "git::Pull",
      "label": "Pull",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "shift-p",
      "action": "git::Push",
      "label": "Push",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "r",
      "action": "git::PullRebase",
      "label": "Pull Rebase",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "f",
      "action": "git::Fetch",
      "label": "Fetch",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "shift-f p",
      "action": "git::ForcePush",
      "label": "Force Push",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "d",
      "action": [
        "git::RestoreFile",
        {
          "skip_prompt": false
        }
      ],
      "label": "Restore File",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "tab",
      "action": "git_panel::FocusEditor",
      "label": "Focus Editor",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "c",
      "action": "git_panel::FocusEditor",
      "label": "Focus Editor",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "g d",
      "action": "menu::Confirm",
      "label": "Confirm",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "g shift-d",
      "action": "menu::SecondaryConfirm",
      "label": "Secondary Confirm",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "g f",
      "action": "git::ViewFile",
      "label": "View File",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "GitPanel && ChangesList && !Editor",
      "group": "Git panel",
      "block": 19,
      "key": "g h",
      "action": "git::FileHistory",
      "label": "File History",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "CommitEditor > Editor",
      "group": "Commit editor",
      "block": 20,
      "key": "tab",
      "action": "git_panel::FocusChanges",
      "label": "Focus Changes",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space e",
      "action": "project_panel::Toggle",
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space f",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space space",
      "action": "file_finder::Toggle",
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space s f",
      "action": "file_finder::Toggle",
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space f n",
      "action": "workspace::NewFile",
      "label": "New File",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space f h",
      "action": "git::FileHistory",
      "label": "File History",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space f y",
      "action": "workspace::CopyRelativePath",
      "label": "Copy Relative Path",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space f shift-y",
      "action": "workspace::CopyPath",
      "label": "Copy Path",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space f p",
      "action": "projects::OpenRecent",
      "label": "Open Recent",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space f b",
      "action": "tab_switcher::OpenInActivePane",
      "label": "Open In Active Pane",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space b d",
      "action": [
        "pane::CloseActiveItem",
        {
          "close_pinned": true
        }
      ],
      "label": "Close Active Item",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space g shift-g",
      "action": "git_graph::Open",
      "label": "Open",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space g b",
      "action": "git::Branch",
      "label": "Branch",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space g f",
      "action": "git::Fetch",
      "label": "Fetch",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space g p",
      "action": "git::Pull",
      "label": "Pull",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space g shift-p",
      "action": "git::Push",
      "label": "Push",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space g r",
      "action": "git::PullRebase",
      "label": "Pull Rebase",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space x",
      "action": "diagnostics::Deploy",
      "label": "Deploy",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space r",
      "action": "task::Spawn",
      "label": "Spawn",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space shift-r",
      "action": "task::Rerun",
      "label": "Rerun",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w",
      "action": null,
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w h",
      "action": "workspace::ToggleLeftDock",
      "label": "Toggle Left Dock",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w j",
      "action": "workspace::ToggleBottomDock",
      "label": "Toggle Bottom Dock",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w k",
      "action": "workspace::ToggleRightDock",
      "label": "Toggle Right Dock",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w tab",
      "action": "workspace::ToggleAllDocks",
      "label": "Toggle All Docks",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
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
      "label": "Close Active Dock → Activate Pane",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
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
      "label": "Close All Docks → Activate Pane",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w e",
      "action": "project_panel::Toggle",
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w g",
      "action": "git_panel::Toggle",
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w t",
      "action": "terminal_panel::Toggle",
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w a",
      "action": "agent::Toggle",
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w o",
      "action": "outline_panel::Toggle",
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w d",
      "action": "debug_panel::Toggle",
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w c",
      "action": "collab_panel::Toggle",
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w m",
      "action": "workspace::ToggleZoom",
      "label": "Toggle Zoom",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w l",
      "action": "lsp_tool::ToggleMenu",
      "label": "Toggle Menu",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w s",
      "action": [
        "action::Sequence",
        [
          "workspace::FocusCenterPane",
          "pane::SplitDown"
        ]
      ],
      "label": "Focus Center Pane → Split Down",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w v",
      "action": [
        "action::Sequence",
        [
          "workspace::FocusCenterPane",
          "pane::SplitRight"
        ]
      ],
      "label": "Focus Center Pane → Split Right",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w =",
      "action": "workspace::ResetPaneSizes",
      "label": "Reset Pane Sizes",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
      "group": "Workspace leader",
      "block": 21,
      "key": "space w shift-o",
      "action": [
        "action::Sequence",
        [
          "workspace::FocusCenterPane",
          "pane::JoinAll"
        ]
      ],
      "label": "Focus Center Pane → Join All",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "(VimControl || !vim_mode) && !Dock && (!Terminal || vi_mode)",
      "group": "Center tabs",
      "block": 22,
      "key": "space w q",
      "action": "pane::CloseActiveItem",
      "label": "Close Active Item",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "Dock || Terminal",
      "group": "Dock focus",
      "block": 23,
      "key": "ctrl-;",
      "action": "editor::ToggleFocus",
      "label": "Toggle Focus",
      "disabled": false,
      "kind": "bindings"
    },
    {
      "source": "custom",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 24,
      "key": "space",
      "action": null,
      "label": "Disabled / reserved prefix",
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
      "label": "Start Of Line",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Push Object",
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
      "label": "Push Object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "New File",
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
      "label": "Left",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Collapse Selected Entry",
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
      "label": "Wrapping Left",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select Parent",
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
      "label": "Down",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Next",
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
      "label": "Next Line Start",
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
      "label": "Next Line Start",
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
      "label": "Next Line Start",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / reserved prefix",
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
      "label": "Previous Line Start",
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
      "label": "Tab",
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
      "label": "Tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
          "action": "git_panel::FocusEditor"
        },
        {
          "context": "CommitEditor > Editor",
          "label": "Focus Changes",
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
      "label": "Up",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Previous",
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
      "label": "Right",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Confirm → Focus Center Pane",
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
      "label": "End Of Line",
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
      "label": "First Non Whitespace",
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
      "label": "Start Of Line Downward",
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
      "label": "End Of Line Downward",
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
      "label": "End Of Document",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select Last",
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
      "label": "Start Of Paragraph",
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
      "label": "End Of Paragraph",
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
      "label": "Sentence Backward",
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
      "label": "Sentence Forward",
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
      "label": "Go To Column",
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
      "label": "Next Word Start",
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
      "label": "Next Word End",
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
      "label": "Previous Word Start",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Branch",
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
      "label": "Previous Word End",
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
      "label": "Next Word Start",
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
      "label": "Next Word End",
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
      "label": "Previous Word Start",
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
      "label": "Previous Word End",
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
      "label": "Search",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Toggle",
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
      "label": "Deploy Search",
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
      "label": "Search",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Context Menu",
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
      "label": "Move To Next",
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
      "label": "Move To Previous",
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
      "label": "Move To Next Match",
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
      "label": "Move To Previous Match",
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
      "label": "Matching",
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
      "label": "Push Find Forward",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Fetch",
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
      "label": "Push Find Forward",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle Tree View",
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
      "label": "Push Find Backward",
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
      "label": "Push Find Backward",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Trash",
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
      "label": "Push Mark",
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
      "label": "Push Jump",
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
      "label": "Push Jump",
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
      "label": "Repeat Find",
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
      "label": "Repeat Find Reversed",
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
      "label": "Go Back",
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
      "label": "Go Forward",
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
      "label": "Go To Definition",
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
      "label": "Go To Older Tag",
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
      "label": "Switch To Normal Mode",
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
      "label": "Switch To Normal Mode",
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
      "label": "Toggle Visual",
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
      "label": "Toggle Visual Line",
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
      "label": "Show Location",
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
      "label": "Toggle Visual Block",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "ctrl-q",
      "action": "vim::ToggleVisualBlock",
      "label": "Toggle Visual Block",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu",
      "group": "Vim motions & commands",
      "block": 0,
      "key": "shift-k",
      "action": "editor::Hover",
      "label": "Hover",
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
      "label": "Toggle Replace",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / reserved prefix",
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
      "label": "Page Down",
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
      "label": "Page Up",
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
      "label": "Scroll Down",
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
      "label": "Scroll Up",
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
      "label": "Line Down",
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
      "label": "Line Up",
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
      "label": "Push Replace With Register",
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
      "label": "Rename",
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
      "label": "Find All References",
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
      "label": "Go To Implementation",
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
      "label": "Toggle Code Actions",
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
      "label": "Start Of Document",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select First",
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
      "label": "Hover",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "File History",
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
      "label": "Blame Hover",
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
      "label": "Go To Definition",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
          "label": "Go To Definition",
          "action": "editor::GoToDefinition"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Confirm",
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
      "label": "Go To Declaration",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Secondary Confirm",
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
      "label": "Go To Type Definition",
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
      "label": "Go To Implementation",
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
      "label": "Open Url",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitDiff > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
          "label": "Restore",
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
      "label": "Open Selected Filename",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "Editor && multibuffer && (vim_mode == normal || vim_mode == visual) && !menu",
          "label": "Open Excerpts",
          "action": "editor::OpenExcerpts"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "View File",
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
      "label": "Select Next Match",
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
      "label": "Select Previous Match",
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
      "label": "Select Next",
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
      "label": "Select Previous",
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
      "label": "Select Next",
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
      "label": "Select Previous",
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
      "label": "Select All Matches",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitDiff > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
          "label": "Toggle Staged",
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
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
          "label": "Disabled / reserved prefix",
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
      "label": "Toggle",
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
      "label": "Toggle",
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
      "label": "Toggle Code Actions",
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
      "label": "Find All References",
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
      "label": "Open Excerpts",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "Editor && multibuffer && (vim_mode == normal || vim_mode == visual) && !menu",
          "label": "Disabled / reserved prefix",
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
      "label": "Move To Next",
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
      "label": "Move To Previous",
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
      "label": "Down",
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
      "label": "Up",
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
      "label": "End Of Line",
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
      "label": "Start Of Line",
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
      "label": "Middle Of Line",
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
      "label": "First Non Whitespace",
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
      "label": "Restore Visual Selection",
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
      "label": "Go To Diagnostic",
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
      "label": "Go To Previous Diagnostic",
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
      "label": "Insert At Previous",
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
      "label": "Change List Newer",
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
      "label": "Change List Older",
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
      "label": "Window Top",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
          "label": "Activate Previous Item",
          "action": "pane::ActivatePreviousItem"
        },
        {
          "context": "ProjectPanel && not_editing",
          "label": "Toggle Hide Hidden",
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
      "label": "Window Middle",
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
      "label": "Window Bottom",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
          "label": "Activate Next Item",
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
      "label": "Toggle Record",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Toggle",
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
      "label": "Replay Last Recording",
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
      "label": "Push Replay Register",
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
      "label": "Send z t ^",
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
      "label": "Send z b ^",
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
      "label": "Send shift-h k z b ^",
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
      "label": "Send shift-l j z t ^",
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
      "label": "Scroll Cursor Top",
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
      "label": "Scroll Cursor Center",
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
      "label": "Send z z ^",
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
      "label": "Scroll Cursor Bottom",
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
      "label": "Toggle Fold",
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
      "label": "Toggle Fold Recursive",
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
      "label": "Fold",
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
      "label": "Fold Recursive",
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
      "label": "Unfold Lines",
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
      "label": "Unfold Recursive",
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
      "label": "Fold Selected Ranges",
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
      "label": "Fold All",
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
      "label": "Unfold All",
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
      "label": "Column Right",
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
      "label": "Column Left",
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
      "label": "Half Page Right",
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
      "label": "Half Page Left",
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
      "label": "Close Active Item",
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
      "label": "Close Active Item",
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
      "label": "Go To Definition Split",
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
      "label": "Go To Definition Split",
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
      "label": "Go To Definition Split",
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
      "label": "Go To Type Definition Split",
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
      "label": "Go To Type Definition Split",
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
      "label": "Open Excerpts Split",
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
      "label": "Open Excerpts Split",
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
      "label": "Alternate File",
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
      "label": "Repeat",
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
      "label": "Next Section Start",
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
      "label": "Next Section End",
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
      "label": "Previous Section Start",
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
      "label": "Previous Section End",
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
      "label": "Next Method Start",
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
      "label": "Next Method End",
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
      "label": "Previous Method Start",
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
      "label": "Previous Method End",
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
      "label": "Previous Comment",
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
      "label": "Previous Comment",
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
      "label": "Next Comment",
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
      "label": "Next Comment",
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
      "label": "Previous Lesser Indent",
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
      "label": "Previous Greater Indent",
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
      "label": "Previous Same Indent",
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
      "label": "Next Lesser Indent",
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
      "label": "Next Greater Indent",
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
      "label": "Next Same Indent",
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
      "label": "Activate Next Item",
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
      "label": "Activate Previous Item",
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
      "label": "Activate Last Item",
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
      "label": "Activate Item",
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
      "label": "Insert Empty Line Below",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "Editor && vim_mode == normal && !menu",
          "label": "Insert Empty Line Below",
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
      "label": "Insert Empty Line Above",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "Editor && vim_mode == normal && !menu",
          "label": "Insert Empty Line Above",
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
      "label": "Move Line Up",
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
      "label": "Move Line Down",
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
      "label": "Follow Next Collaborator",
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
      "label": "Follow Next Collaborator",
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
      "label": "Unmatched Forward",
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
      "label": "Unmatched Backward",
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
      "label": "Unmatched Forward",
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
      "label": "Unmatched Backward",
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
      "label": "Go To Previous Reference",
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
      "label": "Go To Next Reference",
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
      "label": "Select Larger Syntax Node",
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
      "label": "Select Smaller Syntax Node",
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
      "label": "Insert Before",
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
      "label": "Insert After",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "New File",
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
      "label": "Cancel",
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
      "label": "Toggle",
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
      "label": "Push Change",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
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
      "label": "Change To End Of Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Collapse Selected Entry",
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
      "label": "Push Delete",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Delete",
          "action": [
            "project_panel::Delete",
            {
              "skip_prompt": false
            }
          ]
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Restore File",
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
      "label": "Join Lines No Whitespace",
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
      "label": "Push Yank",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy Relative Path",
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
      "label": "Yank Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy Path",
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
      "label": "Delete Right",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Cut",
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
      "label": "Delete Left",
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
      "label": "Increment",
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
      "label": "Decrement",
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
      "label": "Redo",
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
      "label": "Push Indent",
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
      "label": "Push Outdent",
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
      "label": "Push Auto Indent",
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
      "label": "Push Shell Command",
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
      "label": "Push Lowercase",
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
      "label": "Push Uppercase",
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
      "label": "Push Opposite Case",
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
      "label": "Push Rot13",
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
      "label": "Push Rewrap",
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
      "label": "Push Rewrap",
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
      "label": "Go To Diagnostic",
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
      "label": "Go To Previous Diagnostic",
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
      "label": "Go To Hunk",
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
      "label": "Go To Previous Hunk",
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
      "label": "Push Toggle Comments",
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
      "label": "Push Toggle Block Comments",
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
      "label": "Number",
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
      "label": "Count Command",
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
      "label": "Go To Percentage",
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
      "label": "Visual Command",
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
      "label": "Convert To Lower Case",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Undo",
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
      "label": "Convert To Upper Case",
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
      "label": "Other End",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open With System",
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
      "label": "Other End Row Aware",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / reserved prefix",
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
      "label": "Visual Delete",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Delete",
          "action": [
            "project_panel::Delete",
            {
              "skip_prompt": false
            }
          ]
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Restore File",
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
      "label": "Visual Delete",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Cut",
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
      "label": "Visual Delete Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / reserved prefix",
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
      "label": "Visual Delete Line",
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
      "label": "Visual Yank",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy Relative Path",
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
      "label": "Visual Yank Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy Path",
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
      "label": "Paste",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Paste",
          "action": "project_panel::Paste"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull",
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
      "label": "Paste",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open",
          "action": "project_panel::Open"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Push",
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
      "label": "Substitute",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
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
      "label": "Substitute",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Split Vertical",
          "action": "project_panel::OpenSplitVertical"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle Staged",
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
      "label": "Substitute Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / reserved prefix",
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
      "label": "Substitute Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Split Horizontal",
          "action": "project_panel::OpenSplitHorizontal"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Stage All",
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
      "label": "Change Case",
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
      "label": "Move To Next",
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
      "label": "Move To Previous",
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
      "label": "Increment",
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
      "label": "Decrement",
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
      "label": "Increment",
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
      "label": "Decrement",
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
      "label": "Insert Before",
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
      "label": "Insert After",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "New Directory",
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
      "label": "Visual Insert First Non White Space",
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
      "label": "Visual Insert End Of Line",
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
      "label": "Join Lines",
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
      "label": "Join Lines No Whitespace",
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
      "label": "Push Replace",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Rename",
          "action": "project_panel::Rename"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull Rebase",
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
      "label": "Switch To Normal Mode",
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
      "label": "Switch To Normal Mode",
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
      "label": "Switch To Normal Mode",
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
      "label": "Indent",
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
      "label": "Outdent",
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
      "label": "Auto Indent",
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
      "label": "Shell Command",
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
      "label": "Push Object",
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
      "label": "Push Object",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "New File",
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
      "label": "Paste",
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
      "label": "Toggle Comments",
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
      "label": "Toggle Block Comments",
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
      "label": "Rewrap",
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
      "label": "Rewrap",
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
      "label": "Convert To Rot13",
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
      "label": "Push Register",
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
      "label": "Normal Before",
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
      "label": "Normal Before",
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
      "label": "Normal Before",
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
      "label": "Disabled / reserved prefix",
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
      "label": "Show Completions",
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
      "label": "Inline Assist",
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
      "label": "Show Edit Prediction",
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
      "label": "Toggle Code Actions",
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
      "label": "Cancel",
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
      "label": "Line Down",
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
      "label": "Line Up",
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
      "label": "Delete To Previous Word Start",
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
      "label": "Delete To Beginning Of Line",
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
      "label": "Indent",
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
      "label": "Outdent",
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
      "label": "Insert From Above",
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
      "label": "Insert From Below",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-v",
      "action": [
        "vim::PushLiteral",
        {}
      ],
      "label": "Push Literal",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-shift-v",
      "action": "editor::Paste",
      "label": "Paste",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-q",
      "action": [
        "vim::PushLiteral",
        {}
      ],
      "label": "Push Literal",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-shift-q",
      "action": [
        "vim::PushLiteral",
        {}
      ],
      "label": "Push Literal",
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
      "label": "Push Register",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "insert",
      "action": "vim::ToggleReplace",
      "label": "Toggle Replace",
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
      "label": "Temporary Normal",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == insert",
      "group": "Insert mode",
      "block": 6,
      "key": "ctrl-s",
      "action": "editor::ShowSignatureHelp",
      "label": "Show Signature Help",
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
      "label": "Scroll Down",
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
      "label": "Scroll Up",
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
      "label": "Line Down",
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
      "label": "Line Up",
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
      "label": "Cancel",
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
      "label": "Delete To End Of Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / reserved prefix",
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
      "label": "Join Lines",
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
      "label": "Yank Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy Path",
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
      "label": "Insert First Non Whitespace",
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
      "label": "Insert End Of Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "New Directory",
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
      "label": "Insert Line Below",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / reserved prefix",
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
      "label": "Insert Line Above",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open With System",
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
      "label": "Change Case",
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
      "label": "Increment",
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
      "label": "Decrement",
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
      "label": "Paste",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Paste",
          "action": "project_panel::Paste"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull",
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
      "label": "Paste",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open",
          "action": "project_panel::Open"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Push",
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
      "label": "Undo",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Undo",
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
      "label": "Undo Last Line",
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
      "label": "Push Replace",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Rename",
          "action": "project_panel::Rename"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull Rebase",
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
      "label": "Substitute",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Split Vertical",
          "action": "project_panel::OpenSplitVertical"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle Staged",
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
      "label": "Substitute Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Split Horizontal",
          "action": "project_panel::OpenSplitHorizontal"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Stage All",
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
      "label": "Push Register",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "ctrl-pagedown",
      "action": "pane::ActivateNextItem",
      "label": "Activate Next Item",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "(vim_mode == normal || vim_mode == helix_normal) && !menu",
      "group": "Normal mode",
      "block": 8,
      "key": "ctrl-pageup",
      "action": "pane::ActivatePreviousItem",
      "label": "Activate Previous Item",
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
      "label": "Show Word Completions",
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
      "label": "Show Word Completions",
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
      "label": "Signature Help Previous",
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
      "label": "Signature Help Next",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "vim_mode == replace",
      "block": 17,
      "key": "ctrl-c",
      "action": "vim::NormalBefore",
      "label": "Normal Before",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "vim_mode == replace",
      "block": 17,
      "key": "ctrl-[",
      "action": "vim::NormalBefore",
      "label": "Normal Before",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "vim_mode == replace",
      "block": 17,
      "key": "escape",
      "action": "vim::NormalBefore",
      "label": "Normal Before",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "vim_mode == replace",
      "block": 17,
      "key": "ctrl-v",
      "action": [
        "vim::PushLiteral",
        {}
      ],
      "label": "Push Literal",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "vim_mode == replace",
      "block": 17,
      "key": "ctrl-shift-v",
      "action": "editor::Paste",
      "label": "Paste",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "vim_mode == replace",
      "block": 17,
      "key": "ctrl-q",
      "action": [
        "vim::PushLiteral",
        {}
      ],
      "label": "Push Literal",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "vim_mode == replace",
      "block": 17,
      "key": "ctrl-shift-q",
      "action": [
        "vim::PushLiteral",
        {}
      ],
      "label": "Push Literal",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "vim_mode == replace",
      "block": 17,
      "key": "backspace",
      "action": "vim::UndoReplace",
      "label": "Undo Replace",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select Parent",
          "action": "project_panel::SelectParent"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "vim_mode == replace",
      "block": 17,
      "key": "tab",
      "action": "vim::Tab",
      "label": "Tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
          "action": "git_panel::FocusEditor"
        },
        {
          "context": "CommitEditor > Editor",
          "label": "Focus Changes",
          "action": "git_panel::FocusChanges"
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "vim_mode == replace",
      "block": 17,
      "key": "enter",
      "action": "vim::Enter",
      "label": "Enter",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / reserved prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "vim_mode == replace",
      "group": "vim_mode == replace",
      "block": 17,
      "key": "insert",
      "action": "vim::InsertBefore",
      "label": "Insert Before",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == waiting",
      "group": "vim_mode == waiting",
      "block": 18,
      "key": "tab",
      "action": "vim::Tab",
      "label": "Tab",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
          "action": "git_panel::FocusEditor"
        },
        {
          "context": "CommitEditor > Editor",
          "label": "Focus Changes",
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
      "label": "Enter",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / reserved prefix",
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
      "label": "Clear Operators",
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
      "label": "Clear Operators",
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
      "label": "Clear Operators",
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
      "label": "Push Literal",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "vim_mode == waiting",
      "group": "vim_mode == waiting",
      "block": 18,
      "key": "ctrl-q",
      "action": [
        "vim::PushLiteral",
        {}
      ],
      "label": "Push Literal",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "Editor && vim_mode == waiting && (vim_operator == ys || vim_operator == cs)",
      "group": "Operators & objects",
      "block": 19,
      "key": "escape",
      "action": "vim::SwitchToNormalMode",
      "label": "Switch To Normal Mode",
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
      "label": "Clear Operators",
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
      "label": "Clear Operators",
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
      "label": "Clear Operators",
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
      "label": "Comment",
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
      "label": "Word",
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
      "label": "Word",
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
      "label": "Tag",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle Tree View",
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
      "label": "Sentence",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Split Vertical",
          "action": "project_panel::OpenSplitVertical"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle Staged",
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
      "label": "Paragraph",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Paste",
          "action": "project_panel::Paste"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull",
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
      "label": "Quotes",
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
      "label": "Back Quotes",
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
      "label": "Double Quotes",
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
      "label": "Mini Quotes",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Toggle",
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
      "label": "Vertical Bars",
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
      "label": "Parentheses",
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
      "label": "Parentheses",
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
      "label": "Parentheses",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Branch",
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
      "label": "Square Brackets",
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
      "label": "Square Brackets",
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
      "label": "Square Brackets",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Rename",
          "action": "project_panel::Rename"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull Rebase",
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
      "label": "Curly Brackets",
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
      "label": "Curly Brackets",
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
      "label": "Curly Brackets",
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
      "label": "Angle Brackets",
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
      "label": "Angle Brackets",
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
      "label": "Argument",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "New File",
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
      "label": "Indent Obj",
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
      "label": "Indent Obj",
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
      "label": "Method",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Fetch",
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
      "label": "Class",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
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
      "label": "Entire File",
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
      "label": "Any Pair",
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
      "label": "Class",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle Tree View",
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
      "label": "Comment",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
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
      "label": "Tag",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Cut",
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
      "label": "Current Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
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
      "label": "Exchange",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Cut",
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
      "label": "Rename",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Delete",
          "action": [
            "project_panel::Delete",
            {
              "skip_prompt": false
            }
          ]
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Restore File",
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
      "label": "Push Change Surrounds",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Split Vertical",
          "action": "project_panel::OpenSplitVertical"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle Staged",
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
      "label": "Current Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Delete",
          "action": [
            "project_panel::Delete",
            {
              "skip_prompt": false
            }
          ]
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Restore File",
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
      "label": "Push Delete Surrounds",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Split Vertical",
          "action": "project_panel::OpenSplitVertical"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle Staged",
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
      "label": "Push Forced Motion",
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
      "label": "Toggle Selected Diff Hunks",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / reserved prefix",
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
      "label": "Toggle Staged",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open With System",
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
      "label": "Restore",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Paste",
          "action": "project_panel::Paste"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull",
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
      "label": "Stage And Next",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Undo",
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
      "label": "Unstage And Next",
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
      "label": "Current Line",
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
      "label": "Current Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Undo",
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
      "label": "Current Line",
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
      "label": "Current Line",
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
      "label": "Current Line",
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
      "label": "Current Line",
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
      "label": "Current Line",
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
      "label": "Current Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Context Menu",
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
      "label": "Current Line",
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
      "label": "Current Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Toggle",
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
      "label": "Current Line",
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
      "label": "Current Line",
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
      "label": "Current Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy Relative Path",
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
      "label": "Push Forced Motion",
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
      "label": "Push Add Surrounds",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Split Vertical",
          "action": "project_panel::OpenSplitVertical"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle Staged",
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
      "label": "Current Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Split Vertical",
          "action": "project_panel::OpenSplitVertical"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Toggle Staged",
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
      "label": "Current Line",
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
      "label": "Current Line",
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
      "label": "Current Line",
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
      "label": "Current Line",
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
      "label": "Current Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
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
      "label": "Current Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
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
      "label": "Current Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Rename",
          "action": "project_panel::Rename"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Pull Rebase",
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
      "label": "Current Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / reserved prefix",
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
      "label": "Current Line",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Cut",
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
      "label": "Clear Exchange",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Copy",
          "action": "project_panel::Copy"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
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
      "label": "Literal",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / reserved prefix",
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
      "label": "Literal",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
          "action": "git_panel::FocusEditor"
        },
        {
          "context": "CommitEditor > Editor",
          "label": "Focus Changes",
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
      "label": "Literal",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select Parent",
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
      "label": "Literal",
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
      "label": "Search Submit",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / reserved prefix",
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
      "label": "Dismiss",
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
      "label": "Disabled / reserved prefix",
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
      "label": "Activate Pane Left",
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
      "label": "Activate Pane Right",
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
      "label": "Activate Pane Up",
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
      "label": "Activate Pane Down",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w shift-left",
      "action": "workspace::SwapPaneLeft",
      "label": "Swap Pane Left",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w shift-right",
      "action": "workspace::SwapPaneRight",
      "label": "Swap Pane Right",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w shift-up",
      "action": "workspace::SwapPaneUp",
      "label": "Swap Pane Up",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "VimControl && !menu || !Editor && !Terminal",
      "group": "Vim motions & commands",
      "block": 45,
      "key": "ctrl-w shift-down",
      "action": "workspace::SwapPaneDown",
      "label": "Swap Pane Down",
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
      "label": "Swap Pane Adjacent",
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
      "label": "Move Pane Left",
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
      "label": "Move Pane Right",
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
      "label": "Move Pane Up",
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
      "label": "Move Pane Down",
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
      "label": "Resize Pane Right",
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
      "label": "Resize Pane Left",
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
      "label": "Resize Pane Down",
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
      "label": "Resize Pane Up",
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
      "label": "Maximize Pane",
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
      "label": "Reset Pane Sizes",
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
      "label": "Activate Next Item",
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
      "label": "Activate Previous Item",
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
      "label": "Activate Next Pane",
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
      "label": "Activate Previous Pane",
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
      "label": "Activate Previous Pane",
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
      "label": "Split Vertical",
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
      "label": "Split Horizontal",
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
      "label": "Close Active Item",
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
      "label": "Close Active Item",
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
      "label": "Close All Items",
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
      "label": "Close Inactive Tabs And Panes",
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
      "label": "New File Split Horizontal",
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
      "label": "Go To Tab",
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
      "label": "Go To Previous Tab",
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
      "label": "Toggle",
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
      "label": "Deploy Search",
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
      "label": "Activate Next Item",
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
      "label": "Activate Previous Item",
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
      "label": "Activate Last Item",
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
      "label": "Activate Item",
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
      "label": "Toggle",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
          "label": "Disabled / reserved prefix",
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
      "label": "Deploy Search",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(EmptyPane || (Editor && vim_mode == normal)) && !menu",
          "label": "Deploy Search",
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
      "label": "Toggle",
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
      "label": "Activate Pane Left",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
          "label": "Toggle Left Dock",
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
      "label": "Activate Pane Down",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
          "label": "Toggle Bottom Dock",
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
      "label": "Activate Pane Up",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
          "label": "Toggle Right Dock",
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
      "label": "Activate Pane Right",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
          "label": "Toggle Menu",
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
      "label": "Close Active Item",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "(VimControl || !vim_mode) && (!Terminal || vi_mode)",
          "label": "Close Active Dock → Activate Pane",
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
          "label": "Close Active Item",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Toggle",
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
      "label": "New File",
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
      "label": "Toggle Project Panel Focus",
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
      "label": "Open Split Vertical",
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
      "label": "Compare Marked Files",
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
      "label": "Select Next Git Entry",
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
      "label": "Select Prev Git Entry",
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
      "label": "Select Next Diagnostic",
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
      "label": "Select Prev Diagnostic",
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
      "label": "Select Next Directory",
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
      "label": "Select Prev Directory",
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
      "label": "Select Parent",
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
      "label": "Scroll Up",
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
      "label": "Scroll Down",
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
      "label": "Scroll Cursor Top",
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
      "label": "Scroll Cursor Center",
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
      "label": "Scroll Cursor Center",
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
      "label": "Scroll Cursor Bottom",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Number",
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
      "label": "Collapse Selected Entry",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Collapse Selected Entry",
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
      "label": "Menu Select Next",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Next",
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
      "label": "Menu Select Previous",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Previous",
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
      "label": "Expand Selected Entry",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Confirm → Focus Center Pane",
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
      "label": "Select Last",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select Last",
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
      "label": "Select First",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select First",
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
      "label": "Select Parent",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "enter",
      "action": "editor::ToggleFocus",
      "label": "Toggle Focus",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / reserved prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "OutlinePanel && not_editing",
      "group": "Outline Panel",
      "block": 48,
      "key": "/",
      "action": "menu::Cancel",
      "label": "Cancel",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Toggle",
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
      "label": "Scroll Up",
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
      "label": "Scroll Down",
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
      "label": "Scroll Cursor Top",
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
      "label": "Scroll Cursor Center",
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
      "label": "Scroll Cursor Center",
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
      "label": "Scroll Cursor Bottom",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "OutlinePanel && editing",
      "group": "Outline Panel",
      "block": 49,
      "key": "enter",
      "action": "menu::Cancel",
      "label": "Cancel",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / reserved prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitGraph",
      "group": "Git Graph",
      "block": 50,
      "key": "tab",
      "action": "git_graph::FocusNextTabStop",
      "label": "Focus Next Tab Stop",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
          "action": "git_panel::FocusEditor"
        },
        {
          "context": "CommitEditor > Editor",
          "label": "Focus Changes",
          "action": "git_panel::FocusChanges"
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitGraph",
      "group": "Git Graph",
      "block": 50,
      "key": "shift-tab",
      "action": "git_graph::FocusPreviousTabStop",
      "label": "Focus Previous Tab Stop",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "GitGraphSearchBar > Editor",
      "group": "Git Graph Search Bar",
      "block": 51,
      "key": "tab",
      "action": "git_graph::FocusNextTabStop",
      "label": "Focus Next Tab Stop",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
          "action": "git_panel::FocusEditor"
        },
        {
          "context": "CommitEditor > Editor",
          "label": "Focus Changes",
          "action": "git_panel::FocusChanges"
        }
      ]
    },
    {
      "source": "vim",
      "context": "GitGraphSearchBar > Editor",
      "group": "Git Graph Search Bar",
      "block": 51,
      "key": "shift-tab",
      "action": "git_graph::FocusPreviousTabStop",
      "label": "Focus Previous Tab Stop",
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
      "label": "Menu Select Next",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Next",
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
      "label": "Menu Select Previous",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Previous",
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
      "label": "Scroll Down",
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
      "label": "Scroll Up",
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
      "label": "Select Last",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select Last",
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
      "label": "Select First",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select First",
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
      "label": "Select Next",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Next",
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
      "label": "Select Previous",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Previous",
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
      "label": "Confirm",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "Editor && multibuffer && (vim_mode == normal || vim_mode == visual) && !menu",
          "label": "Open Excerpts",
          "action": "editor::OpenExcerpts"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "View File",
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
      "label": "Collapse Selected Entry",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Collapse Selected Entry",
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
      "label": "Expand Selected Entry",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Confirm → Focus Center Pane",
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
      "label": "Select First",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select First",
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
      "label": "Select Last",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select Last",
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
      "label": "Focus Editor",
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
      "label": "Toggle Staged",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Cut",
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
      "label": "Stage All",
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
      "label": "Stage Range",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitDiff > Editor && (vim_mode == normal || vim_mode == visual) && !menu",
          "label": "Restore",
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
      "label": "Unstage All",
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
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Toggle",
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
      "label": "Disabled / reserved prefix",
      "disabled": true,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Context Menu",
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
      "label": "Disabled / reserved prefix",
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
      "label": "Disabled / reserved prefix",
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
      "label": "Disabled / reserved prefix",
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
      "label": "Disabled / reserved prefix",
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
      "label": "Delete To Beginning Of Line",
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
      "label": "Delete To Previous Word Start",
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
      "label": "Select Previous",
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
      "label": "Select Next",
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
      "label": "Cancel",
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
      "label": "Cancel",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "CommitEditor > Editor && VimControl && !menu",
      "group": "Commit editor",
      "block": 58,
      "key": "tab",
      "action": "git_panel::FocusChanges",
      "label": "Focus Changes",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
          "action": "git_panel::FocusEditor"
        },
        {
          "context": "CommitEditor > Editor",
          "label": "Focus Changes",
          "action": "git_panel::FocusChanges"
        }
      ]
    },
    {
      "source": "vim",
      "context": "CommitEditor > Editor && VimControl && !menu",
      "group": "Commit editor",
      "block": 58,
      "key": "shift-tab",
      "action": "git_panel::FocusChanges",
      "label": "Focus Changes",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "Editor && edit_prediction && edit_prediction_mode == eager && !showing_completions",
      "group": "Editor",
      "block": 59,
      "key": "tab",
      "action": "editor::AcceptEditPrediction",
      "label": "Accept Edit Prediction",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
          "action": "git_panel::FocusEditor"
        },
        {
          "context": "CommitEditor > Editor",
          "label": "Focus Changes",
          "action": "git_panel::FocusChanges"
        }
      ]
    },
    {
      "source": "vim",
      "context": "MessageEditor > Editor && VimControl",
      "group": "Message Editor",
      "block": 60,
      "key": "enter",
      "action": "agent::Chat",
      "label": "Chat",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / reserved prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "SettingsWindow > NavigationMenu && !search",
      "group": "Settings Window",
      "block": 61,
      "key": "l",
      "action": "settings_editor::ExpandNavEntry",
      "label": "Expand Nav Entry",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Confirm → Focus Center Pane",
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
      "label": "Collapse Nav Entry",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Collapse Selected Entry",
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
      "label": "Focus Previous Nav Entry",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Previous",
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
      "label": "Focus Next Nav Entry",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Next",
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
      "label": "Focus First Nav Entry",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select First",
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
      "label": "Focus Last Nav Entry",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select Last",
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
      "label": "Scroll Page Up",
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
      "label": "Scroll Page Down",
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
      "label": "Scroll Up",
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
      "label": "Scroll Down",
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
      "label": "Go Back",
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
      "label": "Go Forward",
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
      "label": "Scroll To Top",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select First",
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
      "label": "Scroll To Bottom",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select Last",
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
      "label": "Deploy",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Toggle",
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
      "label": "Select Next",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Next",
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
      "label": "Select Previous",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Previous",
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
      "label": "Select First",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select First",
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
      "label": "Select Last",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select Last",
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
      "label": "Notebook Move Down",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Next",
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
      "label": "Notebook Move Up",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Previous",
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
      "label": "Enter Command Mode",
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
      "label": "Select Next",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Next",
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
      "label": "Select Previous",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Previous",
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
      "label": "Select First",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select First",
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
      "label": "Select Last",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select Last",
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
      "label": "Enter Edit Mode",
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
      "label": "Enter Edit Mode",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "New File",
          "action": "project_panel::NewFile"
        }
      ]
    },
    {
      "source": "vim",
      "context": "NotebookEditor && notebook_mode == command",
      "group": "Notebook Editor",
      "block": 65,
      "key": "enter",
      "action": "notebook::EnterEditMode",
      "label": "Enter Edit Mode",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / reserved prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "NotebookEditor && notebook_mode == command",
      "group": "Notebook Editor",
      "block": 65,
      "key": "shift-enter",
      "action": "notebook::RunAndAdvance",
      "label": "Run And Advance",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "NotebookEditor && notebook_mode == command",
      "group": "Notebook Editor",
      "block": 65,
      "key": "ctrl-enter",
      "action": "notebook::Run",
      "label": "Run",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar && !Editor",
      "group": "Threads Sidebar",
      "block": 66,
      "key": "j",
      "action": "menu::SelectNext",
      "label": "Select Next",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Next",
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
      "label": "Select Previous",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Previous",
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
      "label": "Select Parent",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Collapse Selected Entry",
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
      "label": "Select Child",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Confirm → Focus Center Pane",
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
      "label": "Select First",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select First",
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
      "label": "Select Last",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Select Last",
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
      "label": "Focus Sidebar Filter",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Toggle",
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
      "label": "Remove Selected Thread",
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
      "label": "New Thread In Group",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Disabled / reserved prefix",
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
      "label": "New Thread In Group",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open With System",
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
      "label": "Next Project",
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
      "label": "Previous Project",
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
      "label": "Toggle Fold",
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
      "label": "Select Parent",
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
      "label": "Select Child",
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
      "label": "Fold All",
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
      "label": "Unfold All",
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
      "label": "Move Down",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Next",
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
      "label": "Move Up",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Menu Select Previous",
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
      "label": "Switch To Insert Mode",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Toggle",
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
      "label": "Cancel",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "ThreadsSidebar > Editor && VimControl && vim_mode == normal",
      "group": "Normal mode",
      "block": 67,
      "key": "enter",
      "action": "editor::Newline",
      "label": "Newline",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "ProjectPanel && not_editing",
          "label": "Open Permanent",
          "action": "project_panel::OpenPermanent"
        },
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Disabled / reserved prefix",
          "action": null
        }
      ]
    },
    {
      "source": "vim",
      "context": "SkillCreator",
      "group": "Skill Creator",
      "block": 68,
      "key": "tab",
      "action": "skill_creator::FocusNextField",
      "label": "Focus Next Field",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
          "action": "git_panel::FocusEditor"
        },
        {
          "context": "CommitEditor > Editor",
          "label": "Focus Changes",
          "action": "git_panel::FocusChanges"
        }
      ]
    },
    {
      "source": "vim",
      "context": "SkillCreator",
      "group": "Skill Creator",
      "block": 68,
      "key": "shift-tab",
      "action": "skill_creator::FocusPreviousField",
      "label": "Focus Previous Field",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    },
    {
      "source": "vim",
      "context": "SkillCreator > Editor",
      "group": "Skill Creator",
      "block": 69,
      "key": "tab",
      "action": "skill_creator::FocusNextField",
      "label": "Focus Next Field",
      "disabled": false,
      "kind": "bindings",
      "overrides": [
        {
          "context": "GitPanel && ChangesList && !Editor",
          "label": "Focus Editor",
          "action": "git_panel::FocusEditor"
        },
        {
          "context": "CommitEditor > Editor",
          "label": "Focus Changes",
          "action": "git_panel::FocusChanges"
        }
      ]
    },
    {
      "source": "vim",
      "context": "SkillCreator > Editor",
      "group": "Skill Creator",
      "block": 69,
      "key": "shift-tab",
      "action": "skill_creator::FocusPreviousField",
      "label": "Focus Previous Field",
      "disabled": false,
      "kind": "bindings",
      "overrides": []
    }
  ]
};
