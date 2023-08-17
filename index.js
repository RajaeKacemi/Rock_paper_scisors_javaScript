
function playRound(playerSelection, computerSelection){

    if (playerSelection === "Paper" && computerSelection === "Rock"){
        console.log("You Win! Paper beats Rock");
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissor"){
        console.log("You Win! Rock beats Scissor");
    }
    else if(playerSelection === "Scissor" && computerSelection === "Paper"){
        console.log("You Win! Scissor beats Paper");
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock"){
        console.log("You Lose! Paper beats Rock");
    }
    else if(computerSelection === "Rock" && playerSelection === "Scissor"){
        console.log("You Lose! Rock beats Scissor");
    }
    else if(computerSelection === "Scissor" && playerSelection === "Paper"){
        console.log("You Lose! Scissor beats Paper");
    }
    else{
        console.log("There is no winner");
    }
}
function getComputerChoice(){
    var choice = ['Rock','Paper','Scissor'];
    var randomChoice = choice[Math.floor(choice.length * Math.random())];
    return randomChoice;
}
var computerChoice = getComputerChoice();

console.log("Computer choice : " + computerChoice);

let  playerChoice = prompt("Please enter your choice (Rock, Paper, Scissor)\n");

playRound(playerChoice,computerChoice);