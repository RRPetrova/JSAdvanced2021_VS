function solve() {
    let field = document.querySelector("#expressionOutput");
    let result = document.querySelector("#resultOutput")

    let allKeys = document.querySelector(".keys");
    allKeys.addEventListener("click", buttonSelected);

    document.querySelector(".clear").addEventListener("click", clearField);

    function buttonSelected(event) {
        let currButton = event.target.value;

        switch (currButton) {
            case "+":
            case "-":
            case "*":
            case "/":
                field.textContent += ` ${currButton} `;
                break;
            case "=":
                let [num1, op, num2] = field.textContent.split(" ");

                if (!num2 || !op) {
                    result.textContent = "NaN";
                } else {
                    result.textContent = calculate(+num1, op, +num2);
                }
                break;
            default:
                field.textContent += currButton;
        }

    }

    function clearField() {
        field.textContent = "";
        result.textContent = "";
    }

    function calculate(num1, op, num2) {
        switch (op) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2;
        }

    }
}