// 13.Desenvolva um conversor de moeda que solicita ao usuário o valor em Real e
// converta-o para Dólar. Use funções para ler os dados de entrada, realizar a
// conversão e exibir o resultado.

const lerValorEmReal = () => {
  let valor = parseFloat(prompt("Digite o valor em Real (BRL):"));
  while (isNaN(valor) || valor <= 0) {
    alert("Por favor, insira um valor válido em Real (BRL).");
    valor = parseFloat(prompt("Digite o valor em Real (BRL):"));
  }
  return valor;
};

const converterParaDolar = (valorEmReal) => {
  const taxaDeCambio = 5.3;
  return valorEmReal / taxaDeCambio;
};

const exibirResultado = (valorEmReal, valorEmDolar) => {
  alert(
    valorEmReal.toFixed(2) +
      " BRL equivalem a " +
      valorEmDolar.toFixed(2) +
      " USD."
  );
};

const executarConversorDeMoeda = () => {
  const valorEmReal = lerValorEmReal();
  const valorEmDolar = converterParaDolar(valorEmReal);
  exibirResultado(valorEmReal, valorEmDolar);
};

executarConversorDeMoeda();
