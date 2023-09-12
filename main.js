alert("Bienvenido a mi simulador!")
const secretNumber = Math.floor(Math.random() * 25 ) + 1
let attempts = 0;

function checkGuess() {
    const userGuess = Number(document.getElementById('guess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 25) {
        document.getElementById('mensaje').textContent = 'Por favor, ingresa un número entre 1 y 25.';
    } else {
        attempts++;
        if (userGuess === secretNumber) {
            document.getElementById('mensaje').textContent = `¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
            document.getElementById('guess').setAttribute('disabled', 'true');
        } else if (userGuess < secretNumber) {
            document.getElementById('mensaje').textContent = 'El numero es mayor. intente de nuevo!.';
        } else {
            document.getElementById('mensaje').textContent = 'El número es menor. Intenta de nuevo.';
        }
    }
}