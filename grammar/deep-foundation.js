(() => {
  const chapters = window.grammarChapters || [];
  const index = chapters.findIndex(c => c.id === 'sentence-architecture');
  if (index < 0) return;

  chapters[index] = {
    id: 'sentence-architecture',
    level: 'A1-B2',
    domain: 'Sentence & Clause Architecture',
    title: '01 · English Sentence Foundations — 英文を「意味の順番」から組み立てる',
    titleTc: '01 · 英文句子基礎 — 從「意思順序」理解句子',
    overviewJP: 'この章の目的は、S/V/O/Cという記号を暗記することではありません。英語が「誰・何について話しているのか」「何をしている／どんな状態なのか」「その動作は何に向かうのか」「誰や何がどんな状態になるのか」を、語順から読み取れるようになることです。最初は日本語の問いで考え、最後に学校文法のS・V・O・Cという名前へつなげます。文型は答えを当てるクイズではなく、動詞がどんな材料を必要とするかを理解するための地図として使います。',
    overviewTC: '本章不是要先背 S/V/O/C，而是先理解英文如何用語序表示「在說誰/什麼」「做什麼/是什麼狀態」「動作對誰/什麼」「某人/某物變成什麼狀態」。先用自然問題理解，再連接到學校文法的 S、V、O、C。句型不是猜標籤，而是理解動詞需要哪些成分的地圖。',
    outcomesJP: [
      '短い英文を「誰が/何が → どうする/どんな状態 → 何を/誰に → どんな状態に」の意味で読める',
      'Subject / Verb / Object / Complementという用語を、記号ではなく役割として説明できる',
      'SV・SVC・SVO・SVOO・SVOCの典型例を、自分の言葉で違いまで説明できる',
      '特にSVOCで「ObjectをComplementが説明する」という関係を見抜ける',
      '動詞ごとに後ろへ置ける形が違うことを理解し、arrive/reach、say/tell、explain/giveなどを正しく使える',
      '長い英文でも、追加説明をいったん外して「中心の文」を見つけられる'
    ],
    outcomesTC: [
      '用「誰/什麼 → 做什麼/什麼狀態 → 對誰/什麼 → 變成什麼狀態」理解短句',
      '把 Subject / Verb / Object / Complement 當作功能而不是符號來解釋',
      '能自己說明 SV、SVC、SVO、SVOO、SVOC 的差異',
      '特別能看出 SVOC 中「C 說明 O」的關係',
      '理解不同動詞需要不同後接結構，正確使用 arrive/reach、say/tell、explain/give 等',
      '長句也能先拿掉附加資訊，找出核心句'
    ],
    units: [
      {
        id: 'sentence-before-symbols',
        title: 'まず「文」を理解する — 記号より先に、誰について何を言うか',
        level: 'A1',
        explainJP: '英文は、単語をたくさん並べれば文になるわけではありません。いちばん大切なのは「誰・何について話しているか」と「その人・物について何を言っているか」です。たとえば “The dog runs.” は「犬について」→「走ると言っている」という2つの中心でできています。“My little dog in the garden” は単語が多くても、「どうした／どういう状態」という中心がないので、普通は完全な文ではありません。最初は文法用語を覚えなくて大丈夫です。「この文は、誰・何について話している？」「その人・物について何を言っている？」と毎回問いかけてください。英語では語順がこの情報をかなり強く示すため、順番をつかむことが基礎になります。',
        explainTC: '英文不是單字多就會變成句子。最重要的是「在說誰/什麼」以及「對這個人/東西說了什麼」。例如 “The dog runs.” 是「狗」→「跑」。而 “My little dog in the garden” 雖然單字多，卻缺少「做什麼/是什麼狀態」的核心，所以通常不是完整句。先不要背術語，每次問自己：「這句在說誰/什麼？」「對它說了什麼？」英文語序會強烈顯示這些資訊，因此先掌握順序。',
        rulesJP: [
          '英文の中心はまず「誰・何について」＋「何を言うか」と考える。',
          '普通の文には中心となる動詞が必要。単語が長く並んでいても中心動詞がなければ文にならないことがある。',
          '最初は修飾語を無視して、短い中心だけを見る。',
          '学校文法では「誰・何について」がSubject（主語/S）、「何を言うか」の中心がVerb（動詞/V）。',
          '命令文のように主語youが表面に出ない文もあるので、「すべての英文が見た目でSから始まる」とは考えない。'
        ],
        rulesTC: [
          '先把英文核心想成「說誰/什麼」＋「對它說什麼」。',
          '一般句子需要核心動詞；單字再多，沒有核心動詞也可能不是句子。',
          '一開始先忽略修飾語，只看最短核心。',
          '學校文法把「誰/什麼」叫 Subject（S），把核心動詞叫 Verb（V）。',
          '命令句等有省略主詞 you 的情況，所以不要以為所有英文表面都從 S 開始。'
        ],
        examples: [
          ['Birds fly.', '「何が？」Birds →「どうする？」fly。最小の完全な文です。', '「什麼？」Birds →「做什麼？」fly。最小完整句。'],
          ['The baby slept.', '「誰が？」the baby →「どうした？」slept。', '「誰？」the baby →「做什麼？」slept。'],
          ['My phone is hot.', '「何が？」my phone →「どんな状態？」is hot。', '「什麼？」my phone →「什麼狀態？」is hot。'],
          ['The red car stopped suddenly.', '中心は The car stopped。red と suddenly は追加情報。', '核心是 The car stopped；red、suddenly 是附加資訊。'],
          ['Our new robot in the lab works well.', '中心は Our robot works。new / in the lab / well は情報を足している。', '核心是 Our robot works；其他是附加資訊。'],
          ['Please sit down.', '命令なので表面の主語youは通常省略され、動詞sitから始まる。', '命令句通常省略 you，所以從動詞 sit 開始。'],
          ['There is a problem.', '存在を導入する特別な形。後の章で詳しく扱う。', '引入「存在」的特殊結構，後面章節詳學。'],
          ['What happened?', '疑問文では普通の語順が変わることがある。今は「happenedが中心」と分かればよい。', '疑問句語序可能改變；現在先知道 happened 是核心即可。']
        ],
        contrasts: [
          ['My little dog in the garden.', 'My little dog in the garden is sleeping.', '前者には「犬がどうした／どんな状態」という中心がない。', '前者缺少「狗做什麼/什麼狀態」的核心。'],
          ['The students very busy.', 'The students are very busy.', '状態を言うにはここではbe動詞areが必要。', '表示狀態時這裡需要 be 動詞 are。'],
          ['My brother a teacher.', 'My brother is a teacher.', '「兄＝先生」を結ぶbeが必要。', '需要 be 連接「哥哥＝老師」。']
        ],
        drillJP: '身の回りから10個の短文を作り、それぞれに「誰が/何が？」「どうする/どんな状態？」の2つだけを書き込む。S/Vという記号は最後に確認する。',
        drillTC: '用身邊內容造10個短句，每句先只標「誰/什麼？」「做什麼/什麼狀態？」；最後才確認 S/V。'
      },
      {
        id: 'action-only-sv',
        title: '「何が → どうする」で終わる文 — まず一番小さな語順を身につける',
        level: 'A1',
        explainJP: '英語には「誰・何が、どうする」だけで意味が完成する動詞があります。sleep、run、arrive、happen、fall、die、workなどです。“The child slept.” は「子どもが寝た」で完成していて、「何を寝た？」とは聞きません。このタイプを学校文法ではSVと呼びます。ただし大事なのはSVという名前ではなく、「この動詞は後ろに“何を？”という対象を直接必要としない」と感じられることです。場所や時間を足すことはできますが、それは中心の材料ではなく追加情報であることが多いです。',
        explainTC: '有些動詞只需要「誰/什麼 → 做什麼」就完整，例如 sleep、run、arrive、happen、fall、die、work。“The child slept.” 已完整，不會問「睡了什麼？」。學校文法叫 SV，但重點不是名稱，而是感覺「這個動詞不直接需要『什麼？』的對象」。可以加地點、時間，但常是附加資訊。',
        rulesJP: [
          '動詞の後ろに直接「何を？」が不要なら、この基本形になることが多い。',
          '場所・時間・方法を後ろに足しても、中心は「何が＋どうする」のままの場合が多い。',
          'arriveはこのタイプなので “arrive Tokyo” ではなく “arrive in Tokyo / arrive at the station”。',
          'happenも直接目的語を取らない。“What happened?” は正しいが “What did it happen?” とはしない。',
          '学校文法名はSV。まずは「対象なしで完成する動詞」と理解する。'
        ],
        rulesTC: [
          '動詞後不需要直接的「什麼？」時，常是此基本結構。',
          '即使加地點、時間、方式，核心仍常是「什麼＋做什麼」。',
          'arrive 不直接接地點名詞，要用 arrive in/at。',
          'happen 也不直接接受詞。',
          '學校文法叫 SV；先理解成「沒有直接對象也能完成」。'
        ],
        examples: [
          ['The sun rose.', 'sunがriseした。対象は不要。', '太陽升起；不需要對象。'],
          ['The children laughed.', '「子どもたちが笑った」で完成。', '「孩子們笑了」已完整。'],
          ['My computer crashed.', 'computerにcrashという出来事が起きた。', '電腦發生 crash。'],
          ['The meeting ended at five.', '中心は The meeting ended。at fiveは時間。', '核心是 The meeting ended；at five 是時間。'],
          ['She arrived in Tokyo yesterday.', '中心は She arrived。in Tokyo / yesterdayは追加情報。', '核心是 She arrived；其他是地點/時間。'],
          ['A problem occurred during testing.', 'problemがoccurred。during testingはいつかを足す。', 'problem occurred；during testing 加時間背景。'],
          ['The price fell sharply.', 'priceがfell。sharplyは「どういうふうに」。', 'price fell；sharply 說明方式。'],
          ['The robot moved slowly.', 'robotがmoved。slowlyは追加。', 'robot moved；slowly 是附加。'],
          ['Everyone laughed at the joke.', 'laugh自体は対象不要。at the jokeは「何に対して笑ったか」。', 'laugh 本身不需受詞；at the joke 是對什麼而笑。'],
          ['The experiment failed twice.', 'experimentがfailed。twiceは回数。', 'experiment failed；twice 是次數。']
        ],
        contrasts: [
          ['We arrived Tokyo.', 'We arrived in Tokyo.', 'arriveは場所を直接「何を？」として取らない。', 'arrive 不直接把地點當受詞。'],
          ['The accident happened him.', 'The accident happened to him.', 'happenの影響先はtoで表す。', 'happen 對某人發生要用 to。'],
          ['She laughed the joke.', 'She laughed at the joke.', 'laughは通常the jokeを直接目的語にしない。', 'laugh 通常不直接接 the joke。']
        ],
        drillJP: 'sleep / arrive / happen / fall / rise / laugh / work / disappearを使い、各2文ずつ作る。次に場所・時間を追加しても「中心の意味」が変わらないか確認する。',
        drillTC: '用 sleep / arrive / happen / fall / rise / laugh / work / disappear 各造2句，再加地點/時間，看核心是否仍相同。'
      },
      {
        id: 'subject-complement',
        title: '「何が → どんな状態・何者？」— 人や物を説明する文',
        level: 'A1-A2',
        explainJP: '次は「何かが何かをする」のではなく、「その人・物がどんなものか」を説明する文です。“Mika is a student.” ではstudentはMikaとは別の対象ではありません。Mikaという人の正体を説明しています。“The soup smells good.” のgoodもsoupの状態・性質を説明しています。この「主役についての説明」をComplement（補語）と呼び、学校文法ではSVCと呼びます。覚え方は簡単です。「左の人・物＝右側の説明」がだいたい成り立つかを考えます。He became a doctorならHe = a doctor。The sky turned redならthe sky = redという関係です。',
        explainTC: '接著不是「某人做某事」，而是「這個人/東西是什麼、什麼狀態」。“Mika is a student.” 的 student 不是另一個對象，而是在說明 Mika 的身分。“The soup smells good.” 的 good 說明 soup 的狀態。這種說明主角的成分叫 Complement（補語），學校文法稱 SVC。簡單判斷：左邊的人/物 ≈ 右邊的描述。',
        rulesJP: [
          'be / become / seem / look / sound / smell / taste / feel / remain / stay / turn / get などでよく現れる。',
          '後ろの語は「動作の対象」ではなく、主語の正体・状態・性質を説明する。',
          'He became a doctor. → He = a doctor と考えられる。',
          'The soup tastes salty. → soup = salty と考えられる。',
          '感覚動詞の後ろでは形容詞がよく来る：looks good, sounds strange, smells nice。',
          '学校文法ではSVC。CはSubject ComplementのCとして理解するとよい。'
        ],
        rulesTC: [
          '常見於 be / become / seem / look / sound / smell / taste / feel / remain / stay / turn / get。',
          '後面的成分不是動作對象，而是說明主詞身分/狀態/性質。',
          'He became a doctor → He = a doctor。',
          'The soup tastes salty → soup = salty。',
          '感官連綴動詞後常接形容詞。',
          '學校文法叫 SVC；C 可理解為 Subject Complement。'
        ],
        examples: [
          ['I am tired.', 'I = tired。自分の状態。', 'I = tired，說明自己的狀態。'],
          ['She is my sister.', 'She = my sister。身分。', 'She = my sister，身分。'],
          ['The room is quiet.', 'room = quiet。状態。', 'room = quiet，狀態。'],
          ['The sky became dark.', 'sky = darkという変化。', 'sky 變成 dark。'],
          ['He became a doctor.', 'He = a doctor。doctorは相手ではなく彼の身分。', 'He = a doctor；doctor 是身分。'],
          ['The plan seems reasonable.', 'plan = reasonableに見える。', 'plan 看起來 reasonable。'],
          ['You look happy.', 'you = happyという見た目。', 'you 看起來 happy。'],
          ['That sounds interesting.', 'that = interestingという印象。', 'that 聽起來 interesting。'],
          ['The soup smells delicious.', 'soup = deliciousという匂いの印象。', 'soup 聞起來 delicious。'],
          ['This tea tastes bitter.', 'tea = bitterという味。', 'tea 喝起來 bitter。'],
          ['The door remained open.', 'door = openの状態が続いた。', 'door 保持 open。'],
          ['The leaves turned yellow.', 'leaves = yellowに変化。', 'leaves 變成 yellow。']
        ],
        contrasts: [
          ['He became a doctor. / He met a doctor.', 'become: doctorはHeの説明 / meet: doctorは別の人', '同じa doctorでも役割が違う。becomeではHe=a doctor、meetではHe≠a doctor。', '同樣 a doctor，become 是 He=a doctor；meet 是另一個人。'],
          ['The soup tastes good. / I tasted the soup.', '前者: goodはsoupの説明 / 後者: soupはtasteした対象', 'tasteは使い方によって「状態を結ぶ動詞」にも「何かを味見する動詞」にもなる。', 'taste 可作連綴動詞，也可作「品嚐」的及物動詞。'],
          ['She looks beautiful. / She looked at the picture.', '前者: beautifulはSheの説明 / 後者: at the pictureは見る対象', 'lookとlook atは構造も意味も違う。', 'look 與 look at 結構/意思不同。']
        ],
        drillJP: 'be / become / seem / look / sound / smell / taste / feel / remain / turnから8個選び、「左＝右」の関係になる文を2文ずつ作る。',
        drillTC: '從 be / become / seem / look / sound / smell / taste / feel / remain / turn 選8個，各造2句「左≈右」的句子。'
      },
      {
        id: 'direct-object',
        title: '「誰が → どうする → 何を？」— 動作が何かに向かう文',
        level: 'A1-A2',
        explainJP: '今度は、動作が人や物に向かいます。“I opened the door.” なら「私が」→「開けた」→「何を？」the doorです。doorはIの説明ではなく、openという動作を受ける対象です。この「何を？／誰を？」に当たるものをObject（目的語）と呼び、学校文法ではSVOです。日本語では「を」が目印になることが多いですが、英語では語順が重要です。また、英語では動詞によって「直接名詞を置けるか」が決まるので、日本語訳だけで前置詞を付けたり外したりしないことが大切です。',
        explainTC: '這次動作會指向某個人或東西。“I opened the door.” 是「我」→「打開」→「什麼？」the door。door 不是說明 I，而是承受 open 動作的對象。這個「什麼/誰」叫 Object（受詞），學校文法叫 SVO。英文很重視語序，而且每個動詞能否直接接名詞不同，不能只靠中文/日文翻譯決定介系詞。',
        rulesJP: [
          '「何を？／誰を？」と自然に聞けるなら直接目的語の可能性が高い。',
          '目的語は主語とは別の人・物であることが多い。',
          'discuss / enter / reach / contact / marry などは日本語感覚で不要な前置詞を足しやすい。',
          'listen / wait / arrive などは名詞を直接取らず前置詞が必要。',
          '同じ動詞が目的語あり/なし両方で使える場合もある：The door opened. / She opened the door.',
          '学校文法ではSVO。'
        ],
        rulesTC: [
          '能自然問「什麼/誰？」時，很可能是直接受詞。',
          '受詞通常是與主詞不同的人/物。',
          'discuss / enter / reach / contact / marry 等容易被母語影響多加介系詞。',
          'listen / wait / arrive 等通常需要介系詞才能接名詞。',
          '有些動詞可有/無受詞：The door opened / She opened the door。',
          '學校文法叫 SVO。'
        ],
        examples: [
          ['I like coffee.', '「何を好き？」coffee。', '「喜歡什麼？」coffee。'],
          ['She opened the window.', 'openの対象はwindow。', 'open 的對象是 window。'],
          ['We tested the robot.', 'testした対象はrobot。', '測試的對象是 robot。'],
          ['They discussed the problem.', 'discussはproblemを直接取る。', 'discuss 直接接受詞 problem。'],
          ['He reached the station.', 'reachはstationを直接取る。', 'reach 直接接 station。'],
          ['I entered the room.', 'enterはroomを直接取る。', 'enter 直接接 room。'],
          ['Please contact me tomorrow.', 'contact + person。', 'contact 直接接人。'],
          ['She married Tom.', 'marry + person。', 'marry 直接接人。'],
          ['The news surprised me.', 'surpriseという影響を受けたのはme。', '受到 surprise 影響的是 me。'],
          ['We need more time.', 'needの対象はmore time。', 'need 的對象是 more time。'],
          ['I remember that day.', 'rememberの対象はthat day。', 'remember 的對象是 that day。'],
          ['The camera captured the movement.', 'captureしたものはmovement。', 'capture 的對象是 movement。']
        ],
        contrasts: [
          ['We discussed about the problem.', 'We discussed the problem.', 'discuss自体に「〜について話し合う」が含まれ、aboutは不要。', 'discuss 本身已含「討論某事」，不需要 about。'],
          ['I entered into the room.', 'I entered the room.', '通常の「部屋に入る」ではenterは直接roomを取る。', '一般「進入房間」enter 直接接 room。'],
          ['We reached to the station.', 'We reached the station.', 'reachは他動詞として場所を直接取る。', 'reach 直接接受詞地點。'],
          ['Please contact to me.', 'Please contact me.', 'contactも人を直接目的語にできる。', 'contact 直接接人。'],
          ['I listened music.', 'I listened to music.', 'listenはmusicを直接目的語にせずtoが必要。', 'listen 需要 to 才接 music。']
        ],
        drillJP: 'discuss / talk about、reach / arrive at、enter / go into、contact / get in touch with、marry / get married to をペアにして、それぞれ3文ずつ作る。',
        drillTC: '把 discuss/talk about、reach/arrive at、enter/go into、contact/get in touch with、marry/get married to 成對，各造3句。'
      },
      {
        id: 'two-objects',
        title: '「誰が → どうする → 誰に → 何を？」— 2つの対象を持つ文',
        level: 'A2-B1',
        explainJP: '“She gave me a book.” にはgiveの後ろに2つの名詞があります。最初のmeは「誰に？」、次のa bookは「何を？」です。学校文法ではSVOOと呼びます。ここで大切なのは、どんな動詞でも2つ並べられるわけではないことです。give / send / show / tell / teach / offer / lendなどはこの形を取りやすい一方、explain / describe / introduceなどは通常 “explain me the rule” のようにはしません。“explain the rule to me” のように別の形を使います。',
        explainTC: '“She gave me a book.” 在 give 後有兩個名詞：me 是「給誰？」；a book 是「給什麼？」。學校文法叫 SVOO。重點是並非所有動詞都能直接排兩個名詞。give/send/show/tell/teach/offer/lend 常可；explain/describe/introduce 通常不能說 explain me the rule，而用 explain the rule to me。',
        rulesJP: [
          '基本イメージは「人に何かを渡す／伝える」。',
          '最初の目的語は受け手（誰に）、2つ目は物・情報（何を）であることが多い。',
          'give me a book ↔ give a book to me のようにtoを使う形へ変えられる動詞が多い。',
          'buy me a book ↔ buy a book for me のようにforになる動詞もある。',
          'tell me the truthはよいが、say me the truthは不可。say the truth to meなど別形。',
          'explain / describe / introduceは通常SVOOにしない。'
        ],
        rulesTC: [
          '基本意象是「把東西/資訊給某人」。',
          '第一個常是接受者，第二個是東西/資訊。',
          '很多動詞可改成 give a book to me。',
          'buy 等常用 for：buy a book for me。',
          'tell me... 可以，但 say me... 不行。',
          'explain/describe/introduce 通常不能用雙受詞。'
        ],
        examples: [
          ['She gave me a book.', 'me = 誰に、a book = 何を。', 'me=給誰，a book=給什麼。'],
          ['He sent me an email.', 'meが受け手、emailが送られる物。', 'me 是接受者，email 是被送的東西。'],
          ['Can you show me the photo?', 'meにphotoを見せる。', '把 photo 給 me 看。'],
          ['Tell me the truth.', 'meにtruthを伝える。', '告訴 me truth。'],
          ['My teacher taught us English.', 'usにEnglishを教える。', '教 us English。'],
          ['They offered me a job.', 'meにjobを提示。', '提供 me 一份 job。'],
          ['Could you lend me your pen?', 'meにpenを貸す。', '借 me pen。'],
          ['I bought my sister a gift.', 'sisterのためにgiftを買う。', '為 sister 買 gift。'],
          ['She made me some coffee.', 'meのためにcoffeeを作る。', '為 me 做 coffee。'],
          ['This app saves users time.', 'usersにtimeの節約を与えるイメージ。', '替 users 節省 time。']
        ],
        contrasts: [
          ['He explained me the problem.', 'He explained the problem to me.', 'explainは通常「人＋物」の二重目的語にしない。', 'explain 通常不能直接用「人＋物」。'],
          ['She described me the room.', 'She described the room to me.', 'describeも通常SVOOにしない。', 'describe 通常不能用 SVOO。'],
          ['He said me the answer.', 'He told me the answer. / He said the answer to me.', 'tellは人を直接取れるがsayは通常そうしない。', 'tell 可直接接人，say 通常不行。'],
          ['Please introduce me your friend.', 'Please introduce your friend to me.', 'introduce A to Bの形。', 'introduce A to B。']
        ],
        drillJP: 'give / send / show / tell / teach / offer / lend / buy / make を使って各2文。さらにto/forを使う別形へ言い換える。explain / describe / introduceは正しい形を3文ずつ。',
        drillTC: '用 give/send/show/tell/teach/offer/lend/buy/make 各造2句，再改寫成 to/for 結構；explain/describe/introduce 各造3個正確句。'
      },
      {
        id: 'object-complement-svoc',
        title: '一番大事なSVOC — 「何を？」のあとで、その人・物をもう一度説明する',
        level: 'A2-B2',
        explainJP: 'SVOCが難しく見える最大の理由は、S・V・O・Cという4文字を一度に覚えようとするからです。記号をいったん忘れましょう。“They painted the door red.” を意味で読むと、「彼らが」→「塗った」→「何を？」the door →「そのdoorをどんな状態に？」redです。redはTheyの説明ではなく、the doorの説明です。つまり “the door = red” という関係があります。“We call him Ken.” なら “him = Ken”。“The news made me happy.” なら “me = happy”。このように、動作の対象Oを、その後ろのCが説明する形を学校文法でSVOCと呼びます。最重要チェックは「OとCの間に、O is C / O becomes C のような説明関係を作れるか」です。ただし機械的な「＝」だけではなく、OがCの状態・名前・役割・評価になる/であるという意味関係を見ます。',
        explainTC: 'SVOC 看起來難，常是因為一次背四個符號。先忘掉符號。“They painted the door red.” 用意思看：「他們」→「塗」→「什麼？」the door →「把 door 變成什麼狀態？」red。red 不是說明 They，而是說明 the door，所以有 “the door = red” 的關係。“We call him Ken.” 是 him=Ken；“The news made me happy.” 是 me=happy。動作對象 O 後面再用 C 說明 O，學校文法叫 SVOC。最重要判斷：O 與 C 是否有「O 是/變成 C」的說明關係。',
        rulesJP: [
          '順番で考える：誰が？ → どうする？ → 何を/誰を？ → そのOをどんな状態・名前・役割だと？',
          'CはOを説明する。主語Sを説明しているのではない。',
          'OとCの間に「O = C」「O becomes C」「O is called C」の関係があるかを見る。',
          'make O adjective: make me happy / make it easier。',
          'find O adjective: find the book useful / find the task difficult。',
          'keep O adjective/participle: keep the door open / keep me waiting。',
          'call/name O noun: call him Ken / name the dog Max。',
          'consider O adjective/noun: consider the plan risky / consider him a friend。',
          'paint O colour: paint the wall blue。',
          'elect/appoint O noun: elect her president / appoint him manager。',
          '学校文法のSVOCは便利な学習地図だが、英語全体をこの5種類だけで完全に説明するものではない。'
        ],
        rulesTC: [
          '按意思順序：誰？→做什麼？→對誰/什麼？→把這個 O 說成什麼狀態/名稱/角色？',
          'C 說明 O，不是說明主詞 S。',
          '看 O 與 C 是否有「O=C / O 變成 C / O 被叫做 C」關係。',
          'make O adjective：make me happy。',
          'find O adjective：find the book useful。',
          'keep O adjective/participle：keep the door open。',
          'call/name O noun：call him Ken。',
          'consider O adjective/noun：consider the plan risky。',
          'paint O colour：paint the wall blue。',
          'elect/appoint O noun：elect her president。',
          'SVOC 是有用的學習地圖，但不是所有英文都只能用五種句型完整解釋。'
        ],
        examples: [
          ['The news made me happy.', 'me = happy。newsの作用でmeがhappyになった。', 'me=happy；news 使 me 變 happy。'],
          ['This button makes the screen brighter.', 'screen = brighter。', 'screen=brighter。'],
          ['The new update made the app faster.', 'app = faster。', 'app=faster。'],
          ['I found the book useful.', 'book = usefulと判断した。', '我認為 book=useful。'],
          ['We found the room empty.', 'room = emptyだったと分かった。', '發現 room=empty。'],
          ['She found the task difficult.', 'task = difficultと感じた。', '她覺得 task=difficult。'],
          ['Please keep the door open.', 'door = openの状態を保つ。', '保持 door=open。'],
          ['The joke kept everyone quiet for a second.', 'everyone = quietの状態が続いた。', '讓 everyone 保持 quiet。'],
          ["Don't keep me waiting.", 'me = waitingの状態に置く。', '不要讓 me 一直 waiting。'],
          ['We call him Ken.', 'him = Kenという名前。', 'him 的名字/稱呼=Ken。'],
          ['They named the robot Atlas.', 'robot = Atlasという名前。', 'robot 被命名為 Atlas。'],
          ['Everyone calls the dog Lucky.', 'dog = Luckyという呼び名。', 'dog 被叫 Lucky。'],
          ['They painted the wall blue.', 'wall = blueという状態へ変化。', '把 wall 變成 blue。'],
          ['She painted the door white.', 'door = white。', 'door=white。'],
          ['We considered the plan risky.', 'plan = riskyと評価。', '認為 plan=risky。'],
          ['I consider him a good friend.', 'him = a good friendという位置づけ。', '我把 him 視為 a good friend。'],
          ['They elected her president.', 'her = presidentという役割になった。', 'her 成為 president。'],
          ['The company appointed him manager.', 'him = managerという役職。', 'him 被任命為 manager。'],
          ['The teacher left the door unlocked.', 'door = unlockedの状態のままにした。', '讓 door 保持 unlocked。'],
          ['The cold weather turned the water solid.', 'water = solidという状態に変化。', 'water 變成 solid。']
        ],
        contrasts: [
          ['I found the book. / I found the book useful.', '前者: bookを見つけた(SVO) / 後者: book=usefulと判断(SVOC)', '同じfindでも後ろの説明があると意味が変わる。', '同樣 find，加上 C 後意思變成「覺得/發現 O 是 C」。'],
          ['She painted the wall. / She painted the wall blue.', '前者: wallを塗った / 後者: wallをblueに塗った', 'blueがwallの結果状態を説明する。', 'blue 說明 wall 的結果狀態。'],
          ['They called him. / They called him Ken.', '前者: 彼に電話した/呼んだ / 後者: him=Kenと呼ぶ', 'Kenはhimを説明するC。', 'Ken 說明 him。'],
          ['We made a cake. / The news made me happy.', 'make a cake: cakeは作る対象 / make me happy: me=happyにする', 'makeの意味と構造が違う。', 'make 的結構不同，意思也不同。'],
          ['He kept the money. / He kept the door open.', 'moneyはkeepの対象 / openはdoorの状態説明', '後者ではdoor=open。', '後者 door=open。'],
          ['I consider the problem. / I consider the problem serious.', '前者: 問題を検討 / 後者: problem=seriousと考える', 'Cがあると「OをCとみなす」。', '有 C 時表示「認為 O 是 C」。']
        ],
        drillJP: 'make / find / keep / call / name / consider / paint / elect / appoint / leaveを使い、各動詞でSVOC例を最低2文作る。各文のOとCを「O = C」の形で別行に書く。次に、同じ動詞でCを外したとき意味がどう変わるか比較する。',
        drillTC: '用 make/find/keep/call/name/consider/paint/elect/appoint/leave 各造至少2個 SVOC 句，每句另寫「O=C」。再比較拿掉 C 後意思如何改變。'
      },
      {
        id: 'verb-pattern-map',
        title: '文型より大切なこと — 動詞には「後ろに置けるもの」の設計がある',
        level: 'A2-B2',
        explainJP: '英語を安定して使うには、「この文は第何文型？」より先に「この動詞は後ろに何を置ける？」と考える習慣が大切です。Cambridge Grammarでもverb patternは、動詞の後ろにobject、preposition、infinitive、-ing、clauseなど何が続くかというパターンとして扱われます。たとえばlaughは単独で使えます。enjoyは普通目的語が必要です。putは “Put it.” だけでは多くの場合情報不足で、“Put it on the desk.” のように「どこへ」まで必要です。tellは人＋内容を取れますがsayは同じ形になりません。つまり「動詞＋後ろの形」を一つのセットとして覚えると、前置詞や語順のミスが減ります。',
        explainTC: '要穩定使用英文，比起先問「第幾句型」，更重要的是問「這個動詞後面能放什麼？」Cambridge Grammar 也把 verb pattern 視為動詞後接 object、preposition、infinitive、-ing、clause 等的模式。laugh 可單獨；enjoy 通常需要受詞；put 常還需要「放在哪裡」；tell 可接人＋內容，但 say 不能完全同樣使用。把「動詞＋後接結構」一起學，可大幅減少介系詞與語序錯誤。',
        rulesJP: [
          '動詞を単語カード1語だけで覚えず、最低1つ「型」も一緒に覚える。',
          'arrive in/at + place / reach + place。',
          'listen to + thing / hear + thing。',
          'talk about + topic / discuss + topic。',
          'say + content / tell + person + content。',
          'explain + thing + to person / give + person + thing。',
          'put + object + placeが基本。',
          'make + object + adjective / make + object + base verbなど、同じ動詞にも複数patternがある。',
          '意味は動詞1語だけでなくpattern全体で決まることがある。'
        ],
        rulesTC: [
          '不要只背單一動詞，至少連一個常用結構一起背。',
          'arrive in/at + place / reach + place。',
          'listen to + thing / hear + thing。',
          'talk about + topic / discuss + topic。',
          'say + content / tell + person + content。',
          'explain + thing + to person / give + person + thing。',
          'put 通常要 object + place。',
          'make 等可有多種 pattern。',
          '意思常由整個 pattern 決定。'
        ],
        examples: [
          ['We arrived at the station.', 'arrive + at + 地点。', 'arrive + at + 地點。'],
          ['We reached the station.', 'reach + stationを直接。', 'reach 直接接 station。'],
          ['I listened to the podcast.', 'listen to。', 'listen to。'],
          ['I heard a strange noise.', 'hear + object。', 'hear 直接接受詞。'],
          ['We talked about the problem.', 'talk about + topic。', 'talk about + topic。'],
          ['We discussed the problem.', 'discuss + topic。', 'discuss 直接接受詞。'],
          ['She said that she was tired.', 'say + content。', 'say + 內容。'],
          ['She told me that she was tired.', 'tell + person + content。', 'tell + 人 + 內容。'],
          ['He explained the rule to me.', 'explain + thing + to person。', 'explain + 事物 + to 人。'],
          ['He gave me the rule sheet.', 'give + person + thing。', 'give + 人 + 東西。'],
          ['Put the book on the table.', 'put + object + place。', 'put + 受詞 + 地點。'],
          ['The joke made me laugh.', 'make + object + base verb。', 'make + 受詞 + 原形動詞。']
        ],
        contrasts: [
          ['I arrived the station.', 'I arrived at the station.', 'arriveのpatternを覚える。', '記住 arrive pattern。'],
          ['I listened music.', 'I listened to music.', 'listen toのセット。', 'listen to 是一組。'],
          ['She said me the answer.', 'She told me the answer. / She said the answer to me.', 'say/tellでpatternが違う。', 'say/tell 結構不同。'],
          ['He explained me the rule.', 'He explained the rule to me.', 'explainは通常personを最初の直接目的語にしない。', 'explain 通常不直接先接 person。'],
          ['Put the book.', 'Put the book on the table.', 'putは「どこへ」まで必要なことが多い。', 'put 常需要說明放到哪裡。']
        ],
        drillJP: '自分専用のVerb Pattern辞書を作る。まず20動詞について「動詞」「後ろの型」「自然な例文」「やりやすい間違い」の4列で記録する。',
        drillTC: '做自己的 Verb Pattern 字典。先選20個動詞，記錄「動詞」「後接結構」「自然例句」「常犯錯誤」四欄。'
      },
      {
        id: 'long-sentence-core',
        title: '長い英文でも怖くない — 「中心」と「あとから足した説明」に分ける',
        level: 'B1-B2',
        explainJP: '長文になると、SVOなどの記号以前に「どれが中心の文なのか」が見えなくなることがあります。コツは、まず時制を持つ中心動詞を探し、その動詞の「誰が/何が？」を見つけることです。そのあと、that / who / which / because / if / whenなどで始まる追加の節や、前置詞句、分詞による説明をいったん括弧に入れます。たとえば “The robot that we built last year works well in the factory.” の中心は “The robot works well.” です。that we built last year はrobotを説明する追加情報。英語を長いまま全部同時処理しようとせず、中心→追加説明の順で読むと安定します。',
        explainTC: '長句時，最難的常不是 SVO 標籤，而是看不出哪一段是核心。方法是先找帶時態的核心動詞，再找「誰/什麼」做這個動作。接著把 that/who/which/because/if/when 等引導的附加子句、介系詞片語、分詞說明暫時括起來。例如 “The robot that we built last year works well in the factory.” 核心是 “The robot works well.”；that we built last year 只是說明 robot。不要一次處理整條長句，先核心，再附加。',
        rulesJP: [
          'まず「文全体の時制を担当する動詞」を探す。',
          'その動詞について「誰が/何が？」を探す。',
          'who/which/thatで始まる部分は前の名詞説明であることが多い。',
          'because/if/when/althoughなどは理由・条件・時間などの別の節を始める。',
          '前置詞句は長くても中心動詞ではない。',
          '-ing/-edのかたまりは追加説明の場合があるので、時制を持つ動詞と区別する。',
          '最後に中心文だけを言い直せるか確認する。'
        ],
        rulesTC: [
          '先找負責整句時態的動詞。',
          '再找這個動詞的「誰/什麼」。',
          'who/which/that 常引導名詞的附加說明。',
          'because/if/when/although 常開始理由/條件/時間子句。',
          '介系詞片語再長也不是核心動詞。',
          '-ing/-ed 片語可能是附加說明，要和有限動詞分開。',
          '最後試著只說出核心句。'
        ],
        examples: [
          ['The robot that we built last year works well.', '中心: The robot works well. / that...はrobot説明。', '核心：The robot works well。'],
          ['The students who joined the project are excited.', '中心: The students are excited. / who...はstudents説明。', '核心：The students are excited。'],
          ['Although the test failed, we learned a lot.', '中心: we learned a lot. / Although節は背景。', '核心：we learned a lot。'],
          ['We stopped the experiment because the motor overheated.', '中心: We stopped the experiment. / because以下は理由。', '核心：We stopped the experiment。'],
          ['Data collected from three cameras was synchronized.', '中心動詞はwas synchronized。collectedはdataの説明。', '核心動詞是 was synchronized；collected 說明 data。'],
          ['The model running on the server uses less memory.', '中心: The model uses less memory. / running...はmodel説明。', '核心：The model uses less memory。'],
          ['If the sensor detects an obstacle, the robot stops.', '主節の中心: the robot stops. / if節は条件。', '主句核心：the robot stops。'],
          ['The device on the table near the window belongs to me.', '中心: The device belongs to me. / on...near...は場所説明。', '核心：The device belongs to me。'],
          ['What she told me was surprising.', 'What she told me全体が主語。was surprisingが主節の中心。', 'What she told me 整體作主詞；was surprising 是主句。'],
          ['The fact that the system recovered quickly surprised everyone.', '中心: The fact surprised everyone. / that節がfact内容。', '核心：The fact surprised everyone。']
        ],
        contrasts: [
          ['The students working in the lab.', 'The students working in the lab are busy.', 'workingは説明で、前者には主節の中心動詞がない。', 'working 是說明；前者缺主句核心動詞。'],
          ['Because the motor overheated.', 'We stopped because the motor overheated.', 'because節だけでは通常独立した完全文にならない。', 'because 子句通常不能單獨作完整句。'],
          ['The robot that we built last year.', 'The robot that we built last year works well.', '関係節を含む名詞句だけで終わっている。', '只有含關係子句的名詞片語，缺主句。']
        ],
        drillJP: '150〜250語の英文を1つ選び、①中心動詞に下線 ②誰が/何がを丸 ③追加説明を括弧 ④中心文だけを書き出す、を10文で行う。',
        drillTC: '選150–250字英文，做10句：①核心動詞畫線 ②圈出誰/什麼 ③附加說明加括號 ④只抄核心句。'
      }
    ]
  };
})();