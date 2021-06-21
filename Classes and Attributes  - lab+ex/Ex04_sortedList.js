class List {
    constructor(list = []) {
        this.list = list.sort((a, b) => a - b);
        this.size = this.list.length;
    }

    add(num) {
        this.list.push(num);
        this.list.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Invalid index`);
        }
        this.list.splice(index, 1);
        this.size--;
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Invalid index`);
        }
        return this.list[index];
    }

}

let list = new List();
list.add(5);
list.add(3);

list.remove(0);
console.log(list.get(0));

