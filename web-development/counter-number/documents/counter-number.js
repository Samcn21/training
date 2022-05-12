var firstNumber = document.getElementById("first-number");
var secondNumber = document.getElementById("second-number");
var finalResult = document.getElementById("final-result");


counterActivator = () => {
    if (secondNumber.value > firstNumber.value) {
        var result = 0;
        counterUp = () => {
            var step = (secondNumber.value - firstNumber.value)/10;
            result += (Math.round(Math.random() *step));
            
            if (result < secondNumber.value) {
                finalResult.innerHTML = result;
            } else {
                finalResult.innerHTML = secondNumber.value;
            }
        }
        setInterval(counterUp, 100);
    } else {
        var result2 = firstNumber.value;
        counterDown = () => {
            var step2 = (firstNumber.value - secondNumber.value)/10;
            result2 -= (Math.round(Math.random() *step2));
            
            if (result2 > secondNumber.value) {
                finalResult.innerHTML = result2;
            } else {
                finalResult.innerHTML = secondNumber.value;
            }
        }
        setInterval(counterDown, 100);
    }
}