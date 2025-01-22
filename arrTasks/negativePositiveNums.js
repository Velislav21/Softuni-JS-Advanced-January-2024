function negativePositiveNums(input) {

    let arr = [];

    input.forEach(a => {

        if (a >= 0){
            arr.push(a)
        }else {
            arr.unshift(a)
        }
    })
    console.log(arr)
    
}
negativePositiveNums([3, -2, 0, -1])