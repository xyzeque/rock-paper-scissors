
// get computer choice using Math.random
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

getComputerChoice();

// rock paper scissors game logic
function playRound(playerSelection, computerSelection) {

  if (playerSelection == computerSelection) {
    return "It's a Tie!"
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return "You Win! Rock beats Paper";
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return "You Win! Paper beats Rock";
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return "You Win! Scissors beats Paper";
  }
}

const computerSelection = getComputerChoice();
console.log(playRound('scissors', computerSelection));
