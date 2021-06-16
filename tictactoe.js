let isGameStarted = 0;
let gameCounter = 0;
let turn = 0;
let turnCounter = 0;
let gameMap = [, , , , , , , ,];
let scores = {
  player1: 0,
  player2: 0,
  tie: 0,
};

function gameMapUpdate(player, chosenCell) {
  let clickedCell = chosenCell.id.slice(chosenCell.id.length - 1);
  if (player === 0) {
    gameMap[clickedCell] = "X";
  } else if (player === 1) {
    gameMap[clickedCell] = "O";
  }
  console.log(gameMap);
}

function showTurn() {
  turnCounter += 1;

  if (turn === 0) {
    document.getElementById("gameTurn").innerHTML = "Javascript's turn";
  } else if (turn === 1) {
    document.getElementById("gameTurn").innerHTML = "Ruby's turn";
  }

  gameChecker();
}

function gameChecker() {
  let gameMap2d = [
    [, ,],
    [, ,],
    [, ,],
  ];

  // SCORE TALLY
  let xHorizontalScore0 = 0;
  let xHorizontalScore1 = 0;
  let xHorizontalScore2 = 0;
  let yHorizontalScore0 = 0;
  let yHorizontalScore1 = 0;
  let yHorizontalScore2 = 0;
  let xVerticalScore0 = 0;
  let xVerticalScore1 = 0;
  let xVerticalScore2 = 0;
  let yVerticalScore0 = 0;
  let yVerticalScore1 = 0;
  let yVerticalScore2 = 0;
  let xForwardSlashScore = 0;
  let yForwardSlashScore = 0;
  let xBackSlashScore = 0;
  let yBackSlashScore = 0;

  for (let i = 0; i < 3; i++) {
    gameMap2d[0][i] = gameMap[i];
    gameMap2d[1][i] = gameMap[i + 3];
    gameMap2d[2][i] = gameMap[i + 6];
  }

  // Horizontal Checking
  for (let x = 0; x < 3; x++) {
    if (gameMap2d[0][x] === "X") {
      xHorizontalScore0 += 1;
    }
    if (gameMap2d[1][x] === "X") {
      xHorizontalScore1 += 1;
    }
    if (gameMap2d[2][x] === "X") {
      xHorizontalScore2 += 1;
    }

    if (gameMap2d[0][x] === "O") {
      yHorizontalScore0 += 1;
    }
    if (gameMap2d[1][x] === "O") {
      yHorizontalScore1 += 1;
    }
    if (gameMap2d[2][x] === "O") {
      yHorizontalScore2 += 1;
    }
  }

  // Vertical Checking
  for (let y = 0; y < 3; y++) {
    if (gameMap2d[y][0] === "X") {
      xVerticalScore0 += 1;
    }
    if (gameMap2d[y][1] === "X") {
      xVerticalScore1 += 1;
    }
    if (gameMap2d[y][2] === "X") {
      xVerticalScore2 += 1;
    }

    if (gameMap2d[y][0] === "O") {
      yVerticalScore0 += 1;
    }
    if (gameMap2d[y][1] === "O") {
      yVerticalScore1 += 1;
    }
    if (gameMap2d[y][2] === "O") {
      yVerticalScore2 += 1;
    }
  }

  // Forward Slash Checking - /
  if (gameMap2d[2][0] === "X") {
    xForwardSlashScore += 1;
  }
  if (gameMap2d[1][1] === "X") {
    xForwardSlashScore += 1;
  }
  if (gameMap2d[0][2] === "X") {
    xForwardSlashScore += 1;
  }

  if (gameMap2d[2][0] === "O") {
    yForwardSlashScore += 1;
  }
  if (gameMap2d[1][1] === "O") {
    yForwardSlashScore += 1;
  }
  if (gameMap2d[0][2] === "O") {
    yForwardSlashScore += 1;
  }

  // Back Slash Checking - \
  for (let xy = 0; xy < 3; xy++) {
    if (gameMap2d[xy][xy] === "X") {
      xBackSlashScore += 1;
    }
    if (gameMap2d[xy][xy] === "O") {
      yBackSlashScore += 1;
    }
  }

  // SEE CONSOLE.LOG FOR MANUAL REVIEW
  // console.log(xHorizontalScore0);
  // console.log(xHorizontalScore1);
  // console.log(xHorizontalScore2);
  // console.log(yHorizontalScore0);
  // console.log(yHorizontalScore1);
  // console.log(yHorizontalScore2);

  // console.log(xVerticalScore0);
  // console.log(xVerticalScore1);
  // console.log(xVerticalScore2);
  // console.log(yVerticalScore0);
  // console.log(yVerticalScore1);
  // console.log(yVerticalScore2);

  // console.log(xForwardSlashScore);
  // console.log(yForwardSlashScore);
  // console.log(xBackSlashScore);
  // console.log(yBackSlashScore);

  // PROCESS WINNER
  if (
    xHorizontalScore0 === 3 ||
    xHorizontalScore1 === 3 ||
    xHorizontalScore2 === 3 ||
    xVerticalScore0 === 3 ||
    xVerticalScore1 === 3 ||
    xVerticalScore2 === 3 ||
    xForwardSlashScore === 3 ||
    xBackSlashScore === 3
  ) {
    console.log("Player 1 Wins!");
    document.getElementById("gameTurn").innerHTML = "Javascript Player 1 Wins!";
    scores.player1 += 1;
    isGameStarted = 0;
    document.body.style.backgroundImage =
      "url(https://i.imgur.com/n9zRSTJh.jpg)";
    showScore();
  } else if (
    yHorizontalScore0 === 3 ||
    yHorizontalScore1 === 3 ||
    yHorizontalScore2 === 3 ||
    yVerticalScore0 === 3 ||
    yVerticalScore1 === 3 ||
    yVerticalScore2 === 3 ||
    yForwardSlashScore === 3 ||
    yBackSlashScore === 3
  ) {
    console.log("Player 2 Wins!");
    document.getElementById("gameTurn").innerHTML = "Ruby Player 2 Wins!";
    scores.player2 += 1;
    isGameStarted = 0;
    document.body.style.backgroundImage =
      "url(https://i.imgur.com/4hZAFH0h.jpg)";
    https: showScore();
  } else if (turnCounter === 9) {
    console.log("Tie Game!");
    document.getElementById("gameTurn").innerHTML = "Tie Game!";
    scores.tie += 1;
    isGameStarted = 0;
    showScore();
  }
}

