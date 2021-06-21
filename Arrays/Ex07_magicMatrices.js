function solve(input) {
    
        for (let i = 0; i < input.length - 1; i++) {
            let sumFirstRow = input[i].reduce((a, b) => a + b, 0);
            let sumSecRow = input[i + 1].reduce((a, b) => a + b, 0);
            let sumFirstCol = 0;
            let sumSecCol = 0;
    
            for (let j = 0; j < input.length; j++) {
                sumFirstCol += input[i][j];
                sumSecCol += input[i + 1][j];
            }
    
            if (sumFirstRow !== sumSecRow || sumFirstCol !== sumSecCol) {
                return false;
            }
        }
    
        return true;
    
}

    console.log(solve(
        [[1, 1, 1],
        [1, 2, 1],
        [1, 1, 1]]

    ))