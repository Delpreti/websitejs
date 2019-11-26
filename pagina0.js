//Site em js
function enableLogin() {
    var winx = window.open("login.html", 'pagina',
    "width=600, height=500, top=100, left=110, scrollbars=no " );
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
    


    let imgarr = [];
    imgarr.push(document.getElementById("seta1"));
    imgarr.push(document.getElementById("seta2"));
    imgarr.push(document.getElementById("seta3")); 

    let angle;
    let goingDown;
    let slide;

    if(arr[number].hidden) {
        slide = 0;
        angle = 0;
        goingDown = true;
    } else {
        angle = 90;
        slide = 1;
        goingDown = false;
    }

    if(angle <= 0){
        arr[number].hidden = toggle(arr[number].hidden);
    }

    function spin(bool) {

        // Incrementa o angulo da seta
        if(bool) {
            angle -= 5;
            slide -= 0.06;
        } else {
            angle += 5;
            slide += 0.06;
        }

        // Printa a seta rotacionada
        imgarr[number].setAttribute("style","transform:rotate(" + angle + "deg) translateX(" + (angle/10) + "px)");
        arr[number].setAttribute("style","transform:scaleY(" + slide +")");

        // Verifica se pode parar de girar
        if(angle >= 90 || angle <= 0) {
            clearInterval(timer);
        }

        if(angle <= 0){
            arr[number].hidden = toggle(arr[number].hidden);
        }

    }

    var timer = setInterval(spin, 10, arr[number].hidden);
}