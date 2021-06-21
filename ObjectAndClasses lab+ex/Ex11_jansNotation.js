function solve(input) {
    let nums = [];
    let notEnoughOperands = false;
    input.forEach(element => {
        typeof element === 'number' ? nums.push(Number(element)) : calculate(nums, element);
    });

    if (nums.length >= 2) {
        console.log('Error: too many operands!');
    } 
    else if (!notEnoughOperands) {
        console.log(nums[0]);
    }

    function calculate(numbers, oper) {
        if (numbers.length < 2) {
            console.log(`Error: not enough operands!`);
            notEnoughOperands = true;
            return;
        }
        let num2 = numbers.pop();
        let num1 = numbers.pop();

        switch (oper) {
            case "+":
                numbers.push(num1 + num2);
                break;
            case "-":
                numbers.push(num1 - num2);
                break;
            case "*":
                numbers.push(num1 * num2);
                break;
            case "/":
                numbers.push(Math.ceil(num1 / num2));
                break;
        }
    }

}
console.log(solve(
    [15,
        "/"]

))