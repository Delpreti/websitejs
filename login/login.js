// Confirma o Login
function confirmLogin() {
	let uName = document.getElementById("username");
	let pWord = document.getElementById("pword");
	if(uName.value != "" && pWord.value != "") {
    	let x = window.alert("Login realizado com sucesso!");
    	window.close();
    }
    //window.postMessage('logar', 'index.html');
}