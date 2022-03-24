let questions = ["What is the hyper text markup language?", "What characters are used to comment out text in javascript?", "How do you link javascript in html?", "what is the first position in an array?"];
let correctAnswers1 = ['html', '/*', '<javascript>', '1st'];
let correctAnswers2 = ['javascript', '-/', '<script>', '0'];
let correctAnswers3 = ['css', '--', '<js>', '1'];
let correctAnswers4 = ['bootstrap', '//', '{script}', 'A',];
let correctAnswers = ['html','//','0','<script>']
let startButton = document.querySelector("#pressme");
let choiceA = document.querySelector("#a");
let choiceB = document.querySelector("#b");
let choiceC = document.querySelector("#c");
let choiceD = document.querySelector("#d");
let scoreButt = document.querySelector('#score')
let questionElem = document.querySelector("#question")
let scoreElem = document.querySelector(".score1")
let score2Elem = document.querySelector(".score2")
let totalscore = document.querySelector(".totalscore")
let headerElem = document.querySelector('.main-title')
let scoreTable = document.querySelector('#scoretable')
let tableName = document.querySelector('#scorename')
let tableScore = document.querySelector('#scorenumber')
let resetButton = document.querySelector('#reset')
headerElem.setAttribute('game-state', 'pregame')
let correctcount = 0;
let wrongcount = 0;
let currentQuestion = 0;
let timeLeft = 30;
let timerCountEl = document.querySelector("#thetimer");
let alltheButtons = document.querySelector('.choices');
let selectedAnswer = '';
let testvar = 0;
let timerInterval = '';
let points = "";
let userName = '';

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
    scoreCalc()
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


function scoreCalc(){
points = (correctcount * 50) - (wrongcount * 50)
return points
}

function highScore(){
    scoreCalc()
scoreElem.textContent = "Correct: " + correctcount
score2Elem.textContent = "Incorrect: " + wrongcount
totalscore.textContent = "Total: " + points
scoreButt.setAttribute('style', 'display:block')
}

function scoreKeeper(){
    document.createElement('form')

}

function storeScore(){
    console.log(points)
    localStorage.setItem('username',userName)
    localStorage.setItem('score', points )
    tableName.textContent = localStorage.getItem('username')
    tableScore.textContent = localStorage.getItem('score')
    // resetButton.setAttribute('style', 'display:block')


}

scoreButt.addEventListener("click", function(){
    score2Elem.setAttribute('style', 'display:none')
    scoreElem.setAttribute('style', 'display:none')
    totalscore.setAttribute('style', 'display:none')
    headerElem.setAttribute('style', 'display:none')
    userName = prompt("You have made the score list! Enter your name to find out if its THE high score!")
    scoreButt.setAttribute('style', 'display:none')
    scoreTable.setAttribute('style', 'display:block') 
    resetButton.setAttribute('style', "display:block")   
    storeScore() 

return userName
})

resetButton.addEventListener('click',function() {
    location.reload()})




