// Global variables
let gamePattern = [];
let userClickedPattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];
let started = false;
let level = 0;


// Game start with keydown event
startGame();

function startGame() {
  if (started === false) {
    $(document).keydown(function() {
      started = true;
      nextSequence();
      $(document).off("keydown");
      $(".btn").click(userTurn);
    });
  }
}


// Handle user turn and check each answer with click event
function userTurn(event) {
  let userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (currentLevel === gamePattern.length - 1) {
      setTimeout(nextSequence, 1000);
    }
  }
  else {
    gameOver();
  }
}


// Game over and restart with keydown event
function gameOver() {
  let audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  $("h1").text("Game Over, Press Any Key to Restart");
  $(document).keydown(startOver);
  $(".btn").off("click");
}

function startOver() {
  level = 0;
  gamePattern = [];
  $("h1").text("Press A Key to Start");
  started = false;
  startGame();
}


// Computer turn
function nextSequence() {
  userClickedPattern = [];
  $("h1").text(`Level ${level}`);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100, playSound(randomChosenColour)).fadeIn(100);
  level++;
}


// Animations and sounds
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
