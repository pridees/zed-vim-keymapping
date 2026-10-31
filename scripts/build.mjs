import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { isVimReference } from './native-scope.mjs';
const labelsContext = { window: {} };
vm.runInNewContext(fs.readFileSync(new URL('../docs/labels.js', import.meta.url), 'utf8'), labelsContext);
const describe = labelsContext.window.keymapLabel;
const read = p => vm.runInNewContext('(' + fs.readFileSync(new URL('../' + p, import.meta.url), 'utf8') + ')', Object.create(null), {timeout: 1000});
const custom = read('keymap.json'), defaults = read('reference/vim.json');
const rows = [];
const title = context => {
 for (const [match, name] of [['AgentPanel','Agent editor'],['GitDiff','Diff editor'],['multibuffer','Multibuffers'],['ProjectPanel','Project tree'],['CommitEditor','Commit editor'],['GitPanel','Git panel'],['Terminal && vi_mode','Terminal selection'],['Dock || Terminal','Dock focus'],['!Dock','Center tabs'],['VimControl || !vim_mode','Workspace leader'],['EmptyPane','Editor leader'],['vim_mode == visual','Visual mode'],['vim_mode == normal','Normal mode'],['vim_mode == insert','Insert mode'],['vim_mode == replace','Replace mode'],['vim_operator','Operators & objects'],['Workspace','Workspace']]) if (context.includes(match)) return name;
 if (context === 'Global') return 'Pane navigation';
 if (context.startsWith('VimControl')) return 'Vim motions & commands';
 return context.split(/ &&| >| \|\|/)[0].replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^!/, 'Outside ');
};
const human = action => {
 if (action === null) return 'Disabled / reserved prefix';
 const name = Array.isArray(action) ? action[0] : action;
 if (name === 'action::Sequence') return action[1].map(human).join(' → ');
 if (name === 'workspace::SendKeystrokes') return 'Send ' + action[1];
 return name.split('::').at(-1).replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
};
for (const [source, blocks] of [['custom',custom],['vim',defaults]]) {
 blocks.forEach((block, index) => {
 const context = block.context || 'Global';
 // The upstream file also contains Helix-only mappings; keep shared Vim/Helix contexts.
 if (source === 'vim' && /os == windows/.test(context)) return;
 if (source === 'vim' && /helix/.test(context) && !/vim_mode == (normal|visual|insert)|vim_operator == (a |i |cs )/.test(context)) return;
 for (const kind of ['bindings','unbind']) for (const [key, action] of Object.entries(block[kind] || {})) {
 rows.push({source, context, group:title(context), block:index, key, action, label:human(action), disabled:kind === 'unbind' || action === null, kind});
 }
 });
}
for (const row of rows) {
 if (row.source === 'custom' && row.kind === 'bindings' && rows.some(r => r.source === 'custom' && r.kind === 'unbind' && r.block > row.block && r.context === row.context && r.key === row.key && JSON.stringify(r.action) === JSON.stringify(row.action))) { row.disabled = true; row.label = 'Removed by later unbind'; }
}
// Remove inherited entries that are unconditionally overridden, or replaced in the exact same context.
const effective = rows.filter(r => r.source === 'custom' || !rows.some(c => c.source === 'custom' && c.kind === 'bindings' && c.key === r.key && (c.context === 'Global' || c.context === r.context)));
// Hide conventional keyboard aliases only when an equivalent Vim binding exists.
// Keep contexts and complete action arguments: matching names alone is insufficient.
const conventionalKey = /(?:^| )(?:left|right|up|down|home|end|pageup|pagedown|insert|delete)(?: |$)/;
const duplicateControlChord = /^ctrl-w (?:ctrl-|shift-s$)/;
const isStandardAlias = row => conventionalKey.test(row.key) || duplicateControlChord.test(row.key);
const sameAction = (a, b) => a.context === b.context && JSON.stringify(a.action) === JSON.stringify(b.action);
const vimScoped = effective.filter(isVimReference);
const visible = vimScoped.filter(row => row.source !== 'vim' || row.disabled || !isStandardAlias(row) ||
 !effective.some(other => other !== row && !other.disabled && !isStandardAlias(other) && sameAction(row, other)));
assert(visible.some(r => r.key === 'h' && r.action === 'vim::Left'));
assert(!visible.some(r => r.key === 'left' && r.action === 'vim::Left'));
assert(visible.some(r => r.key === 'ctrl-w h' && r.action === 'workspace::ActivatePaneLeft'));
assert(!visible.some(r => r.key === 'ctrl-w ctrl-h' && r.action === 'workspace::ActivatePaneLeft'));
// These are distinct Vim commands, even though the upstream action name is shared.
assert(visible.some(r => r.key === 'ctrl-p' && r.action === 'editor::ShowWordCompletions'));
assert(visible.some(r => r.key === 'ctrl-n' && r.action === 'editor::ShowWordCompletions'));
// Store the same descriptions used by the UI, including override details.
for (const row of visible) {
 row.label = describe(row);
 assert(typeof row.label === 'string' && row.label.trim(), `Missing description: ${row.key}`);
 assert(row.label.split(/\s+/).length <= 3, `Long description: ${row.label}`);
}
for (const row of visible.filter(r => r.source === 'vim')) {
 row.overrides = rows.filter(r => r.source === 'custom' && r.key === row.key)
  .map(r => ({context:r.context, label:r.label, action:r.action}));
}
const data = {version:'1.25.3', commit:'8dd255c3eafb5231056fe4e6f601cedd011f1c93', rows:visible};
assert.equal(rows.filter(r=>r.source==='custom').length, custom.reduce((n,b)=>n+Object.keys(b.bindings||{}).length+Object.keys(b.unbind||{}).length,0));
assert(effective.some(r=>r.context==='ProjectPanel && not_editing' && r.key==='y' && r.action==='workspace::CopyRelativePath'));
assert(effective.some(r=>r.context==='ProjectPanel && not_editing' && r.key==='c' && r.action==='project_panel::Copy'));
const output = new URL('../docs/keymaps.js', import.meta.url);
const content = 'window.KEYMAP_DATA = ' + JSON.stringify(data,null,2) + ';\n';
if (process.argv.includes('--check')) assert.equal(fs.readFileSync(output,'utf8'),content,'Cheat sheet is stale. Run node scripts/build.mjs');
else fs.writeFileSync(output,content);
console.log(`${rows.filter(r=>r.source==='custom').length} custom entries; ${visible.filter(r=>r.source==='vim').length} inherited Vim entries; ${effective.length-vimScoped.length} Zed UI shortcuts and ${vimScoped.length-visible.length} standard aliases hidden. Coverage OK.`);

// Content versions prevent browsers from reusing stale scripts after deployment.
const indexPath = new URL('../docs/index.html', import.meta.url);
const originalHtml = fs.readFileSync(indexPath, 'utf8');
let html = originalHtml;
for (const asset of ['style.css', 'keymaps.js', 'labels.js', 'app.js']) {
 const bytes = asset === 'keymaps.js' ? content : fs.readFileSync(new URL('../docs/' + asset, import.meta.url));
 const hash = createHash('sha256').update(bytes).digest('hex').slice(0,12);
 const escaped = asset.replaceAll('.', '\\.');
 html = html.replace(new RegExp(`((?:src|href)="${escaped})(?:\\?v=[a-f0-9]+)?"`, 'g'), `$1?v=${hash}"`);
}
if (process.argv.includes('--check')) assert.equal(originalHtml, html, 'Asset versions are stale. Run node scripts/build.mjs');
else fs.writeFileSync(indexPath, html);
