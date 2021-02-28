// game is gonna be played against computer
// create a function called 'computerPlay' that will randomly return either 'Rock' , 'Paper' or 'Scissors'
function computerPlay() {
    const gameChoices = ['Rock', 'Paper', 'Scrissors'];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    return gameChoices[getRandomInt(3)];
}



// Write a function called 'playRound' that plays a single round of Rock Paper Scissors
// The function should take two parameters(playerSelection, computerSelection) {
function playRound(playerSelection, computerSelection) {
    // - make the two parameters lowercase and store their result into variables;
    let playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay().toLowerCase();

    // - return a string that declares the winner of the round
    // - there can only be 7 possible outcomes:

    // - 1. "You Won! Rock beats Scissors."
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Won! Rock beats Scissors."

    // - 2. "You Won! Paper beats Rock."
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Won! Paper beats Rock."

    // - 3. "You Won! Scissors beats Paper."
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You Won! Scissors beats Paper."

    // - 4. "You Lose! Rock beats Scissors."
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You Lose! Rock beats Scissors."

    // - 5. "You Lose! Scissors beats Paper."
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Scissors beats Paper."

    // - 6. "You Lose! Paper beats Rock."
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock."

    // - 7. "It's a tie. You selected the same weapon."
    } else {
        return "It's a tie. You selected the same weapon."
    }

    
}



    
    
    
    
    
    
// }

// Write a new function called game() {

function game() {
    // we need 2 variables to keep track of the score for both players
    // variables should be initiated with 0
    let computerVictories = 0;
    let playerVictories = 0;

    // use the computerPlay function inside this one to play a 5 round game
    while (computerVictories && playerVictories <= 3) {
        playRound(prompt('Make your pick:', 'rock'), computerSelection);

    }
}


    // if one player wins a round, his variable should increase by 1;
    // if it's a tie round, both variables will remain the same;
    // use console.log after each round to display the score;
    // when one of the variables reaches value = 5, return a message like so 'Player Won' / 'Computer Won'
// }

// use 'prompt' to get input from the user;

