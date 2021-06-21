function solve(type, weightGram, priceKg) {
    let weight = (weightGram / 1000).toFixed(2);
    let moneyNeeded = (weightGram / 1000 * Number(priceKg)).toFixed(2);

    return (`I need $${moneyNeeded} to buy ${weight} kilograms ${type}.`)
}

console.log(solve(
    'apple', 1563, 2.35
))