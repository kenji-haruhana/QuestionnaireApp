var start_ms = 0;
var category = 1;
var question = 0;
var answers = {
  1:{},2: {},3: {},4: {},5: {},6: {},7: {},8: {},9: {},10: {},
  11:{},12:{},13:{},14:{},15:{},16:{},17:{},18:{},19:{},20:{},
  21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{},
  31:{},32:{},33:{},34:{},35:{},36:{},37:{},38:{},39:{},40:{},
  41:{},42:{},43:{},44:{},45:{},46:{},47:{},48:{},49:{},50:{},
  51:{},52:{},53:{},54:{},55:{},56:{},
 };
var constants = {
  survay_id: "MHQ",
  version_id: 1,

  age: [
    "18歳未満",
    "18歳-19歳",
    "20歳-24歳",
    "25歳-29歳",
    "30歳-34歳",
    "35歳-39歳",
    "40歳-44歳",
    "45歳-49歳",
    "50歳-54歳",
    "55歳-59歳",
    "60歳-64歳",
    "65歳-69歳",
    "70歳-74歳",
    "75歳-79歳",
    "80歳以上"
  ],

  gender: ["女性", "男性", "ノンバイナリー/第三の性", "答えたくない"],

  time: ["朝", "昼", "夕方", "夜"],

  prefecture: [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
  ],

  occupation: [
    "就業者/自営業（問6へ進む）",
    "主婦・主夫（問7へ進む）",
    "無職（問7へ進む）",
    "退職者（問7へ進む）",
    "勉強中（問7へ進む）",
    "働けない（問7へ進む）",
  ],

  work: [
    "広範囲の出張が必要",
    "他者との高レベルの社会的交流",
    "アート/クリエイティブワーク",
    "高レベルの身体活動",
    "他者への指導・研修・指導",
    "他者の世話",
    "動物を扱う",
    "管理業務",
    "屋外/自然に関する",
  ],

  home: ["0人", "1-2人", "3-4人", "5-6人", "7-8人", "9-10人", "11人以上"],

  education: [
    "初等教育卒業",
    "高校中退",
    "高校卒業",
    "大学卒業",
    "大学院（修士）修了",
    "大学院（博士）修了以上",
    "専門学校・高専・短期大学卒業",
    "言いたくない",
  ],

  scale1: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  scale2: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],

  survay: {
    1: {
      type: "age",
      title: "あてはまる選択肢をお答えください",
      list: ["年齢を教えてください"],
    },

    2: {
      type: "gender",
      title: "あてはまる選択肢をお答えください",
      list: ["性別を教えてください。"],
    },

    3: {
      type: "time",
      title: "あてはまる選択肢をお答えください",
      list: ["現在の時間帯を教えてください。"],
    },

    4: {
      type: "prefecture",
      title: "あてはまる選択肢をお答えください",
      list: ["お住まいの都道府県を教えてください。"],
    },

    5: {
      type: "occupation",
      title: "あてはまる選択肢をお答えください",
      list: ["あなたの職業に最も近いものを選択してください。"],
    },

    6: {
      type: "work",
      title: "あてはまる選択肢をお答えください",
      list: ["あなたの仕事の特徴としてあてはまるものを最大3つまで選択してください。"],
    },

    7: {
      type: "home",
      title: "パートナー、子供、家族、親戚、同居人などがいれば数えてください。",
      list: ["一緒に暮らしている人は何人いますか。"],
    },

    8: {
      type: "education",
      title: "以下の中から1つ選択してください。",
      list: ["最終学歴を教えてください。"],
    },

    9: {
      type: "scale1",
      title:
        "社会の変化や日常生活や環境の変化に直面した時に、新たな生活や仕事に柔軟に順応することができる。",
      list: ["変化への対応"],
    },

    10: {
      type: "scale1",
      title: "自分を高く評価し、自信や自負心を表現することができる。",
      list: ["自尊心および自信"],
    },

    11: {
      type: "scale1",
      title: "創造性、芸術的な表現や新しいアイデアを出して問題解決策を見い出すことができる。"  ,
      list: ["創造性および問題解決"],
    },

    12: {
      type: "scale1",
      title: "労力の必要なことでも、やりたいと思ったら諦めることなく成し遂げることができる。",
      list: ["動因および動機付け"],
    },

    13: {
      type: "scale1",
      title: "情緒不安定とならずに、一貫して落ち着いて状況に取り組むことができる。",
      list: ["安定性および落ち着き"],
    },

    14: {
      type: "scale1",
      title: "簡単に眠れて、途中で目を覚ますことなく、朝起きて休めたと感じられる。",
      list: ["睡眠の質"],
    },

    15: {
      type: "scale1",
      title: "自分の考えや行動を適切に調整でき、自分の衝動を抑えることができる。",
      list: ["自制および衝動性"],
    },

    16: {
      type: "scale1",
      title: "新たな情報や概念を組み込み、新たなスキルを取り入れることができる。",
      list: ["学習能力"],
    },

    17: {
      type: "scale1",
      title: "細かい動作や、物をスムーズにつかむなど、思い通りに体を動かすことができる。",
      list: ["協調"],
    },

    18: {
      type: "scale1",
      title: "家族や仲間と、永く信頼できる深い関係になって情緒的な絆を築くことができる。" ,
      list: ["対人関係"],
    },

    19: {
      type: "scale1",
      title: "失敗しても立ち直り、情緒的な安定性を取り戻すことができる。",
      list: ["情緒的回復力"],
    },

    20: {
      type: "scale1",
      title: "やるべき事について優先順位を見極め、現実的な将来計画を立てることができる。",
      list: ["計画および組織"],
    },

    21: {
      type: "scale1",
      title: "対人関係において気軽に体を触れ合いながら交流することができる。" ,
      list: ["身体的親密性"],
    },

    22: {
      type: "scale1",
      title: "他人にも分かりやすい言葉で話すことができる。" ,
      list: ["発言および言語"],
    },

    23: {
      type: "scale1",
      title: "重要な情報を心に留め、これまでの知識や技能を使って実行することができる。" ,
      list: ["記憶"],
    },

    24: {
      type: "scale1",
      title:
        "言葉やアイコンタクトなどの身振り手振りを使って人とコミュニケーションをとり、協力することができる。" ,
      list: ["社会的相互作用および協力"],
    },

    25: {
      type: "scale1",
      title: "素早く効率的に決断して、危険を踏まえて行動できる。",
      list: ["決断およびリスクテイク"],
    },

    26: {
      type: "scale1",
      title: "身の回りの出来事や人々について、興味関心をもち、熱意を示すことができる。",
      list: ["好奇心、関心と熱意"],
    },

    27: {
      type: "scale1",
      title: "やるべき事を成し遂げるのに必要な精神的、情緒的、身体的エネルギーを持っている。" ,
      list: ["エネルギーレベル"],
    },

    28: {
      type: "scale1",
      title: "衝撃的な出来事があっても、取り乱さず行動を適切にコントロールできる。" ,
      list: ["感情の制御"],
    },

    29: {
      type: "scale1",
      title:
        "注意をそらすことなく、やるべき事に持続して集中することができる。" ,
      list: ["注意および集中"],
    },

    30: {
      type: "scale1",
      title: "健康的な体重を維持するために必要な食べ物をバランスよく規則正しく摂取することができる。" ,
      list: ["食欲の調節"],
    },

    31: {
      type: "scale1",
      title: "他の人の気持ちを察して、その人の視点から物事を考えて適切に対応することができる。" ,
      list: ["共感"],
    },

    32: {
      type: "scale1",
      title: "どんな状況でも自分の五感（聴覚、触覚、嗅覚、味覚、視覚）を使って適切に対応することができる。" ,
      list: ["感覚の敏感性"],
    },

    33: {
      type: "scale1",
      title: "自分自身を肯定的に捉え、「自分は他の誰でもない自分である」という確信をもつことができる。",
      list: ["自己イメージ"],
    },

    34: {
      type: "scale1",
      title: "将来について前向きに考え、自分のふるまいや行動を楽観的に考えることができる。",
      list: ["将来への見通しと楽観性"],
    },

    35: {
      type: "scale1",
      title: "多くの情報から必要なものだけに注意を向けることができる。",
      list: ["選択的注意"],
    },

    36: {
      type: "scale2",
      title: "いつもそわそわしてじっとしておられず、落ち着いてリラックスできない。" ,
      list: ["不安および多動"],
    },

    37: {
      type: "scale2",
      title: "恐怖、心配、不安、緊張などで感情的になったりパニックになることがある。" ,
      list: ["恐れおよび心配"],
    },

    38: {
      type: "scale2",
      title: "風邪、咳、アレルギー症、または他の感染症などに頻繁に罹りやすい。",
      list: ["易感染性"],
    },

    39: {
      type: "scale2",
      title: "他の人に対して攻撃的となり暴力的な行動を取ってしまうことがある。",
      list: ["他の人に対する攻撃性"],
    },

    40: {
      type: "scale2",
      title: "他人からの誘いを避けたり付き合わないので嫌な気持ちになることがある。" ,
      list: ["回避および辞退"],
    },

    41: {
      type: "scale2",
      title: "考えまいと思っても、奇妙で望んではいない、不快な思考が勝手に繰り返し生じる。" ,
      list: ["望んではない、奇妙な、強迫的な思考"],
    },

    42: {
      type: "scale2",
      title: "喜怒哀楽の気分の波が激しく両極端な気分を経験することがある。" ,
      list: ["気分の変動"],
    },

    43: {
      type: "scale2",
      title:
        "自分が自分でない、自分の人生が他人事あるいは夢の中にいるような感覚を経験したことがある。" ,
      list: ["現実から解離している感覚"],
    },

    44: {
      type: "scale2",
      title: "夜間に目が覚めてしまうくらい感情的に耐えがたい夢を見ることがある。" ,
      list: ["悪夢"],
    },

    45: {
      type: "scale2",
      title:
        "心身の健康に悪影響を与える、自分では制御できない依存がある（例：薬物、アルコール、ゲーム、ギャンブル)。"   ,
      list: ["依存"],
    },

    46: {
      type: "scale2",
      title: "日常的に大事な事を思い出せなかったり、ものを間違った場所に置いたりすることがある。" ,
      list: ["物忘れ"],
    },

    47: {
      type: "scale2",
      title: "フラストレーションを感じやすく、どんな時でも怒り、いら立ち、かんしゃくを起こすことがある。" ,
      list: ["怒りおよびいら立ち"],
    },

    48: {
      type: "scale2",
      title: "自殺したい、身体的に自分を傷つけたいと考えたり感じたりすることがある。",
      list: ["自殺観念・意図"],
    },

    49: {
      type: "scale2",
      title: "頭痛や身体の痛みがよくある。" ,
      list: ["痛みの経験"],
    },

    50: {
      type: "scale2",
      title: "自分には落ち度がないことでも、罪悪感を感じたり、後悔したり、自責の念をもつことがある。" ,
      list: ["罪悪感および自責"],
    },

    51: {
      type: "scale2",
      title: "他の人が経験しない事を、見聞きしたり、感じたり、匂いや味を感じることがある。" ,
      list: ["幻覚"],
    },

    52: {
      type: "scale2",
      title: "思い出したくない過去の嫌な経験から、感情的な苦痛を伴う記憶を思い出すことがある。" ,
      list: ["トラウマによるフラッシュバック"],
    },

    53: {
      type: "scale2",
      title: "望まない、奇妙な癖、習慣、行為や動作が自分では抑制できず、繰り返すことがある。" ,
      list: ["反復・強迫的行動"],
    },

    54: {
      type: "scale2",
      title: "悲しみや絶望に打ちひしがれたり、涙がとめどなく流れて止められないことがある。" ,
      list: ["悲しみ、悲嘆、または絶望の感情"],
    },

    55: {
      type: "scale2",
      title: "現在も持続している慢性的な身体的症状や疾患がある（例：胃腸の病気など）。" ,
      list: ["身体的な健康問題"],
    },

    56: {
      type: "scale2",
      title: "一定期間以上、混乱したり、物事の意味がつかめなかったり、思考能力が低下することがある。" ,
      list: ["混乱したまたは緩慢な思考"],
    },

  },
};

