var start_ms = 0;
var category = 1;
var question = 0;
var answers = {
  1:{},2: {},3: {},4: {},5: {},6: {},7: {},8: {},9: {},10: {},
  11:{},12: {},13: {},14: {},15: {},16: {},17: {},18: {},19: {},20: {},
  21:{},22: {},23: {},24: {},25: {}
 };
var constants = {
  survay_id: "HQ25",
  version_id: 1,

  scale: ["0", "1", "2","3","4"],


  survay: {
    1: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["人と距離をとる。"],
    },

    2: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["一日中ほとんど自宅で過ごす。"],
    },

    3: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["大切な事柄について話し合える人が本当に誰もいない。"],
    },

    4: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["知らない人に会うのが大好きだ。"],
    },

    5: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["自分の部屋に閉じこもる。"],
    },

    6: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["人がうっとうしい。"],
    },

    7: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["自分の生活において自分を理解してくれようとする人たちがいる。"],
    },

    8: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["人と一緒にいるのは居心地が悪い。"],
    },

    9: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["一日中ほとんど一人で過ごす。"],
    },

    10: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["何人かの人に個人的な考えを打ち明けることができる。"],
    },

    11: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["人から見られるのが嫌だ。"],
    },

    12: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["人と直接会うことはほとんどない。"],
    },

    13: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["集団に入るのは苦手だ。"],
    },

    14: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["大切な問題について話し合える人があまりいない。"],
    },

    15: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["人との交流は楽しい。"],
    },

    16: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["社会のルールや価値観に沿って生きていない。"],
    },

    17: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["自分の人生にとって大切な人は本当に誰もいない。"],
    },

    18: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["人と話すことを避ける。"],
    },

    19: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["人と連絡をとることはあまりない（話す、書く等）。"],
    },

    20: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["誰かと一緒にいるよりも、一人でいる方がずっと好きだ。"],
    },

    21: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["自分の抱える問題に関して、安心して相談できる人がいる。"],
    },

    22: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["一人で時間を過ごすことはめったにない。"],
    },

    23: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["人づきあいは楽しくない。"],
    },

    24: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["人と交流することはほとんどない。"],
    },

    25: {
      type: "scale",
      title: "最近６ヶ月間で、以下の文章はどのくらいあなたにあてはまりますか。<br>最も適切なものを選んでください。",
      list: ["一人でいるよりも、誰かと一緒にいる方がずっと好きだ。"],
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
      // var file_name = $("#personal_code").val() + '_' + $("#getter").val();
      // eel.post_recorded_files(file_name);
      resultView();
    } else {
      type = constants["survay"][category]["type"];
      title = constants["survay"][category]["title"];
      text = constants["survay"][category]["list"][question];
      progress = (category/25*100).toFixed(0);
      $("#number").text(progress);
    }
  } else {
    type = constants["survay"][category]["type"];
    title = constants["survay"][category]["title"];
    text = constants["survay"][category]["list"][question];
    progress = (category/25*100).toFixed(0);
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
  // $("#informed_consent_view").hide();
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
    $("#initial_inst_view").show();
  });

  // $("#submit_sign").on("click", function () {
  //     var signtxt = document.getElementById("signinput").value;
  //     var file_name = $("#personal_code").val() + '_' + $("#getter").val();
  //     eel.record_agreement(file_name, String(signtxt));
  //     $("#informed_consent_view").hide();
  //     $("#initial_inst_view").show();
  //   });

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

function closeWindow(){
  open('about:blank', '_self').close();    //一度再表示してからClose
}
