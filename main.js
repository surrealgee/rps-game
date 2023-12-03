function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choiceIndex = Math.round(Math.random() * 2);

    return choices[choiceIndex];
};

function getPlayerChoice() {
    let choice = prompt("Choose your attack! (rock, paper or scissors)", "");

    while (choice.length < 1) {
        choice = prompt("Choose your attack!", "");
    }

    return choice.toLowerCase();
};

function playRound(playerSelection, computerSelection) {
    // Tie
    if (playerSelection == computerSelection) {
        console.log("It's a tie. Play again!");
        return playRound(getPlayerChoice(), getComputerChoice());
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

function game() {
    let rounds = 0;
    let player = 0;
    let computer = 0;

    while (rounds < 5) {
        let result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);

        if (result.includes("You win!")) {
            player++;
        } else if (result.includes("You lose!")) {
            computer++
        }

        rounds++;
        console.log(`Player: ${player} vs Computer: ${computer}`);
        console.log(`Remaining rounds: ${5 - rounds}`);
    }

    if (player > computer) {
        return `You won the war, ${player} by ${computer}!`;
    } else {
        return `You lost the war, ${computer} by ${player}!`;
    }   
};

console.log(game());