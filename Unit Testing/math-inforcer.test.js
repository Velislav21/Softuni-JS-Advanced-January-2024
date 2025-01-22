import { mathEnforcer } from "./math-inforcer.js";
import { expect } from "chai";

describe('testing math enforcer', function(){

    describe('Testing addFive function', () => {
    
        it('can add numbers', () => {
            
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('can add floating numbers', () => {
            
            expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01);
        });
        it('can add negative numbers', () => {
            
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('returns undefined with string', () => {
    
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });
    })

    describe('Testing subtractTen function', () => {
    
        it('can subtract numbers', () => {
            
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
        });
        it('can subtract floating numbers', () => {
            
            expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5, 0.01);
        });
        it('can subtract negative numbers', () => {
            
            expect(mathEnforcer.subtractTen(-5)).to.be.closeTo(-15, 0.01);
        });
    
        it('returns undefined with string', () => {
    
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        });
    });
    describe('Testing sum function', () => {

        it('sums 2 numbers', () => {
            expect(mathEnforcer.sum(10, 10)).to.equal(20);
        });
        it('sums 2 floating numbers', () => {
            expect(mathEnforcer.sum(10.1, 10.2)).to.be.closeTo(20.3, 0.01);
        });
        it('returns undefined with first argument string', () => {
            expect(mathEnforcer.sum('str', 2)).to.be.undefined;
        });
        it('returns undefined with second argument string', () => {
            expect(mathEnforcer.sum(2, 'str')).to.be.undefined;
        });
    });
});