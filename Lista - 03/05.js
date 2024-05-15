// 5. Crie uma página contendo 3 botões (Pequena, Média e Grande) e uma imagem.
// Ao clicar no botão Pequena, altere o tamanho da imagem para 100x100px. Ao
// clicar no botão Média, altere o tamanho da imagem para 300x300px. Ao clicar
// no botão Grande, altere o tamanho da imagem para 500x500px.

function alterarTamanho(tamanho) {
  var imagem = document.getElementById("imagem");
  imagem.width = tamanho;
  imagem.height = tamanho;
}
