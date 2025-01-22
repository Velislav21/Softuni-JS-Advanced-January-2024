function sumFL (arr){

    let mappedArr = arr.map(Number)
    let result = mappedArr[0] + mappedArr[mappedArr.length - 1];
    return result
}
sumFL(['20', '30', '40'])