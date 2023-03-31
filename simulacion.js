


const n = 1000;

const arr = new Array(n);

for (let i = 0; i < n; i++) {
  arr[i] = Math.random();
  //   console.log(arr[i]);
}


const min = Math.min(...arr);
console.log("minimo: ", min);

const max = Math.max(...arr);
console.log("max: ", max);


arr.sort((a, b) => a - b);

// Calcular la función de distribución acumulada (CDF) empírica
const ecdf = (x) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= x) {
      count++;
    } else {
      break;
    }
  }
  return count / n;
};

// Calcular el estadístico D de Kolmogorov-Smirnov
let D = 0;
for (let i = 0; i < n; i++) {

  const x = arr[i];
  const d1 = Math.abs(ecdf(x) - (i + 1) / n);
  const d2 = Math.abs((i + 1) / n - ecdf(x - 1e-10));
  D = Math.max(D, d1, d2);
}

// Calcular el valor crítico del estadístico D para el nivel de significancia alpha
const alpha = 0.05;
const D_critico = Math.sqrt(-0.5 * Math.log(alpha / 2)) / Math.sqrt(n);
console.log("confianza porcentual:", (1 - D) * 100)
if (D <= D_critico) {
  console.log("Los datos siguen una distribución uniforme.");
} else {
  console.log("Los datos no siguen una distribución uniforme.");
}

const histo = {
  "0.0": 0,
  "0.1": 0,
  "0.2": 0,
  "0.3": 0,
  "0.4": 0,
  "0.5": 0,
  "0.6": 0,
  "0.7": 0,
  "0.8": 0,
  "0.9": 0
}

for (let i = 0; i < arr.length; i++) {
  histo[arr[i].toString().substring(0, 3)] += 1;

}

for (const item in histo) {
  console.log(item + ":", histo[item]);
}


