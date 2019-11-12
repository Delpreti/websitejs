//Site em js
function enableLogin() {
    let x = document.getElementById("formLogin");
    x.hidden = false;
}

function confirmForm() {
    let x = window.confirm("Login realizado com sucesso!");
}

function toggle(boolean) {
    if(boolean){
        return false;
    }
    return true;
}

function togglediv(number){
    //funciona mas funciona errado
    let x = document.getElementById("Domesticos");
    if(number == 1){
        x.hidden = toggle(x.hidden);
    }
}