function extractText() {
    
    const itemsTextContent = document.getElementById('items').textContent;

    const resultElement = document.getElementById('result');
    resultElement.textContent = itemsTextContent
}
// extractText()