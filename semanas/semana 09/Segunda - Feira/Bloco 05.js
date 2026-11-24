function gerarRelatorio(pedidos) {
  let totalPedidos = 0;
  let valorTotal = 0;
  let totalItens = 0;
  let clienteMaiorPedido = null;
  let maiorValor = 0;

  for (let pedido of pedidos) {

    if (
      pedido.status.toLowerCase() === "aprovado" &&
      pedido.valor > 0
    ) {

      totalPedidos++;
      valorTotal += pedido.valor;
      totalItens += pedido.itens;

      if (pedido.valor > maiorValor) {
        maiorValor = pedido.valor;
        clienteMaiorPedido = pedido.cliente;
      }
    }
  }

  return {
    totalPedidos,
    valorTotal,
    totalItens,
    clienteMaiorPedido
  };
}


console.log(gerarRelatorio([
  { cliente: "Ana", valor: 150, status: "aprovado", itens: 3 },
  { cliente: "Carlos", valor: 200, status: "pendente", itens: 5 },
  { cliente: "Maria", valor: 300, status: "APROVADO", itens: 4 },
  { cliente: "João", valor: 100, status: "aprovado", itens: 2 },
  { cliente: "Pedro", valor: 0, status: "aprovado", itens: 8 }
]));

// Esperado:
// {
//   totalPedidos: 3,
//   valorTotal: 550,
//   totalItens: 9,
//   clienteMaiorPedido: "Maria"
// }


console.log(gerarRelatorio([
  { cliente: "Lucas", valor: 80, status: "aprovado", itens: 2 },
  { cliente: "Julia", valor: 120, status: "Aprovado", itens: 3 }
]));

// Esperado:
// {
//   totalPedidos: 2,
//   valorTotal: 200,
//   totalItens: 5,
//   clienteMaiorPedido: "Julia"
// }


console.log(gerarRelatorio([
  { cliente: "Rafa", valor: -50, status: "aprovado", itens: 2 },
  { cliente: "Bia", valor: 0, status: "aprovado", itens: 1 },
  { cliente: "Leo", valor: 300, status: "cancelado", itens: 4 }
]));

// Esperado:
// {
//   totalPedidos: 0,
//   valorTotal: 0,
//   totalItens: 0,
//   clienteMaiorPedido: null
// }
