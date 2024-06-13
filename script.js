// Get the correct labels for the three variables
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const selections = document.querySelector("#selections");

let userInput = "";
let computerInput = "";
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// Create function to get human choice
function getHumanChoice() {
    rock.onclick = () => {
        userInput = "rock";
        playRound();
    };
    paper.onclick = () => {
        userInput = "paper";
        playRound();
    };
    scissors.onclick = () => {
        userInput = "scissors";
        playRound();
    };
}

// Create function to get computer choice
function getComputerChoice() {
    const decisions = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * decisions.length);
    return decisions[randomIndex];
}

// Declare what happens when you win, lose, or draw
function youWin() {
    let div = document.createElement("div");
    div.textContent = "You Win!";
    results.appendChild(div);
}

function youDraw() {
    let div = document.createElement("div");
    div.textContent = "Draw!";
    results.appendChild(div);
}

function youLose() {
    let div = document.createElement("div");
    div.textContent = "You Lose!";
    results.appendChild(div);
}

function showSelections() {
    let div = document.createElement("div");
    div.textContent = `Your Selection: ${userInput} vs. Computer Selection: ${computerInput}`;
    selections.appendChild(div);
}

function gameOver() {
    let div = document.createElement("div");
    div.textContent = "Game Over!";
    results.appendChild(div);
}

function winningGame() {
    let div = document.createElement("div");
    div.textContent = "You win this game!";
    results.appendChild(div);
}

function losingGame() {
    let div = document.createElement("div");
    div.textContent = "You lose this game!";
    results.appendChild(div);
}

// Declare the function for one round
function playRound() {
    if (roundCount >= 5) {
        return; // End the game if 5 rounds are already played
    }

    computerInput = getComputerChoice();
    showSelections();

    if ((userInput === "rock" && computerInput === "scissors") ||
        (userInput === "paper" && computerInput === "rock") ||
        (userInput === "scissors" && computerInput === "paper")) {
        youWin();
        playerScore++;
    } else if (userInput === computerInput) {
        youDraw();
    } else {
        youLose();
        computerScore++;
    }

    roundCount++;

    if (roundCount === 5) {
        gameOver();

        if (playerScore > computerScore) {
            winningGame();
        } else if (playerScore < computerScore) {
            losingGame();
        } else {
            youDraw();
        }
    }
}

// Initialize the game
getHumanChoice();










