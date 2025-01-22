import { rgbToHexColor } from "./rgbToHex.js";
import { expect } from "chai";

describe("Testing rgbToHex task.", function () {

    describe('testing red', () => {
        it('should return undefined with param out of range', () => {
            expect(rgbToHexColor(256, 10, 20)).to.be.undefined;
        })
        it('should return undefined with floating number as parameter.', () => {
            expect(rgbToHexColor(250.1, 25, 20)).to.be.undefined;
        })
        it('should return undefined with param as string', () => {
            expect(rgbToHexColor('256', 10, 20)).to.be.undefined;
        })
        it('should return undefined with param as arr', () => {
            expect(rgbToHexColor([], 10, 20)).to.be.undefined;
        })
        it('should return undefined with param as object', () => {
            expect(rgbToHexColor({}, 10, 20)).to.be.undefined;
        })
    })

    describe('testing blue', () => {
        it('should return undefined with param out of range', () => {
            expect(rgbToHexColor(255, 1000, 20)).to.be.undefined;
        })
        it('should return undefined with floating number as parameter.', () => {
            expect(rgbToHexColor(250, 25.1, 20)).to.be.undefined;
        })
        it('should return undefined with param as string', () => {
            expect(rgbToHexColor(10, '256', 20)).to.be.undefined;
        })
        it('should return undefined with param as arr', () => {
            expect(rgbToHexColor(10, [], 20)).to.be.undefined;
        })
        it('should return undefined with param as object', () => {
            expect(rgbToHexColor(10, {}, 20)).to.be.undefined;
        })
    })

    describe('testing with correct input', () => {
        it('should return hexadecimal format', () => {
            expect(rgbToHexColor(100, 62, 67)).to.equal('#643E43')
        })
    })
})
// it("Testing red with floating number, should return undefined ", () => {
//     expect(rgbToHexColor(1.23, 3, 10)).to.be.undefined;
// })
// it("Testing green with floating number, should return undefined ", () => {
//     expect(rgbToHexColor(23, 3.4, 10)).to.be.undefined;
// })
// it("Testing blue with floating number, should return undefined ", () => {
//     expect(rgbToHexColor(34, 3, 10.5)).to.be.undefined;
// })

// it("Should return undefined if any argument is out of range", () => {

//     expect(rgbToHexColor(266, 30, 40)).to.equal(undefined);
//     // expect(rgbToHexColor(25, 256, 40)).to.be.undefined;
//     // expect(rgbToHexColor(26, 25, 405)).to.be.undefined;
// })

// it("Should return hexadecimal format", () => {
//     expect(rgbToHexColor(20, 40, 50)).to.not.be.undefined;
// })

// it("Should return undefined", () => {
//     expect(rgbToHexColor(256, 3, 10.5)).to.be.undefined;
//     expect(rgbToHexColor(25, 300, 10)).to.be.undefined;
//     expect(rgbToHexColor(25, 3, 430)).to.be.undefined;
// })
// it("Should return undefined for string arguments", () => {
//     expect(rgbToHexColor('256', 3, 10.5)).to.be.undefined;
//     expect(rgbToHexColor(25, '300', 10)).to.be.undefined;
//     expect(rgbToHexColor(25, 3, '430')).to.be.undefined;
// })