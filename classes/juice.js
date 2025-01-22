function juice(input) {

    let juices = {};
    let bottles = new Map();

    input.forEach(line => {
        let [juice, qty] = line.split(' => ');
        qty = Number(qty)

        if (!juices[juice]) {
            juices[juice] = 0;
        }
        juices[juice] += qty;
    })
    for (let [juice, qty] of Object.entries(juices)) {
        let bottleCounter = Math.floor(qty / 1000);
        
        if (bottleCounter > 0) {

            if (!bottles.has(juice)) {
                bottles.set(juice, bottleCounter)
            }
        }
    }
    console.log(juices)
  Array.from(bottles).forEach(([juice, bottles]) => console.log(`${juice} => ${bottles}`));
}   
juice(['Kiwi => 234',

'Pear => 2345',

'Watermelon => 3456',

'Kiwi => 4567',

'Pear => 5678',

'Watermelon => 6789'])