
function getComputerChoice(){
    var choice = ['Rock','Paper','Scisor'];
    var randomChoice = choice[Math.floor(choice.length * Math.random())];
    return randomChoice;
}

game = () => {

    let  playerChoice = prompt("Please enter your choice (Rock, Paper, Scisor)\n");
    console.log("player choice : " + playerChoice);

    var computerChoice = getComputerChoice();

    console.log("Computer choice : " + computerChoice);

    
    let result = playRound(playerChoice, computerChoice);

    switch(result){

        case "You Win! Paper beats Rock" :
            return("Player");

        case "You Win! Rock beats Scisor" :
            return("Player");

        case "You Win! Scisor beats Paper" :
            return("Player");

        case "You Lose! Paper beats Rock hello" :
            return("Computer");

        case "You Lose! Rock beats Scisor" :
            return("Computer");

        case "You Lose! Scisor beats paper" :
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
    else if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISOR"){
        console.log("## You Win! Rock beats Scissor ##");
        return("You Win! Rock beats Scisor");  
    }
    else if(playerSelection.toUpperCase() === "SCISOR" && computerSelection.toUpperCase() === "PAPER"){
        console.log("## You Win! Scisor beats Paper ##");
        return("You Win! Scisor beats Paper");
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase()=== "ROCK"){
        console.log("## You Lose! Paper beats Rock ##");
        return("You Lose! Paper beats Rock");
    }
    else if(computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISOR"){
        console.log("## You Lose! Rock beats Scisor ##");
        return("You Lose! Rock beats Scissor");
    }
    else if(computerSelection.toUpperCase() === "SCISOR" && playerSelection.toUpperCase() === "PAPER"){
        console.log("## You Lose! Scisor beats paper ##");
        return("You Lose! Scisor beats paper");

    }
    else{
        console.log("## There is no winner ##");
    }
}



let PlayerScoore = 0;
let ComputerScoore = 0;

let winner1 = game();

if(winner1.toUpperCase() === "PLAYER"){
    PlayerScoore++;
}
else if(winner1.toUpperCase() === "COMPUTER"){
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


console.log("THE RESULT OF GAME : ** Rock Paper Scisor **");
console.log("YOUR SCORE : " + PlayerScoore);
console.log("COMPUTER SCORE : " + ComputerScoore);
