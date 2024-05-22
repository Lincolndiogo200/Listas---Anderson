// 12.Crie uma calculadora que faça a adição, subtração, multiplicação ou divisão de
// dois números. Use funções separadas para cada operação e para exibir o
// resultado.

const adicao = (num1, num2) => num1 + num2;

const subtracao = (num1, num2) => num1 - num2;

const multiplicacao = (num1, num2) => num1 * num2;

const divisao = (num1, num2) => {
  if (num2 === 0) {
    return "Erro: divisão por zero";
  }
  return num1 / num2;
};

const exibirResultado = (resultado) => {
  alert("O resultado é: " + resultado);
};

const executarCalculadora = () => {
  const operacao = prompt(
    "Escolha uma operação:\n1. Adição\n2. Subtração\n3. Multiplicação\n4. Divisão"
  );

  if (operacao === null) {
    return;
  }

  const numero1 = parseFloat(prompt("Digite o primeiro número:"));
  const numero2 = parseFloat(prompt("Digite o segundo número:"));

  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, insira números válidos.");
    return;
  }

  let resultado;
  switch (operacao) {
    case "1":
      resultado = adicao(numero1, numero2);
      exibirResultado(resultado);
      break;
    case "2":
      resultado = subtracao(numero1, numero2);
      exibirResultado(resultado);
      break;
    case "3":
      resultado = multiplicacao(numero1, numero2);
      exibirResultado(resultado);
      break;
    case "4":
      resultado = divisao(numero1, numero2);
      if (typeof resultado === "number") {
        exibirResultado(resultado);
      } else {
        alert(resultado);
      }
      break;
    default:
      alert("Operação inválida. Por favor, escolha uma operação válida.");
  }
};

executarCalculadora();
