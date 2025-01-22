window.addEventListener('load', solution);

function solution() {
  
  const inputElements = Array.from(document.getElementById('form').querySelectorAll('input'));
  const labelElements = Array.from(document.getElementById('form').querySelectorAll('label'));
  const preview = document.getElementById('infoPreview');
  inputElements.pop();
  const [submitBtn, editBtn, continueBtn] = document.querySelectorAll('[type="button"]');
  const mainDiv = document.getElementById('block');

  
  submitBtn.addEventListener('click', (event) => {

    const nameElement = inputElements[0];
    const emailElement = inputElements[1];
    if (nameElement.value && emailElement.value !== ''){

      inputElements.forEach((element, i) => {
        
        const liElement = document.createElement('li');
        liElement.textContent = `${labelElements[i].textContent} ${element.value}`;
        preview.appendChild(liElement);
        
        element.value = '';
        
        event.target.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;
      })
    }
  })

  editBtn.addEventListener('click', (event) => {

    const liElements = Array.from(preview.querySelectorAll('li'))
    liElements.forEach((li, i) => {

      const value = li.textContent.split(': ')[1]
      inputElements[i].value = value;
      li.remove()

      submitBtn.disabled = false;
      event.target.disabled = true;
      continueBtn.disabled = true;
    })
  })

  continueBtn.addEventListener('click', () => {

    mainDiv.innerHTML = '';

    const h3Element = document.createElement('h3');
    h3Element.textContent = `Thank you for your reservation!`
    mainDiv.appendChild(h3Element)
  })
}
