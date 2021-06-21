class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, currDep) {
        if (!username || !position || !currDep) {
            throw new Error("Invalid input!");
        } else if (salary < 0) {
            throw new Error("Invalid input!");
        }

        let currEmpl = {
            "username": username,
            "salary": salary,
            "position": position,
        }
        //[[dep, empl], [dep2], empl]
        if (!this.departments[currDep]) {
            this.departments[currDep] = [];
        }
        this.departments[currDep].push(currEmpl);
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let departmentBest = '';
        let maxAvSal = 0;

        Object.entries(this.departments).forEach(([dep, empl]) => {
            let totalSalary = 0;

            empl.forEach(e => {
                totalSalary += e.salary;
            })

            let avgCurrent = totalSalary / empl.length;
            if (avgCurrent > maxAvSal) {
                departmentBest = dep;
                maxAvSal = avgCurrent;
            }
        });

        if (departmentBest != '') {
            let res = `Best Department is: ${departmentBest}\nAverage salary: ${maxAvSal.toFixed(2)}\n`;

            Object.values(this.departments[departmentBest])
                .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
                .forEach(e => {
                    let em = `${e.username} ${e.salary} ${e.position}\n`;
                    res += em;
                })
            return res.trim();
        }
    }


}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
