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

function getHumanChoice(){
    return prompt("Choose between Rock, Paper or Scissors").toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        if(humanChoice == "rock" && computerChoice == "paper"){
            console.log("You Lose! Paper beats Rock");
            computerScore++;
        } else if(humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if(humanChoice == "paper" && computerChoice == "rock"){
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if(humanChoice == "paper" && computerChoice == "scissors"){
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        } else if(humanChoice == "scissors" && computerChoice == "rock"){
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if(humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else{
            console.log("Draw");
        }
    }
    
    for(let i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        setTimeout(10000);
    }
    if(humanScore > computerScore){
        console.log("You won");
    } else if(humanScore < computerScore){
        console.log("You lost");
    } else{
        console.log("Draw");
    }
}

playGame();