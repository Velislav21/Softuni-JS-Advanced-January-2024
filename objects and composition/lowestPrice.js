function lowestPrice (arr){
// todo
    let products = {}

    for (let line of arr){
        let [town, product, price] = line.split(' | ')
        console.log(town, product, price)
        price = Number(price);

        let productInfo = {town, price}
        // if (!(productInfo in products)){
            products[product] = productInfo
        // }
    }
    console.log(products)
}
lowestPrice(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10'])