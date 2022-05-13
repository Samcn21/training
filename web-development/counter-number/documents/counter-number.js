var firstNumber = document.getElementById("first-number");
var secondNumber = document.getElementById("second-number");
var finalResult = document.getElementById("final-result");

counterActivator = () => {
    var step = Math.abs(secondNumber.value - firstNumber.value)/10;

    if (secondNumber.value > firstNumber.value) {
        var addingNumbers = parseInt(firstNumber.value);

        counterUp = () => {
            addingNumbers += (Math.round(Math.random() * step));
        
            if (addingNumbers < secondNumber.value) {
                finalResult.innerHTML = addingNumbers;
            } else {
                finalResult.innerHTML = secondNumber.value;
            }
        }
        setInterval(counterUp, 100);

    } else {
        var subtractNumbers = firstNumber.value;
        
        counterDown = () => {
            subtractNumbers -= (Math.round(Math.random() * step));
            
            if (subtractNumbers > secondNumber.value) {
                finalResult.innerHTML = subtractNumbers;
            } else {
                finalResult.innerHTML = secondNumber.value;
            }
        }
        setInterval(counterDown, 100);
    }
}