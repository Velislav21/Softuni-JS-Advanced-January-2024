function extractText() {
    
    const items = document.getElementById('items').children
    const arr = Array.from(items)
    
    const result = arr.map(item => item.textContent).join('\n')
    document.getElementById('result').value = result

}