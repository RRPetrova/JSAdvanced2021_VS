function solve(input) {
    let day = input;
    let res;
    let array = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (array.includes(day)) {
        res = array.indexOf(day) + 1;
   } else {
        res = "error";
    }
    return res;
    
}

console.log(solve(
    "Invalid"
))