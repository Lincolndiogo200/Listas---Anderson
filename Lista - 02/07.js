// 7. Escreva um programa que peça ao usuário o valor de três lados de um triângulo
// e classifique-o como triângulo equilátero, isósceles, escaleno ou inválido.

let lado1 = parseInt(prompt("Digite o primeiro lado"));
let lado2 = parseInt(prompt("Digite o segundo lado"));
let lado3 = parseInt(prompt("Digite o terceiro lado"));

let equi = lado1 === lado2 && lado1 === lado3;
let iso = lado1 === lado2 || lado1 === lado3;
let esca = lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3;

if (equi) {
  console.log("O triângulo é equilátero!!");
} else if (iso) {
  console.log("O triângulo é isóceles!! ");
} else if (esca) {
  console.log("O triângulo é escaleno!!");
} else {
  console.log("Opção inválida!!");
}
