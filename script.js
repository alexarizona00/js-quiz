let questions = ["What is the hyper text markup language?", "this is question number two", "This is question number 3", "this is question number 4", "what is the answer to everything"];
let correctAnswers1 = ['correct', 'something else', 'a litte', 'a lottle', '42'];
let correctAnswers2 = ['wrong', 'correct', 'a litte', 'a lottle', '42'];
let correctAnswers3 = ['wrong', 'something else', 'correct', 'a lottle', '42'];
let correctAnswers4 = ['wrong', 'something else', 'a litte', 'correct', '42'];
let correctAnswers5 = ['wrong', 'something else', 'a litte', 'a lottle', 'correct'];
// let incorrectAnswers = ['123', '321', '111', '666', '420', '710', '911', '711', '411', '*69'];
let correctAnswers = ['correct','correct','a litte']
// let allAnswers = ['123', '321', '111', '666', '420', '710', '911', '711', '411', '*69', 'something', 'something else', 'a litte', 'a lottle', '42']
let startButton = document.querySelector("#pressme");
let choiceA = document.querySelector("#a");
let choiceB = document.querySelector("#b");
let choiceC = document.querySelector("#c");
let choiceD = document.querySelector("#d");
let questionElem = document.querySelector("#question")
let scoreElem = document.querySelector(".score1")
let score2Elem = document.querySelector(".score2")
let headerElem = document.querySelector('.main-title')
headerElem.setAttribute('game-state', 'pregame')
let correctcount = 0;
let wrongcount = 0;
let currentQuestion = 0;
let timeLeft = 10;
let timerCountEl = document.querySelector("#thetimer");
let alltheButtons = document.querySelector('.choices');
let selectedAnswer = '';
let testvar = 0;
let timerInterval = '';

headerCheck();
startButton.addEventListener('click', startQuiz)

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



//button listeners to move to next question
choiceA.addEventListener('click', function () {
    if(correctAnswers.includes(event.target.innerText)){
        correctcount++ 
    }
    else{wrongcount++
        timeLeft-= 5}
    questionElem.textContent = questions[currentQuestion++]
    if(testvar === 4){
        gameOver()
        }
        console.log(event.target.innerText)
    nextQ()
})
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

choiceB.addEventListener('click', function () {
    if(correctAnswers.includes(event.target.innerText)){
        correctcount++ 
    }
    else{wrongcount++
        timeLeft-= 5}
    questionElem.textContent = questions[currentQuestion++]
    if(testvar === 4){
        gameOver()
        }
        console.log(event.target.innerText)
    nextQ()
})

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

choiceC.addEventListener('click', function () {
    if(correctAnswers.includes(event.target.innerText)){
        correctcount++ 
    }
    else{wrongcount++
    timeLeft-= 5}
    questionElem.textContent = questions[currentQuestion++]
    if(testvar === 4){
        gameOver()
        }
        console.log(event.target.innerText)
    nextQ()
})



//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
choiceD.addEventListener('click', function () {
    if(correctAnswers.includes(event.target.innerText)){
        correctcount++ 
    }
    else{wrongcount++
    timeLeft-= 5}
    questionElem.textContent = questions[currentQuestion++]
      console.log(event.target.innerTexts)
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

//runs logic to load next question from array.
function nextQ() {
    testvar++
    questionElem.textContent = questions[testvar]
    choiceA.textContent = correctAnswers1[testvar]
    choiceB.textContent = correctAnswers2[testvar]
    choiceC.textContent = correctAnswers3[testvar]
    choiceD.textContent = correctAnswers4[testvar]
    console.log("time for the next question")
    if(testvar === 4){
        gameOver()}
        if(timeLeft <=0){

            gameOver()
        }
        
}

//runs page cleanup and starts the name entry and high score
function gameOver() {
    headerElem.setAttribute('game-state', 'postgame')
    alltheButtons.setAttribute('style', 'display: none')
    questionElem.setAttribute('style', 'display: none')
    myStopFunction()
    timerCountEl.textContent = ""
    headerElem.setAttribute('game-state', 'postgame')
    headerCheck()
    console.log('the game has ended')
    highScore()
}


// function to stop timer, courtesy of w3schools. 
function myStopFunction() {
    clearInterval(timerInterval);
  }

// timer function that starts when start button is pressed
function timerGo() {
    timerInterval = setInterval(function () {
        timeLeft--;
        timerCountEl.textContent = timeLeft + " seconds remaining"
        if (timeLeft == 1){
            timerCountEl.textContent = timeLeft + " second remaining"}
        if (timeLeft == 0) {
            clearInterval(timerInterval);
            timerCountEl.textContent = "Times up!"
            headerElem.setAttribute('game-state', 'postgame')
            gameOver()
            headerCheck()
        }

    }, 1000)
}

function highScore(){
    scoreElem.textContent = "Correct: " + correctcount
score2Elem.textContent = "incorrect: " + wrongcount

}


