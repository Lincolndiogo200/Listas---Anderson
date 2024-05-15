// 2. Escreva um programa que peça ao usuário para inserir três números e, em
// seguida, imprima o maior deles.

let number1 = prompt("Digite um número:");
let number2 = prompt("Digite outro número:");
let number3 = prompt("Digite outro número:");

if (number1 > number2 && number1 > number3) {
  console.log("O número 1 é o maior!");
} else if (number2 > number1 && number2 > number3) {
  console.log("O número 2 é o maior!");
} else if (number3 > number2 && number3 > number1) {
  console.log("O número 3 é o maior!");
}
