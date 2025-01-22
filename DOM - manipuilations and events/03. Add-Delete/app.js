function addItem() {
    const inputEl = document.getElementById('newItemText').value;

    const newLi = document.createElement('li');
    newLi.textContent = inputEl;

    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]'

    // function removeEl(){
    //     newLi.remove
    // }                             <------------------  alternative function, if refernce is needed
    newLi.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', () => newLi.remove())

    const items = document.getElementById('items')
    items.appendChild(newLi)
    
}