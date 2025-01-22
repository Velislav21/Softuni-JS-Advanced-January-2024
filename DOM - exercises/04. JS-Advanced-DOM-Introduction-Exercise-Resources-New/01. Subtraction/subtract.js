function subtract() {
    let num1 = document.getElementById('firstNumber').value;
    let num2 = document.getElementById('secondNumber').value;
    
    const resultElement = document.getElementById('result');

    const result = Number(num1) - Number(num2)

    resultElement.textContent = result
}
