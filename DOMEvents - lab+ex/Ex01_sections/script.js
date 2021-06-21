function create(words) {
   let content = document.getElementById("content");

   words.forEach(w =>
      content.appendChild(createElDivP(w)));

   content.addEventListener("click", (ev) => {
      if (ev.target.tagName === "DIV" || ev.target.tagName === "P") {
         const p = ev.target.children[0]  || ev.target; 
         const visible  = p.style.display === "block";
         p.style.display = visible ? "none" : "block";
      }
   })

   function createElDivP(toAppend) {
      let createDiv = document.createElement("div");
      let createP = document.createElement("p");
      createP.textContent = toAppend;
      createP.style.display = "none";
      createDiv.appendChild(createP);
      return createDiv;
   }
}