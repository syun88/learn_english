# English Mastery Lab — Multi-page English School

英語を一枚のダッシュボードに詰め込むのではなく、**Grammar / Vocabulary / Pronunciation / Listening / Reading / Speaking / Writing / TOEIC / Review** を独立した教科として学ぶGitHub Pages教材です。

## Goal

TOEIC L&R 990は重要なbenchmarkですが、最終目的は試験ではなく英語運用力です。

```text
Accuracy × Automaticity × Appropriacy = Mastery
```

## Site architecture

```text
/
├─ index.html                 # Home / school map
├─ grammar/
│  ├─ index.html             # Grammar Library
│  ├─ lesson.html            # 独立Lesson Reader (?id=...)
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
│  ├─ content.js             # 各教科の教材本文
│  ├─ site.css
│  └─ site.js
├─ mastery-data.js           # Professor Grammar curriculum
└─ .nojekyll
```

## Why multi-page

以前はHome、Grammar、Practice、TOEICなどが一枚の長いページにまとまっていました。教材量を本格的に増やすと、1ページ型では「どこを学んでいるか」「どこへ戻るか」「一つのLessonに集中する」が難しくなります。

現在は各技能を別ページ化し、GrammarはさらにLibraryとLesson Readerを分離しています。

## Grammar

既存のProfessor Grammarデータをそのまま利用しつつ、URLを独立させています。

```text
/grammar/
/grammar/lesson.html?id=architecture
/grammar/lesson.html?id=nouns
...
```

Lessonは次の順序で読みます。

```text
Form
→ Teacher explanation
→ How to use it
→ Contrast & common mistakes
→ Real examples + TTS
→ Output assignment
→ Mastery check
```

35 main lessonsは最終的な項目数ではなく「章」です。今後、各章内にsub-lesson・例文・問題を追加します。

## Other subjects

### Vocabulary
- word family
- collocation
- lexical chunks
- phrasal verbs
- register / synonyms
- daily vocabulary protocol

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
- advanced input types

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
- weekly recording

### Writing
- sentence control
- paragraph structure
- cohesion
- email / professional writing
- academic / technical writing
- weekly assignment

### TOEIC
TOEIC固有テクニックだけでなく、Part 1–7を一般英語の基礎能力へ分解して学習します。

### Review
1 / 3 / 7 / 30日復習とError Logを使います。

## Storage

Theme、language、Grammar completion、Error Logなどはブラウザの`localStorage`へ保存します。
