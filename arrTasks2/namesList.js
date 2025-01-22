function names(arr){

    let order = 1;
    let sorted = arr.sort((a, b) => a.localeCompare(b))
    sorted.forEach(element => {
        console.log(`${order}.${element}`)
        order++
    });
}
names(["John",

"Bob",

"Christina",

"Ema"])