import { sum } from "./numbersSum.js";
import { expect } from 'chai';

describe('testing task "Sum of Numbers"', function () {

    it('Should pass the test if function takes an array of numbers as argument', () => {

        const result = sum([10,20,30])

    })

    it('Should pass the test if function takes an array of numbers as argument and returns sum', () => {

        const expectedSum = 60;
        const actualSum = sum([10,20,30])

        expect(actualSum).to.equal(expectedSum)

    })
    
})