
let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("startStop").textContent = "Start";
    elapsedTime = 0;
    updateTime();
}

function updateTime() {
  if (isRunning) {
      const currentTime = Date.now();
      elapsedTime = currentTime - startTime;
  }
  const formattedTime = formatTime(elapsedTime);
  document.getElementById("hour").textContent = formattedTime.hours;
  document.getElementById("min").textContent = formattedTime.minutes;
  document.getElementById("sec").textContent = formattedTime.seconds;
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return {
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds)
    };
}

function pad(value) {
    return value < 10 ? "0" + value : value;
}
