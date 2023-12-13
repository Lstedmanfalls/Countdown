const setColor = () => {
    const content = document.getElementById("content");
    content.style.backgroundColor = content.style.backgroundColor == "red" ? "aqua" : "red";
}

const setTimer = () => {
    diff = timerEnd - new Date().getTime();
    const seconds = Math.floor ((diff % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = "The bomb will explode in"
    document.getElementById("date").innerHTML = seconds + " " + "seconds"
    if (diff <= 1000 ) {
        content.style.backgroundColor = "white";
        document.getElementById("countdown").innerHTML= ''
        document.getElementById("date").innerHTML = "The bomb has exploded. You died.";
        clearInterval(timer);
        clearInterval(color);
        }
}

let color;
let timer;
let timerEnd;

const startTimer = () => {
    const countdownSeconds = 10;
    // Add two seconds to the desired time due to live server lag
    timerEnd = new Date().getTime() + ((countdownSeconds + 2) * 1000);
    timer = setInterval(setTimer, 1000);
    color = setInterval(setColor, 1000);
}

// startTimer();