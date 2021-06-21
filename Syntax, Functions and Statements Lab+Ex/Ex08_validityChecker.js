function solve(a, b, c, d) {
    let x1 = +a;
    let y1 = +b;
    let x2 = +c;
    let y2 = +d;
    let finalResult = "";

    finalResult = result(x1, y1, 0, 0) + "\n" + result(x2, y2, 0, 0) + "\n" +  result(x1, y1, x2, y2);

    function result(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow((x1-x2),2)+ Math.pow((y1-y2), 2));
        let variable = Number.isInteger(distance) ? 'valid' : 'invalid';
        return (`{${x1}, ${y1}} to {${x2}, ${y2}} is ${variable}`);
    }

    return finalResult;
}
    console.log(solve(
        2, 1, 1, 1
    ))