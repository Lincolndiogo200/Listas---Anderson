// Crie um código JavaScript que utilize pelo menos três funções predefinidas
// diferentes para realizar uma tarefa específica (por exemplo, calcular a média de
// três números).

let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo número:");
let num3 = prompt("Digite o terceiro número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

let media = (num1 + num2 + num3) / 3;

alert("A média dos três números é: " + media);
