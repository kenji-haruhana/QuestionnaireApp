var start_ms = 0;
var category = 1;
var question = 0;
var answers = {
  1:{},2: {},3: {},4: {},5: {},6: {},7: {},8: {},9: {},10: {},
 };
var constants = {
  survay_id: "TIPI",
  version_id: 1,

  scale: ["1", "2", "3", "4", "5", "6", "7"],


  survay: {
    1: {
      type: "scale",
      title: "次のことばがあなた自身にどのくらい当てはまるかについて、下の１から７までの回答のうちもっとも適切なものを選んでください。文章全体を総合的に見て，自分にどれだけ当てはまるかを評価してください。",
      list: ["私は自分自身のことを活発で、外向的だと思う"],
    },

    2: {
      type: "scale",
      title: "次のことばがあなた自身にどのくらい当てはまるかについて、下の１から７までの回答のうちもっとも適切なものを選んでください。文章全体を総合的に見て，自分にどれだけ当てはまるかを評価してください。",
      list: ["私は自分自身のことを他人に不満をもち、<br>もめごとを起こしやすいと思う"],
    },

    3: {
      type: "scale",
      title: "次のことばがあなた自身にどのくらい当てはまるかについて、下の１から７までの回答のうちもっとも適切なものを選んでください。文章全体を総合的に見て，自分にどれだけ当てはまるかを評価してください。",
      list: ["私は自分自身のことをしっかりしていて、自分に厳しいと思う"],
    },

    4: {
      type: "scale",
      title: "次のことばがあなた自身にどのくらい当てはまるかについて、下の１から７までの回答のうちもっとも適切なものを選んでください。文章全体を総合的に見て，自分にどれだけ当てはまるかを評価してください。",
      list: ["私は自分自身のことを心配性で、うろたえやすいと思う"],
    },

    5: {
      type: "scale",
      title: "次のことばがあなた自身にどのくらい当てはまるかについて、下の１から７までの回答のうちもっとも適切なものを選んでください。文章全体を総合的に見て，自分にどれだけ当てはまるかを評価してください。",
      list: ["私は自分自身のことを新しいことが好きで、<br>変わった考えをもつと思う"],
    },

    6: {
      type: "scale",
      title: "次のことばがあなた自身にどのくらい当てはまるかについて、下の１から７までの回答のうちもっとも適切なものを選んでください。文章全体を総合的に見て，自分にどれだけ当てはまるかを評価してください。",
      list: ["私は自分自身のことをひかえめで、おとなしいと思う"],
    },

    7: {
      type: "scale",
      title: "次のことばがあなた自身にどのくらい当てはまるかについて、下の１から７までの回答のうちもっとも適切なものを選んでください。文章全体を総合的に見て，自分にどれだけ当てはまるかを評価してください。",
      list: ["私は自分自身のことを人に気をつかう、やさしい人間だと思う"],
    },

    8: {
      type: "scale",
      title: "次のことばがあなた自身にどのくらい当てはまるかについて、下の１から７までの回答のうちもっとも適切なものを選んでください。文章全体を総合的に見て，自分にどれだけ当てはまるかを評価してください。",
      list: ["私は自分自身のことをだらしなく、うっかりしていると思う"],
    },

    9: {
      type: "scale",
      title: "次のことばがあなた自身にどのくらい当てはまるかについて、下の１から７までの回答のうちもっとも適切なものを選んでください。文章全体を総合的に見て，自分にどれだけ当てはまるかを評価してください。",
      list: ["私は自分自身のことを冷静で、気分が安定していると思う"],
    },

    10: {
      type: "scale",
      title: "次のことばがあなた自身にどのくらい当てはまるかについて、下の１から７までの回答のうちもっとも適切なものを選んでください。文章全体を総合的に見て，自分にどれだけ当てはまるかを評価してください。",
      list: ["私は自分自身のことを発想力に欠けた、平凡な人間だと思う"],
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
      var file_name = $("#personal_code").val() + '_' + $("#getter").val();
      eel.post_recorded_files(file_name);
      resultView();
    } else {
      type = constants["survay"][category]["type"];
      title = constants["survay"][category]["title"];
      text = constants["survay"][category]["list"][question];
      progress = (category/10*100).toFixed(0);
      $("#number").text(progress);
    }
  } else {
    type = constants["survay"][category]["type"];
    title = constants["survay"][category]["title"];
    text = constants["survay"][category]["list"][question];
    progress = (category/10*100).toFixed(0);
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
