function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }

    }
    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'),
    ];
}

console.log(getPersons()[0].firstName);
console.log(getPersons()[0].lastName);
console.log(getPersons()[1].firstName);
console.log(getPersons()[2].firstName);
console.log(getPersons().join(", "));
