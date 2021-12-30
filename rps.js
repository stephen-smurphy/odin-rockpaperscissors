function computerSelection() {
    let selection = Array("rock", "paper", "scissors")
    return selection[Math.floor(Math.random() * 3)]
}

function refresh() {
    location.reload();
}

function playGame(user, computer) {
    var playerScore = document.getElementById("playerScore");
    var computerScore = document.getElementById("cpuScore");

    var infoText = document.getElementById("infoText");

    if(user == "rock") {
        if(computer == "scissors") {
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
            infoText.textContent = "You Win!";
        }
        else if(computer == "paper") {
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
            infoText.textContent = "Computer Wins!";
        }
        else {
            infoText.textContent = "It's a draw!";
        }
    }
    else if(user == "paper") {
        if(computer == "rock") {
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
            infoText.textContent = "You Win!";
        }
        else if(computer == "scissors") {
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
            infoText.textContent = "Computer Wins!";
        }
        else {
            infoText.textContent = "It's a draw!";
        }
    }
    else if(user == "scissors") {
        if(computer == "paper") {
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
            infoText.textContent = "You Win!";
        }
        else if(computer == "rock") {
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
            infoText.textContent = "Computer Wins!";
        }
        else {
            infoText.textContent = "It's a draw!";
        }
    }
}

var resetButton = document.getElementById("resetButton");
resetButton.onclick = refresh;

var rockButton = document.getElementById("rockButton");
var paperButton = document.getElementById("paperButton");
var scissorsButton = document.getElementById("scissorsButton");

rockButton.addEventListener("click", function() {
    playGame("rock", computerSelection())
});
paperButton.addEventListener("click", function() {
    playGame("paper", computerSelection())
});
scissorsButton.addEventListener("click", function() {
    playGame("scissors", computerSelection())
});