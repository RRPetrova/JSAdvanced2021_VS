function addItem() {
    let field = document.getElementById("newItemText");
    let createLi = document.createElement("li");
    createLi.textContent = field.value;
    document.getElementById("items").appendChild(createLi);
    field.value = "";
}