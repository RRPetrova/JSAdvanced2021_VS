function solve() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            
            this.subject = subject;
        }
    }

     return {
         Person,
        Teacher
     }
}
// let p1 = new Person("sdf", "sdf@sasda");
// let t1 = new Teacher("sadasdaa", "fds@asda.as", "asamasmda");
// console.log(p1)
// console.log(t1)