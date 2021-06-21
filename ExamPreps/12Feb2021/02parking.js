class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length + 1 > this.capacity) {
            throw new Error("Not enough parking space.");
        }
        let carObj = {
            carModel: carModel,
            carNumber: carNumber,
            payed: false
        }
        this.vehicles.push(carObj);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }


    removeCar(carNumber) {
        if (!this.vehicles.find(c => c.carNumber == carNumber)) {
            throw new Error("The car, you're looking for, is not found.")
        }
        let currCar = this.vehicles.find(c => c.carNumber == carNumber);
        if (!currCar.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        this.vehicles.splice(this.vehicles.indexOf(currCar), 1);
        return `${carNumber} left the parking lot.`
    }


    pay(carNumber) {
        if (!this.vehicles.find(c => c.carNumber == carNumber)) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        let currCar = this.vehicles.find(c => c.carNumber == carNumber);
        if (currCar.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        currCar.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }


    getStatistics(carNumber) {
        let res = "";
        if (carNumber == undefined) {
            res += `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n`
            this.vehicles
                .sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(car => {
                    res += `${car.carModel} == ${car.carNumber} - `
                    if (car.payed) {
                        res += `Has payed\n`
                    } else {
                        res += `Not payed\n`
                    }
                });
        } else {
            let currV = this.vehicles.find(c => c.carNumber == carNumber)
            res += `${currV.carModel} == ${currV.carNumber} - `
            if (currV.payed) {
                res += `Has payed`
            } else {
                res += `Not payed`;
            }
        }
        return res.trim();
    }
}

const parking = new Parking(3);

console.log(parking.addCar("Volvo t600", "11"));
console.log(parking.addCar("fiat t600", "12"));
console.log(parking.addCar("fiat t200", "13"));
//console.log(parking.getStatistics());
//console.log(parking.vehicles.length)
console.log(parking.pay("11"));
try {
    console.log(parking.pay("11"));
    //parking.removeCar("1")
} catch (error) {
    console.log(error.message)
}
console.log(parking.removeCar("11"));
//console.log(parking.vehicles.length)
//console.log(parking.getStatistics());
console.log(parking.getStatistics("12"));
