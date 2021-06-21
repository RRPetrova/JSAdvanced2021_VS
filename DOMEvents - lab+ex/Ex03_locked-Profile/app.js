function lockedProfile() {
    let bts = Array.from(document.querySelectorAll("button"));
    bts.forEach(b => b.addEventListener("click", clicked));

    function clicked(ev) {
        if (ev.target.tagName == "BUTTON") {
            let info = ev.target.parentNode.querySelectorAll("div")[0];
            let btn = ev.target;

            if (ev.target.parentNode.querySelector('input[type="radio"]:checked')
                .value != "lock") {

                if (btn.textContent === "Show more") {
                    info.style.display = "block";
                    btn.textContent = "Hide it";
                } else if (btn.textContent === "Hide it") {
                    info.style.display = "none";
                    btn.textContent = "Show more";
                }
            }
        }
    }
}