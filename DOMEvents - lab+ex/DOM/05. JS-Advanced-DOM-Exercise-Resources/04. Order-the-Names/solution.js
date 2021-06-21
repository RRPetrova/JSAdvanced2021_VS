function solve() {
    let input = document.querySelector("article input");
    let liEleements = Array.from(document.querySelector("ol").children);
    let btn = document.getElementsByTagName("button")[0];

    btn.addEventListener("click", () => {
        let nameLower = input.value.toString().toLowerCase();
        let fLettNum = Number(nameLower.charCodeAt(0)) - 97;

        if (liEleements[fLettNum].textContent != "") {
            liEleements[fLettNum].textContent += (", ");
        }
        liEleements[fLettNum].textContent += (nameLower.charAt(0).toUpperCase() + nameLower.slice(1));
        input.value = "";
    })
}