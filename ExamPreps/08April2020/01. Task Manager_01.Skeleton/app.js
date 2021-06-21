function solve() {
    let taskInputField = document.querySelector("#task");
    let descrInputField = document.querySelector("#description");
    let dateInputField = document.querySelector("#date");
    let sections = Array.from(document.querySelectorAll("main section"));

    document.querySelector("button").addEventListener('click', addFunc);

    function addFunc(ev) {
        ev.preventDefault();
        if (taskInputField.value != "" && descrInputField.value != "" &&
            dateInputField.value != "") {

            let divSecondOrange = sections[1].children[1];
            let createArt = e("article", "");
            let createh3 = e("h3", taskInputField.value);
            let createP1 = e("p", "Description: " + descrInputField.value);
            let createP2 = e("p", "Due Date: " + dateInputField.value);
            let innerDiv = document.createElement("div");
            innerDiv.className = "flex";

            let btn1 = e("button", "Start");
            btn1.className = "green";
            btn1.addEventListener("click", startFunc);
            let btn2 = e("button", "Delete");
            btn2.className = "red";
            btn2.addEventListener("click", delFunc);
            //app btns to div
            innerDiv.appendChild(btn1);
            innerDiv.appendChild(btn2);
            //app createdEl to article
            createArt.appendChild(createh3);
            createArt.appendChild(createP1);
            createArt.appendChild(createP2);
            createArt.appendChild(innerDiv);

            divSecondOrange.appendChild(createArt);
            taskInputField.value = "";
            descrInputField.value = "";
            dateInputField.value = "";

            function startFunc(ev) {
                let clickedArticle = ev.target.parentNode.parentNode;
                // console.log(clickedArticle);
                let divSecondYell = document.querySelector("#in-progress");
                let bothBtns = Array.from(clickedArticle.children[3].children);
                bothBtns[0].className = "red";
                bothBtns[1].className = "orange";
                bothBtns[0].textContent = "Delete";
                bothBtns[1].textContent = "Finish";
                bothBtns[0].addEventListener('click', delFunc);
                bothBtns[1].addEventListener('click', finishFunc);

                divSecondYell.appendChild(clickedArticle);
            }

            function delFunc(ev) {
                let currArt = ev.target.parentNode.parentNode;
                currArt.parentNode.removeChild(currArt);
            }

            function finishFunc(ev) {
                let clickedArticle = ev.target.parentNode.parentNode;
                let divSecondGreen = sections[3].children[1];
                let divWithBtns = ev.target.parentNode;
                console.log(divWithBtns)
                clickedArticle.removeChild(divWithBtns);
                divSecondGreen.appendChild(clickedArticle);

            }
        }
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