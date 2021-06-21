function solve() {
   
    let count = {};
   
    for (let arg of arguments) {
        let typeOfIter = typeof(arg);

        console.log(`${typeOfIter}: ${arg}`);

            if(!count[typeOfIter]) {
            count[typeOfIter] = 0;
        }
        count[typeOfIter]++;
    }
    Object.entries(count).sort((a,b) => b[1]-a[1])
    .forEach(e=> console.log(`${e[0]} = ${e[1]}`));
}

solve(
    [{ name: 'bob'}, 3.333, 9.999]
)