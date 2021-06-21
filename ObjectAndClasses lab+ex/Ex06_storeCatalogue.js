function solve(input) {
    let map = new Map();

    for (const row of input) {
        let [product, price] = row.split(" : ");
        map.set(product, price);
    }

    let mapSorted = new Map([...map.entries()].sort());

    let res = "";
    let firstLetter = "";
    for (const curr of mapSorted) {
        let currLetter = curr[0].charAt(0);
        
        if (currLetter !== firstLetter) {
            firstLetter = currLetter;
            res += currLetter + "\n";
        }
        res += (`  ${curr[0]}: ${curr[1]}\n`);
    }

return res.trim();

}

console.log(solve(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']
))