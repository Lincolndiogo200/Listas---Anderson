// 4. Crie uma página com uma imagem de uma criança (ex: “crianca.jpg”) e um
// botão “Crescer”. Crie uma função chamada trocarImagem. Nessa função, altere
// a propriedade src da imagem para “adulto.jpg”. Chame a função trocarImagem
// no onclick do botão Crescer. Escreva ainda um log no console com a mensagem
// “Imagem trocada com sucesso!”.

let imagem = document.getElementById("imagem");
function trocarImagem() {
  imagem.src = "./imgs/adulto.avif";
  console.log("Imagem trocada com sucesso!");
}
