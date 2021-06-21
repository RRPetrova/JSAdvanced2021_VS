function encodeAndDecodeMessages() {
    let messageField = document.querySelectorAll('textarea')[0];
    let receivedMessageField = document.querySelectorAll('textarea')[1];

    let btns = Array.from(document.querySelectorAll("button"));
    btns.forEach(b => b.addEventListener("click", encrDecr));

    function encrDecr(ev) {
        if (ev.target.textContent === "Encode and send it") {
            let original = messageField.value;
            let decr = "";
            Array.from(original).forEach(l => decr += String.fromCharCode(l.charCodeAt(0) + 1));
            receivedMessageField.value = decr;
            messageField.value = "";
        } 
         if (ev.target.textContent === "Decode and read it") {
            let decr = receivedMessageField.value;
            let original = ""
            Array.from(decr).forEach(l => original += String.fromCharCode(l.charCodeAt(0) - 1));
            receivedMessageField.value = original;
          //  receivedMessageField.value = "";
        }
    }
}
