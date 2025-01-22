function addItem() {
    const inputField = document.getElementById('newItemText').value;
    const itemContainer = document.getElementById('items');
    
    const liElement = document.createElement('li');
    liElement.textContent = inputField;
    itemContainer.appendChild(liElement)
}