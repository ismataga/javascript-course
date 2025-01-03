const score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  updateScoreElement();

  // Function to get the computer's move
  function getComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) return "rock";
    else if (randomNumber < 2 / 3) return "paper";
    else return "scissors";
  }

  // Function to determine the result of the game
  function determineResult(playerMove, computerMove) {
    if (playerMove === computerMove) {
      score.ties += 1;
      return "Tie";
    } else if (
      (playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "paper")
    ) {
      score.wins += 1;
      return "You win";
    } else {
      score.losses += 1;
      return "You lose";
    }
  }

  // Function to update the score on the page
  function updateScoreElement() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  // Function to play the game
  function playGame(playerMove) {
    const computerMove = getComputerMove();
    const result = determineResult(playerMove, computerMove);

    localStorage.setItem("score", JSON.stringify(score));
    updateScoreElement();

    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(
      ".js-move"
    ).innerHTML = `You chose ${playerMove} - Computer chose ${computerMove}`;
  }

  // Function to reset the score
  function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem("score");
    updateScoreElement();
  }