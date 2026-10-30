'use strict';
const $ = s => document.querySelector(s);
const data = window.KEYMAP_DATA.rows;
let source = 'custom';
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const keyLabel = key => key.startsWith('shift-') && key.length === 7 ? key.at(-1).toUpperCase() : key.split('-').map(s => ({ctrl:'Ctrl',alt:'Alt',shift:'Shift',cmd:'Cmd',space:'Space',enter:'Enter',escape:'Esc',backspace:'Backspace',tab:'Tab',up:'↑',down:'↓',left:'←',right:'→'}[s] || s)).join('+');
const labels = {'workspace::CopyRelativePath':'Copy relative path','workspace::CopyPath':'Copy full path','project_panel::Copy':'Copy file / folder','project_panel::Open':'Preview file','project_panel::OpenPermanent':'Open file','editor::OpenExcerpts':'Open source files','pane::CloseActiveItem':'Close active tab','agent::AddSelectionToThread':'Add selection to agent draft','vim::SelectNext':'Select next match','vim::SelectAll':'Select all matches'};
function label(row){
 const action = Array.isArray(row.action) ? row.action[0] : row.action;
 if(row.kind==='unbind') return 'Remove this binding';
 if(row.disabled) return row.label;
 if(row.source==='custom') {
  if(row.key==='space a d') return 'Add diagnostics to agent draft';
  if(row.key==='space a n') return 'New agent thread';
  if(row.key==='space a c') return 'Add agent context';
  if(row.key==='space a r') return 'Review agent changes';
  if(row.key==='space w q' && action==='action::Sequence') return 'Close dock · focus editor';
  if(row.key==='space w shift-q') return 'Close all docks · focus editor';
  if(row.key==='space w s') return 'Split editor down';
  if(row.key==='space w v') return 'Split editor right';
  if(row.key==='space w shift-o') return 'Join all editor panes';
  if(row.key==='l' && row.context.includes('GitPanel')) return 'Open diff · focus editor';
  if(row.key==='space b d') return 'Close tab (including pinned)';
 }
 const args = Array.isArray(row.action) ? row.action[1] : null;
 if(action==='editor::SelectNext') return args?.replace_newest ? 'Skip match · select next' : 'Select next match';
 if(action==='editor::SelectPrevious') return args?.replace_newest ? 'Skip match · select previous' : 'Select previous match';
 if(action==='editor::SelectAllMatches') return 'Select all matches';
 if(action==='vim::PushObject') return args?.around ? 'Around text object' : 'Inside text object';
 if(action==='vim::Number') return 'Count digit ' + args;
 if(action==='vim::Search') return args?.backwards ? 'Search backward' : 'Search forward';
 if(action==='vim::PushFindForward') return args?.before ? 'Till next character' : 'Find next character';
 if(action==='vim::PushFindBackward') return args?.after ? 'Till previous character' : 'Find previous character';
 if(action==='vim::PushJump') return args?.line ? 'Jump to mark line' : 'Jump to mark position';
 let text=labels[action] || row.label.replace(/^Push /, 'Start ');
 if(args?.ignore_punctuation) text += ' · WORD';
 if(args?.display_lines) text += ' · screen line';
 if(args?.partial_word) text += ' · partial word';
 if(args?.step) text += ' · progressive';
 if(args?.char) text += ' ' + args.char;
 return text;
}
function render(){
 const query=$('#search').value.trim().toLowerCase();
 const group=$('#group').value;
 const rows=data.filter(r=>(source==='all'||r.source===source)&&(!group||r.group===group)&&($('#disabled').checked||!r.disabled)&&(!query||[r.key,keyLabel(r.key),label(r),r.context,JSON.stringify(r.action)].join(' ').toLowerCase().includes(query)));
 $('#count').textContent=`${rows.length} BINDINGS`;
 $('#empty').hidden=rows.length>0;
 const groups=new Map();
 for(const r of rows){const name=(source==='all'?`${r.source==='custom'?'Custom':'Native'} / `:'')+r.group;if(!groups.has(name))groups.set(name,[]);groups.get(name).push(r);}
 $('#cards').innerHTML=[...groups].map(([name,items])=>`<article class="card"><h2>${escape(name)}<span>${String(items.length).padStart(2,'0')}</span></h2>${items.map(r=>`<details class="${r.disabled?'disabled':''}"><summary><span class="keys">${r.key.split(' ').map(k=>`<kbd>${escape(keyLabel(k))}</kbd>`).join('')}</span><span class="description">${escape(label(r))}${r.overrides?.length?'<small class="tag">CONTEXT OVERRIDES</small>':''}</span></summary><div class="meta"><strong>CONTEXT</strong><p>${escape(r.context)}</p><pre>${escape(JSON.stringify(r.action,null,2))}</pre>${r.overrides?.length?`<strong>CUSTOM RULES FOR THIS KEY</strong>${r.overrides.map(o=>`<p>${escape(o.label)}<br>${escape(o.context)}</p>`).join('')}`:''}</div></details>`).join('')}</article>`).join('');
}
function groups(){const select=$('#group');select.innerHTML='<option value="">All contexts</option>'+[...new Set(data.filter(r=>source==='all'||r.source===source).map(r=>r.group))].sort().map(g=>`<option>${escape(g)}</option>`).join('');}
$('#sources').addEventListener('click',event=>{const button=event.target.closest('button');if(!button)return;source=button.dataset.source;document.querySelectorAll('#sources button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));groups();render();});
$('#search').addEventListener('input',render);$('#group').addEventListener('change',render);$('#disabled').addEventListener('change',render);
document.addEventListener('keydown',event=>{if(event.key==='/'&&!['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName)){event.preventDefault();$('#search').focus();}if(event.key==='Escape'&&document.activeElement===$('#search')){$('#search').value='';$('#search').blur();render();}});
$('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{$('#fullscreen').textContent='Use F11';}});
groups();render();
