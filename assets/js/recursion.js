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


function generateRandomSequence () {
for (i = 0; i < colors.length; i++) {
  level.push(colors[getRandomIntInclusive()]); //The maximum is inclusive and the minimum is inclusive
}

// console.log(keys)
// //loop this level ARRAYS
// for() {
//   var targetedColor = document.querySelector('#' + level[i])
//
// }

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
  }  // if (level[1] === 'red') {
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
  //   setTimeout(changeColorRed, 2000);
  // } else if (level[1] === 'green') {
  //   setTimeout(changeColorGreen, 2000);
  // } else if (level[1] === 'blue') {
  //   setTimeout(changeColorBlue, 2000);
  // } else if (level[1] === 'yellow') {
  //   setTimeout(changeColorYellow, 2000);
  // }
  //
  // if (level[2] === 'red') {
  //   setTimeout(changeColorRed, 3000);
  // } else if (level[2] === 'green') {
  //   setTimeout(changeColorGreen, 3000);
  // } else if (level[2] === 'blue') {
  //   setTimeout(changeColorBlue, 3000);
  // } else if (level[2] === 'yellow') {
  //   setTimeout(changeColorYellow, 3000);
  // }
  //
  // if (level[3] === 'red') {
  //   setTimeout(changeColorRed, 4000);
  // } else if (level[3] === 'green') {
  //   setTimeout(changeColorGreen, 4000);
  // } else if (level[3] === 'blue') {
  //   setTimeout(changeColorBlue, 4000);
  // } else if (level[3] === 'yellow') {
  //   setTimeout(changeColorYellow, 4000);
  // }
  //
  // if (level[4] === 'red') {
  //   setTimeout(changeColorRed, 5000);
  // } else if (level[4] === 'green') {
  //   setTimeout(changeColorGreen, 5000);
  // } else if (level[4] === 'blue') {
  //   setTimeout(changeColorBlue, 5000);
  // } else if (level[4] === 'yellow') {
  //   setTimeout(changeColorYellow, 5000);
  // }
  //
  // if (level[5] === 'red') {
  //   setTimeout(changeColorRed, 6000);
  // } else if (level[5] === 'green') {
  //   setTimeout(changeColorGreen, 6000);
  // } else if (level[5] === 'blue') {
  //   setTimeout(changeColorBlue, 6000);
  // } else if (level[5] === 'yellow') {
  //   setTimeout(changeColorYellow, 6000);
  // }
  //
  // if (level[6] === 'red') {
  //   setTimeout(changeColorRed, 7000);
  // } else if (level[6] === 'green') {
  //   setTimeout(changeColorGreen, 7000);
  // } else if (level[6] === 'blue') {
  //   setTimeout(changeColorBlue, 7000);
  // } else if (level[6] === 'yellow') {
  //   setTimeout(changeColorYellow, 7000);
  // }
  //
  // if (level[7] === 'red') {
  //   setTimeout(changeColorRed, 8000);
  // } else if (level[7] === 'green') {
  //   setTimeout(changeColorGreen, 8000);
  // } else if (level[7] === 'blue') {
  //   setTimeout(changeColorBlue, 8000);
  // } else if (level[7] === 'yellow') {
  //   setTimeout(changeColorYellow, 8000);
  // }
  //
  // if (level[8] === 'red') {
  //   setTimeout(changeColorRed, 9000);
  // } else if (level[8] === 'green') {
  //   setTimeout(changeColorGreen, 9000);
  // } else if (level[8] === 'blue') {
  //   setTimeout(changeColorBlue, 9000);
  // } else if (level[8] === 'yellow') {
  //   setTimeout(changeColorYellow, 9000);
  // }
  //
  // if (level[9] === 'red') {
  //   setTimeout(changeColorRed, 10000);
  // } else if (level[9] === 'green') {
  //   setTimeout(changeColorGreen, 10000);
  // } else if (level[9] === 'blue') {
  //   setTimeout(changeColorBlue, 10000);
  // } else if (level[9] === 'yellow') {
  //   setTimeout(changeColorYellow, 10000);

  // }
