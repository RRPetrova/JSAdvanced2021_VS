function fibo() {
    let currNum = 0;//1
    let numnext = 1;//1

    return function next() {

        let res = currNum + numnext; // 2
        if (currNum == 0) {
            res = 1;
        }
        currNum = numnext; // 1
        numnext = res; //1

        return currNum;
    }
}
let fib = fibo();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
