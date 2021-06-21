function solve(input) {
    let array = [];
    array.push(input[0]);
    let biggest = +input[0];
    for (let i = 1; i < input.length; i++) {
        if (input[i] >= biggest) {
            array.push(input[i]);
            biggest = +input[i];
        }
    }
    return array.join("\n");
}
console.log(solve(
    [1, 
        3, 
        8, 
        4, 
        10, 
        12, 
        3, 
        2, 
        24]
         
))