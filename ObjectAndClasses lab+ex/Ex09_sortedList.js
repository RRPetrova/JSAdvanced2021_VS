function createSortedList() {
    let arr = [];

    function add(element) {
        arr.push(element);
        this.size++;

        return arr.sort((a, b) => {
            return a - b
        })
    }

    function remove(index) {
        if (index >= 0 && index <arr.length) {
            arr.splice(index, 1);
            this.size--;
        }
        return arr.sort((a, b) => {
            return a - b
        })

    }

    function get(index) {
        if (index >= 0 && index < arr.length) {
            return arr[index];
        }
    }
    return {
        size: 0,
        add,
        remove,
        get
    }

}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
