function validate() {
    let field = document.querySelector("body input");
    console.log(field.value);

    field.addEventListener("change", changed);

    function changed() {
        if (!/[a-z.]+@[a-z]+\.[a-z]+/gm.test(field.value)) {
            field.classList.add("error");
        } else {
            field.removeAttribute("class");
        }
    }
}