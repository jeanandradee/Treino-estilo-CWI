/* B5 — DESAFIO DE SELETIVA CWI
   Q1 — Sistema de gerenciamento de pedidos
Uma empresa precisa gerar um relatório dos pedidos realizados.
Crie uma função chamada gerarRelatorio(pedidos).
Cada pedido possui:
- cliente: nome do cliente.
- valor: valor total do pedido.
- status: situação do pedido.
- itens: quantidade de itens comprados.
REGRAS:
1. Considere somente pedidos com status "aprovado".
2. A comparação do status deve ignorar letras maiúsculas e minúsculas.
3. Considere somente pedidos com valor maior que zero.
4. Calcule a quantidade de pedidos válidos.
5. Calcule o valor total dos pedidos válidos.
6. Calcule a quantidade total de itens dos pedidos válidos.
7. Identifique o cliente que realizou o pedido de maior valor.
Retorne um objeto contendo:
{
totalPedidos,
valorTotal,
totalItens,
clienteMaiorPedido
}
Se nenhum pedido for válido, retorne:
- totalPedidos: 0
- valorTotal: 0
- totalItens: 0
- clienteMaiorPedido: null
  */

function gerarRelatorio(pedidos) {
  const pedidosValidos = pedidos.filter(pedido =>
    pedido.status.toLowerCase() === "aprovado" &&
    pedido.valor > 0
  );

  const valorTotal = pedidosValidos.reduce(
    (acc, pedido) => acc + pedido.valor, 0
  );

  const totalItens = pedidosValidos.reduce(
    (acc, pedido) => acc + pedido.itens, 0
  );

  const maiorPedido = pedidosValidos.reduce((maior, atual) => {
    if (maior === null || atual.valor > maior.valor) {
      return atual;
    }

    return maior;
  }, null);

  return {
    totalPedidos: pedidosValidos.length,
    valorTotal,
    totalItens,
    clienteMaiorPedido: maiorPedido === null
      ? null
      : maiorPedido.cliente
  };
}



console.log(gerarRelatorio([
{ cliente: "Ana", valor: 150, status: "aprovado", itens: 3 },
{ cliente: "Carlos", valor: 200, status: "pendente", itens: 5 },
{ cliente: "Maria", valor: 300, status: "APROVADO", itens: 4 },
{ cliente: "João", valor: 100, status: "aprovado", itens: 2 },
{ cliente: "Pedro", valor: 0, status: "aprovado", itens: 8 }
]));

// Resultado esperado:{ totalPedidos: 3, valorTotal: 550, totalItens: 9, clienteMaiorPedido: "Maria" }

console.log(gerarRelatorio([
{ cliente: "Lucas", valor: 80, status: "aprovado", itens: 2 },
{ cliente: "Julia", valor: 120, status: "Aprovado", itens: 3 }
]));

// Resultado esperado: { totalPedidos: 2, valorTotal: 200, totalItens: 5, clienteMaiorPedido: "Julia" }

console.log(gerarRelatorio([
{ cliente: "Rafa", valor: -50, status: "aprovado", itens: 2 },
{ cliente: "Bia", valor: 0, status: "aprovado", itens: 1 },
{ cliente: "Leo", valor: 300, status: "cancelado", itens: 4 }
]));
// Resultado esperado: { totalPedidos: 0, valorTotal: 0, totalItens: 0, clienteMaiorPedido: null }

console.log(gerarRelatorio([]));
// Resultado esperado: { totalPedidos: 0, valorTotal: 0, totalItens: 0, clienteMaiorPedido: null }