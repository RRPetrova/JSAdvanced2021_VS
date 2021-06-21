function makeReservation() {
    document.querySelector("#submit").addEventListener("click", submitFunc);
    let fullNameInputField = document.querySelector("#fullName");
    let emailInputField = document.querySelector("#email");
    let phoneNInputField = document.querySelector("#phoneNumber");
    let addressInputField = document.querySelector("#address");
    let PCInputField = document.querySelector("#postalCode");

    let btnEdit = document.querySelector("#edit");
    let btnContinue = document.querySelector("#continue");
    let ulPreview = document.querySelector("#infoPreview");



    function submitFunc(ev) {
        if (fullNameInputField.value != "" && emailInputField.value != "") {
            ulPreview.appendChild(e("li", "Name: " + fullNameInputField.value));
            fullNameInputField.value = "";
            ulPreview.appendChild(e("li", "E-mail: " + emailInputField.value));
            emailInputField.value = "";
            if (phoneNInputField.value != "") {
                ulPreview.appendChild(e("li", "Phone: " + phoneNInputField.value));
                phoneNInputField.value = "";
            }
            if (addressInputField.value != "") {
                ulPreview.appendChild(e("li", "Address: " + addressInputField.value));
                addressInputField.value = "";
            }
            if (PCInputField.value != "") {
                ulPreview.appendChild(e("li", "Postal Code: " + PCInputField.value));
                PCInputField.value = "";
            }
            document.querySelector("#submit").disabled = true;


            btnEdit.disabled = false;
            btnContinue.disabled = false;
            btnEdit.addEventListener("click", editFunc);
            btnContinue.addEventListener("click", contFunc);
        }

    }
    function editFunc() {
        document.querySelector("#submit").disabled = false;
        btnEdit.disabled = true;
        btnContinue.disabled = true;

        fullNameInputField.value = ulPreview.children[0].textContent.slice(ulPreview.children[0].textContent.indexOf(": ") + 2);
        emailInputField.value = ulPreview.children[1].textContent.slice(ulPreview.children[1].textContent.indexOf(": ") + 2);
        let arr = Array.from(ulPreview.children);

        for (let i = 1; i < arr.length; i++) {
            currLi = arr[i].textContent;
            if (currLi.includes("Phone")) {
                phoneNInputField.value = currLi.slice(currLi.indexOf(": ") + 2);
            }
            if (currLi.includes("Address")) {
                addressInputField.value = currLi.slice(currLi.indexOf(": ") + 2);
            }
            if (currLi.includes("Postal Code")) {
                PCInputField.value = currLi.slice(currLi.indexOf(": ") + 2);
            }
        }
        ulPreview.innerHTML = "";

    }


    function contFunc() {
        document.querySelector("#submit").disabled = true;
        btnEdit.disabled = true;
        btnContinue.disabled = true;

        let divCont = document.querySelector("#container");
        divCont.appendChild(e("h2", "Payment details"));
        let sel = e("select");
        sel.id = "paymentOptions";
        sel.className = "custom-select";
        sel.addEventListener("change", paymOpt, false);
        let opt1 = e("option", "Choose");
        opt1.setAttribute("selected", "")
        opt1.setAttribute("disabled", "")
        opt1.setAttribute("hidden", "")
        let opt2 = e("option", "Credit Card");
        opt2.value = "creditCard";
        let opt3 = e("option", "Bank Transfer");
        opt3.value = "bankTransfer"

        sel.add(opt1)
        sel.add(opt2)
        sel.add(opt3)
        divCont.appendChild(sel)

        let divExtra = e("div")
        divExtra.id = "extraDetails";
        divCont.appendChild(divExtra);

        function paymOpt(ev) {



            if (ev.target.value == "creditCard") {
                divExtra.innerHTML = ""
                //$('#extraDetails').append($(`<div class="inputLabel">Card Number<input></div><br><div class="inputLabel">Expiration Date<input></div><br><div class="inputLabel">Security Numbers<input></div><br>`));
                let newDiv1 = e("div", "Card Number")
                newDiv1.className = "inputLabel";
                newDiv1.appendChild(e("input"))

                let newDiv2 = e("div", "Expiration Date")
                newDiv2.className = "inputLabel";
                newDiv2.appendChild(e("input"))

                let newDiv3 = e("div", "Security Numbers")
                newDiv3.className = "inputLabel";
                newDiv3.appendChild(e("input"))

                divExtra.appendChild(newDiv1);
                divExtra.appendChild(e("br"));
                divExtra.appendChild(newDiv2);
                divExtra.appendChild(e("br"));
                divExtra.appendChild(newDiv3);
                divExtra.appendChild(e("br"));
                console.log(divExtra.innerHTML)
               console.log($('#extraDetails').html())
            } else {
                divExtra.innerHTML = ""
                console.log(ev.target.value);
                divExtra.innerHTML = `<p> You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890 </p>`;
                console.log(divCont.innerHTML)
                console.log(divExtra.innerHTML)
                //  let crP = e("p", "You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890")
                // divExtra.appendChild(crP)
                //     divCont.appendChild(divExtra)
                //divExtra.innerHTML = inner;
            }

            let chOutBtn = e("button", "Check Out");
            chOutBtn.id = "checkOut";
            divExtra.appendChild(chOutBtn)
            chOutBtn.addEventListener("click", chOutFunc);

            function chOutFunc() {
                let wrapp = document.querySelector("#wrapper");
                wrapp.innerHTML = "";
                wrapp.appendChild(e("h4", "Thanak you for your reservation"));
            }

        }


    }





    function e(type, text) {
        let res = document.createElement(type);
        res.textContent = text;
        return res;
    }
}