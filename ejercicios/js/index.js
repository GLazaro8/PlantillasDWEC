"use strict"

// Selección del botón de logout
const logoutButton = document.getElementById("logoutButton");

/**
 * Función que maneja el proceso de logout (cerrar sesión)
 */
function logout() {
    localStorage.removeItem("loggedIn"); // Elimina la sesión
    alert("¡Hasta la próxima!"); // Mensaje de despedida
    window.location.replace("../login.html"); // Redirige al login
}

// Asegúrate de que el botón de logout está presente
if (logoutButton) {
    logoutButton.addEventListener("click", function(event) {
        event.preventDefault(); // Evita la acción por defecto del enlace
        logout(); // Llama a la función de logout
    });
}



