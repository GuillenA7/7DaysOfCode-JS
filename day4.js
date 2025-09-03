// Genera un número aleatorio entre 0 y 10
const numeroSecreto = Math.floor(Math.random() * 11);

let intentos = 3;
let acerto = false;

while (intentos > 0) {
  const intento = prompt("Adivina el número (entre 0 y 10):");
  
  if (parseInt(intento) === numeroSecreto) {
    alert(`🎉 ¡Felicidades! Adivinaste el número secreto: ${numeroSecreto}`);
    acerto = true;
    break;
  } else {
    alert("❌ No es correcto, inténtalo de nuevo.");
  }
  
  intentos--;
}

if (!acerto) {
  alert(`😢 Se acabaron tus intentos. El número secreto era ${numeroSecreto}.`);
}
