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

let humanScore = 0
let computerScore = 0

//create function playRound to compare the two choices and increment scores accordingly
function playRound(human, computer) {
    if (human === "rock" && computer === "rock" || human === "scissors" && computer === "scissors" || human === "paper" && computer === "paper") {
        alert(`You draw! Your choice: ${human} Computer choice: ${computer}`);
    } else if (human === "rock" && computer === "scissors" || human === "paper" && computer === "rock" || human === "scissors" && computer === "paper") {
        alert(`You win! Your choice: ${human} Computer choice: ${computer}`);
        return humanScore++;        
    } else {
        alert(`You lose! Your choice: ${human} Computer choice: ${computer}`);
        return computerScore++;
    } 
}

const computerDecision = getComputerChoice();
const humanDecision = getHumanChoice();

playRound(humanDecision, computerDecision);

console.log(computerDecision);
console.log(humanDecision);

console.log(humanScore);
console.log(computerScore);
