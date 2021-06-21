function solve(input) {
    let map = new Map();

    for (const row of input) {
        let [town, product, price] = row
            .split('|')
            .map(e => e.trim());
        if (!map.get(product)) {
            map.set(product, new Map());
        }
        map.get(product).set(town, Number(price));
    }
    //prod - price - town
    let res = "";
    for (const currProd of map) {
   //     console.log([...currProd[1]].sort()[0]);
        let lowestPrice = [...currProd[1]].sort((a, b) =>
            a[1] - b[1])[0];
        res += `${currProd[0]} -> ${lowestPrice[1]} (${lowestPrice[0]})\n`
    }
    return res;
}

console.log(solve(
    ['Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10']
))