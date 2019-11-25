//Site em js
function enableLogin() {
    var winx = window.open("login.html", 'pagina',
    "width=350, height=255, top=100, left=110, scrollbars=no " );
}

function confirmForm() {
    let x = window.alert("Login realizado com sucesso!");
    window.close();
}

function recolor(butNumber) {
    let arr2 = [];
    arr2.push(document.getElementById("botaologin"));
    arr2.push(document.getElementById("botaocadastro"));
    arr2.push(document.getElementById("botaoCalc"));

    arr2[butNumber];
}

function toggle(boolean) {
    if(boolean){
        return false;
    }
    return true;
}

function togglediv(number){
    //funciona mas funciona errado
    let arr = [];
    arr.push(document.getElementById("Domesticos"));
    arr.push(document.getElementById("Residuos"));
    arr.push(document.getElementById("Rodados"));
    
    arr[number].hidden = toggle(arr[number].hidden);
}