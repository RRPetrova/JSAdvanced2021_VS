function solve(array) {
    let map = new Map();
    let inner = new Map();

    array.forEach(el => {
        let [car, model, count] = el.split(" | ");
        if (!map.has(car)) {
            //nqma takava kola
            inner = new Map();
            inner.set(model, +count);
        } else {
            //ima takava kola
            inner = map.get(car);
            if (!inner.has(model)) {
                //nqma takyv model   
                inner.set(model, +count);
            } else {
                //ima takyv model
                inner.set(model, inner.get(model) + +count);
            }
        }
        map.set(car, inner);
    })

    let res = "";
    for (let [key, value] of map) {
        res += (`${key}\n`)
        for (let [model, count] of value) {
            res += (`###${model} -> ${count}\n`)
        }
    }
    return res;
}
console.log(solve(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']

))