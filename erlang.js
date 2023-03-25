// Definir los parámetros de la distribución Erlang
const k = 3; // forma de la distribución
const lambda = 2; // tasa de la distribución

// Generar 1000 números aleatorios utilizando el método de convolución
const n = 1000;
const randomNumbers = new Array(n);
for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
        sum += -1 / lambda * Math.log(Math.random());
    }
    randomNumbers[i] = sum;
}

// Imprimir los números aleatorios generados
console.log(randomNumbers);


const min = Math.min(...randomNumbers);
console.log("minimo: ", min);

const max = Math.max(...randomNumbers);
console.log("max: ", max);

const histo = {}
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        histo[i.toString() + "." + j.toString()] = 0;

    }
}

for (let i = 0; i < randomNumbers.length; i++) {
    histo[randomNumbers[i].toString().substring(0, 3)] += 1;

}

for (const item in histo) {
    console.log(item + ":", histo[item]);
}


