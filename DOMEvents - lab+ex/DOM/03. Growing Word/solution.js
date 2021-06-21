function growingWord() {
  let colors = Array.from((document.getElementById("colors").children));
  let heading = document.querySelector("h1");
  if (!heading.style.fontSize) {
    heading.style.fontSize = "2px";


  } else {
    let size = parseInt(heading.style.fontSize) * 2;
    heading.style.fontSize = `${size}px`;
  }



  // console.log(col2);
  console.log(document.getElementsByTagName('p')[2]);

}