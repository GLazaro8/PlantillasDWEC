'use strict';

function grabarDato(nombre, valor) {
    console.log("Grabando dato en Session Storage...");
    if (nombre && valor) {
        sessionStorage.setItem(nombre, valor);
    }
    mostrarDatos();
}
