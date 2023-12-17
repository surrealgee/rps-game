// HTML Nodes
const newGameBtn = document.querySelector('#newGame');
const playBtn = document.querySelector('.playBtn');
const display = document.querySelector('#display');
const winnerDisplay = document.querySelector('#winnerDisplay')

const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const roundsDisplay = document.querySelector('#totalRounds');

// Global Variables
let playerScore = 0;
let computerScore = 0;
let rounds = 1;


// Event Handlers
playBtn.addEventListener('click', (e) => {
    const playersChoice = e.target.id;
    const roundResult = playRound(playersChoice, getComputerChoice());

    updateScore(roundResult);

    display.textContent = roundResult;

    updateScreen();

    if (playerScore === 5) {
        winnerDisplay.textContent = `You won the war, ${playerScore} by ${computerScore}!`;
    } else if (computerScore === 5) {
        winnerDisplay.textContent = `You lost the war, ${computerScore} by ${playerScore}!`;
    }
});

newGameBtn.addEventListener('click', newGame);

// Functions
function newGame() {
    playerScore = 0;
    computerScore = 0;
    rounds = 1;

    display.textContent = "";
    winnerDisplay.textContent = "";

    updateScreen();
}

function updateScore(result) {
    if (result.includes("You win!")) {
        playerScore++;
    } else if (result.includes("You lose!")) {
        computerScore++
    }
    rounds++;    
}

function updateScreen () {
    roundsDisplay.textContent = `Round: ${rounds}`;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choiceIndex = Math.round(Math.random() * 2);

    return choices[choiceIndex];
};

function playRound(playerSelection, computerSelection) {
    // Tie
    if (playerSelection == computerSelection) {
        return "It's a tie. Play again!";
    }
    // Player Wins
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    // Computer Wins
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
};