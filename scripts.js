/*
const btnStart = document.createElement('button');
const btnStop = document.createElement('button');
const btnReset = document.createElement('button');
btnStart.textContent = " Start Timer ";
btnStop.textContent = "Stop Timer";
btnReset.textContent = "ResetTimer";
document.body.appendChild(btnStart);
document.body.appendChild(btnReset);
document.body.appendChild(btnStop);
btnStart.style.fontSize = "16px";
btnReset.style.fontSize = "16px";
btnStart.style.marginRight = "20%";

btnStop.style.fontSize = "16px";
btnReset.style.margin = "16px 16px 0 16px ";
btnStop.style.borderBlockColor = "cyan";
btnStart.style.borderBlockColor = "red";
btnReset.style.borderBlockColor = "blue";

const time = document.getElementById("timer");
let totalSeconds = 0; // Renamed for clarity
time.textContent = `0 Hours 0 Minutes 0 Seconds`;

let steTimer;

btnStart.addEventListener("click", () => {

    steTimer = setInterval(() => {
        totalSeconds++;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        time.textContent = `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }, 1000);

});

btnStop.addEventListener("click", () => {

    clearInterval(steTimer);
    steTimer = null;

});

btnReset.addEventListener("click", () => {

    clearInterval(steTimer);
    steTimer = null;
    totalSeconds = 0;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    time.textContent = `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

})

*/
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnReset = document.getElementById('btnReset');
const time = document.getElementById('timer');

let totalSeconds = 0;
time.textContent = `0 Hours 0 Minutes 0 Seconds`;

let timer;

btnStart.addEventListener("click", () => {
    timer = setInterval(() => {
        totalSeconds++;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        time.textContent = `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }, 1000);
});

btnStop.addEventListener("click", () => {
    clearInterval(timer);
});

btnReset.addEventListener("click", () => {
    clearInterval(timer);
    totalSeconds = 0;
    time.textContent = `0 Hours 0 Minutes 0 Seconds`;
});
