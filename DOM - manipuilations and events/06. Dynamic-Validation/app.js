function validate() {
    const enteredEmail = document.getElementById('email');
    const emailPattern = /[a-z]+@[a-z]+\.[a-z]+/g;
    enteredEmail.addEventListener('change', () => {

        if (enteredEmail.value.match(emailPattern)) {
            enteredEmail.classList.remove('error')
        } else {
            enteredEmail.classList.add('error')
        }

        // enteredEmail.value.match(emailPattern) ?
        // enteredEmail.classList.remove('error') : enteredEmail.classList.add('error')
    });
}