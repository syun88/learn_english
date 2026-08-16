const STORAGE = {
  theme: 'englishMasteryThemeV4',
  language: 'englishMasteryLanguageV4',
  progress: 'englishMasteryProgressV4',
  studyDays: 'englishMasteryStudyDaysV4',
  bestQuiz: 'englishMasteryBestQuizV4',
  notebook: 'englishMasteryNotebookV4',
};

const courseUnits = [
  ['Unit 1', 'Sentence Architecture', '語順と5文型', ['S / V / O / C を見分ける', 'SV・SVC・SVO・SVOO・SVOC を使う', '自動詞・他動詞と verb valency を理解する']],
  ['Unit 2', 'be / do / have', '英語の中心動詞', ['be動詞と一般動詞を区別する', 'do/does/did で否定・疑問を作る', 'have と完了形の have を区別する']],
  ['Unit 3', 'Verb Forms', '動詞変化', ['原形・三単現・過去形を使う', '過去分詞・ing形を使う', '主要な不規則動詞を自動化する']],
  ['Unit 4', 'Questions & Negation', '肯定・否定・疑問', ['be動詞文を変形する', '一般動詞文を変形する', 'WH疑問・間接疑問を作る']],
  ['Unit 5', 'Tense & Aspect', '時間 × 見え方', ['現在・過去・未来表現を意味から選ぶ', '進行形と状態動詞を理解する', '完了形・完了進行形を使い分ける']],
  ['Unit 6', 'Expand', '文を伸ばす', ['助動詞と心理的距離', 'to不定詞・動名詞・分詞', '前置詞・接続詞・collocation']],
  ['Unit 7', 'Clauses', '複文を作る', ['that節・疑問詞節', '制限/非制限関係詞', '受動態・比較・複雑修飾']],
  ['Unit 8', 'Real English', '実際に使う', ['条件文・仮定法', '60秒で自分の考えを説明する', '100〜150語の段落を書く']],
  ['Unit 9', 'Precision Grammar', 'B2 → C1 の精密文法', ['冠詞・可算性・前置詞を理由付きで選ぶ', '時制・相・法をニュアンスで選ぶ', '倒装・強調・省略を読み書きする']],
  ['Unit 10', 'Vocabulary System', '語彙を使える塊にする', ['word family / collocation', 'phrasal verbs / lexical chunks', 'formal / neutral / casual を言い換える']],
  ['Unit 11', 'Sound & Fluency', '発音・Listening・Speaking', ['stress / schwa / weak forms', 'linking / reduction / rhythm / intonation', '2分間、止まらず説明する']],
  ['Unit 12', 'C2 Direction + TOEIC 990', '精度・速度・自然さを統合', ['長文の論理・態度・推論を取る', 'TOEIC形式を時間内に高精度で処理する', '200語以上の文章＋即興会話を行う']],
];

