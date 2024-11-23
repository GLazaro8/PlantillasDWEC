"use strict";

// Importación de dependencias necesarias
import { taller, MATRICULAS, AFORO_TALLER } from '../mainCola.js';
import { generaAleatorioEnteros } from './aleatorio.js';

// Función para añadir coches a la cola
export function llega() {
    let matricula = generaAleatorioEnteros(0, 9); // Generar matrícula aleatoria
    
    if (taller.tamano() == AFORO_TALLER) {
        document.getElementById("resCola").innerHTML = "DEBERÍAS EMPEZAR A REPARAR LOS COCHES";
    } else {
        // Encolar el coche y actualizar la vista
        taller.encolar(MATRICULAS[matricula]);
        actualizarVistaCola();
    }
}

// Función para atender un coche
export function atiendo() {
    if (taller.vacio()) {
        document.getElementById("resCola").innerHTML = "NO HAY MÁS COCHES QUE REPARAR";
    } else {
        taller.desencolar();
        actualizarVistaCola();
    }
}

// Actualizar el contenido visual de #resCola
function actualizarVistaCola() {
    const resCola = document.getElementById("resCola");
    resCola.innerHTML = ""; // Limpiar contenido anterior

    if (taller.vacio()) {
        resCola.innerHTML = "NO HAY MÁS COCHES QUE REPARAR";
        return;
    }

    // Crear div contenedor para los elementos de la cola
    const contenedorCoches = document.createElement("div");
    contenedorCoches.classList.add("contenedor-coches"); // Clase opcional para personalización

    // Agregar cada coche de la cola como un div
    taller.devolver().forEach((matricula, index) => {
        const cocheDiv = document.createElement("div");
        cocheDiv.classList.add("lista-item"); // Aplicar estilo definido en CSS
        cocheDiv.innerHTML = `${index + 1}. 🚗 ${matricula}`; // Emoji y matrícula
        contenedorCoches.appendChild(cocheDiv);
    });

    // Mostrar el siguiente coche en la cola
    const siguienteCoche = document.createElement("div");
    siguienteCoche.innerHTML = `<strong>EL SIGUIENTE COCHE A REPARAR ES:</strong> 🚗 ${taller.ojear()}`;
    siguienteCoche.classList.add("siguiente-coche");

    // Añadir todo al contenedor #resCola
    resCola.appendChild(contenedorCoches);
    resCola.appendChild(siguienteCoche);
}
