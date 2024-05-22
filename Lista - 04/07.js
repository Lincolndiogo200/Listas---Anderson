// 7. Declare uma variável global e uma local dentro de uma função. Tente acessá-las
// de diferentes partes do código para entender o escopo.

var variavelGlobal = " variável global";

function exemploEscopo() {
  var variavelLocal = " variável local";

  console.log(variavelGlobal);

  console.log(variavelLocal);
}

exemploEscopo();

console.log(variavelGlobal);
