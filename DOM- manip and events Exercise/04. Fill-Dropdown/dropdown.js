function addItem() {

    const selectMenu = document.getElementById('menu');
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');

    const newOption = document.createElement('option')
    newOption.textContent = textInput.value;
    newOption.value = valueInput.value;

    selectMenu.appendChild(newOption);

    textInput.value = '';
    valueInput.value = '';
}