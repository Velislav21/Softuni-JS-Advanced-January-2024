window.addEventListener("load", solve);

function solve() {
  let values = [];
  const mainEl = document.getElementById('hero');
  const image = document.getElementById('back-img');
  const body = document.querySelector('.body');
  const inputs = {
    name: document.getElementById('snowman-name'),
    height: document.getElementById('snowman-height'),
    location: document.getElementById('location'),
    creator: document.getElementById('creator-name'),
    attribute: document.getElementById('special-attribute')
  }
  const snowmanPreview = document.querySelector('.snowman-preview');
  const snowList = document.querySelector('.snow-list');

  const addBtn = document.querySelector('.add-btn');

  const div = document.createElement('div');
  div.classList.add('btn-container');

  const li = document.createElement('li');
  li.classList.add('snowman-info');

  const nextBtn = document.createElement('button');
  nextBtn.classList.add('next-btn');
  nextBtn.textContent = 'Next';

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.textContent = 'Edit';

  const sendBtn = document.createElement('button');
  sendBtn.classList.add('send-btn');
  sendBtn.textContent = 'Send';

  const backBtn = document.createElement('button');
  backBtn.classList.add('back-btn');
  backBtn.textContent = 'Back';

  const article = document.createElement('article');

  const nameP = document.createElement('p');
  const heightP = document.createElement('p');
  const locationP = document.createElement('p');
  const creatorP = document.createElement('p');
  const attributeP = document.createElement('p');

  addBtn.addEventListener('click', onAddBtnClick);

  function onAddBtnClick(event) {
    event.preventDefault()
    if (
      inputs.name.value == '' ||
      inputs.height.value == '' ||
      inputs.location.value == '' ||
      inputs.creator.value == '' ||
      inputs.attribute.value == ''
    ) {
      return
    }
    values.push(inputs.name.value, inputs.height.value, inputs.location.value, inputs.creator.value, inputs.attribute.value);
    nameP.textContent = `Name: ${inputs.name.value}`;
    heightP.textContent = `Height: ${inputs.height.value}`;
    locationP.textContent = `Location: ${inputs.location.value}`;
    creatorP.textContent = `Creator: ${inputs.creator.value}`;
    attributeP.textContent = `Attribute: ${inputs.attribute.value}`;

    article.appendChild(nameP);
    article.appendChild(heightP);
    article.appendChild(locationP);
    article.appendChild(creatorP);
    article.appendChild(attributeP);

    div.appendChild(editBtn);
    div.appendChild(nextBtn);

    li.appendChild(article);
    li.appendChild(div);

    snowmanPreview.appendChild(li);
    addBtn.disabled = true;

    inputs.name.value = ''
    inputs.height.value = ''
    inputs.location.value = ''
    inputs.creator.value = ''
    inputs.attribute.value = ''
  }
  editBtn.addEventListener('click', onEditBtnClick);
  function onEditBtnClick() {
    inputs.name.value = values[0];
    inputs.height.value = values[1];
    inputs.location.value = values[2];
    inputs.creator.value = values[3];
    inputs.attribute.value = values[4];

    editBtn.remove();
    nextBtn.remove();
    div.remove();
    li.remove();
    addBtn.disabled = false;
  }

  nextBtn.addEventListener('click', onNextBtnClick);
  function onNextBtnClick(){

    editBtn.remove();
    nextBtn.remove();
    div.remove();
    li.remove();

    li.removeAttribute('class');
    li.classList.add('snowman-content')
    article.appendChild(sendBtn);

    snowList.appendChild(li);
  }

  sendBtn.addEventListener('click', onSendBtnClick);
  function onSendBtnClick(){

    mainEl.remove();
    image.hidden = false;
    body.appendChild(backBtn)
  }
  backBtn.addEventListener('click', onBackBtnClick);
  function onBackBtnClick(){

    location.reload();
  }
}
