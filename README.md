# English Mastery Lab — C2 direction + TOEIC 990 benchmark

日本語・繁體中文で、英語を基礎から**実際に使いこなせるレベル**まで体系的に学ぶためのWeb教材です。

TOEIC専用教材ではありません。TOEIC L&R 990点を「高い精度と処理速度」のベンチマークとして使いつつ、試験だけでは十分に測れない **Speaking / Writing / Pronunciation / Pragmatics / Register** まで含めて伸ばします。

> **Grammar first, but mastery requires input, output, automaticity, and natural usage.**

## Site

GitHub Pages:

```text
https://syun88.github.io/learn_english/
```

Pagesが未設定の場合:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`

## Goal

学習目標は「難しい英単語を知っていること」ではなく、次の3つを同時に高めることです。

```text
Accuracy × Automaticity × Appropriacy = Mastery
正確さ × 自動化 × 場面に合う自然さ
```

CEFR A1〜C2を能力整理の方向性として使いますが、このサイトだけでCEFRレベルを公式認定するものではありません。

## 8 mastery domains

1. **Grammar & Syntax** — 語順から情報構造・精密文法まで
2. **Vocabulary & Collocation** — word family / collocation / chunks / register
3. **Pronunciation & Phonology** — stress / schwa / weak forms / linking / rhythm / intonation
4. **Listening** — 音認識 → chunk処理 → 意図・推論
5. **Reading** — 構文 → cohesion → logic → inference → speed
6. **Speaking** — accuracy / fluency / interaction / paraphrase
7. **Writing** — sentence → paragraph → email → explanation → technical/academic writing
8. **Pragmatics & Register** — 丁寧さ、距離感、hedging、formal/neutral/casual

## 12-unit curriculum

- Unit 1: Sentence Architecture
- Unit 2: be / do / have
- Unit 3: Verb Forms
- Unit 4: Questions & Negation
- Unit 5: Tense & Aspect
- Unit 6: Expand
- Unit 7: Clauses
- Unit 8: Real English
- Unit 9: Precision Grammar
- Unit 10: Vocabulary System
- Unit 11: Sound & Fluency
- Unit 12: C2 Direction + TOEIC 990

進捗はブラウザの `localStorage` に保存します。

## Professor-style Grammar

文法は短いルール表ではなく、各Lessonを次の順番で学びます。

```text
Form
  ↓
Meaning
  ↓
Usage
  ↓
Contrast
  ↓
Common mistakes
  ↓
Real examples
  ↓
Output
```

現在の詳細Lessonは以下を含みます。

- Sentence architecture / verb valency / 5文型
- be / do / have
- Nouns / countability / articles / determiners
- Tense
- Aspect: progressive / perfect / perfect progressive
- Modality
- Infinitives / gerunds / participles
- Passive / causative
- Questions / negation / inversion
- Relative clauses
- Conditionals / subjunctive
- Prepositions / collocations
- Agreement / pronoun reference
- Information structure / cleft / fronting
- Cohesion / discourse
- Register / hedging / naturalness
- C1/C2 precision: ellipsis / apposition / nominalization / parallelism

各Lessonには日本語・繁體中文の講義、使い分け、対比例、典型ミス、音声再生可能な例文、Output課題があります。検索とCEFRレベル絞り込みにも対応しています。

## Practice

自動採点Quizは10問ランダムで、次のモードを用意しています。

- **Mixed** — 全レベル混合
- **Foundation** — A1〜B1の基礎
- **Advanced B2–C2** — 精密文法・自然さ・論理
- **TOEIC 990** — Part 5型の品詞・語法・コロケーション・構文

さらに:

- Sentence transformation
- Dictation（Normal / Slow）
- Shadowing protocol
- Speaking 30秒 / 90秒 / 2分
- 200-word Writing
- Core sentence bank 30文
- Mistake Notebook
- Today / Tomorrow / +3 days / +7 days review

を用意しています。

## TOEIC 990 benchmark

TOEIC L&Rは現在、Listening 100問 + Reading 100問の計200問、合計10〜990点です。

教材内ではPart 1〜7それぞれの処理方法を扱いますが、TOEIC固有のテクニックだけを英語学習の中心には置きません。

- Part 1: Photographs
- Part 2: Question–Response
- Part 3: Conversations
- Part 4: Talks
- Part 5: Incomplete Sentences
- Part 6: Text Completion
- Part 7: Reading Comprehension

公式形式の確認先:

- IIBC: `https://www.iibc-global.org/toeic/test/lr/about/format.html`
- ETS: `https://www.ets.org/toeic/about/faq/product-specific-faq/toeic-listening-reading.html`

受験前には必ず最新の公式情報を確認してください。

## Files

```text
index.html        # mastery curriculum / UI shell
mastery-data.js  # professor grammar / mastery domains / TOEIC / C2 data
mastery-app.js   # rendering / quiz / progress / TTS / dictation / review
mastery.css      # responsive UI / dark mode / lesson design
.nojekyll         # GitHub Pages helper

script.js         # previous interactive version (legacy)
styles.css        # previous interactive version (legacy)
```

教材本文を増やす場合は主に `mastery-data.js`、新しい練習機能を増やす場合は `mastery-app.js` を編集します。内容とUIを分離しているため、今後Grammar Lesson、語彙、長文、発音教材を数百単位に拡張できます。

## Browser notes

音声機能はブラウザ標準の `SpeechSynthesis` を使用します。利用できる英語音声や品質はOS・ブラウザによって異なります。

進捗、学習日、クイズベストスコア、間違いノートは `localStorage` に保存され、サーバーには送信しません。
