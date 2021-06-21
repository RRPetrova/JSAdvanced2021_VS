function search() {
   let towns = Array.from(document.querySelectorAll("ul li"));
   let input = document.querySelector("input").value;
   let res = document.getElementById("result");

   let matches = 0;
  for (const li of towns) {
     if (li.textContent.toLowerCase().includes(input.toLowerCase())) {
         li.style.fontWeight = "bold";
         li.style.textDecoration = "underline";
         matches ++;
     } else {
      li.style.fontWeight = "";
      li.style.textDecoration = "";
     }
  }
  res.textContent = (`${matches} matches found`)
}
