function solution() {
    // console.log(recipeObj['turkey'].protein - recipeObj['turkey'].carbohydrate)
    const recipeObj = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },

        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },

        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },

        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },

        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }
    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    function manager(input) {

        let [instruction, element, qty] = input.split(' ')
        qty = Number(qty)

        if (instruction == 'restock') {
            stock[element] += qty;
            return 'Success'
        } else if (instruction == 'prepare') {

            let recipe = recipeObj[element]

            for (const key in recipe) {

                if (recipe[key] * qty > stock[key]) {
                    return `Error: not enough ${key} in stock`
                }
            }
            for (const key in recipe) {
                stock[key] -= recipe[key] * qty
            }
            return 'Success'
        } else if (instruction == 'report') {

            const result = Object.entries(stock).map((kvp) => {

                return `${kvp[0]}=${kvp[1]}`

            }).join(' ')

            // let test = Object.entries(stock).map((kvp) => {
            //     return `${kvp[0]}=${kvp[1]}`
            // })

            // console.log(test.join(' '))

            return result
        }
    }
    return manager
}


let manager = solution();

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"))
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"))
console.log(manager("report"))
// console.log(manager("prepare lemonade 4"))
// console.log(manager("prepare lemonade 4"))
// console.log(manager("prepare lemonade 4"))
