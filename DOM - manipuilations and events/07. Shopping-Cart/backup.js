function solve() {
    const addButtons = document.querySelectorAll('.product .product-add');
    const textArea = document.querySelector('.shopping-cart textarea');
    const checkOutBtn = document.querySelector('.checkout');
    
    const itemsList = [];
    let totalPrice = 0;
 
    for (let button of addButtons){
       button.addEventListener('click', (event) => {
          const currentDiv = event.target.parentNode.parentNode;
          const price = currentDiv.querySelector('.product-line-price').textContent;
          const name = currentDiv.querySelector('.product-title').textContent;
 
          // price = Number(price);
          // totalPrice += price;
 
          textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
 
          // if (!itemsList.includes(name)){
          //    itemsList.push(name)
          // };
       });
    };
    // checkOutBtn.addEventListener('click', () => {
    //    textArea.value += `You bought ${itemsList.join(', ')} for ${totalPrice.toFixed(2)}.\n`
    // })
 }