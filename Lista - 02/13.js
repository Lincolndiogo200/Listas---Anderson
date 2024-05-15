// 13.Implemente um jogo de adivinhação onde o computador gera um número
// aleatório entre 1 e 100 e o usuário tem que adivinhar qual é em até 10 tentativas.
// Verifique se cada palpite do usuário está correto, menor ou maior que o número
// secreto. Exiba mensagens informando o resultado de cada tentativa e forneça
// pistas (menor/maior) para ajudar o usuário. Para gerar um número aleatório entre
// 0 e 100 em JavaScript podemos usar Math.floor(Math.random() * 101), onde
// Math.random() retorna um valor entre 0 (inclusive) e 1 (exclusivo), que é
// multiplicado por 101 para incluir o 100, e Math.floor() arredonda o resultado
// para o número inteiro mais próximo.

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarTentativa() {
  tentativas++;
  const tentativaUsuario = parseInt(document.getElementById("tentativa").value);
  const resultadoElement = document.getElementById("resultado");

  if (
    isNaN(tentativaUsuario) ||
    tentativaUsuario < 1 ||
    tentativaUsuario > 100
  ) {
    resultadoElement.textContent =
      "Por favor, insira um número válido entre 1 e 100.";
  } else {
    if (tentativaUsuario === numeroSecreto) {
      resultadoElement.textContent = `Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa(s)`;
    } else if (tentativaUsuario < numeroSecreto) {
      resultadoElement.textContent = "Tente um número maior.";
    } else {
      resultadoElement.textContent = "Tente um número menor.";
    }

    if (tentativas === 10 && tentativaUsuario !== numeroSecreto) {
      resultadoElement.textContent = `Suas 10 tentativas acabaram. O número secreto era ${numeroSecreto}. Tente novamente!`;
      document.getElementById("tentativa").disabled = true;
    }
  }
}
