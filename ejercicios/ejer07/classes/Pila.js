"use strict"

import { Lista } from './Lista.js';

export class Pila extends Lista {
    constructor() {
        super();
    }

    apilar(elemento) {
        return super.enlistar(elemento, super.tamano());
    }

    desapilar() {
        return super.desenlistar(super.tamano() - 1);
    }

    vacio() {
        return super.vacio();
    }

    tamano() {
        return super.tamano();
    }

    ojear() {
        return super.ojear(super.tamano() - 1);
    }
}
