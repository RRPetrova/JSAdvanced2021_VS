function solve(arr, st, end) {

    if (Array.isArray(arr) == false) {
        return NaN;
    }
    // st < 0 ? st = 0 : st = st;
    // end >= arr.length ? end = arr.length - 1 : end = end;

    if(st < 0) {
        st = 0;
    }
    if( end > arr.length-1) {
        end = arr.length-1;
    }

    return arr.slice(st, end+1).reduce((a, b) =>a+Number(b), 0);
}

//console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve('text', 0, 2));