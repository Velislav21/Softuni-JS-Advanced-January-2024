window.addEventListener('load', solve);
function solve() {
    let storeValues = []
 
    let [time, date, place, event, contacts] = Array.from(document.querySelectorAll('form div input'))
 
    let eventBtn = document.getElementById('add-btn')
 
    let ulChekList = document.getElementById('check-list')
    let li = document.createElement('li')
    li.classList.add('event-content')
 
    let article = document.createElement('article')
 
    // 4 ps
    let pTimeDate = document.createElement('p')
    let placeP = document.createElement('p')
    let pEvent = document.createElement('p')
    let pContact = document.createElement('p')
 
 
    //buttons edit and continiue
    let editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Edit'
 
    let continiueBtn = document.createElement('button')
    continiueBtn.classList.add('continue-btn')
    continiueBtn.textContent = 'Continue'
 
    // upcoming section
    let upcomingSection = document.querySelector('#upcoming-list')
 
    let moveBtn = document.createElement('button')
    moveBtn.classList.add('finished-btn')
    moveBtn.textContent = 'Move to Finished'
 
    // finished list
    let finish = document.querySelector('#finished-list')
 
    // clear btn
    let clearBtn = document.getElementById('clear')
 
    eventBtn.addEventListener('click', () => {
 
        if (time.value !== '' && date.value !== '' && place.value !== '' && event.value !== '' && contacts.value !== '') {
            storeValues.push(time.value, date.value, place.value, event.value, contacts.value)
 
            pTimeDate.textContent = 'Begins: ' + date.value + ' at: ' + time.value
            placeP.textContent = 'In: ' + place.value
            pEvent.textContent = 'Event: ' + event.value
            pContact.textContent = 'Contact: ' + contacts.value
 
            // append Section
            article.appendChild(pTimeDate)
            article.appendChild(placeP)
            article.appendChild(pEvent)
            article.appendChild(pContact)
            li.appendChild(article)
            li.appendChild(editBtn)
            li.appendChild(continiueBtn)
            ulChekList.appendChild(li)
 
            eventBtn.disabled = true
            
            storeValues.forEach(el => el.value = '')
        }
    })
 
    editBtn.addEventListener('click', () => {
 
        time.value = storeValues[0]
        date.value = storeValues[1]
        place.value = storeValues[2]
        event.value = storeValues[3]
        contacts.value = storeValues[4]
        //can test without removing buttons
        editBtn.remove()
        continiueBtn.remove()
        eventBtn.disabled = false
 
        li.remove()
 
    })
 
    continiueBtn.addEventListener('click', () => {
        debugger
        ulChekList.removeChild(li)
 
        editBtn.remove()
        continiueBtn.remove()
        li.appendChild(moveBtn)
        upcomingSection.appendChild(li)
        eventBtn.disabled = false
    })
 
    moveBtn.addEventListener('click', () => {
        moveBtn.remove()
        upcomingSection.removeChild(li)
 
        finish.appendChild(li)
    })
 
    clearBtn.addEventListener('click', () => {
        finish.removeChild(li)
    })
}
// function solve() {

//     const form = Array.from(document.querySelector('form').querySelectorAll('input'));
//     const ul = document.getElementById('check-list');
//     const addEventButton = form.pop();

//     let time = form[0].value;
//     let date = form[1].value;
//     let place = form[2].value;
//     let ev = form[3].value;
//     let contact = form[4].value;

//     const editBtn = document.createElement('button');
//     editBtn.classList.add("edit-btn");
//     editBtn.textContent = 'Edit';
    
//     const continueBtn = document.createElement('button');
//     continueBtn.classList.add("continue-btn");
//     continueBtn.textContent = 'Continue';

//     const li = document.createElement('li');
//     li.classList.add("event-content");

//     const article = document.createElement('article');

//     const beginsP = document.createElement('p');
//     const placeP = document.createElement('p');
//     const eventP = document.createElement('p');
//     const contactP = document.createElement('p');

//     beginsP.textContent = `Begins: ${date} at: ${time}`
//     placeP.textContent = `In: ${place}`;
//     eventP.textContent = `Event: ${ev}`;
//     contactP.textContent = `Contact: ${contact}`;

//     article.appendChild(beginsP);
//     article.appendChild(placeP);
//     article.appendChild(eventP);

//     addEventButton.addEventListener('click', (e) => {

//         if (time !== '' && date !== '' && place !== '' && ev !== '' && contact !== '') {

//             article.appendChild(contactP);

//             li.appendChild(article);
//             li.appendChild(editBtn);
//             li.appendChild(continueBtn);
//             ul.appendChild(li);
//             e.target.disabled = true;

//             form.forEach(el => el.value = '');
//         }
//     })
//     editBtn.addEventListener('click', (e) => {
//         form[0].value = time;
//         form[1].value = date;
//         form[2].value = place;
//         form[3].value = ev;
//         form[4].value = contact;
//         li.remove()
//         e.target.disabled = true;
//         continueBtn.disabled = true;
//         addEventButton.disabled = false;
//     })
// }




