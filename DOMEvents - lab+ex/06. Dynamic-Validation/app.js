function validate() {
    document.querySelector("#email").addEventListener("change", changeColor);


    function changeColor(ev) {
        let mail = ev.target.value;
        if ((/^[a-z]+@[a-z]+\.[a-z]+$/).test(mail)) {
            ev.target.className = "";
        } else {
            ev.target.className = "error";
        }
    }
}