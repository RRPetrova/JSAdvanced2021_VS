function notify(message) {
  let divField = document.querySelector("#notification");
  divField.textContent = message;
  divField.style.display = "block";

  divField.addEventListener("click", hide);
  function hide(ev) {
    ev.target.style.display = "none";
  }
}