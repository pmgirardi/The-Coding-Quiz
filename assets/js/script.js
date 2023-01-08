
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

var results = document.getElementById("results");
var finalScore = document.getElementById("finalScore");
var enterInitials = document.getElementById("enterInitials");
var submitBtn = document.getElementById("submitBtn");

// Highscore variables by element id 


var highScores = document.getElementById("highScores");
var listOfHighScores = document.getElementById("listOfHighScores");

// Appending HighScores variables by element id 

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn =document.getElementById("clearHighScoreBtn");

// Displaying quiz questions 

const Questions = [
    {
      question: "Commonly used datta types DO NOT include:",
      answers: {
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers"
      },
      correctAnswer: "c"
    },
    {
      question: "The condition in an if/else statement is enclosed within _____.",
      answers: {
        a: "Quotes",
        b: "Curly brackets",
        c: "Parentheses",
        d: "Square Brackets"
      },
      correctAnswer: "c"
    },
    {
      question: "Arrays in JavaScripts can be used to store _____.",
      answers: {
        a: "Numbers and strings",
        b: "Other arrays",
        c: "Booleans",
        d: "Square brackets"
      },
      correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within _____ when being assignment to variables.",
        answers: {
          a: "Commas",
          b: "Curly brackets",
          c: "Quotes",
          d: "Parentheses"
        },
        correctAnswer: "c"
      },
      {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
          a: "JavaScript",
          b: "Terminal/bash",
          c: "For loops",
          d: "Console log"
        },
        correctAnswer: "a"
      }
  ];

