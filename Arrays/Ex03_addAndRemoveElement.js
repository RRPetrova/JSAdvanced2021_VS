function solve(input) {
    let res = [];
    let n= 0;
    for (let i = 0; i < input.length; i++) {
        n++;
        if (input[i] == "add") {
            res.push(n);
            
        } else if (input[i] == "remove") {
                res.pop(i);
        }
    }
    if (res.length != 0) {
        return res.join("\n");
    } else {
        return "Empty";
    }
}

console.log(solve(
    ['add', 
'add', 
'remove', 
'add', 
'add']

    
))