function playerTurn(player, chosenCell) {
  let imgJavascript = document.createElement("img");
  let imgRuby = document.createElement("img");
  imgJavascript.src = "https://i.imgur.com/neISdOf.png";
  imgRuby.src = "https://i.imgur.com/RKgXrJ1.png";

  if (player === 0) {
    chosenCell.appendChild(imgJavascript);
    gameMapUpdate(player, chosenCell);
  } else if (player === 1) {
    chosenCell.appendChild(imgRuby);
    gameMapUpdate(player, chosenCell);
  }
}

document.getElementById("cell0").addEventListener("click", function () {
  console.log("cell-0 clicked");
  if (isGameStarted === 1) {
    if (cell0.children.length === 0) {
      if (turn === 0) {
        playerTurn(0, cell0);
        turn = 1;
        showTurn();
      } else if (turn === 1) {
        playerTurn(1, cell0);
        turn = 0;
        showTurn();
      }
    } else {
      console.log("Cell is occupied");
    }
  } else {
    console.log("Press Play! to Start Game");
  }
});

document.getElementById("cell1").addEventListener("click", function () {
  console.log("cell-1 clicked");
  if (isGameStarted === 1) {
    if (cell1.children.length === 0) {
      if (turn === 0) {
        playerTurn(0, cell1);
        turn = 1;
        showTurn();
      } else if (turn === 1) {
        playerTurn(1, cell1);
        turn = 0;
        showTurn();
      }
    } else {
      console.log("Cell is occupied");
    }
  } else {
    console.log("Press Play! to Start Game");
  }
});

document.getElementById("cell2").addEventListener("click", function () {
  console.log("cell-2 clicked");
  if (isGameStarted === 1) {
    if (cell2.children.length === 0) {
      if (turn === 0) {
        playerTurn(0, cell2);
        turn = 1;
        showTurn();
      } else if (turn === 1) {
        playerTurn(1, cell2);
        turn = 0;
        showTurn();
      }
    } else {
      console.log("Cell is occupied");
    }
  } else {
    console.log("Press Play! to Start Game");
  }
});

document.getElementById("cell3").addEventListener("click", function () {
  console.log("cell-3 clicked");
  if (isGameStarted === 1) {
    if (cell3.children.length === 0) {
      if (turn === 0) {
        playerTurn(0, cell3);
        turn = 1;
        showTurn();
      } else if (turn === 1) {
        playerTurn(1, cell3);
        turn = 0;
        showTurn();
      }
    } else {
      console.log("Cell is occupied");
    }
  } else {
    console.log("Press Play! to Start Game");
  }
});

