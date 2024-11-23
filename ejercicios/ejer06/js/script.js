'use strict';

// Variables globales
let datos = [];
let solicitudDB, bd, canalBD;
let nombreBD = "DATOS";
let versionBD = 1;
let tablaBD = "datos";

// Conectar a la base de datos IndexedDB
solicitudDB = indexedDB.open(nombreBD, versionBD);
solicitudDB.onerror = function (event) {
    console.error(`IndexedDB error: ${event.target.errorCode}`);
};
solicitudDB.onsuccess = function (event) {
    console.info('Conexión satisfactoria');
    bd = event.target.result;
};
solicitudDB.onupgradeneeded = function (event) {
    console.info('Base de datos creada');
    bd = event.target.result;
    let registros = bd.createObjectStore(tablaBD, { keyPath: "id", autoIncrement: true });
    registros.createIndex("nombre", "nombre", { unique: false });
    registros.createIndex("edad", "edad", { unique: false });
    registros.oncompleted = function (event) {
        console.info('Almacen de datos creado');
    };
};

// Mostrar datos almacenados
mostrarDatos();

// Función para obtener un personaje aleatorio de la API
async function obtenerPersonajeAleatorio() {
    try {
        const randomId = Math.floor(Math.random() * 898) + 1; // ID aleatorio entre 1 y 898
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}/`);

        if (!response.ok) {
            throw new Error('No se pudo obtener el Pokémon');
        }

        const data = await response.json();

        const personaje = {
            numero: data.id,
            nombre: data.name,
            imagen: data.sprites.front_default, // Imagen frontal del Pokémon
            tipo: data.types.map(type => type.type.name).join(', ') // Tipos del Pokémon
        };

        console.log('Personaje obtenido:', personaje);
        grabarDato(personaje.numero, personaje.nombre, personaje.imagen, personaje.tipo);
    } catch (error) {
        console.error('Error al obtener el personaje: ', error);
    }
}


// Función para obtener hasta 5 personajes de la API
async function obtenerCincoPersonajes() {
    try {
        const response = await indexedDB.open(nombreBD, versionBD);
        response.onsuccess = function (event) {
            bd = event.target.result;
            canalBD = bd.transaction(tablaBD, "readonly").objectStore(tablaBD);
            const request = canalBD.getAll();
            request.onsuccess = async function (event) {
                const registros = event.target.result;

                if (registros.length >= 20) {
                    alert("No puedes agregar más de 20 Pokémon.");
                    return;
                }

                const cantidad = Math.min(5, 20 - registros.length); // Asegura que no se excedan 20
                for (let i = 0; i < cantidad; i++) {
                    await obtenerPersonajeAleatorio();
                }
            };
        };
    } catch (error) {
        console.error('Error al obtener personajes: ', error);
    }
}


// Añadir los listeners de los botones
document.getElementById('obtener-aleatorio').addEventListener('click', function () {
    obtenerPersonajeAleatorio(); // Obtiene un Pokémon aleatorio
});

document.getElementById('obtener-cinco').addEventListener('click', function () {
    obtenerCincoPersonajes(); // Obtiene 5 Pokémon aleatorios
});

// Función para grabar un dato en IndexedDB
function grabarDato(numero, nombre, imagen, tipo) {
    console.log(`Grabando datos: numero=${numero}, nombre=${nombre}, tipo=${tipo}`);
    solicitudDB = indexedDB.open(nombreBD, versionBD);
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
        const request = canalBD.put({ numero, nombre, imagen, tipo });
        request.onsuccess = function () {
            console.log('Dato guardado en IndexedDB');
            mostrarDatos(); // Actualiza la tabla
        };
        request.onerror = function (event) {
            console.error(`Error al guardar el dato: ${event.target.errorCode}`);
        };
    };
}


// Función para borrar un dato de IndexedDB
function borrarDato(id) {
    console.log("Borrando datos...");
    solicitudDB = indexedDB.open(nombreBD, versionBD);
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
        canalBD.delete(id);
    };
    mostrarDatos();
}

// Función para mostrar los datos almacenados
function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = ""; // Limpiar tabla antes de mostrar nuevos datos
    solicitudDB = indexedDB.open(nombreBD, versionBD);
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readonly").objectStore(tablaBD);
        const request = canalBD.getAll();
        request.onsuccess = function (event) {
            const registros = event.target.result;
            console.log("Datos recuperados de IndexedDB:", registros);

            if (registros.length === 0) {
                cuerpo.innerHTML = "<tr><td colspan='5'>No hay datos disponibles.</td></tr>";
                return;
            }

            registros.forEach((registro) => {
                let linea = document.createElement("tr"),
                    campoNumero = document.createElement("td"),
                    campoNombre = document.createElement("td"),
                    campoImagen = document.createElement("td"),
                    imagen = document.createElement("img"),
                    campoTipo = document.createElement("td"),
                    campoBorrar = document.createElement("td"),
                    botonBorrar = document.createElement("button");

                // Asignar datos a las celdas
                campoNumero.textContent = registro.numero;
                campoNombre.textContent = registro.nombre;

                // Imagen
                imagen.src = registro.imagen;
                imagen.alt = registro.nombre;
                imagen.width = 50;
                imagen.height = 50;
                campoImagen.appendChild(imagen);

                // Tipos
                campoTipo.textContent = registro.tipo;

                // Botón Borrar
                botonBorrar.textContent = "Borrar";
                botonBorrar.className = "borrar";
                botonBorrar.addEventListener('click', function () {
                    borrarDato(registro.id);
                });

                campoBorrar.appendChild(botonBorrar);

                // Añadir celdas a la fila
                linea.appendChild(campoNumero);
                linea.appendChild(campoNombre);
                linea.appendChild(campoImagen);
                linea.appendChild(campoTipo);
                linea.appendChild(campoBorrar);

                // Añadir fila al cuerpo de la tabla
                cuerpo.appendChild(linea);
            });
        };
        request.onerror = function (event) {
            console.error('Error al recuperar los datos:', event.target.errorCode);
        };
    };
}





