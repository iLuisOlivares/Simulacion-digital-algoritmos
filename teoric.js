let k = 3; // Parámetro de forma de la distribución Erlang
let lambda = 2;
// Definir los valores de x para los cuales se desea calcular la probabilidad
const x_values = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3, 3.5, 4, 4.5, 5, 6];

// Calcular la probabilidad para cada valor de x utilizando la fórmula de Erlang
const probabilities = x_values.map(x => {
    const p = (math.pow(lambda, k) * math.pow(x, k - 1) * math.exp(-lambda * x)) / math.factorial(k - 1);
    return p;
});

const total_probability = math.sum(probabilities);

const TEORIC = document.getElementById('teoric')
console.log(x_values, probabilities);
Plotly.newPlot(TEORIC, [{
    x: x_values,
    y: probabilities,
    type: 'scatter',
    mode: 'lines',
    name: 'Teoric Erlang Distribution'
}]);



const data2 = [
    {
        x: numerosAleatorios,
        type: 'histogram',
        name: 'Distribución Erlang - convulacion'
    },
    {
        x: Array.from({ length: 101 }, (_, i) => i / 100),
        y: probabilities,
        type: 'scatter',
        mode: 'lines',
        line: {
            color: 'red',
            width: 2
        },
        name: 'Distribución teórica'
    }
];

const layout2 = {
    title: 'Histograma de números aleatorios Erlang',
    xaxis: { title: 'Valor' },
    yaxis: { title: 'Frecuencia' }
};

const TEORIC2 = document.getElementById('teoric2')
Plotly.newPlot(TEORIC2, data2, layout2);

