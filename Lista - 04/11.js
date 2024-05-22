// 11.Use funções para implementar um jogo de adivinhação onde o computador gera
// um número aleatório entre 1 e 100 e o usuário tem que adivinhar qual é em até
// 10 tentativas. Verifique se cada palpite do usuário está correto, menor ou maior
// que o número secreto. Exiba mensagens informando o resultado de cada
// tentativa e forneça pistas (menor/maior) para ajudar o usuário.

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const jogarJogoAdivinhacao = () => {
  const numeroSecreto = gerarNumeroAleatorio(1, 100);
  let tentativasRestantes = 10;

  alert(
    "Bem-vindo ao jogo de Adivinhação! Você tem 10 tentativas para adivinhar o número secreto entre 1 e 100."
  );

  while (tentativasRestantes > 0) {
    const palpite = parseInt(
      prompt(
        "Tentativa #" + (11 - tentativasRestantes) + ". Qual é o seu palpite?"
      )
    );

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
      alert("Por favor, insira um número válido entre 1 e 100.");
      continue;
    }

    if (palpite === numeroSecreto) {
      alert("Parabéns! Você acertou o número secreto: " + numeroSecreto);
      return;
    } else if (palpite < numeroSecreto) {
      alert("O número secreto é maior que " + palpite + ". Tente novamente.");
    } else {
      alert("O número secreto é menor que " + palpite + ". Tente novamente.");
    }

    tentativasRestantes--;
  }

  alert("Game Over! O número secreto era: " + numeroSecreto);
};

jogarJogoAdivinhacao();
