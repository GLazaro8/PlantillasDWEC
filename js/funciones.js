"use strict"

/**
* Función que muestra el formulario de login y oculta el contenido principal
*/
function mostrarLogin() {
    login.style.display = "block" ;
    contenido.style.display = "none" ;
    logoutButton.style.display = "none" ;
    loginMessage.style.display = "none" ;
}

/**
* Función que maneja el login exitoso
*/
function loginExitoso() {
    loginMessage.style.display = "block" ;
    loginMessage.style.color = "green" ;
    loginMessage.innerText = "Bienvenid@!" ;
    setCookie("loggedIn", "true", 1);
    
}

/**
* Función que maneja el login fallido
*/
function loginFallido() {
    loginMessage.style.display = "block" ;
    loginMessage.style.color = "red" ;
    loginMessage.innerText = "Usuario o contraseña incorrectos, pruebe de nuevo." ;
    loginForm.reset() ; // se puede quitar (resetea el formulario en caso de error)
}

/**
* Función que maneja el proceso de logout (cerrar sesión)
*/
function logout() {
    eraseCookie("loggedIn");
    mostrarLogin();
    loginForm.reset();
    loginMessage.innerText = "Hasta la próxima!" ;
    loginMessage.style.display = "block" ;
    loginMessage.style.color = "green" ;
}

