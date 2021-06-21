function solve(a,b,c) {
    let res = "";
    //let totalLength = String(a).length + String(b).length + String(c).length;
    let totalLength = a.length + b.length + c.length;
    let avg = Math.round((totalLength) / 3);
    res = (`${totalLength}\n${avg}`);
    return res;

}
console.log(solve(
    'chocolate', 'ice cream', 'cake'
)) 
