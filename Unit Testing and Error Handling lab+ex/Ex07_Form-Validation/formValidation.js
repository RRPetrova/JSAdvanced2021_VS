function validate() {
    let usernameField = document.querySelector("#username");
    let mailField = document.querySelector("#email");
    let passField = document.querySelector("#password");
    let passConfirmField = document.querySelector("#confirm-password");

    let companyCheckBox = document.querySelector("#company");
    let companyInfo = document.querySelector("#companyInfo");
    let compNumField = document.querySelector("#companyNumber");

    let div = document.querySelector("#valid");
    let valid;

    companyCheckBox.addEventListener("change", () => {
        
        if (companyCheckBox.checked) {
            companyInfo.style.display = "block";
            valid = false;
        } else {
            companyInfo.style.display = "none";
        }
    });


    document.querySelector("#submit").addEventListener("click", submit);

    function submit(ev) {
        valid = true;
        ev.preventDefault();
        if (companyCheckBox.checked) {
            if (compNumField.value > 9999 || compNumField.value < 1000 || compNumField.value == "" ) {
                compNumField.style.borderColor = "red";
                valid = false;
            } else {
                compNumField.style.borderColor = "none";
            }
        }

        if (!/^[A-Za-z0-9]{3,20}$/.test(usernameField.value)) {
            usernameField.style.borderColor = "red";
            valid = false;
        } else {
            usernameField.style.borderColor = "none";
        }

        if (!/(.)*@(.)*\.(.)*/.test(mailField.value)) {
            mailField.style.borderColor = "red";
            valid = false;
        } else {
            mailField.style.borderColor = "none";
        }


        if (!/^[\w]{5,15}$/.test(passField.value)) {
            passField.style.borderColor = "red";
            valid = false;
        } else {
            passField.style.borderColor = "none";
        }

        if (passConfirmField.value !== passField.value ||
             passConfirmField.value == "" || !/^[\w]{5,15}$/.test(passConfirmField.value)) {
            passField.style.borderColor = "red";
            passConfirmField.style.borderColor = "red";
            valid = false;
        } else {
            passField.style.borderColor = "none";
            passConfirmField.style.borderColor = "none";
        }

        if (usernameField.value == "" || mailField.value == "" ||
            passField.value == "" || passConfirmField.value == "") {
            valid = false;
        } 

        valid ? div.style.display = "block" : div.style.display = "none";



    }
}