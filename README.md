# English Mastery Lab — Complete English + TOEIC 990 benchmark

英語を「試験で点を取る知識」ではなく、**聞く・読む・話す・書くための運用能力**として身につけるための、JP / 繁中バイリンガル学習アプリです。

TOEIC L&R 990 は重要なベンチマークの一つですが、最終目的ではありません。A1 から C2 方向まで、Grammar / Vocabulary / Pronunciation / Listening / Reading / Speaking / Writing / Pragmatics を統合して伸ばします。

## Site

GitHub Pages:

```text
https://syun88.github.io/learn_english/
```

## Learning philosophy

```text
Accuracy × Automaticity × Appropriacy = Mastery
```

文法は次の順番で学びます。

```text
Quick Check
→ Form
→ Meaning / Teacher explanation
→ Usage
→ Contrast & common mistakes
→ Real examples + audio
→ Output assignment
→ Review
```

「ルールを読んで終わり」ではなく、理解した文法を自分で使うところまでを1 Lessonとします。

## UI / learning flow

従来の長い参考書型1ページではなく、学習アプリ型に再設計しています。

- Home: 今日の次 Lesson、Grammar進捗、Study days、Quiz best
- Path: A1 → A2 → B1 → B2 → C1 → C2 direction
- Grammar: 検索・CEFRレベル・文法領域で絞り込み
- Lesson Reader: 一度に1 Lessonへ集中
- Coverage: 文法領域と主要トピックの抜けを確認
- Skills: Grammar以外の7領域も独立して学習
- Practice: Quiz / Transform / Dictation / Output
- TOEIC: Part 1–7を精度と速度のベンチマークとして練習
- Review: 1 / 3 / 7 / 30日復習 + Mistake notebook

進捗、学習日、Quiz best、ノート、Writing draft はブラウザの `localStorage` に保存します。

## Grammar coverage

現在の Professor Grammar は **35 detailed lessons / 9 grammar domains / 90 major topic labels** で構成しています。

### 9 domains

1. Sentence & Clause Architecture
2. Noun Phrase System
3. Tense, Aspect & Modality
4. Verb Patterns & Voice
5. Modification & Comparison
6. Complex Clauses
7. Interaction Grammar
8. Discourse & Information
9. Advanced Written Precision

### Topics added after the coverage audit

初期版の17 Lessonだけでは、英語文法全体の中核を学ぶには不足していました。現在は特に次を独立して追加しています。

- Pronouns & Possession
- Quantifiers
- There / It constructions
- Adjectives & Adverbs
- Comparison & Degree
- Future forms
- `used to / would / be used to / get used to`
- Modal perfects
- Phrasal & multi-word verbs
- Verb complementation
- Noun / content clauses
- Adverbial clauses & linkers
- Reported speech
- Reporting verbs
- Question tags / short answers / response grammar
- Participle / reduced clauses
- Ellipsis & substitution
- Punctuation / capitalisation / written grammar

35 Lessonですべての英文法事項を「完全列挙した」とは主張しません。Cambridge English Grammar Profileのような参照体系は非常に細かい文法特徴をCEFR別に記述しています。このサイトでは、それらを1項目1ページで複製するのではなく、**学習・運用上まとまりの良いLessonに統合し、必要に応じてsub-lessonや問題を追加する設計**にしています。

## Complete English domains

- Grammar & Syntax
- Vocabulary & Collocation
- Pronunciation & Phonology
- Listening
- Reading
- Speaking
- Writing
- Pragmatics & Register

TOEICで扱われにくいSpeaking / Writing / Pronunciation / Registerも同じ重要度で扱います。

## TOEIC 990 benchmark

TOEIC L&RはPart 1–7を練習します。ただし、テスト固有のテクニックを学習の中心には置きません。

まず一般英語として、

- 語彙・collocation
- 文法・語法
- connected speech の聞き取り
- 文章構造・言い換え・推論
- 高速で正確に処理する自動化

を作り、その結果として990を狙います。

## Files

```text
index.html        # app shell / page structure
mastery.css       # responsive application UI
mastery-data.js   # grammar curriculum and coverage data
mastery-app.js    # lesson reader, progress, practice and audio logic
README.md
```

旧 `styles.css` / `script.js` はmainの旧版互換用として残していますが、Mastery版のページからは読み込みません。

## Curriculum references

設計時の参照軸：

- CEFR / Council of Europe
- Cambridge English Grammar Profile
- Cambridge Grammar Today
- British Council LearnEnglish Grammar
- ETS / IIBC TOEIC official information

CEFRレベル表示は学習方向を整理するための目安であり、このサイト単独で公式なCEFR認定を行うものではありません。
