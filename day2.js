// day2.js
// Solución para el reto #7DaysOfCode - Día 2: Variables

const prompt = require('prompt-sync')();

// Preguntas al usuario
const nombre = prompt("¿Cuál es tu nombre? ");
const edad = prompt("¿Cuántos años tienes? ");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando? ");

// Mensaje final
console.log(`\nHola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

// Ejercicio opcional
const respuesta = prompt(`\n¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO: `);

if (respuesta == 1) {
    console.log("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (respuesta == 2) {
    console.log("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
    console.log("Respuesta no válida. Por favor ejecuta el programa de nuevo e ingresa 1 o 2.");
}