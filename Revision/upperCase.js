function upper(input) {

    let pattern = /[A-Za-z]+/g

    let words = input.match(pattern)

    let arr = words.map(word => word.toUpperCase())
    console.log(arr.join(', '))

}
upper('hello ')
function gcd(a, b) {

    let gcd = a % b;
    while (gcd !== 0) {
        a = b;
        b = gcd
        gcd = a % b

    }
    console.log(b)
}