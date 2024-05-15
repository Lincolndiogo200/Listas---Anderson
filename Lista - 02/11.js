// 10.Escreva um programa que solicite ao usuário um número positivo e exiba todos
// os números impares de 0 até o número informado (use o laço de repetição while).

let number = parseInt(prompt("Digite um número positivo:"));

if (number < 0) {
  alert("Número inserido não é positivo!");
} else {
  let i = 0;
  while (i <= number) {
    if (i % 2 !== 0) {
      console.log(i);
    }
    i++;
  }
}
