// 6. Escreva um programa que solicite dois números ao usuário e verifique se pelo
// menos um deles é múltiplo do outro. Se pelo menos um for múltiplo, exiba a
// mensagem “Pelo menos um dos números é múltiplo do outro”. Caso contrário,
// exiba a mensagem “Nenhum dos números é múltiplo do outro”.

let number1 = prompt("Digite um número:");
let number2 = prompt("Digite outro número:");
let multiplo = number1 % number2 == 0;

if (multiplo) {
  console.log("Pelo menos um é multiplo do outro!");
} else {
  console.log("Nenhum dos números é multiplo do outro!");
}
