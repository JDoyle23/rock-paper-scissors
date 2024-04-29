// write the logic to get computerChoice

function getComputerChoice() {
    const decisions = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * decisions.length);
    return decisions[randomIndex];
}


// write the logic to get humanChoice

function getHumanChoice() {
    let userInput = prompt("Enter your choice (rock, paper or scissors):");
    userInput = userInput.toLowerCase();
    if (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
        alert("Please enter a valid option(rock, paper or scissors).");
        return getHumanChoice();
    }
    return userInput;
}


// declare the score variables

let humanScore = 0
let computerScore = 0

for (let i = 0; i < 5; i++) {
    console.log (`Round ${i+1}:`);

    const computerDecision = getComputerChoice ();
    const humanChoice = getHumanChoice();

    console.log("Human score: ", humanScore);
    console.log("Computer score: ", computerScore);

    if (humanChoice === computerDecision) {
        alert("Draw!");
    } else if ((humanChoice === 'rock' && computerDecision === 'scissors') || 
    (humanChoice === 'paper' && computerDecision === 'rock') || 
    (humanChoice === 'scissors' && computerDecision === 'paper')) {
        alert(`You win! Your choice: ${humanChoice}  Computer choice: ${computerDecision}`);
        humanScore++;
    } else {
        alert(`Computer wins! Your choice: ${humanChoice}  Computer choice: ${computerDecision}`);
        computerScore++;
    }
}

console.log("Final Scores: ");
console.log ("Human score: ", humanScore);
console.log ("Computer score: ", computerScore);