var clickElement = document.getElementById("click");
var timerElement = document.getElementById("timer");
var dateElement = document.getElementById("date");
var timeElement = document.getElementById("time");
var titleElement = document.getElementById("title");

var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;

clickElement.addEventListener("click", function() {
    var date = dateElement.value;
    var time = timeElement.value;
    var title = titleElement.value;
    
    var targetTime = new Date(date + " " + time).toISOString();
    var unixTargetTime = new Date(targetTime).getTime();
    
    function countdownTimer() {
        var unixNow = new Date().getTime();
        var timeBetween = unixTargetTime - unixNow;
            
        var days = Math.floor(timeBetween / day);
        var hours = Math.floor((timeBetween % day) / hour);
        var minutes = Math.floor((timeBetween % hour) / minute);
        var seconds = Math.floor((timeBetween % minute) / second);
        
        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s <br> until ${title}`;
        
        if (timeBetween < 0 && timeBetween > -1*minute) {
            clearInterval(countdownTimer);
            timerElement.innerHTML = title; 
        } else if (timeBetween < 0){
            clearInterval(countdownTimer);
            timerElement.innerHTML = "EXPIRED"; 
        }
    }
    setInterval(countdownTimer, 1000);
    
    document.querySelector(".container").style.display = "none";
})