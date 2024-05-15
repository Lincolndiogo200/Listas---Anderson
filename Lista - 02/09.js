// 9. Escreva um programa que peça ao usuário sua altura e peso, calcule o IMC
// (Índice de Massa Corporal) e classifique de acordo com a tabela da OMS (abaixo do peso, peso normal, sobrepeso, obesidade). Exiba o valor do IMC e a
// classificação usando a instrução switch.

let peso = parseFloat(prompt("Digite seu peso em Kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));
let imc = peso / (altura * altura);

if (imc <= 18.5) {
  alert("Você está muito magro!");
} else if (imc <= 18.49 && imc >= 24.9) {
  alert("Você tem o IMC normal!");
} else if (imc >= 25 && imc <= 29.9) {
  alert("Você está sobrepeso!");
} else if (imc >= 30 && imc <= 34.9) {
  alert("Você está no grau I de obesidade!");
} else if (imc >= 35 && imc <= 39.0) {
  alert("Você está no grau II de obesidade!");
} else if (imc >= 40) {
  alert("Você está no grau III de obesidade!");
}
