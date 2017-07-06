
document.addEventListener('DOMContentLoaded', init);
var startButton = document.querySelector('#button');
var body = document.querySelector('body');
var words = document.querySelector('#words');
var allButtons = document.querySelectorAll('button');
var button = document.querySelector('button');
var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');
var h3 = document.querySelector('h3');
var instructions = document.querySelector('p');
var levelNumber = 1;

function init () {
  var keys = document.querySelectorAll('.colors div');
  var colorClass = document.querySelector('.colors');
  var redSound = document.querySelector('#redSound');
  var startButton = document.querySelector('#button');
  startButton.addEventListener ('click', function () {
    setTimeout(generateRandomSequence, 2000);
    removeStartButton();
    removeInstructions();
    h2.innerHTML="Level";
    h3.innerHTML="1";
  });

  button.addEventListener('mouseover', goodLuckText);
  function goodLuckText () {
    button.innerHTML = 'GOOD LUCK!';
  }

  button.addEventListener('mouseleave', startText);
  function startText () {
    button.innerHTML = 'start';
  }

  function returnTrue () {
    return true;
  }

  function removeH4 () {
    var h4 = document.querySelector('h4');
    words.removeChild(h4);
  }
  keys.forEach( function (div) {
    document.addEventListener ('keydown', pushButton);
  });


  function pushButton (e) {
    var keyCode = e.keyCode;
    if(keyCode === 71 || keyCode === 74 || keyCode === 72 || keyCode === 75) {
    if (keyCode === 75) {
      changeColorRed();
      keyedColors.push("red");
    } else if (keyCode === 71) {
      changeColorGreen();
      keyedColors.push("green");
    } else if (keyCode === 72) {
      changeColorBlue();
      keyedColors.push("blue");
    } else if (keyCode === 74) {
      changeColorYellow();
      keyedColors.push("yellow");
    }

    console.log(keyedColors);
    console.log(level);
    // for(var i = 0; i < keyedColors.length; i++ )
    if (checkNotEqual()) {
      // alert('try again');
      h1.innerHTML = "GAME OVAH!";
      // generateRandomSequence();
      keyedColors = [];
      level = [];
      colors = ["red", "blue", "green", "yellow"];
      levelNumber = 1;
      h2.innerHTML = "";
      h3.innerHTML = "";

      allButtons = document.querySelectorAll('button');
      console.log(allButtons.length);
      if (allButtons.length === 1) {
        h1.innerHTML = 'CMON, YOU HAVENT EVEN PRESSED THE START BUTTON YET';
        h2.innerHTML = '';
        h3.innerHTML = '';
      }

      if (allButtons.length === 0) {
      var restart = document.createElement('button');
      var restartText = document.createTextNode("Restart");
      restart.appendChild(restartText);
      document.body.appendChild(restart);
      restart.addEventListener('click', function () {
        generateRandomSequence();
        body.removeChild(restart);
        h1.innerHTML = "";
        h2.innerHTML = "Level";
        h3.innerHTML = "1";
      });}
      return;
    }

    if (checkEqual()) {
      if(level.length === 10) {
        goodJob = document.createElement('h5');
        goodJob.innerHTML = "CONGRAGULATIONS!";
        words.appendChild(goodJob);

        allButtons = document.querySelectorAll('button');
        if (allButtons.length === 0) {
        var restart = document.createElement('button');
        var restartText = document.createTextNode("Restart");
        restart.appendChild(restartText);
        document.body.appendChild(restart);
        restart.addEventListener('click', function () {
          generateRandomSequence();
          body.removeChild(restart);
          h1.innerHTML = "";
          h2.innerHTML = "Level";
          h3.innerHTML = "1";
          words.removeChild(goodJob);
        });}

        return;
      }
      levelNumber += 1;
      var levelNumberString = levelNumber.toString();
      console.log(levelNumber);
      // alert('good job');
      // h1.innerHTML = 'Good Job!';
      h2.innerHTML = 'Level';
      h3.innerHTML = levelNumberString;
      h1.style.fontcolor = "yellow";
      var goodJob = document.createElement('h4');
      goodJob.innerHTML = "GOOD JOB!";
      words.appendChild(goodJob);
      setTimeout(removeH4, 1000);
      colors.push(colors[getRandomIntInclusive()]);
      level = [];
      keyedColors = [];
      setTimeout(generateRandomSequence, 2000);
      console.log(level.length);
      }
    }
  }
} // init function close
