import { planYourTrip } from "./planYourTrip.js";
import { expect } from "chai";

describe('works', function () {
    describe('testing choosingDestination prop', () => {

        it('throws an error', () => {
            expect(() => planYourTrip.choosingDestination('pomorie', 'smmer', 2023)).to.throw('Invalid Year!')
        })
        it('throws an error', () => {
            expect(() => planYourTrip.choosingDestination('Ski resort', 'smmer', 2024)).to.throw('This destination is not what you are looking for.')
        })

        it('returns proper string', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.')
        })
        it('returns proper string', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'summer', 2024)).to.equal('Consider visiting during the Winter for the best experience at the Ski Resort.')
        })
    });
    describe('testing exploreOptions prop', () => {
        let arr = ['Skiing,', 'Snowboarding', 'Winter Hiking'];
        it('returns correct activities', () => {

            expect(planYourTrip.exploreOptions(arr, 0)).to.equal('Snowboarding, Winter Hiking')
        })
        it('throws an error due ot invalid input', () => {
            expect(() => planYourTrip.exploreOptions(arr, -1)).to.throw('Invalid Information!')
        })
        it('throws an error due ot invalid input', () => {
            expect(() => planYourTrip.exploreOptions(arr, 4)).to.throw('Invalid Information!')
        })
        it('throws an error due ot invalid input', () => {
            expect(() => planYourTrip.exploreOptions({}, 4)).to.throw('Invalid Information!')
        })
        it('throws an error due ot invalid input', () => {
            expect(() => planYourTrip.exploreOptions(arr, 4.5)).to.throw('Invalid Information!')
        })
        it('throws an error due ot invalid input', () => {
            expect(() => planYourTrip.exploreOptions(arr, 'string')).to.throw('Invalid Information!')
        })
    })
    describe('testing estimateExpenses', () => {
        it('returns proper message', () => {
            expect(planYourTrip.estimateExpenses(100, 10)).to.equal('The estimated cost for the trip is $1000.00, plan accordingly.')
        })
        it('returns proper message', () => {
            expect(planYourTrip.estimateExpenses(10, 10)).to.equal('The trip is budget-friendly, estimated cost is $100.00.')
        })
        it('throws an error due to invalid params', () => {
            expect(() => planYourTrip.estimateExpenses(0, 10)).to.throw('Invalid Information!')
        })
        it('throws an error due to invalid params', () => {
            expect(() => planYourTrip.estimateExpenses(-10, 10)).to.throw('Invalid Information!')
        })
        it('throws an error due to invalid params', () => {
            expect(() => planYourTrip.estimateExpenses('10', 10)).to.throw('Invalid Information!')
        })
        it('throws an error due to invalid params', () => {
            expect(() => planYourTrip.estimateExpenses(undefined, 10)).to.throw('Invalid Information!')
        })
        it('throws an error due to invalid params', () => {
            expect(() => planYourTrip.estimateExpenses(10, undefined)).to.throw('Invalid Information!')
        })
    })
})