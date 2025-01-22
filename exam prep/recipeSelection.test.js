import { recipeSelection } from "./recipeSelection.js";
import { expect } from "chai";

describe('testing exam prep task', function () {

    describe('testing isTypeSuitable prop', () => {

        it('It returns correct string', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal("This recipe is not suitable for vegetarians")
        })
        it('It returns correct string', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal("This recipe is not suitable for vegans")
        })
        it('It returns correct string', () => {
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal("This recipe is not suitable for vegans")
        })
        it('It returns correct string', () => {
            expect(recipeSelection.isTypeSuitable('Dairy', 'Not-vegan')).to.equal("This recipe is suitable for your dietary restriction")
        })
        it('It returns correct string', () => {
            expect(recipeSelection.isTypeSuitable('Fruit', 'Carnivore')).to.equal("This recipe is suitable for your dietary restriction")
        })
        it('It throws an error due to invalid input', () => {
            expect(() => recipeSelection.isTypeSuitable(12, 'Carnivore')).to.throw('Invalid input')
        })
        it('It throws an error due to invalid input', () => {
            expect(() => recipeSelection.isTypeSuitable('string', 12)).to.throw('Invalid input')
        })
    })
    describe('testing isItAffordable prop', () => {
        it('calculates correctly', () => {
            expect(recipeSelection.isItAffordable(100, 90)).to.equal("You don't have enough budget to afford this recipe");
        })
        it('calculates correctly', () => {
            expect(recipeSelection.isItAffordable(90, 100)).to.equal("Recipe ingredients bought. You have 10$ left");
        })
        it('throws an error due to invalid input', () => {
            expect(() => recipeSelection.isItAffordable('string', 12)).to.throw();
        })
        it('throws an error due to invalid input', () => {
            expect(() => recipeSelection.isItAffordable(12, 'string')).to.throw();
        })
    });
    describe('testing recipesByCategory prop', () => {
        it('throws an error due to invalid input', () => {
            expect(() => recipeSelection.getRecipesByCategory('string', [])).to.throw();
        })
        it('throws an error due to invalid input', () => {
            expect(() => recipeSelection.getRecipesByCategory([{ title: 'Something', category: 'Bulgarian' }, { title: 'Something2', category: 'Asian' }], 1)).to.throw();
        })
        it('should return an array of recipe titles for the given category', () => {
            const recipes = [
                { title: "Pasta Carbonara", category: "Italian" },
                { title: "Spicy Tofu Stir-Fry", category: "Asian" },
                { title: "Classic Caesar Salad", category: "Salads" },
                { title: "Chocolate Chip Cookies", category: "Desserts" }
            ];
            expect(recipeSelection.getRecipesByCategory(recipes, 'Italian')).to.deep.equal(['Pasta Carbonara']);
            expect(recipeSelection.getRecipesByCategory(recipes, 'Asian')).to.deep.equal(['Spicy Tofu Stir-Fry']);
            expect(recipeSelection.getRecipesByCategory(recipes, 'Salads')).to.deep.equal(['Classic Caesar Salad']);
            expect(recipeSelection.getRecipesByCategory(recipes, 'Desserts')).to.deep.equal(['Chocolate Chip Cookies']);
        })
    })
})