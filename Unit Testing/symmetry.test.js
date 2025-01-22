import { isSymmetric } from "./symmetry.js";
import { expect } from "chai";

describe('Testing "isSymmetric" task', function () {

    it('returns true when length is odd', () => {

        const arr = [10,20,10];
        expect(isSymmetric(arr)).to.be.true;
    })
    it ('returns true with empty arr', () => {
        expect(isSymmetric([])).to.be.true
    })
    it('Should return false for array-like argument', () => {

        const data = "1221";
        expect(isSymmetric(data)).to.be.false;

    });
    it('Should return true if input arr is symmetric', () => {

        const arr = [10,20,20,10];
        expect(isSymmetric(arr)).to.be.true;
    });
    it('Should return false if input arr is not symmetric', () => {

        const arr = [10,20,20,11];
        expect(isSymmetric(arr)).to.be.false;
    });

    it('Should return false for non-array argument', () => {

        const data = 1221;
        expect(isSymmetric(data)).to.be.false;

    });

    it('returns false for !array input', () => {
        expect(isSymmetric('1')).to.be.false
        expect(isSymmetric({})).to.be.false
        expect(isSymmetric(undefined)).to.be.false
        expect(isSymmetric(false)).to.be.false
        expect(isSymmetric(true)).to.be.false
    })
})