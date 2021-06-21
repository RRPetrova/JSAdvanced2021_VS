function solve(array, numVal) {
   
    numVal === "asc" ? array.sort((a,b) => a-b) : array.sort((a,b) => b-a);
    return array;
    // let sort = {
    //     asc: function (arr) {
    //         return arr.sort((a, b) => a - b);
    //     },
    //     desc: function (arr) {
    //        return arr.sort((a, b) => b - a);
    //     }
    // }
    // let func = sort[numVal];
    // return func(array);
}



console.log(solve(
    [14, 7, 17, 6, 8], 'desc'
))