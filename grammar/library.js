(() => {
  const root = document.getElementById('grammarLibrary');
  const search = document.getElementById('grammarSearch');
  const level = document.getElementById('grammarLevel');
  const count = document.getElementById('grammarCount');
  const chapters = window.grammarChapters || [];
  const teacherNotes = window.grammarTeacherNotes || {};
  const session = window.GrammarSession;
  if (!root || !session) return;

  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  const unitCount = chapters.reduce((n, c) => n + (c.units || []).length, 0);
  const extraExampleCount = Object.values(teacherNotes).reduce((n, t) => n + (t.extraExamples || []).length, 0);

  function matchesLevel(ch, lv) {
    if (lv === 'all') return true;
    if ((ch.level || '').includes(lv)) return true;
    return (ch.units || []).some(u => (u.level || '').includes(lv));
  }

  function render() {
    const q = (search?.value || '').trim().toLowerCase();
    const lv = level?.value || 'all';
    const items = chapters.filter(ch => {
      const combined = { ...ch, teacherGuide: teacherNotes[ch.id] || null };
      const text = JSON.stringify(combined).toLowerCase();
      return (!q || text.includes(q)) && matchesLevel(ch, lv);
    });

    if (count) count.textContent = `${items.length} / ${chapters.length} chapters · ${unitCount} sub-lessons · ${extraExampleCount}+ teacher examples · every chapter 75+ min`;

    root.innerHTML = items.map(ch => {
      const units = ch.units || [];
      const teacher = teacherNotes[ch.id] || null;
      const minutes = session.estimateMinutes(ch);
      const activities = session.activityCount(ch);
      const unitPreview = units.slice(0, 5).map(u => `<li>${esc(u.title)} <span class="badge">${esc(u.level || '')}</span></li>`).join('');
      return `<a class="lesson-link" href="/learn_english/grammar/lesson.html?id=${encodeURIComponent(ch.id)}">
        <div class="meta">
          <span class="badge">${esc(ch.level)}</span>
          <span class="badge">${esc(ch.domain || 'Grammar')}</span>
          <span class="badge">${units.length} sub-lessons</span>
          <span class="badge">${minutes}+ min</span>
          <span class="badge">${activities}+ activities</span>
          ${teacher ? `<span class="badge">Teacher Guide + ${(teacher.extraExamples || []).length} extra examples</span>` : '<span class="badge">Deep foundation chapter</span>'}
        </div>
        <h3>${esc(ch.title)}</h3><p class="tc">${esc(ch.titleTc || '')}</p>
        <p>${esc(ch.overviewJP || '')}</p>
        ${teacher?.childJP ? `<div class="practice-box"><strong>まずこう考える：</strong> ${esc(teacher.childJP)}</div>` : ''}
        <ul>${unitPreview}${units.length > 5 ? `<li>＋ ${units.length - 5} more...</li>` : ''}</ul>
        <div class="practice-box"><strong>Full class:</strong> Diagnostic → Professional Teacher Guide → example bank → guided sub-lessons → error clinic → production → final mastery test → 120–180 word output project</div>
      </a>`;
    }).join('') || '<div class="chapter"><h3>該当する章がありません。</h3><p>検索語またはLevel filterを変更してください。</p></div>';
  }

  search?.addEventListener('input', render);
  level?.addEventListener('change', render);
  render();
})();