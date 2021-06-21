function solve() {
   let shoppField = document.querySelector(".shopping-cart");
   let outputField = document.querySelector("textarea");

   let cart = [];
   shoppField.addEventListener("click", (ev) => {

      if (ev.target.tagName == "BUTTON" &&
         ev.target.className == "add-product") {

         let product = ev.target.parentNode.parentNode;
         let title = product.querySelector(".product-title").textContent;
         let price = Number(product.querySelector(".product-line-price").textContent);
         cart.push({ title, price });

         outputField.value += (`Added ${title} for ${price.toFixed(2)} to the cart.\n`)
      }
   });

   document.querySelector(".checkout").addEventListener("click", () => {
      let asdas = [];
      let sum = 0;
      cart.forEach(p => {
         asdas.push(p.title);
         cart.forEach(p => sum += Number(p.price))
      });
         outputField.value += (`You bought ${([...new Set(asdas)]).join(", ")} for ${sum.toFixed(2)}.`)
      })

   }