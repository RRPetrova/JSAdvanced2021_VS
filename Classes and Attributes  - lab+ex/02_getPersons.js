function solve() {

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }


    let res = [];
    res.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    res.push(new Person('SoftUni'));
    res.push(new Person('Stephan', 'Johnson', 25));
    res.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));

    return res;
}

console.log(solve());