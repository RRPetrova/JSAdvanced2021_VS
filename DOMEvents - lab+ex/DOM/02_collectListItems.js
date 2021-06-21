function extractText() {
    let elems = document.getElementsByTagName("li");
    let textElems = [...elems].map(e=>e.textContent);
    const textArea = document.getElementById("result");
    textArea.value = textElems.join("\n");
}