var futureDate = new Date("Aug 30, 2021 12:07:00").getTime();
var color = setInterval(setColor, 1000);

function setColor() {
    var x = document.getElementById("content");
    x.style.backgroundColor = x.style.backgroundColor == "red" ? "white" : "red";
}

var countdown = setInterval(function(){
    var now = new Date().getTime();
    var until = futureDate - now;
    var days = Math.floor(until / (1000 * 60 * 60 * 24));
    var hours = Math.floor((until % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    var minutes = Math.floor ((until % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor ((until % (1000 * 60)) / 1000);
    
    document.getElementById("date").innerHTML = minutes + " " + "mins " + "and" + " " + seconds + " " + "sec"
    if (until < 0) {
        clearInterval(countdown);
        document.getElementById("date").innerHTML = "The bomb has exploded. You died.";
        document.getElementById("countdown").innerHTML= ''
        clearInterval(color);
        }
    }, 1000);