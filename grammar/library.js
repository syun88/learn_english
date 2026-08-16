(() => {
  const root=document.getElementById('grammarLibrary'), search=document.getElementById('grammarSearch'), level=document.getElementById('grammarLevel'), count=document.getElementById('grammarCount');
  if(!root || typeof grammarLessons==='undefined') return;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function render(){
    const q=(search.value||'').trim().toLowerCase(), lv=level.value;
    const items=grammarLessons.filter(x=>{const text=JSON.stringify(x).toLowerCase();return (!q||text.includes(q)) && (lv==='all'||x.level.includes(lv));});
    count.textContent=`${items.length} / ${grammarLessons.length} lessons`;
    root.innerHTML=items.map(x=>`<a class="lesson-link" href="/learn_english/grammar/lesson.html?id=${encodeURIComponent(x.id)}"><div class="meta"><span class="badge">${esc(x.level)}</span><span class="badge">${esc(x.domain||'Grammar')}</span></div><h3>${esc(x.title)}</h3><p class="tc">${esc(x.titleTc||'')}</p><p>${esc(x.focus||'')}</p></a>`).join('');
  }
  search.addEventListener('input',render); level.addEventListener('change',render); render();
})();