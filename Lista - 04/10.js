// 10.Usando funções, crie um programa que solicita dois números ao usuário, calcula
// sua média e exibe o resultado.

const solicitarNumero = (mensagem) => {
  let numero = parseFloat(prompt(mensagem));
  while (isNaN(numero)) {
    alert("Por favor, insira um número válido.");
    numero = parseFloat(prompt(mensagem));
  }
  return numero;
};

const calcularMedia = (num1, num2) => (num1 + num2) / 2;

const executarPrograma = () => {
  // Solicita dois números ao usuário
  const numero1 = solicitarNumero("Digite o primeiro número:");
  const numero2 = solicitarNumero("Digite o segundo número:");

  const media = calcularMedia(numero1, numero2);

  alert("A média dos dois números é: " + media);
};

executarPrograma();
