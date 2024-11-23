"use strict"

export function generaAleatorioEnteros(inferior, superior) {
    return Math.floor(Math.random() * ((superior + 1) - inferior) + inferior); // INCLUYE EL RANGO SUPERIOR
}

export function generaAleatorioLetras() {
    let resultado;

    resultado = generaAleatorioEnteros(65, 122);

    while (resultado > 90 && resultado < 97) {
        resultado = generaAleatorioEnteros(inferior, superior);
    }
    return resultado;
}
