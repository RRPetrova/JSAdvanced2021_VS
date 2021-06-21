function addItem() {
    let text = document.querySelector("#newItemText");
    let val = document.querySelector("#newItemValue");

    let menu = document.getElementById("menu");
    let newOpt = document.createElement("option");
    newOpt.value = val.value;
    newOpt.innerText = text.value;
    menu.appendChild(newOpt);

    text.value = "";
    val.value = "";
}