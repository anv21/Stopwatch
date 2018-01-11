const el = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const stoptBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

var intervalId = null;
var startDate = null;


startBtn.addEventListener('click', function() {
    runTimer()
});

stoptBtn.addEventListener('click', function() {
    stopTimer()
});

resetBtn.addEventListener('click', function() {
    startDate = new Date();
    drawTime(startDate)
});

const drawTime = function(startDate) {
    const timeElapsed = new Date() - startDate;
    const sec = Math.floor(timeElapsed / 1000);
    const msec = timeElapsed - sec * 1000;
    el.innerText = `${sec}.${msec}`;
};

const runTimer = function() {
    if (intervalId === null) {
        if (startDate === null) {
            startDate = new Date()
        }
        intervalId = setInterval(function() {
            drawTime(startDate)
        }, 1)
    }
};

const stopTimer = function() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null
    }
};

drawTime(new Date());
