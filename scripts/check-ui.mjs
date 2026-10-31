import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
// Check rendering and event logic without a browser; this is not a visual layout test.
const elements = new Map();
const element = id => { if (!elements.has(id)) elements.set(id,{value:'',checked:false,hidden:false,innerHTML:'',textContent:'',listeners:{},addEventListener(name,fn){this.listeners[name]=fn},setAttribute(){},focus(){},blur(){}}); return elements.get(id); };
const sandbox={window:{},document:{querySelector:element,querySelectorAll:()=>[],addEventListener(){},activeElement:{tagName:'BODY'}}};
vm.createContext(sandbox);
for(const path of ['docs/keymaps.js','docs/labels.js','docs/app.js'])vm.runInContext(fs.readFileSync(new URL('../'+path,import.meta.url),'utf8'),sandbox);
assert(element('#cards').innerHTML.includes('Copy relative path'));
assert(element('#cards').innerHTML.includes('Copy selected entry'));
element('#search').value='Copy relative path';element('#search').listeners.input();
assert(element('#cards').innerHTML.includes('ProjectPanel'));
assert(!element('#cards').innerHTML.includes('Close active tab'));
element('#search').value='no-such-binding-xyz';element('#search').listeners.input();assert.equal(element('#empty').hidden,false);
element('#search').value='';
element('#sources').listeners.click({target:{closest:()=>({dataset:{source:'vim'}})}});
assert(element('#cards').innerHTML.includes('CONTEXT OVERRIDES'));
assert(element('#cards').innerHTML.includes('Select next occurrence'));
element('#group').value='Project tree';element('#group').listeners.change();
assert(!element('#cards').innerHTML.includes('Vim motions &amp; commands'));
console.log('UI logic OK: initial rendering, search, empty state, source and context filters.');

// Audit the actual text produced for every custom and native binding.
const descriptions = vm.runInContext('data.map(label)', sandbox);
for (const description of descriptions) {
 assert.equal(typeof description, 'string', 'Missing binding description');
 assert(description.trim().length > 0, 'Empty binding description');
 assert(description.trim().split(/\s+/).length <= 3, 'Long label: ' + description);
 assert(!/^(Toggle|Open|Deploy|Spawn|Sequence|Send Keystrokes)$/.test(description), 'Vague label: ' + description);
}
assert.equal(vm.runInContext("label(data.find(r=>r.action==='terminal_panel::Toggle'))", sandbox), 'Toggle terminal panel');
assert.equal(vm.runInContext("label(data.find(r=>r.action==='diagnostics::Deploy'))", sandbox), 'Show project diagnostics');
assert.equal(vm.runInContext("label(data.find(r=>r.key==='space s r'))", sandbox), 'Replace across project');
assert.equal(vm.runInContext("label(data.find(r=>r.key==='g shift-d' && r.context.includes('GitPanel')))", sandbox), 'Open file diff');
console.log(`All ${descriptions.length} binding descriptions are nonempty and at most three words.`);

for (const key of ['space s s', 'space s shift-s']) {
 const entry = vm.runInContext(`data.find(r => r.source === 'custom' && r.key === ${JSON.stringify(key)})`, sandbox);
 const expected = key === 'space s s' ? 'Find file symbol' : 'Find project symbol';
 assert.equal(entry.label, expected);
 assert.equal(sandbox.window.keymapLabel(entry), expected);
}
for (const row of sandbox.window.KEYMAP_DATA.rows) {
 assert.equal(row.label, sandbox.window.keymapLabel(row), 'Stored and rendered descriptions differ');
 for (const override of row.overrides || []) assert(!/^(Toggle|Open|Deploy|Spawn)$/.test(override.label));
}

const nativeRows = sandbox.window.KEYMAP_DATA.rows.filter(r => r.source === 'vim');
for (const action of ['agent::Chat', 'notebook::Run', 'skill_creator::FocusNextField', 'editor::AcceptEditPrediction']) {
 assert(!nativeRows.some(r => r.action === action), `Standard UI action leaked: ${action}`);
}
for (const [key, action] of [['ctrl-o','pane::GoBack'], ['ctrl-i','pane::GoForward'], ['ctrl-w h','workspace::ActivatePaneLeft'], ['z a','editor::ToggleFold'], ['g d','editor::GoToDefinition'], ['ctrl-p','editor::ShowWordCompletions']]) {
 assert(nativeRows.some(r => r.key === key && r.action === action), `Vim command missing: ${key}`);
}
assert(!nativeRows.some(r => r.key === 'ctrl-pageup'));
assert(sandbox.window.KEYMAP_DATA.rows.some(r => r.source === 'custom' && r.key === 'tab' && r.action === 'git_panel::FocusChanges'));
console.log('Native scope OK: Vim commands retained; ordinary Zed UI shortcuts excluded.');

for (const mode of ['insert', 'replace']) {
 assert(!nativeRows.some(r => r.context === `vim_mode == ${mode}` && r.action === 'editor::Paste'));
 assert(nativeRows.some(r => r.context === `vim_mode == ${mode}` && r.key === 'ctrl-r' && r.action === 'vim::PushRegister') || mode === 'replace');
 assert(!nativeRows.some(r => r.context === `vim_mode == ${mode}` && r.key === 'ctrl-v'));
 const customRows = sandbox.window.KEYMAP_DATA.rows.filter(r => r.source === 'custom' && r.context === `vim_mode == ${mode}`);
 assert.equal(customRows.find(r => r.key === 'ctrl-v').action, 'editor::Paste');
 const literal = customRows.find(r => r.key === 'ctrl-q');
 assert.equal(literal.action[0], 'vim::PushLiteral');
 assert.equal(literal.label, 'Quote next character');
 assert(!nativeRows.some(r => r.context === `vim_mode == ${mode}` && ['ctrl-q','ctrl-shift-q'].includes(r.key)));
}
assert(nativeRows.some(r => r.key === 'p' && r.action === 'vim::Paste'));
assert(nativeRows.some(r => r.key === 'shift-r' && r.action === 'vim::ToggleReplace'));
assert(nativeRows.some(r => r.key === 'g t' && r.action === 'vim::GoToTab'));

assert(nativeRows.some(r => r.key === 'ctrl-v' && r.action === 'vim::ToggleVisualBlock'));
