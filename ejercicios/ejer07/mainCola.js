"use strict"

import { Cola } from './classes/Cola.js';
import { llega, atiendo } from './modules/scriptCola.js';

// OBJETOS
// ***** COLA *****
export let taller = new Cola();
export const MATRICULAS = ['12345-ABC', '23456-BCD', '34567-CDE', '45678-DEF', '56789-EFG', '67890-FGH', '78901-GHI', '89012-HIJ', '90123-IJK', '98765-JKL'];
export const AFORO_TALLER = 10; // ¿Cuántos coches puedo tener esperando en el taller?
export let ultCoche = "";

window.onload = function () {
    // ACCIONES
    // ***** COLA *****
    document.getElementById("llegada").addEventListener("click", llega);
    document.getElementById("atender").addEventListener("click", atiendo);
}
