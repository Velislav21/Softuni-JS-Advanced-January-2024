function addItem() {
    const inputField = document.getElementById('newItemText').value;
    const itemContainer = document.getElementById('items');

    const liElement = document.createElement('li');
    liElement.textContent = inputField;

    const delBtn = document.createElement('a');
    delBtn.href = '#'
    delBtn.textContent = '[Delete]';

    delBtn.addEventListener('click', () => {
        delBtn.parentNode.remove()
    })

    liElement.appendChild(delBtn)


    itemContainer.appendChild(liElement)
}