// 6. Crie uma página contendo 3 miniaturas de imagens e uma div. Ao clicar em
// cada imagem, a imagem clicada deve aparecer no seu tamanho original na div.

function mostrarImagem(src) {
  var imagemAmpliada = document.getElementById("imagemAmpliada");
  imagemAmpliada.src = src;
  var divImagemGrande = document.getElementById("imagemGrande");
  divImagemGrande.style.display = "block";
}
