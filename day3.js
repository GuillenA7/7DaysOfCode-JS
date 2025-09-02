// Elección de área
const area = prompt("¿Quieres seguir hacia el área de Front-End o Back-End? (Escribe 'Front-End' o 'Back-End')");

let tecnologia = "";

if (area.toLowerCase() === "front-end") {
  tecnologia = prompt("¿Quieres aprender React o aprender Vue?");
} else if (area.toLowerCase() === "back-end") {
  tecnologia = prompt("¿Quieres aprender C# o aprender Java?");
} else {
  alert("No escribiste un área válida 😅");
}

// Especialización o Fullstack
const camino = prompt("¿Quieres seguir especializándote en tu área o convertirte en Fullstack? (Escribe 'Especializarse' o 'Fullstack')");

if (camino.toLowerCase() === "especializarse") {
  alert(`¡Excelente! Sigue profundizando en ${area} con ${tecnologia}. 🚀`);
} else if (camino.toLowerCase() === "fullstack") {
  alert("¡Genial! El camino Fullstack es desafiante pero muy gratificante. 💻");
} else {
  alert("Opción no válida.");
}

// Tecnologías adicionales
let continuar = "ok";

while (continuar.toLowerCase() === "ok") {
  const nuevaTec = prompt("¿Qué otra tecnología te gustaría aprender?");
  alert(`¡Qué buena elección! ${nuevaTec} es una tecnología muy interesante.`);
  continuar = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe 'ok' para continuar o cualquier otra cosa para salir)");
}

alert("¡Gracias por jugar y planear tu futuro en el desarrollo! 😃");
