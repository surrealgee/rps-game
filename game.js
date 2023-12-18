// Global Variables
let playerScore = 0;
let computerScore = 0;
let rounds = 1;

// Nodes 
let scoreDisplay = document.querySelector('.score-number');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const rockBtn = document.querySelector('#rock-btn');
const mainEl = document.querySelector('main');

const playground = document.querySelector('.playground');

// Functions
function startGame() {
    playerScore = 0;
    scoreDisplay.textContent = playerScore;
    loadMainScreen();
}

function playRound(playerSelection, computerSelection) {
    // Tie
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
    // Player Wins
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return `You win!`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return `You win!`;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return `You win!`;
    }
    // Computer Wins
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return `You lose!`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return `You lose!`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return `You lose!`;
    }
};

function getComputerPick() {
    const choices = ["rock", "paper", "scissors"];
    let choiceIndex = Math.round(Math.random() * 2);

    return choices[choiceIndex];
};

function updateScreen(player, computer) {
    mainEl.innerHTML = `
    <div class="playground-step2">
        <div class="player-pick">
            <img src="./${player}-icon.svg" alt="Player Pick">
            <p class="pick-label">YOU PICKED</p>
        </div>
        <div class="house-pick">
            <img src="./${computer}-icon.svg" alt="House Pick">
            <p class="pick-label">THE HOUSE PICKED</p>
        </div>
    </div>
    <div class="result-display">
        <span class="winner">YOU WIN</span>
        <button class="play-btn">PLAY AGAIN</button>
    </div>
    `

    const playBtn = document.querySelector('.play-btn');

    playBtn.addEventListener('click', playAgain);
}

function playAgain() {
    loadMainScreen();
}

function loadMainScreen() {
    mainEl.innerHTML = `
    <main>
        <div class="playground">
            <img id="paper" src="./paper-icon.svg" alt="Paper Button">
            <img id="scissors" src="./scissors-icon.svg" alt="Scissors Button">
            <img id="rock" src="./rock-icon.svg" alt="Rock Button">
        </div>
    </main>
    `
    const playground = document.querySelector('.playground');

    playground.addEventListener('click', (e) => {
        const playerPick = e.target.id
        const computerPick = getComputerPick();
        updateScreen(playerPick, computerPick);

        
    
        const result = playRound(playerPick, computerPick);
        console.log(result);
        updateScore(result);    
    })
}

function updateScore(result) {
    if (result.includes("You win!")) {
        playerScore++;
    } else if (result.includes("You lose!")) {
        computerScore++
    }
    rounds++

    const winnerDisplay = document.querySelector('.winner');

    winnerDisplay.textContent = result.toUpperCase();
    scoreDisplay.textContent = playerScore;
}

// Handlers

// playground.addEventListener('click', (e) => {
//     const playerPick = e.target.id
//     const computerPick = getComputerPick();
//     updateScreen(playerPick, computerPick);

//     const result = playRound(playerPick, computerPick);
//     console.log(result);
//     updateScore(result);    
// })

// Init
startGame();