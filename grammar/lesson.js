(() => {
  const root=document.getElementById('lessonRoot');
  const chapters=window.grammarChapters||[];
  if(!root || !chapters.length) return;
  const id=new URLSearchParams(location.search).get('id')||chapters[0].id;
  const chapter=chapters.find(x=>x.id===id)||chapters[0];
  const idx=chapters.indexOf(chapter), prev=chapters[idx-1], next=chapters[idx+1];
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const progressKey='eml-grammar-sublesson-complete-v2';
  const done=new Set(JSON.parse(localStorage.getItem(progressKey)||'[]'));
  const units=chapter.units||[];
  const chapterDone=units.filter(u=>done.has(`${chapter.id}:${u.id}`)).length;
  document.title=`${chapter.title} | English Mastery Lab`;

  const renderExamples=items=>(items||[]).map(ex=>`<div class="chapter"><div class="example-line"><strong>${esc(ex[0])}</strong><button class="speak" data-speak="${esc(ex[0])}">▶</button></div><p class="jp">${esc(ex[1]||'')}</p><p class="tc">${esc(ex[2]||'')}</p></div>`).join('');
  const renderContrasts=items=>(items||[]).map(c=>`<div class="contrast"><div class="wrong">× ${esc(c[0])}</div><div class="right">○ ${esc(c[1])}</div><p class="jp">${esc(c[2]||'')}</p><p class="tc">${esc(c[3]||'')}</p></div>`).join('');

  root.innerHTML=`
    <header class="lesson-head">
      <div class="formula-row"><span class="badge">${esc(chapter.level)}</span><span class="badge">${esc(chapter.domain)}</span><span class="badge">${units.length} sub-lessons</span></div>
      <h1>${esc(chapter.title)}</h1><p class="tc">${esc(chapter.titleTc||'')}</p>
      <p class="lead jp">${esc(chapter.overviewJP||'')}</p><p class="lead tc">${esc(chapter.overviewTC||'')}</p>
      <div class="practice-box"><strong>Chapter progress: ${chapterDone} / ${units.length}</strong></div>
    </header>

    <section class="chapter lesson-section">
      <h2>Mastery Outcomes</h2>
      <div class="jp"><ul>${(chapter.outcomesJP||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
      <div class="tc"><ul>${(chapter.outcomesTC||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
    </section>

    <section class="chapter lesson-section">
      <h2>Chapter Map</h2>
      <ol>${units.map((u,i)=>`<li><a href="#unit-${esc(u.id)}">${String(i+1).padStart(2,'0')} · ${esc(u.title)}</a> <span class="badge">${esc(u.level||'')}</span> ${done.has(`${chapter.id}:${u.id}`)?'<span class="badge">✓ done</span>':''}</li>`).join('')}</ol>
    </section>

    ${units.map((u,i)=>{
      const unitKey=`${chapter.id}:${u.id}`;
      return `<article class="chapter lesson-section" id="unit-${esc(u.id)}">
        <div class="formula-row"><span class="badge">Sub-lesson ${i+1}/${units.length}</span><span class="badge">${esc(u.level||'')}</span></div>
        <h2>${esc(u.title)}</h2>
        <h3>Teacher Explanation</h3><p class="jp">${esc(u.explainJP||'')}</p><p class="tc">${esc(u.explainTC||'')}</p>
        <h3>Rules & Decision Points</h3><div class="jp"><ul>${(u.rulesJP||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="tc"><ul>${(u.rulesTC||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
        <h3>Examples</h3>${renderExamples(u.examples)}
        <h3>Contrast & Common Mistake</h3>${renderContrasts(u.contrasts)}
        <h3>Active Drill</h3><div class="practice-box jp">${esc(u.drillJP||'')}</div><div class="practice-box tc">${esc(u.drillTC||'')}</div>
        <div class="lesson-actions"><button class="complete-btn ${done.has(unitKey)?'done':''}" data-unit-complete="${esc(unitKey)}">${done.has(unitKey)?'✓ Sub-lesson completed':'Mark sub-lesson complete'}</button><a class="secondary" href="#top">↑ Chapter top</a></div>
      </article>`;
    }).join('')}

    <section class="chapter lesson-section">
      <h2>Chapter Mastery Check</h2>
      <ul><li>各Sub-lessonの判断基準を例を見ずに説明できる</li><li>典型的な誤文を見て「なぜ誤りか」を説明できる</li><li>各Sub-lessonで自分の内容の英文を最低3文作れる</li><li>24時間後・3日後・7日後にDrillを解き直す</li><li>会話またはWritingでこの章の文法を実際に使う</li></ul>
    </section>

    <div class="lesson-actions">${prev?`<a class="secondary" href="?id=${encodeURIComponent(prev.id)}">← ${esc(prev.title)}</a>`:''}<a class="secondary" href="/learn_english/grammar/">Grammar Library</a>${next?`<a class="secondary" href="?id=${encodeURIComponent(next.id)}">${esc(next.title)} →</a>`:''}</div>`;

  document.addEventListener('click',e=>{
    const speakBtn=e.target.closest('[data-speak]');
    if(speakBtn && 'speechSynthesis' in window){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(speakBtn.dataset.speak);u.lang='en-US';speechSynthesis.speak(u);}
    const complete=e.target.closest('[data-unit-complete]');
    if(complete){
      const k=complete.dataset.unitComplete;
      if(done.has(k)) done.delete(k); else done.add(k);
      localStorage.setItem(progressKey,JSON.stringify([...done]));
      complete.classList.toggle('done',done.has(k));
      complete.textContent=done.has(k)?'✓ Sub-lesson completed':'Mark sub-lesson complete';
    }
  });
})();