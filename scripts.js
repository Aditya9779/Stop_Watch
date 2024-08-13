
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
