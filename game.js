const gamePattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];

let randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

$("#"+randomChosenColour).fadeOut(100, playSound).fadeIn(100);



function playSound() {
  let audio;
  switch (randomChosenColour) {
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

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

