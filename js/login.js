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

    const submitButton = loginForm.querySelector('input[type="submit"]');

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let usuario = document.getElementById("username").value ;
        let contrasena = document.getElementById("password").value ;
        let formulario = document.getElementById("login") ;
        let contenido = document.getElementById("contenido") ;
        let errorMessage = document.getElementById("errorMessage");

        if(usuario === "gonzalo" && contrasena === "123456") {
            setTimeout(function() {}, 2000);
            formulario.style.display = "none"; 
            errorMessage.style.display = "none" ;
            contenido.style.display = "flex";
        }else{
            errorMessage.style.display = "block" ;
        }
        
    } )


