function solve() {
   let btn = document.querySelector("#send");
   let textInput = document.querySelector("#chat_input");

   btn.addEventListener("click", () => {
      //parent div
      let messages = document.querySelector("#chat_messages");
  //create div
      let newDiv = document.createElement("div");
      newDiv.classList.add("message");
      newDiv.classList.add("my-message");
      newDiv.textContent = textInput.value;

      messages.appendChild(newDiv);
      textInput.value = "";
   })
}


