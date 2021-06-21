function solve(input) {
    let step = +input[input.length - 1];
    let res = "";
    for (let i = 0; i < input.length - 1; i += step) {
        res += input[i] + "\n";
    }
    return res;
}

console.log(solve(
    ['5',
        '20',
        '31',
        '4',
        '20',
        '2']
))