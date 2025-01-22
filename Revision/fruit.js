function fruit(product, weight, pricePerKg){

    let kg = weight / 1000;

    console.log(`I need $${(kg * pricePerKg).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${product}.`)
}
fruit('orange', 2500, 1.80)