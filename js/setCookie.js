"use strict"

function setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000)); // Calculamos en milisegundos la expiración de la cookie
    console.log("Fecha de expiración calculada:", date.toUTCString());
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}