const quizBank = [
  {band:'foundation', q:'She ___ to the lab every morning.', a:['go','goes','going','gone'], c:1, jp:'現在形で主語が she なので三単現の goes。', tc:'現在式主詞是 she，因此用第三人稱單數 goes。'},
  {band:'foundation', q:'___ you understand this sentence?', a:['Are','Do','Does','Is'], c:1, jp:'一般動詞 understand の疑問文なので Do。', tc:'understand 是一般動詞，疑問句用 Do。'},
  {band:'foundation', q:'I ___ studying when he called me.', a:['am','was','have','will'], c:1, jp:'過去のある時点で進行中だったので was studying。', tc:'過去某時間正在進行，因此用 was studying。'},
  {band:'foundation', q:'He has ___ the report already.', a:['finish','finished','finishing','finishes'], c:1, jp:'have/has + 過去分詞で現在完了。', tc:'have/has + 過去分詞形成現在完成式。'},
  {band:'foundation', q:'This book ___ by my professor.', a:['wrote','was written','is writing','has wrote'], c:1, jp:'「書かれた」なので受動態 be + p.p.。', tc:'表示「被寫」，使用 be + 過去分詞。'},
  {band:'foundation', q:'If I have time tonight, I ___ you.', a:['call','called','will call','would called'], c:2, jp:'現実的な未来条件なので If + 現在形, will + 原形。', tc:'現實可能的未來條件：If + 現在式, will + 原形。'},
  {band:'foundation', q:'I enjoy ___ new technologies.', a:['learn','to learned','learning','learned'], c:2, jp:'enjoy の後ろは通常動名詞 -ing。', tc:'enjoy 後通常接動名詞 -ing。'},
  {band:'foundation', q:'The engineer ___ designed this robot works here.', a:['which','who','where','what'], c:1, jp:'人を先行詞とする主格関係代名詞 who。', tc:'先行詞是人且在子句中作主詞，用 who。'},
  {band:'foundation', q:'I need ___ information about the schedule.', a:['an','a','some','many'], c:2, jp:'information は通常不可算名詞なので some information。', tc:'information 通常不可數，因此用 some。'},
  {band:'foundation', q:'Could you ___ that again?', a:['said','saying','say','says'], c:2, jp:'助動詞 could の後ろは動詞原形。', tc:'情態助動詞 could 後接原形。'},
  {band:'advanced', q:'Research ___ essential for making an informed decision.', a:['are','is','be','were'], c:1, jp:'research はこの意味では通常不可算名詞なので単数扱い。', tc:'research 在此通常不可數，因此視為單數。'},
  {band:'advanced', q:'Rarely ___ such a dramatic improvement.', a:['we see','do we see','we do see','see we'], c:1, jp:'Rarely を文頭に置くと否定倒装が起きる。', tc:'Rarely 置於句首會觸發否定倒裝。'},
  {band:'advanced', q:'Do you know where the meeting ___?', a:['is','is it','does it be','it is?'], c:0, jp:'間接疑問では where + S + V の平叙文語順。', tc:'間接問句使用 where + S + V 的陳述語序。'},
  {band:'advanced', q:'I ___ on this problem all morning, and I still have not solved it.', a:['worked','have worked','have been working','am worked'], c:2, jp:'朝から今まで続く活動そのものを強調するので現在完了進行形。', tc:'強調從早上持續至今的活動，用現在完成進行式。'},
  {band:'advanced', q:'The number of applicants ___ increased significantly.', a:['have','has','are','were'], c:1, jp:'主語の中心は singular の the number。', tc:'主詞核心是單數 the number。'},
  {band:'advanced', q:'He stopped ___ after the doctor warned him.', a:['to smoke','smoking','smoke','smoked'], c:1, jp:'stop doing = その行為をやめる。stop to do は「〜するために立ち止まる」。', tc:'stop doing 表停止該行為；stop to do 表停下來去做另一件事。'},
  {band:'advanced', q:'He is not answering. He ___ forgotten the appointment.', a:['must have','must has','should','can to have'], c:0, jp:'過去についての強い推量は must have + p.p.。', tc:'對過去的強烈推測使用 must have + 過去分詞。'},
  {band:'advanced', q:'The system is reliable, easy to maintain, and ___.', a:['it saves energy','energy-efficient','saving energy efficiently it is','energy efficiency'], c:1, jp:'並列要素を形容詞句で揃える parallelism。', tc:'並列項目保持相同文法形式，這裡都用形容詞。'},
  {band:'advanced', q:'If I ___ you, I would ask for clarification.', a:['am','was','were','have been'], c:2, jp:'非現実仮定の標準形 If I were you。', tc:'非現實假設的標準形式是 If I were you。'},
  {band:'advanced', q:'The findings ___ that the new method may be more robust.', a:['prove absolutely','suggest','are proving always','must prove'], c:1, jp:'研究文体では証拠の強さに合わせて suggest のように hedging する。', tc:'研究寫作需讓斷言強度符合證據，suggest 較恰當。'},
  {band:'toeic', q:'The new software has significantly improved employee ___.', a:['productive','productivity','productively','produce'], c:1, jp:'improved の目的語には名詞 productivity が必要。TOEIC Part 5の品詞問題。', tc:'improved 後需要名詞 productivity，屬 Part 5 詞性判斷。'},
  {band:'toeic', q:'Ms. Lee is responsible ___ coordinating the annual conference.', a:['at','to','for','with'], c:2, jp:'be responsible for + 名詞/-ing は重要コロケーション。', tc:'be responsible for + 名詞/-ing 是重要搭配。'},
  {band:'toeic', q:'___ the weather was poor, the outdoor event continued as scheduled.', a:['Despite','Although','Because of','In spite'], c:1, jp:'後ろが完全な節なので although。Despite は名詞句を取る。', tc:'後面是完整子句，因此用 although；Despite 後接名詞片語。'},
  {band:'toeic', q:'Applications ___ after the deadline will not be considered.', a:['receive','received','receiving','are receive'], c:1, jp:'applications を後ろから修飾する reduced passive relative: applications (that are) received。', tc:'過去分詞縮減被動關係子句：applications (that are) received。'},
  {band:'toeic', q:'By the end of next month, the company ___ the installation.', a:['completes','completed','will have completed','has completing'], c:2, jp:'未来の基準時までに完了するので未来完了。', tc:'在未來基準時間前完成，用未來完成式。'},
  {band:'toeic', q:'We are confident that the project will be completed ___ schedule.', a:['at','on','in','for'], c:1, jp:'on schedule = 予定通り、という定型表現。', tc:'on schedule 表「按時、照計畫」。'},
  {band:'toeic', q:'Neither the manager nor the assistants ___ available this afternoon.', a:['is','are','be','has'], c:1, jp:'neither A nor B は近い主語 assistants に一致させるのが一般的。', tc:'neither A nor B 通常與較近的主詞 assistants 一致。'},
  {band:'toeic', q:'Please have the documents ___ before submitting them.', a:['sign','signed','signing','to sign'], c:1, jp:'have + O + p.p. = Oを〜してもらう/〜された状態にする。', tc:'have + O + 過去分詞表示讓 O 被處理。'},
  {band:'toeic', q:'The seminar was both informative ___ engaging.', a:['but','and','or','so'], c:1, jp:'both A and B の相関接続。', tc:'固定結構 both A and B。'},
  {band:'toeic', q:'The office will remain closed ___ further notice.', a:['until','during','among','through'], c:0, jp:'until further notice = 追って通知があるまで。', tc:'until further notice = 直到另行通知。'},
];

