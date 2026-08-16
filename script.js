const STORAGE = {
  theme: 'englishStudyThemeV2',
  lang: 'englishStudyLangV2',
  progress: 'englishStudyProgressV2',
  days: 'englishStudyDaysV2',
  bestQuiz: 'englishStudyBestQuizV2',
  notes: 'englishStudyMistakeNotesV2',
};

const themeToggle = document.getElementById('themeToggle');
const langButtons = Array.from(document.querySelectorAll('.lang-button'));
const progressBoxes = Array.from(document.querySelectorAll('[data-progress]'));
const progressPercent = document.getElementById('progressPercent');
const progressBar = document.getElementById('progressBar');
const completedCount = document.getElementById('completedCount');
const studyDayCount = document.getElementById('studyDayCount');
const bestQuizScore = document.getElementById('bestQuizScore');
const markToday = document.getElementById('markToday');
const todayStatus = document.getElementById('todayStatus');
const mistakeNotebook = document.getElementById('mistakeNotebook');
const noteSaved = document.getElementById('noteSaved');

function readJSON(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function normalize(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/\s+/g, ' ');
}

function setTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  if (themeToggle) themeToggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
  localStorage.setItem(STORAGE.theme, theme);
}

setTheme(localStorage.getItem(STORAGE.theme) || 'light');

themeToggle?.addEventListener('click', () => {
  setTheme(document.body.classList.contains('dark') ? 'light' : 'dark');
});

function setLanguage(mode) {
  document.body.classList.remove('lang-jp', 'lang-tc');
  if (mode === 'jp') document.body.classList.add('lang-jp');
  if (mode === 'tc') document.body.classList.add('lang-tc');
  langButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === mode);
  });
  localStorage.setItem(STORAGE.lang, mode);
}

setLanguage(localStorage.getItem(STORAGE.lang) || 'both');

langButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

function getProgress() {
  return readJSON(STORAGE.progress, {});
}

function updateProgressUI() {
  const saved = getProgress();
  let done = 0;

  progressBoxes.forEach((box) => {
    box.checked = Boolean(saved[box.dataset.progress]);
    if (box.checked) done += 1;
  });

  const total = progressBoxes.length || 1;
  const percent = Math.round((done / total) * 100);
  if (progressPercent) progressPercent.textContent = percent;
  if (progressBar) progressBar.style.width = `${percent}%`;
  if (completedCount) completedCount.textContent = done;
}

progressBoxes.forEach((box) => {
  box.addEventListener('change', () => {
    const saved = getProgress();
    saved[box.dataset.progress] = box.checked;
    localStorage.setItem(STORAGE.progress, JSON.stringify(saved));
    updateProgressUI();
  });
});

updateProgressUI();

function localDateKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function updateStudyDays() {
  const days = readJSON(STORAGE.days, []);
  if (studyDayCount) studyDayCount.textContent = days.length;
  const today = localDateKey();
  const completed = days.includes(today);

  if (markToday) {
    markToday.disabled = completed;
    markToday.textContent = completed ? '今日は記録済み ✓' : '今日の学習を記録';
  }
  if (todayStatus) {
    todayStatus.textContent = completed
      ? '今日の学習記録は保存されています。'
      : 'ブラウザ内に進捗を保存します。';
  }
}

markToday?.addEventListener('click', () => {
  const days = readJSON(STORAGE.days, []);
  const today = localDateKey();
  if (!days.includes(today)) {
    days.push(today);
    localStorage.setItem(STORAGE.days, JSON.stringify(days));
  }
  updateStudyDays();
});

updateStudyDays();

