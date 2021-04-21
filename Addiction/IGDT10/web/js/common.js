var start_ms = 0;
var category = 1;
var question = 0;
var total = 0;
var file_name = "";
var answers = {
  1:{},2: {},3: {},4: {},5: {},6: {},7: {},8: {},9: {},10: {}
};
var constants = {
  survay_id: "IGDT10",
  version_id: 1,

  choices: ["0", "1", "2"],

  survay: {
    1: {
      type: "choices",
      title: "それぞれの質問が、過去12ヵ月間、どの程度、そしてどれくらい頻繁（ひんぱん）に、<br>あなたに当てはまるか、「全くなかった、ときどきあった、よくあった」から<br>選んでください。",
      list: ["ゲームをしていないときにどれくらい頻繁（ひんぱん）に、ゲームのことを空想（くうそう）したり、以前にしたゲームのことを考えたり、<br>次にするゲームのことを思ったりすることがありましたか。"],
    },

    2: {
      type: "choices",
      title: "それぞれの質問が、過去12ヵ月間、どの程度、そしてどれくらい頻繁（ひんぱん）に、<br>あなたに当てはまるか、「全くなかった、ときどきあった、よくあった」から<br>選んでください。",
      list: ["ゲームが全くできなかったり、いつもよりゲーム時間が短かったとき、<br>どれくらい頻繁（ひんぱん）にソワソワしたり、イライラしたり、<br>不安になったり、悲しい気持ちになりましたか。"],
    },

    3: {
      type: "choices",
      title: "それぞれの質問が、過去12ヵ月間、どの程度、そしてどれくらい頻繁（ひんぱん）に、<br>あなたに当てはまるか、「全くなかった、ときどきあった、よくあった」から<br>選んでください。",
      list: ["過去12ヵ月間で、十分ゲームをしたと感じるために、<br>もっと頻繁に（ひんぱん）に、またはもっと長い時間ゲームを<br>する必要があると感じたことがありますか。 "],
    },

    4: {
      type: "choices",
      title: "それぞれの質問が、過去12ヵ月間、どの程度、そしてどれくらい頻繁（ひんぱん）に、<br>あなたに当てはまるか、「全くなかった、ときどきあった、よくあった」から<br>選んでください。",
      list: ["過去12ヵ月間で、ゲームをする時間を減らそうとしたが、<br>うまく行かなかったことがありますか。"],
    },

    5: {
      type: "choices",
      title: "それぞれの質問が、過去12ヵ月間、どの程度、そしてどれくらい頻繁（ひんぱん）に、<br>あなたに当てはまるか、「全くなかった、ときどきあった、よくあった」から<br>選んでください。",
      list: ["過去12ヵ月間で、友人に会ったり、以前に楽しんでいた趣味（しゅみ）や<br>遊びをすることよりも、 ゲームの方を選んだことがありますか。 "],
    },

    6: {
      type: "choices",
      title: "それぞれの質問が、過去12ヵ月間、どの程度、そしてどれくらい頻繁（ひんぱん）に、<br>あなたに当てはまるか、「全くなかった、ときどきあった、よくあった」から<br>選んでください。",
      list: ["何らかの問題が生じているにもかかわらず、長時間ゲームをしたことが<br>ありますか。問 題とはたとえば、睡眠不足（すいみんぶそく）、<br>学校での勉強や職場（しょくば）での仕事がはかどらない、<br>家族や友 人と口論（こうろん）する、するべき大切なことをしなかった、<br>などです。 "],
    },

    7: {
      type: "choices",
      title: "それぞれの質問が、過去12ヵ月間、どの程度、そしてどれくらい頻繁（ひんぱん）に、<br>あなたに当てはまるか、「全くなかった、ときどきあった、よくあった」から<br>選んでください。",
      list: ["自分がどれくらいゲームをしていたかについて、家族、友人、<br>または他の大切な人にば れないようにしようとしたり、<br>ゲームについてそのような人たちに嘘（うそ）をついたことがありますか。"],
    },

    8: {
      type: "choices",
      title: "それぞれの質問が、過去12ヵ月間、どの程度、そしてどれくらい頻繁（ひんぱん）に、<br>あなたに当てはまるか、「全くなかった、ときどきあった、よくあった」から<br>選んでください。",
      list: ["嫌な気持ちを晴らすためにゲームをしたことがありますか。<br>嫌な気持ちとは、たとえ ば、無力（むりょく）に感じたり、<br>罪（つみ）の意識（いしき）を感じたり、不安になったりすることです。"],
    },

    9: {
      type: "choices",
      title: "それぞれの質問が、過去12ヵ月間、どの程度、そしてどれくらい頻繁（ひんぱん）に、<br>あなたに当てはまるか、「全くなかった、ときどきあった、よくあった」から<br>選んでください。",
      list: ["ゲームのために大切な人間関係をあやうくしたり、<br>失ったことがありますか。"],
    },

    10: {
      type: "choices",
      title: "それぞれの質問が、過去12ヵ月間、どの程度、そしてどれくらい頻繁（ひんぱん）に、<br>あなたに当てはまるか、「全くなかった、ときどきあった、よくあった」から<br>選んでください。",
      list: ["過去12ヵ月間で、ゲームのために学校での勉強や職場での仕事が<br>うまくできなかったことがありますか。"],
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
  $("#choices").hide();
  $("#choices").show('fast');
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

function scoring(tempans){
  if(category == 9 && tempans ==2 ){
    coupling = 1
  }
  else if(category == 10 && coupling == 1 && tempans == 0){
    total += 1;
  }
  else if(tempans == 2){
  total += tempans;
  }
}

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
