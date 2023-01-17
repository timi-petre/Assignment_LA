const volum = document.getElementById('volum');

const r = +prompt('Valoarea razei: ', 2);
const H = +prompt('Valoarea inaltimii', 3);
const PI = 3.14;

let result = r ** 2 * PI * H;
volum.textContent = result;

console.log(result);
alert(`V = r^2 * π * H 
Volumul este: ${result}`);
