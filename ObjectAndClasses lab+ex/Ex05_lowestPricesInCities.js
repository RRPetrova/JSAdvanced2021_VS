function solve(input) {
    let map = new Map();

    for (const currRow of input) {
        let [town, product, price] = currRow.split(" | ");

        if (!map.has(product)) {
            map.set(product, new Map());
        }
        map.get(product).set(town, Number(price));
    }
    let res = "";

    for (const [product, towns] of map) {
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = '';

        for (const [town, price] of towns) {
            if (price < minPrice) {
                minPrice = price;
                minPriceTown = town;
            }
        }
        res += (`${product} -> ${minPrice} (${minPriceTown})\n`);
    }
    return res.trim();
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