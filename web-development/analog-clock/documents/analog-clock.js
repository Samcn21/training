function clock() {
    date = new Date();
    second = date.getSeconds();
    minute = date.getMinutes();
    hour = date.getHours();

    secondDegree = second * (360/60);
    minuteDegree = minute * (360/60) + second * (360/3600);   //  (360 degree / 3600 second)
    hourDegree = hour * (360/12) + minute * (360/720);        //  (360 degree / 720 minute)

    document.querySelector(".second-hand").style.transform = "rotate(" + secondDegree + "deg)";
    document.querySelector(".minute-hand").style.transform = "rotate(" + minuteDegree + "deg)";
    document.querySelector(".hour-hand").style.transform   = "rotate(" + hourDegree + "deg)";
}

setInterval("clock()", 1000);