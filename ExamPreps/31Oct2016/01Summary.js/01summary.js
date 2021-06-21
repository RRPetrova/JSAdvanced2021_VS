function summary(input) {
    let arr = [];

    for (const match of input.matchAll(/<strong>(.*?)<\/strong>/g)) {
        arr.push(match[1]);
    }
   let divHolder = document.querySelector(".holder")
    console.log(divHolder)
}



let text = `<div class="holder"> +
        <input type="button" id="generate" value="Generate Summary" /> 
            <div id="content"> 
                <p><strong>Important text. </strong>Not too important. <strong>Also useful info.</strong></p> 
                </div>
                </div>`
console.log(summary(
    text

))