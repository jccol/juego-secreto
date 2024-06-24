let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
     return;
}
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento("p" , `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        //El usuario no acerto.
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento("p" , "El numero secreto es menor");
        }else {
            asignarTextoElemento("p" , "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();

    }
    return;
}

function limpiarCaja() {
   document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    //si ya sorteamos todos los numero cerramos el juego
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p" , "Ya se sortearon todos los numers posibles");
    }else {

    //si el numero generado esta incluido en la lista hcemos una operacion o si no hacemos otra

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

        }else {
        listaNumerosSorteados.push(numeroGenerado)  
         return numeroGenerado;  
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1" , "Juego del numero secreto!");
    asignarTextoElemento("p" , `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalos de numero
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled" , "ture");
}

condicionesIniciales();

