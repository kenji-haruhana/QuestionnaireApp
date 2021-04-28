var start_ms = 0;
var category = 1;
var question = 0;
var answers = {
  1:{},2: {},3: {},4: {},5: {},6: {},7: {},8: {},9: {},10: {},
  11:{},12:{},13:{},14:{},15: {},16: {},17: {},18: {},19: {},20: {},
  21:{}
 };

var constants = {
  survay_id: "BRS",
  version_id: 1,

  scale: ["1", "2", "3", "4","5"],

  survay: {
    1: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
      list: ["どんなことでも、たいてい何とかなりそうな気がする。"],
    },

    2: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
      list: ["昔から、人との関係をとるのが上手だ。"],
    },

    3: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
      list: ["たとえ自信がないことでも、結果的に何とかなると思う。"],
    },

    4: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["自分から人と親しくなることが得意だ。"],
    },

    5: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
      list: ["自分は体力がある方だ。"],
    },

    6: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
      list: ["努力することを大事にする方だ。"],
    },

    7: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["つらいことでも我慢できる方だ。"],
    },

    8: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["決めたことを最後までやりとおすことができる。"],
    },

    9: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["困難な出来事が起きても、どうにか切り抜けることができると思う。"],
    },

    10: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["交友関係が広く、社交的である。"],
    },

    11: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["嫌なことがあっても、自分の感情をコントロールできる。"],
    },

    12: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["自分は粘り強い人間だと思う。"],
    },

    13: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["思いやりを持って人と接している。"],
    },

    14: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["自分の性格についてよく理解している。"],
    },

    15: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["嫌な出来事があったとき、今の経験から得られるものを探す。"],
    },

    16: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["自分の考えや気持ちがよくわからないことが多い。"],
    },

    17: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["人の気持ちや、微妙な表情の変化を読み取るのが上手だ。"],
    },

    18: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["人と誤解が生じたときには積極的に話をしようとする。"],
    },

    19: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["嫌な出来事が、どんな風に自分の気持ちに影響するか理解している。"],
    },

    20: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["嫌な出来事があったとき、その問題を解決するために情報を集める。"],
    },

    21: {
      type: "scale",
      title: "５つの選択肢からもっともよくあてはまる答えを1つ選んでください。",
     list: ["他人の考え方を理解するのが比較的得意だ。"],
    }

  },
};

function resultView() {
  $("#question_view").hide();
  $("#result_view").show();
}

function setQuestion() {
  title = "";
  text = "";
  $("#scale").hide();
  $("#invscale").hide();
  if (!constants["survay"][category]["list"][question]) {
    category++;
    question = 0;
    if (!constants["survay"][category]) {
//      eel.stop_recording();
      var file_name = $("#personal_code").val() + '_' + $("#getter").val();
      eel.post_recorded_files(file_name);
      resultView();
    } else {
      type = constants["survay"][category]["type"];
      title = constants["survay"][category]["title"];
      text = constants["survay"][category]["list"][question];
      progress = (category/21*100).toFixed(0);
      $("#number").text(progress);
    }
  } else {
    type = constants["survay"][category]["type"];
    title = constants["survay"][category]["title"];
    text = constants["survay"][category]["list"][question];
    progress = (category/21*100).toFixed(0);
    $("#number").text(progress);
    }
  $("#scale").hide();
  $("#scale").show('fast');
  $("#title").html(title);
  $("#text").html(text);
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
    answers[String(category)][String(question + 1)] = this.value;
    var elapsed_ms = new Date().getTime() - start_ms;
    var file_name = $("#personal_code").val() + '_' + $("#getter").val();
    eel.record_answer_time(file_name, String(category), String(question + 1), String(this.value), elapsed_ms);
    question++;
    setQuestion();
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
