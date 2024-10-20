"use strict"

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const logoutButton = document.getElementById("logoutButton");

// Manejo del formulario de inicio de sesión
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // No redirigimos si ya hay una sesión activa
        if (localStorage.getItem("loggedIn") === "true") {
            window.location.replace("./ejercicios/index.html"); // Si el usuario está logueado, mostramos el contenido principal    
        } else {
            const usuario = document.getElementById("username").value;
            const contrasena = document.getElementById("password").value;

            if (usuario === "gonzalo" && contrasena === "123456") {
                loginExitoso();
            } else {
                loginFallido();
            }
        }
    });
}

/**
 * Función que maneja el login exitoso
 */
function loginExitoso() {
    loginMessage.style.display = "block";
    loginMessage.style.color = "green";
    loginMessage.innerText = "¡Bienvenid@!";
    localStorage.setItem("loggedIn", "true");
    setTimeout(function() {
        window.location.replace("./ejercicios/index.html");
    }, 1000);
}

/**
 * Función que maneja el login fallido
 */
function loginFallido() {
    loginMessage.style.display = "block";
    loginMessage.style.color = "red";
    loginMessage.innerText = "Usuario o contraseña incorrectos, pruebe de nuevo.";
    loginForm.reset();
}

/**
 * Función que maneja el proceso de logout (cerrar sesión)
 */
function logout() {
    localStorage.removeItem("loggedIn");
    alert("¡Hasta la próxima!");
    window.location.replace("../login.html");
}

/**
 * Verifica si la sesión está activa y redirige si es necesario
 */
function verificarSesionYRedirigir() {
    const sesionActiva = localStorage.getItem("loggedIn");

    // Redirigir a login si no hay sesión activa y no estamos en login.html
    if (!sesionActiva && !window.location.href.includes('login.html')) {
        window.location.href = "../login.html";
    }
}

// Llama a la verificación de sesión en el evento onload
window.onload = verificarSesionYRedirigir;

// Manejo del evento de logout solo si el botón está presente
if (logoutButton) {
    logoutButton.addEventListener("click", function(event) {
        event.preventDefault();
        logout();
    });
}


