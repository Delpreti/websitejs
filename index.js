
// Abre a janela de Login
function goLogin() {
    var winx = window.open("login/login.html", 'pagina',
    "width=600, height=450, top=100, left=110, scrollbars=no " );

    setTimeout( () => {
        winx.postMessage("Hello login", "*");
    }, 1000);
    
}

function logar(bool){
    let m = document.getElementById("mode1");
    let n = document.getElementById("mode2");

    if(bool == true){
        m.style.display = "none";
        n.setAttribute("style","display:flex");
    } else {
        m.setAttribute("style","display:flex");
        n.setAttribute("style","display:none");  
    }
}

// funcao que altera a pagina quando o usuario realiza seu login
function receiveMessage(event) {
    logar(true);
}

window.addEventListener("message", receiveMessage, false);

// Abre a janela de cadastro
function goCadastro() {
    window.location.href = "cadastro.html";
}

// Funcao pra inverter booleanos
function tooggle(bool) {
    if(bool){
        return false;
    }
    return true;
}

// Funcao que able e fecha as abas da tableview
function togglediv(number) {

    // pega um array com as divs
    let arr = [];
    arr.push(document.getElementById("Domesticos"));
    arr.push(document.getElementById("Residuos"));
    arr.push(document.getElementById("Rodados"));   
    
    // pega um array com as setinhas das divs
    let imgarr = [];
    imgarr.push(document.getElementById("seta1"));
    imgarr.push(document.getElementById("seta2"));
    imgarr.push(document.getElementById("seta3")); 

    let angle;
    let goingDown;
    let zoom;
    
    if(arr[number].hidden == true) { // Se a div esta escondida
        zoom = 0;
        angle = 0;
        goingDown = true; // ela irá descer
    } else { // Se a div esta aparecendo
        angle = 90;
        zoom = 1;
        goingDown = false; // ela irá subir
    }

    // Se a div esta escondida, ela deixa de estar no momento do clique
    if(angle <= 0){
        arr[number].hidden = tooggle(arr[number].hidden);
    }

    function spin(bool) {

        // Incrementa o angulo da seta
        if(!bool) {
            angle -= 5;
            zoom -= 0.05;
        } else {
            angle += 5;
            zoom += 0.05;
        }

        // Rotaciona a seta e ajusta um pouco.
        imgarr[number].setAttribute("style","transform:rotate(" + angle + "deg) translateX(" + (angle/10) + "px)");
        // "Abre" a div
        arr[number].setAttribute("style","transform:scaleY(" + zoom +")");

        // Verifica se pode parar de girar
        if(angle >= 90 || angle <= 0) {
            clearInterval(timer);
        }

        if(angle <= 0){
            arr[number].hidden = tooggle(arr[number].hidden);
        }

    }

    // Chamamos a funcao spin(bool) a cada 10ms para executar a animacao de abrir e fechar a div
    var timer = setInterval(spin, 10, goingDown);
}

function dropMenu() {
    document.getElementById("Dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.user') && !event.target.matches('.profile')) {
    var dropdowns = document.getElementsByClassName("drop");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}