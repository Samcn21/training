var secondHand = document.querySelector(".second-hand");
var minuteHand =document.querySelector(".minute-hand");
var hourHand = document.querySelector(".hour-hand");

function clock() {
    var date = new Date();
    var second = date.getSeconds();
    var minute = date.getMinutes();
    var hour = date.getHours();

    var secondDegree = second * (360 / 60);
    var minuteDegree = minute * (360 / 60) + second * (360 / 3600);   //  (360 degree / 3600 second)
    var hourDegree = hour * (360 / 12) + minute * (360 / 720);        //  (360 degree / 720 minute)

    secondHand.style.transform = "rotate(" + secondDegree + "deg)";
    minuteHand.style.transform = "rotate(" + minuteDegree + "deg)";
    hourHand.style.transform   = "rotate(" + hourDegree + "deg)";   
}

setInterval(clock, 1000);
