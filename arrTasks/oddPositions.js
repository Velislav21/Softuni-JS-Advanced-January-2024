function oddPositions(arr){

    let resultArr = arr.filter((num, i) => {
        if (i % 2 != 0){
            return 1
        }
    })
    return resultArr.map(num => num * 2).reverse().join(' ')
}
oddPositions([10, 15, 20, 25])