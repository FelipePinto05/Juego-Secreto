let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento (elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
 
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }

        intentos++;
        limpiarCaja();
    }

    return
    }

function limpiarCaja (){

    let valorCaja = document.querySelector('#valorUsuario').value = '';
    }



function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;
    
    if(listaNumeroSorteados.length == numeroMaximo){

        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    }

    else{

    }
    
        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            } else {
                listaNumeroSorteados.push(numeroGenerado);
                return numeroGenerado;
        }

    }

function condicionesIniciales (){

    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

    }

function reiniciarJuego (){

    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    }


condicionesIniciales()