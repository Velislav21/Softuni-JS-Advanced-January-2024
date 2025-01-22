function subset(arr){

    let biggestNum = arr[0];

    let resultArr = [];

    for (let num of arr){
        if (num >= biggestNum){
            biggestNum = num
            resultArr.push(num)
        }
    }
    return resultArr
}
subset([20, 3, 2, 15,6, 1])