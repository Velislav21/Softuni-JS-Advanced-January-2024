import { motorcycleRider } from "./motorcycleRider.js";
import { expect } from "chai";

describe('testing exam task', function () {

    describe('testing license restriction property', () => {
        it('returns correct string with "AM"', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        })
        it('returns correct string with "A1"', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
        })
        it('returns correct string with "A2"', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.")
        })
        it('returns correct string with "A"', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.equal("No motorcycle restrictions, and the minimum age is 24.")
        })
        it('throws error due to invalid input', () => {
            expect(() => motorcycleRider.licenseRestriction('abab')).to.throw('Invalid Information!')
        })
    });
    describe('testing motorcycleShowroom property', () => {
        let inputArr = ["125", "250", "600"];
        it('correct result', () => {
            expect(motorcycleRider.motorcycleShowroom(inputArr, 600)).to.equal(`There are 3 available motorcycles matching your criteria!`)
        })

        it('throws an error due to invalid input', () => {
            expect(() => motorcycleRider.motorcycleShowroom({}, 600)).to.throw('Invalid Information!');
        })
        it('throws an error due to invalid input', () => {
            expect(() => motorcycleRider.motorcycleShowroom(["1", "2"], 'invalid')).to.throw('Invalid Information!');
        })
        it('throws an error due to invalid input', () => {
            expect(() => motorcycleRider.motorcycleShowroom([], 600)).to.throw('Invalid Information!');
        })
        it('throws an error due to invalid input', () => {
            expect(() => motorcycleRider.motorcycleShowroom(inputArr, 49)).to.throw('Invalid Information!');
        })
    })
    describe('testing property "otherSpendings"', () => {
        let eq = ["helmet", "helmet", "jacked"] // price = 700
        let cons = ["engine oil", "engine oil", "oil filter"] // price = 170

        it('returns correct data', () => {
            expect(motorcycleRider.otherSpendings(eq, cons, false)).to.equal(`You spend $870.00 for equipment and consumables!`)
        })
        it('returns correct data', () => {
            expect(motorcycleRider.otherSpendings(eq, cons, true)).to.equal(`You spend $783.00 for equipment and consumables with 10% discount!`)
        })

        it('throws an error due to invalid inputs', () => {
            expect(() => motorcycleRider.otherSpendings('', cons, false)).to.throw('Invalid Information!')
        })

        it('throws an error due to invalid inputs', () => {
            expect(() => motorcycleRider.otherSpendings(eq, '', false)).to.throw('Invalid Information!')
        })

        it('throws an error due to invalid inputs', () => {
            expect(() => motorcycleRider.otherSpendings(eq, cons, '')).to.throw('Invalid Information!')
        })
    })
})