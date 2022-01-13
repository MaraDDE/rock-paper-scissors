// console.log("Hello world!");
const options = ['rock', 'paper', 'scissors'];
let playerScore = 0,
    computerScore =0,
    win = 0,
    lose =0.
    tie =0;


//Player's selection
function playerPlay(){
    do {
        playerSelection = prompt("what are you picking ?");
        playerSelection = playerSelection.toLowerCase();
    }
    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors" );
    return playerSelection;
}

//Randomly generates computer selection
function computerPlay(){
    let item = options[Math.floor(Math.random()* options.length)];
    let computerSelection = item;
    //console.log(computerSelection);
    return computerSelection;
}

//Determines the winner by using the game's rules.
function playRound(computerSelection, playerSelection){
    if (computerSelection == playerSelection){
        // win++;
        // lose++;
        console.log(win, lose);
        console.log(`You tied, the computer picked ${playerSelection} aswell.
        current score: you ${win} vs computer ${lose}`);
    } else if((computerSelection == 'rock' && playerSelection == 'paper')||(computerSelection == 'paper' && playerSelection =='scissors')||(computerSelection=='scissors' && playerSelection=='rock')){
        win++;
        console.log(`You won, the computer picked ${computerSelection} and you picked ${playerSelection}.
        current score: you ${win} vs computer ${lose}`);
    } else{
        lose++;
        console.log(`You lost, the computer picked ${computerSelection} and you picked ${playerSelection}.
        current score: you ${win} vs computer ${lose}`);
    }
    return ;
    //win, lose;
}

// Plays a round of the game until either player reaches 5 wins. 
function game(){
    // let win =0;
    // let lose =0;
    let winner = '';
    while (win + lose <= 10){
        if (win == 5 || lose == 5 ){
            if (win == 5){
                winner = 'Player';
            } else{
                winner = 'Computer';
            }
            console.log(`The winner is ${winner} with a score of computer ${lose} VS player ${win}`);
            break;
        }
        playRound(computerPlay(), playerPlay());

    }
}