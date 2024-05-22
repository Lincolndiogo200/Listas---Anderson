// 14.Usando funções, escreva um programa que solicita ao usuário sua altura e peso
// e calcula o IMC. Em seguida, exibe o resultado e uma mensagem indicando se
// a pessoa está abaixo do peso, dentro do peso normal, com sobrepeso ou obesa

const lerAltura = () => {
  let altura = parseFloat(
    prompt("Digite sua altura em metros (por exemplo, 1.75):")
  );
  while (isNaN(altura) || altura <= 0) {
    alert("Por favor, insira uma altura válida em metros.");
    altura = parseFloat(
      prompt("Digite sua altura em metros (por exemplo, 1.75):")
    );
  }
  return altura;
};

const lerPeso = () => {
  let peso = parseFloat(prompt("Digite seu peso em quilogramas:"));
  while (isNaN(peso) || peso <= 0) {
    alert("Por favor, insira um peso válido em quilogramas.");
    peso = parseFloat(prompt("Digite seu peso em quilogramas:"));
  }
  return peso;
};

const calcularIMC = (altura, peso) => {
  return peso / (altura * altura);
};

const exibirResultadoIMC = (imc) => {
  let mensagem;
  if (imc < 18.5) {
    mensagem = "Você está abaixo do peso.";
  } else if (imc < 25) {
    mensagem = "Você está dentro do peso normal.";
  } else if (imc < 30) {
    mensagem = "Você está com sobrepeso.";
  } else {
    mensagem = "Você está obeso.";
  }
  alert("Seu IMC é: " + imc.toFixed(2) + ". " + mensagem);
};

const executarCalculadoraIMC = () => {
  const altura = lerAltura();
  const peso = lerPeso();
  const imc = calcularIMC(altura, peso);
  exibirResultadoIMC(imc);
};

executarCalculadoraIMC();
