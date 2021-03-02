// game is gonna be played against computer
// create a function called 'computerPlay' that will randomly return either 'Rock' , 'Paper' or 'Scissors'
function computerPlay() {
    const gameChoices = ['rock', 'paper', 'scissors'];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    computerSelection = gameChoices[getRandomInt(3)];
    return computerSelection;
}

// - make the two parameters lowercase and store their result into variables;
let playerSelection;
let computerSelection;
let computerVictories = 0;
let playerVictories = 0;
let computer = 'Computer';
let player = 'Player';

// create a function that will return the user input 

function playerPlay() {
    playerSelection = prompt('Please select your weapon', 'paper', 'rock', 'scissors').toLowerCase();
}

// Write a function called 'playRound' that plays a single round of Rock Paper Scissors
// The function should take two parameters(playerSelection, computerSelection) {
function playRound() {
    computerPlay();
    playerPlay();
    // playerSelection = prompt('Choose your weapon', 'rock').toLowerCase();
    // computerSelection = computerPlay();
    // - there can only be 7 possible outcomes:

    // - 1. "You Won! Rock beats Scissors."
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerVictories += 1;
        console.log("You Won! Rock beats Scissors.")

    // - 2. "You Won! Paper beats Rock."
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerVictories += 1;
        console.log("You Won! Paper beats Rock.")

    // - 3. "You Won! Scissors beats Paper."
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerVictories += 1;
        console.log("You Won! Scissors beats Paper.")

    // - 4. "You Lose! Rock beats Scissors."
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerVictories += 1;
        console.log("You Lose! Rock beats Scissors.")

    // - 5. "You Lose! Scissors beats Paper."
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerVictories += 1;
        console.log("You Lose! Scissors beats Paper.")

    // - 6. "You Lose! Paper beats Rock."
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerVictories += 1;
        console.log("You Lose! Paper beats Rock.")

    // - 7. "It's a tie. You selected the same weapon."
    } else {
        console.log("It's a tie. You selected the same weapon.");
    }

    
}



    
    
    
    
    
    
// }

// Write a new function called game() {

function game() {
    // we need 2 variables to keep track of the score for both players
    // variables should be initiated with 0

    // use the computerPlay function inside this one to play a 5 round game
    for (let i=0; i<=10; i++) {
        if (computerVictories == 3 || playerVictories == 3) {
            computerVictories = 0;
            playerVictories = 0;
            return `Congratulations ${(computerVictories > 2) ? computer : player}! You won.`;
    } else {
        playRound();
            console.log(`Current score is:\n  Player: ${playerVictories} \n Computer ${computerVictories}`);
    }
    }
}


    // if one player wins a round, his variable should increase by 1;
    // if it's a tie round, both variables will remain the same;
    // use console.log after each round to display the score;
    // when one of the variables reaches value = 5, return a message like so 'Player Won' / 'Computer Won'
// }

// use 'prompt' to get input from the user;

