function solution() {
    let micrQtys = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3, },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }


    let cmd = {
        restock: (microel, qty) => {
            micrQtys[microel] += +qty;
            return "Success";
        },

        prepare: (recipe, qty) => {
            let objRec = recipes[recipe];
            
          
            
           for (let curr of Object.entries(objRec)) {
             //  console.log(micrQtys[curr[0]]);
              // console.log(qty * curr[1]);
               if(micrQtys[curr[0]] < qty*curr[1]){
                return `Error: not enough ${curr[0]} in stock`;
               }
           }
            
                Object.entries(objRec).forEach(e => {
                    micrQtys[e[0]] -= +qty * e[1]
                })

                return "Success"
            
            
        },
        report: () => {
            let arr = [];
            Object.entries(micrQtys).forEach(e => arr.push(`${e[0]}=${e[1]}`));
            return arr.join(" ");
        }
    }


    return function input(input) {
        let [instruction, macroRecip, qtyInp] = input.split(" ");
        return cmd[instruction](macroRecip, qtyInp)
    }

}
let manager = solution();
console.log(manager("prepare lemonade 4"));
console.log(manager("restock flavour 50"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));  
// console.log(manager("prepare apple 1"));  
// console.log(manager("restock fat 10"));  
// console.log(manager("prepare burger 1"));  
// console.log(manager("report"));  
