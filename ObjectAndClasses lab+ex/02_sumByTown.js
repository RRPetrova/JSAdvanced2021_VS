function solve(input) {
    let res = {};

    for (let i = 0; i < input.length; i += 2) {
        if (res.hasOwnProperty(input[i])) {
            res[input[i]] = res[input[i]] + Number(input[i+1]);
        } else{
            res[input[i]] = Number(input[i+1]);
        } 

    }
    return JSON.stringify(res);
}
    console.log(solve(
        ['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']
    ))