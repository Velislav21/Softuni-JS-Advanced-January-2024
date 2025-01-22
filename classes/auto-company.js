function auto(input) {

    let resultObj = {};

    input.forEach((line) => {
        let [brand, model, qty] = line.split(' | ')
        qty = Number(qty)

        if (!resultObj[brand]) {
            resultObj[brand] = {}
        }

        if (!resultObj[brand].hasOwnProperty(model)){
            resultObj[brand][model] = 0;
        }
        resultObj[brand][model] += qty
    })
   
    for (let [brand, models] of Object.entries(resultObj)){
        console.log(brand)

        for (let model in models){
            console.log(`###${model} -> ${models[model]}`)
        }
    }
}
auto(['Audi | Q7 | 1000',

    'Audi | Q6 | 100',

    'BMW | X5 | 1000',

    'BMW | X6 | 100',

    'Citroen | C4 | 123',

    'Volga | GAZ-24 | 1000000',

    'Lada | Niva | 1000000',

    'Lada | Jigula | 1000000',

    'Citroen | C4 | 22',

    'Citroen | C5 | 10'])