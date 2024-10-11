"use strict"

/******************************** Esta es la función con ventanas emergentes ************************************/
// function login() {

//     const usuarioCorrecto = "Gonzalo" ;
//     const contCorrecta = "123456" ;

//     let usuario = prompt("Por favor, ingrese su nombre de usuario:", "Gonzalo") ;

//     if(!usuario) {
//         alert("Usuario incorrecto, pruebe otra vez.") ;
//         login() ;
//         return ;
//     }
    
//     if(usuario === usuarioCorrecto) {
//         let contrasena = prompt("Introduzca la contraseña:", "123456") ;

//         if (contrasena === contCorrecta) {
//             alert("Bienvenido!.") ;
//             document.body.style.display = "block" ;
//         } else {
//             alert("Contraseña incorrecta.") ;
//             login() ;
//         }
//     }else {
//         alert("Nombre de usuario incorrecto.");
//         login() ;
//     }

// }

// login() ;

/******************************** Esta es la función con formulario ************************************/

    const loginForm = document.getElementById("loginForm") ;
    const loginMessage = document.getElementById("loginMessage") ;
    const login = document.getElementById("login") ;
    const contenido = document.getElementById("contenido") ;
    const logoutButton = document.getElementById("logoutButton") ;

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (getCookie("loggedIn") === "true") {
            window.location.replace("./ejercicios/index.html") ; // Si el usuario está logueado, mostramos el contenido principal    
        } else {

            let usuario = document.getElementById("username").value ;
            let contrasena = document.getElementById("password").value ;

            if(usuario === "gonzalo" && contrasena === "123456") {
                loginExitoso();
            }else{
                loginFallido() ;
            }
        }
    } )

