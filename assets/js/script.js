// Define variables 

// HighScore and Timer variables by element id

var viewHighScore = document.getElementById("viewHighScore");
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

// Start Quiz Page variables by element id 

var all = document.getElementById("all");
var startSection = document.getElementById("start");
var startQuizButton = document.getElementById("start-quiz-button");

// Quiz section variables by element id 

var questionSection = document.getElementById("questionSection");
var questionTitle = document.getElementById("questionTitle");

var answerA = document.getElementById("btn0");
var answerB = document.getElementById("btn1");
var answerC = document.getElementById("btn2");
var answerD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");
var questionNum = 0;
var questionIndex = 0;

// Results variables by element id 

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var finalScore = document.getElementById("finalScore");
var scoreResult;
var correctAns = 0;
// Highscore variables by element id 

var highScoreDiv = document.getElementById("highScoreDiv");
var listOfHighScores = document.getElementById("listOfHighScores");


// Appending HighScores variables by element id 
var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 


// Displaying quiz questions 


const questions = [
    {
        question: "Commonly used datta types DO NOT include:",
        answers: ["a. Strings", "b. Booleans", "c. Alerts", "d. Numbers"],
        answer: "c. Alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answers: ["a. Quotes", "b. Curly brackets", "c. Parenthesis", "d. Square brackets"],
        answer: "c. Parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: ["a. Numbers and strings", "b. Other arrays", "c. Booleans", "d. All of the above"],
        answer: "d. All of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assignment to variables.",
        answers: ["a. Commas", "b. Curly brackets", "c. Quotes", "d. Parentheses"],
        answer: "c. Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["a. JavaScript", "b. Terminal/bash", "c. For loops", "d. Console log"],
        answer: "a. JavaScript"
    }
];


//   Function to run timer 

var totalTime = 75;
function newQuiz() {
    questionIndex = 0;
    totalTime = 75;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startSection.style.display = "none";
    questionSection.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};

function showQuiz() {
    nextQuestion();
}

// Questions and choices 

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    answerA.textContent = questions[questionIndex].answers[0];
    answerB.textContent = questions[questionIndex].answers[1];
    answerC.textContent = questions[questionIndex].answers[2];
    answerD.textContent = questions[questionIndex].answers[3];
}

// Check if answer is correct or incorrect
function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].answers[answer]) {
        correctAns++;
        answerCheck.textContent = "Correct!";
    } else {
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! ";
    }

    questionIndex++;
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

// When all questions have been answered 

function gameOver() {
    summary.style.display = "block";
    questionSection.style.display = "none";
    startSection.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

// Final Score 
    finalScore.textContent = correctAns;
}

// Storing initial and high score in local storage

function storeHighScores(event) {
    event.preventDefault();

    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    } 

    startSection.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreDiv.style.display = "block";   

    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    showHighScores();
}

// Show HighScores Function: 
var i = 0;
function showHighScores() {

    startSection.style.display = "none";
    timer.style.display = "none";
    questionSection.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreDiv.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}

// Event Listeners 

startQuizButton.addEventListener("click", newQuiz);
answerA.addEventListener("click", chooseA);
answerB.addEventListener("click", chooseB);
answerC.addEventListener("click", chooseC);
answerD.addEventListener("click", chooseD);

submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
});

goBackBtn.addEventListener("click", function() {
    startSection.style.display = "block";
    highScoreDiv.style.display = "none";
});

clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "Highscores Cleared";
    listOfHighScores.setAttribute("style", "font-family: 'ui-sans-serif', sans-serif; font-style: italic;")
});