$("li a").css("color", "#BA55D3");

$("button").css("color", "#BA55D3");

$("#color").on("mouseenter", function () {
  $(this).css("color", "#9932CC");
  $(this).css("font-weight", "bold");
});
$("#color").on("mouseleave", function () {
  $(this).css("color", "#BA55D3");
  $(this).css("font-weight", "normal");
});

$("li a").on("mouseenter", function () {
  $(this).css("color", "#9932CC");
  $(this).css("font-weight", "bold");
});
$("li a").on("mouseleave", function () {
  $(this).css("color", "#BA55D3");
  $(this).css("font-weight", "normal");
});

$("button").on("mouseenter", function () {
  $(this).css("color", "#9932CC");
  $(this).css("font-weight", "bold");
});
$("button").on("mouseleave", function () {
  $(this).css("color", "#BA55D3");
  $(this).css("font-weight", "normal");
});


var el = document.getElementById('btn-play');
var playing = false; // текущее состояние плеера

var player = new Audio('Blow.mp3');
player.preload = "auto";
player.addEventListener('ended', function () { // слушаем окончание трека
  el.innerText = "Play";
  playing = false;
});
el.addEventListener('click', playPause); // слушаем нажатие на кнопку

function playPause() {
  if (playing) {
    player.pause();
    el.innerText = "Paused";
  } else {
    player.play();
    el.innerText = "Playing..";
  }
  playing = !playing;
}