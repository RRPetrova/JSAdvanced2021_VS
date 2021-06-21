function solve() {
    let string = "";
    return {
        append,
        removeEnd,
        removeStart,
        print
    }
    function append(string2) {
        string += string2;
    }
    function removeStart(n) {
       
        string = string.slice(n);
    }
    function removeEnd(n) {
        string = string.slice(0,-n);
    }
    function print() {
        console.log(string);
    }
}


let firstZeroTest = solve();

solve().append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
