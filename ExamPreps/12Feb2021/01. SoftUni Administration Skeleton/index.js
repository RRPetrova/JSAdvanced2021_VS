function solve() {
    document.querySelector("button").addEventListener("click", addFunc);
    let inputFields = Array.from(document.getElementsByClassName("form-control"));
    let nameInputField = inputFields[0].querySelector("input");
    let dateInputField = inputFields[1].querySelector("input");

    function addFunc(ev) {
        ev.preventDefault();

        let modules = inputFields[2].querySelector("select").selectedIndex;
        let selectedModue = document.getElementsByTagName("option")[modules].textContent;

        if (nameInputField.value != "" && dateInputField.value != "" && selectedModue != "Select module...") {

            let divModules = Array.from(document.getElementsByClassName("modules"));
            //create module div with h3 MODULE, (ul) => li => btn, h4 sort LI
            let newH3 = crEl("h3", selectedModue.toUpperCase() + "-MODULE", undefined);

            let newUL = crEl("ul", "", undefined);
            let newLi = crEl("li", "", ["class=flex"]);
        
            let newH4 = crEl("h4", `${nameInputField.value} - ${dateInputField.value
                .replace("-", "/")
                .replace("-", "/")
                .replace("T", " - ")}`, undefined);

            let delBtn = crEl("button", "Del", ["class=red"])
            
            delBtn.addEventListener("click", delFunc);

            newLi.appendChild(newH4);
            newLi.appendChild(delBtn)
            newUL.appendChild(newLi);

            let arrayOfH3 = Array.from(document.querySelectorAll("h3"));

            if (arrayOfH3.find(m => m.textContent == newH3.textContent)) {
                let currh3 = arrayOfH3.find(m => m.textContent == newH3.textContent);
                currh3.parentNode.appendChild(newUL);

                let currDivToH3 = currh3.parentNode;
                Array.from(currDivToH3.querySelectorAll('li'))
                    .sort((a, b) =>
                        a.querySelector("h4").textContent.slice(a.querySelector("h4").textContent.indexOf(" - ") + 3)
                            .replace("/", "-").replace("/", "-").replace(" - ", "T")
                            .localeCompare
                            (b.querySelector("h4").textContent.slice(b.querySelector("h4").textContent.indexOf(" - ") + 3)
                                .replace("/", "-").replace("/", "-").replace(" - ", "T")))
                    .forEach(liEl =>
                        currDivToH3.querySelector('ul').appendChild(liEl));


            } else {
                let divModule = crEl("div", "", ["class=module"])
                divModule.appendChild(newH3);
                divModule.appendChild(newUL);
                divModules[0].appendChild(divModule)
            }

            function delFunc(ev) {
                let parentOfBut = ev.target.parentNode; //li
                //more than one li
                if (Array.from(parentOfBut.parentNode.children).length > 1) {
                    parentOfBut.parentNode.removeChild(parentOfBut)
                } else {
                    let divClassModule = ev.target.parentNode.parentNode.parentNode;
                    divClassModule.parentNode.removeChild(divClassModule);
                }
            }
        }
    }

  

    function crEl(type, text, atr = []) {
        let createdElement = document.createElement(type);
        if (text !== "") {
            createdElement.textContent = text;
        }
        atr.forEach(e => {
            let [nameAtr, valueAtr] = e.split("=");
            createdElement.setAttribute(nameAtr, valueAtr);
        })
        return createdElement;
    }
};