// Simple score variables
let win = 0;
let lost = 0;
let tie = 0;

// Generate computer choice
function generateComputerChoice() {
    let random = Math.random() * 3;

    if (random <= 1) return 'Bat';
    else if (random <= 2) return 'Ball';
    else return 'Stump';
}

// Game logic
function playGame(userMove) {

    let computerMove = generateComputerChoice();
    let result = "";

    if (userMove === computerMove) {
        tie++;
        result = "It's a Tie";
    }
    else if (
        (userMove === 'Bat' && computerMove === 'Ball') ||
        (userMove === 'Ball' && computerMove === 'Stump') ||
        (userMove === 'Stump' && computerMove === 'Bat')
    ) {
        win++;
        result = "You Win";
    }
    else {
        lost++;
        result = "Computer Wins";
    }

    document.getElementById("resultDisplay").innerText =
        "You: " + userMove +
        " | Computer: " + computerMove +
        " | " + result +
        " | Score -> W:" + win +
        " L:" + lost +
        " T:" + tie;
}

// Button functions
function playBat() {
    playGame('Bat');
}

function playBall() {
    playGame('Ball');
}

function playStump() {
    playGame('Stump');
}

// Reset
function resetGame() {
    win = 0;
    lost = 0;
    tie = 0;
    document.getElementById("resultDisplay").innerText = "Score Reset!";
}