function suma() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const resultado = operando1 + operando2;
    mostrarResultado(resultado, "Resultado de la suma:");
}

function resta() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const resultado = operando1 - operando2;
    mostrarResultado(resultado, "Resultado de la resta:");
}

function multiplicacion() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const resultado = operando1 * operando2;
    mostrarResultado(resultado, "Resultado de la multiplicación:");
}

function division() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    if (operando2 === 0) {
        mostrarResultado("Error: División por cero", "Error");
    } else {
        const resultado = operando1 / operando2;
        mostrarResultado(resultado, "Resultado de la división:");
    }
}

function valorEntero() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const resultado = Math.floor(operando1);
    mostrarResultado(resultado, "Parte entera:");
}

function parteDecimal() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const resultado = operando1 - Math.floor(operando1);
    mostrarResultado(resultado, "Parte decimal:");
}

function factorial(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calcularFactorial() {
    const operando1 = parseFloat(document.getElementById('operando1').value);

    if (isNaN(operando1) || operando1 < 0) {
        mostrarResultado("Por favor, ingresa un número entero positivo.", "Error");
        document.getElementById('resultado').style.backgroundColor = "#FA6D64" ;
    } else {
        const resultadoFactorial = factorial(operando1);
        mostrarResultado(resultadoFactorial, `El factorial de ${operando1} es:`);
        document.getElementById('resultado').style.backgroundColor = "#72e09e" ;
    }
}

function mostrarResultado(resultado, mensaje) {
    document.getElementById('resultado').textContent = resultado;
    document.getElementById('mensaje').textContent = mensaje;
    document.getElementById('resultado').style.display = "block" ;
    document.getElementById('resultado').style.backgroundColor = "#72e09e" ;
}