
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;
  alert(choice);
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
