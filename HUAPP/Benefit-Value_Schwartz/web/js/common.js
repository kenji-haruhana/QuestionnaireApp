var start_ms = 0;
var category = 1;
var question = 0;
var answers = {
  1:{}, 2: {},3: {},4: {},5: {},6: {},7: {},8: {}, 9: {},10: {},
  11:{},12:{},13:{},14:{},15:{},16:{},17:{},18:{},19:{},20:{},
  21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{},
  31:{},32:{},33:{},34:{},35:{},36:{}
 };

var constants = {
  survay_id: "benefit_schwartz",
  version_id: 1,

    yourself: [
    "実績がないことをやってみるのはわくわくする",
    "答えのないものを探索するのが好き",
    "好奇心が強い",
    "人の目を気にする",
    "しばしば悩むことがある",
    "小さなことが気になって眠れなくなることがある",
    "めんどうなことはしたくない",
    "どちらかというとインドア派だ",
    "のんびりがいい",
    "記念日は覚えている方だと思う",
    "協調性がある",
    "家族や友人を喜ばせたい",
    "あてはまるものはない",
  ],

  happy: [
    "好きな服を着るとうれしい",
    "料理がおいしくできるとうれしい",
    "容姿や服装など外見をほめられるとうれしい",
    "仕事で評価されるとうれしい",
    "仕事でお客様に感謝されるとうれしい",
    "成長できていると感じるとうれしい",
    "あてはまるものはない",
  ],

  frinedship: [
    "たまに人間関係がしんどいと感じることがある",
    "人に気を使うのが煩わしいと感じることがある",
    "人と会うのは疲れる",
    "数は少ないが仲の良い友人がいる",
    "今の友人との関係はこの先もずっと続くと思う",
    "親友と呼べる人がいる",
    "あてはまるものはない",
  ],

  annoying: [
    "実績がないことをやってみるのはわくわくする",
    "答えのないものを探索するのが好き",
    "公共の場にマナーの悪い人がいると腹が立つ",
    "公共の場にマナーの悪い人がいると腹が立つ",
    "ミスや悪い事をしても謝らない人がいると腹が立つ",
    "協調性のない人、空気を読めない人がいると腹が立つ",
    "行ったレストランがおいしくないとがっかりする",
    "買ったあとにもっと安く売っているところを見つけるとがっかりする",
    "待ち時間が長いと腹が立つ",
    "あてはまるものはない",
  ],

  family: [
    "いつか結婚したい",
    "いつか子供が欲しい",
    "もう結婚しないかもしれないという気がしている",
    "同居してない家族の訪問は煩わしい",
    "両親との仲はあまりよくない",
    "親子であってもあまり干渉しない／されない",
    "今は「母」と「妻」であることに重きを置いている",
    "私は家族に養われている",
    "両親とはこちらから頻繁に連絡をとっている",
    "あてはまるものはない",
  ],

  happy: [
    "今の仕事にやりがいを感じている",
    "仕事に誇りを持っている",
    "仕事で自分の成長を感じることがある",
    "仕事にプレッシャーを感じる",
    "ストレスが多いと感じる",
    "毎週仕事が始まる日は憂鬱だ",
    "あてはまるものはない",
  ],

  money: [
    "正直いってお金は全然足りない",
    "金銭的に苦しくはない",
    "毎月決まった額を貯金している",
    "あてはまるものはない",
  ],

  time: [
    "自由な時間がある",
    "遊ぶ時間は十分にある",
    "ゆったりとした生活ができている",
    "ひとりになれる時間がない",
    "自由が少ないと感じる",
    "昔と比べて自由にできる時間が減った",
    "仕事より家族、子供の予定を優先する",
    "家族のために時間、手間を惜しみなく費やす",
    "家事、家計、子供の世話をすることが生活の中心である",
    "あてはまるものはない",
  ],

  scale1: ["1", "2", "3", "4", "5", "6"],
  scale2: ["1", "2", "3", "4", "5"],
  info_freq: ["1", "2", "3", "4", "5", "6"],
  infoterminal: ["1", "2", "3", "4", "5", "6", "7", "8"],
  infosource: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "20", "21", "22", "23", "24", "25", "26", "27"],
  adherence: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
  benefit: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],

  survay: {
    1: {
      type: "yourself",
      title: "あなた自身について伺います。",
      list: ["あてはまるものをすべてお答えください。"],
    },

    2: {
      type: "happy",
      title: "あなたが嬉しいと思うことについて伺います。",
      list: ["あてはまるものをすべてお答えください。"],
    },

    3: {
      type: "friendship",
      title: "あなたの交友関係について伺います。",
      list: ["あてはまるものをすべてお答えください。"],
    },

    4: {
      type: "annoying",
      title: "あなたが腹立たしいと思うことについて伺います。",
      list: ["あてはまるものをすべてお答えください。"],
    },

    5: {
      type: "family",
      title: "あなたの家族について伺います。",
      list: ["あてはまるものをすべてお答えください。"],
    },

    6: {
      type: "work",
      title: "あなたの仕事について伺います。",
      list: ["あてはまるものをすべてお答えください。"],
    },

    7: {
      type: "money",
      title:"あなたの金銭感覚について伺います。",
      list: ["あてはまるものをすべてお答えください。"],
    },

    8: {
      type: "time",
      title: "あなたの時間について伺います。",
      list: ["あてはまるものをすべてお答えください。"],
    },

    9: {
      type: "scale1",
      title: "人によって大切なことは異なります。<br>次のような人がいるとすればそのあり方について、あなたはどの程度当てはまりますか。",
      list: ["新しいアイデアを考えつき、創造的であること、<br>自分のやり方で行なうことが大切な人"],
    },

    10: {
      type: "scale1",
      title: "人によって大切なことは異なります。<br>次のような人がいるとすればそのあり方について、あなたはどの程度当てはまりますか。",
      list: ["裕福で、お金と高価な品物をたくさん持つことが大切な人"],
    },

    11: {
      type: "scale1",
      title: "人によって大切なことは異なります。<br>次のような人がいるとすればそのあり方について、あなたはどの程度当てはまりますか。",
      list: ["安全な環境に住むこと、<br>危険なことはすべて避けることが大切な人"],
    },

    12: {
      type: "scale1",
      title: "人によって大切なことは異なります。<br>次のような人がいるとすればそのあり方について、あなたはどの程度当てはまりますか。",
      list: ["楽しい時間をすごすこと、自分を「甘やかす」ことが大切な人"],
    },

    13: {
      type: "scale1",
      title: "人によって大切なことは異なります。<br>次のような人がいるとすればそのあり方について、あなたはどの程度当てはまりますか。",
      list: ["周囲の人を助けて、幸せにすることが大切な人"],
    },

    14: {
      type: "scale1",
      title: "人によって大切なことは異なります。<br>次のような人がいるとすればそのあり方について、あなたはどの程度当てはまりますか。",
      list: ["社会の利益のために何かするということが大切な人"],
    },

    15: {
      type: "scale1",
      title: "人によって大切なことは異なります。<br>次のような人がいるとすればそのあり方について、あなたはどの程度当てはまりますか。",
      list: ["大いに成功すること、成し遂げたことが人に認められることが<br>大切な人"],
    },

    16: {
      type: "scale1",
      title: "人によって大切なことは異なります。<br>次のような人がいるとすればそのあり方について、あなたはどの程度当てはまりますか。",
      list: ["冒険し、リスクを冒すこと、刺激のある生活が大切な人"],
    },

    17: {
      type: "scale1",
      title: "人によって大切なことは異なります。<br>次のような人がいるとすればそのあり方について、あなたはどの程度当てはまりますか。",
      list: ["常に礼儀正しくふるまうこと、<br>間違っているといわれそうな行動を一切避けることが大切な人"],
    },

    18: {
      type: "scale1",
      title: "人によって大切なことは異なります。<br>次のような人がいるとすればそのあり方について、あなたはどの程度当てはまりますか。",
      list: ["環境に気をつかったり、資源を守ること、自然へ配慮することが大切な人"],
    },

    19: {
      type: "scale1",
      title: "人によって大切なことは異なります。<br>次のような人がいるとすればそのあり方について、あなたはどの程度当てはまりますか。",
      list: ["伝統や宗教や家族によって受け継がれてきた習慣に<br>従うことが大切な人"],
    },

    20: {
      type: "scale2",
      title: "次にあげることが、あなたの生活にとってどの程度重要かをお答えください。",
      list: ["家族"],
    },

    21: {
      type: "scale2",
      title: "次にあげることが、あなたの生活にとってどの程度重要かをお答えください。",
      list: ["友人・知人"],
    },

    22: {
      type: "scale2",
      title: "次にあげることが、あなたの生活にとってどの程度重要かをお答えください。",
      list: ["余暇時間"],
    },

    23: {
      type: "scale2",
      title: "次にあげることが、あなたの生活にとってどの程度重要かをお答えください。",
      list: ["政治"],
    },

    24: {
      type: "scale2",
      title: "次にあげることが、あなたの生活にとってどの程度重要かをお答えください。",
      list: ["仕事"],
    },

    25: {
      type: "scale2",
      title: "次にあげることが、あなたの生活にとってどの程度重要かをお答えください。",
      list: ["宗教"],
    },

    26: {
      type: "infoterminal",
      title: "あなたは以下の情報端末をお持ちですか。",
      list: ["お持ちのものすべて選んでお答えください。"],
    },

    27: {
      type: "info_freq",
      title: "あなたの所有する情報端末の利用頻度についてお答えください。",
      list: ["パソコン"],
    },

    28: {
      type: "info_freq",
      title: "あなたの所有する情報端末の利用頻度についてお答えください。",
      list: ["従来型携帯端末（PHSを含む）"],
    },

    29: {
      type: "info_freq",
      title: "あなたの所有する情報端末の利用頻度についてお答えください。",
      list: ["スマートフォン"],
    },

    30: {
      type: "info_freq",
      title: "あなたの所有する情報端末の利用頻度についてお答えください。",
      list: ["タブレット端末"],
    },

    31: {
      type: "info_freq",
      title: "あなたの所有する情報端末の利用頻度についてお答えください。",
      list: ["電子書籍リーダー"],
    },

    32: {
      type: "info_freq",
      title: "あなたの所有する情報端末の利用頻度についてお答えください。",
      list: ["スマートウォッチ（腕時計型ウェアラブルデバイス）"],
    },

    33: {
      type: "info_freq",
      title: "あなたの所有する情報端末の利用頻度についてお答えください。",
      list: ["その他のウェアラブルデバイス（メガネ型、リストバンド型など）"],
    },

    34: {
      type: "infosource",
      title: "あなたが普段接する情報源は何ですか。",
      list: ["あてはまるものをすべてお答えください。"],
    },

    35: {
      type: "adherence",
      title: "あなたの普段の生活でこだわりを持たれていること、<br>楽しいと感じることについてお答えください。",
      list: ["あてはまるものをすべてお答えください。"],
    },

    36: {
      type: "benefit",
      title: "あなたがモノを選ぶ時に重視するポイントは何でしょうか.",
      list: ["あてはまるものをすべてお答えください。"],
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
// commented out for debugging
      // eel.stop_recording();
      var file_name = $("#personal_code").val() + '_' + $("#getter").val();
      eel.post_recorded_files(file_name);
      resultView();
    } else {
      type = constants["survay"][category]["type"];
      title = constants["survay"][category]["title"];
      text = constants["survay"][category]["list"][question];
      progress = (category/36*100).toFixed(0);
      $("#number").text(progress);
    }
  } else {
    type = constants["survay"][category]["type"];
    title = constants["survay"][category]["title"];
    text = constants["survay"][category]["list"][question];
    progress = (category/36*100).toFixed(0);
    $("#number").text(progress);
  }
  $("#yourself").hide();
  $("#happy").hide();
  $("#friendship").hide();
  $("#annoying").hide();
  $("#family").hide();
  $("#work").hide();
  $("#money").hide();
  $("#time").hide();
  $("#scale1").hide();
  $("#scale2").hide();
  $("#info_freq").hide();
  $("#infoterminal").hide();
  $("#infosource").hide();
  $("#adherence").hide();
  $("#benefit").hide();
  switch (type) {
    case "yourself":
      $("#yourself").show();
      break;
    case "happy":
      $("#happy").show();
      break;
    case "friendship":
      $("#friendship").show();
      break;
    case "annoying":
      $("#annoying").show();
      break;
    case "family":
      $("#family").show();
      break;
    case "work":
      $("#work").show();
      break;
    case "money":
      $("#money").show();
      break;
    case "time":
      $("#time").show();
      break;
    case "scale1":
      $("#scale1").show('fast');
      break;
    case "scale2":
      $("#scale2").show('fast');
      break;
    case "infosource":
      $("#infosource").show();
      break;
    case "infoterminal":
      $("#infoterminal").show();
      break;
    case "info_freq":
      $("#info_freq").show();
      break;
    case "adherence":
      $("#adherence").show();
      break;
      case "benefit":
        $("#benefit").show();
        break;
    default:
      null;
      }

    $("#title").html(title);
    $("#text").html(text);
    if(type == "scale1"){
        document.getElementById("title").style.fontSize = "1.5rem";
        document.getElementById("text").style.fontSize = "1.8rem";
    }else if(type == "infosource"){
        document.getElementById("title").style.fontSize = "3rem";
        document.getElementById("text").style.fontSize = "1.5rem";
    }else if(type == "adherence"){
        document.getElementById("title").style.fontSize = "1.5rem";
        document.getElementById("text").style.fontSize = "1.8rem";
  }
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
  }else {
      exclusive = max + 1;
      is_exclusive_ans = (value.length >= 2 && value[value.length - 1] == exclusive) ? true : false;
    }
    if(is_exclusive_ans) {
    alert(`矛盾した選択です。修正してください。`);
    is_valid_ans = 0;
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
  $("#initial_inst_view").hide();
  $("#question_view").hide();
  $("#question_view2").hide();
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

  $("#signing").on("click", function () {
    $("#informed_consent_view").hide();
    $("#signature_view").show();
  });

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
});

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

function closeWindow(){
  open('about:blank', '_self').close();    //一度再表示してからClose
}
