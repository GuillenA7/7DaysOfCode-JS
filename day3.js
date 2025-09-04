// day3.js
// Solución para el reto #7DaysOfCode - Día 3: Estructuras de Control de Flujo

const prompt = require('prompt-sync')();

console.log("Bienvenido al juego de elección de carrera en programación!\n");

// Paso 1: elegir área
const area = prompt("¿Quieres seguir hacia el área de Front-End o Back-End? (Escribe 'front' o 'back'): ").toLowerCase();

if (area === "front") {
    const frontChoice = prompt("¿Quieres aprender React o Vue? (Escribe 'react' o 'vue'): ").toLowerCase();
    console.log(`Excelente elección. Aprender ${frontChoice.charAt(0).toUpperCase() + frontChoice.slice(1)} es un gran paso en Front-End.`);
} else if (area === "back") {
    const backChoice = prompt("¿Quieres aprender C# o Java? (Escribe 'c#' o 'java'): ").toLowerCase();
    console.log(`Perfecto, dominar ${backChoice.toUpperCase()} es clave para un buen Back-End.`);
} else {
    console.log("Opción no válida. Continuaremos de todas formas...");
}

// Paso 2: especialización o fullstack
const camino = prompt("\n¿Quieres seguir especializándote en tu área o convertirte en Fullstack? (Escribe 'especializar' o 'fullstack'): ").toLowerCase();

if (camino === "especializar") {
    console.log("¡Genial! Convertirte en experto en tu área es una gran idea.");
} else if (camino === "fullstack") {
    console.log("¡Increíble! Ser Fullstack te permitirá ver todo el panorama del desarrollo.");
} else {
    console.log("Opción no reconocida, pero siempre es bueno seguir aprendiendo.");
}

// Paso 3: lista de tecnologías adicionales
let seguir = "ok";
while (seguir.toLowerCase() === "ok") {
    const nuevaTech = prompt("\nEscribe una tecnología que te gustaría aprender: ");
    console.log(`¡Excelente elección! ${nuevaTech} es una gran tecnología para explorar.`);
    seguir = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe 'ok' para sí o cualquier otra cosa para salir): ");
}

console.log("\nGracias por participar en este pequeño juego. ¡Sigue aprendiendo y creciendo como desarrollador!");
