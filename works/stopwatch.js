let secondExpired = 0;
let isRunning = false;

function onSecondExpire() {
    secondExpired++;
    displayTime(secondExpired);
}

function displayTime(second) {
    const second_remain = second % 60;
    const minute = Math.floor(second / 60) % 60;
    const hour = Math.floor(second / 3600);

    const second_str = ('00' + second_remain).slice(-2);
    const minute_str = ('00' + minute).slice(-2);
    const hour_str = hour;

    const stopwatchElement = document.querySelector('#stopwatch');
    if (hour > 0) {
        stopwatchElement.innerText =
            `${hour_str}:${minute_str}:${second_str}`;
    } else {
        stopwatchElement.innerText =
            `${minute_str}:${second_str}`;
    }
}

function displayRunningState(isRunning) {
    const buttonElement = document.querySelector('#toggleRunningButton');
    if (isRunning) {
        buttonElement.innerText = "ストップ";
    } else {;
        buttonElement.innerText = "スタート";
    }
}

function setTimerOn() {
    timerID = setInterval(onSecondExpire, 1000);
    isRunning = true;
    displayRunningState(isRunning);
}

function setTimerOff() {
    clearInterval(timerID);
    isRunning = false;
    displayRunningState(isRunning);
}

const toggleRunning = () => {
    if (isRunning) {
        setTimerOff();
    } else {
        setTimerOn();
    }
}

const resetTimer = () => {
    secondExpired = 0;
    setTimerOff();
    displayTime(secondExpired);
}