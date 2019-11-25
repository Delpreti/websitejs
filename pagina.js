function enableLogin() {
    let x = document.getElementById("formLogin");
    x.hidden = false;
    var winx = window.open("login.html", 'pagina',
    "width=350, height=255, top=100, left=110, scrollbars=no " );
}

function confirmForm() {
    let x = window.alert("Login realizado com sucesso!");
}

function recolor() {
    let u = document.getElementById("botaologin");
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