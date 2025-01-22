function deleteByEmail() {
    const searchedEmail = document.querySelector('input[name="email"]').value;
    const resultEl = document.getElementById('result')
    const list = document.querySelectorAll('tr td:nth-of-type(2)');

    for (let email of list){

        if (email.textContent == searchedEmail){
            email.parentNode.remove()
            resultEl.textContent = 'Deleted.'
        }else {
            resultEl.textContent = 'Not found.'
        }
    }
}