function validate() {

    const userNameInputElement = document.getElementById('username');
    const emailInputElement = document.getElementById('email');
    const passwordInputElement = document.getElementById('password');
    const confirmPasswordInputElement = document.getElementById('confirm-password');
    const checkedButton = document.getElementById('company');
    const fieldSetElement = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/gi;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi;
    const passwordPattern = /^[\w+]{5,15}$/gi;

    checkedButton.addEventListener('change', () => {
        if (checkedButton.checked) {
            fieldSetElement.style.display = 'contents'
        } else {
            fieldSetElement.style.display = 'none'
        }
    })

    document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault();
        if (Number(companyNumber.value) < 1000 && Number(companyNumber.value > 9999)) {
            companyNumber.add()
        }
        console.log(companyNumber.value)
        // if (userNameInputElement.value.match(usernamePattern)) {
        // } 
    })

}