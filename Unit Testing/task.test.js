import { solve } from "./task.js"
import { assert } from 'chai'

describe('testing task', () => {
    it('test', () => {

        let expectedSum = 150;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = 3;
        let endIndex = 300;

        let actualSum = solve(numbers, startIndex, endIndex);

        assert.equal(actualSum, expectedSum)
    })

    it('should calculate sum when startIndex is lower than 0', () => {
        let expectedSum = 60;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = -100;
        let endIndex = 2;

        let actualSum = solve(numbers, startIndex, endIndex);

        assert.equal(actualSum, expectedSum)
    })
})


