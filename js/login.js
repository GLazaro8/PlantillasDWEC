"use strict";

// Variables del DOM
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const logoutButton = document.getElementById("logoutButton");

// Configuración de la base de datos IndexedDB
let db;
const request = indexedDB.open("LoginDB", 1);

// Manejo de la creación o actualización de la base de datos
request.onupgradeneeded = function(event) {
    db = event.target.result;
    if (!db.objectStoreNames.contains("sessionStore")) {
        db.createObjectStore("sessionStore", { keyPath: "key" });
    }
};

request.onsuccess = function(event) {
    db = event.target.result;
    verificarSesionYRedirigir();
};

request.onerror = function(event) {
    console.error("Error al abrir la base de datos:", event.target.error);
};

// Función para guardar el estado de la sesión en IndexedDB
function guardarSesion(key, value) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["sessionStore"], "readwrite");
        const store = transaction.objectStore("sessionStore");
        store.put({ key, value });

        transaction.oncomplete = () => resolve();
        transaction.onerror = (event) => reject(event.target.error);
    });
}

// Función para obtener el estado de la sesión de IndexedDB
function obtenerSesion(key) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["sessionStore"], "readonly");
        const store = transaction.objectStore("sessionStore");
        const request = store.get(key);

        request.onsuccess = () => {
            resolve(request.result ? request.result.value : null);
        };
        request.onerror = (event) => reject(event.target.error);
    });
}

// Función para eliminar el estado de la sesión de IndexedDB
function eliminarSesion(key) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["sessionStore"], "readwrite");
        const store = transaction.objectStore("sessionStore");
        store.delete(key);

        transaction.oncomplete = () => resolve();
        transaction.onerror = (event) => reject(event.target.error);
    });
}

// Manejo del formulario de inicio de sesión
if (loginForm) {
    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const sesionActiva = await obtenerSesion("loggedIn");
        if (sesionActiva === "true") {
            window.location.replace("./ejercicios/index.html");
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

// Función que maneja el login exitoso
async function loginExitoso() {
    loginMessage.style.display = "block";
    loginMessage.style.color = "green";
    loginMessage.innerText = "¡Bienvenid@!";
    await guardarSesion("loggedIn", "true");
    setTimeout(() => {
        window.location.replace("./ejercicios/index.html");
    }, 1000);
}

// Función que maneja el login fallido
function loginFallido() {
    loginMessage.style.display = "block";
    loginMessage.style.color = "red";
    loginMessage.innerText = "Usuario o contraseña incorrectos, pruebe de nuevo.";
    loginForm.reset();
}

// Función que maneja el proceso de logout (cerrar sesión)
async function logout() {
    await eliminarSesion("loggedIn");
    alert("¡Hasta la próxima!");
    window.location.replace("../login.html");
}

// Verifica si la sesión está activa y redirige si es necesario
async function verificarSesionYRedirigir() {
    const sesionActiva = await obtenerSesion("loggedIn");

    if (!sesionActiva && !window.location.href.includes('login.html')) {
        window.location.href = "../login.html";
    }
}

// Manejo del evento de logout solo si el botón está presente
if (logoutButton) {
    logoutButton.addEventListener("click", function(event) {
        event.preventDefault();
        logout();
    });
}