function resultView() {
  $("#question_view").hide();
    $("#result_view").show();
}

function setQuestion() {
  title = "";
  text = "";

  if (!constants["survay"][category]["list"][question]) {
    category++;
    question = 0;
    if (!constants["survay"][category]) {
      var file_name = $("#personal_code").val() + '_' + $("#getter").val();
      eel.post_recorded_files(file_name);
      resultView();
    } else {
      type = constants["survay"][category]["type"];
      title = constants["survay"][category]["title"];
      text = constants["survay"][category]["list"][question];
      progress = (category/56*100).toFixed(0);
      $("#number").text(progress);
    }
  } else {
    type = constants["survay"][category]["type"];
    title = constants["survay"][category]["title"];
    text = constants["survay"][category]["list"][question];
    progress = (category/56*100).toFixed(0);
    $("#number").text(progress);
  }
  $("#age").hide();
  $("#gender").hide();
  $("#time").hide();
  $("#prefecture").hide();
  $("#occupation").hide();
  $("#work").hide();
  $("#home").hide();
  $("#education").hide();
  $("#scale1").hide();
  $("#scale2").hide();
  switch (type) {
    case "age":
      $("#age").show();
      break;
    case "gender":
      $("#gender").show();
      break;
    case "time":
      $("#time").show();
      break;
    case "prefecture":
      $("#prefecture").show();
      break;
    case "occupation":
      $("#occupation").show();
      break;
    case "work":
      $("#work").show();
      break;
    case "home":
      $("#home").show();
      break;
    case "education":
      $("#education").show();
      break;
    case "scale1":
      $("#scale1").show('fast');
      break;
    case "scale2":
      $("#scale2").show('fast');
      break;
    default:
      null;
      }
      if (category  == 9) {
        $("#question_view").hide();
        $("#scale1_inst_view").show();
        $("#next1").on("click", function () {
          $("#scale1_inst_view").hide();
          $("#question_view").show();
        });
      } else {
        if (category  == 36) {
          $("#question_view").hide();
          $("#scale2_inst_view").show();
          $("#next2").on("click", function () {
            $("#scale2_inst_view").hide();
            $("#question_view").show();
          });
      }

    }
  $("#title").text(title);
  $("#text").text(text);

}

