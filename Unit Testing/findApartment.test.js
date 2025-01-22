import { findNewApartment } from "./findApartment.js";
import { expect } from "chai";

describe('testing find-new-apartment', function () {

    describe('testing isGoodLocation prop', () => {

        it('Should return not suitable for you string message', () => {
            expect(findNewApartment.isGoodLocation('pomorie', true)).to.equal("This location is not suitable for you.")
        })
        it('should return no public transport message', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.')
        })
        it('should return home tour message', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!')
        })

        it('should throw error', () => {
            expect(() => findNewApartment.isGoodLocation(1, 'false')).to.throw()
        })
        it('should throw error', () => {
            expect(() => findNewApartment.isGoodLocation('false', 1)).to.throw()
        })
    })

    describe('testing isLargeEnough prop', () => {
        let apartmentsArr = [40, 50, 60];

        it('should return valid apartments size', () => {
            expect(findNewApartment.isLargeEnough(apartmentsArr, 40)).to.equal('40, 50, 60');
        })
        it('should return invalid input', () => {
            expect(() =>findNewApartment.isLargeEnough('apartmentsArr', 40)).to.throw;
        })
        it('should return invalid input', () => {
            expect(() =>findNewApartment.isLargeEnough(apartmentsArr, '40')).to.throw;
        })
        it('should return invalid input', () => {
            expect(() =>findNewApartment.isLargeEnough([], '40')).to.throw;
        })
    })

    describe('testing isItAffordable prop', () => {

        it ('result with NOT ENOUGH money', () => {
            expect(findNewApartment.isItAffordable(1000, 900)).to.equal("You don't have enough money for this house!");
        })
        it ('result with ENOUGH money', () => {
            expect(findNewApartment.isItAffordable(900, 1000)).to.equal("You can afford this home!");
        })

        it('throws an error due to invalid inputs', () => {
            expect(() => findNewApartment.isItAffordable('1', 1)).to.throw("Invalid input!")
        })
        it('throws an error due to invalid inputs', () => {
            expect(() => findNewApartment.isItAffordable(1, '1')).to.throw("Invalid input!")
        })

        it('throws an error due to invalid inputs', () => {
            expect(() => findNewApartment.isItAffordable(0, 1000)).to.throw("Invalid input!")
        })
        it('throws an error due to invalid inputs', () => {
            expect(() => findNewApartment.isItAffordable(1000, 0)).to.throw("Invalid input!")
        })
        it('throws an error due to invalid inputs', () => {
            expect(() => findNewApartment.isItAffordable(-1, 1000)).to.throw("Invalid input!")
        })
        it('throws an error due to invalid inputs', () => {
            expect(() => findNewApartment.isItAffordable(1000, -1)).to.throw("Invalid input!")
        })
    })
})