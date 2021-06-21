class Vacationer {
    constructor(fullName, creditCard = [1111, "", 111]) {
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        this.creditCard = {
            cardNumber: 1111,
            expirationDate: "",
            securityNumber: 111
        };
        if (creditCard !== undefined) {
            this.addCreditCardInfo(creditCard);
        }
        this.wishList = [];
    }

    set fullName(fullName) {
        if (fullName.length !== 3) {
            throw new Error("Name must include first name, middle name and last name")
        }

        fullName.forEach(n => {
            if (!/^([A-Z]{1}[a-z]+)$/.test(n)) {
                throw new Error("Invalid full name");
            }
        });

        this._fullName = {
            firstName: fullName[0],
            middleName: fullName[1],
            lastName: fullName[2]
        };
    }

    get fullName() {
        return this._fullName;
    }

    generateIDNumber() {
        let firstName = this.fullName.firstName;
        let middle = this.fullName.middleName;
        let lastName = this.fullName.lastName;
        let res;
        res = 231 * firstName.charCodeAt(0) + 139 * middle.length;
        let vowels = ["a", "e", "o", "i", "u"];
        if (vowels.includes(lastName.charAt(lastName.length - 1))) {
            res += "8";
        } else {
            res += "7";
        }
        return res;
    }



    addCreditCardInfo(input) {
        if (input.length != 3) {
            throw new Error("Missing credit card information");
        }

        if (typeof input[0] !== 'number' || typeof input[2] !== 'number') {
            throw new Error("Invalid credit card details");
        }

        this.creditCard.cardNumber = +input[0];
        this.creditCard.expirationDate = input[1];
        this.creditCard.securityNumber = +input[2];
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }
        this.wishList.push(destination);
        this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        let res = "";

        res = `Name: ${this.fullName.firstName} `;
        res += `${this.fullName.middleName} `;
        res += `${this.fullName.lastName}\n`;
        res += `ID Number: ${this.idNumber}\n`;
        res += `Wishlist:\n`;
        if (this.wishList.length == 0) {
            res += "empty";
        } else {
            res += `${this.wishList.join(", ")}`;
        }
        res += `\nCredit Card:\n`;
        res += `Card Number: ${this.creditCard.cardNumber}\n`
        res += `Expiration Date: ${this.creditCard.expirationDate}\n`
        res += `Security Number: ${this.creditCard.securityNumber}`
        return res.trim();
    }
}


// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
    [123456789, "10/01/2018", 777]);

//Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

//Should throw an error (Missing credit card information)
try {
    // let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer1.addCreditCardInfo([123456789, "20/10/2018", 999]);
} catch (err) {
    console.log("Error: " + err.message);
}

//Should throw an error (MInvalid credit card details)
try {
    let vacationer4 = new Vacationer(["Zdravooooooko", "Georgiev", "Petrov"],
        ["123456789", "20/10/2018", 4535]);
    //vacationer4.addCreditCardInfo(["123456789", "20/10/2018", 4535]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());

