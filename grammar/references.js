(() => {
  const root = document.getElementById('lessonRoot');
  if (!root) return;
  const sources = [
    ['Cambridge English Grammar Today — Complements', 'https://dictionary.cambridge.org/grammar/british-grammar/complements', 'Subject / object complements, complements vs adjuncts'],
    ['Cambridge English Grammar Today — Subject complements', 'https://dictionary.cambridge.org/grammar/british-grammar/subject-', 'Linking verbs and the difference between an object and a subject complement'],
    ['Cambridge English Grammar Today — Verb patterns', 'https://dictionary.cambridge.org/grammar/british-grammar/verb-patterns%5D', 'What can follow a verb: objects, prepositions, infinitives, -ing forms and clauses'],
    ['Cambridge English Grammar Today — Verb patterns with/without objects', 'https://dictionary.cambridge.org/grammar/british-grammar/verb-patterns-with-and-without-', 'Transitive/intransitive use, direct/indirect objects and object + place patterns'],
    ['Cambridge English Grammar Today — Clauses and sentences', 'https://dictionary.cambridge.org/grammar/british-grammar/clauses-and-sentences', 'Clause and sentence structure'],
    ['Cambridge English Grammar Today — Determiners', 'https://dictionary.cambridge.org/grammar/british-grammar/determiners_2', 'Articles, demonstratives, possessives and quantifiers'],
    ['British Council LearnEnglish — A1–A2 Grammar', 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2', 'Foundation grammar with test–teach–test practice'],
    ['British Council LearnEnglish — B1–B2 Grammar', 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2', 'Intermediate and upper-intermediate grammar'],
    ['British Council LearnEnglish — C1 Grammar', 'https://learnenglish.britishcouncil.org/free-resources/grammar/c1', 'Advanced passives, ellipsis, inversion, reporting patterns, participle clauses and more']
  ];

  const section = document.createElement('section');
  section.className = 'chapter lesson-section';
  section.innerHTML = `
    <div class="formula-row"><span class="badge">Reference standard</span><span class="badge">Primary teaching sources</span></div>
    <h2>Teacher References — 説明を検証するための資料</h2>
    <p class="jp">この教材は下記を丸写ししているのではなく、文法の分類・用法・例外を確認するための基準資料として参照しています。説明が気になったときは、一次的な英語教育資料へ戻って確認できます。</p>
    <p class="tc">本教材不是複製下列內容，而是把它們作為核對文法分類、用法與例外的教師參考。若對某項解釋有疑問，可回到這些權威資料確認。</p>
    <ul>${sources.map(([title, url, note]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer"><strong>${title}</strong></a><br><span>${note}</span></li>`).join('')}</ul>`;
  root.appendChild(section);
})();