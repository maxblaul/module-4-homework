var wronganswerButton="wronganswer"
var correctanswerButton="correctanswer"
var startButton=document.querySelector(".start-button")

startButton.addEventListener("click", function () {
    var container=document.querySelector(".container")
    container.classList.remove("hide")
    startButton.classList.add("hide")
    startCountdown(); 
})
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
    time -= 15; 
    updateTimerDisplay();
});


