function store (arr){

    let resultObj = {};

    for (let product of arr){

        let [name, price] = product.split(' : ')

        let firstLetter = name[0];

        if (!resultObj.hasOwnProperty(firstLetter)){
            resultObj[firstLetter] = {}
        }
        resultObj[firstLetter][name] = Number(price);
    }
    
    let sortedKeys = Object.keys(resultObj).sort((a, b) => a.localeCompare(b))
    
    // console.log(sortedKeys)
    for (let key of sortedKeys){
        console.log(key)
        let sortedProducts = Object.keys(resultObj[key]).sort((a,b) => a.localeCompare(b));
        for (let product of sortedProducts){
            console.log(`  ${product}: ${resultObj[key][product]}`)
        }
    }
}
store(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10',
 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])