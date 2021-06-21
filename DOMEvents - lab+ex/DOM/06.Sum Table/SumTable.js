function sumTable() {
    const rows = Array.from(document.querySelectorAll("table tr"))
        .slice(1, -1);

    document.getElementById("sum").textContent = rows.reduce((sum, row) => {
        return Number(sum) + Number(row.lastElementChild.textContent);
    },0);

}