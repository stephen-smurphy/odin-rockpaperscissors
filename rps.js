function computerSelection() {
    var selection = Array("rock", "paper", "scissors")
    return selection[Math.floor(Math.random() * 3)]
}

function userSelection() {
    let selection = prompt("Enter your selection")
    return(selection)
}

function playGame(user, computer) {
    if(user == "rock") {
        if(computer == "scissors") {
            return "user wins!"
        }
        else {
            return "computer wins!"
        }
    }
    else if(user == "paper") {
        if(computer == "rock") {
            return "user wins!"
        }
        else {
            return "computer wins!"
        }
    }
    else {
        if(computer == "paper") {
            return "user wins!"
        }
        else {
            return "computer wins!"
        }
    }
}

while(true) {
    const cpu = computerSelection()
    const user = userSelection()
    console.log(playGame(user, cpu))
}