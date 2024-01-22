console.log("Hello World");

function getComputerChoice () {
    let computerChoice = null;
    // Generate a random decimal number between 0 and 1
    const randomDecimal = Math.random();
    // Scale the random decimal to a number between 1 and 3
    const randomNumberBetween1And3 = Math.floor(randomDecimal * 3) + 1;
    // Use random number to select a play
    switch (randomNumberBetween1And3) {
        case 1: 
            computerChoice = "rock";
            break;
        case 2: 
            computerChoice = "paper";
            break;
        case 3: 
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getPlayerChoice () {
    // Check if the input is correct, otherwise repeat the request
    while (true) {
        let playerChoice = prompt("Please enter your choice:");
        //Make input case-insensitive
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
            return playerChoice;
        }
        else {
            console.log("Wrong input: Choose between 'rock', 'paper' and 'scissors'")
        }
    }
}

function playRound (playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == computerSelection) {
        console.log("TIE! Both have " + playerSelection);
    }
    else if (playerSelection == "rock" && computerSelection == "paper" ) {
        console.log("You Lose! Paper beats Rock.")
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ) {
        console.log("You Win! Rock beats Scissors.")
    }
    else if (playerSelection == "paper" && computerSelection == "rock" ) {
        console.log("You Win! Paper beats Rock.")
    }
    else if (playerSelection == "paper" && computerSelection == "scissors" ) {
        console.log("You Lose! Scissors beats Paper.")
    }
    else if (playerSelection == "scissors" && computerSelection == "rock" ) {
        console.log("You Lose! Rock beats Scissors.")
    }
    else if (playerSelection == "scissors" && computerSelection == "paper" ) {
        console.log("You Win! Scissors beats Paper.")
    }
    else {
        console.log("Something went wrong!");
    }
}

//console.log("Computer: " + getComputerChoice());
//console.log("Player: " + getPlayerChoice());   

playRound(getPlayerChoice(), getComputerChoice())

