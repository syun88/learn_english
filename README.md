# English Study Lab — JP / 繁中

英語をゼロから学び直すための、日本語・繁體中文バイリンガル学習サイトです。

以前の「文法リファレンス中心」から、**理解 → 問題 → リスニング → 音読 → 作文 → 復習**まで1つのサイトで回せる教材へ拡張しています。

## Site

GitHub Pages:

```text
https://syun88.github.io/learn_english/
```

表示されない場合は GitHub の `Settings` → `Pages` で、

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`

を設定してください。

## Study flow

1. **Understand** — その日の文法を1テーマだけ読む
2. **Recall** — 自動採点クイズと英文変換
3. **Listen** — ブラウザ音声を使ったディクテーション
4. **Speak** — 音読・シャドーイング
5. **Write** — 自分の情報を使って英文を書く
6. **Review** — 間違いノートを翌日・3日後・7日後に復習

## Features

- 日本語 / 繁體中文 / 両方表示の切り替え
- 8ユニットの基礎英語コース
- 5文型、be/do/have、動詞変化、疑問文、12時制
- 助動詞、不定詞、動名詞、分詞、関係詞
- 受動態、比較、仮定法
- 10問ランダム自動採点クイズ
- 英文変換ドリル
- Speech Synthesis API を使ったディクテーション
- 音読・シャドーイング教材
- 30秒スピーキング課題
- 3段階のライティング課題
- 30文のCore Sentence Bank
- 例文検索
- 間違いノート
- 学習チェック・学習日・ベストスコアのローカル保存
- ダークモード
- 外部ライブラリ不要 / GitHub Pages対応

## Learning policy

- **Grammar first, but output every day.**
- 文法は暗記項目ではなく「英文を作るための型」として学ぶ
- 単語単体より、実際に使う文・チャンクで覚える
- 「分かった」で終わらず、その日に最低1回は話す・書く
- 間違いを消すのではなく、翌日の復習教材として残す
- 日本語と繁體中文の両方から意味のズレを確認する

## Files

```text
index.html   # lessons, grammar, drills, speaking, writing, review
styles.css   # responsive design / dark mode
script.js    # quiz, progress, TTS, search, localStorage
.nojekyll    # GitHub Pages helper
```

## Browser notes

音声機能はブラウザ標準の `SpeechSynthesis` を利用します。利用できる英語音声や発音はOS・ブラウザによって異なります。

進捗、学習日、クイズのベストスコア、間違いノートは `localStorage` に保存されます。サーバーへ送信しません。
