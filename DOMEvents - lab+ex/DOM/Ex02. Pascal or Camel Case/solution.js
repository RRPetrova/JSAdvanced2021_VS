function solve() {
  let firstParam = (document.getElementById("text").value).toLowerCase();
  let second = document.getElementById("naming-convention").value;
  

  let arr = firstParam.split(" ");
  if (second == "Camel Case") {
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }
    res = arr.join("");

  } else if (second == "Pascal Case") {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }
    res = arr.join("");

  } else {
    res = "Error!";
  }
  return document.getElementById("result").textContent += res;
}
