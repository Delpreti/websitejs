// Confirma o cadastro
function confirmCadastro() {

	let uName = document.getElementById("username");
	let pWord = document.getElementById("pword");
	let apWord = document.getElementById("pwordrepeat");
	if(uName.value != "" && pWord.value != "" && apWord.value != "") {
		if(pWord.value != apWord.value) {
			window.alert("Dados invalidos");
			return;
		}
    	window.alert("Cadastro realizado com sucesso!");
    	window.location.href = "index.html";
    }
}