function solve(x, y) {
   
    return gcd (Number (x),Number (y));

    function gcd(x, y) {
        if (!y) {
            return x;
        }
        return gcd(y, x % y);
    }

}

console.log(solve(
    15, 5
))