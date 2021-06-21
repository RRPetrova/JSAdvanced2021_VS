function extract(id) {
    const cont = document.getElementById("content").textContent;
    
    const regex = (/\((.*?)\)/g);
    let match = regex.exec(cont);
    let arr = [];
    while (match != null) {
        arr.push(match[1]);
        match = regex.exec(cont);
    }
    return arr.join("; ");
}