// Confirma o Login
function confirmLogin() {
	let uName = document.getElementById("username");
	let pWord = document.getElementById("pword");
	if(uName.value != "" && pWord.value != "") {
    	let x = window.alert("Login realizado com sucesso!");
    	/*setTimeout( () => {
        	window.opener.postMessage("Hello index", "*");
    	}, 1000);*/
    	mainPage.postMessage("resposta", "*");
    	window.close();
    }
    //window.postMessage('logar', 'index.html');

}

var mainPage;

function receiveMessage(event) {
	//window.alert("mensagem recebida: " + event.data);
	mainPage = event.source;
}

window.addEventListener("message", receiveMessage, false);