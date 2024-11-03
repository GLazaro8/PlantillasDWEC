// Genera matrices cuadradas con valores aleatorios dentro de un rango
function generateRandomMatrix(size, minValue, maxValue) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
        }
        matrix.push(row);
    }
    return matrix;
}

// Muestra una matriz en un contenedor específico
function displayMatrix(matrix, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    matrix.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        row.forEach(value => {
            const cell = document.createElement('div');
            cell.textContent = value;
            cell.style.border = '1px solid black';
            cell.style.padding = '5px';
            cell.style.margin = '1px';
            cell.style.textAlign = 'center';
            cell.style.width = '30px';
            cell.style.height = '30px';
            rowDiv.appendChild(cell);
        });
        container.appendChild(rowDiv);
    });
}

// Genera y muestra matrices A y B
function generateMatrices() {
    const size = parseInt(document.getElementById('matrixSize').value);
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);

    window.matrixA = generateRandomMatrix(size, minValue, maxValue);
    window.matrixB = generateRandomMatrix(size, minValue, maxValue);

    displayMatrix(window.matrixA, 'matrixAContainer');
    displayMatrix(window.matrixB, 'matrixBContainer');
}

// Suma matrices A y B
function sumMatrices() {
    const result = window.matrixA.map((row, i) =>
        row.map((value, j) => value + window.matrixB[i][j])
    );
    displayMatrix(result, 'resultContainer');
}

// Resta matrices A y B
function subtractMatrices() {
    const result = window.matrixA.map((row, i) =>
        row.map((value, j) => value - window.matrixB[i][j])
    );
    displayMatrix(result, 'resultContainer');
}

// Multiplica matrices A y B
function multiplyMatrices() {
    const size = window.matrixA.length;
    let result = Array.from({ length: size }, () => Array(size).fill(0));

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            for (let k = 0; k < size; k++) {
                result[i][j] += window.matrixA[i][k] * window.matrixB[k][j];
            }
        }
    }
    displayMatrix(result, 'resultContainer');
}
