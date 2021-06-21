function addDestination() {
    let divInput = Array.from(document.querySelector("#input").children);

    if (divInput[2].value != "" && divInput[3].value != "") {
        let seasons = document.querySelector("#seasons").selectedIndex;
        let selectedSeason = document.getElementsByTagName("option")[seasons].textContent;

        let newVal;
        switch (selectedSeason) {
            case "Summer":
                newVal = Number(document.querySelector("#summer").value) + 1;
                document.querySelector("#summer").value = newVal
               
                break;
            case "Autumn":
                newVal = Number(document.querySelector("#autumn").value) + 1;
                document.querySelector("#autumn").value = newVal;
              
                break;
            case "Winter":
                newVal = Number(document.querySelector("#winter").value) + 1;
                document.querySelector("#winter").value = newVal;
                break;
            case "Spring":
                newVal = Number(document.querySelector("#spring").value) + 1;
                document.querySelector("#spring").value = newVal;
                break;
        }

        let table = document.querySelector("#destinationsList");
        let newRow = e("tr", "");
        let newTD = e("td", divInput[1].value + ", " + divInput[3].value);
        let newTD2 = e("td", selectedSeason);

        newRow.appendChild(newTD);
        newRow.appendChild(newTD2);
        table.appendChild(newRow);

        divInput[1].value = "";
        divInput[3].value = "";
    }

    function e(type, ...content) {
        let res = document.createElement(type);
        content.forEach(e => {
            if (typeof e == "string") {
                const node = document.createTextNode(e);
                res.appendChild(node);
            } else { res.appendChild(e); }
        });
        return res;
    }
}