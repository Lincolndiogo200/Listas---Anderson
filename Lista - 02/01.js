// 1. Implemente um programa que determine se um número fornecido pelo usuário
// é par ou ímpar.
let number = prompt("Digite um número:");

let convertNumber = Number(number);

let par = convertNumber % 2 == 0;

if (par) {
  console.log("O número digitado é par");
} else {
  console.log("O número digitado é ímpar");
}