document.getElementById("cell4").addEventListener("click", function () {
  console.log("cell-4 clicked");
  if (isGameStarted === 1) {
    if (cell4.children.length === 0) {
      if (turn === 0) {
        playerTurn(0, cell4);
        turn = 1;
        showTurn();
      } else if (turn === 1) {
        playerTurn(1, cell4);
        turn = 0;
        showTurn();
      }
    } else {
      console.log("Cell is occupied");
    }
  } else {
    console.log("Press Play! to Start Game");
  }
});

document.getElementById("cell5").addEventListener("click", function () {
  console.log("cell-5 clicked");
  if (isGameStarted === 1) {
    if (cell5.children.length === 0) {
      if (turn === 0) {
        playerTurn(0, cell5);
        turn = 1;
        showTurn();
      } else if (turn === 1) {
        playerTurn(1, cell5);
        turn = 0;
        showTurn();
      }
    } else {
      console.log("Cell is occupied");
    }
  } else {
    console.log("Press Play! to Start Game");
  }
});

document.getElementById("cell6").addEventListener("click", function () {
  console.log("cell-6 clicked");
  if (isGameStarted === 1) {
    if (cell6.children.length === 0) {
      if (turn === 0) {
        playerTurn(0, cell6);
        turn = 1;
        showTurn();
      } else if (turn === 1) {
        playerTurn(1, cell6);
        turn = 0;
        showTurn();
      }
    } else {
      console.log("Cell is occupied");
    }
  } else {
    console.log("Press Play! to Start Game");
  }
});

document.getElementById("cell7").addEventListener("click", function () {
  console.log("cell-7 clicked");
  if (isGameStarted === 1) {
    if (cell7.children.length === 0) {
      if (turn === 0) {
        playerTurn(0, cell7);
        turn = 1;
        showTurn();
      } else if (turn === 1) {
        playerTurn(1, cell7);
        turn = 0;
        showTurn();
      }
    } else {
      console.log("Cell is occupied");
    }
  } else {
    console.log("Press Play! to Start Game");
  }
});

document.getElementById("cell8").addEventListener("click", function () {
  console.log("cell-8 clicked");
  if (isGameStarted === 1) {
    if (cell8.children.length === 0) {
      if (turn === 0) {
        playerTurn(0, cell8);
        turn = 1;
        showTurn();
      } else if (turn === 1) {
        playerTurn(1, cell8);
        turn = 0;
        showTurn();
      }
    } else {
      console.log("Cell is occupied");
    }
  } else {
    console.log("Press Play! to Start Game");
  }
});

function startGame() {
  document
    .getElementById("gameStartButton")
    .addEventListener("click", function () {
      gameCounter += 1;
      isGameStarted = 1;
      console.log(`Game ${gameCounter} Started`);
      document.getElementById("scoreElement").style.display = "none";
      document.getElementById("gameStartButton").style.display = "none";
      document.getElementById("gameNumber").style.display = "block";
      document.getElementById("gameNumber").innerHTML = `GAME# ${gameCounter}`;
      document.getElementById("gameTurn").innerHTML = "Javascript's turn";
      gameReset();
    });
}

function showScore() {
  document.getElementById("scoreElement").style.display = "block";
  document.getElementById(
    "scoreElement"
  ).innerHTML = `SCORES - JS: ${scores.player1} RUBY: ${scores.player2} TIE: ${scores.tie}`;
  document.getElementById("gameNumber").style.display = "none";
  playAgain();
}

function playAgain() {
  document.getElementById("gameStartButton").style.display = "block";
  document.getElementById("gameStartButton").innerHTML = "Play Again!";
}

function gameReset() {
  turn = 0;
  turnCounter = 0;
  gameMap = [, , , , , , , ,];
  document.getElementById("cell0").innerHTML = "";
  document.getElementById("cell1").innerHTML = "";
  document.getElementById("cell2").innerHTML = "";
  document.getElementById("cell3").innerHTML = "";
  document.getElementById("cell4").innerHTML = "";
  document.getElementById("cell5").innerHTML = "";
  document.getElementById("cell6").innerHTML = "";
  document.getElementById("cell7").innerHTML = "";
  document.getElementById("cell8").innerHTML = "";
  document.body.style.backgroundImage = "url(https://i.imgur.com/Zl0QVFIl.jpg)";
}

startGame();
