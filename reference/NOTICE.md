# Upstream reference

`vim.json` is the unmodified Vim keymap from Zed 1.25.3, commit
`8dd255c3eafb5231056fe4e6f601cedd011f1c93`:
https://github.com/zed-industries/zed/blob/8dd255c3eafb5231056fe4e6f601cedd011f1c93/assets/keymaps/vim.json

`linux-ui.json` reproduces only the two `ctrl-;` bindings from the same
version's Linux defaults, preserving their contexts, actions and
`use_key_equivalents` setting:
https://github.com/zed-industries/zed/blob/8dd255c3eafb5231056fe4e6f601cedd011f1c93/assets/keymaps/default-linux.json

Copyright Zed Industries, Inc. and contributors.
The upstream files are distributed under GPL-3.0-or-later; see `LICENSE-GPL`.
The native reference entries reproduced in `docs/keymaps.js` retain these terms.
The project's own code and custom configuration are MIT-licensed as stated in the root `LICENSE`.

The reference is a snapshot, not an executable replacement for the custom keymap.
The generator excludes Helix-only and Windows-only contexts, removes defaults
replaced in the identical context or by unconditional custom bindings, and marks
other same-key custom rules. Remaining context predicates are shown verbatim;
the cheat sheet does not emulate Zed's runtime context resolver. The selected
Linux UI defaults are included alongside Vim commands as explicit reference
entries; unrelated native UI shortcuts remain excluded.
