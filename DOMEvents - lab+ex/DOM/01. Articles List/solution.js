function createArticle() {
	let titleInput = document.getElementById("createTitle");
	let contentInput = document.getElementById("createContent");

	if (titleInput.value != '' && contentInput.value != '') {
		let createField = document.createElement('article');
		let currTitle = document.getElementById("articles");
		currTitle.appendChild(createField);

		let createh3 = document.createElement("h3");
		let createPar = document.createElement("p");
		createField.appendChild(createh3);
		createField.appendChild(createPar);

		createh3.innerHTML = titleInput.value;
		createPar.innerHTML = contentInput.value;
		titleInput.value = "";
		contentInput.value = "";

	}
}