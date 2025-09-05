// day6.js
// Solución para el reto #7DaysOfCode - Día 6: Eliminación de elementos de arrays

const prompt = require('prompt-sync')();

const listaCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: [],
    otros: []
};

function mostrarLista() {
    console.log("\n📋 Lista de compras actual:");
    let vacia = true;
    for (const categoria in listaCompras) {
        if (listaCompras[categoria].length > 0) {
            console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaCompras[categoria].join(", ")}`);
            vacia = false;
        }
    }
    if (vacia) console.log("(La lista está vacía)");
}

function eliminarElemento(nombre) {
    let eliminado = false;
    for (const categoria in listaCompras) {
        const index = listaCompras[categoria].indexOf(nombre);
        if (index !== -1) {
            listaCompras[categoria].splice(index, 1);
            eliminado = true;
            console.log(`✅ "${nombre}" fue eliminado de la categoría ${categoria}.`);
            break;
        }
    }
    if (!eliminado) {
        console.log(`⚠️ No fue posible encontrar "${nombre}" en la lista.`);
    }
}

console.log("🛒 Bienvenido a tu lista de compras (con opción de eliminar)!\n");

while (true) {
    mostrarLista();

    const accion = prompt("\n¿Quieres agregar (a), eliminar (e) un alimento o salir (s)? ").toLowerCase();

    if (accion === "s") break;

    if (accion === "a") {
        const alimento = prompt("¿Qué alimento deseas agregar?: ").trim();
        const categoria = prompt("¿En qué categoría encaja? (frutas/lacteos/congelados/dulces/otros): ").toLowerCase();

        if (listaCompras.hasOwnProperty(categoria)) {
            listaCompras[categoria].push(alimento);
        } else {
            console.log("⚠️ Categoría no válida. Se agregará en 'otros'.");
            listaCompras.otros.push(alimento);
        }
    } else if (accion === "e") {
        // Solo permitir eliminar si hay algo en la lista
        let totalItems = Object.values(listaCompras).reduce((acc, arr) => acc + arr.length, 0);
        if (totalItems === 0) {
            console.log("⚠️ No puedes eliminar porque la lista está vacía.");
            continue;
        }
        const aEliminar = prompt("Escribe el nombre exacto del alimento que deseas eliminar: ").trim();
        eliminarElemento(aEliminar);
    } else {
        console.log("⚠️ Opción no válida. Intenta de nuevo.");
    }
}

console.log("\n📦 Lista final:");
mostrarLista();
console.log("\n✅ Programa finalizado. ¡Hasta la próxima!");
