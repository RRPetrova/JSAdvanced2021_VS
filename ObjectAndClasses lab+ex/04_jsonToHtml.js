function solve(input) {

    let parsedRows = JSON.parse(input);
    let tab = "   ";
    let row = parsedRows[0];

    let html = "<table>\n" + tab;

    html += `<tr>${Object.keys(row)
        .map(x => `<th>${x}</th>`)
        .join('')}</tr>`;

    parsedRows.forEach(e => {
        html += "\n" + tab + "<tr>";
        let vals = [];
        //   console.log(typeof (Object.values(e)));
        for (const val of Object.values(e)) {
            //  console.log(val);
            vals.push(("" + val)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;"));
        }
        //  console.log(vals);
        html += (`<td>${vals.join('</td><td>')}</td>`);
        html += "</tr>";
    });

    html += "\n</table>";
    return html;
}
console.log(solve(
    ['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']
))