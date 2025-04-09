//ejercicio4.js
//script que importa el modulo calculos.js y usa sus funciones para realizar sus operaciones 
const { sumar, restar, multiplicar, dividir } = require('./calculos.js'); 
console.log("Suma: ", sumar(5, 3)); 
console.log("Resta: ", restar(8, 6)); 
console.log("Multiplicación: ", multiplicar(3, 11));
 console.log("División: ", dividir(30, 5));
