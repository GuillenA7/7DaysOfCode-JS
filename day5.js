// day5.js
// Solución para el reto #7DaysOfCode - Día 5: Arrays y colecciones

const prompt = require('prompt-sync')();

// Creamos un objeto con categorías predefinidas
const listaCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: [],
    otros: []
};

console.log("🛒 Bienvenido a tu lista de compras!\n");

while (true) {
    const agregar = prompt("¿Quieres agregar un alimento a tu lista de compras? (sí/no): ").toLowerCase();

    if (agregar !== "sí" && agregar !== "si") break;

    const alimento = prompt("¿Qué alimento deseas agregar?: ").trim();
    const categoria = prompt("¿En qué categoría encaja? (frutas/lacteos/congelados/dulces/otros): ").toLowerCase();

    if (listaCompras.hasOwnProperty(categoria)) {
        listaCompras[categoria].push(alimento);
    } else {
        console.log("⚠️ Categoría no válida. Se agregará en 'otros'.");
        listaCompras.otros.push(alimento);
    }
}

console.log("\n📋 Lista de compras:");

for (const categoria in listaCompras) {
    const items = listaCompras[categoria];
    if (items.length > 0) {
        console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${items.join(", ")}`);
    } else {
        console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: (vacío)`);
    }
}

console.log("\n✅ Lista finalizada. ¡Buen provecho!");
