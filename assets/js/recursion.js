var colors = ["red", "blue", "green", "yellow"];
var level = [];
var keyedColors = [];
function getRandomIntInclusive() {
  min = Math.ceil(0);
  max = Math.floor(colors.length);
  return Math.floor(Math.random() * (colors.length));
}
function removeStartButton () {
  body.removeChild(startButton);
  h1.innerHTML = "";
}

function removeInstructions () {
  words.removeChild(instructions);
}


function generateRandomSequence () {
for (i = 0; i < colors.length; i++) {
  level.push(colors[getRandomIntInclusive()]); //The maximum is inclusive and the minimum is inclusive
}

  for (var i = 1; i <= 10; i++) {
    if (level[i-1] === 'red') {
      setTimeout(changeColorRed, i * 1000);
    } else if (level[i-1] === 'green') {
      setTimeout(changeColorGreen, i * 1000);
    } else if (level[i-1] === 'blue') {
      setTimeout(changeColorBlue, i * 1000);
    } else if (level[i-1] === 'yellow') {
      setTimeout(changeColorYellow, i * 1000);
    }
  }
}


function checkEqual () {
  if (keyedColors.length !== level.length) {
    return false;
  }
  for (i = 0; i < keyedColors.length; i++) {
    if (keyedColors[i] !== level[i]) {
      return false;
    }
  }
  return true;
}

function checkNotEqual () {
  for (i = 0; i < keyedColors.length; i++ ) {
    if (keyedColors[i] !== level[i]) {
      return true;
    }
  }
}
