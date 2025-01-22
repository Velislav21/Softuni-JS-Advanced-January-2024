function addItem() {
    const inputEl = document.getElementById('newItemText').value;

    const newLi = document.createElement('li');
    newLi.textContent = inputEl;

    const items = document.getElementById('items')
    items.appendChild(newLi)
}