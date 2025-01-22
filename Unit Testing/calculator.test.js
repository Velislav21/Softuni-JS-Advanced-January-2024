import { createCalculator } from "./calculator.js";
import { expect } from "chai";

describe("testing calculator", function () {
    let calc = null;

    beforeEach(() => {
        calc = createCalculator();
    })

    it('returns 0 initial value', () => {
        expect(calc.get()).to.equal(0);
    })

    it('can add nums', () => {
        calc.add(3)
        expect(calc.get()).to.equal(3);
    })
    it('can subtract nums', () => {
        calc.subtract(3)
        expect(calc.get()).to.equal(-3);
    })

    it('can add and subtract nums', () => {
        calc.add(2);
        calc.subtract(1);
        expect(calc.get()).to.equal(1)
    })

    describe('testing adding with strings holding numbers', () => {

        it("can add with string", () => {
            calc.add("1")
            expect(calc.get()).to.equal(1)
        })
        it("can subtract with string", () => {
            calc.subtract("1")
            expect(calc.get()).to.equal(-1)
        })
    })
})