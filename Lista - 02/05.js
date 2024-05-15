// 5. Faça um programa que converte uma temperatura de Celsius para Fahrenheit ou
// vice-versa, dependendo da escolha do usuário.

let Celsius = parseInt(prompt("Digite a temperatura em Celsius "));

let celsiusConvert = Celsius * 1.8 + 32;

console.log(
  "O valor de " +
    Celsius +
    " Celsius convertido para Fahrenheit é igual a " +
    celsiusConvert
);
