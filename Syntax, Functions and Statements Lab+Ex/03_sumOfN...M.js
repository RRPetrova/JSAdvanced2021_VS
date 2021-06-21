function solve(x, y) {
    let num1 = Number(x);
    let num2 = Number(y);
    let res = 0;
    for (let i = num1; i <= num2; i++) {
        res += i;
    }
    return res;
}
console.log(solve(
    '1', '2'
))