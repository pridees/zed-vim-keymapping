'use strict';
const $ = s => document.querySelector(s);
const data = window.KEYMAP_DATA.rows;
let source = 'custom';
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const keyLabel = key => key.startsWith('shift-') && key.length === 7 ? key.at(-1).toUpperCase() : key.split('-').map(s => ({ctrl:'Ctrl',alt:'Alt',shift:'Shift',cmd:'Cmd',space:'Space',enter:'Enter',escape:'Esc',backspace:'Backspace',tab:'Tab',up:'↑',down:'↓',left:'←',right:'→'}[s] || s)).join('+');
const label = window.keymapLabel;
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
