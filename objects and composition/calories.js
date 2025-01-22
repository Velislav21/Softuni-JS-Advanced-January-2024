function calorie(arr){


    let resultObj = {};

    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            let product = arr[i];
            if (!(product in resultObj)){
                resultObj[product] = Number(arr[i + 1])
            }
            
        }
    }
    console.log(resultObj)

}
calorie(['Potato', '93', 'Skyr', '63',

'Cucumber', '18', 'Milk', '42'])