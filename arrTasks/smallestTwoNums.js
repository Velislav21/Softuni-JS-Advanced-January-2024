function smallestTwoNums(arr){

    let resultArr = [];

    while (resultArr.length < 2){

        let num = Math.min(...arr)
        let index = arr.indexOf(num);
        arr.splice(index, 1)
        resultArr.push(num)
        
    }
    console.log(resultArr.join(' '))
}
smallestTwoNums([30, 15, 50, 5])