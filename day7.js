// day7.js
// Solución para el reto #7DaysOfCode - Día 7: Funciones y calculadora

const prompt = require('prompt-sync')();

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "⚠️ No se puede dividir entre cero.";
    }
    return a / b;
}

function mostrarMenu() {
    console.log("\n🧮 Calculadora en JavaScript");
    console.log("1 - Sumar");
    console.log("2 - Restar");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir");
    console.log("5 - Salir");
}

while (true) {
    mostrarMenu();
    const opcion = prompt("Elige una opción: ");

    if (opcion === "5") {
        console.log("👋 Hasta la próxima");
        break;
    }

    const num1 = parseFloat(prompt("Ingresa el primer número: "));
    const num2 = parseFloat(prompt("Ingresa el segundo número: "));

    let resultado;

    switch (opcion) {
        case "1":
            resultado = sumar(num1, num2);
            break;
        case "2":
            resultado = restar(num1, num2);
            break;
        case "3":
            resultado = multiplicar(num1, num2);
            break;
        case "4":
            resultado = dividir(num1, num2);
            break;
        default:
            console.log("⚠️ Opción inválida, intenta de nuevo.");
            continue;
    }

    console.log(`🧾 Resultado: ${resultado}`);
}
