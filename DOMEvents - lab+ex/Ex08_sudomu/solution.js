function solve() {
    let inputFields = Array.from(document.querySelectorAll("tbody input"));
    document.querySelector("tfoot").addEventListener("click", check);

    function check(ev) {
        if (ev.target.tagName === "BUTTON") {
            let res = document.querySelector("#check").children[0];
            //  console.log(ev.target.textContent)
            if (ev.target.textContent === "Quick Check") {
                let eq = true;

                inputFields.forEach(f => {
                    if(f.value > 3 || f.value < 1) {
                        eq = false;
                          
                    }
                });
                let rowSum = +inputFields[0].value + +inputFields[1].value + +inputFields[2].value;
                for (let i = 3; i < inputFields.length - 3; i += 3) {
                    let currRowSum = +inputFields[i].value + +inputFields[i + 1].value + +inputFields[i + 2].value;
                    if (currRowSum !== rowSum || currRowSum > 9 || currRowSum == 0) {
                        eq = false;
                        break;
                    }
                }
                if (eq === true) {
                    for (let i = 0; i < inputFields.length - 6; i++) {
                        let colSum = +inputFields[i].value + +inputFields[i + 3].value + +inputFields[i + 6].value;
                        if (colSum !== rowSum || colSum > 9) {
                            eq = false;
                            break
                        }
                    }
                }

               console.log(document.querySelectorAll("tbody td input")[0].value);
               console.log(document.querySelectorAll("tbody td input")[1].value);
               console.log(document.querySelectorAll("tbody td input")[2].value);
               console.log(document.querySelectorAll("tbody td input")[3].value);
               console.log(document.querySelectorAll("tbody td input")[4].value);
               console.log(document.querySelectorAll("tbody td input")[5].value);
               console.log(document.querySelectorAll("tbody td input")[6].value);
               console.log(document.querySelectorAll("tbody td input")[7].value);
               console.log(document.querySelectorAll("tbody td input")[8].value);
               
                if (eq === true) {
                    res.textContent = "You solve it! Congratulations!";
                    res.style.color =  "green";
                    document.querySelector("#exercise").children[0].style.border = "2px solid green"
                } else {
                    res.textContent = "NOP! You are not done yet...";
                    res.style.color =  "red";
                    document.querySelector("#exercise").children[0].style.border = "2px solid red"
                }
            }
            if (ev.target.textContent === "Clear") {
                inputFields.forEach(f => f.value = "");
                res.textContent = "";
                document.querySelector("#exercise").children[0].style.border = ""
            }
        }
    }

}