function elementFromArr(arr, steps){

    let resultArr = [];

    for (let i = 0; i < arr.length; i+= steps){

        resultArr.push(arr[i])
    }
    return resultArr
}
elementFromArr(['dsa', 'asd', 'test', 'tset'], 2)