window.addEventListener('load', solve);

function solve() {
    let values = [];
    const inputs = {
        carModel: document.getElementById('car-model'),
        carYear: document.getElementById('car-year'),
        partName: document.getElementById('part-name'),
        partNumber: document.getElementById('part-number'),
        condition: document.getElementById('condition'),
    };
    const imageElement = document.getElementById('complete-img');
    const paragraph = document.getElementById('complete-text');
    
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNextBtnClick);
    
    const infoUl = document.querySelector('.info-list');
    const confirmUl = document.querySelector('.confirm-list');
    
    const li = document.createElement('li');
    li.classList.add('part-content');
    
    const article = document.createElement('article');
    const carModelPara = document.createElement('p');
    const carYearPara = document.createElement('p');
    const partNamePara = document.createElement('p');
    const partNumberPara = document.createElement('p');
    const conditionPara = document.createElement('p');
    
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
    
    function onNextBtnClick(event){
            event.preventDefault();
            if (    
                inputs.carModel.value == ''||
                    
                inputs.carYear.value == ''||
                inputs.carYear.value < 1980 ||
                inputs.carYear.value > 2030 ||
                inputs.partName.value == ''||
                inputs.partNumber.value == ''||
                inputs.condition.value == ''
                    
                ){      
                            return;
                }
                        
        values.push(
                inputs.carModel.value,
                inputs.carYear.value,
                inputs.partName.value,
                inputs.partNumber.value,
                inputs.condition.value,
                )
                        
                carModelPara.textContent = `Car Model: ${inputs.carModel.value}`;
                carYearPara.textContent = `Car Year: ${inputs.carYear.value}`;
                partNamePara.textContent = `Part Name: ${inputs.partName.value}`;
                partNumberPara.textContent = `Part Number: ${inputs.partNumber.value}`;
                conditionPara.textContent = `Condition: ${inputs.condition.value}`;
                        
                article.appendChild(carModelPara);
                article.appendChild(carYearPara);
                article.appendChild(partNamePara);
                article.appendChild(partNumberPara);
                article.appendChild(conditionPara);
                                
                li.appendChild(article);
                li.appendChild(editBtn);
                li.appendChild(continueBtn);
                                
                infoUl.appendChild(li);
                inputs.carModel.value = '';
                inputs.carYear.value = '';
                inputs.partName.value = '';
                inputs.partNumber.value = '';
                inputs.condition.value = '';
                                
                imageElement.visibility = 'hidden';
                paragraph.textContent = '';
                nextBtn.disabled = true;
    };
    editBtn.addEventListener('click', onEditBtnClick);

    function onEditBtnClick(){
        inputs.carModel.value = values[0];
        inputs.carYear.value = values[1];
        inputs.partName.value = values[2];
        inputs.partNumber.value = values[3];
        inputs.condition.value = values[4];

        // editBtn.remove();
        // continueBtn.remove();
        infoUl.innerHTML = '';

        nextBtn.disabled = false;
    };
    continueBtn.addEventListener('click', onContinueBtnClick);

    function onContinueBtnClick() {
        editBtn.remove();
        continueBtn.remove();

        li.appendChild(confirmBtn)
        li.appendChild(cancelBtn)
        confirmUl.appendChild(li);
    };

    confirmBtn.addEventListener('click', onConfirmBtnClick);
    function onConfirmBtnClick() {

        confirmUl.innerHTML = '';

        nextBtn.disabled = false;

        imageElement.visibility = 'visible';
        paragraph.textContent = 'Part is Ordered!';
    };
    cancelBtn.addEventListener('click', onCancelBtnClick);
    function onCancelBtnClick() {
        confirmUl.innerHTML = '';
        nextBtn.disabled = false;
    }
}