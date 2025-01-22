class WineSelection {
    space
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {

        if (this.wines.length == this.space) {
            throw new Error('Not enough space in the cellar.');
        }
        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false
        });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    };
    payWineBottle(wineName, price) {
        let wine = this.wines.find(currentWine => currentWine.wineName == wineName);

        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        };
        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        };
        wine.paid = true;
        this.bill += Number(price);
        return `You bought a ${wineName} for a ${price}$.`
    }
    openBottle(wineName) {
        let wine = this.wines.find(currentWine => currentWine.wineName == wineName);

        if (!wine) {
            throw new Error(`The wine, you're looking for, is not found.`);
        };
        if (!wine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }
        const index = this.wines.indexOf(wine);
        this.wines.splice(index, 1);
        return `You drank a bottle of ${wineName}.`;
    };
    cellarRevision(wineType) {
        const resultArr = [];
        if (!wineType) {
            resultArr.push(`You have space for ${this.space - this.wines.length} bottles more.`);
            resultArr.push(`You paid ${this.bill}$ for the wine.`);

            let sorted = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName))

            sorted.forEach(wine => {

                wine.paid ?
                    resultArr.push(`${wine.wineName} > ${wine.wineType} - Has Paid.`) : // if true
                    resultArr.push(`${wine.wineName} > ${wine.wineType} - Not Paid.`) // if false;

            });
            return resultArr.join('\n');
        }
        const wine = this.wines.find(currentWine => currentWine.wineType == wineType);

        if (!wine){
           throw new Error(`There is no ${wineType} in the cellar.`) 
        }
        if (wine.paid){
            return `${wine.wineName} > ${wine.wineType} - Has Paid.`
        }else {
            return `${wine.wineName} > ${wine.wineType} - Not Paid.`
        }
    }
}
let selection = new WineSelection(2)

console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose'))
console.log(selection.cellarRevision('Rose'))