const quizBank = [
  {
    q: 'Choose the correct sentence.',
    options: ['He study English every day.', 'He studies English every day.', 'He studying English every day.', 'He is study English every day.'],
    answer: 1,
    jp: '主語が he、現在形なので一般動詞 study は三単現の studies になります。',
    tc: '主詞是 he，現在式的一般動詞 study 要變成第三人稱單數 studies。',
  },
  {
    q: 'Make a question: “She likes coffee.”',
    options: ['Does she likes coffee?', 'Is she like coffee?', 'Does she like coffee?', 'Do she like coffee?'],
    answer: 2,
    jp: '三人称単数なので Does。Does があるため本動詞は原形 like に戻ります。',
    tc: '第三人稱單數用 Does；有 Does 之後主要動詞回到原形 like。',
  },
  {
    q: 'Which sentence means「私は今、英語を勉強しています」?',
    options: ['I study English now.', 'I am studying English now.', 'I have studied English now.', 'I studied English now.'],
    answer: 1,
    jp: '「今まさに進行中」は be + V-ing の現在進行形です。',
    tc: '「現在正在做」使用 be + V-ing 的現在進行式。',
  },
  {
    q: 'Choose the correct past tense.',
    options: ['I go to Tokyo yesterday.', 'I gone to Tokyo yesterday.', 'I went to Tokyo yesterday.', 'I going to Tokyo yesterday.'],
    answer: 2,
    jp: 'yesterday は過去の明確な時点なので go の過去形 went を使います。',
    tc: 'yesterday 表示明確的過去時間，所以 go 要用過去式 went。',
  },
  {
    q: 'Complete: “I ___ this movie before.”',
    options: ['see', 'saw', 'have seen', 'am seeing'],
    answer: 2,
    jp: 'before と「経験」を表すので現在完了 have + p.p. が自然です。',
    tc: '表示「以前有過這個經驗」，自然使用現在完成式 have + 過去分詞。',
  },
  {
    q: 'What comes after a modal verb?',
    options: ['past tense', 'base form', '-ing form', 'third-person -s'],
    answer: 1,
    jp: 'can / should / must など助動詞の後は動詞の原形です。',
    tc: 'can / should / must 等助動詞後面接動詞原形。',
  },
  {
    q: 'Choose the passive sentence.',
    options: ['Students built the robot.', 'The robot built students.', 'The robot was built by students.', 'The robot was building students.'],
    answer: 2,
    jp: '受動態は be + 過去分詞。was built がその形です。',
    tc: '被動態是 be + 過去分詞，was built 就是這個形式。',
  },
  {
    q: 'Choose the correct comparative sentence.',
    options: ['This method is more fast.', 'This method is faster.', 'This method is fastest than that one.', 'This method more faster.'],
    answer: 1,
    jp: 'fast の比較級は faster。more fast とは通常言いません。',
    tc: 'fast 的比較級是 faster，一般不說 more fast。',
  },
  {
    q: 'Complete: “I enjoy ___ new things.”',
    options: ['learn', 'to learned', 'learning', 'learned'],
    answer: 2,
    jp: 'enjoy の後は動名詞 -ing を取ります。',
    tc: 'enjoy 後面接動名詞 -ing。',
  },
  {
    q: 'Choose the natural sentence.',
    options: ['I want learning English.', 'I want to learn English.', 'I want learn English.', 'I want learned English.'],
    answer: 1,
    jp: 'want の後は通常 to不定詞: want to + 動詞原形。',
    tc: 'want 後面通常接 to 不定詞：want to + 動詞原形。',
  },
  {
    q: 'Which sentence contains a relative clause?',
    options: ['I study every day.', 'I think that it is useful.', 'The book that I bought is useful.', 'If it rains, I will stay home.'],
    answer: 2,
    jp: 'that I bought が直前の名詞 the book を説明する関係詞節です。',
    tc: 'that I bought 用來修飾前面的 the book，是關係子句。',
  },
  {
    q: 'Choose the correct hypothetical sentence.',
    options: ['If I have more time, I would study more.', 'If I had more time, I would study more.', 'If I had more time, I will study more.', 'If I would have time, I studied more.'],
    answer: 1,
    jp: '現在の事実と異なる仮定は If + 過去形, would + 原形 が基本です。',
    tc: '與現在事實相反的假設，基本形式是 If + 過去式, would + 原形。',
  },
  {
    q: 'Complete: “She ___ finished the task.”',
    options: ['have', 'has', 'is', 'does'],
    answer: 1,
    jp: '現在完了は have/has + 過去分詞。主語 she なので has。',
    tc: '現在完成式是 have/has + 過去分詞；主詞 she 所以用 has。',
  },
  {
    q: 'Choose the correct negative sentence.',
    options: ['He not works here.', 'He does not works here.', 'He does not work here.', 'He is not work here.'],
    answer: 2,
    jp: '一般動詞の否定は does not + 原形。work に -s は付けません。',
    tc: '一般動詞否定句是 does not + 原形，所以 work 不加 -s。',
  },
  {
    q: 'Which sentence expresses an action continuing until now?',
    options: ['I studied for three hours.', 'I have been studying for three hours.', 'I will study for three hours.', 'I am study for three hours.'],
    answer: 1,
    jp: '過去から今まで継続中の動作は現在完了進行形が適しています。',
    tc: '從過去持續到現在的動作，適合使用現在完成進行式。',
  },
  {
    q: 'Choose the best polite request.',
    options: ['Say it again.', 'You say again?', 'Could you say that again?', 'Do say again you?'],
    answer: 2,
    jp: 'Could you ...? は丁寧な依頼でよく使う形です。',
    tc: 'Could you ...? 是常用的禮貌請求句型。',
  },
];