function getAnswer() {
  is_valid_ans = true
  var type = constants["survay"][category]["type"];
  var node = $(`#${type}`)
  if(node.has('input').length) {
    // inputタグが存在する場合
    var value = [];
    $(`input:checkbox[name="${type}-option"]:checked`).each(function() {
      value.push($(this).val());
    });
    validateAns(node, value); // 回答個数制限
    if (is_valid_ans) {
      answers[String(category)][String(question + 1)] = value;
      ans_value = answers[String(category)][String(question + 1)].join("&");
    }
  } else {
    // inputタグが存在しない場合
    answers[String(category)][String(question + 1)] = this.value;
  }
}

function validateAns(node, value=[]) {
  // 回答個数制限
  var min = node.data("min") ? node.data("min") : 0
  var max = node.data("max") ? node.data("max") : 9
  is_valid_ans = (value.length >= min && value.length <= max) ? true : false;
  if(!is_valid_ans) {
    alert(`${min}~${max}個を選択してください。`);
  } else {
    if(type == "symptoms" || type == "covid"|| type == "covidwork") {
      exclusive = max + 1;
      is_exclusive_ans = (value.length >= 2 && value[value.length - 1] == exclusive) ? true : false;
    } else if(type == "experience") {
        exclusive = max + 2;
        is_exclusive_ans = (value.length >= 2 && (value[value.length - 1] >= exclusive || value[0] == 1)) ? true : false;
    } else {
      is_exclusive_ans = 0;
    }
    if(is_exclusive_ans) {
    alert(`矛盾した選択です。修正してください。`);
    is_valid_ans = 0;
    }

  }
}

