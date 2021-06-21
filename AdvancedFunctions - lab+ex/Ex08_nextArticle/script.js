function getArticleGenerator(articles) {
    let contDiv = document.querySelector("#content");

    function disp() {
        let el = articles.shift();
        if (el != undefined) {
            let art = document.createElement("article");
            art.textContent = el;

            contDiv.appendChild(art);
        }
    }
    return disp;

}
