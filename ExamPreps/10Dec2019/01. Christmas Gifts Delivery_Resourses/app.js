function solution() {
    let allSections = Array.from(document.querySelectorAll(".card"));
    let inputField = allSections[0].children[1].children[0];

    console.log(inputField.value);

    Array.from(document.querySelectorAll("button"))
        .forEach(b => b.addEventListener("click", addGift));

    function addGift() {
        let currGift = inputField.value;

        let listOfGiftsUl = allSections[1].children[1];
        let listOfGiftsNames = Array.from(allSections[1].children[1].querySelectorAll("li"));

        //let arrGifts = [];
        //create li with name
        let li = document.createElement("li");
        li.className = "gift";
        li.textContent = currGift;

        let btn1 = e("button", "Send");
        let btn2 = e("button", "Discard");
        btn1.id = "sendButton";
        btn1.addEventListener("click", sendFunc);
        btn2.id = "discardButton";
        btn2.addEventListener("click", discardFunc);

        //appendAll to li
        li.appendChild(btn1);
        li.appendChild(btn2);
        listOfGiftsUl.appendChild(li);

        Array.from(listOfGiftsUl.getElementsByTagName("LI"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => listOfGiftsUl.appendChild(li));
        inputField.value = "";

        console.log(listOfGiftsNames)

        function sendFunc(ev) {
            let parentLi = ev.target.parentNode;
            parentLi.parentNode.removeChild(parentLi)
          
          //  console.log(parentLi);
            let sentGiftsUl = allSections[2].children[1];
            let newLiEl = e("li", parentLi.firstChild.textContent);
            newLiEl.className = "gift";
            sentGiftsUl.appendChild(newLiEl);

           // parentLi.innerHTML = "";

        }

        function discardFunc(ev) {
            let parentLi = ev.target.parentNode;
            parentLi.parentNode.removeChild(parentLi)
          
            let sentGiftsUl = allSections[3].children[1];
            let newLiEl = e("li", parentLi.firstChild.textContent);
            newLiEl.className = "gift";
            sentGiftsUl.appendChild(newLiEl);
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