class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
        this.transactions = [];
    }

    // get bankName() {
    //     return this._bankName;
    // }

    newCustomer(customer) {
        if (this.allCustomers.find(c => c.firstName === customer.firstName) ||
            this.allCustomers.find(c => c.name === customer.lastName)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        this.allCustomers.push(customer);
        
        return customer;
    }


    depositMoney(personalId, amount) {
        if (!this.allCustomers.find(c => c.personalId === personalId)) {
            throw new Error("We have no customer with this ID!");
        }
        let currCust = this.allCustomers.find(c => c.personalId === personalId);

        // if(currCust.transactions === undefined) {
        //     currCust.transactions = [];
        // }

        if(currCust.totalMoney === undefined) {
            currCust.totalMoney = 0;
        }
        currCust.totalMoney += amount;
        this.transactions.push(`${currCust.firstName} ${currCust.lastName} made deposit of ${amount}$!`)
        return `${currCust.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        if (!this.allCustomers.find(c => c.personalId === personalId)) {
            throw new Error("We have no customer with this ID!");
        }
      
        let currCust = this.allCustomers.find(c => c.personalId === personalId);
        // if(currCust.transactions === undefined) {
        //     currCust.transactions = [];
        // }

        if(currCust.totalMoney === undefined) {
            currCust.totalMoney = 0;
        }
        if (currCust.totalMoney < amount) {
            throw new Error(`${currCust.firstName} ${currCust.lastName} does not have enough money to withdraw that amount!`);
        }
        currCust.totalMoney -= amount;
        this.transactions.push(`${currCust.firstName} ${currCust.lastName} withdrew ${amount}$!`)
        return `${currCust.totalMoney}$`;
    }


    customerInfo(personalId) {
        if (!this.allCustomers.find(c => c.personalId === personalId)) {
            throw new Error("We have no customer with this ID!");
        }
        let currCust = this.allCustomers.find(c => c.personalId === personalId);
        let currCustTrans = this.transactions.filter(c => c.includes(currCust.firstName));
        let res = `Bank name: ${this._bankName}\n`;
        res += `Customer name: ${currCust.firstName} ${currCust.lastName}\n`;
        res += `Customer ID: ${personalId}\n`;
        res += `Total Money: ${currCust.totalMoney}$\n`;
        //let arr = this.transactions;
        if (currCustTrans.length > 0) {
            res += `Transactions:\n`;
            for (let i = currCustTrans.length - 1; i >= 0; i--) {
                res += `${i + 1}. ${currCustTrans[i]}\n`
            }
        }
        return res.trim();

    }
}
let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));
//console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 21324 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
bank.withdrawMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(4151596));
console.log(bank.customerInfo(4151596));

