var readlineSync = require("readline-sync");

var score = 0 ;

var highScores = [
 {
  name: "nand",
  score: 3
 },
 {
  name: "dana",
  score: 3
 },
]

var questions = [{
  question: " what's my real name? ",
  answer: "sagar"
},
{
  question: " where do i live? ",
  answer: "hassan"
},
{
  question: " what's my age? ",
  answer: "20"
},
{
  question: " what's my dream ? ",
  answer: "To be a blockchain developer"
},
{
  question: " what's my favorite artist's name ",
  answer: "NF"
},
];
//welcome function
function welcome ()
{
 var userName = readlineSync.question("What's your name");
 console.log("Welcome " + userName + " to do you know me quiz");

}

//play function 
function play(question , answer)
{
 var userAnswer = readlineSync.question(question);

 if (userAnswer.toUpperCase === answer.toUpperCase)
 {
  console.log(" you are right , you know me well");
  score++;
 }
 else {
  console.log("Wrong");
 }
 console.log("current score: ",score);
 console.log("------");
}

function game()
{
 for (var i = 0;i<questions.length;i++)
 {
  var currentQuestion = questions[i];
  play(currentQuestion.question , currentQuestion.answer)

 }
}

function showScores ()
{
 console.log("YAY! you scored: ", score);

 console.log("Check out high scores, and i can add you there but i need money ");

 highScores.map(score => console.log(score.name," : ",score.score))
} 


welcome();
game();
showScores();
