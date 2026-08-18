(() => {
  window.grammarTeacherNotes = window.grammarTeacherNotes || {};
  Object.assign(window.grammarTeacherNotes, {
    'be-system': {
      childJP: 'be動詞は「＝」の記号ではありません。「この人・物は何者？」「どんな状態？」「どこにいる？」を言うときの中心になる言葉です。そして別の動詞を助けて「今している」「〜される」を作る仕事もします。',
      teacherJP: 'beを「です・ます」と訳して覚えると、一般動詞との混同が起きます。まずbe単独の役割を、identity（正体）、state（状態）、location（位置）に分けます。その後、auxiliary beとしてprogressiveとpassiveを作る別の仕事を教えます。学習者は「beの後ろに何があるか」を見れば機能をかなり判断できます。名詞・形容詞・場所表現なら主語の説明、V-ingなら進行、過去分詞なら受動が基本です。',
      decisionJP: ['beの後ろを見る。名詞/形容詞/場所なら主語の説明か確認する。','be + V-ingなら「途中の活動」かを見る。','be + p.p.なら「主語がその行為を受ける」受動かを見る。','there + beなら、新しい人・物の存在を会話に登場させているかを見る。','一般動詞をそのままbeの後ろに置かない。'],
      warningsJP: ['beを日本語の「です」だけで覚えない。','She is work.のようにbe＋一般動詞原形を作らない。','There isとA is thereを同じ意味だと思わない。前者は存在導入、後者のthereは場所。','be + p.p.が必ず受動とは限らず、状態形容詞化している場合もあるので文脈を見る。'],
      extraExamples: [
        ['I am a student.','I = a student。正体を説明。'],['My father is a doctor.','father = doctor。'],['The room is cold.','room = cold。状態。'],['You look tired, but you are okay.','are okayで状態。'],['The keys are in my bag.','keysの場所。'],['Our lab is on the third floor.','labの位置。'],['There is a cat outside.','catを新情報として導入。'],['There are three errors in this file.','3 errorsの存在。'],['The robot is moving.','be + moving = 進行。'],['The students are studying.','今の活動。'],['The window was broken by the wind.','be + p.p. = 受動。'],['The report was written in English.','reportがwriteされた。'],['The data is being processed.','進行＋受動。'],['The door is closed.','文脈により「閉められている状態」または受動結果。'],['Is your brother at home?','be自身を前へ出して疑問。']]
    },
    'aux-do-have': {
      childJP: 'doとhaveは「自分で意味を持つ動詞」と「ほかの動詞を助ける道具」の2つの顔があります。doは質問・否定を作る交通整理係、haveは「今より前の出来事を今につなぐ」完了の道具になります。',
      teacherJP: 'do-supportは「疑問文ではdoを付ける」と丸暗記させるより、英語ではtense/personの情報を最初のauxiliaryが担当する、と教える方が一貫します。一般動詞文にはauxiliaryがないのでdoを呼び出し、does/didが文法情報を引き受けるため本動詞はbase formへ戻ります。haveはmain verb、light verb、perfect auxiliaryを区別し、have + p.p.を一つの文法装置として認識させます。',
      decisionJP: ['文にbe/modal/perfect haveなど既存の助動詞があるか探す。','なければ一般動詞文の疑問・否定にdo/does/didを使う。','does/didを使ったら本動詞は原形に戻す。','haveの後ろが名詞なら所有/活動、p.p.ならperfectの可能性を確認する。','肯定文のdoは「本当に」と強調する特殊用法か確認する。'],
      warningsJP: ['Does she works?ではなくDoes she work?。','Did you went?ではなくDid you go?。','be文にDo you are...?を足さない。','have + p.p.のp.p.を原形や過去形と混同しない。','I very understandではなくI understand very well / I do understand。'],
      extraExamples: [
        ['Do you like coffee?','一般動詞likeなのでdo。'],['Does he live here?','doesが三単現を担当。'],['Did they finish the test?','didが過去を担当。'],['I do not know.','否定をdoが作る。'],['She does not work on Sundays.','workは原形。'],['I did not see him yesterday.','seeは原形。'],['I do understand your concern.','肯定文doは強調。'],['She did call me.','「確かに電話した」。'],['I have two brothers.','have = 所有。'],['We have lunch at noon.','have + meal。'],['They had a meeting yesterday.','活動のhave。'],['I have finished my homework.','perfect auxiliary。'],['She has already left.','現在に関係する完了。'],['Had you met him before?','past perfectのhave。'],['I have had this laptop for three years.','最初のhave=perfect、had=所有。']]
    },
    'nouns-countability': {
      childJP: '英語の名詞は「一個、二個と数える箱」と「水や情報のように、かたまりとして見るもの」に分けて考えます。でも同じ単語でも意味が変わると箱にも材料にもなります。coffeeは飲み物一般なら数えず、a coffeeなら一杯です。',
      teacherJP: 'countabilityは単語に固定されたラベルではなく、話し手がその意味をbounded unitとして切り分けるかどうかです。初級では典型的なcount/uncountを自動化し、中級以降でcountability shiftを導入します。特にinformation, advice, research, equipment, evidence, progressなど、日中語話者が複数化しやすい高頻度名詞を重点的に扱います。単数count nounには通常determinerが必要という原則はarticles学習の前提です。',
      decisionJP: ['その意味を「1個、2個」と自然に区切れるか考える。','単数count nounならa/the/my/thisなどのdeterminerがあるか確認する。','uncount nounならa/anや複数-sを機械的に付けない。','数えたい場合piece/item/cup/typeなど単位表現が必要か考える。','同じ名詞の別意味ならcountabilityが変わらないか辞書で確認する。'],
      warningsJP: ['an advice / informations / equipments / researchesを安易に作らない。','researchは分野や研究活動一般ではuncountが多いが、individual studiesをresearch studiesなどで数える。','experienceは「経験一般」と「一つの体験」で可算性が変わる。','paperは材料ならU、論文/新聞ならC。','chickenは肉ならU、動物ならC。'],
      extraExamples: [
        ['I bought a chair.','chairは一個と数える。'],['We need three chairs.','複数可算。'],['Water is essential.','waterは物質として不可算。'],['I need some information.','informationは通常不可算。'],['She gave me good advice.','adviceは通常不可算。'],['We bought new equipment.','equipmentは通常不可算。'],['There is strong evidence for this.','evidenceは不可算。'],['We made good progress.','progressは不可算。'],['I ordered two coffees.','「2杯」の単位として可算化。'],['I read a paper about robotics.','paper = 論文で可算。'],['We need more paper for the printer.','paper = 紙素材で不可算。'],['Living abroad gave me valuable experience.','経験一般。'],['It was an unforgettable experience.','一回の体験。'],['There is no room in the car.','room = 空間で不可算。'],['The house has five rooms.','room = 部屋で可算。']]
    },
    'articles': {
      childJP: 'a / the / 何も付けない形は、「その名詞を聞いた人が、どれのことか分かる？」を伝える小さな案内板です。aは「まだどれか決まっていない一つ」、theは「あなたもどれか分かるよね」、無冠詞は「種類全体・もの一般」のイメージから始めます。',
      teacherJP: '冠詞は訳語対応ではなくreference managementとして教えます。最初にcountabilityとnumberを判断し、その後identifiabilityとgenericityを見る4段階が有効です。a/anはindefinite singular count referenceだけでなくclassification・rateにも使われ、theは「唯一」よりbroaderなidentifiabilityが核心です。zero articleはplural/uncount generic reference、institutional useなどを扱います。proper names/geographyは個別パターンを整理します。',
      decisionJP: ['名詞はcountableかuncountableか。','countableならsingularかpluralか。','聞き手が「どれか」を特定できるか。特定できるならthe系を検討。','特定できないsingular countならa/an系を検討。','plural/uncountを種類一般として話すならzero articleを検討。','固有名詞・地名・制度表現は既知のpatternを確認する。'],
      warningsJP: ['a=「一つ」、the=「その」とだけ訳して終わらない。','単数可算名詞を裸で置くエラーに注意。','theを「前に出た名詞だけ」と教えない。共有状況・後置修飾・唯一性でも使う。','一般概念にtheを過剰使用しない：Technology changes quickly.','go to schoolとgo to the schoolは意味が変わる。'],
      extraExamples: [
        ['I saw a dog. The dog was wet.','初出a → 既出the。'],['She is an engineer.','職業分類。'],['We meet twice a week.','a = per。'],['Can you close the door?','その場でどのdoorか共有。'],['The book on the desk is mine.','後置修飾で特定。'],['The sun is bright today.','共有世界で一意。'],['Children need sleep.','children/sleepを一般概念としてzero。'],['Technology changes quickly.','概念一般。'],['I like music.','music一般。'],['She is at school.','制度・活動としてschool。'],['I went to the school to meet a teacher.','特定の建物としてthe school。'],['He went to bed early.','制度的/慣用zero。'],['I live in Japan.','国名通常zero。'],['They crossed the Pacific.','海洋はthe。'],['We climbed Mount Fuji.','単独山名は通常zero。'],['She visited the United States.','記述的/複数的国名はthe。']]
    },
    'determiners-quantifiers': {
      childJP: 'some / any / many / much / few / little は、ただ「多い・少ない」を言うだけではありません。「あると思っている？」「ほとんどないと思う？」「少しはあると思う？」という話し手の気持ちも入ります。',
      teacherJP: 'quantifierはcountabilityだけでなくpolarity、speaker expectation、evaluation、registerを統合して教えます。some/anyを肯定/疑問ルールだけにするとoffersやfree-choice anyで破綻します。few/little vs a few/a littleはquantityよりevaluative orientationを強調します。many/much/a lot ofはspoken/written register差を示し、each/every/all/both/either/neitherでは集合の捉え方を明示します。',
      decisionJP: ['後ろの名詞がcount pluralかuncountか確認する。','存在をある程度想定するsomeか、非限定のanyかを見る。','量の多さだけでなく、肯定/否定/疑問とregisterを確認する。','few/littleなら「足りない」評価、a few/a littleなら「少しある」評価を確認する。','2者ならboth/either/neither、3者以上ならall/each/everyなど集合の見方を選ぶ。'],
      warningsJP: ['Would you like any coffee?も文法的には可能だがofferではsomeが典型。','muchを日常肯定文で過剰使用しない。','fewとa fewを同じ意味だと思わない。','every studentsではなくevery student。','both two studentsのような重複限定を避ける。'],
      extraExamples: [
        ['I need some help.','存在を想定するsome。'],['Do you have any questions?','質問でopen possibility。'],['Would you like some tea?','offerでsome。'],['Any student can join.','free-choice「どの学生でも」。'],['Many people use this app.','plural count。'],['We do not have much time.','uncount。'],['I have a lot of work today.','会話肯定文で自然。'],['Few people understood the joke.','ほとんどいない。'],['A few people stayed after class.','何人かはいる。'],['There is little hope.','ほとんど希望なし。'],['We still have a little time.','少し時間あり。'],['Each student received a card.','一人ずつを見る。'],['Every student must register.','全員をルールで覆う。'],['Both answers are correct.','2つとも。'],['Either option will work.','2つのどちらでも。'],['Neither option is cheap.','2つとも〜ない。']]
    },
    'pronouns-possession': {
      childJP: 'I / me / my / mineは「同じ人」を指していますが、文の中で置かれる場所と仕事が違うので形が変わります。名前を毎回繰り返さず、誰のことか分かるようにするための道具です。',
      teacherJP: 'pronounsはcase table暗記だけでなくreference systemとして教えます。personal pronoun case、possessive determiner/pronoun、reflexive/emphatic、singular they、discourse referenceを段階化します。Writingではgrammatical agreement以上にantecedent clarityが重要で、it/this/theyが複数候補を持つ場合は名詞を再提示する技術も教えます。',
      decisionJP: ['その語は文の主役か、動詞/前置詞の対象か。主役ならI/he/she/we/they、対象ならme/him/her/us/them。','所有を名詞の前で示すならmy/your/their、単独ならmine/yours/theirs。','主語と対象が同じ人物ならreflexiveが必要か確認。','性別不明/一般的単数人物にはsingular theyが自然か検討。','it/this/theyが何を指すか読者に一意に分かるか確認。'],
      warningsJP: ['between you and Iではなく標準的にはbetween you and me。','myselfを丁寧なI/meの代わりに乱用しない。','This is mineとThis is my oneを混同しない。','everyone + theirは現代英語で一般的。','itが曖昧ならthe motor / this changeなど名詞を言い直す。'],
      extraExamples: [
        ['I called her.','I主語、her目的語。'],['She called me.','she主語、me目的語。'],['This is my book.','my + noun。'],['This book is mine.','mine単独。'],['We spoke to them.','preposition後はthem。'],['He introduced himself.','heとhimselfが同一人物。'],['I fixed it myself.','myselfは強調。'],['She went by herself.','一人で。'],['Someone left their umbrella.','singular they。'],['Every student should bring their ID.','generic singular。'],['If a user forgets their password, they can reset it.','userをtheyで受ける。'],['The motor hit the frame, and the motor was damaged.','曖昧回避のため名詞反復。'],['The model was retrained. This change improved accuracy.','this changeで前文内容を明確化。'],['My brother spoke to my father before he left.','heが誰か曖昧になり得る例。'],['My brother left after speaking to my father.','構造を変えて曖昧さを減らす。']]
    }
  });
})();