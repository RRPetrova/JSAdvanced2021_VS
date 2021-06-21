function addSticker() {
    let inputTitleField = document.querySelector(".title");
    let inputContField = document.querySelector(".content");

    if (inputTitleField.value  && inputContField.value ) {
        let ulList = document.querySelector("#sticker-list");

        let crLi = e("li")
        crLi.className = "note-content";
        let crA = e("a", "x");
      //  crA.setAttribute("button")
        crA.className = "button";
        crA.addEventListener("click", close);
        let crh2 = e("h2", inputTitleField.value);
        let crHr = e("hr");
        let crP = e("p", inputContField.value);
        crLi.appendChild(crA)
        crLi.appendChild(crh2)
        crLi.appendChild(crHr)
        crLi.appendChild(crP)
        ulList.appendChild(crLi)

        inputContField.value = "";
        inputTitleField.value = "";

        function close(ev) {

          ev.target.parentNode.remove();
        }
    }

    function e(type, text) {
        let res = document.createElement(type);
        res.textContent = text;
        return res;
    }
}