function addItem() {
    const inputText = document.getElementById('newItemText'); 
    const value = document.getElementById('newItemValue')
    const menu = document.getElementById('menu');

    const newOption = document.createElement('option');

    newOption.textContent = inputText.value;
    newOption.value = value.value;

    menu.appendChild(newOption)

    inputText.value = ''
    value.value = ''
}