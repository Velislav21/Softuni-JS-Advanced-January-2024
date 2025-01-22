import { lottery } from "./lottery.js"
import { expect } from "chai"

describe('testing exam task', function () {

    describe('testing buyLotteryTicket prop', () => {

        it('should throw an error due to invalid input', () => {
            expect(() => lottery.buyLotteryTicket('str', 'str1', 'false')).to.throw('Invalid input!')
        })
        it('should throw an error due to invalid input', () => {
            expect(() => lottery.buyLotteryTicket(1, 'str1', 'false')).to.throw('Invalid input!')
        })
        it('should throw an error due to invalid input', () => {
            expect(() => lottery.buyLotteryTicket('str', 1, 'false')).to.throw('Invalid input!')
        })
        it('should throw an error due to invalid input', () => {
            expect(() => lottery.buyLotteryTicket('str', 1, true)).to.throw('Invalid input!')
        })
        it('should throw an error due to invalid input', () => {
            expect(() => lottery.buyLotteryTicket(5, 0, true)).to.throw('Invalid input!')
        })
        it('should throw an error due to invalid input', () => {
            expect(() => lottery.buyLotteryTicket(1, 5, false)).to.throw('Unable to buy lottery ticket!')
        })

        it('should return correct string', () => {
            expect(lottery.buyLotteryTicket(5, 1, true)).to.equal(`You bought 1 tickets for 5$.`)
        })
    })
    describe('testing checkTicket prop', () => {
        let ticketNumbers1 = [1, 2, 3, 4, 5, 6]
        let luckyNumbers1 = [1, 2, 3, 4, 5, 6]

        let ticketNumbers2 = [1, 2, 3, 4, 5, 6]
        let luckyNumbers2 = [1, 2, 33, 4, 5, 6]
        it('returns expected string', () => {
            expect(lottery.checkTicket(ticketNumbers1, luckyNumbers1)).to.equal("You win the JACKPOT!!!")
        })
        it('returns expected string', () => {
            expect(lottery.checkTicket(ticketNumbers2, luckyNumbers2)).to.equal("Congratulations you win, check your reward!")
        })

        it('throws an error due to invalid input', () => {
            expect(() => lottery.checkTicket({}, 1)).to.throw('Invalid input!')
        })
        it('throws an error due to invalid input', () => {
            expect(() => lottery.checkTicket(1, {})).to.throw('Invalid input!')
        })
        it('throws an error due to invalid input', () => {
            expect(() => lottery.checkTicket([1, 2, 3], [1, 1, 1, 1, 1, 1])).to.throw('Invalid input!')
        })
        it('throws an error due to invalid input', () => {
            expect(() => lottery.checkTicket([1, 1, 1, 1, 1, 1], [1, 2, 3])).to.throw('Invalid input!')
        })
        it('throws an error due to invalid input', () => {
            expect(() => lottery.checkTicket([1, 1, 1, "1", 1, 1], [1, 2, 3])).to.throw('Invalid input!')
        })
    });
    describe('testing secondChance prop', () => {
        let arr = [1, 2, 3, 4, 5, 6]
        it('returns you win message', () => {
            expect(lottery.secondChance(5, arr)).to.equal(`You win our second chance prize!`)
        })
        it('returns you lose message', () => {
            expect(lottery.secondChance(5, [1,2,3])).to.equal(`Sorry, your ticket didn't win!`)
        })
    })
})