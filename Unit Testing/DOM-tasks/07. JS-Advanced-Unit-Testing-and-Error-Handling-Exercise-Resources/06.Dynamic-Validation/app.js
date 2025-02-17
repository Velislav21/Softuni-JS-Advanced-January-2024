function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(event){
        const emailPattern = /[a-z]+@[a-z]+\.[a-z]+/gm;

        if(emailPattern.test(event.target.value)){
            event.target.classList.remove('error');
        }else {
            event.target.classList.add('error');
        }
    }
}
