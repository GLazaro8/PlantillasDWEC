'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo"); // referencia al objeto HTML dónde voy a mostrar los datos
    cuerpo.innerHTML = ""; // Limpia la tabla antes de llenarla

    if (sessionStorage.length > 0) { // Verifica si hay datos en el Session Storage
        for (let i = 0; i < sessionStorage.length; i++) {
            let clave = sessionStorage.key(i); // Obtiene la clave actual

            // Filtra la clave generada por Live Server
            if (clave === "IsThisFirstTime_Log_From_LiveServer") {
                continue; // Salta esta clave y pasa a la siguiente
            }

            let valor = sessionStorage.getItem(clave); // Obtiene el valor asociado a la clave

            let linea = document.createElement("tr"), // Crea una fila
                campoNombre = document.createElement("td"), // Crea una celda para la clave
                campoValor = document.createElement("td"), // Crea una celda para el valor
                campoBorrar = document.createElement("td"), // Crea una celda para el botón borrar
                botonBorrar = document.createElement("button"); // Crea un botón

            // Llena las celdas
            campoNombre.textContent = clave;
            campoValor.textContent = valor;

            // Configura el botón de borrar
            botonBorrar.textContent = "Borrar";
            botonBorrar.addEventListener("click", function () {
                borrarDato(clave); // Llama a la función borrarDato con la clave correspondiente
            });

            // Añade las celdas a la fila
            campoBorrar.appendChild(botonBorrar);
            linea.appendChild(campoNombre);
            linea.appendChild(campoValor);
            linea.appendChild(campoBorrar);

            // Añade la fila al cuerpo de la tabla
            cuerpo.appendChild(linea);
        }
    } else {
        cuerpo.innerHTML = "No existen datos almacenados.";
    }
}

