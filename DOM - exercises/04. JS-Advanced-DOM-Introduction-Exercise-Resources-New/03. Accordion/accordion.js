function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const text = document.getElementById('extra');

    if (button.textContent == 'More'){
        button.textContent = 'Less'
        text.style.display = 'block'
    }else { 
        text.style.display = 'none'
        button.textContent = 'More'
    }
}