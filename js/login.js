"use strict"

function login() {

    const usuarioCorrecto = "Gonzalo" ;
    const contCorrecta = "123456" ;

    let usuario = prompt("Por favor, ingrese su nombre de usuario:", "Gonzalo") ;

    if(!usuario) {
        alert("Usuario incorrecto, pruebe otra vez.") ;
        login() ;
        return ;
    }
    
    if(usuario === usuarioCorrecto) {
        let contrasena = prompt("Introduzca la contraseña:", "123456") ;

        if (contrasena === contCorrecta) {
            alert("Bienvenido!.") ;
            document.body.style.display = "block" ;
        } else {
            alert("Contraseña incorrecta.") ;
            login() ;
        }
    }else {
        alert("Nombre de usuario incorrecto.");
        login() ;
    }

}

login() ;


