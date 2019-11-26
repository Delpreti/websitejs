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

function toggle(bool) {
    if(bool){
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


    let imgarr = [];
    imgarr.push(document.getElementById("seta1"));
    imgarr.push(document.getElementById("seta2"));
    imgarr.push(document.getElementById("seta3")); 

    let angle;

    if(!arr[number].hidden) {
        angle = 0;
    } else {
        angle = 90;
    }

    function spin(bool) {

        // Incrementa o angulo da seta
        if(bool) {
            angle -= 5;
        } else {
            angle += 5;
        }

        // Printa a seta rotacionada
        imgarr[number].setAttribute("style","transform:rotate(" + angle + "deg)");

        // Verifica se pode parar de girar
        if(angle >= 90 || angle <= 0) {
            clearInterval(timer);
        }
    }

    var timer = setInterval(spin, 10, arr[number].hidden);
}