// async function device_check() {
//   var check = await eel.device_check()();
//   if (!check) {
//     alert("脈波取得デバイスの接続を確認してください。");
//     window.close();
//   }
// }

$(function () {
  $("#informed_consent_view").hide();
  $("#signature_view").hide();
  $("#initial_inst_view").hide();
  $("#question_view").hide();
  $("#scale1_inst_view").hide();
  $("#scale2_inst_view").hide();
  $("#result_view").hide();
  //device_check();

  $("#start_btn").on("click", function () {
    var pattern = /\s/;
    var personal_code = $("#personal_code").val();
    var getter = $("#getter").val();
    if (!personal_code) {
      alert("個人コードを入力してください。");
      return;
    } else if (personal_code.match(pattern)) {
      alert("個人コードにスペースは利用できません。");
      return;
    }
    if (!getter) {
      alert("取得者名を入力してください。");
      return;
    } else if (getter.match(pattern)) {
      alert("取得者名にスペースは利用できません。");
      return;
    }
    $("#personal_code_view").hide();
    $("#informed_consent_view").show();
  });

  // $("#signing").on("click", function () {
  //   $("#informed_consent_view").hide();
  //   $("#signature_view").show();
  // });

  $("#submit_sign").on("click", function () {
      var signtxt = document.getElementById("signinput").value;
      var file_name = $("#personal_code").val() + '_' + $("#getter").val();
      eel.record_agreement(file_name, String(signtxt));
      $("#informed_consent_view").hide();
      $("#initial_inst_view").show();
    });

  $("#startq_btn").on("click", function () {
      $("#initial_inst_view").hide();
      setQuestion();
      start_ms = new Date().getTime();
      $("#question_view").show();
    });

  $(".ans_btn").on("click", function () {
    getAnswer();
    if (is_valid_ans) {
    var elapsed_ms = new Date().getTime() - start_ms;
    var file_name = $("#personal_code").val() + '_' + $("#getter").val();
    eel.record_answer_time(file_name, String(category), String(question + 1), String(this.value ? this.value : ans_value), elapsed_ms);
    if (category == 5 && this.value != 1){
        category++;
      }
    question++;
    setQuestion();
    }
  });

// 回答が記入式だった場合のanswer処理
  $(".other_btn").on("click", function () {
      answers[String(category)][String(question + 1)] = this.value;
      var othertxt = document.getElementById("textinput").value;
      var elapsed_ms = new Date().getTime() - start_ms;
      var file_name = $("#personal_code").val() + $("#getter").val();
      eel.record_answer_time(file_name, String(category), String(question + 1), String(othertxt), elapsed_ms);
      question++;
      setQuestion();
  });
});

