let questions = ["what is this", "what is that", "how many this", "how many that", "what is the answer to everything"];
let correctAnswers = ['something', 'something else', 'a litte', 'a lottle', '42'];
let incorrectAnswers = ['123', '321', '111', '666', '420', '710', '911', '711', '411', '*69'];
let allAnswers = ['123', '321', '111', '666', '420', '710', '911', '711', '411', '*69','something', 'something else', 'a litte', 'a lottle', '42' ]
let startButton = document.querySelector("#pressme");
let choiceA = document.querySelector("#a");
let choiceB = document.querySelector("#b");
let choiceC = document.querySelector("#c");
let choiceD = document.querySelector("#d");
let questionElem = document.querySelector("#question")
let headerElem = document.querySelector('.main-title')
headerElem.setAttribute('game-state', 'pregame')
let correctcount = 0;
let wrongcount = 0;
let currentQuestion = 0;
let timeLeft = 60;
let timerCountEl = document.querySelector("#thetimer");
let alltheButtons = document.querySelector('.choices');
let selectedAnswer = '';


headerCheck();

// starts quiz, changes header, displays first question

function startQuiz() {
    headerElem.setAttribute('game-state', 'gametime')
    headerCheck()
    startButton.setAttribute('style', 'display: none')
    timerGo()
    questionElem.textContent = questions[1]
    alltheButtons.setAttribute('style', 'display: flex')

    console.log('quiz started')

}
choiceA.addEventListener('click', function () {
    questionElem.textContent = questions[currentQuestion++]
    nextQ()
})
choiceB.addEventListener('click', function () {
    questionElem.textContent = questions[currentQuestion++]
    nextQ()
})
choiceC.addEventListener('click', function () {
    questionElem.textContent = questions[currentQuestion++]
    nextQ()
})
choiceD.addEventListener('click', function () {
    questionElem.textContent = questions[currentQuestion++]
    nextQ()
})


if (correctAnswers.includes(selectedAnswer)){
    correctcount++
}
    else{
        wrongcount++
        timeLeft -= 5
    }


//)

// checks to see the game state and which header to display
function headerCheck() {

    if (headerElem.getAttribute('game-state') == 'pregame') {
        headerElem.textContent = "Welcome to Alex's quiz!"
    }
    else if (headerElem.getAttribute('game-state') == 'gametime') {
        headerElem.textContent = ""
    }
    else if (headerElem.getAttribute('game-state') == 'postgame') {
        headerElem.textContent = "Game over! Let's see how you did"
    }
}


//runs logic to load next question from array.
function nextQ() {


    console.log("time for the next question")
}

function gameOver() {
    headerElem.setAttribute('game-state', 'postgame')

    console.log('the game has ended')
}

function timerGo() {
    let timerInterval = setInterval(function () {
        timeLeft--;
        timerCountEl.textContent = timeLeft + " seconds remaining"
        if (timeLeft == 1)
            timerCountEl.textContent = timeLeft + " second remaining"
        if (timeLeft == 0) {
            clearInterval(timerInterval);
            timerCountEl.textContent = "Times up!"
            headerElem.setAttribute('game-state', 'postgame')
            headerCheck()
        }

    }, 1000)
}

startButton.addEventListener('click', startQuiz)


