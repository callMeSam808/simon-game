const gamePattern = [];
let userClickedPattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];

let level = 0;

$(document).keydown(function() {
  if (level === 0) {
    nextSequence();
  }
});

$(".btn").click(function(event) {
  let userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (currentLevel === gamePattern.length - 1) {
      setTimeout(nextSequence, 1000);
    }
  }
  else {
    let audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
  }
}

function nextSequence() {
  userClickedPattern = [];
  $("h1").text(`Level ${level}`);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100, playSound(randomChosenColour)).fadeIn(100);
  level++;
}

function animatePress(currentColor) {
  let color = $("."+currentColor);
  color.addClass("pressed");
  setTimeout(function() {
    color.removeClass("pressed");
  }, 100);
}

function playSound(color) {
  let audio;
  switch (color) {
    case "red":
      audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case "blue":
      audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
    case "green":
      audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
    case "yellow":
      audio = new Audio("sounds/yellow.mp3");
      audio.play();
      break;
  }
}
