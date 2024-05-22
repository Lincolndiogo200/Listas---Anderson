function soma() {
  let number1 = parseFloat(document.getElementById("n1").value);
  let number2 = parseFloat(document.getElementById("n2").value);
  let div = document.getElementById("res");
  let resultado = number1 + number2;
  div.innerHTML = `O resultado da soma é: ${resultado}`;
}
