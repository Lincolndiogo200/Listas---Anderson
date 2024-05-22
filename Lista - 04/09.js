// 9. Reescreva todas as funções anteriores usando a estrutura de arrow function.

// 1
const exibirMensagem = () => {
  console.log("Olá, esta é uma mensagem exibida pela função exibirMensagem!");
};
exibirMensagem();
// 2
const calcularMedia = (num1, num2, num3) => {
  let media = (num1 + num2 + num3) / 3;
  alert("A média dos três números é: " + media);
};
calcularMedia(5, 10, 15);
// 3
const calcularQuadrado = (num) => num * num;
let resultado = calcularQuadrado(5);
console.log("O quadrado do número é: " + resultado);
// 4
const variavelGlobal = "Eu sou uma variável global";

const exemploEscopo = () => {
  const variavelLocal = "Eu sou uma variável local";
  console.log(variavelGlobal);
  console.log(variavelLocal);
};
exemploEscopo();
console.log(variavelGlobal);
try {
  console.log(variavelLocal);
} catch (error) {
  console.log("Erro: " + error.message);
}
// 5
const escopoBloco = () => {
  if (true) {
    let variavelBloco = "Eu sou uma variável de bloco";
    console.log("Dentro do bloco: " + variavelBloco);
  }
  try {
    console.log("Fora do bloco: " + variavelBloco);
  } catch (error) {
    console.log("Erro: " + error.message);
  }
};
escopoBloco();
