function sortArr(array, order) {

    let result;
    order === 'asc' ?
        result = array.sort((a, b) => a - b) :   // if true;
        result = array.sort((a, b) => b - a)    // if not true;
    console.log(result)
    return result

}
sortArr([3, 1, 2, 10], 'asc')