let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

function game() {

  // Get the buttons by their class names
  const rockButton = document.querySelector('.rock');
  const paperButton = document.querySelector('.paper');
  const scissorsButton = document.querySelector('.scissors');
  const resetButton = document.querySelector('.reset');


  // Get the result div
  const resultDiv = document.querySelector('.result');

  // Get the score elements
  const playerScoreText = document.querySelector('.playerScore');
  const computerScoreText = document.querySelector('.computerScore');

  // Get final result
  const finalResultText = document.querySelector('.finalResult');

  // Get computer choice using Math.random
  function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);
    switch (choice) {
      case 1:
        return 'rock';
        break;
      case 2:
        return 'paper';
        break;
      case 3:
        return 'scissors';
        break;
    }
  }

  // Game logic
  function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
      return "It's a Tie!"
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
      computerScore++;
      return "You Lose! Paper beats Rock";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
      playerScore++;
      return "You Win! Rock beats Paper";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
      computerScore++;
      return "You Lose! Scissors beats Paper";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
      playerScore++;
      return "You Win! Paper beats Rock";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
      computerScore++;
      return "You Lose! Rock beats Scissors";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      playerScore++;
      return "You Win! Scissors beats Paper";
    } else {
      return "That won't work here."
    }
  }

  function updateScore() {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = '0';
    computerScoreText.textContent = '0';
    resultDiv.textContent = '';
    finalResultText.textContent = '';
  }

  function gameWinner() {
    if (playerScore >= winningScore || computerScore >= winningScore) {
      if (playerScore > computerScore) {
        finalResultText.textContent = `You Win. Player: ${playerScore} to Computer: ${computerScore}`;
      } else if (playerScore < computerScore) {
        finalResultText.textContent = `You Lose. Player: ${playerScore} to Computer: ${computerScore}`;
      } else {
        finalResultText.textContent = `Wow, It's a tie. Player: ${playerScore} to Computer: ${computerScore}`;
      }
      setTimeout(() => {
        resetGame();
      }, 2000);
    }

  }


  // Add event listeners to the buttons
  rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playRound('rock', computerSelection);
    resultDiv.textContent = result;
    updateScore();
    gameWinner();
  });

  paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playRound('paper', computerSelection);
    resultDiv.textContent = result;
    updateScore();
    gameWinner();
  });

  scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playRound('scissors', computerSelection);
    resultDiv.textContent = result;
    updateScore();
    gameWinner();
  });

  resetButton.addEventListener('click', () => {
    resetGame();
  });

}

// Runs game
game();


