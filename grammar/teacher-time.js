(() => {
  window.grammarTeacherNotes = window.grammarTeacherNotes || {};
  Object.assign(window.grammarTeacherNotes, {
    'present-time': {
      childJP: '現在形は「今やっている」の形ではありません。「いつもそう」「ふだんそう」「それは事実」「予定表でそう決まっている」という、広い現在を表す形です。今まさに途中なら進行形を使うことが多いです。',
      teacherJP: 'present simpleを「現在」とだけ訳すと進行形との混同が起きます。中心概念をunbounded/general validityとして示し、habit, repeated event, general truth, state, timetableを同じ広い時間枠で理解させます。三単現-sは意味ではなくagreement markerなので、内容理解と形の自動化を分けて練習します。stative/dynamic distinctionは「動詞リスト」ではなく、その文脈でstateとして見ているかactivityとして見ているかを説明します。',
      decisionJP: ['「今この瞬間だけ」か、「広い期間で成り立つ」かを見る。','習慣・反復・事実・状態ならpresent simpleを第一候補にする。','主語がhe/she/it相当なら三単現-sを確認する。','know/need/belongなどstateなら通常progressiveにしない。','未来でも時刻表・time/condition clauseならpresent simpleが使われるか確認する。'],
      warningsJP: ['I am study...のようにbe + 原形を作らない。','現在形=今の動作と考えない。','状態動詞をすべて絶対に進行形不可と教えない。意味が変わればdynamic useがある。','when/if節の未来に機械的にwillを入れない。'],
      extraExamples: [
        ['I get up at seven every day.','習慣。'],['She works at a hospital.','比較的安定した事実。'],['My brother plays tennis on Sundays.','反復。'],['Water freezes at 0°C.','一般事実。'],['The Earth moves around the Sun.','一般事実。'],['I understand your question.','state。'],['This bag belongs to me.','関係状態。'],['I need more time.','必要という状態。'],['He thinks the plan is good.','think=意見。'],['He is thinking about the plan.','think=検討活動。'],['The train leaves at 8:10 tomorrow.','schedule。'],['The class starts next Monday.','固定予定。'],['I will call you when I arrive.','future time clauseはpresent。'],['If it rains tomorrow, we will stay home.','if節はpresent。'],['She usually is? → She is usually tired.','frequency adverbはbeの後が基本。']]
    },
    'past-time': {
      childJP: '過去形は「昨日」という印だけではありません。話している人が、その出来事を「今とは切り離された箱」に入れて話す感じです。過去進行は、その箱の中のある瞬間を止めて「そのとき途中だった」と見せます。',
      teacherJP: 'past simpleは単なるpast timestampではなくtemporal remoteness/completed framingを教えるとpresent perfectやsecond conditionalへの橋になります。past continuousは「長い動作」とだけ説明せず、reference pointからevent内部を見るimperfective viewpointとして導入します。used to/wouldはhabitだけでなくstate compatibilityとdiscourse setupの差を示します。',
      decisionJP: ['出来事を現在から切り離された過去として述べるならpast simple。','過去の特定時点で「途中」を見せたいならpast continuous。','背景と割り込みならbackground=continuous、event=simpleを検討。','過去の習慣・状態が今と違うならused to。','物語中の繰り返し行動ならwouldも可能だが、stateにはused toが安全。'],
      warningsJP: ['didを使った後にwent/startedなど過去形を重ねない。','whenがあるから必ずpast continuousというルールにしない。','used to / be used to / get used toを混同しない。','wouldを過去のstateへ機械的に使わない。'],
      extraExamples: [
        ['I moved to Japan in 2022.','明確な完結過去。'],['She called me last night.','過去の出来事。'],['We did not finish the test.','did + base。'],['Did you see the message?','did + see。'],['At nine last night, I was studying.','その時点で途中。'],['I was walking home when it started to rain.','背景＋割り込み。'],['While I was cooking, my friend was washing the dishes.','同時進行。'],['The sun was shining and birds were singing.','物語の背景。'],['I used to live in Shanghai.','過去状態、今は違う含意。'],['I used to be shy.','stateなのでused to。'],['Every summer, we would visit my grandparents.','反復行動。'],['When I was a child, my father would read to me every night.','物語内habit。'],['I am used to waking up early.','「慣れている」で別構造。'],['I am getting used to the new schedule.','慣れつつある。'],['When I arrived, the meeting started.','到着時に開始。']]
    },
    'future-forms': {
      childJP: '英語には「未来だからwill」という一本のスイッチはありません。今決めたのか、前から決めていたのか、約束済みなのか、時刻表なのか、未来の途中なのかで形を選びます。',
      teacherJP: 'future referenceはform-meaning mappingとして教えます。willはinstant decision/willingness/prediction、be going toはprior intention/current evidence、present continuousはarrangement、present simpleはschedule。future continuous/perfectはfuture reference pointに対するaspectとして扱います。「未来時制」という単純ラベルより、speaker perspectiveとdegree of arrangementを軸にした方が実用的です。',
      decisionJP: ['話している今決めた/約束/意志ならwillを検討。','話す前からの意図・現在の証拠ならgoing to。','人との約束・予約など具体的手配済みならpresent continuous。','時刻表・公式scheduleならpresent simple。','未来のある時点で途中ならfuture continuous。','未来のdeadlineまでに完了ならfuture perfect。'],
      warningsJP: ['未来=全部willにしない。','going toを単に「近い未来」とだけ教えない。','present continuousの未来は時間表現/文脈が必要。','by + future timeでfuture perfectが自然か見る。'],
      extraExamples: [
        ['The phone is ringing. I will answer it.','今決めた。'],['I will help you with that.','offer。'],['I think the test will pass.','話し手予測。'],['I am going to study tonight.','事前意図。'],['Look at that glass! It is going to fall.','現在の証拠。'],['We are going to redesign the arm.','計画。'],['I am meeting my professor at two.','具体的arrangement。'],['We are flying to Taipei on Friday.','予約済み予定。'],['The train leaves at 6:40.','timetable。'],['The conference begins on Monday.','official schedule。'],['This time tomorrow, I will be taking the test.','未来の途中。'],['Will you be using the lab this afternoon?','相手の予定を中立的に尋ねる。'],['By Friday, I will have finished the report.','deadlineまでに完了。'],['By next year, she will have lived here for ten years.','未来基準までの継続。'],['By noon, the system will have been running for six hours.','future perfect progressive。']]
    },
    'progressive-aspect': {
      childJP: '進行形は、出来事を写真ではなく「動画の途中」で見る形です。始まっていて、まだその場面の中にいる感じです。だから今だけでなく、過去や未来の途中、一時的な生活、変化していることにも使えます。',
      teacherJP: 'progressiveを「今〜している」とだけ教えるのを避け、imperfective internal viewpointとして一貫させます。temporary situation, developing change, repeated behaviour with affect, future arrangementまで、eventをbounded wholeではなく内部から見るという共通概念で説明します。stative verbsの制約もlexical prohibitionではなくaspect compatibilityとして扱います。',
      decisionJP: ['基準時点でeventの途中を見せたいか。','一時的/暫定的な状態として提示したいか。','変化が進行中か。','always/constantlyと組み合わせて話し手の感情を出しているか。','動詞がstate meaningならsimpleの方が自然でないか確認する。'],
      warningsJP: ['progressive=現在だけではない。','live/workなどもtemporary meaningならprogressive可能。','always + progressiveを単なる頻度と思わない。','know/belongなどstateを通常progressiveにしない。'],
      extraExamples: [
        ['I am reading now.','現在途中。'],['She is talking on the phone.','現在途中。'],['At ten yesterday, I was still working.','過去基準の途中。'],['This time tomorrow, we will be presenting.','未来基準の途中。'],['I am staying with a friend this week.','一時的。'],['I am working from home this month.','暫定。'],['The weather is getting warmer.','変化進行。'],['The system is becoming more stable.','変化。'],['More students are using AI tools.','trend。'],['He is always losing his keys.','反復＋苛立ち。'],['She is always helping other people.','反復＋称賛になり得る。'],['I think you are right.','think=opinion。'],['I am thinking about changing jobs.','thinking=mental activity。'],['The soup tastes good.','taste=state/sense。'],['The chef is tasting the soup.','taste=deliberate activity。']]
    },
    'perfect-aspect': {
      childJP: '完了形は「昔の出来事」を難しく言う形ではありません。「ある基準の時点より前のことを、その基準の時点につなげて見る」形です。現在完了なら基準は今、過去完了なら基準は過去、未来完了なら基準は未来です。',
      teacherJP: 'perfectをpast tenseの上級版として教えると混乱します。anteriority + current/reference relevanceという二軸で統一し、experience/result/continuation/unfinished timeは意味カテゴリーとして整理します。present perfect vs past simpleはevent timeそのものよりreference frameの違いを示します。past/future perfectへ同じ原理を拡張し、perfect progressiveはactivity/duration focusとの対比で説明します。',
      decisionJP: ['基準時は今/過去/未来のどこか決める。','その基準より前のeventを基準と関連づけたいか。','具体的に完結した過去時点を言うならpast simpleが自然か確認。','現在への結果・経験・未完了期間・継続ならpresent perfectを検討。','活動の長さ/継続過程を強調するならperfect progressiveを検討。'],
      warningsJP: ['last year/yesterdayのような完結過去とpresent perfectを安易に組み合わせない。','since=起点、for=期間。','past perfectを過去文すべてに乱用しない。順序を明確化する必要があるとき使う。','state verbsはperfect progressiveよりsimple perfectが自然なことが多い。'],
      extraExamples: [
        ['I have visited Kyoto three times.','experience。'],['Have you ever tried Taiwanese tea?','経験質問。'],['I have lost my keys.','現在結果。'],['She has already left.','今ここにいない結果。'],['We have finished the first part.','現在時点までの完了。'],['I have read two papers today.','todayが未完了。'],['I have lived here since 2022.','継続。'],['I have lived here for four years.','for期間。'],['I knew him in college.','完結した過去期間。'],['I have known him for ten years.','今まで継続。'],['When I arrived, the meeting had started.','過去基準より前。'],['She was tired because she had not slept well.','過去原因。'],['By Friday, I will have completed the draft.','未来基準までの完了。'],['I have been studying for three hours.','活動継続。'],['I have written five emails.','完成量に焦点。'],['I have been writing emails all morning.','活動過程に焦点。']]
    },
    'core-modals': {
      childJP: 'can / may / must / should / wouldは「事実そのもの」より、「話している人がそれをどう見ているか」を足す言葉です。「できる」「かもしれない」「絶対必要」「した方がいい」「もしなら」のように、確信・必要・距離・丁寧さを調整します。',
      teacherJP: 'modalityは日本語一語対応ではなくspeaker stance systemとして教えます。root/deontic（ability, permission, obligation）とepistemic（possibility, deduction）を混同しないよう同じmodalの複数meaningを比較します。could/wouldのpast formは時間だけでなくmodal remoteness/politenessを作る点が重要です。must/have to/shouldの否定意味差は高優先で自動化します。',
      decisionJP: ['能力/許可/義務など行為条件を言うのか、可能性/推論を言うのかを分ける。','話し手の確信度・強さはどの程度か。','丁寧さ/心理的距離を置きたいか。','must notとdo not have toの意味差を確認する。','modalの後ろはbase formか確認する。'],
      warningsJP: ['modal + to doにしない（ought toなど例外を除く）。','must not=不必要ではなく禁止。','couldを全部canの過去としない。','mightを固定パーセンテージで覚えない。','wouldをwillの単純過去だけと考えない。'],
      extraExamples: [
        ['I can swim.','ability。'],['Can I use this chair?','permission。'],['This can happen sometimes.','general possibility。'],['I could swim when I was five.','past ability。'],['Could you open the window?','polite request。'],['It could be a software issue.','tentative possibility。'],['It may rain later.','possibility。'],['May I come in?','formal permission。'],['This might explain the error.','tentative hypothesis。'],['You must wear a helmet.','strong obligation。'],['You must not touch this switch.','prohibition。'],['I have to submit this by Friday.','external necessity。'],['You do not have to come tomorrow.','absence of necessity。'],['You should back up your files.','advice。'],['The train should arrive soon.','expectation。'],['Would you like some coffee?','polite offer。'],['I would choose the cheaper option.','hypothetical stance。']]
    },
    'modal-perfects': {
      childJP: 'modal + have + 過去分詞は、「過去のことを今の自分が推理したり、後悔したり、別の可能性を考えたりする」道具です。過去そのものの事実ではなく、今の判断が入ります。',
      teacherJP: 'modal perfectはmodal meaning + perfect anteriorityの組み合わせとして分解して教えます。must have/can’t haveはpast deduction、might/may/could haveはpast possibility、should haveはcounterfactual evaluation、could haveはunrealized optionまたはpossibility、would haveはhypothetical resultです。同じcould haveの複数readingは文脈で比較します。',
      decisionJP: ['過去の事実を推理しているか、評価しているか、仮想しているかを決める。','強い肯定推論ならmust have、強い否定ならcan’t/couldn’t have。','可能性だけならmay/might/could have。','「すべきだったのに」ならshould have。','「できたのに/可能だった」ならcould have、「条件が違えば〜した」ならwould have。'],
      warningsJP: ['must have p.p.を「〜しなければならなかった」と解釈しない。','He must forgotではなくmust have forgotten。','should haveは現在のadviceではなく過去評価。','could haveは文脈により「できたのに」と「〜だった可能性」がある。'],
      extraExamples: [
        ['He must have forgotten the meeting.','strong past deduction。'],['She must have left already.','強い推論。'],['They may have missed the train.','past possibility。'],['The file might have been deleted accidentally.','受動past possibility。'],['He cannot have seen the message.','strong negative deduction。'],['I should have studied more.','regret/evaluation。'],['You should not have sent that email.','past criticism。'],['We ought to have checked the cable.','formal-ish evaluation。'],['I could have taken the train, but I drove.','unrealized option。'],['You could have told me earlier.','可能だった＋批判。'],['The error could have come from the sensor.','past possibility。'],['I would have helped if I had known.','hypothetical result。'],['She would have passed if she had studied.','counterfactual result。'],['They might have won if the weather had been better.','uncertain hypothetical result。']]
    },
    'questions-negation': {
      childJP: '英語の質問は、単語を全部ひっくり返すのではありません。「文法を手伝う最初の言葉」を主語の前に出すのが基本です。beがあればbe、canがあればcan、haveがあればhave。何も助ける言葉がなければdoを呼びます。',
      teacherJP: 'question formationを「主語と動詞を逆にする」と教えると一般動詞・perfect・modal・subject questionで破綻します。first auxiliary principleとして統一し、do-supportをその特殊ケースにします。WH questionではgap roleを意識し、WHがsubjectならinversion/do-supportが起きないことを対比します。embedded questionsはinterrogative meaningを保持しつつdeclarative word orderへ戻る点を強調します。negative questionsはpolarity expectation/pragmaticsまで扱います。',
      decisionJP: ['文にbe/modal/perfect haveなど最初のauxiliaryがあるか探す。','yes/no questionならそのauxiliaryを主語前へ。なければdo/does/did。','WH語が何を尋ねているか確認。WH自身がsubjectなら通常do-support不要。','embedded questionなら内部をstatement orderへ戻す。','negative questionなら話し手の期待・驚きが含まれるか確認。'],
      warningsJP: ['Do you are...?を作らない。','Who did call you?を通常のsubject questionにしない。','Do you know where is he?ではなくwhere he is。','negative questionへのYes/Noを日本語感覚で逆転させない。'],
      extraExamples: [
        ['Are you ready?','beが前へ。'],['Is she at home?','be question。'],['Can you swim?','modalが前へ。'],['Should we wait?','modal。'],['Have you finished?','perfect have。'],['Do you like coffee?','一般動詞なのでdo。'],['Does he work here?','does + base。'],['Did they call you?','did + base。'],['What did you buy?','what=object。'],['Where do you live?','where=place adjunct。'],['Why did she leave?','why=reason。'],['Who called you?','who=subjectなのでdoなし。'],['What happened?','what=subject。'],['Do you know where he is?','embedded = statement order。'],['Could you tell me when the store closes?','embedded。'],['I wonder whether she received it.','yes/no embedded。'],["Aren't you tired?",'肯定をある程度予想。'],["Didn't she tell you?",'驚き/確認。']]
    }
  });
})();