var birthdayDate = document.getElementById("birthday-date");
var age = document.getElementById("age");

function getAge(dateFromInput, dateNow){
    var oneDay = 24 * 60 * 60 * 1000;
    var daysNumber = Math.round((dateNow.getTime() - dateFromInput.getTime())/(oneDay));
    var resultYear = Math.floor(daysNumber / 365);
    var resultDay = daysNumber - (resultYear * 365);
    var resultAge = [];
    resultAge.push(resultYear, resultDay);
    return resultAge;
}

function getParseDate(stringText){
    var formatText = stringText.split("/");
    return new Date(formatText[2], (formatText[1] - 1), formatText[0]);
}

birthdayDate.addEventListener("change", function(){
    var ageCount = getAge(getParseDate(birthdayDate.value), new Date());
    age.innerHTML = ageCount[0] + " years old and " + ageCount[1] + " days";
});