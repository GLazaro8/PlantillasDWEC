let intervalId;
let speed = 1000;

function transformText() {
    const text = document.getElementById('inputText').value;
    let transformedText = applyRandomTransformation(text);
    document.getElementById('outputText').innerText = transformedText;
}

function applyRandomTransformation(text) {
    const transformations = [
        toUpperCase,
        toLowerCase,
        capitalizeFirstLetter,
        capitalizeLastLetter,
        lowercaseFirstLetter,
        lowercaseLastLetter,
        uppercaseVowels,
        lowercaseVowels,
        uppercaseConsonants,
        lowercaseConsonants
    ];

    // Selecciona una transformación aleatoria
    const randomIndex = Math.floor(Math.random() * transformations.length);
    return transformations[randomIndex](text);
}

// Transformaciones específicas
function toUpperCase(text) {
    return text.toUpperCase();
}

function toLowerCase(text) {
    return text.toLowerCase();
}

function capitalizeFirstLetter(text) {
    return text.replace(/\b\w/g, char => char.toUpperCase());
}

function capitalizeLastLetter(text) {
    return text.replace(/\b\w+\b/g, word => 
        word.slice(0, -1) + word.slice(-1).toUpperCase()
    );
}

function lowercaseFirstLetter(text) {
    return text.replace(/\b\w/g, char => char.toLowerCase());
}

function lowercaseLastLetter(text) {
    return text.replace(/\b\w+\b/g, word => 
        word.slice(0, -1) + word.slice(-1).toLowerCase()
    );
}

function uppercaseVowels(text) {
    return text.replace(/[aeiou]/g, char => char.toUpperCase());
}

function lowercaseVowels(text) {
    return text.replace(/[AEIOU]/g, char => char.toLowerCase());
}

function uppercaseConsonants(text) {
    return text.replace(/[^aeiou\s\d\W]/g, char => char.toUpperCase());
}

function lowercaseConsonants(text) {
    return text.replace(/[^AEIOU\s\d\W]/g, char => char.toLowerCase());
}

// Funciones de control automático
function startAutoTransform() {
    stopAutoTransform(); // Detiene cualquier transformación previa antes de iniciar una nueva
    intervalId = setInterval(transformText, speed);
}

function stopAutoTransform() {
    clearInterval(intervalId);
}

function restartAutoTransform() {
    if (intervalId) {
        startAutoTransform();
    }
}
