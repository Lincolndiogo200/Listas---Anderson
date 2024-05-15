// 3. Crie um programa que recebe três notas, calcula a média e informe se o aluno
// foi aprovado (média maior ou igual a 7) ou reprovado (média menor que 7).

const nota1 = parseFloat(prompt("Primeira nota:"));
const nota2 = parseFloat(prompt("Segunda nota:"));
const nota3 = parseFloat(prompt("Terceira nota:"));
const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log("Sua média foi de " + media + " Parabéns você foi aprovado!!");
} else {
  console.log("Sua média foi de " + media + " Você foi reprovado!!");
}
