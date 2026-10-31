'use strict';
const $ = s => document.querySelector(s);
const data = window.KEYMAP_DATA.rows;
let source = 'custom';
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const keyLabel = key => key.startsWith('shift-') && key.length === 7 ? key.at(-1).toUpperCase() : key.split('-').map(s => ({ctrl:'Ctrl',alt:'Alt',shift:'Shift',cmd:'Cmd',space:'Space',enter:'Enter',escape:'Esc',backspace:'Backspace',tab:'Tab',up:'↑',down:'↓',left:'←',right:'→'}[s] || s)).join('+');
function label(row){
 const action = Array.isArray(row.action) ? row.action[0] : row.action;
 const args = Array.isArray(row.action) ? row.action[1] : null;
 if(row.kind==='unbind' || (row.disabled && action!==null)) return 'Binding removed';
 if(row.disabled) return 'Disabled / prefix';
 if(action==='action::Sequence') {
  const sequences = {
   'space a d':'Attach diagnostics context', 'space a n':'New agent thread',
   'space a c':'Choose agent context', 'space a r':'Review agent changes',
   'space w q':'Close active dock', 'space w shift-q':'Close all docks',
   'space w s':'Split editor down', 'space w v':'Split editor right',
   'space w shift-o':'Join editor panes', 'l':'Focus selected diff'
  };
  return sequences[row.key];
 }
 if(action==='workspace::SendKeystrokes') return {
  'y s':'Add surrounding delimiters', 'd s':'Delete surrounding delimiters',
  'c s':'Change surrounding delimiters', 'z t ^':'Top-align line start',
  'z b ^':'Bottom-align line start', 'shift-h k z b ^':'Previous screenful',
  'shift-l j z t ^':'Next screenful', 'z z ^':'Center line start'
 }[args];
 if(action==='pane::CloseActiveItem') return args?.close_pinned ? 'Close any tab' : args?.save_intent==='skip' ? 'Close without saving' : 'Close active tab';
 if(action==='pane::DeploySearch' && args?.replace_enabled) return 'Replace across project';
 if(action==='menu::Confirm' && row.context.includes('GitPanel')) return 'Open project diff';
 if(action==='menu::SecondaryConfirm' && row.context.includes('GitPanel')) return 'Open file diff';
 if(action==='editor::SelectNext') return args?.replace_newest ? 'Skip match forward' : 'Select next match';
 if(action==='editor::SelectPrevious') return args?.replace_newest ? 'Skip match backward' : 'Select previous match';
 if(action==='vim::PushObject') return args?.around ? 'Around text object' : 'Inside text object';
 if(action==='vim::Number') return 'Count digit ' + args;
 if(action==='vim::Search') return args?.backwards ? 'Search backward' : 'Search forward';
 if(action==='vim::PushFindForward') return args?.before ? 'Till next character' : 'Find next character';
 if(action==='vim::PushFindBackward') return args?.after ? 'Till previous character' : 'Find previous character';
 if(action==='vim::PushJump') return args?.line ? 'Jump mark line' : 'Jump mark position';
 if(action==='vim::UnmatchedForward') return 'Next unmatched ' + args.char;
 if(action==='vim::UnmatchedBackward') return 'Previous unmatched ' + args.char;
 if(action==='vim::Paste') return args?.preserve_clipboard ? 'Paste preserving register' : args?.before ? 'Paste before cursor' : row.context.includes('visual') ? 'Paste over selection' : 'Paste after cursor';
 if(args?.step && action==='vim::Increment') return 'Increment progressive sequence';
 if(args?.step && action==='vim::Decrement') return 'Decrement progressive sequence';
 if(args?.partial_word) return action==='vim::MoveToNext' ? 'Next substring match' : 'Previous substring match';
 if(args?.display_lines) return {
  'vim::Down':'Screen line down', 'vim::Up':'Screen line up',
  'vim::StartOfLine':'Screen line start', 'vim::EndOfLine':'Screen line end',
  'vim::MiddleOfLine':'Screen line midpoint', 'vim::FirstNonWhitespace':'Screen first nonblank'
 }[action];
 if(action==='vim::IndentObj' && args?.include_below) return 'Indentation including below';
 const text = window.KEYMAP_LABELS[action];
 return args?.ignore_punctuation ? text?.replace(/word/i,'WORD') : text;
}
function render(){
 const query=$('#search').value.trim().toLowerCase();
 const group=$('#group').value;
 const rows=data.filter(r=>(source==='all'||r.source===source)&&(!group||r.group===group)&&($('#disabled').checked||!r.disabled)&&(!query||[r.key,keyLabel(r.key),label(r),r.context,JSON.stringify(r.action)].join(' ').toLowerCase().includes(query)));
 $('#count').textContent=`${rows.length} BINDINGS`;
 $('#empty').hidden=rows.length>0;
 const groups=new Map();
 for(const r of rows){const name=(source==='all'?`${r.source==='custom'?'Custom':'Native'} / `:'')+r.group;if(!groups.has(name))groups.set(name,[]);groups.get(name).push(r);}
 $('#cards').innerHTML=[...groups].map(([name,items])=>`<article class="card"><h2>${escape(name)}<span>${String(items.length).padStart(2,'0')}</span></h2>${items.map(r=>`<details class="${r.disabled?'disabled':''}"><summary><span class="keys">${r.key.split(' ').map(k=>`<kbd>${escape(keyLabel(k))}</kbd>`).join('')}</span><span class="description">${escape(label(r))}${r.overrides?.length?'<small class="tag">CONTEXT OVERRIDES</small>':''}</span></summary><div class="meta"><strong>CONTEXT</strong><p>${escape(r.context)}</p><pre>${escape(JSON.stringify(r.action,null,2))}</pre>${r.overrides?.length?`<strong>CUSTOM RULES FOR THIS KEY</strong>${r.overrides.map(o=>`<p>${escape(label(data.find(c=>c.source==='custom' && c.context===o.context && JSON.stringify(c.action)===JSON.stringify(o.action) && c.key===r.key)))}<br>${escape(o.context)}</p>`).join('')}`:''}</div></details>`).join('')}</article>`).join('');
}
function groups(){const select=$('#group');select.innerHTML='<option value="">All contexts</option>'+[...new Set(data.filter(r=>source==='all'||r.source===source).map(r=>r.group))].sort().map(g=>`<option>${escape(g)}</option>`).join('');}
$('#sources').addEventListener('click',event=>{const button=event.target.closest('button');if(!button)return;source=button.dataset.source;document.querySelectorAll('#sources button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));groups();render();});
$('#search').addEventListener('input',render);$('#group').addEventListener('change',render);$('#disabled').addEventListener('change',render);
document.addEventListener('keydown',event=>{if(event.key==='/'&&!['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName)){event.preventDefault();$('#search').focus();}if(event.key==='Escape'&&document.activeElement===$('#search')){$('#search').value='';$('#search').blur();render();}});
$('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{$('#fullscreen').textContent='Use F11';}});
groups();render();
