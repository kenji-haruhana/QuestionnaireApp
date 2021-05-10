var start_ms = 0;
var category = 1;
var question = 0;
var answers = {
  1:{},2: {},3: {},4: {},5: {},6: {},7: {},8: {},9: {},10: {},
  11:{},12:{},13:{},14:{},
 };

var constants = {
  survay_id: "jpss",
  version_id: 1,

  scale: ["0", "1", "2", "3", "4"],

  survay: {
    1: {
      type: "scale",
      title: "思いがけない事で精神的に混乱してしまったことがありますか？",
      list: ["最近1カ月間のこととして以下の質問にお答え下さい。<br>もっともよくあてはまる答えを1つ選んでください。"],
    },

    2: {
      type: "scale",
      title: "大事な判断をできずに困ったことがありますか？",
      list: ["最近1カ月間のこととして以下の質問にお答え下さい。<br>もっともよくあてはまる答えを1つ選んでください。"],
    },

    3: {
      type: "scale",
      title: "神経質になったりストレスを感じたことがありますか？",
      list: ["最近1カ月間のこととして以下の質問にお答え下さい。<br>もっともよくあてはまる答えを1つ選んでください。"],
    },

    4: {
      type: "scale",
      title: "面倒なことをうまく処理できましたか？",
     list: ["最近1カ月間のこととして以下の質問にお答え下さい。<br>もっともよくあてはまる答えを1つ選んでください。"],
    },

    5: {
      type: "scale",
      title: "生活の変化にうまく対応できますか？",
      list: ["最近1カ月間のこととして以下の質問にお答え下さい。<br>もっともよくあてはまる答えを1つ選んでください。"],
    },

    6: {
      type: "scale",
      title: "ストレスを乗り切るのは上手な方ですか？",
      list: ["最近1カ月間のこととして以下の質問にお答え下さい。<br>もっともよくあてはまる答えを1つ選んでください。"],
    },

    7: {
      type: "scale",
      title: "すべてうまくいっていますか？",
     list: ["最近1カ月間のこととして以下の質問にお答え下さい。<br>もっともよくあてはまる答えを1つ選んでください。"],
    },

    8: {
      type: "scale",
      title: "仕事や付き合いで失敗したことがありましたか？",
     list: ["最近1カ月間のこととして以下の質問にお答え下さい。<br>もっともよくあてはまる答えを1つ選んでください。"],
    },

    9: {
      type: "scale",
      title: "イライラして我慢できないことがありますか？",
     list: ["最近1カ月間のこととして以下の質問にお答え下さい。<br>もっともよくあてはまる答えを1つ選んでください。"],
    },

    10: {
      type: "scale",
      title: "仕事や付き合いは順調ですか？",
     list: ["最近1カ月間のこととして以下の質問にお答え下さい。<br>もっともよくあてはまる答えを1つ選んでください。"],
    },

    11: {
      type: "scale",
      title: "うまくゆかないことがあるとカーとなって怒りやすいですか？",
     list: ["最近1カ月間のこととして以下の質問にお答え下さい。<br>もっともよくあてはまる答えを1つ選んでください。"],
    },

    12: {
      type: "scale",
      title: "仕事の悩みは多いですか？",
     list: ["最近1カ月間のこととして以下の質問にお答え下さい。<br>もっともよくあてはまる答えを1つ選んでください。"],
    },

    13: {
      type: "scale",
      title: "自分で時間の予定をたてるのは上手ですか？",
     list: ["最近1カ月間のこととして以下の質問にお答え下さい。<br>もっともよくあてはまる答えを1つ選んでください。"],
    },

    14: {
      type: "scale",
      title: "面倒なことが多くて困っていますか？",
     list: ["最近1カ月間のこととして以下の質問にお答え下さい。<br>もっともよくあてはまる答えを1つ選んでください。"],
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
      progress = (category/14*100).toFixed(0);
      $("#number").text(progress);
    }
  } else {
    type = constants["survay"][category]["type"];
    title = constants["survay"][category]["title"];
    text = constants["survay"][category]["list"][question];
    progress = (category/14*100).toFixed(0);
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
