function solve() {
    const inputString = document.getElementById('text').value
    const currentCase = document.getElementById('naming-convention').value
    const resultElement = document.getElementById('result')
  
    const toPascal = (text) =>
      text
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join("")
  
    const toCamel = (text) => {
      text = toPascal(text)
      return text[0].toLowerCase() + text.slice(1)
    }
    if (currentCase == "Pascal Case") {
      resultElement.textContent = toPascal(inputString)
    } else if (currentCase == "Camel Case") {
      resultElement.textContent = toCamel(inputString)
    } else {
      resultElement.textContent = 'Error!'
    }
  }