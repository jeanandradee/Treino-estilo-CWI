/* ==================================================
   BLOCO 5 — DESAFIO FINAL
   ==================================================
Crie a função gerarRelatorio(pedidos).
Retorne um objeto com:
- totalPedidos;
- pedidosValidos;
- valorTotal;
- clientesComPedidoValido;
- maiorPedido.
Um pedido válido possui status "APROVADO" e valor > 0.
Não altere os dados originais.
*/

function gerarRelatorio(pedidos) {
  let totalPedidos = 0;
  let pedidosValidos = 0;
  let valorTotal  = 0;
  let clientesComPedidoValido = [];
  let maiorPedido = null;
  let valorMaiorPedido = 0;

for (let { codigo, cliente, valor, status } of pedidos) {
    totalPedidos++;

    if (valor > 0 && status === "APROVADO") {
      pedidosValidos++;
      valorTotal += valor;

      if (!clientesComPedidoValido.includes(cliente)) {
        clientesComPedidoValido.push(cliente);
      }

      if (maiorPedido === null || valor > valorMaiorPedido) {
        valorMaiorPedido = valor;
        maiorPedido = codigo;
      }
    }
  }

  return { totalPedidos, pedidosValidos, valorTotal, clientesComPedidoValido, maiorPedido };
}

console.log(gerarRelatorio([
  { codigo: "P01", cliente: "Ana", valor: 100, status: "APROVADO" },
  { codigo: "P02", cliente: "Beto", valor: 50, status: "PENDENTE" },
  { codigo: "P03", cliente: "Ana", valor: 80, status: "APROVADO" },
  { codigo: "P04", cliente: "Caio", valor: 200, status: "APROVADO" },
  { codigo: "P05", cliente: "Duda", valor: 0, status: "APROVADO" },
  { codigo: "P06", cliente: "Beto", valor: 70, status: "APROVADO" }
]));
// RESULTADO ESPERADO:
// {
//   totalPedidos: 6,
//   pedidosValidos: 4,
//   valorTotal: 450,
//   clientesComPedidoValido: ["Ana", "Caio", "Beto"],
//   maiorPedido: "P04"
// }

console.log(gerarRelatorio([
  { codigo: "P10", cliente: "Lia", valor: 120, status: "APROVADO" },
  { codigo: "P11", cliente: "Rui", valor: 120, status: "APROVADO" },
  { codigo: "P12", cliente: "Mia", valor: 90, status: "APROVADO" }
]));
// RESULTADO ESPERADO:
// {
//   totalPedidos: 3,
//   pedidosValidos: 3,
//   valorTotal: 330,
//   clientesComPedidoValido: ["Lia", "Rui", "Mia"],
//   maiorPedido: "P10"
// }

console.log(gerarRelatorio([
  { codigo: "P20", cliente: "Eva", valor: 100, status: "PENDENTE" },
  { codigo: "P21", cliente: "Noah", valor: 0, status: "APROVADO" },
  { codigo: "P22", cliente: "Ivo", valor: 50, status: "CANCELADO" }
]));

// RESULTADO ESPERADO:
// {
//   totalPedidos: 3,
//   pedidosValidos: 0,
//   valorTotal: 0,
//   clientesComPedidoValido: [],
//   maiorPedido: null
// }

console.log(gerarRelatorio([]));

// RESULTADO ESPERADO:
// {
//   totalPedidos: 0,
//   pedidosValidos: 0,
//   valorTotal: 0,
//   clientesComPedidoValido: [],
//   maiorPedido: null
// }