function solve(x, y, operator) {
    let res = 0;
    switch (operator) {
        case "+":
            res = x + y;
            break;
        case "-":
            res = x - y;
            break;
        case "/":
            res = x / y;
            break;
        case "*":
            res = x * y;
            break;
        case "%":
            res = x % y;
            break;
        case "**":
            res = x ** y;
            break;
    }
    return res;
}
console.log(solve(
    15, 2, '**'
))