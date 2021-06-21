function solve(input) {
    let num = input + "";
    let number = +num;
    let equals = true;
    let first = num.charAt(0);
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        if (first != num.charAt(i)) {
            equals = false;
equals = false;
        }
        sum += Number(num.charAt(i));
    }
    return equals + "\n" + sum;

}

console.log(solve(
    1234
))