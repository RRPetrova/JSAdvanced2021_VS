function focus() {
    Array.from(document.querySelectorAll("input"))
        .forEach(e => {
            e.addEventListener("focus", onFocus);
            e.addEventListener("blur", blur);
        });

    function onFocus(ev) {
        ev.target.parentNode.className = "focused";
    }

    function blur(ev) {
        ev.target.parentNode.className = "";
    }
}