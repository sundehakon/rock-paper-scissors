
const words = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {

    const randomNumber = Math.floor(Math.random() * 3);

    return words[randomNumber];
}
const randomWord = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `It is a tie! Both chose ${playerSelection}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}
function game() {

    let playerPoints = 0;
    let computerPoints = 0;
    let resultTie = 0;

  for(let i = 0; i < 5; i++) {
    const playerSelection = window.prompt("Enter your choice (Rock, Paper, or Scissors):");

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection)
    alert(result);

    if (result.startsWith('You win')) {
        playerPoints++;
    } else if (result.startsWith('You lose')) {
        computerPoints++;
    } else {
        resultTie++;
    }

    if (playerPoints > computerPoints) {
        gameResult = "You beat the computer!"
    } else if (playerPoints < computerPoints) {
        gameResult = "The computer got the best of you, please try again"
    } else if (playerPoints == computerPoints) {
        gameResult = "It's a tie! Please try again" 
    }

}

document.getElementById("rock").addEventListener("click", myFunction)

function myFunction() {
    alert("Hello")
}
alert(`${gameResult}\nPlayer Points: ${playerPoints}\nComputer Points: ${computerPoints}\nTies: ${resultTie}`);
}

game();
