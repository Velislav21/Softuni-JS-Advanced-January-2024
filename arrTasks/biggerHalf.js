function biggerHalf(arr) {

    let elCount = Math.ceil(arr.length / 2)

    let sortedArr = arr.sort((a, b) => a - b);


    if ((arr.length / 2) % 2 == 0) {

        return sortedArr.slice(elCount)
    } else {
        return sortedArr.slice(elCount - 1)
    }

}
biggerHalf([4, 7, 2, 5])