function solve(array) {
    let res = [];
    array.forEach(element => {
        let [cmd, str] = element.split(" ");
        if (cmd == "print") {
            console.log(res.join(","));
        } else if (cmd == "add") {
            res.push(str);
        } else if (cmd == "remove") {
           while(res.includes(str)) {
            res.splice(res.indexOf(str), 1);
           }
        }
    });
}


(solve(['add peter', 'add george', 'add peter', 'remove peter','print']))