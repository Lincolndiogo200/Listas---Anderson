// 8. Crie um programa que simula um restaurante. O usuário escolhe um prato do
// menu (opções: pizza, hambúrguer, salada, macarrão) usando a instrução switch.
// Para cada prato escolhido, exiba o preço e a descrição do prato.

let menu = ["Pizza", "Hambúrguer", "Salada", "Macararrão"];
let pedido = parseInt(
  prompt(
    "Escolha uma das opções do nosso menu:\n 1) Pizza\n 2) Hambúrguer\n 3) Salada\n 4) Macarrão\n 5) Nenhuma das opções"
  )
);

switch (pedido) {
  case 1:
    alert("Uma boa pedida quando se está com os amigos!\n R$: 50.00");
    break;
  case 2:
    alert("Um delicioso smash burguer!\n R$: 35.00");
    break;
  case 3:
    alert("Uma salada pra quem está na dieta\n R$: 25.00");
    break;
  case 4:
    alert("Um macarrão com molho branco\n R$: 30.00");
    break;
  case 5:
    alert("Nenhuma das opções me interessou!");
    break;
  default:
    alert("Opção inválida!");
}
