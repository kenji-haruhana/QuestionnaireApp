var start_ms = 0;
var category = 1;
var question = 0;
var answers = {
  1:{},2: {},3: {},4: {},5: {},6: {},7: {},8: {},9: {},10: {},
  11:{},12: {},13: {},14: {}
 };
var constants = {
  survay_id: "SOGS-J",
  version_id: 1,

  losses:["1", "2","3","4"],
  lies:["1", "2","3"],
  problems:["1", "2","3"],
  yesno:["1", "2"],
  loan:["1","2","3","4","5","6","7","8","9"],

  survay: {
    1: {
      type: "loss",
      title: "最も自分にあてはまると思われるものを選択肢の中から1つ選んでください。",
      list: ["ギャンブルで負けたとき、負けた分を取り戻すためにまた、<br>ギャンブルをしたことがありますか。"],
    },

    2: {
      type: "lies",
      title: "最も自分にあてはまると思われるものを選択肢の中から1つ選んでください。",
      list: ["実際はギャンブルで負けたのに、勝っていると吹聴したことがありますか。"],
    },

    3: {
      type: "problem",
      title: "最も自分にあてはまると思われるものを選択肢の中から1つ選んでください。",
      list: ["自分には、賭けごとやギャンブルの問題があると思ったことがありますか。"],
    },

    4: {
      type: "yesno",
      title: "最も自分にあてはまると思われるものを選択肢の中から1つ選んでください。",
      list: ["意図していた以上にギャンブルをしたことがありますか。"],
    },

    5: {
      type: "yesno",
      title: "最も自分にあてはまると思われるものを選択肢の中から1つ選んでください。",
      list: ["あなたのギャンブルについてまわりの人から非難されたことがありますか。"],
    },

    6: {
      type: "yesno",
      title: "最も自分にあてはまると思われるものを選択肢の中から1つ選んでください。",
      list: ["あなたのギャンブルのやり方や、ギャンブルによって生じたことについて<br>罪悪感を感じたことがありますか。"],
    },

    7: {
      type: "yesno",
      title: "最も自分にあてはまると思われるものを選択肢の中から1つ選んでください。",
      list: ["実際にはやめられないと分かっていても、ギャンブルをやめたいと<br>思ったことはありますか。"],
    },

    8: {
      type: "yesno",
      title: "最も自分にあてはまると思われるものを選択肢の中から1つ選んでください。",
      list: ["ギャンブルをしていることを配偶者や子ども、その他あなたにとって大事な人に<br>知られないように、ギャンブルの券や宝くじ、賭博用の資金などを<br>隠したことがありますか。"],
    },

    9: {
      type: "yesno",
      title: "最も自分にあてはまると思われるものを選択肢の中から1つ選んでください。",
      list: ["お金の使い方について、同居している人と口論になったことがありますか。"],
    },

    10: {
      type: "yesno",
      title: "最も自分にあてはまると思われるものを選択肢の中から1つ選んでください。",
      list: ["前の質問の回答が「はい」なら、そのお金に関する口論の原因が、<br>主にあなたのギャンブルだったことがありますか。"],
    },
    11: {
      type: "yesno",
      title: "最も自分にあてはまると思われるものを選択肢の中から1つ選んでください。",
      list: ["誰かからお金を借りたのに、ギャンブルのために<br>返せなくなったことがありますか。"],
    },

    12: {
      type: "yesno",
      title: "最も自分にあてはまると思われるものを選択肢の中から1つ選んでください。",
      list: ["ギャンブルのために、仕事や学業の時間を浪費したことがありますか。"],
    },

    13: {
      type: "yesno",
      title: "最も自分にあてはまると思われるものを選択肢の中から1つ選んでください。",
      list: ["ギャンブルのためか、ギャンブルによる借金を返すために<br>お金を借りた経験がありますか。"],
    },

    14: {
      type: "loan",
      title: "最も自分にあてはまると思われるものを選択肢の中から1つ選んでください。",
      list: ["前の質問の回答が「はい」なら、誰またはどこから借りましたか。"],
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
  $("#loss").hide();
  $("#lies").hide();
  $("#problem").hide();
  $("#yesno").hide();
  $("#loan").hide();
  switch (type) {
    case "loss":
      $("#loss").show();
      break;
    case "lies":
      $("#lies").show();
      break;
    case "problem":
      $("#problem").show();
      break;
    case "yesno":
      $("#yesno").show('fast');
      break;
    case "loan":
      $("#loan").show();
      break;
    default:
      null;
      }

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
    // $("#informed_consent_view").show();
    $("#initial_inst_view").show();

  });

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
      // validateAns(node, value); // 回答個数制限
      if (is_valid_ans) {
        answers[String(category)][String(question + 1)] = value;
        ans_value = answers[String(category)][String(question + 1)].join("&");
      }
    } else {
      // inputタグが存在しない場合
      answers[String(category)][String(question + 1)] = this.value;
    }
  }

  $("#startq_btn").on("click", function () {
      $("#initial_inst_view").hide();
      setQuestion();
      start_ms = new Date().getTime();
      $("#question_view").show();
    });

  $(".ans_btn").on("click", function () {
    getAnswer();
    var elapsed_ms = new Date().getTime() - start_ms;
    var file_name = $("#personal_code").val() + '_' + $("#getter").val();
    eel.record_answer_time(file_name, String(category), String(question + 1), String(this.value ? this.value : ans_value), elapsed_ms);
    if ((category == 9 && this.value != 1) || (category == 13 && this.value != 1) ){
        category++;
      }
    question++;
    setQuestion();
  });
});

// 記入欄の入力が２文字以上になったら次へボタンを機能化 for 署名
// window.addEventListener('DOMContentLoaded',function(){
//   document.getElementById('submit_sign').disabled = true;
//   document.getElementById('signinput').addEventListener('keyup',function(){
//     if (this.value.length < 2) {
//       document.getElementById('submit_sign').disabled = true;
//     } else {
//       document.getElementById('submit_sign').disabled = false;
//     }
//   },false);
//   document.getElementById('signinput').addEventListener('change',function(){
//     if (this.value.length < 2) {
//       document.getElementById('submit_sign').disabled = true;
//     }
//   },false);
//   },false);

function closeWindow(){
  open('about:blank', '_self').close();    //一度再表示してからClose
}
