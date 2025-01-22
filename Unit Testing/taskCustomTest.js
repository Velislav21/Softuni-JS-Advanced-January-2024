const solve = require(`./task`);

function test() {
    let expectedSum = 150;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;

    let actualSum = solve(numbers, startIndex, endIndex);

    if(actualSum == expectedSum){
        console.log('correct');
    }else {
        console.log('error')
    }
}
test()