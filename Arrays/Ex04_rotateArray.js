function solve(input) {
    let n = +input[input.length - 1];
    let array = input.slice(0, input.length - 1);
if (array.length > n) {
    array.unshift(...array.splice(-n));
} else {
    i = 0;
    while (i < n) {
        array.unshift(array.splice(-1));
        i++;
    }
}
    return array.join(" ");
}

console.log(solve(
    ['1',
        '2',
        '3',
        '4',
        '2']

))