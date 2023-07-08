
function game() {
  let playerScore = 0;
  let computerScore = 0;

  // Get the buttons by their class names
  const rockButton = document.querySelector('.rock');
  const paperButton = document.querySelector('.paper');
  const scissorsButton = document.querySelector('.scissors');

  const resultDiv = document.querySelector('.result');

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

  function gameWinner() {

    if (playerScore > computerScore) {
      return `You Win. Player: ${playerScore} to Computer: ${computerScore}`
    } else if (playerScore < computerScore) {
      return `You Lose. Player: ${playerScore} to Computer: ${computerScore}`
    } else {
      return `Wow, It's a tie. Player: ${playerScore} to Computer: ${computerScore}`
    }
  }

  // Add event listeners to the buttons
  rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    console.log(playRound('rock', computerSelection));
    const result = playRound('rock', computerSelection);
    resultDiv.textContent = result;
    
  });
  paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    console.log(playRound('paper', computerSelection));
    const result = playRound('paper', computerSelection);
    resultDiv.textContent = result;

  });
  scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    console.log(playRound('scissors', computerSelection));
    const result = playRound('scissors', computerSelection);
    resultDiv.textContent = result;

  });

  // Displays final result of the game
  // console.log(gameWinner());

}

// run game
game();


