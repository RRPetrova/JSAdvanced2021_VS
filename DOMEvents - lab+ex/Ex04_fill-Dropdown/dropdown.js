function addItem() {
    let textField = document.getElementById("newItemText");
    let valueField = document.getElementById("newItemValue");

     let menu = document.getElementById("menu");
     let createOption = document.createElement("option");
     createOption.textContent = textField.value;
     createOption.value = valueField.value;
     menu.appendChild(createOption);

    textField.value = "";
    valueField.value = "";
}