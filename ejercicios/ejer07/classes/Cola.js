import { Lista } from './Lista.js';

"use strict"

export class Cola extends Lista {
    constructor() {
        super();
    }

    encolar(elemento) {
        super.enlistar(elemento, super.tamano());
    }

    desencolar() {
        super.desenlistar(0);
    }

    vacio() {
        return super.vacio();
    }

    tamano() {
        return super.tamano();
    }

    ojear() {
        return super.ojear(0);
    }
}
