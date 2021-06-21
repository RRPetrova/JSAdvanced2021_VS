function generateReport() {
    
    const checkboxesNames = Array.from(document.getElementsByTagName('input'));
    const colsChecked = [];
    let result = [];
    const rows = Array.from(document.getElementsByTagName("tr"));

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        let obj = {};
        for (let j = 0; j < row.children.length; j++) {
            const cell = row.children[j];
            //check if col is checked
            if (i == 0) {
                if (cell.children[0].checked) {
                    colsChecked.push(j);
                }
                continue;
            }
            //fill object
            if (colsChecked.includes(j)) {
                obj[checkboxesNames[j].name] = cell.textContent;
            }
        }
        if (i !== 0) {
            result.push(obj);
        }
    }
   // console.log(result);
    //output = JSON.stringify(result);
    document.getElementById("output").value = JSON.stringify(result);
}