function solve(input) {
    let res = [];

    for (const curr of input) {
      let [name, level, items] = curr.split("/")
      .map(e => e.trim());

     level = Number(level);
      items = items ? items.split(", ") : [];
      res.push({name, level, items});
    }
    return JSON.stringify(res);
}

console.log(solve(
    ['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara']

))
