"use strict"

/**
* Función que maneja el login exitoso
*/
function loginExitoso() {
    loginMessage.style.display = "block" ;
    loginMessage.style.color = "green" ;
    loginMessage.innerText = "Bienvenid@!"
    setCookie("loggedIn", "true", 1);
    setTimeout(function() {
        window.location.replace("./ejercicios/index.html");
    }, 1000);
}

/**
* Función que maneja el login fallido
*/
function loginFallido() {
    loginMessage.style.display = "block" ;
    loginMessage.style.color = "red" ;
    loginMessage.innerText = "Usuario o contraseña incorrectos, pruebe de nuevo." ;
    loginForm.reset() ; 
}

logoutButton.addEventListener("click", logout) ;

/**
* Función que maneja el proceso de logout (cerrar sesión)
*/
function logout() {
    eraseCookie("loggedIn");
    alert("Hasta la próxima!") ;
    window.location.replace("../login.html") ;
}

function comprobarSesion() {
    const cookieSesion = getCookie("loggedIn") ;
    if (!cookieSesion) {
        window.location.href = "./login.html" ;
    } 
}

function verificarSesionYRedirigir() {
    const cookie = getCookie("loggedIn");

    // Si la cookie no existe o está vacía, redirigir al login
    if (!cookie) {
        window.location.href = "../login.html";
    } else {
      // Verificar si la cookie ha expirado (aquí deberías implementar la lógica para comprobar la fecha de expiración)
      // Por ejemplo, si almacenas la fecha de expiración en la cookie, puedes hacer algo como:
        const fechaExpiracion = new Date(cookie.split("|")[1]); // Suponiendo que la fecha está separada por "|"
        const ahora = new Date();

        if (ahora > fechaExpiracion) {
        // Si la cookie ha expirado, borrarla y redirigir
            eraseCookie("loggedIn");
            window.location.href = "../login.html";
        }
    }
}

window.onload = verificarSesionYRedirigir;

