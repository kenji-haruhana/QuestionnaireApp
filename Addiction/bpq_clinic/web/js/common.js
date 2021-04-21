var start_ms = 0;
var category = 1;
var question = 0;
var total = 0;
var file_name = "";
var answers = {
  1:{},2: {},3: {},4: {},5: {},6: {},7: {},8: {},9: {},10: {},
  11:{},12:{}
 };
var constants = {
  survay_id: "BPQ",
  version_id: 1,

  scale: ["1", "2", "3", "4", "5"],


  survay: {
    1: {
      type: "scale",
      title: "口のなかが乾いているか",
      list: ["あなたがどれだけ身体の状態に気づいているか想像してください。<br>下記のそれぞれの表現のうち、一番あなたの気づきを正確に表わしているものを選んでください。"],
    },

    2: {
      type: "scale",
      title: "どれだけ早く呼吸をしているか",
      list: ["あなたがどれだけ身体の状態に気づいているか想像してください。<br>下記のそれぞれの表現のうち、一番あなたの気づきを正確に表わしているものを選んでください。"],
    },

    3: {
      type: "scale",
      title: "体や身体の一部の腫れ",
      list: ["あなたがどれだけ身体の状態に気づいているか想像してください。<br>下記のそれぞれの表現のうち、一番あなたの気づきを正確に表わしているものを選んでください。"],
    },

    4: {
      type: "scale",
      title: "腕や足の筋肉の緊張",
      list: ["あなたがどれだけ身体の状態に気づいているか想像してください。<br>下記のそれぞれの表現のうち、一番あなたの気づきを正確に表わしているものを選んでください。"],
    },

    5: {
      type: "scale",
      title: "水の摂取によるむくみ感",
      list: ["あなたがどれだけ身体の状態に気づいているか想像してください。<br>下記のそれぞれの表現のうち、一番あなたの気づきを正確に表わしているものを選んでください。"],
    },

    6: {
      type: "scale",
      title: "鳥肌",
      list: ["あなたがどれだけ身体の状態に気づいているか想像してください。<br>下記のそれぞれの表現のうち、一番あなたの気づきを正確に表わしているものを選んでください。"],
    },

    7: {
      type: "scale",
      title: "胃や腸の痛み",
      list: ["あなたがどれだけ身体の状態に気づいているか想像してください。<br>下記のそれぞれの表現のうち、一番あなたの気づきを正確に表わしているものを選んでください。"],
    },

    8: {
      type: "scale",
      title: "胃の膨満感や満腹感",
      list: ["あなたがどれだけ身体の状態に気づいているか想像してください。<br>下記のそれぞれの表現のうち、一番あなたの気づきを正確に表わしているものを選んでください。"],
    },

    9: {
      type: "scale",
      title: "くちびるの震え",
      list: ["あなたがどれだけ身体の状態に気づいているか想像してください。<br>下記のそれぞれの表現のうち、一番あなたの気づきを正確に表わしているものを選んでください。"],
    },

    10: {
      type: "scale",
      title: "“背筋がぞっとして“髪の毛が逆立つ感覚",
      list: ["あなたがどれだけ身体の状態に気づいているか想像してください。<br>下記のそれぞれの表現のうち、一番あなたの気づきを正確に表わしているものを選んでください。"],
    },

    11: {
      type: "scale",
      title: "つばを飲み込む衝動",
      list: ["あなたがどれだけ身体の状態に気づいているか想像してください。<br>下記のそれぞれの表現のうち、一番あなたの気づきを正確に表わしているものを選んでください。"],
    },

    12: {
      type: "scale",
      title: "どれだけ強く心臓が鼓動しているか",
      list: ["あなたがどれだけ身体の状態に気づいているか想像してください。<br>下記のそれぞれの表現のうち、一番あなたの気づきを正確に表わしているものを選んでください。"],
    },
  },
};

// function setResultChart(result_data) {
//   var colorSet = {
//     red: "rgb(255, 99, 132)",
//     orange: "rgb(255, 159, 64)",
//     yellow: "rgb(255, 205, 86)",
//     green: "rgb(75, 192, 192)",
//     blue: "rgb(54, 162, 235)",
//     purple: "rgb(153, 102, 255)",
//     grey: "rgb(201, 203, 207)",
//   };
//   var color = Chart.helpers.color;
//   var config = {
//     type: "radar",
//     data: {
//       labels: ["情緒安定性", "外向性", "開放性", "協調性", "誠実性"],
//       datasets: [
//         {
//           label: "一般平均",
//           backgroundColor: color(colorSet.blue).alpha(0.5).rgbString(),
//           borderColor: colorSet.blue,
//           pointBackgroundColor: colorSet.blue,
//           data: [0.94428706, -0.13489815, 0.44966051, 0.0, -1.01173614],
//         },
//         {
//           label: "あなた",
//           backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
//           borderColor: colorSet.red,
//           pointBackgroundColor: colorSet.red,
//           data: result_data,
//         },
//       ],
//     },
//     options: {
//       animation: false,
//       showTooltips: false,
//       legend: { position: "bottom" },
//       title: {
//         display: true,
//         fontSize: 20,
//         fontColor: "#666",
//         text: "解析結果",
//       },
//       scale: {
//         display: true,
//         pointLabels: {
//           fontSize: 15,
//           fontColor: colorSet.yellow,
//         },
//         ticks: {
//           display: true,
//           fontSize: 12,
//           fontColor: colorSet.green,
//           min: -2,
//           max: 2,
//           beginAtZero: true,
//         },
//         gridLines: {
//           display: true,
//           color: colorSet.yellow,
//         },
//       },
//     },
//   };
//   var myRadar = new Chart($("#result_chart"), config);
//   $(".chartjs-hidden-iframe").css("height", "auto");
// }

function resultView() {
  $("#question_view").hide();
  $("#result_view").show();

  //get table and decide where to highlight by total score
  var eva_table = document.getElementById("evaluation_list")
  $("#total").text(total);
  if( 12 <= total && total <= 21 ){
    eva_table.rows[1].style.backgroundColor= "#FFFF00";
  } else if( 22 <= total && total <= 26){
    eva_table.rows[2].style.backgroundColor= "#FFFF00";
  } else if( 27 <= total && total <= 31){
    eva_table.rows[3].style.backgroundColor= "#FFFF00";
  }else if( 32 <= total && total <= 60){
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
      resultView();
    } else {
      type = constants["survay"][category]["type"];
      title = constants["survay"][category]["title"];
      text = constants["survay"][category]["list"][question];
      progress = ((category - 1)/12*100).toFixed(0);
      $("#number").text(progress);
    }
  } else {
    type = constants["survay"][category]["type"];
    title = constants["survay"][category]["title"];
    text = constants["survay"][category]["list"][question];
    progress = ((category - 1)/12*100).toFixed(0);
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
    $("#initial_inst_view").show();
  });

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
