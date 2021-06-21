function deleteByEmail() {
    let field = document.querySelector("label input");

    let rows = Array.from(document.querySelectorAll("tbody tr"));

    let deleted = false;
    for (let row of rows) {
        let mailContent = row.children[1].textContent;
        if (mailContent == field.value) {
            deleted = true;
           // row.parentNode.removeChild(row);
           row.remove();
        }
    }
    !deleted ?
        document.querySelector("#result").textContent = "Not found." :
        document.querySelector("#result").textContent = "Deleted.";

    field.value = "";
}