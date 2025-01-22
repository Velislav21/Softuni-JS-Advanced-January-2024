window.addEventListener("load", solve);

function solve() {
    let snowmanNameRef = document.getElementById("snowman-name");
    let heightRef = document.getElementById("snowman-height");
    let locationRef = document.getElementById("location");
    let creatorRef = document.getElementById("creator-name");
    let specialAttributeRef = document.getElementById("special-attribute");

    let addBtn = document.getElementsByClassName("add-btn")[0];
    addBtn.addEventListener('click', add);

    //1. GETTING THE INFORMATION FROM THE FORM:

    function add(event) {
        event.preventDefault();

        let snowmanNameValue = snowmanNameRef.value;
        let heightValue = heightRef.value;
        let locationValue = locationRef.value;
        let creatorValue = creatorRef.value;
        let specialAttributeValue = specialAttributeRef.value;

        if (snowmanNameValue != '' && heightValue != '' && locationValue != '' && creatorValue != '' && specialAttributeValue != '') {
            let previewSectionUl = document.getElementsByClassName("snowman-preview")[0];

            let li = document.createElement('li');
            li.className = "snowman-info";

            let article = document.createElement('article');

            let pName = document.createElement('p');
            pName.textContent = `Name: ${snowmanNameValue}`;
            article.appendChild(pName);

            let pHeight = document.createElement('p');
            pHeight.textContent = `Height: ${heightValue}`;
            article.appendChild(pHeight);

            let pLocation = document.createElement('p');
            pLocation.textContent = `Location: ${locationValue}`;
            article.appendChild(pLocation);

            let pCreator = document.createElement('p');
            pCreator.textContent = `Creator: ${creatorValue}`;
            article.appendChild(pCreator);

            let pAttribute = document.createElement('p');
            pAttribute.textContent = `Attribute: ${specialAttributeValue}`;
            article.appendChild(pAttribute);

            li.appendChild(article);

            let divWithBtns = document.createElement('div');
            divWithBtns.className = "btn-container";

            let editBtn = document.createElement('button');
            editBtn.className = "edit-btn";
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', edit);
            divWithBtns.appendChild(editBtn);

            let nextBtn = document.createElement('button');
            nextBtn.className = "next-btn";
            nextBtn.textContent = 'Next';
            nextBtn.addEventListener('click', next);
            divWithBtns.appendChild(nextBtn);

            li.appendChild(divWithBtns);

            previewSectionUl.appendChild(li);

            snowmanNameRef.value = '';
            heightRef.value = '';
            locationRef.value = '';
            creatorRef.value = '';
            specialAttributeRef.value = '';

            addBtn.disabled = true;

            //2. EDIT SNOWMAN:

            function edit(event) {
                editBtn.remove();
                nextBtn.remove()
                li.remove();

                snowmanNameRef.value = snowmanNameValue;
                heightRef.value = heightValue;
                locationRef.value = locationValue;
                creatorRef.value = creatorValue;
                specialAttributeRef.value = specialAttributeValue;

                addBtn.disabled = false;
            }

            //3. NEXT:

            function next(event) {
                let snowListUl = document.getElementsByClassName("snow-list")[0];
                li.remove();

                let newLi = document.createElement('li');
                newLi.className = "snowman-content";
                newLi.appendChild(article);


                let sendBtn = document.createElement('button');
                sendBtn.className = "send-btn";
                sendBtn.textContent = 'Send';
                sendBtn.addEventListener('click', send);
                article.appendChild(sendBtn);

                snowListUl.appendChild(newLi);
            }

            //4. SEND:

            function send(event) {
                let main = document.getElementById("hero");
                let body = document.getElementsByClassName("body")[0];
                let img = document.getElementById("back-img");
                main.remove();

                let backBtn = document.createElement('button');
                backBtn.className = "back-btn";
                backBtn.textContent = 'Back';
                backBtn.addEventListener('click', back);
                body.appendChild(backBtn);

                img.hidden = false;

            }
        }
    }


    //5. BACK:
    function back() {
        location.reload();
    }


}