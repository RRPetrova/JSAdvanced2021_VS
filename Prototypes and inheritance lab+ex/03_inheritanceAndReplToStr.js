function solve() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return (`${this.constructor.name} (name: ${this.name}, email: ${this.email})`);
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            return super.toString().replace(")", ",") + ` subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            return super.toString().replace(")", ",")  + ` course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}



    let p1 = new Person("sdf", "sdf@sasda");
    console.log(p1.toString());
    let t1 = new Teacher("sadasdaa", "fds@asda.as", "Math");
    console.log(t1.toString());
    let st1 = new Student("sasda", "fds@.as", "hdsa");
    console.log(st1.toString());


