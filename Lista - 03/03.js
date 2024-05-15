// 3. Crie uma página com um parágrafo e dois botões: um “Ocultar” e um “Mostrar”.
// Ao clicar no botão Ocultar, modifique a propriedade style.display do parágrafo
// para none. Ao clicar no botão “Mostrar”, altere a propriedade style.display do
// parágrafo para block.

function ocultar() {
  document.getElementById("paragrafo").style.display = "none";
}

function mostrar() {
  document.getElementById("paragrafo").style.display = "block";
}
