/**  **/
function getComputerChoice(){
    var choice = ['Rock','Paper','Scissor'];
    var randomChoice = choice[Math.floor(choice.length * Math.random())];
    return randomChoice;
}

game = () => {

    let  playerChoice = prompt("Please enter your choice (Rock, Paper, Scissor)\n");
    console.log("player choice : " + playerChoice);

    var computerChoice = getComputerChoice();

    console.log("Computer choice : " + computerChoice);

    
    let result = playRound(playerChoice, computerChoice);

    switch(result){

        case "You Win! Paper beats Rock" :
            return("Player");

        case "You Win! Rock beats Scissor" :
            return("Player");

        case "You Win! Scissor beats Paper" :
            return("Player");

        case "You Lose! Paper beats Rock" :
            return("Computer");

        case "You Lose! Rock beats Scissor" :
            return("Computer");

        case "You Lose! Scissor beats paper" :
            return("Computer");

        default : 
        return("No winner");
    }

}
function playRound(playerSelection, computerSelection){

    if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK"){
        console.log("## You Win! Paper beats Rock ##");
        return("You Win! Paper beats Rock");
    }
    else if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSOR"){
        console.log("## You Win! Rock beats Scissor ##");
        return("You Win! Rock beats Scissor");  
    }
    else if(playerSelection.toUpperCase() === "SCISSOR" && computerSelection.toUpperCase() === "PAPER"){
        console.log("## You Win! Scissor beats Paper ##");
        return("You Win! Scissor beats Paper");
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase()=== "ROCK"){
        console.log("## You Lose! Paper beats Rock ##");
        return("You Lose! Paper beats Rock");
    }
    else if(computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSOR"){
        console.log("## You Lose! Rock beats Scissor ##");
        return("You Lose! Rock beats Scissor");
    }
    else if(computerSelection.toUpperCase() === "SCISSOR" && playerSelection.toUpperCase() === "PAPER"){
        console.log("## You Lose! Scissor beats paper ##");
        return("You Lose! Scissor beats paper");

    }
    else{
        console.log("## There is no winner ##");
    }
}



let PlayerScoore = 0;
let ComputerScoore = 0;

let winner = game();

if(winner.toUpperCase() === "PLAYER"){
    PlayerScoore++;
}
else if(winner.toUpperCase() === "COMPUTER"){
    ComputerScoore++;
}

let winner2 = game();

if(winner2.toUpperCase() === "PLAYER"){
    PlayerScoore++;
}
else if(winner2.toUpperCase() === "COMPUTER"){
    ComputerScoore++;
}

let winner3 = game();

if(winner3.toUpperCase() === "PLAYER"){
    PlayerScoore++;
}
else if(winner3.toUpperCase() === "COMPUTER"){
    ComputerScoore++;
}

let winner4 = game();

if(winner4.toUpperCase() === "PLAYER"){
    PlayerScoore++;
}
else if(winner4.toUpperCase() === "COMPUTER"){
    ComputerScoore++;
}
let winner5 = game();

if(winner5.toUpperCase() === "PLAYER"){
    PlayerScoore++;
}
else if(winner5.toUpperCase() === "COMPUTER"){
    ComputerScoore++;
}


console.log("THE RESULT OF GAME : ** Rock Paper Scisors **");
console.log("YOUR SCORE : " + PlayerScoore);
console.log("COMPUTER SCORE : " + ComputerScoore);