const quizContainer = document.getElementById('quizContainer');
const quizProgressText = document.getElementById('quizProgressText');
const quizScore = document.getElementById('quizScore');
const quizMeterBar = document.getElementById('quizMeterBar');
const nextQuestion = document.getElementById('nextQuestion');
const restartQuiz = document.getElementById('restartQuiz');

let quizSet = [];
let quizIndex = 0;
let score = 0;
let answered = false;

function shuffled(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function startQuiz() {
  quizSet = shuffled(quizBank).slice(0, 10);
  quizIndex = 0;
  score = 0;
  answered = false;
  renderQuestion();
}

function renderQuestion() {
  if (!quizContainer) return;

  if (quizIndex >= quizSet.length) {
    const best = Math.max(Number(localStorage.getItem(STORAGE.bestQuiz) || 0), score);
    localStorage.setItem(STORAGE.bestQuiz, String(best));
    updateBestQuiz();

    quizProgressText.textContent = 'Finished';
    quizMeterBar.style.width = '100%';
    quizContainer.innerHTML = `
      <div class="quiz-result">
        <p class="eyebrow">Result</p>
        <h3>${score} / ${quizSet.length}</h3>
        <p class="jp">${score >= 8 ? 'よくできました。間違えた型だけ間違いノートへ残して、明日もう一度解いてください。' : '点数より、間違えた理由を3つ説明できる状態にすることを優先してください。'}</p>
        <p class="tc">${score >= 8 ? '做得很好。把錯的句型記到錯題筆記，明天再做一次。' : '比起分數，先做到能說明至少三個錯誤原因。'}</p>
      </div>`;
    nextQuestion.disabled = true;
    quizScore.textContent = score;
    return;
  }

  const item = quizSet[quizIndex];
  answered = false;
  nextQuestion.disabled = true;
  quizProgressText.textContent = `Question ${quizIndex + 1} / ${quizSet.length}`;
  quizMeterBar.style.width = `${((quizIndex + 1) / quizSet.length) * 100}%`;
  quizScore.textContent = score;

  quizContainer.innerHTML = `
    <div class="quiz-question">${item.q}</div>
    <div class="quiz-options">
      ${item.options.map((option, index) => `<button class="quiz-option" type="button" data-option="${index}">${option}</button>`).join('')}
    </div>
    <div id="quizExplanation" class="quiz-explanation" hidden></div>
  `;

  quizContainer.querySelectorAll('.quiz-option').forEach((button) => {
    button.addEventListener('click', () => answerQuiz(Number(button.dataset.option)));
  });
}

function answerQuiz(choice) {
  if (answered) return;
  answered = true;

  const item = quizSet[quizIndex];
  const buttons = Array.from(quizContainer.querySelectorAll('.quiz-option'));
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add('correct');
    if (index === choice && choice !== item.answer) button.classList.add('wrong');
  });

  if (choice === item.answer) score += 1;
  quizScore.textContent = score;

  const explanation = document.getElementById('quizExplanation');
  explanation.hidden = false;
  explanation.innerHTML = `<p class="jp"><strong>JP:</strong> ${item.jp}</p><p class="tc"><strong>繁中:</strong> ${item.tc}</p>`;
  nextQuestion.disabled = false;
}

