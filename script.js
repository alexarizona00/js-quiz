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

}

scoreButt.addEventListener("click", function(){
    score2Elem.setAttribute('style', 'display:none')
    scoreElem.setAttribute('style', 'display:none')
    totalscore.setAttribute('style', 'display:none')
    headerElem.setAttribute('style', 'display:none')
    userName = prompt("You have made the score list! Enter your name to find out if its THE high score!")
    scoreButt.setAttribute('style', 'display:none')
    scoreTable.setAttribute('style', 'display:block')    
    storeScore() 

return userName
}


)
class Employee {
    constructor(employee_username, password, department, yy, email, level) {
      this.employee_user = employee_username;
      this.password = password;
      this.department = department;
      this.email = email;
      this.skills = [];
      this.level = level;
    }
    
    // function: Pushses new skill, in "Skills" array
    addNewSkill(skill){
      this.skills.push(skill);
    }
  }
  
  //Employee Database "Localstorage"

  if(localStorage.getItem('Employee') == null) {
     var employeeList = [];
     employeeList.push (new Employee("Simon", 1234, "HR", 1999, "123@mail.dk", '1'));
     employeeList.push (new Employee("Mads", 12345,"IT", 1999,  "1234@email.com", '1'));
     employeeList.push (new Employee("Jessica", 54321, "Sales",1998, "Mail2@mail.dk",'1'));
     employeeList.push (new Employee("Benjamin", 4321,"IT", 1997, "blabla@mail.dk", '1'));
  
     var employeeListString = JSON.stringify(employeeList)
     localStorage.setItem('Employee', employeeListString)
  } else {
     var employeeList = JSON.parse(localStorage.getItem('Employee'))
  }
  
  function buildTable(data) {
    let table = document.createElement("table");
    
    // Create table head and body
    table.appendChild(document.createElement('thead'));
    table.appendChild(document.createElement('tbody'));
    
    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    fields.forEach(function(field) {
        let headCell = document.createElement("th");
        headCell.textContent = field;
        headRow.appendChild(headCell);
    });
    table.querySelector('thead').appendChild(headRow);
    data.forEach(function(object) {
        let row = document.createElement("tr");
        fields.forEach(function(field) {
            let cell = document.createElement("td");
            cell.textContent = object[field];
            if (typeof object[field] == "number") {
                cell.style.textAlign = "right";
            }
            row.appendChild(cell);
        });
        table.querySelector('tbody').appendChild(row);
    });
    return table;
  }
  
  document.querySelector('#employees').appendChild(buildTable(employeeList));

