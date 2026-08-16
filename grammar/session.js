(() => {
  const MIN_UNIT_MINUTES = 14;
  const DIAGNOSTIC_MINUTES = 8;
  const FINAL_MINUTES = 15;

  const unitsOf = chapter => chapter?.units || [];

  function estimateMinutes(chapter) {
    const calculated = DIAGNOSTIC_MINUTES + unitsOf(chapter).length * MIN_UNIT_MINUTES + FINAL_MINUTES;
    return Math.max(65, calculated);
  }

  function activityCount(chapter) {
    const units = unitsOf(chapter);
    let total = 4; // orientation + diagnostic + final test + output project
    units.forEach(unit => {
      total += 5; // concept, retrieval, example lab, error clinic, production
      total += (unit.examples || []).length;
      total += (unit.contrasts || []).length;
      total += Math.min(3, (unit.rulesJP || []).length);
    });
    total += Math.min(14, buildFinalTasks(chapter).length);
    return total;
  }

  function buildSchedule(chapter) {
    const units = unitsOf(chapter);
    const unitBlock = units.length * MIN_UNIT_MINUTES;
    const afterUnits = DIAGNOSTIC_MINUTES + unitBlock;
    const total = estimateMinutes(chapter);
    return [
      {
        range: `0–${DIAGNOSTIC_MINUTES} min`,
        title: 'Diagnostic & prediction',
        jp: 'まだ説明を読まず、誤文訂正・意味判断・例文分析を行い、何が分からないかを先に見つけます。',
        tc: '先不要看講義，透過改錯、意義判斷與例句分析找出自己的盲點。'
      },
      {
        range: `${DIAGNOSTIC_MINUTES}–${afterUnits} min`,
        title: `${units.length} guided sub-lessons`,
        jp: '各Sub-lessonを「概念→想起→例文→誤用→生成」の順で約14分ずつ学びます。',
        tc: '每個 Sub-lesson 約14分鐘，依「概念→回想→例句→錯誤→產出」學習。'
      },
      {
        range: `${afterUnits}–${total} min`,
        title: 'Mastery test & output',
        jp: '答えを見ずに章全体を横断する問題を解き、最後に自分の英文を作って説明できるか確認します。',
        tc: '不看答案完成跨章測驗，最後用自己的英文輸出並確認能否解釋。'
      },
      {
        range: '翌日 / 3日後 / 7日後',
        title: 'Spaced review',
        jp: '同じDrillを短時間で再実行し、正答だけでなく「なぜ」を言えるか確認します。',
        tc: '隔天、3天、7天重新快速做 Drill，確認不只答對，還能說明原因。'
      }
    ];
  }

  function buildDiagnostic(chapter) {
    const tasks = [];
    unitsOf(chapter).forEach((unit, index) => {
      const contrast = (unit.contrasts || [])[0];
      if (contrast) {
        tasks.push({
          kind: 'correction',
          label: `D${tasks.length + 1}`,
          promptJP: `次の文・表現の問題点を説明し、自然な形へ直してください： “${contrast[0]}”`,
          promptTC: `請說明下列表達的問題，並改成自然英文： “${contrast[0]}”`,
          answerEN: contrast[1],
          answerJP: contrast[2] || '',
          answerTC: contrast[3] || '',
          source: unit.title
        });
      }
      const example = (unit.examples || [])[0];
      if (example) {
        tasks.push({
          kind: 'analysis',
          label: `D${tasks.length + 1}`,
          promptJP: `“${example[0]}” でこの形が選ばれている理由を、文法用語だけでなく意味から説明してください。`,
          promptTC: `請從「意義」而不只是文法術語說明為什麼 “${example[0]}” 使用這個形式。`,
          answerEN: example[0],
          answerJP: example[1] || '',
          answerTC: example[2] || '',
          source: unit.title
        });
      }
    });
    return tasks.slice(0, 8);
  }

  function buildUnitActivities(chapter, unit) {
    const ruleCount = (unit.rulesJP || []).length;
    const exampleCount = (unit.examples || []).length;
    const contrastCount = (unit.contrasts || []).length;
    return [
      {
        title: '1 · Concept lecture',
        minutes: 3,
        jp: '講義を読み、中心概念を一文で要約してください。「形」ではなく、その形が何を意味として表すかを書きます。',
        tc: '閱讀講義後，用一句話總結核心概念。不要只寫形式，要寫這個形式在意義上表達什麼。'
      },
      {
        title: '2 · Retrieval before checking rules',
        minutes: 3,
        jp: `Rulesを開く前に、判断基準を最低${Math.max(2, Math.min(3, ruleCount))}個、自分の言葉で書いてください。その後に答え合わせします。`,
        tc: `打開 Rules 前，先用自己的話寫至少${Math.max(2, Math.min(3, ruleCount))}個判斷標準，再核對。`
      },
      {
        title: '3 · Example lab',
        minutes: 3,
        jp: `${exampleCount}個の例文を、①骨格/形 ②意味 ③なぜ別の形ではないか、の3点で分析し、最後に音読します。`,
        tc: `分析${exampleCount}個例句：①結構 ②意義 ③為何不用另一形式，最後朗讀。`
      },
      {
        title: '4 · Error clinic',
        minutes: 2,
        jp: `${Math.max(1, contrastCount)}個の誤用・対比について、答えを見る前に自分で修正し、「なぜ」を説明します。`,
        tc: `針對${Math.max(1, contrastCount)}個錯誤/對比，先自行修正，再說明原因。`
      },
      {
        title: '5 · Controlled → free production',
        minutes: 3,
        jp: '指定Drillを行った後、同じ文法を使って自分の生活・学習・仕事について最低3文作ります。最後に60秒でルールを口頭説明します。',
        tc: '完成指定 Drill 後，用同一文法寫至少3句自己的生活/學習/工作內容，最後用60秒口頭解釋規則。'
      }
    ];
  }

  function buildFinalTasks(chapter) {
    const tasks = [];
    unitsOf(chapter).forEach(unit => {
      const contrast = (unit.contrasts || [])[0];
      if (contrast) {
        tasks.push({
          type: 'Error correction',
          promptJP: `誤りを直し、理由を説明： “${contrast[0]}”`,
          promptTC: `改正錯誤並說明原因： “${contrast[0]}”`,
          answerEN: contrast[1],
          answerJP: contrast[2] || '',
          answerTC: contrast[3] || ''
        });
      }
      const example = (unit.examples || [])[0];
      if (example) {
        tasks.push({
          type: 'Grammar reasoning',
          promptJP: `“${example[0]}” の文法選択を説明し、同じパターンで別の文を1文作る。`,
          promptTC: `說明 “${example[0]}” 的文法選擇，並用同一模式另造一句。`,
          answerEN: example[0],
          answerJP: example[1] || '',
          answerTC: example[2] || ''
        });
      }
      const rules = unit.rulesJP || [];
      if (rules.length) {
        tasks.push({
          type: 'Rule reconstruction',
          promptJP: `「${unit.title}」の判断基準を、教材を閉じて最低2つ書く。`,
          promptTC: `關閉教材後，寫出「${unit.title}」至少兩個判斷標準。`,
          answerEN: '',
          answerJP: rules.slice(0, 3).join(' / '),
          answerTC: (unit.rulesTC || []).slice(0, 3).join(' / ')
        });
      }
    });
    (chapter.outcomesJP || []).forEach((outcome, i) => {
      tasks.push({
        type: 'Production',
        promptJP: `到達目標「${outcome}」を証明する英文を2〜3文作り、自分で解説する。`,
        promptTC: `為了證明達成目標「${(chapter.outcomesTC || [])[i] || outcome}」，造2–3句英文並自行解釋。`,
        answerEN: '',
        answerJP: '自由解答。文法的正確さだけでなく、なぜその形を選んだか説明できることが合格条件です。',
        answerTC: '自由作答。合格條件不只正確，還要能解釋為何選這個形式。'
      });
    });
    return tasks.slice(0, 14);
  }

  function buildChapterProject(chapter) {
    const units = unitsOf(chapter);
    const required = Math.min(6, Math.max(3, units.length));
    return {
      jp: `この章から異なるSub-lessonを最低${required}個選び、それぞれの文法を1回以上使って120〜180語の文章を書いてください。次に、その文章を音読し、使った文法を5分以内で「先生役」として説明します。最後に、書いた英文から自分で誤り候補を3か所探して再確認します。`,
      tc: `從本章至少選${required}個不同的 Sub-lesson，每個文法至少使用一次，寫120–180字英文。接著朗讀全文，並在5分鐘內以「老師」身分解釋所用文法。最後自行找出3個可能錯誤處重新檢查。`
    };
  }

  window.GrammarSession = {
    estimateMinutes,
    activityCount,
    buildSchedule,
    buildDiagnostic,
    buildUnitActivities,
    buildFinalTasks,
    buildChapterProject
  };
})();