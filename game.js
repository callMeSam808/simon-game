const gamePattern = [];
const userClickedPattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];

let level = 0;

$(".btn").click(function(event) {
  let userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

$(document).keydown(function() {
  if (level === 0) {
    nextSequence();
  }
});

function nextSequence() {
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
