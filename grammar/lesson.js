(() => {
  const root=document.getElementById('lessonRoot');
  if(!root || typeof grammarLessons==='undefined') return;
  const id=new URLSearchParams(location.search).get('id')||grammarLessons[0].id;
  const lesson=grammarLessons.find(x=>x.id===id)||grammarLessons[0];
  const idx=grammarLessons.indexOf(lesson), prev=grammarLessons[idx-1], next=grammarLessons[idx+1];
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const key='eml-grammar-complete'; const done=new Set(JSON.parse(localStorage.getItem(key)||'[]'));
  root.innerHTML=`<header class="lesson-head"><div class="formula-row"><span class="badge">${esc(lesson.level)}</span><span class="badge">${esc(lesson.domain||'Grammar')}</span></div><h1>${esc(lesson.title)}</h1><p class="tc">${esc(lesson.titleTc||'')}</p><p class="lead">${esc(lesson.focus||'')}</p></header>
  <section class="chapter lesson-section"><h2>Form</h2><div class="formula-row">${(lesson.formula||[]).map(x=>`<code>${esc(x)}</code>`).join('')}</div></section>
  <section class="chapter lesson-section"><h2>Teacher Explanation</h2><p class="jp">${esc(lesson.lectureJP)}</p><p class="tc">${esc(lesson.lectureTC)}</p></section>
  <section class="chapter lesson-section"><h2>How to use it</h2><ul class="jp">${(lesson.usageJP||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul><ul class="tc">${(lesson.usageTC||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
  <section class="chapter lesson-section"><h2>Contrast & Common Mistakes</h2>${(lesson.contrasts||[]).map(c=>`<div class="contrast"><div class="wrong">× ${esc(c[0])}</div><div class="right">○ ${esc(c[1])}</div><div class="jp">${esc(c[2])}</div><div class="tc">${esc(c[3])}</div></div>`).join('')}</section>
  <section class="chapter lesson-section"><h2>Real Examples</h2>${(lesson.examples||[]).map(x=>`<div class="example-line"><span>${esc(x)}</span><button class="speak" data-speak="${esc(x)}">▶</button></div>`).join('')}</section>
  <section class="chapter lesson-section"><h2>Output Assignment</h2><div class="practice-box jp">${esc(lesson.taskJP)}</div><div class="practice-box tc">${esc(lesson.taskTC)}</div></section>
  <section class="chapter lesson-section"><h2>Mastery Check</h2><ul><li>ルールを見ずに説明できる</li><li>正例と誤例の違いを説明できる</li><li>自分の内容で3文以上作れる</li><li>会話かWritingで1回使った</li></ul></section>
  <div class="lesson-actions">${prev?`<a class="secondary" href="?id=${encodeURIComponent(prev.id)}">← Previous</a>`:''}<button id="completeLesson" class="complete-btn ${done.has(lesson.id)?'done':''}">${done.has(lesson.id)?'✓ Completed':'Mark complete'}</button>${next?`<a class="secondary" href="?id=${encodeURIComponent(next.id)}">Next →</a>`:''}</div>`;
  document.addEventListener('click',e=>{const b=e.target.closest('[data-speak]');if(!b)return;if('speechSynthesis' in window){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(b.dataset.speak);u.lang='en-US';speechSynthesis.speak(u);}});
  document.getElementById('completeLesson').addEventListener('click',e=>{if(done.has(lesson.id))done.delete(lesson.id);else done.add(lesson.id);localStorage.setItem(key,JSON.stringify([...done]));e.target.classList.toggle('done',done.has(lesson.id));e.target.textContent=done.has(lesson.id)?'✓ Completed':'Mark complete';});
})();