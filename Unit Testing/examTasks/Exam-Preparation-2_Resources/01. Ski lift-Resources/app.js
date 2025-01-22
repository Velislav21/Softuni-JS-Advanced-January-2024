window.addEventListener('load', solve);

function solve() {
    let valuesArr = [];
    
    const [firstName, lastName, peopleCount, fromDate, daysCount] = Array.from(document.querySelector('form').querySelectorAll('input'));
    const nextBtn = document.getElementById('next-btn');
    const body = document.getElementById('body');
    const div = document.getElementById('main');
    const ulPreview = document.querySelector('.ticket-info-list');
    const ulConfirm = document.querySelector('.confirm-ticket');
    const li = document.createElement('li');
    li.classList.add('ticket');

    const article = document.createElement('article');

    const nameH3 = document.createElement('h3');
    const fromDateP = document.createElement('p');
    const daysP = document.createElement('p');
    const peopleCountP = document.createElement('p');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    const continueBtn = document.createElement('button');
    continueBtn.classList.add('continue-btn');
    continueBtn.textContent = 'Continue';
    
    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('confirm-btn');
    confirmBtn.textContent = 'Confirm';

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = 'Cancel';

    const backBtn = document.createElement('button');
    backBtn.setAttribute('id', 'back-btn')
    backBtn.textContent = 'Back'
    nextBtn.addEventListener('click', onNextClick);

    function onNextClick(e) {
        e.preventDefault();
        if (
            firstName.value == '' ||
            lastName.value == '' ||
            peopleCount.value == '' ||
            fromDate.value == '' ||
            daysCount.value == ''
        ) {
            return;
        }
        valuesArr.push(firstName.value, lastName.value, peopleCount.value, fromDate.value, daysCount.value);

        nameH3.textContent = `Name: ${firstName.value} ${lastName.value}`;
        fromDateP.textContent = `From date: ${fromDate.value}`;
        daysP.textContent = `For ${daysCount.value} days`;
        peopleCountP.textContent = `For ${peopleCount.value} people`;

        article.appendChild(nameH3);
        article.appendChild(fromDateP);
        article.appendChild(daysP);
        article.appendChild(peopleCountP);

        li.appendChild(article)
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        ulPreview.appendChild(li)
        firstName.value = '';
        lastName.value = '';
        peopleCount.value = '';
        fromDate.value = '';
        daysCount.value = '';
        nextBtn.disabled = true;
        
    }

    editBtn.addEventListener('click', onEditClick)
    function onEditClick(){
        firstName.value = valuesArr[0];
        lastName.value = valuesArr[1];
        peopleCount.value = valuesArr[2];
        fromDate.value = valuesArr[3];
        daysCount.value = valuesArr[4];

        editBtn.remove();
        continueBtn.remove();
        li.remove();
        nextBtn.disabled = false;
    }

    continueBtn.addEventListener('click', onContinueClick);

    function onContinueClick(){
        editBtn.remove();
        continueBtn.remove();
        li.setAttribute('class', 'ticket-content');
        li.appendChild(confirmBtn);
        li.appendChild(cancelBtn);
        ulConfirm.appendChild(li);
    }

    cancelBtn.addEventListener('click', onCancelClick);
    function onCancelClick(){
        confirmBtn.remove();
        cancelBtn.remove();
        ulConfirm.removeChild(li);
        nextBtn.disabled = false;
    }

    confirmBtn.addEventListener('click', onConfirmClick);
    function onConfirmClick(){
        div.remove();
        const h1 = document.createElement('h1');
        h1.setAttribute('id', 'thank-you');
        h1.textContent = 'Thank you, have a nice day!'
        body.appendChild(h1);
        body.appendChild(backBtn);
    }
    backBtn.addEventListener('click', () => {
        location.reload();
    })
}




