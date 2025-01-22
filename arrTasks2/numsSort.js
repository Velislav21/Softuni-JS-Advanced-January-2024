function sortingNums(arr) {

    let smallestNum
    let biggestNum
    let resultArr = []
    for (let i = 0; arr.length; i++) {

        smallestNum = Math.min(...arr)
        let smallestNumIndex = arr.indexOf(smallestNum)
        arr.splice(smallestNumIndex, 1)

        biggestNum = Math.max(...arr)
        let biggestNumIndex = arr.indexOf(biggestNum)
        arr.splice(biggestNumIndex, 1)

        resultArr.push(smallestNum, biggestNum)
    }
    return resultArr
}
sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])