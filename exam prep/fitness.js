window.addEventListener('load', solve);

function solve() {

    let valuesArr = [];
    const inputs = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        contact: document.getElementById('contact-number'),
        typeClass: document.getElementById('class-type'),
        time: document.getElementById('class-time'),
    };
    const ulConfirm = document.querySelector('.confirm-class');
    const ulPreview = document.querySelector('.class-info');
    const nextBtn = document.getElementById('next-btn');

    const li = document.createElement('li');
    li.classList.add('info-item');

    const article = document.createElement('article');
    article.classList.add('personal-info');

    const nameP = document.createElement('p');
    const emailP = document.createElement('p');
    const contactP = document.createElement('p');
    const classP = document.createElement('p');
    const timeP = document.createElement('p');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    const continueBtn = document.createElement('button');
    continueBtn.classList.add('continue-btn');
    continueBtn.textContent = 'Continue';

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = 'Cancel';

    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('confirm-btn');
    confirmBtn.textContent = 'Confirm';

    nextBtn.addEventListener('click', onNextBtnClick);

    function onNextBtnClick(event) {
        event.preventDefault();
        if (
            inputs.name.value == '' ||
            inputs.email.value == '' ||
            inputs.contact.value == '' ||
            inputs.typeClass.value == '' ||
            inputs.time.value == ''
        ) {
            return;
        }
        valuesArr.push(
            inputs.name.value,
            inputs.email.value,
            inputs.contact.value,
            inputs.typeClass.value,
            inputs.time.value);


        nameP.textContent = `${inputs.name.value}`;
        emailP.textContent = `${inputs.email.value}`;
        contactP.textContent = `${inputs.contact.value}`;
        classP.textContent = `${inputs.typeClass.value}`;
        timeP.textContent = `${inputs.time.value}`;

        article.appendChild(nameP);
        article.appendChild(emailP);
        article.appendChild(contactP);
        article.appendChild(classP);
        article.appendChild(timeP);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        ulPreview.appendChild(li);
        inputs.name.value = ''
        inputs.email.value = ''
        inputs.contact.value = ''
        inputs.typeClass.value = ''
        inputs.time.value = ''
        nextBtn.disabled = true;
    }

    editBtn.addEventListener('click', onEditBtnClick)
    function onEditBtnClick() {
        inputs.name.value = valuesArr[0];
        inputs.email.value = valuesArr[1];
        inputs.contact.value = valuesArr[2];
        inputs.typeClass.value = valuesArr[3];
        inputs.time.value = valuesArr[4];

        ulPreview.innerHTML = '';
        nextBtn.disabled = false;
    };

    continueBtn.addEventListener('click', onContinueBtnClick);
    function onContinueBtnClick(){
        editBtn.remove();
        continueBtn.remove();
        ulPreview.innerHTML = '';

        li.appendChild(confirmBtn)
        li.appendChild(cancelBtn)
        ulConfirm.appendChild(li);
    };

    cancelBtn.addEventListener('click', onCancelBtnClick);
    function onCancelBtnClick(){
        ulConfirm.innerHTML = '';
        nextBtn.disabled = false;
    }
}




