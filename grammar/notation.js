(() => {
  const id = new URLSearchParams(location.search).get('id') || '';
  const root = document.getElementById('lessonRoot');
  if (!root) return;

  const FRIENDLY_KEY = 'eml-grammar-friendly-notation-v1';
  const saved = localStorage.getItem(FRIENDLY_KEY);
  let friendly = saved === null ? true : saved === 'true';

  const roleGuide = [
    ['誰が・何が？', '文の中心になる人・もの', '主語', 'S', 'The robot moved. → 「何が？」The robot'],
    ['どうする？／どういう状態？', '動作・変化・状態を表す中心', '動詞', 'V', 'The robot moved. → 「どうした？」moved'],
    ['何を？／誰に？', '動作が向かう相手・対象', '目的語', 'O', 'I tested the model. → 「何を？」the model'],
    ['どんな状態？／何者？', '人・ものの正体や状態を説明', '補語', 'C', 'The result is good. → 「どんな状態？」good']
  ];

  const patterns = [
    {
      plain: '何が？ → どうする？',
      code: 'SV',
      example: 'The experiment failed.',
      ja: '「実験が」→「失敗した」。これだけで文が完成します。'
    },
    {
      plain: '何が？ → どういう状態・何者？',
      code: 'SVC',
      example: 'The result seems reliable.',
      ja: '「結果が」→「信頼できそうだ」。後半は結果の状態を説明します。'
    },
    {
      plain: '誰が？ → どうする？ → 何を？',
      code: 'SVO',
      example: 'We tested the model.',
      ja: '「私たちが」→「試した」→「モデルを」。'
    },
    {
      plain: '誰が？ → どうする？ → 誰に？ → 何を？',
      code: 'SVOO',
      example: 'She gave me some advice.',
      ja: '「彼女が」→「くれた」→「私に」→「助言を」。'
    },
    {
      plain: '誰が？ → どうする？ → 何を？ → どんな状態に？',
      code: 'SVOC',
      example: 'They found the interface confusing.',
      ja: '「彼らが」→「感じた」→「インターフェースを」→「分かりにくいと」。最後は対象の状態を説明します。'
    }
  ];

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
  }

  function guideHtml() {
    const roleRows = roleGuide.map(([question, meaning, term, code, example]) => `
      <div class="chapter">
        <div class="formula-row"><strong>${esc(question)}</strong><span class="grammar-code">${esc(term)} (${esc(code)})</span></div>
        <p>${esc(meaning)}</p><div class="example-line"><span>${esc(example)}</span></div>
      </div>`).join('');

    const patternRows = patterns.map(p => `
      <div class="chapter">
        <div class="formula-row"><strong>${esc(p.plain)}</strong><span class="grammar-code">学校文法: ${esc(p.code)}</span></div>
        <div class="example-line"><strong>${esc(p.example)}</strong></div><p>${esc(p.ja)}</p>
      </div>`).join('');

    return `
      <section id="friendlyNotationGuide" class="chapter lesson-section">
        <div class="formula-row"><span class="badge">Recommended for beginners</span><span class="badge">記号は後でOK</span></div>
        <h2>文法記号より先に「意味の役割」で読む</h2>
        <p class="jp">S / V / O / C を暗記してから英文を読む必要はありません。まず日本語の問いで、英語がどんな順番で情報を並べているかを理解します。専門記号は、辞書や参考書を読むための補助ラベルとして後から覚えれば十分です。</p>
        <p class="tc">不需要先背 S / V / O / C 才能讀英文。先用「誰／做什麼／對什麼／什麼狀態」理解資訊順序；文法符號只是之後閱讀字典與參考書的輔助標籤。</p>
        <div class="formula-row"><button id="notationModeToggle" class="secondary" type="button"></button></div>
        <div id="friendlyRoleGuide">${roleRows}</div>
        ${id === 'sentence-architecture' ? `<h3>5つの基本語順も、日本語の問いから理解する</h3><div id="friendlyPatternGuide">${patternRows}</div>` : ''}
        <div class="practice-box jp"><strong>勉強するときの順番：</strong>①「誰が/何が？」を探す → ②「どうする/どんな状態？」を探す → ③必要なら「何を/誰に？」を探す → ④最後にS/V/O/Cという名前を確認する。</div>
        <div class="practice-box tc"><strong>學習順序：</strong>①找「誰/什麼」→ ②找「做什麼/什麼狀態」→ ③需要時找「對誰/什麼」→ ④最後才確認 S/V/O/C 名稱。</div>
      </section>`;
  }

  function applyMode() {
    document.body.classList.toggle('friendly-grammar-notation', friendly);
    const button = document.getElementById('notationModeToggle');
    if (button) button.textContent = friendly ? '記号も表示する（現在：やさしい表記）' : 'やさしい表記を優先する';
    document.querySelectorAll('.grammar-code').forEach(el => {
      el.style.opacity = friendly ? '0.58' : '1';
      el.style.fontSize = friendly ? '0.82em' : '';
    });
  }

  function softenArchitectureLabels() {
    if (id !== 'sentence-architecture') return;
    const replacements = new Map([
      ['S / V / O / C は「役割」で見る', '英文の4つの役割 — 「誰が」「どうする」「何を」「どんな状態」'],
      ['5文型は暗記表ではなく「動詞の設計図」', '英語の基本語順 — 動詞の後ろに何が必要か'],
      ['自動詞・他動詞・両用動詞', '動詞の後ろに「何を？」が直接来るかどうか'],
      ['Phrase / Clause / Main clause — 長文の骨組み', '長い英文を「中心の文」と「追加説明」に分ける']
    ]);
    root.querySelectorAll('h2').forEach(h => {
      const text = h.textContent.trim();
      if (replacements.has(text)) h.textContent = replacements.get(text);
    });
  }

  function install() {
    const head = root.querySelector('.lesson-head');
    if (!head || document.getElementById('friendlyNotationGuide')) return;
    head.insertAdjacentHTML('afterend', guideHtml());
    softenArchitectureLabels();
    applyMode();
    document.getElementById('notationModeToggle')?.addEventListener('click', () => {
      friendly = !friendly;
      localStorage.setItem(FRIENDLY_KEY, String(friendly));
      applyMode();
    });
  }

  // lesson.js renders synchronously before this file is loaded.
  install();
})();