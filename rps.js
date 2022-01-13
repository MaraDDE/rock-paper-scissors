console.log("Hello world!");
const options = ['rock', 'paper', 'scissors'];

// RANDOMNLY GENERATE THE COMPUTER'S SELECTION
function computerPlay(){
    let item = options[Math.floor(Math.random()* options.length)];
    let computerSelection = item;
    //console.log(computerSelection);
    return computerSelection;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerInput){
    let computerSelection = computerPlay();
    let playerSelectionString = String(playerInput);
    let playerSelection = playerSelectionString.toLowerCase();
    
    console.log(computerSelection);
    console.log(playerSelection);

    switch(playerSelection){
        case 'rock':
            if (computerSelection == 'rock'){
                playerScore++;
                computerScore++;
                console.log(playerScore);
                console.log(computerScore);
                return 'TIE';
            } else if (computerSelection == 'paper'){
                computerScore++;
                console.log(playerScore);
                console.log(computerScore);
                return 'LOSE';
            } else {
                playerScore++;
                console.log(playerScore);
                console.log(computerScore);
                return 'WIN'
            }
            break;
        case 'paper':
            if (computerSelection == 'paper'){
                playerScore++;
                computerScore++;
                console.log(playerScore);
                console.log(computerScore);
                return 'TIE';
            } else if (computerSelection == 'scissors'){
                computerScore++;
                console.log(computerScore);
                console.log(computerScore);
                return 'LOSE';
            } else {
                playerScore++;
                console.log(playerScore);
                console.log(computerScore);
                return 'WIN'
            }
            break;
        case 'scissors':
            if (computerSelection == 'scissors'){
                playerScore++;
                computerScore++;
                console.log(playerScore);
                console.log(computerScore);
                return 'TIE';
            } else if (computerSelection == 'rock'){
                computerScore++;
                console.log(playerScore);
                console.log(computerScore);
                return 'LOSE';
            } else {
                playerScore++;
                console.log(playerScore);
                console.log(computerScore);
                return 'WIN'
            }
            break;   
    }
}

// function game(){
//     for (let i = 0; i < 5; i++){
//         playRound('Rock');
//     }
// }