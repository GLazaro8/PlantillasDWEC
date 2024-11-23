'use strict';

function borrarDato(nombre) {
    console.log(`Borrando dato: ${nombre} de Session Storage...`);
    if (nombre) {
        sessionStorage.removeItem(nombre);
    }
    mostrarDatos();
}
