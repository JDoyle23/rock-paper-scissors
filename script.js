function getComputerChoice() {
    let computerOptions = ["rock", "paper", "scissors"];
    let computerOptionsLength = computerOptions.length;
    let randomChoice = Math.floor(Math.random()*computerOptionsLength + 1);
    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please make your choice: rock, paper or scissors?");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
let gameNumber = 0;

//create function playRound to compare the two choices and increment scores accordingly
function playRound(human, computer) {
    if (human === "rock" && computer === "rock" || human === "scissors" && computer === "scissors" || human === "paper" && computer === "paper") {
        alert(`You draw! Your choice: ${human} Computer choice: ${computer}`);
        gameNumber++;
    } else if (human === "rock" && computer === "scissors" || human === "paper" && computer === "rock" || human === "scissors" && computer === "paper") {
        alert(`You win! Your choice: ${human} Computer choice: ${computer}`);
        humanScore++;
        gameNumber++;        
    } else {
        alert(`You lose! Your choice: ${human} Computer choice: ${computer}`);
       computerScore++;
       gameNumber++;
    } 
}

function game () {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

game();

console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);
console.log("Game number: " + gameNumber);