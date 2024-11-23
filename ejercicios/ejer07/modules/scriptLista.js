// ***** LISTA *****
import { toDo, TAREAS, MAX_TAREAS } from '../mainLista.js';
import { generaAleatorioEnteros, generaAleatorioLetras } from './aleatorio.js';

// Lista de emojis para asociar con tareas específicas
const emojisTareas = [
    "📞",  // LLAMAR
    "🧹",  // RECOGER
    "🏋️‍♂️", // ENTRENAR
    "🗂️",  // ORDENAR
    "🧽",  // FREGAR
    "🛒",  // COMPRAR
    "🧼",  // LIMPIAR
    "📚",  // ESTUDIAR
    "🚿",  // LAVARSE
    "🍽️"   // COMIDA
];

export function anado() {
    let tarea = generaAleatorioEnteros(0, 9);  // Generar índice aleatorio para la tarea
    let posicion = generaAleatorioEnteros(0, toDo.tamano());

    if (toDo.tamano() == MAX_TAREAS) {
        document.getElementById("resLista").innerHTML = "DEBERÍAS EMPEZAR A HACER LAS TAREAS 😅";
    } else {
        let tareaTexto = TAREAS[tarea];
        let emoji = emojisTareas[tarea];  // Obtener emoji correspondiente a la tarea
        toDo.enlistar(`${emoji} ${tareaTexto}`, posicion);  // Añadir tarea con emoji

        renderLista();  // Llamar a la función para renderizar la lista con el nuevo ítem
    }
}

export function elimino() {
    let posicion = generaAleatorioEnteros(0, toDo.tamano());

    if (toDo.vacio()) {
        document.getElementById("resLista").innerHTML = "NO HAY MÁS TAREAS QUE HACER 🚫";
    } else {
        toDo.desenlistar(posicion); // Eliminar una posición aleatoria
        renderLista();  // Llamar a la función para renderizar la lista tras eliminar un ítem
    }
}

// Función para renderizar la lista de tareas visualmente
function renderLista() {
    const resLista = document.getElementById("resLista");
    resLista.innerHTML = "";  // Limpiar el contenido actual antes de mostrarlo de nuevo

    if (toDo.vacio()) {
        resLista.innerHTML = "NO HAY MÁS TAREAS QUE HACER 🚫";
    } else {
        let tareasHTML = "<strong>QUEDA POR HACER:</strong> <br />"; 

        // Mostrar cada tarea con estilo como un item en la lista y añadir emoji
        toDo.devolver().forEach((tarea, index) => {
            tareasHTML += `
                <div class="lista-item" id="item-${index}">
                    <span>${tarea}</span>
                </div>
            `;
        });

        resLista.innerHTML = tareasHTML;
    }
}

