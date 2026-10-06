/* ============================================================
🟨 SISTEMA DE PROCESSAMENTO DE PEDIDOS
Cada pedido possui:
{
  cliente,
  itens
}
Cada item possui:
{
  produto,
  quantidade,
  preco}

A função deve retornar um NOVO array contendo:
{
  cliente,
  total,
  classificacao
}
Regras:
1. O total de cada pedido é a soma de:
   quantidade * preco
   de cada item.
2. Classificação:
   - total >= 300 → "ALTO"
   - total < 300 → "NORMAL"
3. O total deve ser retornado como número.
4. Preserve a ordem dos pedidos.
5. Não altere os objetos originais.
6. Se não houver pedidos, retorne [].
============================================================ */

function processarPedidos(pedidos) {
  let resultado = [];

  for (let { cliente, itens } of pedidos) {
    let classificacao = "NORMAL";
    let total = 0;
    for (let { quantidade, preco } of itens) {
      total += quantidade * preco;

      if (total >= 300) {
        classificacao = "ALTO";
      } else {
        classificacao = "NORMAL";
      }
    }
    
  resultado.push({cliente, total, classificacao});
  }

  return resultado;
}

console.log(processarPedidos([
  {
    cliente: "Ana",
    itens: [
      {produto: "Mouse", quantidade: 2, preco: 50},
      {produto: "Teclado", quantidade: 1, preco: 100}
    ]
  }
]));
// [
//   {cliente: "Ana", total: 200, classificacao: "NORMAL"}
// ]

console.log(processarPedidos([
  {
    cliente: "Carlos",
    itens: [
      {produto: "Monitor", quantidade: 2, preco: 200}
    ]
  }
]));
// [
//   {cliente: "Carlos", total: 400, classificacao: "ALTO"}
// ]

console.log(processarPedidos([
  {
    cliente: "Bia",
    itens: [
      {produto: "A", quantidade: 3, preco: 50},
      {produto: "B", quantidade: 2, preco: 25}
    ]
  }
]));
// [
//   {cliente: "Bia", total: 200, classificacao: "NORMAL"}
// ]

console.log(processarPedidos([
  {
    cliente: "João",
    itens: [
      {produto: "A", quantidade: 3, preco: 100}
    ]
  },
  {
    cliente: "Lia",
    itens: [
      {produto: "B", quantidade: 1, preco: 50}
    ]
  }
]));
// [
//   {cliente: "João", total: 300, classificacao: "ALTO"},
//   {cliente: "Lia", total: 50, classificacao: "NORMAL"}
// ]

console.log(processarPedidos([
  {
    cliente: "Rui",
    itens: []
  }
]));
// [
//   {cliente: "Rui", total: 0, classificacao: "NORMAL"}
// ]

console.log(processarPedidos([]));
// []