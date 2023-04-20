function generarNumerosAleatoriosErlang(n) {
    const k = 3;
    const lambda = 2;

    // Generar dos secuencias de números aleatorios uniformes
    const secuencia1 = [];
    const secuencia2 = [];
    for (let i = 0; i < n; i++) {
        secuencia1.push(Math.random());
        secuencia2.push(Math.random());
    }

    // Función de distribución acumulada (CDF) de la distribución Erlang
    const cdf = x => {
        let sumatoria = 0;
        for (let n = 0; n < k; n++) {
            sumatoria += (Math.pow(lambda * x, n) / factorial(n));
        }
        return 1 - Math.exp(-lambda * x) * sumatoria;
    }

    // Función inversa de la CDF
    const inversaCDF = u => {
        let x = 0;
        while (cdf(x) < u) {
            x += 0.0001; // Aumentar el valor de x por pequeños incrementos hasta encontrar el valor deseado
        }
        return x;
    }

    // Generar la secuencia de números aleatorios aplicando la convolución y la inversa de la CDF
    const resultado = [];
    for (let i = 0; i < n; i++) {
        const u = secuencia1[i];
        const v = secuencia2[i];
        resultado.push(inversaCDF(u * v));
    }

    return resultado;
}

// Función para calcular el factorial de un número
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

const DIST = document.getElementById('dist')

// Generar los números aleatorios Erlang utilizando el algoritmo anterior
const numerosAleatorios = generarNumerosAleatoriosErlang(1000);
console.log(numerosAleatorios)

// Definir los datos para el histograma
const data = [
    {
        x: numerosAleatorios,
        type: 'histogram'
    }
];

// Definir el layout del gráfico
const layout = {
    title: 'Histograma de números aleatorios Erlang',
    xaxis: { title: 'Valor' },
    yaxis: { title: 'Frecuencia' }
};

// Crear el gráfico utilizando Plotly.js
Plotly.newPlot(DIST, data, layout);




// const histo = {}
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         histo[i.toString() + "." + j.toString()] = 0;

//     }
// }

// for (let i = 0; i < randomNumbers.length; i++) {
//     histo[randomNumbers[i].toString().substring(0, 3)] += 1;

// }


// Plotly.newPlot(DIST, [{
//     x: Object.keys(histo),
//     y: Object.values(histo),
//     type: 'bar',
//     name: 'Erlang Distribution'
// }]);

