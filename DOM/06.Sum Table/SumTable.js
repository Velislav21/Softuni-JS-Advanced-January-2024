function sumTable() {

    const prices = document.querySelectorAll('tr td:nth-of-type(2)');
    const total = document.getElementById('sum');

    const pricesArr = Array.from(prices)
    pricesArr.pop();

    const finalPrice = pricesArr.reduce((totalPrice, currPrice) =>

        totalPrice + Number(currPrice.textContent)
        , 0);
    total.textContent = finalPrice
}