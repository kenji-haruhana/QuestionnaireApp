var start_ms = 0;
var category = 1;
var question = 0;
var total = 0;
var file_name = "";
var answers = { 1:{},2: {},3: {},4: {},5: {},6: {},7: {},8: {},9: {} ,10:{} };
var constants = {
  survay_id: "AUDIT",
  version_id: 1,

  freq: ["0", "1", "2","3","4"],
  amount: ["0", "1", "2","3","4"],
  freq2: ["0", "1", "2","3","4"],
  freq3: ["0", "1", "2","3","4"],
  freq4: ["0", "2","4"],

  diag: [ "リスクⅠ群：0～7点（これまでのところ問題なし）",
          "リスクⅡ群：8～14点（飲酒に問題がある）",
          "リスクⅢ群：15～19点（依存症が疑われる）",
          "リスクⅣ群：20～40点（依存症の可能性が高い；専門医療機関での治療が望ましい）"],

  survay: {
    1: {
      type: "freq",
      title: "最もあてはまる選択肢を選んでください。",
      list: ["あなたはアルコール含有飲料をどのくらいの頻度で飲みますか？"],
    },

    2: {
      type: "amount",
      title: "最もあてはまる選択肢を選んでください。",
      list: ["飲酒するときには通常どのくらいの量を飲みますか？"],
    },

    3: {
      type: "freq2",
      title: "最もあてはまる選択肢を選んでください。",
      list: ["1度に6ドリンク以上飲酒することがどのくらいの頻度でありますか？"],
    },

    4: {
      type: "freq3",
      title: "最もあてはまる選択肢を選んでください。",
      list: ["過去1年間に、飲み始めると止められなかった事が、<br>どのくらいの頻度でありましたか？"],
    },

    5: {
      type: "freq3",
      title: "最もあてはまる選択肢を選んでください。",
      list: ["過去1年間に、普通だと行えることを飲酒していたためにできなかったことが、<br>どのくらいの頻度でありましたか？"],
    },

    6: {
      type: "freq3",
      title: "最もあてはまる選択肢を選んでください。",
      list: ["過去1年間に、深酒の後体調を整えるために、<br>朝迎え酒をせねばならなかったことが、どのくらいの頻度でありましたか？"],
    },

    7: {
      type: "freq4",
      title: "最もあてはまる選択肢を選んでください。",
      list: ["過去1年間に、飲酒後、罪悪感や自責の念にかられたことが、<br>どのくらいの頻度でありましたか？"],
    },

    8: {
      type: "freq4",
      title: "最もあてはまる選択肢を選んでください。",
      list: ["過去1年間に、飲酒のため前夜の出来事を思い出せなかったことが、<br>どのくらいの頻度でありましたか？"],
    },


    9: {
      type: "freq5",
      title: "最もあてはまる選択肢を選んでください。",
      list: ["あなたの飲酒のために、あなた自身か他の誰かがけがをしたことがありますか？"],
    },

    10: {
      type: "freq5",
      title: "最もあてはまる選択肢を選んでください。",
      list: ["肉親や親戚・友人・医師あるいは他の健康管理にたずさわる人が、<br>あなたの飲酒について心配したり、<br>飲酒量を減らすように勧めたりしたことがありますか？"],
    },
  },
};

function resultView() {
  $("#question_view").hide();
  $("#result_view").show();

  //get table and decide where to highlight by total score
  var eva_table = document.getElementById("evaluation_list")
  $("#total").text(total);
  if( 0 <= total && total <= 7 ){
    eva_table.rows[1].style.backgroundColor= "#FFFF00";
  } else if( 8 <= total && total <= 14){
    eva_table.rows[2].style.backgroundColor= "#FFFF00";
  } else if( 15 <= total && total <= 19){
    eva_table.rows[3].style.backgroundColor= "#FFFF00";
  } else if( 20 <= total && total <= 40){
    eva_table.rows[4].style.backgroundColor= "#FFFF00";
  }
  eel.record_score(file_name, total);
}

function setQuestion() {
  title = "";
  text = "";

  if (!constants["survay"][category]["list"][question]) {
    category++;
    question = 0;
    if (!constants["survay"][category]) {
      // eel.post_recorded_files(file_name);
      resultView();
    } else {
      type = constants["survay"][category]["type"];
      title = constants["survay"][category]["title"];
      text = constants["survay"][category]["list"][question];
      progress = ((category-1)/10*100).toFixed(0);
      $("#number").text(progress);
    }
  } else {
    type = constants["survay"][category]["type"];
    title = constants["survay"][category]["title"];
    text = constants["survay"][category]["list"][question];
    progress = ((category-1)/10*100).toFixed(0);
    $("#number").text(progress);
  }
  $("#freq").hide();
  $("#amount").hide();
  $("#freq2").hide();
  $("#freq3").hide();
  $("#freq4").hide();
  $("#freq5").hide();
  switch (type) {
    case "freq":
      $("#freq").show();
      break;
    case "amount":
      $("#amount").show();
      break;
    case "freq2":
      $("#freq2").show();
      break;
    case "freq3":
      $("#freq3").show('fast');
      break;
    case "freq4":
      $("#freq4").show('');
      break;
    case "freq5":
      $("#freq5").show('fast');
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
      file_name = $("#personal_code").val() + '_' + $("#getter").val();
      start_ms = new Date().getTime();
      $("#question_view").show();
    });

  $(".ans_btn").on("click", function () {
    answers[String(category)][String(question + 1)] = this.value;
    total += parseInt(this.value);
    var elapsed_ms = new Date().getTime() - start_ms;
    eel.record_answer_time(file_name, String(category), String(question + 1), String(this.value), elapsed_ms);
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
