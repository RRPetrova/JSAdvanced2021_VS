function solve() {
    let input = Array.from(document.getElementById("container").children);

    let butOnScr = [...document.querySelectorAll("form div button")];
    butOnScr[0].addEventListener("click", addMovies);

    function addMovies(event) {
        event.preventDefault();

        let nameMov = input[0].value;
        let hall = input[1].value;
        let tickPri = Number(input[2].value);

        if (nameMov != "" && nameMov != undefined &&
            hall != "" && hall != undefined &&
            !isNaN(tickPri)) {

            input[0].value = "";
            input[1].value = "";
            input[2].value = "";

            let movOnScrUl = document.querySelector("section ul");

            //create span, strong -> append to li
            let createLi = crElementWithCont("li", "");
            let createSpan = crElementWithCont("span", nameMov);
            let createStrong = crElementWithCont("strong", `Hall: ${hall}`);
            createLi.appendChild(createSpan);
            createLi.appendChild(createStrong);

            //create strong, input, but -> append to div, div append to li
            let createDiv = crElementWithCont("div", "");
            createStrong = crElementWithCont("strong", tickPri.toFixed(2));
            //tickSold field
            let createInp = document.createElement("input");
            createInp.setAttribute("placeholder", "Tickets Sold");
            createButtArch = crElementWithCont("button", "Archive");
            createButtArch.addEventListener("click", archive);

            createDiv.appendChild(createStrong);
            createDiv.appendChild(createInp);
            createDiv.appendChild(createButtArch);

            createLi.appendChild(createDiv);
            //append li to ul
            movOnScrUl.appendChild(createLi);
        }



        function archive(ev) {
            let row = ev.target.parentNode.parentNode;
            let tickSoldCount = Number(row.children[2].children[1].value);

            if (Number.isInteger(tickSoldCount) && tickSoldCount != 0) {

                let nameMovie = row.children[0].textContent;
                let priceTicket = Number(row.children[2].children[0].textContent);

                //archSection
                let archsection = document.querySelector("#archive ul");

                //create span, strong, btn Delete -> append to the LI
                let crLi = crElementWithCont("li", "");
                crLi.appendChild(crElementWithCont("span", nameMovie));
                crLi.appendChild(crElementWithCont("strong",
                    `Total amount: ${(tickSoldCount * priceTicket).toFixed(2)}`));
                crLi.appendChild(crElementWithCont("button", "Delete"));

                //append Li to UL
                archsection.appendChild(crLi);
                ev.target.parentNode.parentNode.remove();

                let btnsDel = [...document.querySelectorAll("#archive ul li button")];
                btnsDel.forEach(b => b.addEventListener("click", deleteFunc));

                function deleteFunc(ev) {
                    ev.target.parentNode.remove();
                }
            }
        }

        let clearButton = document.querySelector('#archive button');
        clearButton.addEventListener("click", (ev) => {
            document.querySelector("section#archive ul").innerHTML = "";
        });


    }



    function crElementWithCont(type, content) {
        const elem = document.createElement(type);
        elem.textContent = content;
        return elem;
    }
}