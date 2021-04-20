var start_ms = 0;
var category = 1;
var total = 0;
var question = 0;
var file_name = "";
var answers = {
  1:{},2: {},3: {},4: {},5: {},6: {},7: {},8: {},9: {},10: {},
  11:{},12: {},13: {},14: {},15: {},16: {},17: {},18: {},19: {},20: {}
 };
var constants = {
  survay_id: "DAST",
  version_id: 1,

  yesno: ["1", "0"],


  survay: {
    1: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物使用しましたか？（治療目的での使用を除く）"],
    },

    2: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["乱用目的で処方薬を使用しましたか？"],
    },

    3: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["一度に２種類以上の薬物を使用しましたか？"],
    },

    4: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物を一度も使わずに１週間過ごすことができますか？"],
    },

    5: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物使用を止めたいときには、いつでも止められますか？"],
    },

    6: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["ブラックアウト（記憶が飛んでしまうこと）やフラッシュバック<br>（薬を使ってないのに、使っているような幻覚におそわれること）を<br>経験しましたか？"],
    },

    7: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物使用に対して、後悔や罪悪感を感じたことはありますか？"],
    },

    8: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["あなたの配偶者（あるいは親）が、あなたの薬物使用に対して<br>愚痴をこぼしたことがありますか？"],
    },

    9: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物使用により、あなたと配偶者（あるいは親）との間に<br>問題が生じたことがありますか？"],
    },

    10: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物使用のせいで友達を失ったことがありますか？"],
    },
    11: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物使用のせいで、家庭をほったらかしにしたことがありますか？"],
    },

    12: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物使用のせいで、仕事（あるいは学業）で<br>トラブルが生じたことがありますか？"],
    },

    13: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物使用のせいで、仕事を失ったことがありますか？"],
    },

    14: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物の影響を受けている時にケンカしたことがありますか？"],
    },

    15: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物を手に入れるために、違法な活動をしたことがありますか？"],
    },

    16: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["違法薬物を所持して逮捕されたことがありますか？"],
    },

    17: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物使用を中断した時に、禁断症状（気分が悪くなたり、<br>イライラがひどくなったりすること）を経験したことがありますか？"],
    },

    18: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物使用の結果、医学的な問題（例えば、記憶喪失、肝炎、けいれん、<br>出血など）を経験したことがありますか？"],
    },

    19: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物問題を解決するために、誰かに助けを求めたことがありますか？"],
    },

    20: {
      type: "yesno",
      title: "過去12ヶ月間で当てはまるものを選んでください。",
      list: ["薬物使用に対する治療プログラムを受けたことがありますか？"],
    },
  },
};

function resultView() {
  $("#question_view").hide();
  $("#result_view").show();


  //get table and decide where to highlight by total score
  var eva_table = document.getElementById("evaluation_list")
  $("#total").text(total);
  if( 0 <= total && total <= 5 ){
    eva_table.rows[1].style.backgroundColor= "#FFFF00";
  } else if( 6 <= total && total <= 10){
    eva_table.rows[2].style.backgroundColor= "#FFFF00";
  } else if( 11 <= total && total <= 20){
    eva_table.rows[3].style.backgroundColor= "#FFFF00";
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
      // var file_name = $("#personal_code").val() + '_' + $("#getter").val();
      // eel.post_recorded_files(file_name);
      resultView();
    } else {
      type = constants["survay"][category]["type"];
      title = constants["survay"][category]["title"];
      text = constants["survay"][category]["list"][question];
      progress = ((category-1)/20*100).toFixed(0);
      $("#number").text(progress);
    }
  } else {
    type = constants["survay"][category]["type"];
    title = constants["survay"][category]["title"];
    text = constants["survay"][category]["list"][question];
    progress = ((category-1)/20*100).toFixed(0);
    $("#number").text(progress);
  }
  $("#yesno").hide();
  $("#yesno").show('fast');
  $("#title").html(title);
  $("#text").html(text);
}


function scoring(tempans){
  if(category == 4 || category == 5){
    if(tempans == 0){
    total += 1;
  }
  } else{
  total += tempans;
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
    scoring(parseInt(this.value));
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
