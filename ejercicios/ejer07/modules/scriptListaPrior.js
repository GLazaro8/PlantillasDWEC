// ***** LISTA CON PRIORIDAD *****
import { toDo, TAREAS, MAX_TAREAS } from '../mainPila.js';
import { generaAleatorioEnteros, generaAleatorioLetras } from './aleatorio.js';

export function anadoPrior() {
    let tarea = generaAleatorioEnteros(0, 9);
    let posicion = generaAleatorioEnteros(0, toDo.tamano()); 

    if (toDo.tamano() == MAX_TAREAS) {
        document.getElementById("resListaPrior").innerHTML = "DEBERÍAS EMPEZAR A HACER LAS TAREAS";;
    } else {
        toDo.enlistar(TAREAS[tarea], posicion);
        document.getElementById("resListaPrior").innerHTML = "QUEDA POR HACER: <br />" + toDo.devolver();
    }
}

export function eliminoPrior() {
    if (toDo.vacio()) {
        document.getElementById("resListaPrior").innerHTML = "NO HAY MÁS TAREAS QUE HACER";
    } else {
        toDo.desenlistar(toDo.posicionMayor().posicion);
        document.getElementById("resListaPrior").innerHTML = "QUEDA POR HACER: <br />" + toDo.devolver() + ":<br />";
        document.getElementById("resListaPrior").innerHTML += "LA SIGUIENTE TAREA ES :<br />" + toDo.ojear(toDo.posicionMayor().posicion);
    }
}