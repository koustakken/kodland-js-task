window.onload = () => {
  const game = document.getElementById("game");
  const timeDisplay = document.getElementById("time");
  const timeHeader = document.getElementById("time-header");
  const startButton = document.getElementById("start");
  const resultDisplay = document.getElementById("result");
  const resultHeader = document.getElementById("result-header");
  const gameTime = document.getElementById("game-time");

  let seconds = gameTime.value;
  let milliseconds = 0;
  let score = 0;
  let timer;

  startButton.addEventListener("click", startGame);
  gameTime.addEventListener("change", timeChange);
  gameTime.addEventListener("keyup", timeChange);

  function startGame() {
    startButton.classList.add("hide");
    score = 0;
    timeHeader.classList.remove("hide");
    resultHeader.classList.add("hide");
    createSquare();
    seconds = gameTime.value;
    timer = setInterval(function () {
      milliseconds--;
      if (milliseconds < 0) {
        seconds--;
        milliseconds = 99;
      }

      timeDisplay.innerHTML = `${seconds}.${milliseconds
        .toString()
        .padStart(1, "0")}`;

      if (seconds === 0 && milliseconds === 0) {
        clearInterval(timer);
        endGame();
      }
    }, 10);
  }

  function endGame() {
    timeHeader.classList.add("hide");
    resultHeader.classList.remove("hide");
    startButton.classList.remove("hide");
    resultDisplay.innerHTML = score;
    game.innerHTML = "";
  }

  function createSquare() {
    const square = document.createElement("div");
    square.className = "square";

    square.style.width = Math.floor(Math.random() * 60) + 30 + "px";
    square.style.height = square.style.width;

    const colors = ['red', 'blue', 'yellow', 'black', 'white'];
    square.style.backgroundColor = colors[Math.floor(Math.random() * 4)];

    square.style.position = "absolute";

    square.style.left = Math.floor(Math.random() * 240) + "px";
    square.style.top = Math.floor(Math.random() * 240) + "px";

    

    square.addEventListener('click', function(){
      this.remove();
      score++;
      createSquare();
    });

    game.appendChild(square);
  }

  function timeChange() {
    timeDisplay.innerHTML = `${gameTime.value}.0`;
    seconds = gameTime.value;
  }
};
