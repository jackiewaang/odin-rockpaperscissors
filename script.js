let humanScore = 0;
let computerScore = 0;
const line = document.querySelector("#line");

function getComputerChoice(){
    const n = Math.floor(Math.random() * 4);
    if(n == 0){
        return "rock";
    } else if(n == 1){
        return "paper";
    } else{
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock" && computerChoice == "paper"){
        line.textContent = "You Lose! Paper beats Rock";
        computerScore++;
        checkWinner();
    } else if(humanChoice == "rock" && computerChoice == "scissors"){
        line.textContent = "You win! Rock beats Scissors";
        humanScore++;
        checkWinner();
    } else if(humanChoice == "paper" && computerChoice == "rock"){
        line.textContent = "You win! Paper beats Rock";
        humanScore++;
        checkWinner();
    } else if(humanChoice == "paper" && computerChoice == "scissors"){
        line.textContent = "You lose! Scissors beats Paper";
        computerScore++;
        checkWinner();
    } else if(humanChoice == "scissors" && computerChoice == "rock"){
        line.textContent = "You lose! Rock beats Scissors";
        computerScore++;
        checkWinner();
    } else if(humanChoice == "scissors" && computerChoice == "paper"){
        line.textContent = "You win! Scissors beats Paper";
        humanScore++;
        checkWinner();
    } else{
        line.textContent = `Both players chose ${humanChoice}! Draw`;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", function(e){
    playRound(e.target.id, getComputerChoice());
    display();
}))

const div = document.createElement("div");
div.textContent = `You ${humanScore} - Bot ${computerScore}`;
document.querySelector("body").appendChild(div);

function display(){
    div.textContent = `You ${humanScore} - Bot ${computerScore}`;
}

function checkWinner(){
    if(humanScore == 5){
        line.textContent = "You reached 5 points! You won";
        buttons.forEach(button => button.replaceWith(button.cloneNode(true)));
    } else if(computerScore == 5){
        line.textContent = "The bot reached 5 points! You lose";
        buttons.forEach(button => button.replaceWith(button.cloneNode(true)));
    }
}