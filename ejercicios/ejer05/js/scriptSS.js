'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const nombre = document.getElementById("nombre");
    const valor = document.getElementById("valor");
    const grabar = document.getElementById("guardar");

    mostrarDatos(); // Mostrar los datos iniciales

    grabar.addEventListener("click", function (evento) {
        evento.preventDefault(); // Evitar recarga del formulario
        grabarDato(nombre.value, valor.value); // Guardar dato en Session Storage
        nombre.value = ""; // Limpiar campo
        valor.value = ""; // Limpiar campo
    });
});
