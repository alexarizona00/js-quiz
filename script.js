let questions = ["What is the hyper text markup language?", "this is question number two", "This is question number 3", "this is question number 4", "what is the answer to everything"];
let correctAnswers1 = ['correct', 'something else', 'a litte', 'a lottle', '42'];
let correctAnswers2 = ['wrong', 'correct', 'a litte', 'a lottle', '42'];
let correctAnswers3 = ['wrong', 'something else', 'correct', 'a lottle', '42'];
let correctAnswers4 = ['wrong', 'something else', 'a litte', 'correct', '42'];
let correctAnswers5 = ['wrong', 'something else', 'a litte', 'a lottle', 'correct'];
let incorrectAnswers = ['123', '321', '111', '666', '420', '710', '911', '711', '411', '*69'];
let allAnswers = ['123', '321', '111', '666', '420', '710', '911', '711', '411', '*69', 'something', 'something else', 'a litte', 'a lottle', '42']
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
let timeLeft = 3;
let timerCountEl = document.querySelector("#thetimer");
let alltheButtons = document.querySelector('.choices');
let selectedAnswer = '';
let testvar = 0;
let timerInterval = '';


headerCheck();

// starts quiz, changes header, displays first question

function startQuiz() {
    headerElem.setAttribute('game-state', 'gametime')
    headerCheck()
    startButton.setAttribute('style', 'display: none')
    timerGo()
    questionElem.textContent = questions[testvar]
    alltheButtons.setAttribute('style', 'display: flex')
    choiceA.textContent = correctAnswers1[testvar]
    choiceB.textContent = correctAnswers2[testvar]
    choiceC.textContent = correctAnswers3[testvar]
    choiceD.textContent = correctAnswers4[testvar]
};



//event listener to begin quiz

startButton.addEventListener('click', startQuiz)

//button listeners to move to next question
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




// checking game state to determine header
function headerCheck() {

    if (headerElem.getAttribute('game-state') == 'pregame') {
        headerElem.textContent = "Welcome to Alex's quiz!"
    }
    else if (headerElem.getAttribute('game-state') == 'gametime') {
        headerElem.textContent = ""
    }
    else if (headerElem.getAttribute('game-state') == 'postgame') {
        headerElem.textContent = "Game over! Let's see how you did"
        alltheButtons.setAttribute('style', 'display: none')

    }
}

if(testvar == 5){
gameOver()
headerCheck()
}


//runs logic to load next question from array.
function nextQ() {
    testvar++
    questionElem.textContent = questions[testvar]
    choiceA.textContent = correctAnswers1[testvar]
    choiceB.textContent = correctAnswers2[testvar]
    choiceC.textContent = correctAnswers3[testvar]
    choiceD.textContent = correctAnswers4[testvar]
    console.log("time for the next question")
}




//runs page cleanup and starts the name entry and high score
function gameOver() {
    timeLeft = 0;
    headerElem.setAttribute('game-state', 'postgame')
    console.log('the game has ended')
}



// timer function that starts when start button is pressed
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
            gameOver()
            headerCheck()
        }

    }, 1000)
}



