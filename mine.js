let h1 = document.getElementsByTagName('h1')[0];
let start = document.getElementById('start-btn');
let stop = document.getElementById('stop-btn');
let clear = document.getElementById('reset-btn');
let seconds = 0;
let minutes = 0;
let hours = 0;
let pause;

const add = () => {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h1.innerText = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds > 9 ? seconds : "0" + seconds);

    timer();
};

const timer = () => {
    pause = setTimeout(add, 1000);
};

/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = () => {
    clearTimeout(pause);
};

/* Clear button */
clear.onclick = () => {
    h1.innerText = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
};