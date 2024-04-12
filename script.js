function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "Computer wins!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Player wins!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Computer wins!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Player wins!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer wins!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Player wins!";
    } else {
        return "It's a draw!";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playGame() {
    let playerSelection, computerSelection;
    let result;
    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose Rock, Paper or Scissors!");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result === "Player wins!") {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        } else if (result === "Computer wins!") {
            computerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        } else 
        console.log("It's a draw, try again!");
    }

    if (playerScore > computerScore) {
        console.log("Game over, Player wins!");
    } else {
        console.log("Game over, Computer wins!");
    }
}

playGame();
