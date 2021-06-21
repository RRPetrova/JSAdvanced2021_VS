function solve(input) {
   // let pattern = /[A-Za-z]+/gm;
    let pattern = /[\w*]+/gm;
    let array = input.match(pattern);
    //let arStr = array.forEach(e => e+"");
    return array.map(e => e.toUpperCase()).join(", ");
}

console.log(solve(
    'Hi, how are you99?'
))