const transforms = [
  ['He studies English every day.', '否定文にする', 'He does not study English every day.'],
  ['She is busy today.', '疑問文にする', 'Is she busy today?'],
  ['They finished the test.', '疑問文にする', 'Did they finish the test?'],
  ['I am studying now.', '昨日8時の文にする', 'I was studying at 8 yesterday.'],
  ['The team built the robot.', '受動態にする', 'The robot was built by the team.'],
  ['I have time. I will help you.', 'if を使って1文にする', 'If I have time, I will help you.'],
];

const coreSentences = [
  ['I study English every day.','毎日英語を勉強します。','我每天學英文。'],
  ["I'm studying English right now.",'今、英語を勉強しています。','我現在正在學英文。'],
  ['I studied for two hours yesterday.','昨日2時間勉強しました。','我昨天學了兩個小時。'],
  ["I'll review this again tomorrow.",'明日もう一度復習します。','我明天會再複習一次。'],
  ["I've been working on this since morning.",'朝からずっとこれに取り組んでいます。','我從早上就一直在做這件事。'],
  ['Could you say that again?','もう一度言ってもらえますか？','可以再說一次嗎？'],
  ['What does this word mean?','この単語はどういう意味ですか？','這個單字是什麼意思？'],
  ["I don't understand this part.",'この部分が分かりません。','我不懂這一部分。'],
  ['Can you give me an example?','例を挙げてもらえますか？','可以給我一個例子嗎？'],
  ['I think this is a good idea.','これは良いアイデアだと思います。','我覺得這是個好主意。'],
  ['I chose it because it was simple.','簡単だったので、それを選びました。','因為它很簡單，所以我選了它。'],
  ['However, there is one problem.','ただし、問題が1つあります。','不過，有一個問題。'],
  ['This version is faster than the old one.','このバージョンは前のものより速いです。','這個版本比舊版更快。'],
  ['This system was built by our team.','このシステムは私たちのチームによって作られました。','這個系統是由我們團隊建立的。'],
  ["If I have time, I'll try it.",'時間があれば試します。','如果有時間，我會試試看。'],
  ['If I had more time, I would study more.','もっと時間があれば、もっと勉強するのに。','如果我有更多時間，我就會多學一點。'],
  ['I want to improve my English.','英語を上達させたいです。','我想提升英文能力。'],
  ['I enjoy learning new things.','新しいことを学ぶのが好きです。','我喜歡學新東西。'],
  ["This is the project that I'm working on.",'これが今取り組んでいるプロジェクトです。','這就是我正在做的專案。'],
  ['I need to finish this by Friday.','金曜日までにこれを終える必要があります。','我需要在星期五前完成這個。'],
  ['What time works best for you?','何時が一番都合いいですか？','你什麼時間最方便？'],
  ['That makes sense to me.','それは納得できます。','我覺得這樣有道理。'],
  ["I'm not completely sure yet.",'まだ完全には確信していません。','我現在還不是完全確定。'],
  ['Let me check that one more time.','もう一度確認させてください。','讓我再確認一次。'],
  ["I'm trying to figure out why this happened.",'なぜこれが起きたのか調べています。','我正在找出為什麼會發生這件事。'],
  ["It's getting better little by little.",'少しずつ良くなっています。','正在一點一點變好。'],
  ['The next step is to test it in practice.','次のステップは実際に試すことです。','下一步是在實際情況中測試它。'],
  ['What I need is more time.','私に必要なのは、もっと時間です。','我真正需要的是更多時間。'],
  ['The results suggest that the method is effective.','結果は、この手法が有効であることを示唆しています。','結果顯示這個方法可能有效。'],
  ['Would it be possible to move the meeting?','会議を変更することは可能でしょうか。','可以調整會議時間嗎？'],
];

