function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = Array.from(document.querySelectorAll("tbody tr")); 
     
      let searchInput = document.getElementById("searchField").value;

      for (const tr of rows) {
         if (tr.textContent.toLowerCase().includes(searchInput.toLowerCase())) {
            tr.setAttribute("class", "select");
         } else {
            tr.removeAttribute("class");
         }
      }

   }
}