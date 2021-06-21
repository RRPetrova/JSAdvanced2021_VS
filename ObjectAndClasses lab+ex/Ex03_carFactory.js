function solve(wantedCarProp) {
    let finalCar = {
        model: wantedCarProp.model,
        engine: { power: 0, volume: 0 },
        carriage: {
            type: wantedCarProp.carriage,
            color: wantedCarProp.color
        },
        wheels: []
    }
    let wantedPower = wantedCarProp.power;
    let engAvail = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ]

    let availPower = engAvail.map(a => a.power);

    let closest = availPower.reduce(function (a, b) {
        return (Math.abs(a - wantedPower) < Math.abs(b - wantedPower) ? a : b);
    });

    let res = engAvail.filter(obj => {
        return obj.power == closest;
    });

    finalCar.engine = res[0];

    let size = wantedCarProp.wheelsize % 2 == 0 ?
        wantedCarProp.wheelsize - 1 : wantedCarProp.wheelsize;
    let ar = new Array(4).fill(size);
    finalCar.wheels = ar;
   // console.log(finalCar.wheels);
    return finalCar;

}

console.log(solve(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 16
    }

))