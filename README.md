# English Mastery Lab — Multi-page English School

英語を一枚のダッシュボードに詰め込むのではなく、**Grammar / Vocabulary / Pronunciation / Listening / Reading / Speaking / Writing / TOEIC / Review** を独立した教科として学ぶGitHub Pages教材です。

## Goal

TOEIC L&R 990は重要なbenchmarkですが、最終目的は試験ではなく英語運用力です。

```text
Accuracy × Automaticity × Appropriacy = Mastery
```

## Grammar is the foundation

Grammarはこの教材の最重要コアです。現在は **35 Chapters / 131+ Sub-lessons** を持ちますが、章名を並べることをcoverageとは考えていません。

各Chapterは最低75分以上の本授業として設計します。通常章はTeacher Guide込みで80〜100分以上、Chapter 1のような基礎大章は2時間規模です。

```text
Diagnostic
→ Child-friendly intuition
→ Professional Teacher Explanation
→ Decision Flow
→ Common Misunderstandings
→ Additional Example Bank
→ Guided Sub-lessons
→ Rule Recall
→ Error Clinic
→ Controlled Practice
→ Free Production
→ Final Mastery Test
→ 120–180 word Chapter Project
→ 1 / 3 / 7 day review
```

### Meaning first, notation second

S / V / O / C を理解の入口にはしません。

最初は、

- 誰が・何が？
- どうする？／どういう状態？
- 何を？／誰に？
- どんな状態？／何者？

という意味の流れで英文を理解します。

Subject (S) / Verb (V) / Object (O) / Complement (C) は、辞書・参考書・試験解説を読むための**補助ラベル**として後から接続します。

### Chapter 1: English Sentence Foundations

Chapter 1は教材全体の品質基準として本文から全面改稿しています。

- そもそも「文」とは何か
- 「何が → どうする」で完成する文
- 主語を説明する文（traditional SVC）
- 動作が対象へ向かう文（traditional SVO）
- 誰に＋何を（traditional SVOO）
- Objectをその後ろから説明する文（traditional SVOC）
- Verb Pattern — 動詞ごとに後ろへ何を置けるか
- 長文から中心の文を見つける

特にSVOCは `make / find / keep / call / name / consider / paint / elect / appoint / leave` など複数のpatternを大量の例と比較で扱い、単に「S+V+O+C」と暗記させません。

### Teacher Guide for every chapter

Chapter 2〜35にも章ごとのTeacher Guideがあります。

- 子どもにも分かる最初のイメージ
- 専門的なTeacher Explanation
- 実際に英文を作るときの判断フロー
- 学習者がよく混乱するポイント
- Additional Example Bank

基礎のbe / do / have / nouns / articles / quantifiers / pronouns、時制・相・助動詞、verb patterns、clauses、conditionals、reported speech、C1/C2 written grammarまで同じ方針で扱います。

## Teacher references

教材本文は外部教材のコピーではありません。文法分類・用法・例外を検証するTeacher referenceとして、主に以下を参照します。

- Cambridge English Grammar Today
  - Complements
  - Subject complements
  - Verb patterns
  - Verb patterns with and without objects
  - Clauses and sentences
  - Determiners
- British Council LearnEnglish
  - A1–A2 Grammar
  - B1–B2 Grammar
  - C1 Grammar

Lesson末尾から参照ページへ移動できます。

## Site architecture

```text
/
├─ index.html                 # Home / school map
├─ grammar/
│  ├─ index.html             # Grammar Library
│  ├─ lesson.html            # independent chapter reader (?id=...)
│  ├─ course-*.js            # core curriculum
│  ├─ deep-foundation.js     # rebuilt Chapter 1
│  ├─ teacher-*.js           # professional teacher guides
│  ├─ session.js             # 75+ minute class / practice engine
│  ├─ notation.js            # meaning-first notation layer
│  ├─ references.js          # authoritative reference links
│  ├─ library.js
│  └─ lesson.js
├─ vocabulary/index.html
├─ pronunciation/index.html
├─ listening/index.html
├─ reading/index.html
├─ speaking/index.html
├─ writing/index.html
├─ toeic/index.html
├─ review/index.html
├─ assets/
│  ├─ content.js
│  ├─ site.css
│  └─ site.js
└─ .nojekyll
```

## Other subjects

### Vocabulary
- word family
- collocation
- lexical chunks
- phrasal verbs
- register / synonyms

### Pronunciation
- consonants / vowels
- minimal pairs
- stress
- schwa / weak forms
- connected speech
- intonation

### Listening
- sound recognition
- chunk processing
- intent / inference
- dictation diagnosis

### Reading
- sentence parsing
- reference
- logical relations
- inference
- speed training

### Speaking
- accuracy
- fluency
- interaction
- paraphrase
- register

### Writing
- sentence control
- paragraph structure
- cohesion
- professional / academic / technical writing

### TOEIC
TOEIC Part 1–7を一般英語の基礎能力へ分解して学習します。TOEIC固有テクニックだけを英語学習の中心には置きません。

### Review
1 / 3 / 7 / 30日復習とError Logを使います。

## Storage

Theme、language、Grammar completion、Grammar study notes、Error Logなどはブラウザの`localStorage`へ保存します。
