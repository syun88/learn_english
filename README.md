# English Mastery Lab — C2 direction + TOEIC 990 benchmark

日本語・繁體中文で、英語を基礎から**実際に使いこなせるレベル**まで体系的に学ぶための静的Web教材です。

目標は「TOEIC対策サイト」ではありません。TOEIC L&R 990点を高い精度・処理速度のベンチマークとして扱いながら、試験だけでは測れない **Speaking / Writing / Pronunciation / Pragmatics / Register** まで含めて学びます。

> **Grammar first, but mastery requires input, output, automaticity, and natural usage.**

## Site

GitHub Pages:

```text
https://syun88.github.io/learn_english/
```

表示されない場合は GitHub の `Settings` → `Pages` で以下を設定してください。

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`

## Learning targets

この教材では英語力を8領域に分けて伸ばします。

1. **Grammar & Syntax** — A1の語順からC2の情報構造・精密文法まで
2. **Vocabulary & Collocation** — 単語訳ではなく語族・collocation・chunks・registerで習得
3. **Pronunciation & Phonology** — 音素、stress、schwa、weak forms、linking、rhythm、intonation
4. **Listening** — 音の認識 → 意味処理 → 話者意図・推論
5. **Reading** — 構文 → 論理 → cohesion → inference → speed
6. **Speaking** — accuracy / fluency / interaction / paraphrase
7. **Writing** — sentence → paragraph → email → explanation → technical / academic writing
8. **Pragmatics & Register** — 丁寧さ、距離感、hedging、formal / neutral / casual

CEFRのA1〜C2を「試験ラベル」ではなく、何ができるかを整理する方向性として利用します。C2到達を自動で認定する教材ではありません。

## Professor-style Grammar Course

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

現在の詳細Lessonには以下を含みます。

- Sentence architecture / verb valency / 5文型
- be / do / have
- Nouns / countability / articles / determiners
- Tense
- Aspect: progressive / perfect / perfect progressive
- Modality: can / may / must / should / will / would
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
- C1/C2 precision grammar: ellipsis / apposition / nominalization / parallelism

各Lessonには日本語・繁體中文の講義、使い分け、対比例、よくある誤り、音声再生可能な例文、Output課題があります。

## 12-unit mastery course

- Unit 1–8: 基礎文法 → 実用英語
- Unit 9: Precision Grammar
- Unit 10: Vocabulary System
- Unit 11: Sound & Fluency
- Unit 12: C2 direction + TOEIC 990 benchmark

学習チェックは `localStorage` に保存されます。

## TOEIC 990 benchmark track

TOEIC L&Rは現在、Listening 100問 + Reading 100問の計200問、スコア10〜990です。

教材内では Part 1〜7 の処理方法を扱いますが、**TOEIC固有テクニックを英語学習の中心には置きません**。

- Part 1: Photographs
- Part 2: Question–Response
- Part 3: Conversations
- Part 4: Talks
- Part 5: Incomplete Sentences
- Part 6: Text Completion
- Part 7: Reading Comprehension

Practice Quizには以下のモードがあります。

- Mixed — 基礎〜C2 / TOEICを混合
- Foundation — A1〜B1中心
- Advanced — B2〜C2精密文法
- TOEIC 990 — Part 5型の高精度文法・語法

公式形式の確認先:

- IIBC: `https://www.iibc-global.org/toeic/test/lr/about/format.html`
- ETS: `https://www.ets.org/toeic/about/faq/product-specific-faq/toeic-listening-reading.html`

受験前には必ず最新の公式情報を確認してください。

## Daily study flow

### Minimum — 25 min

1. **Understand** — Grammar Lessonを1テーマ
2. **Recall** — 自動採点クイズ / sentence transformation
3. **Listen** — dictation
4. **Speak** — shadowing / read aloud
5. **Write** — 2〜3文を自分の情報で作る

### Mastery session — 45–60 min

上記に加えて、

- collocation / word family
- pronunciation / weak forms / rhythm
- paragraph reading + inference
- 60〜90秒 speaking
- 100〜200 words writing
- mistake review

を追加します。

## Existing interactive features

- 日本語 / 繁體中文 / 両方表示切り替え
- 12-unit progress tracking
- Professor-style Grammar search / CEFR level filter
- Foundation / Advanced / TOEIC modesの自動採点Quiz
- 英文変換drill
- Speech Synthesis APIを使った例文音声・dictation
- shadowing / speaking tasks
- 3段階writing tasks
- Core Sentence Bank
- mistake notebook
- study-day / best-score / progress のローカル保存
- dark mode
- responsive design
- external libraryなし / GitHub Pages対応

## Files

```text
index.html        # curriculum, UI, drills, TOEIC/C2 tracks
mastery-data.js  # detailed grammar lectures / mastery / TOEIC learning data
script.js         # rendering, quiz, progress, TTS, search, localStorage
styles.css        # responsive design / dark mode / lesson UI
.nojekyll         # GitHub Pages helper
```

## Browser notes

音声機能はブラウザ標準の `SpeechSynthesis` を利用します。利用できる英語音声や発音品質はOS・ブラウザによって異なります。

進捗、学習日、クイズ設定・ベストスコア、間違いノートは `localStorage` に保存され、サーバーへ送信しません。
