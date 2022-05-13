var minNumber = document.getElementById("min");
var maxNumber = document.getElementById("max");
var unwantedNumbers = document.getElementById("exclusion-list");
var finalResult = document.getElementById("final-result");

var obtainedNumbers = []

getRandomNumber = () => {
    var min = minNumber.value;
    var max = maxNumber.value;
    var difference = max-min;
    var unwanted = unwantedNumbers.value;
    var exclusionList = unwanted.split(', ');

    var randomNumber = Math.round((Math.random()) * difference + parseInt(min));
    var stringRandomNumber = randomNumber.toString();

    if (exclusionList.includes(stringRandomNumber) === false && obtainedNumbers.includes(stringRandomNumber) === false) {
        finalResult.innerHTML = stringRandomNumber;
        obtainedNumbers.push(stringRandomNumber);
    } else {
        getRandomNumber ()
    }
}