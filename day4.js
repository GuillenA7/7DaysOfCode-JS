// day4.js
// Solución para el reto #7DaysOfCode - Día 4: Más loops y randomización

const prompt = require('prompt-sync')();

// Generar un número aleatorio entre 0 y 10
const numeroSecreto = Math.floor(Math.random() * 11);

console.log("🎯 Bienvenido al juego de adivinanza!");
console.log("He elegido un número entre 0 y 10. Tienes 3 intentos para adivinarlo.\n");

let intentos = 3;
let adivinado = false;

while (intentos > 0) {
    const intentoUsuario = parseInt(prompt(`Intento ${4 - intentos}/3 - Ingresa tu número: `));

    if (intentoUsuario === numeroSecreto) {
        console.log("🎉 ¡Felicidades! Adivinaste el número correctamente.");
        adivinado = true;
        break;
    } else {
        console.log("❌ No es el número.");
        intentos--;
    }
}

if (!adivinado) {
    console.log(`\n😔 Lo siento, no adivinaste. El número secreto era ${numeroSecreto}.`);
}

console.log("\nGracias por jugar. ¡Sigue practicando!");
