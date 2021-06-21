function solve(input) {
    let sum = 0;
    let invSum = Number(0);
    let str = "";
    input.forEach(element => {
        let num = Number(element);
        sum += num;
        invSum += 1/ num;
        str += element;
    });
    return sum + "\n" + invSum + "\n" + str;
}

console.log(solve(
    [1, 2, 3]
))