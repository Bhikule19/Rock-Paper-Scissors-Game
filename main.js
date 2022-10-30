let computerChoiceDisplay = document.getElementById('computer-choice');
let userChoiceDisplay = document.getElementById('user-choice')
let resultDisplay = document.getElementById('result')
let possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    // console.log(randomNumber)
    if (randomNumber == 0) {
        computerChoice = 'rock'
    } else if (randomNumber == 1) {
        computerChoice = 'paper'
    } else if (randomNumber == 2) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

const getResult = () => {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    else if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
    }
    else if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lost!'
    }
    else if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
    }
    else if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
    }
    else if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
    }
    else if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result
}
