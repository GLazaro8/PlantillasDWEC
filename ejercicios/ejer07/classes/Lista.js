"use strict"

export class Lista {
    constructor() {
        this.lista = new Array();
    }

    enlistar(elemento, indice) {
        return this.lista.splice(indice, 0, elemento);
    }

    desenlistar(indice) {
        return this.lista.splice(indice, 1);
    }

    vacio() {
        return (this.lista.length == 0);
    }

    tamano() {
        return this.lista.length;
    }

    devolver() {
        return this.lista;
    }

    ojear(indice) {
        return this.lista[indice];
    }

    ordenar() {
        return this.lista.sort();
    }

    posicionMayor() {
        let mayor = {
            posicion: 0,
            contenido: "",
        };
        if (!this.vacio()) {
            mayor.contenido = this.lista[mayor.posicion];
            for (let i = 1; i < this.lista.length; i++) {
                if (mayor.contenido < this.lista[i]) {
                    mayor.posicion = i;
                    mayor.contenido = this.lista[i];
                }
            }
        }
        return mayor;
    }
}