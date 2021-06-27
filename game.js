var msg = "";

var animationEvent =
  "webkitAnimationEnd oanimationend msAnimationEnd animationend";

var cpusc = 0;

var usrsc = 0;

var resetAudio = new Audio("sounds/beep.mp3");

var btAudio = new Audio("sounds/beep2.mp3");

$(".playb").on("click", function () {
  $(".fadet").addClass("fade-in");
  $(".fadet").one(animationEvent, function (event) {
    $(".fadet").removeClass("fade-in");
  });

  var uch = $(this).attr("id");
  var cch = Math.floor(Math.random() * 3);

  var imagel = "images/hand" + cch + "l.png";
  var imager = "images/hand" + uch + "r.png";

  if (uch == cch) msg = "Draw!😐";
  else if (
    (uch == 0 && cch == 1) ||
    (uch == 1 && cch == 2) ||
    (uch == 2 && cch == 0)
  ) {
    msg = "You Lost!😕";
    cpusc++;
  } else {
    msg = "You Won!😀";
    usrsc++;
  }

  playSound(2);

  updateImages(imagel, imager);

  updateScores(cpusc, usrsc);

  updateMessage(msg);
});

$(".reset").on("click", function () {
  playSound(1);
  updateImages("images/hand0l.png", "images/hand0r.png");
  updateMessage("Press any button to play!");
  usrsc = 0;
  cpusc = 0;
  updateScores(usrsc, cpusc);
  $(".fadet").addClass("fade-in");
  $(".fadet").one(animationEvent, function (event) {
    $(".fadet").removeClass("fade-in");
  });
});

function updateMessage(msg) {
  $(".mes").text(msg);
  $(".fadet").addClass("fade-in");
  $(".fadet").one(animationEvent, function (event) {
    $(".fadet").removeClass("fade-in");
  });
}

function updateScores(c, u) {
  if (c == u && c != 0) {
    $(".cpu-score").text("😐CPU - " + c);
    $(".user-score").text("😐You - " + u);
  } else if (c > u) {
    $(".cpu-score").text("😎CPU - " + c);
    $(".user-score").text("😔You - " + u);
  } else if (c < u) {
    $(".cpu-score").text("😔CPU - " + c);
    $(".user-score").text("😎You - " + u);
  } else {
    $(".cpu-score").text("CPU - " + c);
    $(".user-score").text("You - " + u);
  }

  $(".fadet").addClass("fade-in");
  $(".fadet").one(animationEvent, function (event) {
    $(".fadet").removeClass("fade-in");
  });
}

function updateImages(im1, im2) {
  $(".hand1").attr("src", im1);
  $(".hand2").attr("src", im2);
}

function playSound(no) {
  if (no == 1) resetAudio.play();
  else btAudio.play();
}