nextQuestion?.addEventListener('click', () => {
  if (!answered) return;
  quizIndex += 1;
  renderQuestion();
});

restartQuiz?.addEventListener('click', startQuiz);

function updateBestQuiz() {
  if (bestQuizScore) bestQuizScore.textContent = localStorage.getItem(STORAGE.bestQuiz) || '0';
}

updateBestQuiz();
startQuiz();

document.querySelectorAll('.check-transform').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.transform-card');
    const input = card.querySelector('input');
    const feedback = card.querySelector('.feedback');
    const answers = JSON.parse(card.dataset.answers);
    const value = normalize(input.value);
    const ok = answers.some((answer) => normalize(answer) === value);

    feedback.className = `feedback ${ok ? 'ok' : 'ng'}`;
    feedback.textContent = ok
      ? '✓ Correct!'
      : `✗ Try again. Answer: ${answers[0].replace(/&#39;/g, "'")}`;
  });
});

function speak(text, rate = 1) {
  if (!('speechSynthesis' in window)) {
    window.alert('Speech synthesis is not supported in this browser.');
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = Number(rate) || 1;

  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find((voice) => /^en(-|_)/i.test(voice.lang));
  if (englishVoice) utterance.voice = englishVoice;

  window.speechSynthesis.speak(utterance);
}

document.addEventListener('click', (event) => {
  const speakButton = event.target.closest('.speak-text');
  if (speakButton) {
    speak(speakButton.dataset.text, speakButton.dataset.rate || 1);
  }

  const dictationButton = event.target.closest('.speak-dictation');
  if (dictationButton) {
    const card = dictationButton.closest('.dictation-card');
    speak(card.dataset.sentence, dictationButton.dataset.rate || 1);
  }
});

document.querySelectorAll('.check-dictation').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.dictation-card');
    const input = card.querySelector('.dictation-input');
    const feedback = card.querySelector('.dictation-feedback');
    const answer = card.querySelector('.dictation-answer');
    const target = card.dataset.sentence;
    const ok = normalize(input.value.replace(/[?.!,]/g, '')) === normalize(target.replace(/[?.!,]/g, ''));

    feedback.className = `dictation-feedback ${ok ? 'ok' : 'ng'}`;
    feedback.textContent = ok ? '✓ Correct!' : 'もう一度聞いてから原文を確認してください。 / 再聽一次後再確認原文。';
    answer.hidden = false;
    answer.textContent = target;
  });
});

const searchInput = document.getElementById('exampleSearch');
const examples = Array.from(document.querySelectorAll('#exampleList article'));

searchInput?.addEventListener('input', (event) => {
  const query = normalize(event.target.value);
  examples.forEach((example) => {
    const text = normalize(`${example.textContent} ${example.dataset.keywords || ''}`);
    example.style.display = text.includes(query) ? 'grid' : 'none';
  });
});

if (mistakeNotebook) {
  mistakeNotebook.value = localStorage.getItem(STORAGE.notes) || '';
  let saveTimer;

  mistakeNotebook.addEventListener('input', () => {
    clearTimeout(saveTimer);
    if (noteSaved) noteSaved.textContent = 'Saving...';

    saveTimer = setTimeout(() => {
      localStorage.setItem(STORAGE.notes, mistakeNotebook.value);
      if (noteSaved) noteSaved.textContent = 'Auto-saved locally.';
    }, 250);
  });
}

document.getElementById('resetProgress')?.addEventListener('click', () => {
  const confirmed = window.confirm('学習進捗・学習日・ベストスコアをリセットしますか？ 間違いノートは残します。');
  if (!confirmed) return;

  localStorage.removeItem(STORAGE.progress);
  localStorage.removeItem(STORAGE.days);
  localStorage.removeItem(STORAGE.bestQuiz);
  updateProgressUI();
  updateStudyDays();
  updateBestQuiz();
  startQuiz();
});
