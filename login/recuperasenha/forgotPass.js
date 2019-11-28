// Confirma a recuperacao de senha
function confirmPassword() {
	let email = document.getElementById("email");
	if(email.value != "") {
    	window.alert("Um e-mail de recuperação foi enviado.");
    }
    //window.close(); Não tem muito motivo pra fechar o pop-up nesse caso
}