function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector("#inputs textarea");


   function onClick() {
      let arr = JSON.parse(input.value);
      let rests = {};

      arr.forEach(element => {
         const tokens = element.split(" - ");
         const name = tokens[0];
         const workerSalaryArr = tokens[1].split(", ");
         let workers = [];
         let averageSalary = 0;
         let bestSalary = 0;

         for (const curr of workerSalaryArr) {
            let workerName = curr.split(" ")[0];
            let workerSal = Number(curr.split(" ")[1]);

            workers.push({ name: workerName, salary: workerSal })
         }

         if (rests[name]) {
            workers = workers.concat(rests[name].workers);
         }
         workers.sort((a, b) => b.salary - a.salary);

         bestSalary = workers[0].salary;
         averageSalary = workers
            .reduce((acc, c) => acc + c.salary, 0) / workers.length;

         rests[name] = {
            workers,
            averageSalary,
            bestSalary
         }
      })
      let bestR = undefined;
      let bestRSal = 0;
      for (const name in rests) {
         if (rests[name].averageSalary > bestRSal) {
            bestRSal = rests[name].averageSalary;

            bestR = {
               name,
               workers: rests[name].workers,
               bestSalary: rests[name].bestSalary,
               averageSalary: rests[name].averageSalary
            }
         }
      }


      document.querySelector("#outputs p").textContent =
         (`Name: ${bestR.name} Average Salary: ${bestR.averageSalary.toFixed(2)} Best Salary: ${bestR.bestSalary.toFixed(2)}`)
let resW = [];
      bestR.workers.forEach(w =>
         resW.push(`Name: ${w.name} With Salary: ${w.salary}`));
      document.querySelector("#workers p").textContent = resW.join(" ");
         



   }

}