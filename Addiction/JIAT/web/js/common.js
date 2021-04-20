var start_ms = 0;
var category = 1;
var question = 0;
var total = 0;
var file_name = "";
var answers = {
  1:{},2: {},3: {},4: {},5: {},6: {},7: {},8: {},9: {},10: {},
  11:{},12: {},13: {},14: {},15: {},16: {},17: {},18: {},19: {},20: {}
 };
var constants = {
  survay_id: "JIAT",
  version_id: 1,

  scale: ["1", "2","3","4","5"],


  survay: {
    1: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["気がつくと思っていたより、<br>長い時間インターネットをしていることがありますか。"],
    },

    2: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["インターネットをする時間を増やすために、家庭での仕事や役割を<br>おろそかにすることがありますか。"],
    },

    3: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["配偶者や友人と過ごすよりも、インターネットを選ぶことがありますか。"],
    },

    4: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["インターネットで新しい仲間を作ることがありますか。"],
    },

    5: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["インターネットをしている時間が長いと周りの人から<br>文句を言われたことがありますか。"],
    },

    6: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["インターネットをしている時間が長くて、<br>学校の成績や学業に支障をきたすことがありますか。"],
    },

    7: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["他にやらなければならないことがあっても、<br>まず先に電子メールをチェックすることがありますか。"],
    },

    8: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["インターネットのために、仕事の能率や成果が下がったことがありますか。"],
    },

    9: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["人にインターネットで何をしているのか聞かれたとき防衛的になったり、<br>隠そうとしたことがどれくらいありますか。"],
    },

    10: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["日々の生活の心配事から心をそらすためにインターネットで<br>心を静めることがありますか。"],
    },
    11: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["次にインターネットをするときのことを考えている自分に<br>気づくことがありますか。"],
    },

    12: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["インターネットの無い生活は、退屈でむなしく、<br>つまならいものだろうと恐ろしく思うことがありますか。"],
    },

    13: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["インターネットをしている最中に誰かに邪魔をされると、いらいらしたり、怒ったり、大声を出したりすることがありますか。"],
    },

    14: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["睡眠時間をけずって、深夜までインターネットをすることがありますか。"],
    },

    15: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["インターネットをしていないときでもインターネットのことばかり考えていたり、インターネットをしているところを空想したりすることが<br>ありますか。"],
    },

    16: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["インターネットをしているとき、「あと数分だけ」と言っている自分に<br>気がつくことがありますか。"],
    },

    17: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["インターネットをする時間を減らそうとしても、<br>できないことがありますか。"],
    },

    18: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["インターネットをしていた時間の長さを隠そうとすることがありますか。"],
    },

    19: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["誰かと外出するより、インターネットを選ぶことがありますか。"],
    },

    20: {
      type: "scale",
      title: "最もあてはまる回答を1つ選び、クリックしてください。<br>⾃分に関係のない質問であれば「全くない」を選んでください。",
      list: ["インターネットをしていないと憂うつになったり、いらいらしたりしても、再開すると嫌な気持ちが消えてしまうことがありますか。"],
    },
  },
};

function resultView() {
  $("#question_view").hide();
  $("#result_view").show();

  //get table and decide where to highlight by total score
  var eva_table = document.getElementById("evaluation_list")
  $("#total").text(total);
  if( 20 <= total && total <= 39 ){
    eva_table.rows[1].style.backgroundColor= "#FFFF00";
  } else if( 40 <= total && total <= 69){
    eva_table.rows[2].style.backgroundColor= "#FFFF00";
  } else if( 70 <= total && total <= 100){
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
