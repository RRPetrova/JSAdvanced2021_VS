function solve(input) {
    let newArray = input.sort((a, b) => {
        let res = a.length - b.length;
        if (res == 0) {
            let x = a.toUpperCase();
            let y = b.toUpperCase();

            return x == y ? 0 : x > y ? 1 : -1;
        }
        return res;
    });
    return newArray.join("\n");
}


console.log(solve(
    ['Isacc', 
    'Theodor', 
    'Jack', 
    'Harrison', 
    'George']
    
    

))
