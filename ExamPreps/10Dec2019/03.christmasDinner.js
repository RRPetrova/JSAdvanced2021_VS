class ChristmasDinner {
    constructor(budget) {
        this.budget = (budget);
        this.dishes = []; //recipe name ; products
        this.products = []; //products
        this.guests = {}; //name ; dish
    }

    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }


    get budget() {
        return this._budget;
    }

    shopping(product) {
        let type = product[0];
        let price = product[1];
        if (this.budget < price) {
            throw new Error("Not enough money to buy this product");

        }
        this._budget -= Number(price);
        this.products.push(type);
        return `You have successfully bought ${type}!`;
    }

    recipes(input) {
        input.productsList.forEach(p => {
            if (!this.products.includes(p)) {
                throw new Error("We do not have this product");
            }
        });

        this.dishes.push(input);
        return `${input.recipeName} has been successfully cooked!`;
    }


    inviteGuests(name, dish) {
        let dishesArray = [];
        this.dishes.forEach(obj => dishesArray.push(obj.recipeName));

        if (!dishesArray.includes(dish) || dishesArray === undefined) {
            throw new Error("We do not have this dish");
        }

        // if (Object.keys(this.guests).includes(name)) {
        //     throw new Error("This guest has already been invited");
        // }

        if (this.guests.hasOwnProperty(name)) {
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }


    showAttendance() {
        let res = "";
        for (const [k, v] of Object.entries(this.guests)) {
            res += `${k} will eat ${v}, which consists of `
            this.dishes.forEach(obj => {
                if (obj.recipeName === v) {
                    res += obj.productsList.join(", ");
                }
            });
            res += "\n"
        }
        return res.trim();
    }
}


let dinner = new ChristmasDinner("a");
dinner.shopping(['Salt', 5]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

// dinner.inviteGuests('Ivan', 'Oshav');

// dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
// dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log("show at:" + dinner.showAttendance());
