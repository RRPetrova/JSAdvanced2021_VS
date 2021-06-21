function solve() {
   let authorField = document.querySelector("#creator");
   let titleField = document.querySelector("#title");
   let categField = document.querySelector("#category");
   let contField = document.querySelector("#content");
   let btn = Array.from(document.querySelectorAll("button"));
   btn.forEach(b => b.addEventListener("click", createFunc));

   let h2Post = Array.from(document.querySelectorAll("section h2"));
   // console.log(h2Post);

   function createFunc(ev) {
      ev.preventDefault();
      //   console.log(categField.value)
      let arrSext = Array.from(document.querySelectorAll("section"))
      let fS = arrSext[1];

      let crArt = e("article");
      let crh1 = e("h1", titleField.value);
      let crP = e("p", "Category:")
      let crStr = e("strong", categField.value);
      crP.appendChild(crStr);
      let crP2 = e("p", "Creator:");
      let crStr2 = e("strong", authorField.value);
      crP2.appendChild(crStr2);
      let crp3 = e("p", contField.value);

      let crdiv = e("div");
      crdiv.className = "buttons";

      let crBtn1 = e("button", "Delete");
      crBtn1.className = "btn delete";
      crBtn1.addEventListener("click", delFunc);
      let crBtn2 = e("button", "Archive");
      crBtn2.className = "btn archive";
      crBtn2.addEventListener("click", archFunc);

      crdiv.appendChild(crBtn1);
      crdiv.appendChild(crBtn2);

      crArt.appendChild(crh1)
      crArt.appendChild(crP)
      crArt.appendChild(crP2)
      crArt.appendChild(crp3)
      crArt.appendChild(crdiv)
      fS.appendChild(crArt);


      function delFunc(ev) {
         let parentArt = ev.target.parentNode.parentNode;
         parentArt.parentNode.removeChild(parentArt)
      }

      function archFunc(event) {
         let secr = document.querySelector(".archive-section ol");

         let currArt = event.target.parentNode.parentNode;
         let currH1 = currArt.querySelector("h1")
         let crLi = e("li", currH1.textContent);
         secr.appendChild(crLi);
         // console.log(Array.from(archSect.getElementsByTagName("li")))
         //section => ol => li
         //            ol => li
         //             ol => li 
         Array.from(secr.getElementsByTagName("li"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => secr.appendChild(li)
            )



         currArt.parentNode.removeChild(currArt)
         //console.log(currArt);

      }



   }

   function e(type, text) {
      let res = document.createElement(type);
      res.textContent = text;
      return res;
   }


}
