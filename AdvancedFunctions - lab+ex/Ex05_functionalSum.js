function add(num1) {
    let res = num1;
    function calc(num2) {
        res += +num2;
        return calc;
    }
   calc.toString = (x) => x = res;
    return calc;
}

console.log("" + add(1)(6)(-3))
console.log("" + add(1))
