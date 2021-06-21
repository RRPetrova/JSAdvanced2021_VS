function solve(num, cmd1, cmd2, cmd3, cmd4, cmd5) {
    let res = "";
    let input = [cmd1, cmd2, cmd3, cmd4, cmd5];

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "chop":
                num /= 2;
                break;
            case "dice":
                num = Math.sqrt(num);
                break;
            case "spice":
                num += 1;
                break;
            case "bake":
                num *= 3;
                break;
            case "fillet":
                num *= 0.8;
                break;
        }
        res += num + '\n';
    }

    return res;
}

console.log(solve(
    '32', 'chop', 'chop', 'chop', 'chop', 'chop'
))