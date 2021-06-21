function addItem() {
    let field = document.querySelector("#newText");
    const liElem = createNewElThatEqualsInput("li", field.value);

    document.querySelector("#items").appendChild(liElem);
    const deleteBtn = createNewElThatEqualsInput("a", "[Delete]");
    deleteBtn.href = "#";
    
    deleteBtn.addEventListener("click", (ev) => {
        ev.target.parentNode.remove();
    })
    liElem.appendChild(deleteBtn);

    field.value = "";


    function createNewElThatEqualsInput(typeElement, input) {
        const createEl = document.createElement(typeElement);
        createEl.textContent = input;
        return createEl;
    }
}