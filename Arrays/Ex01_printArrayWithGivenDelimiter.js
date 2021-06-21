function solve(input) {
    let delim = input[input.length-1];
    let restOfArray = input.slice(0, input.length-1);
    return restOfArray.join(delim);

}

console.log(solve(
    ['How about no?', 
    'I',
    'will', 
    'not', 
    'do', 
    'it!', 
    '_']
    
))