function townPopulation(arr){

    let towns = {};

    for (let data of arr){

        let [town, population] = data.split(' <-> ');
        population = Number(population)
        if (town in towns == false){
            towns[town] = 0
        }
        towns[town] += population;
    }

    for (let town in towns){
        console.log(`${town} : ${towns[town]}`)
    }
}
townPopulation(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',
'Las Vegas <-> 1000000'])