// 記入欄の入力が２文字以上になったら次へボタンを機能化 for 署名
window.addEventListener('DOMContentLoaded',function(){
  document.getElementById('submit_sign').disabled = true;
  document.getElementById('signinput').addEventListener('keyup',function(){
    if (this.value.length < 2) {
      document.getElementById('submit_sign').disabled = true;
    } else {
      document.getElementById('submit_sign').disabled = false;
    }
  },false);
  document.getElementById('signinput').addEventListener('change',function(){
    if (this.value.length < 2) {
      document.getElementById('submit_sign').disabled = true;
    }
  },false);
  },false);

// 記入欄の入力が２文字以上になったら次へボタンを機能化 for 学歴
window.addEventListener('DOMContentLoaded',function(){
  document.getElementById('submit_txt').disabled = true;
  document.getElementById('textinput').addEventListener('keyup',function(){
    if (this.value.length < 2) {
      document.getElementById('submit_txt').disabled = true;
    } else {
      document.getElementById('submit_txt').disabled = false;
    }
  },false);
  document.getElementById('textinput').addEventListener('change',function(){
    if (this.value.length < 2) {
      document.getElementById('submit_txt').disabled = true;
    }
  },false);
  },false);

  function closeWindow(){
    open('about:blank', '_self').close();    //一度再表示してからClose
  }
