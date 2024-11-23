"use strict"

import { Pila } from './classes/Pila.js';
import { introduzco, obtengo } from './modules/scriptPila.js';

// OBJETOS
// ***** PILA *****
export let colada = new Pila();
export const PRENDAS = ['CAMISA', 'PANTALÓN', 'CAMISETA', 'CANZONCILLO', 'CALCETINES', 'CHAQUETA', 'BUFANDA', 'SUDADERA', 'CHALECO', 'ABRIGO'];
export const CESTA_COLADA = 10; // ¿Cuánta ropa admite la cesta de la colada?  
export let ultPrenda = "";

window.onload = function () {
    // ACCIONES
    // ***** PILA *****
    document.getElementById("introducir").addEventListener("click", introduzco);
    document.getElementById("obtener").addEventListener("click", obtengo);
    
}
