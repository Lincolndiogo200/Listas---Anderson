// 8. Crie uma função que declara uma variável dentro de um bloco de código (por
//     exemplo, um if) e tente acessá-la fora desse bloco para entender o escopo local
//     do bloco.

function escopoBloco() {
  if (true) {
    let variavelBloco = "Eu sou uma variável de bloco";
    console.log("Dentro do bloco: " + variavelBloco);
  }
}