const dictationBank = [
  'I have been studying English for three hours.',
  'Could you tell me where the station is?',
  'The results suggest that the method is effective.',
  'If I had known about the deadline, I would have applied.',
  'The documents must be submitted by Friday afternoon.',
  'Rarely do we see such a dramatic improvement.',
];

function escapeHTML(value='') {
  return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function saveJSON(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

function applyTheme() {
  const dark = localStorage.getItem(STORAGE.theme) === 'dark';
  document.body.classList.toggle('dark', dark);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = dark ? 'Light' : 'Dark';
}
function applyLanguage(lang = localStorage.getItem(STORAGE.language) || 'both') {
  document.body.classList.remove('lang-jp','lang-tc');
  if (lang === 'jp') document.body.classList.add('lang-jp');
  if (lang === 'tc') document.body.classList.add('lang-tc');
  document.querySelectorAll('.lang-button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  localStorage.setItem(STORAGE.language, lang);
}

function renderCourse() {
  const root = document.getElementById('courseGrid');
  root.innerHTML = courseUnits.map((u, i) => `
    <article class="card course-card ${i >= 8 ? 'advanced' : ''}">
      <div class="unit-line"><span>${u[0]}</span><strong>${u[1]}</strong></div>
      <h3>${u[2]}</h3>
      <div class="check-list">${u[3].map((x,j)=>`<label><input type="checkbox" data-progress="u${i+1}-${j+1}"> <span>${x}</span></label>`).join('')}</div>
    </article>`).join('');
}

function progressInputs() { return [...document.querySelectorAll('[data-progress]')]; }
function initProgress() {
  const saved = loadJSON(STORAGE.progress, {});
  progressInputs().forEach(input => {
    input.checked = !!saved[input.dataset.progress];
    input.addEventListener('change', () => {
      saved[input.dataset.progress] = input.checked;
      saveJSON(STORAGE.progress, saved);
      updateProgress();
    });
  });
  updateProgress();
}
function updateProgress() {
  const all = progressInputs();
  const done = all.filter(x => x.checked).length;
  const pct = all.length ? Math.round(done / all.length * 100) : 0;
  document.getElementById('progressPercent').textContent = pct;
  document.getElementById('completedCount').textContent = done;
  document.getElementById('progressBar').style.width = `${pct}%`;
}
function initStudyDays() {
  const days = loadJSON(STORAGE.studyDays, []);
  const today = new Date().toLocaleDateString('sv-SE');
  const count = document.getElementById('studyDayCount');
  const status = document.getElementById('todayStatus');
  const refresh = () => {
    count.textContent = days.length;
    status.textContent = days.includes(today) ? '✓ 今日の学習は記録済みです。' : 'ブラウザ内に進捗を保存します。';
  };
  document.getElementById('markToday').addEventListener('click', () => {
    if (!days.includes(today)) days.push(today);
    saveJSON(STORAGE.studyDays, days);
    refresh();
  });
  refresh();
}

function renderMasteryTracks() {
  const root = document.getElementById('masteryGrid');
  root.innerHTML = masteryTracks.map(t => `
    <article class="card mastery-card">
      <div class="domain-no">${escapeHTML(t.icon)}</div>
      <h3>${escapeHTML(t.title)}</h3>
      <p class="jp">${escapeHTML(t.jp)}</p><p class="tc">${escapeHTML(t.tc)}</p>
      <span class="target">${escapeHTML(t.target)}</span>
    </article>`).join('');
}

function levelMatches(levelText, filter) {
  if (filter === 'all') return true;
  return levelText.includes(filter);
}
function renderGrammar() {
  const root = document.getElementById('grammarLessonList');
  const q = document.getElementById('grammarSearch').value.trim().toLowerCase();
  const level = document.getElementById('grammarLevel').value;
  const rows = grammarLessons.filter(l => {
    const text = JSON.stringify(l).toLowerCase();
    return (!q || text.includes(q)) && levelMatches(l.level, level);
  });
  document.getElementById('grammarCount').textContent = `${rows.length} / ${grammarLessons.length} lessons`;
  root.innerHTML = rows.map((l, idx) => `
    <details class="lesson" ${rows.length === 1 ? 'open' : ''}>
      <summary>
        <div class="lesson-meta"><span class="level-pill">${escapeHTML(l.level)}</span><span class="pill">${escapeHTML(l.focus)}</span></div>
        <div class="lesson-title">${escapeHTML(l.title)}</div>
        <div class="tc">${escapeHTML(l.titleTc)}</div>
      </summary>
      <div class="lesson-body">
        <div class="formula-row">${l.formula.map(f=>`<code>${escapeHTML(f)}</code>`).join('')}</div>
        <div class="teacher-block">
          <strong>Teacher explanation / 講義</strong>
          <p class="jp">${escapeHTML(l.lectureJP)}</p><p class="tc">${escapeHTML(l.lectureTC)}</p>
        </div>
        <div class="lesson-columns">
          <div><h4>How to use / 使い方</h4><ul class="jp">${l.usageJP.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul><ul class="tc">${l.usageTC.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul></div>
          <div><h4>Real examples</h4><div class="example-list">${l.examples.map(x=>`<div class="example-line"><span>${escapeHTML(x)}</span><button class="speak-btn" type="button" data-speak="${escapeHTML(x)}">▶</button></div>`).join('')}</div></div>
        </div>
        <h4>Contrast & common mistakes</h4>
        <div class="contrast-list">${l.contrasts.map(c=>`<div class="contrast"><div class="wrong">× ${escapeHTML(c[0])}</div><div class="right">○ ${escapeHTML(c[1])}</div><div class="jp">${escapeHTML(c[2])}</div><div class="tc">${escapeHTML(c[3])}</div></div>`).join('')}</div>
        <div class="assignment"><strong>Output assignment</strong><div class="jp">${escapeHTML(l.taskJP)}</div><div class="tc">${escapeHTML(l.taskTC)}</div></div>
      </div>
    </details>`).join('') || '<div class="empty">該当するLessonがありません。</div>';
}

function speak(text, rate=1) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US'; u.rate = rate;
  const voices = speechSynthesis.getVoices();
  u.voice = voices.find(v => /^en(-|_)/i.test(v.lang)) || null;
  speechSynthesis.speak(u);
}

let activeQuiz = [];
function startQuiz() {
  const mode = document.getElementById('quizMode').value;
  const pool = mode === 'mixed' ? quizBank : quizBank.filter(x => x.band === mode);
  activeQuiz = [...pool].sort(()=>Math.random()-.5).slice(0, Math.min(10,pool.length));
  document.getElementById('quizResult').textContent = '';
  document.getElementById('quizQuestions').innerHTML = activeQuiz.map((item,i)=>`
    <div class="question" data-q="${i}"><p>${i+1}. ${escapeHTML(item.q)}</p>${item.a.map((a,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}"> ${escapeHTML(a)}</label>`).join('')}<div class="feedback hidden"></div></div>`).join('');
}
function gradeQuiz() {
  if (!activeQuiz.length) return;
  let score=0;
  activeQuiz.forEach((item,i)=>{
    const box = document.querySelector(`[data-q="${i}"]`);
    const selected = box.querySelector('input:checked');
    const ok = selected && Number(selected.value) === item.c;
    if (ok) score++;
    const f = box.querySelector('.feedback');
    f.className = `feedback ${ok?'good':'bad'}`;
    f.innerHTML = `<strong>${ok?'✓ Correct':'✗ Review'}</strong><div class="jp">${escapeHTML(item.jp)}</div><div class="tc">${escapeHTML(item.tc)}</div>`;
  });
  document.getElementById('quizResult').textContent = `${score} / ${activeQuiz.length}`;
  const best = Math.max(Number(localStorage.getItem(STORAGE.bestQuiz)||0), score);
  localStorage.setItem(STORAGE.bestQuiz, best);
  document.getElementById('bestQuizScore').textContent = best;
}

function renderTransforms() {
  document.getElementById('transformList').innerHTML = transforms.map((x,i)=>`
    <div class="transform-item"><strong>${escapeHTML(x[0])}</strong><div>${escapeHTML(x[1])}</div><button class="chip reveal" data-answer="${escapeHTML(x[2])}" type="button">答えを見る</button></div>`).join('');
}

function renderToeic() {
  document.getElementById('toeicPartGrid').innerHTML = toeicParts.map(x=>`
    <article class="card toeic-part"><div class="part-no">${escapeHTML(x.part)}</div><h3>${escapeHTML(x.name)}</h3><p class="jp">${escapeHTML(x.jp)}</p><p class="tc">${escapeHTML(x.tc)}</p></article>`).join('');
}
function renderC2() {
  document.getElementById('c2Grid').innerHTML = c2Habits.map(x=>`<article class="card"><h3>${escapeHTML(x[0])}</h3><p class="jp">${escapeHTML(x[1])}</p><p class="tc">${escapeHTML(x[2])}</p></article>`).join('');
}

function renderCoreSentences(filter='') {
  const q = filter.trim().toLowerCase();
  const rows = coreSentences.filter(x => x.join(' ').toLowerCase().includes(q));
  document.getElementById('sentenceBank').innerHTML = rows.map(x=>`<article class="card audio-card"><strong>${escapeHTML(x[0])}</strong><p class="jp">${escapeHTML(x[1])}</p><p class="tc">${escapeHTML(x[2])}</p><button class="chip" data-speak="${escapeHTML(x[0])}" type="button">▶ Listen</button></article>`).join('');
}

let dictationText = dictationBank[0];
function newDictation() {
  dictationText = dictationBank[Math.floor(Math.random()*dictationBank.length)];
  document.getElementById('dictationInput').value='';
  document.getElementById('dictationFeedback').textContent='';
}
function normalize(s){return s.toLowerCase().replace(/[.,?!'’]/g,'').replace(/\s+/g,' ').trim();}
function checkDictation(){
  const got = document.getElementById('dictationInput').value;
  const ok = normalize(got) === normalize(dictationText);
  document.getElementById('dictationFeedback').innerHTML = ok ? '✓ Correct!' : `Answer: <strong>${escapeHTML(dictationText)}</strong>`;
}

function initNotebook() {
  const area = document.getElementById('mistakeNotebook');
  area.value = localStorage.getItem(STORAGE.notebook) || '';
  area.addEventListener('input', ()=>localStorage.setItem(STORAGE.notebook, area.value));
}

function resetAll(){
  if (!confirm('学習進捗・学習日・ベストスコアをリセットしますか？')) return;
  [STORAGE.progress,STORAGE.studyDays,STORAGE.bestQuiz].forEach(k=>localStorage.removeItem(k));
  location.reload();
}

function bindEvents() {
  document.getElementById('themeToggle').addEventListener('click', ()=>{
    localStorage.setItem(STORAGE.theme, document.body.classList.contains('dark') ? 'light' : 'dark');
    applyTheme();
  });
  document.querySelectorAll('.lang-button').forEach(b=>b.addEventListener('click',()=>applyLanguage(b.dataset.lang)));
  document.getElementById('grammarSearch').addEventListener('input',renderGrammar);
  document.getElementById('grammarLevel').addEventListener('change',renderGrammar);
  document.getElementById('startQuiz').addEventListener('click',startQuiz);
  document.getElementById('gradeQuiz').addEventListener('click',gradeQuiz);
  document.getElementById('sentenceSearch').addEventListener('input',e=>renderCoreSentences(e.target.value));
  document.getElementById('dictationNew').addEventListener('click',newDictation);
  document.getElementById('dictationPlay').addEventListener('click',()=>speak(dictationText,1));
  document.getElementById('dictationSlow').addEventListener('click',()=>speak(dictationText,.78));
  document.getElementById('dictationCheck').addEventListener('click',checkDictation);
  document.getElementById('resetProgress').addEventListener('click',resetAll);
  document.addEventListener('click',e=>{
    const speakEl=e.target.closest('[data-speak]'); if(speakEl) speak(speakEl.dataset.speak,1);
    const reveal=e.target.closest('.reveal'); if(reveal){
      let a=reveal.parentElement.querySelector('.answer-reveal');
      if(!a){a=document.createElement('div');a.className='answer-reveal';a.textContent=reveal.dataset.answer;reveal.parentElement.appendChild(a);} else a.remove();
    }
  });
}

function boot(){
  applyTheme(); applyLanguage();
  renderCourse(); renderMasteryTracks(); renderGrammar(); renderTransforms(); renderToeic(); renderC2(); renderCoreSentences();
  initProgress(); initStudyDays(); initNotebook(); bindEvents(); newDictation(); startQuiz();
  document.getElementById('bestQuizScore').textContent = localStorage.getItem(STORAGE.bestQuiz) || '0';
}

document.addEventListener('DOMContentLoaded', boot);
