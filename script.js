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

// create a function that will return the user input 
// use 'prompt' to get input from the user;
function playerPlay() {
    playerSelection = prompt('Please select your weapon', 'paper', 'rock', 'scissors').toLowerCase();
}


// - make the two parameters lowercase and store their result into variables;
let playerSelection;
let computerSelection;

// we need 2 variables to keep track of the score for both players
// variables should be initiated with 0
let computerVictories = 0;
let playerVictories = 0;

// we need 2 variables to display the winner of the game
let computer = 'Computer';
let player = 'Player';


// Write a function called 'playRound' that plays a single round of Rock Paper Scissors
function playRound() {

    // we call the computerPlay function to log the computer selection
    // we call the playerPlay function to log the player selection
    computerPlay();
    playerPlay();


    // We create conditionals to display the right message according to the output and increase the corresponding counter variable
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
    
    

// Write a new function called game() {

function game() {

// use a loop to play more than 1 round of the game
// if one player gets to score 3, return message and finish game by exiting loop
    for (let i=0; i<=15; i++) {
        if (computerVictories == 5 || playerVictories == 5) {
            return `Congratulations ${(computerVictories > 4) ? computer : player}! You won.`;
    } else {
        playRound();
            console.log(`Current score is:\n  Player: ${playerVictories} \n Computer ${computerVictories}`);
            }
    }

    computerVictories = 0;
    playerVictories = 0;
}

// }



