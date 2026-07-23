const numero_aleatorio = Math.floor(Math.random() * 100) + 1;
const maximo_tentativas = 5;
let tentativas = maximo_tentativas;
let jogoAcabou = false;
console.log("Número secreto (para teste): " + numero_aleatorio);

document.getElementById("tentativas").textContent = "Tentativas disponíveis: " + tentativas;

function chutar() {
    if (jogoAcabou) return;

    let numero_usuario = parseInt(document.getElementById("numero_usuario").value);
    let resultado = document.getElementById("resultado");
    let tentativas_p = document.getElementById("tentativas");
    let button = document.getElementById("button");

    if (isNaN(numero_usuario) || numero_usuario < 1 || numero_usuario > 100) {
        resultado.textContent = "Palpite inválido. Escolha um número entre 1 e 100.";
        return;
    }

    while (tentativas > 0 && !jogoAcabou) {
        tentativas--;

        if (numero_usuario === numero_aleatorio) {
            resultado.textContent = "Você acertou!";
            jogoAcabou = true;
            button.disabled = true;
        } else if (tentativas === 0) {
            resultado.textContent = "Você perdeu! O número secreto era " + numero_aleatorio + ".";
            jogoAcabou = true;
            button.disabled = true;
        } else if (numero_usuario > numero_aleatorio) {
            resultado.textContent = "O número secreto é menor.";
        } else {
            resultado.textContent = "O número secreto é maior.";
        }

        break;
    }

    tentativas_p.textContent = "Tentativas disponíveis: " + tentativas;
}
