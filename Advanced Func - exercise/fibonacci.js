function getFibonator() {

    let [a, b] = [0, 1];
    
    // 1     1     2    3    5     8      13

    return () => {
        let c = a + b;
        a = b;
        b = c;

        return a
    }
}
getFibonator()

let fib = getFibonator();

console.log(fib()); // 1 ==> (a)0 + (b)1 = (c)1;  c = 1

console.log(fib()); // 1 ==> (a)1 + b(0) = (c)1;

console.log(fib()); // 2 ==> (a)1 + (b)1 = c(2)

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib()); // 13