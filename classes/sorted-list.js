class List {
    constructor() {
        this.arr = [];
        this.size = this.arr.length;
    }
    add(value) {
        this.arr.push(value)
        this.size = this.arr.length;
        this.arr.sort((a, b) =>  a - b )
    }

    remove(index){
        if (index > this.arr.length || index < 0){
            throw new Error('Invalid index')
        }
        this.arr.splice(index, 1);
        this.size = this.arr.length;
        this.arr.sort((a, b) =>  a - b )
    }

    get(index){
        if (index > this.arr.length || index < 0){
            throw new Error('Invalid index')
        }
        return this.arr[index]
    }
}
let list = new List();
list.add(5);

list.add(6);

list.add(7);
console.log(list.get(1));
list.remove(1);
 console.log(list.get(1)); 