//gets Computer choice
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

//initializes score variables
let humanScore = 0;
let computerScore = 0;
let gameNumber = 0;


//declares querySelectors
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const div = document.createElement("div");
const span = document.createElement("span");
const resultSpan = document.createElement("span");
const errorSpan = document.createElement("span");
let btns = document.querySelectorAll('button');

//increments the game number
btns.forEach(function (i) {
    i.addEventListener('click', () => {
        gameNumber++;
    })
    
})

//plays Round using buttons
function playRound(human, computer) {
        if (human === "rock" && computer === "rock" || human === "scissors" && computer === "scissors" || human === "paper" && computer === "paper") {
            resultsDiv.appendChild(div);
            div.textContent = `You draw! Your choice: ${human} Computer choice: ${computer}` 
        } else if (human === "rock" && computer === "scissors" || human === "paper" && computer === "rock" || human === "scissors" && computer === "paper") {
            resultsDiv.appendChild(div);
            div.textContent = `You win! Your choice: ${human} Computer choice: ${computer}`
            humanScore++;
        } else {
            resultsDiv.appendChild(div);
            div.textContent = `You lose! Your choice: ${human} Computer choice: ${computer}`
            computerScore++;  
        }
    }


//initialises query selectors
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

//plays game using buttons
rock.addEventListener("click", () => {
    if (gameNumber < 6) {
        playRound("rock", getComputerChoice());
        scoreDiv.appendChild(span);
        span.textContent = `Game number: ${gameNumber} Human score: ${humanScore} Computer score: ${computerScore}`
    } else if (gameNumber = 5) {
        playRound("paper", getComputerChoice());
        scoreDiv.appendChild(span);
        span.textContent = `Game number: ${gameNumber} Human score: ${humanScore} Computer score: ${computerScore}`
        if (humanScore > computerScore) {
            resultsDiv.appendChild(resultSpan);
            resultSpan.textContent = "Game over! You win!"
        } else if (computerScore > humanScore) {
            resultsDiv.appendChild(resultSpan);
            resultSpan.textContent = "Game over! You lose!"
        } else {
            resultsDiv.appendChild(resultSpan);
            resultSpan.textContent = "Game over! You draw!"
        }
    } 
    
})

paper.addEventListener("click", () => {
    if (gameNumber < 5) {
        playRound("paper", getComputerChoice());
        scoreDiv.appendChild(span);
        span.textContent = `Game number: ${gameNumber} Human score: ${humanScore} Computer score: ${computerScore}`
    } else if (gameNumber = 5) {
    playRound("paper", getComputerChoice());
        scoreDiv.appendChild(span);
        span.textContent = `Game number: ${gameNumber} Human score: ${humanScore} Computer score: ${computerScore}`
        if (humanScore > computerScore) {
            resultsDiv.appendChild(resultSpan);
            resultSpan.textContent = "Game over! You win!"
        } else if (computerScore > humanScore) {
            resultsDiv.appendChild(resultSpan);
            resultSpan.textContent = "Game over! You lose!"
        } else {
            resultsDiv.appendChild(resultSpan);
            resultSpan.textContent = "Game over! You draw!"
        }
    } 
    
})


scissors.addEventListener("click", () => {
    if (gameNumber < 6) {
        playRound("scissors", getComputerChoice());
        scoreDiv.appendChild(span);
        span.textContent = `Game number: ${gameNumber} Human score: ${humanScore} Computer score: ${computerScore}`
    } else if (gameNumber = 5){
        playRound("paper", getComputerChoice());
        scoreDiv.appendChild(span);
        span.textContent = `Game number: ${gameNumber} Human score: ${humanScore} Computer score: ${computerScore}`
        if (humanScore > computerScore) {
            resultsDiv.appendChild(resultSpan);
            resultSpan.textContent = "Game over! You win!"
        } else if (computerScore > humanScore) {
            resultsDiv.appendChild(resultSpan);
            resultSpan.textContent = "Game over! You lose!"
        } else {
            resultsDiv.appendChild(resultSpan);
            resultSpan.textContent = "Game over! You draw!"
        }
    }
})
