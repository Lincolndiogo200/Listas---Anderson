// 4. Desenvolva um programa que receba o ano de nascimento de uma pessoa e
// informe se ela já é maior de idade ou não.

let ano = prompt("Em qual ano você nasceu?");

const anoAtual = 2024;
let idade = anoAtual - ano;

if (idade >= 18) {
  console.log("Você é maior de idade!");
} else {
  console.log("Você ainda é menor de idade!");
}
