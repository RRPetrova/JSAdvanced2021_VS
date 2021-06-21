function solve() {
  let bts = Array.from(document.querySelectorAll("button"));
  bts.forEach(b => b.addEventListener("click", clicked));

  let boughtField = document.querySelectorAll("textarea")[1];

  function clicked(ev) {
    if (ev.target.textContent == "Generate") {
      let inputField = document.querySelectorAll("textarea")[0];
      let parsed = JSON.parse(inputField.value);

      // for (const pr of parsed) {
        
      
      // let row = document.createElement('tr');

      // let image = document.createElement('td')
      // image.innerHTML = `<img src ="${pr.img}">`;
      // row.appendChild(image);

      // let nametable = document.createElement('td');
      // let p = document.createElement('p');
      // p.textContent = pr.name;
      // nametable.appendChild(p);
      // row.appendChild(nametable);

      // let priceTable = document.createElement('td');
      // let p1 = document.createElement('p');
      // p1.textContent = pr.price;
      // priceTable.appendChild(p1);
      // row.appendChild(priceTable);

      // let decFac = document.createElement('td');
      // let p2 = document.createElement('p');
      // p2.textContent = pr.decFactor;
      // decFac.appendChild(p2);
      // row.appendChild(decFac);

      // let checkBox = document.createElement('td');
      // let chB = document.createElement('input');
      // chB.setAttribute('type', 'checkbox');
      // checkBox.appendChild(chB);
      // row.appendChild(checkBox);

      // document.querySelector("tbody").appendChild(row);
      // }



      parsed.forEach(pr => {
        let { name, img, price, decFactor } = pr;
        let htmlStr = `<tr>
                         <td><img src="${img}"></td>
                         <td><p>${name}</p></td>
                         <td><p>${price}</p></td>
                         <td><p>${decFactor}</p></td>
                        <td><input type="checkbox" /></td>
                     </tr>`

        document.querySelector("tbody").innerHTML += htmlStr;
      });
      inputField.value = "";

    }
    if (ev.target.textContent == "Buy") {
      let boxes = Array.from(document.querySelectorAll('input[type=checkbox]'));

      let boughtProdName = [];
      let boughtProdPrice = [];
      let boughtProdFact = [];
      boxes.forEach(ch => {
        //  console.log(ch.checked)
        if (ch.checked === true) {
          let rowChecked = ch.parentNode.parentNode;
          let data = rowChecked.querySelectorAll("p");
          boughtProdName.push(data[0].textContent);
          boughtProdPrice.push(Number(data[1].textContent));
          boughtProdFact.push(Number(data[2].textContent));
        }
      });
      let avg = boughtProdFact.reduce((a, b) => a + b, 0) / boughtProdFact.length;
      let tot = (boughtProdPrice.reduce((a, b) => a += b))
      let res = `Bought furniture: ${boughtProdName.join(", ")}\n`;
      res += `Total price: ${tot.toFixed(2)}\n`;
      res += `Average decoration factor: ${avg}`;
      boughtField.textContent = res;

    }
  }
}