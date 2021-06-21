function solve(input) {
    let result = "";
    let type = typeof (input);
    if (type === "number") {
        result = (Math.PI * Math.pow(input, 2)).toFixed(2);
    } else {
        result = "We can not calculate the circle area, because we receive a " + (`${type}`) +".";
    }
    return result;
}

console.log(solve(
    'name'
))