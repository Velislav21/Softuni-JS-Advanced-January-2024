function solve() {

  let input = document.querySelector('textarea');
  input = JSON.parse(input.value);
  const tbody = document.querySelector('tbody');

  const generateBtn = document.querySelector('#exercise button')

  generateBtn.addEventListener('click', () => {

    input.forEach(item => {

      const newTr = document.createElement('tr');

      const newImageTd = document.createElement('td');
      const imgEl = document.createElement('img');
      imgEl.src = item.img
      newImageTd.appendChild(imgEl);

      const newNameTd = document.createElement('td');
      const newItemName = document.createElement('p');
      newItemName.textContent = item.name;
      newNameTd.appendChild(newItemName);

      const newPriceTd = document.createElement('td');
      const newPrice = document.createElement('p');
      newPrice.textContent = item.price;
      newPriceTd.appendChild(newPrice);

      const newDecFacTd = document.createElement('td');
      const newDecFactor = document.createElement('p');
      newDecFactor.textContent = item.decFactor;
      newDecFacTd.appendChild(newDecFactor);

      newTr.appendChild(newImageTd)
      newTr.appendChild(newNameTd)
      newTr.appendChild(newPriceTd)
      newTr.appendChild(newDecFacTd)

      tbody.appendChild(newTr)
    })
  })
}