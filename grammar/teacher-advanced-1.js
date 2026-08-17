(() => {
  window.grammarTeacherNotes = window.grammarTeacherNotes || {};
  Object.assign(window.grammarTeacherNotes, {
    'adjectives-adverbs': {
      childJP: '形容詞は「人や物がどんなものか」を説明し、副詞は「動作をどうするか」「どのくらいか」「文全体をどう見るか」を説明します。-lyだけを見て判断せず、「何を説明している？」を見るのが大切です。',
      teacherJP: 'adjective/adverb distinctionはformよりsyntactic functionで教えます。linking verbs後のsubject complement、attributive adjective、manner/frequency/sentence adverbsを分け、good/well, hard/hardly, late/latelyなど形と意味の罠を扱います。degree modificationではgradable/extreme adjectiveのcompatibilityとregisterを示します。',
      decisionJP: ['名詞そのものを説明→adjective。','be/seem/look/feel等の後で主語説明→adjective。','動詞のやり方→manner adverb。','文全体への評価→sentence adverb。','-lyの形だけで決めず、何を修飾しているか確認。'],
      warningsJP: ['look tiredをlook tiredlyにしない。','work goodではなくwork well。','hardとhardlyは意味が違う。','friendly/lovelyは-lyでもadjective。','very impossibleよりabsolutely impossibleが自然。'],
      extraExamples: [['She is careful.','carefulはSheを説明。'],['She drives carefully.','carefullyはdrivesを説明。'],['The soup smells wonderful.','linking verb後はadjective。'],['He speaks English well.','wellはspeaksを修飾。'],['He works hard.','hard=一生懸命。'],['He hardly works.','hardly=ほとんど〜ない。'],['I usually study at night.','frequency。'],['She is usually calm.','beの後。'],['Fortunately, nobody was hurt.','sentence adverb。'],['This is absolutely impossible.','extreme adjective。'],['The result is extremely important.','gradable。'],['It was a friendly conversation.','friendlyはadjective。']]
    },
    'comparison': {
      childJP: '比較は「Aの方がBより大きい」だけではありません。「同じくらい」「少しだけ上」「ずっと上」「2倍」「〜すればするほど」まで、差の見せ方を選ぶ文法です。',
      teacherJP: 'comparisonはmorphology (-er/more)だけでなくsemantic scaleとcomparison setを教えます。比較対象が論理的に同種か、than/asの省略部分が明確か、degree modifierが適切かを重視します。advanced comparisonではmultiplicative、correlative、no more than/not more thanのstance差にも触れます。',
      decisionJP: ['2者比較か集合内最大か。','短語/長語に合わせ-er/moreを選ぶ。','比較対象が同じ種類か。','差の大きさをmuch/slightly/by amountで示す必要があるか。','同程度ならas...as、低程度ならless/not as...asを検討。'],
      warningsJP: ['more easierの二重比較を避ける。','very betterではなくmuch better。','as faster asではなくas fast as。','My salary is higher than my brotherのような不整合比較を避ける。','twice more...よりtwice as...asが明確。'],
      extraExamples: [['This model is faster than the old one.','基本比較。'],['This is the most reliable version.','最上級。'],['She is better at math than I am.','better不規則。'],['This option is as safe as the other one.','同程度。'],['The new motor is not as heavy as the old one.','劣位比較。'],['This design is less expensive.','less。'],['The new version is much faster.','大差。'],['Accuracy is slightly higher.','小差。'],['Performance improved by 15 percent.','差を数値化。'],['This sensor is twice as expensive as that one.','倍数。'],['The more you practise, the easier it becomes.','相関比較。'],['My salary is higher than my brother’s.','比較対象を揃える。']]
    },
    'prepositions': {
      childJP: '前置詞は日本語の「に・で・へ」を英語に置き換えるゲームではありません。物と物、時間と出来事、人と目的の「関係」を小さな図として表す言葉です。',
      teacherJP: 'prepositionsはspatial schemaとlexical collocationを分離して教えます。at/in/onのcore imageは役立ちますが、全用法を画像規則だけで予測できると誤解させません。to/for/by/withもsemantic relationを説明したうえで、depend on/interested in/solution toなどlexical patternはchunkとして学習させます。',
      decisionJP: ['物理/時間関係ならcore imageが使えるか。','at=point, in=inside, on=surface/contactのイメージを試す。','受け手/方向ならto、受益/目的/期間ならforを検討。','動詞・形容詞・名詞との固定collocationか辞書で確認。','日本語助詞から直接決めない。'],
      warningsJP: ['in Mondayではなくon Monday。','arrive to Tokyoではなくarrive in Tokyo。','explain for meではなくexplain to me。','interested aboutではなくinterested in。','discuss aboutのように不要な前置詞を足さない。'],
      extraExamples: [['Meet me at the station.','point。'],['I live in Tokyo.','inside area。'],['The picture is on the wall.','surface。'],['The class starts at nine.','time point。'],['I will see you on Friday.','day。'],['I moved here in 2022.','year。'],['I sent the file to my professor.','recipient。'],['I made dinner for my friend.','beneficiary。'],['I studied for three hours.','duration。'],['It depends on the weather.','collocation。'],['She is interested in robotics.','adjective collocation。'],['We need a solution to the problem.','noun collocation。']]
    },
    'infinitives-gerunds': {
      childJP: 'to doとdoingは「未来と過去」で簡単に分けられるものではありません。動詞ごとに「次にどんな形を連れてくるか」という相性があり、形を変えると意味が変わる動詞もあります。',
      teacherJP: 'to-infinitive/gerund choiceはfalse semantic shortcutを避け、lexical complement patternを中心にします。want/decide/plan系、enjoy/avoid/consider系、dual-complement verbsを分類し、remember/stop/try/regret/meanなどmeaning-changing patternsをminimal pairsで徹底比較します。purpose infinitive等のclause-level functionは別に整理します。Cambridgeもverb patternごとにto/-ingを扱っています。',
      decisionJP: ['まず前の動詞のdictionary patternを確認。','verb + to系かverb + -ing系か。','両方可能なら意味が同じか変わるか。','preposition後なら通常-ing。','目的を表す独立to-infinitiveか、動詞補語かを分ける。'],
      warningsJP: ['enjoy to doを避ける。','decide doingではなくdecide to do。','suggest someone to doを標準形と思わない。','stop doingとstop to doを混同しない。','remember doing / remember to doの時間関係を説明できるようにする。'],
      extraExamples: [['I decided to apply.','decide + to。'],['She hopes to study abroad.','hope + to。'],['We managed to solve the problem.','manage + to。'],['I enjoy learning languages.','enjoy + ing。'],['We avoided using that method.','avoid + ing。'],['They considered changing the design.','consider + ing。'],['Remember to lock the door.','これからのtask。'],['I remember locking the door.','過去のmemory。'],['He stopped smoking.','喫煙をやめた。'],['He stopped to smoke.','吸うため立ち止まった。'],['Try restarting the computer.','方法を試す。'],['I tried to restart the computer.','努力した。'],['I went outside to get some air.','purpose。'],['The tool is easy to use.','adjective + infinitive。']]
    },
    'participles': {
      childJP: '-ingと-edは「動詞の形」から、人や物を説明する言葉にも変身します。boringは「人を退屈させる側」、boredは「退屈を感じた側」のように、どちら側から出来事を見るかが違います。',
      teacherJP: 'participlesはvoice/aspect relationを基盤にemotion adjectives、attributive/postpositive modification、reduced clausesへ橋渡しします。-ing=active/progressive、-ed=passive/resultという傾向は有効ですが絶対規則ではないため、head nounとのsemantic relationを見る訓練をします。perfect participleはanteriorityとlogical subjectに重点を置きます。',
      decisionJP: ['修飾される名詞が出来事を引き起こす側か、受ける側か。','短い修飾なら前置、長い分詞句なら後置が自然か。','-ing phraseのlogical subjectが名詞/主節主語と一致するか。','過去よりさらに先行を明示するならhaving + p.p.を検討。'],
      warningsJP: ['I am boringを「退屈している」としない。','the collected yesterday dataのような長い前置修飾を避ける。','dangling participleを作らない。','-edは単純な過去意味ではなく受動/結果関係を見る。'],
      extraExamples: [['The movie was boring.','映画が感情を起こす。'],['I was bored.','人が感情を経験。'],['The instructions are confusing.','instructionsが混乱を起こす。'],['The students are confused.','studentsが混乱。'],['We replaced the broken cable.','結果状態。'],['Students working in the lab need badges.','active postmodifier。'],['Data collected yesterday was incomplete.','passive postmodifier。'],['The man standing by the door is my teacher.','長い-ing後置。'],['Having finished the test, I went home.','先行event。'],['Having been warned, they moved carefully.','passive anteriority。'],['Driving home, I saw an accident.','logical subject=I。'],['Driving home, the rain started.','dangling error。']]
    },
    'passive-causative': {
      childJP: '受動態は「能動文を反対にする問題」ではありません。「誰がしたか」より「何がどうされたか」を話の主役にしたいときに使います。使役は「自分がする」のではなく、人にさせる・してもらう関係を作ります。',
      teacherJP: 'passiveはtransformation drillからinformation structureへ移します。agent omissionの理由（unknown/obvious/unimportant/general）とtopic continuityを教え、technical writingでのfunctionを示します。causativeではhave/get something doneとmake/let/have/get person patternをsemantic forceとform両面で比較します。',
      decisionJP: ['話題にしたいのはactorかaffected entityか。','actorが不明/自明/不要ならpassiveが自然か。','by-agentを本当に言う価値があるか。','サービス依頼ならhave/get + object + p.p.か。','人を動かすならmake/let/have/getの意味差を選ぶ。'],
      warningsJP: ['自動詞happen/arriveなどを受動にしない。','modal passiveのbeを落とさない。','have my laptop repairedを「自分で修理した」と解釈しない。','make O to doではなくactiveではmake O do。','makeのpassiveはbe made to do。'],
      extraExamples: [['The samples were collected in July.','process focus。'],['The file was deleted accidentally.','actor unimportant。'],['English is spoken worldwide.','general agent。'],['The form must be submitted by Friday.','modal passive。'],['The system needs to be updated.','passive infinitive。'],['My bike got stolen.','get passive。'],['I had my laptop repaired.','service causative。'],['She got her hair cut.','service。'],['He had his phone stolen.','adverse experience。'],['The teacher made us rewrite it.','force。'],['They let me leave early.','permission。'],['I had the assistant check the file.','arrangement。'],['I got him to check the file.','persuasion/effort。']]
    },
    'phrasal-verbs': {
      childJP: 'phrasal verbは「動詞＋小さい単語」を別々に訳すより、セットで一つの新しい動詞として覚えます。ただしup/out/off/onにはイメージがあり、意味を覚える助けになります。',
      teacherJP: 'phrasal/multi-word verbsはlexical unitとして、separability、pronoun placement、three-word verbs、particle semantic networks、registerを統合します。全てinformalという誤解を避け、carry outなどformal contextでも高頻度の表現を含めます。',
      decisionJP: ['その表現はseparableかinseparableか辞書で確認。','separableで目的語がpronounならparticle前に置く。','three-word verbなら末尾prepositionまでchunk化。','particleのcore imageを記憶補助に使う。','formal writingでsingle-word synonymの方が適切か検討。'],
      warningsJP: ['turn off itではなくturn it off。','look after himを分離しない。','look forward to hearではなくto hearing。','phrasal verb=全部informalではない。','literal verb + prepositionとidiomatic phrasal verbを区別する。'],
      extraExamples: [['Turn the light off.','separable。'],['Turn it off.','pronoun middle。'],['Pick the package up.','separable。'],['She looks after her brother.','inseparable。'],['I ran into an old friend.','inseparable idiom。'],['I cannot put up with the noise.','three-word。'],['I look forward to hearing from you.','to=preposition。'],['We used up all the memory.','up=completion。'],['I found out what happened.','out=discovery。'],['Please carry on.','on=continuation。'],['We postponed the meeting. / We put off the meeting.','register alternative。'],['We carried out an experiment.','formalでも自然。']]
    },
    'verb-complementation': {
      childJP: '動詞は「意味」だけでなく「後ろに何を連れて歩けるか」という性格を持っています。tellは人＋内容を連れてこられますが、sayは同じ並べ方ができません。suggestも独自のルールがあります。',
      teacherJP: 'verb complementationは自然な英語の中核です。that/wh-clause, object + to-infinitive, bare infinitive, -ing, prepositional complementをpattern familiesとして教え、lexical selectionを辞書参照習慣へ結びます。pattern changeによるmeaning changeを上級項目として扱い、syntactic labelよりusage chunkを優先します。',
      decisionJP: ['動詞の後ろにclause/object/to/-ingのどれが許されるか確認。','人を直接objectに取れるか。','object + toかbare infinitiveか。','同じ動詞で別patternにすると意味が変わるか。','不確実なら信頼できるlearner dictionaryのgrammar patternを見る。'],
      warningsJP: ['suggest me to doを避ける。','explain me somethingを避ける。','say me...とtell me...を混同しない。','make/let後にtoを入れない。','see O doとsee O doingのviewpoint差を無視しない。'],
      extraExamples: [['I think that it will work.','that-clause。'],['I know why it failed.','wh-clause。'],['I wonder whether we should wait.','whether clause。'],['She told me to wait.','object + to。'],['The tool allows users to export data.','object + to。'],['They made us wait.','object + bare。'],['I saw him cross the street.','whole event。'],['I saw him crossing the street.','event in progress。'],['She suggested waiting.','-ing。'],['She suggested that we wait.','that-clause。'],['This change means rewriting the code.','mean + ing=result entails。'],['I meant to call you.','mean + to=intend。'],['The device needs repairing.','need -ing=passive meaning。']]
    },
    'relative-clauses': {
      childJP: '関係節は「名詞の後ろに小さな説明文をくっつける」仕組みです。「どの人？」「どの物？」を選ぶ説明と、もう分かっている人・物におまけ情報を足す説明があります。',
      teacherJP: 'relative clausesはpronoun choice穴埋めからinformation functionへ移します。defining vs non-definingのreferential difference、subject/object gap、object relative omission、whose/preposition placement、reductionを段階化します。commaは発音上のpauseだけでなくmeaning distinctionを作ることをminimal pairsで示します。',
      decisionJP: ['そのrelative clauseは名詞を特定するため必須か、追加情報か。','gapがsubjectかobjectか。subject relativeは省略不可。','non-definingならcommaとthat制限を確認。','所有ならwhose、formalならprep + whom/whichを検討。','冗長ならreduced relativeが可能か。'],
      warningsJP: ['主格who/thatを省略しない。','non-definingでthatを安易に使わない。','comma有無を飾りと思わない。意味が変わる。','preposition + thatを作らない。','reduced formのactive/passiveを逆にしない。'],
      extraExamples: [['The student who asked the question stayed.','subject relative。'],['The book that I bought was expensive.','object relative。'],['The method we used worked well.','object marker omitted。'],['My laptop, which I bought last year, is slow.','non-defining。'],['Dr Lee, who leads the team, will speak first.','additional info。'],['The test failed, which surprised us.','whole-clause which。'],['A company whose products I use contacted me.','whose。'],['The person to whom I spoke was helpful.','formal prep fronting。'],['The person who I spoke to was helpful.','conversational stranding。'],['Students working here need badges.','reduced active。'],['The data collected yesterday is incomplete.','reduced passive。'],['She was the first person to arrive.','relative infinitive。']]
    },
    'noun-clauses': {
      childJP: '名詞節は「文まるごと」を、物の名前のように扱う仕組みです。“I know the answer.” のanswerの場所に “what he said” や “that it failed” のような小さな文を入れられます。',
      teacherJP: 'noun clausesはconstituency awarenessを育てる重要章です。that-clause, wh-clause, whether/if-clauseをsubject/object/complement positionsで示し、embedded question orderを質問章と接続します。dummy it/extrapositionを導入し、heavy subjectを後置するinformation packagingへ橋渡しします。',
      decisionJP: ['節全体が名詞の位置（主語/目的語/補語）に入っているか。','命題内容ならthat-clauseか。','未知の内容ならwh-clauseか。','yes/no内容ならwhether/ifか。','embedded clause内部はstatement orderになっているか。'],
      warningsJP: ['I know what did he sayを避ける。','the fact which it failedではなくthe fact that it failed。','preposition後やwhether toではwhetherを使う。','長いthat-clause主語を常に文頭に置く必要はない。'],
      extraExamples: [['I think that the result is correct.','that object clause。'],['The fact that it failed matters.','noun complement。'],['It is clear that we need more data.','extraposed content。'],['I know why it failed.','wh object clause。'],['What you said makes sense.','wh clause as subject。'],['This is how the system works.','complement。'],['I do not know whether it will work.','yes/no content。'],['We must decide whether to continue.','whether + to。'],['It depends on whether we have time.','after preposition。'],['Do you know where he is?','embedded order。'],['What she needs is more time.','free relative。'],['It surprised me that he agreed.','heavy clause later。']]
    }
  });
})();