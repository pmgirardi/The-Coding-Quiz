
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```

// Define variables 

// HighScore and Timer variables by element id

var viewHighScore = document.getElementById("viewHighScore");
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

// Start Quiz Page variables by element id 

var everything = document.getElementById("everything");
var startQuizButton = document.getElementById("start-quiz-button");

// Quiz section variables by element id 

var question = document.getElementById("question");
var questionTitle = document.getElementById("questionTitle");

var choice0 = document.getElementById("btn0");
var choice1 = document.getElementById("btn1");
var choice2 = document.getElementById("btn2");
var choice3 = document.getElementById("btn3");
var lineBreak = document.getElementById("lineBreak");
var answerCheck = document.getElementById("answerCheck");

// Results variables by element id 