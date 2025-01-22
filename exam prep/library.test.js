import { library } from "./library.js";
import { expect } from "chai";

describe('Testing exam preparation task', function () {

    describe('testing calcPriceOfBook', () => {

        it('should reduce the price of the book', () => {
            expect(library.calcPriceOfBook('name', 1978)).to.equal('Price of name is 10.00');
        });

        it('should reduce the price of the book with year equal to 1980', () => {
            expect(library.calcPriceOfBook('name', 1980)).to.equal('Price of name is 10.00');
        });
        it('should have standard price of 20', () => {
            expect(library.calcPriceOfBook('name', 1981)).to.equal('Price of name is 20.00');
        });

        it('Throws and error due to invalid input name', () => {
            expect(() => library.calcPriceOfBook(1, 1)).throw('Invalid input')
        })
        it('Throws and error due to invalid year', () => {
            expect(() => library.calcPriceOfBook('name', 190.2)).throw('Invalid input')
        })
    })

    describe('testing findBook', () => {
        it('throws an error due to empty arr', () => {
            expect(() => library.findBook([], 'searchedBook')).to.throw('No books currently available')
        })

        it('finds the book in the arr', () => {

            let arr = ['bookName1', 'bookName2'];
            let searchedBook = arr[1];
            expect(library.findBook(arr, searchedBook)).to.equal('We found the book you want.')
        })
        it('Does not find the book in the arr', () => {

            let arr = ['bookName1', 'bookName2'];
            let searchedBook = 'pesho';
            expect(library.findBook(arr, searchedBook)).to.equal('The book you are looking for is not here!')
        })
    })

    describe('testing arrangeTheBooks', () => {

        it('throws an error due to incorrect input', () => {

            expect(() => library.arrangeTheBooks(1.1)).to.throw('Invalid input')
        })
        it('throws an error due to incorrect input', () => {

            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input')
        })

        it('has enough space', () => {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.")
        })
        it('not enough space', () => {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.")
        })
    })
})