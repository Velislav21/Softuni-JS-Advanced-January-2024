import { lookupChar } from "./char-lookUp.js";
import { expect } from "chai";

describe('testing lookup-char', function () {

    
    it('returns undefined with !number as second parameter', () => {
        expect(lookupChar(2, 'somt')).to.be.undefined;
    });

    it('returns undefined with decimal index', () => {
        expect(lookupChar('text', 3.1)).to.be.undefined;
    });
    it('returns undefined with index as string', () => {
        expect(lookupChar('text', "0")).to.be.undefined;
    });
    it('returns undefined with index as string', () => {
        expect(lookupChar(4, 4)).to.be.undefined;
    });

    it('returns incorrect index error', () => {
        expect(lookupChar('test', 4)).to.equal('Incorrect index');
    });

    it('returns incorrect index error, due ot negative index', () => {
        expect(lookupChar('test', -4)).to.equal('Incorrect index');
    });

    it('returns incorrect index error, due ot empty string', () => {
        expect(lookupChar('', 0)).to.equal('Incorrect index');
    });

    it('works properly', () => {

        expect(lookupChar('test', 1)).to.equal('e');
    });
    it('works properly', () => {

        expect(lookupChar('Lp', 1)).to.equal('p');
    });
});