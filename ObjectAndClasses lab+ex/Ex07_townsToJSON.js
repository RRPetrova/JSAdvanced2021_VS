function solve(input) {
    let result = [];
    for (const town of input.slice(1)) {
        let [empty, currTown, latitude, longitude] =
            town.split(/\s*\|\s*/);
        let obj = {
            Town: currTown, 
            Latitude:
            Number(Number(latitude).toFixed(2)),
                 Longitude: 
                 Number(Number(longitude).toFixed(2))
        };
        result.push(obj);
    }
    return JSON.stringify(result);
}
console.log(solve(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |']

))