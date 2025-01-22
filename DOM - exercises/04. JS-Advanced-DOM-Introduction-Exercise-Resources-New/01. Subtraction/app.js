function subtract() {
    
    const num1 = document.getElementById("firstNumber").value
    const num2 = document.getElementById("secondNumber").value
    
    const result = Number(num1) - Number(num2)
    const div = document.getElementById('result')
    div.textContent = result

    let p = document.createElement('p')
    let li = document.createElement('li');
    li.appendChild(p)
}