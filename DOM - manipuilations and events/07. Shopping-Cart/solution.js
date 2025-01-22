function solve() {
   const addButtons = document.querySelectorAll('.product .product-add');
   const textArea = document.querySelector('.shopping-cart textarea');
   const checkOutBtn = document.querySelector('.checkout');

   const result = [];
   let totalPrice = 0;

   for (let button of addButtons) {
      button.addEventListener('click', (e) => {
         const currentDiv = e.target.parentNode.parentNode;
         const price = currentDiv.querySelector('.product-line-price').textContent;
         const name = currentDiv.querySelector('.product-title').textContent;

         totalPrice += Number(price)
         textArea.value += `Added ${name} for ${Number(price).toFixed(2)} to the cart.\n`

         if (!result.includes(name)) {
            result.push(name)
         };
      });
   };
   checkOutBtn.addEventListener('click', () => {
      textArea.value += `You bought ${result.join(', ')} for ${totalPrice.toFixed(2)}.\n`;
      for (let button of addButtons){
         button.removeEventListener('click', onClickFunc())
      }
   })
}