/*🟥 B5 — DESAFIO FINAL 🔥
Sistema de Fechamento de Pedidos 🛒
Uma loja precisa fechar os pedidos do dia. Cada pedido possui:
{
  cliente: "Ana",
  itens: [
    {produto: "Teclado", quantidade: 2, preco: 100},
    {produto: "Mouse", quantidade: 1, preco: 50}
  ],
  cupom: "VIP",
  pagamento: "CARTAO"
}
Sua função deve processar cada pedido individualmente e gerar um relatório.
Regras
1. Subtotal
Para cada item:
quantidade × preco
Some todos os itens.
2. Cupom
"VIP" → desconto de 15%
"PROMO10" → desconto de 10%
qualquer outro cupom → sem desconto
3. Pagamento
Depois do desconto:
"CARTAO" → acrescenta 5%
"PIX" ou "DINHEIRO" → não acrescenta nada
4. Classificação
Depois de todas as alterações:
valor >= 500 → "ALTO"
valor < 500 → "NORMAL"
5. Prioridade
O pedido será prioritário somente se:
pagamento === "CARTAO"
E
classificacao === "ALTO"
6. Resultado
Para cada pedido, retorne:
{
  cliente,
  valorFinal,
  classificacao,
  prioritario
}
valorFinal deve ser número, arredondado para 2 casas decimais.
⚠️ Não altere os pedidos originais.*/

function fecharPedidos(pedidos) {
  let resultado = [];

  for (let { cliente, itens, cupom, pagamento } of pedidos) {
    let valorFinal = 0;
    let classificacao;
    let prioritario = false;

    for (let { quantidade, preco } of itens) {
      valorFinal += quantidade * preco;
    }

    if (cupom === "VIP") {
      valorFinal *= 0.85;
    } else if (cupom === "PROMO10") {
      valorFinal *= 0.9;
    }

    if (pagamento === "CARTAO") {
      valorFinal += valorFinal * 0.05;
    } 

    valorFinal = Number(valorFinal.toFixed(2));

    if (valorFinal >= 500) {
      classificacao = "ALTO";
    } else {
      classificacao = "NORMAL";
    }

    if (pagamento === "CARTAO" && classificacao === "ALTO") {
      prioritario = true;
    }

    resultado.push({
      cliente,
      valorFinal,
      classificacao,
      prioritario
    })
  }

  return resultado;
}

console.log(fecharPedidos([
  {
    cliente: "Ana",
    itens: [
      {produto: "Teclado", quantidade: 2, preco: 100},
      {produto: "Mouse", quantidade: 1, preco: 50}
    ],
    cupom: "VIP",
    pagamento: "CARTAO"
  }
]));
// [
//   {
//     cliente: "Ana",
//     valorFinal: 223.13,
//     classificacao: "NORMAL",
//     prioritario: false
//   }
// ]
console.log(fecharPedidos([
  {
    cliente: "Bruno",
    itens: [
      {produto: "Monitor", quantidade: 2, preco: 300}
    ],
    cupom: "PROMO10",
    pagamento: "CARTAO"
  }
]));
// [
//   {
//     cliente: "Bruno",
//     valorFinal: 567,
//     classificacao: "ALTO",
//     prioritario: true
//   }
// ]
console.log(fecharPedidos([
  {
    cliente: "Carlos",
    itens: [
      {produto: "Mouse", quantidade: 2, preco: 50}
    ],
    cupom: "NENHUM",
    pagamento: "PIX"
  }
]));
// [
//   {
//     cliente: "Carlos",
//     valorFinal: 100,
//     classificacao: "NORMAL",
//     prioritario: false
//   }
// ]
console.log(fecharPedidos([
  {
    cliente: "Duda",
    itens: [
      {produto: "Notebook", quantidade: 1, preco: 500}
    ],
    cupom: "VIP",
    pagamento: "PIX"
  }
]));
// [
//   {
//     cliente: "Duda",
//     valorFinal: 425,
//     classificacao: "NORMAL",
//     prioritario: false
//   }
// ]
console.log(fecharPedidos([
  {
    cliente: "Eva",
    itens: [
      {produto: "Cadeira", quantidade: 5, preco: 100}
    ],
    cupom: "NENHUM",
    pagamento: "CARTAO"
  }
]));
// [
//   {
//     cliente: "Eva",
//     valorFinal: 525,
//     classificacao: "ALTO",
//     prioritario: true
//   }
// ]
console.log(fecharPedidos([]));
// [] 