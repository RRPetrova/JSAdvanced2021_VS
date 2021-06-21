class Hex {
    constructor(value) {
        this.value = Number(value);
    }

    valueOf() {
        return parseInt(this.value);
    }

    plus(number) {
        return new Hex(this.value + number)
    }


    minus(number) {
        return new Hex(this.value - number);
    }

    parse(string) {
        return parseInt(string, 16);
    }

    toString() {
       return "0x" + this.value.toString(16).toUpperCase(); 
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;

console.log(FF.valueOf());
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
