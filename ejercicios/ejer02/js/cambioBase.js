
function convertir() {
    const numeroDecimal = parseInt(document.getElementById('numero1').value);
    const baseSeleccionada = parseInt(document.getElementById('base').value);

    const resultado = numeroDecimal.toString(baseSeleccionada).toUpperCase();

    mostrarResultado(resultado, `El cambio a base ${baseSeleccionada} es: `);
    
}

function mostrarResultado(resultado, mensaje) {
    document.getElementById('resultado').textContent = resultado;
    document.getElementById('mensaje').textContent = mensaje;
    document.getElementById('resultado').style.display = "block" ;
    document.getElementById('resultado').style.backgroundColor = "#72e09e" ;
}