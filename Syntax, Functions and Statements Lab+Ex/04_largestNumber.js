function solve(x, y, z) {
    let num1 = +x;
    let num2 = +y;
    let num3 = +z;

    let largestNum = findLargestNum(findLargestNum(num1, num2), num3);

    return (`The largest number is ${largestNum}.`);
    function findLargestNum(a, b) {
        if (a > b) {
            return a;
        }
        return b;
    }

}
console.log(solve(
    -3, -5, -22.5
))