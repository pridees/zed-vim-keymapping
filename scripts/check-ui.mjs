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
