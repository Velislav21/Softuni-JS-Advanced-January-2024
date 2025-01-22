class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }
    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        };

        if (this.items.length == this.capacity) {
            throw new Error('The inventory is already full.');
        }

        let item = this.items.find(item => item.itemName == itemName);

        if (!item) {
            this.items.push({
                itemName,
                quantity
            })
        } else {
            item.quantity += Number(quantity);
        }
        return `Added ${quantity} ${itemName}(s) to the inventory.`
    }
    sellItem(itemName, quantity) {

        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        };

        let item = this.items.find(item => item.itemName == itemName);

        if (!item) {
            throw new Error(`The item ${itemName} is not available in the inventory.`)
        }

        if (item.quantity < quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`)
        }
        item.quantity -= Number(quantity);

        if (item.quantity <= 0) {
            let index = this.items.indexOf(item);
            this.items.splice(index, 1);
            this.outOfStock.push(itemName);
        };
        return `Sold ${quantity} ${itemName}(s) from the inventory.`
    };
    restockItem(itemName, quantity) {

        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        };
        let item = this.items.find(item => item.itemName == itemName);

        item ?
            item.quantity += quantity :
            this.items.push({ itemName, quantity });

        let itemOutOfStock = this.outOfStock.find(item => item == itemName);

        if (itemOutOfStock) {
            let index = this.outOfStock.indexOf(itemOutOfStock);
            this.outOfStock.splice(index, 1);
        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }
    getInventorySummary() {
        let result = [];
        result.push('Current Inventory:');
        this.items.forEach(item => result.push(`${item.itemName}: ${item.quantity}`));

        if (this.outOfStock.length > 0){
            result.push(`Out of Stock: ${this.outOfStock.join(', ')}`)
        }
        return result.join('\n');

    }
}

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());



