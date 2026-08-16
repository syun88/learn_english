(() => {
  const root = document.getElementById('lessonRoot');
  const chapters = window.grammarChapters || [];
  const session = window.GrammarSession;
  if (!root || !chapters.length || !session) return;

  const id = new URLSearchParams(location.search).get('id') || chapters[0].id;
  const chapter = chapters.find(x => x.id === id) || chapters[0];
  const idx = chapters.indexOf(chapter);
  const prev = chapters[idx - 1];
  const next = chapters[idx + 1];
  const units = chapter.units || [];

  const progressKey = 'eml-grammar-sublesson-complete-v3';
  const notesKey = 'eml-grammar-study-notes-v1';
  const done = new Set(JSON.parse(localStorage.getItem(progressKey) || '[]'));
  const notes = JSON.parse(localStorage.getItem(notesKey) || '{}');

  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  const chapterDone = units.filter(u => done.has(`${chapter.id}:${u.id}`)).length;
  const minutes = session.estimateMinutes(chapter);
  const activities = session.activityCount(chapter);
  const schedule = session.buildSchedule(chapter);
  const diagnostic = session.buildDiagnostic(chapter);
  const finalTasks = session.buildFinalTasks(chapter);
  const project = session.buildChapterProject(chapter);

  document.title = `${chapter.title} | English Mastery Lab`;

  const renderExamples = items => (items || []).map((ex, i) => `
    <div class="chapter">
      <div class="formula-row"><span class="badge">Example ${i + 1}</span><span class="badge">Analyse before explanation</span></div>
      <div class="example-line"><strong>${esc(ex[0])}</strong><button class="speak" data-speak="${esc(ex[0])}" type="button">▶</button></div>
      <details>
        <summary>Why is this form used? / 解説を見る</summary>
        <p class="jp">${esc(ex[1] || '')}</p><p class="tc">${esc(ex[2] || '')}</p>
      </details>
    </div>`).join('');

  const renderContrasts = items => (items || []).map((c, i) => `
    <div class="contrast">
      <div class="formula-row"><span class="badge">Error clinic ${i + 1}</span></div>
      <div class="wrong">× ${esc(c[0])}</div>
      <p class="jp">まず自分で自然な英文へ直し、理由を声に出して説明してください。</p>
      <p class="tc">先自行改成自然英文，並口頭說明原因。</p>
      <details>
        <summary>Answer & explanation</summary>
        <div class="right">○ ${esc(c[1])}</div>
        <p class="jp">${esc(c[2] || '')}</p><p class="tc">${esc(c[3] || '')}</p>
      </details>
    </div>`).join('');

  const renderDiagnostic = tasks => tasks.map((t, i) => `
    <article class="chapter">
      <div class="formula-row"><span class="badge">${esc(t.label || `D${i + 1}`)}</span><span class="badge">${esc(t.source || t.kind)}</span></div>
      <p class="jp"><strong>${esc(t.promptJP)}</strong></p><p class="tc">${esc(t.promptTC)}</p>
      <textarea data-study-note="${esc(chapter.id)}:diagnostic:${i}" placeholder="答えを見る前に、自分の判断と理由を書く / 先寫自己的判斷與理由">${esc(notes[`${chapter.id}:diagnostic:${i}`] || '')}</textarea>
      <details><summary>Check answer</summary>${t.answerEN ? `<div class="right">${esc(t.answerEN)}</div>` : ''}<p class="jp">${esc(t.answerJP || '')}</p><p class="tc">${esc(t.answerTC || '')}</p></details>
    </article>`).join('');

  const renderFinalTasks = tasks => tasks.map((t, i) => `
    <article class="chapter">
      <div class="formula-row"><span class="badge">Test ${i + 1}</span><span class="badge">${esc(t.type)}</span></div>
      <p class="jp"><strong>${esc(t.promptJP)}</strong></p><p class="tc">${esc(t.promptTC)}</p>
      <textarea data-study-note="${esc(chapter.id)}:final:${i}" placeholder="教材を見ずに答える / 不看教材作答">${esc(notes[`${chapter.id}:final:${i}`] || '')}</textarea>
      <details><summary>Answer guide / 採点基準</summary>${t.answerEN ? `<div class="right">${esc(t.answerEN)}</div>` : ''}<p class="jp">${esc(t.answerJP || '')}</p><p class="tc">${esc(t.answerTC || '')}</p></details>
    </article>`).join('');

  root.innerHTML = `
    <header class="lesson-head">
      <div class="formula-row">
        <span class="badge">${esc(chapter.level)}</span>
        <span class="badge">${esc(chapter.domain)}</span>
        <span class="badge">${units.length} sub-lessons</span>
        <span class="badge">${minutes}+ min</span>
        <span class="badge">${activities}+ activities</span>
      </div>
      <h1>${esc(chapter.title)}</h1><p class="tc">${esc(chapter.titleTc || '')}</p>
      <p class="lead jp">${esc(chapter.overviewJP || '')}</p><p class="lead tc">${esc(chapter.overviewTC || '')}</p>
      <div class="practice-box"><strong>Chapter progress: ${chapterDone} / ${units.length}</strong><br><span class="jp">この章は「読むだけ」ではなく、最低${minutes}分の授業として設計されています。</span><span class="tc">本章不是只閱讀，而是設計成至少${minutes}分鐘的完整課程。</span></div>
    </header>

    <section class="chapter lesson-section">
      <h2>How to study this chapter · ${minutes}+ minutes</h2>
      <p class="jp">時間は目安です。答えをすぐ開かず、必ず自分で考えてから確認してください。理解が浅い場合は90分を超えて構いません。</p>
      <p class="tc">時間僅供參考。不要立刻打開答案，先自己思考再核對；理解較慢時超過90分鐘也沒有問題。</p>
      ${schedule.map(s => `<div class="chapter"><div class="formula-row"><span class="badge">${esc(s.range)}</span><strong>${esc(s.title)}</strong></div><p class="jp">${esc(s.jp)}</p><p class="tc">${esc(s.tc)}</p></div>`).join('')}
    </section>

    <section class="chapter lesson-section">
      <h2>Mastery Outcomes</h2>
      <div class="jp"><ul>${(chapter.outcomesJP || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
      <div class="tc"><ul>${(chapter.outcomesTC || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
      <div class="practice-box jp"><strong>合格条件：</strong>正解を選べるだけではなく、「なぜその形か」「別の形なら意味がどう変わるか」を説明し、自分の英文で再現できること。</div>
      <div class="practice-box tc"><strong>通過條件：</strong>不只選對答案，還要能解釋「為什麼用這個形式」「換另一形式意思如何改變」，並能用自己的英文重現。</div>
    </section>

    <section class="chapter lesson-section">
      <div class="formula-row"><span class="badge">0–8 min</span><span class="badge">Closed-book first</span></div>
      <h2>0 · Diagnostic — 先に弱点を見つける</h2>
      <p class="jp">まだ下の講義を読まないでください。ここで間違えて構いません。自分の現在位置を知るための診断です。</p>
      <p class="tc">先不要閱讀下面講義。這裡答錯完全沒問題，目的只是確認目前弱點。</p>
      ${renderDiagnostic(diagnostic)}
    </section>

    <section class="chapter lesson-section">
      <h2>Chapter Map</h2>
      <ol>${units.map((u, i) => `<li><a href="#unit-${esc(u.id)}">${String(i + 1).padStart(2, '0')} · ${esc(u.title)}</a> <span class="badge">${esc(u.level || '')}</span> <span class="badge">~14 min</span> ${done.has(`${chapter.id}:${u.id}`) ? '<span class="badge">✓ done</span>' : ''}</li>`).join('')}</ol>
    </section>

    ${units.map((u, i) => {
      const unitKey = `${chapter.id}:${u.id}`;
      const activityPlan = session.buildUnitActivities(chapter, u);
      const noteKey = `${chapter.id}:${u.id}:teachback`;
      return `<article class="chapter lesson-section" id="unit-${esc(u.id)}">
        <div class="formula-row"><span class="badge">Sub-lesson ${i + 1}/${units.length}</span><span class="badge">${esc(u.level || '')}</span><span class="badge">~14–18 min</span></div>
        <h2>${esc(u.title)}</h2>

        <div class="chapter">
          <h3>Study sequence</h3>
          <ol>${activityPlan.map(a => `<li><strong>${esc(a.title)} · ${a.minutes} min</strong><div class="jp">${esc(a.jp)}</div><div class="tc">${esc(a.tc)}</div></li>`).join('')}</ol>
        </div>

        <h3>1 · Teacher Explanation</h3>
        <p class="jp">${esc(u.explainJP || '')}</p><p class="tc">${esc(u.explainTC || '')}</p>
        <div class="practice-box jp"><strong>Teach-back：</strong>この説明を閉じて「この文法は何を表すのか」を30〜60秒で自分の言葉で説明してください。</div>
        <div class="practice-box tc"><strong>Teach-back：</strong>關閉說明後，用30–60秒自己的話解釋這個文法表達什麼。</div>

        <h3>2 · Rule Recall & Decision Points</h3>
        <p class="jp">Rulesを開く前に、自分で判断基準を書いてください。</p><p class="tc">打開 Rules 前，先自己寫出判斷標準。</p>
        <textarea data-study-note="${esc(noteKey)}" placeholder="自分の説明・判断フローを書く / 寫自己的解釋與判斷流程">${esc(notes[noteKey] || '')}</textarea>
        <details><summary>Open Rules & Decision Points</summary><div class="jp"><ul>${(u.rulesJP || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul></div><div class="tc"><ul>${(u.rulesTC || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul></div></details>

        <h3>3 · Guided Example Lab</h3>
        <p class="jp">解説を開く前に、各文について「骨格」「意味」「この形を選ぶ理由」「別の形にしたら何が変わるか」を考えてください。</p>
        <p class="tc">打開解說前，先分析每句的「結構」「意義」「為何選此形式」「改成另一形式會如何改變」。</p>
        ${renderExamples(u.examples)}
        <div class="practice-box jp">例文を3回ずつ音読：①ゆっくり構造を意識 ②自然な速度 ③文を見ずに再現。</div>
        <div class="practice-box tc">每個例句朗讀3次：①慢速注意結構 ②自然速度 ③不看句子重現。</div>

        <h3>4 · Error Clinic & Contrast</h3>
        ${renderContrasts(u.contrasts)}
        <div class="practice-box jp">誤文を正すだけでなく、正しい文と誤文の「意味・構造の差」を1行で説明してください。</div>
        <div class="practice-box tc">不只改錯，還要用一句話說明正確句與錯句在「意義/結構」上的差異。</div>

        <h3>5 · Controlled Practice</h3>
        <ol class="jp"><li>Rulesから2つ選び、それぞれ例文を2文ずつ作る。</li><li>上の正しい例文を、主語・時制・目的語などを変えて3パターンに展開する。</li><li>典型ミスと同じ種類の「自作誤文」を1つ作り、自分で訂正する。</li><li>この文法を使うべき場面／使わない方がよい場面を1つずつ説明する。</li></ol>
        <ol class="tc"><li>從 Rules 選2項，各造2句。</li><li>把上方正確例句改主詞、時態、受詞等，擴展成3種。</li><li>自己製作1個同類錯句，再自行修正。</li><li>各說明1個適合使用／不適合使用此文法的情境。</li></ol>

        <h3>6 · Active Drill & Free Production</h3>
        <div class="practice-box jp">${esc(u.drillJP || '')}</div><div class="practice-box tc">${esc(u.drillTC || '')}</div>
        <div class="practice-box jp"><strong>追加Output：</strong>自分の生活・大学・仕事・技術・趣味など、実際の内容で最低3文作る。最後に、その3文を見ずに口頭で言う。</div>
        <div class="practice-box tc"><strong>追加Output：</strong>用自己的生活、學校、工作、技術或興趣至少造3句，最後不看文字口頭說出。</div>

        <div class="lesson-actions"><button class="complete-btn ${done.has(unitKey) ? 'done' : ''}" data-unit-complete="${esc(unitKey)}" type="button">${done.has(unitKey) ? '✓ Sub-lesson completed' : 'Mark sub-lesson complete'}</button><a class="secondary" href="#top">↑ Chapter top</a></div>
      </article>`;
    }).join('')}

    <section class="chapter lesson-section">
      <div class="formula-row"><span class="badge">12–15 min</span><span class="badge">Closed book</span><span class="badge">${finalTasks.length} tasks</span></div>
      <h2>Final Mastery Test</h2>
      <p class="jp">ここでは講義を見ずに解いてください。「正解」より説明できることを重視します。答えは各問題の下で確認できます。</p>
      <p class="tc">此處請不看講義作答。比起只答對，更重視能否說明原因。每題下方可查看答案指引。</p>
      ${renderFinalTasks(finalTasks)}
    </section>

    <section class="chapter lesson-section">
      <div class="formula-row"><span class="badge">10–15 min</span><span class="badge">Production project</span></div>
      <h2>Chapter Output Project</h2>
      <div class="practice-box jp">${esc(project.jp)}</div><div class="practice-box tc">${esc(project.tc)}</div>
      <textarea data-study-note="${esc(chapter.id)}:project" placeholder="ここに下書き・自己採点を書く / 在此寫草稿與自我評分">${esc(notes[`${chapter.id}:project`] || '')}</textarea>
    </section>

    <section class="chapter lesson-section">
      <h2>Mastery Standard & Spaced Review</h2>
      <ul class="jp"><li><strong>Today:</strong> 全Sub-lessonとFinal Testを行う。</li><li><strong>Tomorrow:</strong> Rulesを見ずに章の内容を5分で説明し、誤文訂正だけ再実施。</li><li><strong>+3 days:</strong> Final Testから5問を再挑戦し、自分の例文を5文作る。</li><li><strong>+7 days:</strong> Chapter Output Projectを別テーマで再作成する。</li><li><strong>Mastered:</strong> 80%以上正しく判断でき、理由を説明し、会話/Writingで自然に使える。</li></ul>
      <ul class="tc"><li><strong>今天：</strong> 完成所有 Sub-lesson 與 Final Test。</li><li><strong>明天：</strong> 不看 Rules 用5分鐘解釋全章，再做改錯。</li><li><strong>+3天：</strong> Final Test 隨選5題重做，另造5句。</li><li><strong>+7天：</strong> 換主題重做 Chapter Output Project。</li><li><strong>Mastered：</strong> 80%以上能正確判斷、說明理由，並能在口說/寫作自然使用。</li></ul>
    </section>

    <div class="lesson-actions">${prev ? `<a class="secondary" href="?id=${encodeURIComponent(prev.id)}">← ${esc(prev.title)}</a>` : ''}<a class="secondary" href="/learn_english/grammar/">Grammar Library</a>${next ? `<a class="secondary" href="?id=${encodeURIComponent(next.id)}">${esc(next.title)} →</a>` : ''}</div>`;

  document.addEventListener('click', e => {
    const speakBtn = e.target.closest('[data-speak]');
    if (speakBtn && 'speechSynthesis' in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(speakBtn.dataset.speak);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }

    const complete = e.target.closest('[data-unit-complete]');
    if (complete) {
      const key = complete.dataset.unitComplete;
      if (done.has(key)) done.delete(key); else done.add(key);
      localStorage.setItem(progressKey, JSON.stringify([...done]));
      complete.classList.toggle('done', done.has(key));
      complete.textContent = done.has(key) ? '✓ Sub-lesson completed' : 'Mark sub-lesson complete';
    }
  });

  document.addEventListener('input', e => {
    const field = e.target.closest('[data-study-note]');
    if (!field) return;
    notes[field.dataset.studyNote] = field.value;
    localStorage.setItem(notesKey, JSON.stringify(notes));
  });
})();