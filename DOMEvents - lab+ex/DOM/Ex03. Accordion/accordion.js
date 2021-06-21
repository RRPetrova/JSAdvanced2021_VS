function toggle() {
    let button = document.querySelector(".button");

    let text = document.getElementById("extra");

    if(text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
    button.textContent = button.textContent == "More" ? "Less" : "More";
}