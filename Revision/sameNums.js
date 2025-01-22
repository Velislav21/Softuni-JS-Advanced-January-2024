function nums(num) {

    let numAsStr = num.toString();

    let arr = numAsStr.split('').map(Number)
    let sum = 0;
    let sameNums = true;
    let firstChar = arr[0]
    arr.forEach(number => sum += number);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== firstChar) {
            sameNums = false;
        }
    }
    console.log(sameNums)
    console.log(sum)
}
nums(7777)