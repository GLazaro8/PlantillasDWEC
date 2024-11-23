// ***** PILA *****
import { colada, PRENDAS, CESTA_COLADA } from '../mainPila.js';
import { generaAleatorioEnteros, generaAleatorioLetras } from './aleatorio.js';

const PRENDAS_EMOJIS = {
    "CAMISA": "👕",
    "PANTALÓN": "👖",
    "CAMISETA": "👕",
    "CANZONCILLO": "🩲",
    "CALCETINES": "🧦",
    "CHAQUETA": "🧥",
    "BUFANDA": "🧣",
    "SUDADERA": "👚",
    "CHALECO": "🦺",
    "ABRIGO": "🧥"
};

export function introduzco() {
    let prenda = generaAleatorioEnteros(0, 9);

    if (colada.tamano() == CESTA_COLADA) {
        document.getElementById("resPila").innerHTML = "DEBERÍAS EMPEZAR A LAVAR LA ROPA";
    } else {
        colada.apilar(PRENDAS[prenda]);

        let resPila = document.getElementById("resPila");
        resPila.innerHTML = ""; // Limpia el contenedor

        // Muestra todas las prendas restantes con emojis
        colada.devolver().forEach((prenda, index) => {
            let item = document.createElement("p");
            item.className = "lista-item";
            item.innerHTML = `${PRENDAS_EMOJIS[prenda] || "👗"} Prenda ${index + 1}: ${prenda}`;
            resPila.appendChild(item);
        });

        if (!colada.vacio()) {
            let siguientePrenda = document.createElement("p");
            siguientePrenda.innerHTML = `<strong>LA SIGUIENTE PRENDA A LAVAR ES :</strong><br /> ${PRENDAS_EMOJIS[colada.ojear()] || "👗"} ${colada.ojear()}`;
            resPila.appendChild(siguientePrenda);
        }
    }
}



export function obtengo() {
    let resPila = document.getElementById("resPila");

    if (colada.vacio()) {
        resPila.innerHTML = "NO HAY MÁS ROPA QUE LAVAR";
    } else {
        colada.desapilar();

        resPila.innerHTML = ""; // Limpia el contenedor

        // Muestra todas las prendas restantes con emojis
        colada.devolver().forEach((prenda, index) => {
            let item = document.createElement("p");
            item.className = "lista-item";
            item.innerHTML = `${PRENDAS_EMOJIS[prenda] || "👗"} Prenda ${index + 1}: ${prenda}`;
            resPila.appendChild(item);
        });

        if (!colada.vacio()) {
            let siguientePrenda = document.createElement("p");
            siguientePrenda.innerHTML = `<strong>LA SIGUIENTE PRENDA A LAVAR ES :</strong><br /> ${PRENDAS_EMOJIS[colada.ojear()] || "👗"} ${colada.ojear()}`;
            resPila.appendChild(siguientePrenda);
        } else {
            resPila.innerHTML = "NO HAY MÁS ROPA QUE LAVAR";
        }
    }
}

