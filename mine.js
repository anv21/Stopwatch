const el = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const stoptBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let intervalId = null;
let startDate = null;


startBtn.addEventListener('click', function() {
    runTimer()
});

stoptBtn.addEventListener('click', () => {
    stopTimer()
});

resetBtn.addEventListener('click', () => {
    startDate = new Date();
    drawTime(startDate)
});

const drawTime = (startDate) => {
    const timeElapsed = new Date() - startDate;
    const sec = Math.floor(timeElapsed / 1000);
    const msec = timeElapsed - sec * 1000;
    el.innerText = `${sec}.${msec}`
};

const runTimer = () => {
    if (intervalId === null) {
        if (startDate === null) {
            startDate = new Date()
        }
        intervalId = setInterval(() => {
            drawTime(startDate)
        }, 1)
    }
};

const stopTimer = () => {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null
    }
};

drawTime(new Date());
