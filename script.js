let questions = ["what is this", "what is that", "how many this","how many that","what is the answer to everything"];
let correctAnswers = ['something', 'something else', 'a litte', 'a lottle', '42'];
let incorrectAnswers = ['123','321','111','666','420','710','911','711','411','*69'];
let startButton = document.querySelector("#pressme");
let choiceA = document.querySelector("#a");
let choiceB = document.querySelector("#b");
let choiceC = document.querySelector("#c");
let choiceD = document.querySelector("#d");
let questionElem = document.querySelector("#question")
let headerElem = document.querySelector('.main-title')
headerElem.setAttribute('game-state','pregame')

headerCheck();

function startQuiz(){
    headerElem.setAttribute('game-state','gametime')
    headerCheck()
    console.log('quiz started')
}

function headerCheck(){

    if (headerElem.getAttribute('game-state') == 'pregame'){
        headerElem.textContent = "Welcome to Alex's quiz!"
    }
    else if (headerElem.getAttribute('game-state') == 'gametime'){
        headerElem.textContent = ""
}
else if (headerElem.getAttribute('game-state') == 'postgame')
{
    headerElem.textContent = "Game over! Let's see how you did"
}
}

function nextQ(){
    console.log("time for the next question")
}

function gameOver(){

    console.log('the game has ended')
}

startButton.addEventListener('click', startQuiz)

