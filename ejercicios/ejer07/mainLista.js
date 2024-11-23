"use strict"

import { Lista } from './classes/Lista.js';
import { anado, elimino } from './modules/scriptLista.js';

// OBJETOS
// ***** LISTA *****
export let toDo = new Lista();
export const TAREAS = ['LLAMAR', 'RECOGER', 'ENTRENAR', 'ORDENAR', 'FREGAR', 'COMPRAR', 'LIMPIAR', 'ESTUDIAR', 'LAVARSE', 'COMIDA'];
export const MAX_TAREAS = 10; // ¿Cuántos coches puedo tener esperando en el taller?
export let ultTarea = "";

window.onload = function () {
    // ACCIONES
    // ***** LISTA *****
    document.getElementById("anadir").addEventListener("click", anado);
    document.getElementById("eliminar").addEventListener("click", elimino);
}
