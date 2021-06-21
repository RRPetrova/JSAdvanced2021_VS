function solve(input) {
    let map = new Map();
    for (const info of input) {
        let [town, population] = info.split(/\s*<->\s*/);
        population = Number(population);
        if (map.has(town)) {
            map.set(town, map.get(town) + population);
        } else {
            map.set(town, population);
        }
    }
    let res = "";
    for (const [town, total] of map) {
        res += (`${town} : ${total}\n`);
    }
    return res;
}

console.log(solve(
    ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']

))