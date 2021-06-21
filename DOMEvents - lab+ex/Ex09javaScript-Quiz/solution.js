function solve() {
  Array.from(document.querySelectorAll("p"))
    .forEach(p => p.addEventListener("click", choice));

  let rightAnswersArray = ["onclick", "JSON.stringify()",
    "A programming API for HTML and XML documents"];
  let countRightAnsw = 0;
  let indexSection = 0;

  function choice(ev) {
    if (rightAnswersArray.includes(ev.target.textContent)) {
      countRightAnsw++;
    }

    let allSections = document.querySelectorAll("section");
    let currSection = allSections[indexSection];
    currSection.style.display = "none";

    if (allSections[indexSection + 1] !== undefined) { //indS > 2
      let nextSection = allSections[indexSection + 1];
      nextSection.style.display = "block";
      indexSection++;
    } else {
      document.querySelector("#results").style.display = "block";

      if (countRightAnsw === 3) {
        document.querySelector("#results h1").textContent = "You are recognized as top JavaScript fan!";
      } else {
        document.querySelector("#results h1").textContent = `You have ${countRightAnsw} right answers`;
      }

    }
  }


}
