function solve(arr) {
    let map = new Map();

    let bottles = new Map();


    arr.forEach(element => {
        let [key, val] = element.split(" => ");
        let qty = map.get(key);

        if (qty === undefined) {
            //nqma plod takyv v mapa
            if (val >= 1000) {
                bottles.set(key, Math.floor(val / 1000));
            }
            map.set(key, +val % 1000);
        } else {
            //ima veche plod takyv 500 + 600
            let totalQty = map.get(key) + +val;
            if (totalQty >= 1000) {
                if (bottles.get(key) === undefined) {
                    bottles.set(key, Math.floor(totalQty / 1000));
                } else {
                    bottles.set(key, bottles.get(key) + Math.floor(totalQty / 1000));
                }
                map.set(key, totalQty % 1000);
            } else {
                map.set(key, totalQty);
            }
        }
    });


    let res = "";
    for (const [k, v] of bottles) {
        res +=(`${k} => ${v}\n`)
    }

    // for (const [k, v] of map) {
    //     console.log(`${k} => ${v}`)
    // }
    return res;

}

console.log(solve(
    ['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']


))