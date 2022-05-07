
var birthdayDate = document.getElementById("birthday-date");
var age = document.getElementById("age");
var time = document.getElementById("time");

function getAge(dateFromInput, dateNow){
    var oneDay = 24 * 60 * 60 * 1000;
    var allDaysNumber = Math.round((dateNow.getTime() - dateFromInput.getTime())/(oneDay));
    var year = Math.floor(allDaysNumber / 365.25);
    var yearDaysNumber = allDaysNumber - (year * 365.25);
    var month = Math.floor(yearDaysNumber / 30);
    var day = Math.floor(yearDaysNumber - (month * 30));
    
    var age = [];
    age.push(year, month, day);
    return age;
}

function getParseDate(stringText){
    var formatText = stringText.split("/");
    return new Date(formatText[2], (formatText[1] - 1), formatText[0]);
}

birthdayDate.addEventListener("change", function (){
    var ageCount = getAge(getParseDate(birthdayDate.value), new Date());
    age.innerHTML = ageCount[0] + " years, " + ageCount[1] + " months, " + ageCount[2] + " days,";
    time.style.display="inline-block";
});

function moment() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    time.innerHTML=`${hour} hours, ${minute} minutes, ${second} seconds`;
}

setInterval(moment, 1000)