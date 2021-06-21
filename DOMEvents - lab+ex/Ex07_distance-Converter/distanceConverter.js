function attachEventsListeners() {
    let inpDistField = document.getElementById("inputDistance");
    let outputDistField = document.getElementById("outputDistance");


    // console.log(optionsFrom);
    document.getElementById("convert").addEventListener("click", calc);

    function calc() {
        let optionsFrom = document.getElementById("inputUnits").selectedIndex;
        let optionsTo = document.getElementById("outputUnits").selectedIndex;
        let inputValue = Number(inpDistField.value);
        let toMet = 0;
        // console.log(optionsFrom);
        // console.log(optionsTo);

        switch (optionsFrom) {
            case 0:
                toMet = inputValue * 1000;
                break;
            case 1:
                toMet = inputValue;
                break;
            case 2:
                toMet = inputValue * 0.01;
                break;
            case 3:
                toMet = inputValue * 0.001;
                break;
            case 4:
                toMet = inputValue * 1609.34;
                break;
            case 5:
                toMet = inputValue * 0.9144;
                break;
            case 6:
                toMet = inputValue * 0.3048;
                break;
            case 7:
                toMet = inputValue * 0.0254;
                break;
        }
        switch (optionsTo) {
            case 0:
                outputDistField.value = toMet / 1000;
                break;
            case 1:
                outputDistField.value = toMet;
                break;
            case 2:
                outputDistField.value = toMet / 0.01;
                break;
            case 3:
                outputDistField.value = toMet / 0.001;
                break;
            case 4:
                outputDistField.value = toMet / 1609.34;
                break;
            case 5:
                outputDistField.value = toMet / 0.9144;
                break;
            case 6:
                outputDistField.value = toMet / 0.3048;
                break;
            case 7:
                outputDistField.value = toMet / 0.0254;
                break;

        }
    }
}
