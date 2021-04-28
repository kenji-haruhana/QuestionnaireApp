var start_ms = 0;
var category = 1;
var question = 0;
var answers = {
  1:{},2: {},3: {},4: {},5: {},6: {},7: {},8: {},9: {},10: {},
  11:{},12:{},13: {},14: {},15: {},16: {},17: {},18: {},19: {},20: {},
  21:{},22:{},23: {},24: {},25: {}
 };
var constants = {
  survay_id: "RS_full",
  version_id: 1,

  scale: ["1", "2", "3", "4", "5", "6", "7",],


  survay: {
    1: {
      type: "scale",
      title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
      list: ["いったん計画をたてたら、それを最後までやり遂げる"],
    },

    2: {
      type: "scale",
      title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
      list: ["たいていの場合、何とかしてやっていける"],
    },

    3: {
      type: "scale",
      title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
      list: ["誰かほかの人よりも自分自身をあてにすることができる"],
    },

    4: {
      type: "scale",
      title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
      list: ["物事に関心を持ち続けることは大切なことだ"],
    },

    5: {
      type: "scale",
      title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
      list: ["もしそうせざるを得ないのなら、ひとりでやっていける"],
    },

    6: {
      type: "scale",
      title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
      list: ["人生で成し遂げてきたことに誇りを感じている"],
    },

    7: {
      type: "scale",
      title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
      list: ["たいていの場合、物事に冷静に対処する"],
    },

    8: {
      type: "scale",
      title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
      list: ["自分自身とうまくつきあっている"],
    },

    9: {
      type: "scale",
      title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
      list: ["1度に多くの物事に対処できると感じる"],
    },

    10: {
      type: "scale",
      title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
      list: ["決断力がある"],
    },

    11: {
      type: "scale",
      title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
      list: ["人生に意味があるということを疑問に思うことはめったにない"],
    },

    12: {
      type: "scale",
      title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
      list: ["焦らず忍耐強く物事に取り組む"],
    },

    13: {
      type: "scale",
      title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
      list: ["これまでに困難を経験してきたので、<br>これからも困難を乗りこえられる"],
    },
    14: {
      type: "scale",
      title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
      list: ["自制心がある"],
    },
      15: {
        type: "scale",
        title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
        list: ["物事に飽きない"],
      },
      16: {
        type: "scale",
        title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
        list: ["たいていの場合、何か笑えることを見つけることができる"],
      },
      17: {
        type: "scale",
        title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
        list: ["自分自身に対する信念によって、つらいときを切り抜ける"],
      },
      18: {
        type: "scale",
        title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
        list: ["いざというときには、<br>たいていほかの人から頼りにされる人間だ"],
      },
      19: {
        type: "scale",
        title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
        list: ["たいてい様々な角度から状況をみることができる"],
      },
      20: {
        type: "scale",
        title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
        list: ["自分がやりたいかやりたくないかということにかかわらず<br>物事を行うことがときどきある"],
      },
      21: {
        type: "scale",
        title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
        list: ["私の人生には意味がある"],
      },
      22: {
        type: "scale",
        title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
        list: ["どうにもできないことをくよくよと考えない"],
      },
      23: {
        type: "scale",
        title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
        list: ["困難な状況にあるとき、<br>たいてい苦境を抜け出す方法を見つけることができる"],
      },
      24: {
        type: "scale",
        title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
        list: ["しなければならないことをやるだけのエネルギーを持っている"],
      },
      25: {
        type: "scale",
        title: "文章を読んで、あなたの気持ちを最も良く表す項目を選んでください。",
        list: ["私のことを好きではない人がいても構わない"],
      },
  },
};

function setResultChart(result_data) {
  var colorSet = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)",
  };
  var color = Chart.helpers.color;
  var config = {
    type: "radar",
    data: {
      labels: ["情緒安定性", "外向性", "開放性", "協調性", "誠実性"],
      datasets: [
        {
          label: "一般平均",
          backgroundColor: color(colorSet.blue).alpha(0.5).rgbString(),
          borderColor: colorSet.blue,
          pointBackgroundColor: colorSet.blue,
          data: [0.94428706, -0.13489815, 0.44966051, 0.0, -1.01173614],
        },
        {
          label: "あなた",
          backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
          borderColor: colorSet.red,
          pointBackgroundColor: colorSet.red,
          data: result_data,
        },
      ],
    },
    options: {
      animation: false,
      showTooltips: false,
      legend: { position: "bottom" },
      title: {
        display: true,
        fontSize: 20,
        fontColor: "#666",
        text: "解析結果",
      },
      scale: {
        display: true,
        pointLabels: {
          fontSize: 15,
          fontColor: colorSet.yellow,
        },
        ticks: {
          display: true,
          fontSize: 12,
          fontColor: colorSet.green,
          min: -2,
          max: 2,
          beginAtZero: true,
        },
        gridLines: {
          display: true,
          color: colorSet.yellow,
        },
      },
    },
  };
  var myRadar = new Chart($("#result_chart"), config);
  $(".chartjs-hidden-iframe").css("height", "auto");
}

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

async function device_check() {
  var check = await eel.device_check()();
  if (!check) {
    alert("脈波取得デバイスの接続を確認してください。");
    window.close();
  }
}

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
