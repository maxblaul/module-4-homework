// var wronganswerButton="wronganswer"
// var correctanswerButton="correctanswer"
var startButton=document.querySelector(".start-button");
var qIndex = 0;
// var questionOne
// var questionTwo=document.querySelector(".question-two")
// var questionThree=document.querySelector(".question-three")
// var questionFour=document.querySelector(".question-four")
var questionsListEl=document.querySelector("questionsList");
var optsEl=document.querySelector("opts");
var q=document.querySelector("q");
var questionsList = [
    {
        q: "Which of the following is NOT a primitive data type in JavaScript?",
        opts: ["Number","Boolean", "Object","String" ],
        correctAns: "Object"
    },
    {
        q: "What does the “NaN” value represent in JavaScript?",
        opts: ["Not a number","Null value","Boolean value", "Undefined value" ],
        correctAns: "Not a number"
    },
    {   
        q: "What is the correct syntax for a “for” loop in JavaScript?", 
        opts: ["for (i = 5; i > 0; i-)","for (i = 0;i < 5; i++)","for (var i = 5; i > 0; i-)", "for (var i =0; < 5; i++)"],
        correctAns: "for (var i =0; < 5; i++)"
    },
    {
        q: "In which HTML element do we put the JavaScript?",
        opts: ["Java","Script","JS","Scripting" ],
        correctAns: "Script"

    }
]
// created variables and question list
startButton.addEventListener("click", function () {
    var container=document.querySelector(".container")
    container.classList.remove("hide")
    startButton.classList.add("hide")
    startCountdown(); 
})
// start button and countdown
// set interval time to 1 minute
let time = 60;
// timer needs to update after every 1 second
function updateTimerDisplay() {
    var timerElement = document.getElementById('timer');
    timerElement.textContent = `${time} seconds`;
}
// countdown needs to initialize
function startCountdown() {
    updateTimerDisplay();   

    var countdownInterval = setInterval(function () {
        time--;
        updateTimerDisplay ();

        if (time <=0) {
            clearInterval(countdownInterval);
            alert('Time has elapsed!');
        }
    }, 1000);
}
document.getElementById('wronganswerButton').addEventListener('click', function () {
    // I had this before becuase i thought i would use it...
    time -= 15; 
    updateTimerDisplay();
// });function to get the question
function getQuestion(){
   var currentQuestion=questionsList[current]
}
function showQuestion (){
    if ((time <= 0))||(qIndex<questionsList.length-1);{
        clearInterval(timerId)
        var endOfGame = document.querySelector("end-game")
        endOfGame.removeAttribute("class");
        var score= document.querySelector("score")
    }

}
// functoin to get question

// function to unhide questions from list
function showQuestion (){
    var currentQuestion=questionsList[questionsList]
    q.textContent=currentQuestion.title

    var opts=currentQuestion.opts
    optsEl.innerHTML=""
    for (let index=0; index < opts.length; index++) {

        var opts = opts[index];
        var buttonEl = document.createElement("button")
        buttonEl.value=opts
        optsEl.appendChild(buttonEl)

    }
    
}
optsEl.addEventListener("click", function(e){
    console.log(e.target.value);
    if (e.target.value !== questionList[optsIndex].correctAns){
        time=time-15
    }
    if(optsIndex<q.length-1){
        optsIndex++
        showQuestion()
        else{}
        }
    }
})
// function to pick a right or wrong answer... did not finish this... 

// this was something i thought i was going to need but i had to change the method

// correctanswerButton.addEventListener("click", function() {
//     var questionTwo=document.querySelector(".question-two")
//     questionTwo.classList.remove("hide")
//     var questionThree=document.querySelector(".question-three")
//     questionThree.classList.remove("hide")
//     var questionFour=document.querySelector(".question-four")
//     questionFour.classList.remove("hide")
// })
// wronganswerButton.addEventListener("click",)
