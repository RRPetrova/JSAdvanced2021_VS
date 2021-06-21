function solve() {
  let input = document.querySelector("#input").value;
  let pars = input.split(".").filter(x => x != "");
  
  let newText = "";

  while(pars.length > 0) {
    newText += (`<p>${pars.splice(0,3).join(". ")}.</p>`);
  }
  let out = document.getElementById("output").innerHTML = newText;
}