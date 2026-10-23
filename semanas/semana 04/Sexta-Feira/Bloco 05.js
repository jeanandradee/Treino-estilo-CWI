/* ==================================================
   B5 — DESAFIO FINAL: CENTRAL DE PEDIDOS
   ==================================================
Implemente a função gerarRelatorioPedidos seguindo
todas as regras do enunciado.
Retorne um objeto contendo:
- totalPedidos
- pedidosValidos
- valorTotal
- clientesComPedidoValido
- maiorPedido
*/

function gerarRelatorioPedidos(pedidos) {
  let totalPedidos = 0;
  let pedidosValidos = 0;
  let valorTotal = 0;
  let clientesComPedidoValido = [];
  let maiorPedido = null;

  for (let { codigo, cliente, valor, status } of pedidos) {
    totalPedidos ++ ;

    if (status === "APROVADO" && valor > 0) {
      pedidosValidos ++ ;
      valorTotal += valor;

      if (!clientesComPedidoValido.includes(cliente)) {
        clientesComPedidoValido.push(cliente);
      }

      if (maiorPedido === null || valor > maiorPedido.valor) {
        maiorPedido = {codigo, cliente, valor , status };
      }
    }
  }

  return { totalPedidos, pedidosValidos, valorTotal, clientesComPedidoValido, maiorPedido };
}

console.log(gerarRelatorioPedidos([{ codigo: "P01", cliente: "Ana", valor: 150, status: "APROVADO" },
{ codigo: "P02", cliente: "Bruno", valor: 80, status: "PENDENTE" },{ codigo: "P03", cliente: "Ana", valor: 200, status: "APROVADO" },
{ codigo: "P04", cliente: "Caio", valor: 0, status: "APROVADO" },{ codigo: "P05", cliente: "Duda", valor: 120, status: "APROVADO" },
{ codigo: "P06", cliente: "Bruno", valor: 50, status: "APROVADO" }]));
/* Resultado esperado:
{
  totalPedidos: 6,
  pedidosValidos: 4,
  valorTotal: 520,
  clientesComPedidoValido: ["Ana", "Duda", "Bruno"],
  maiorPedido: {codigo: "P03", cliente: "Ana", valor: 200, status: "APROVADO" }
}
*/


console.log(gerarRelatorioPedidos([{ codigo: "P10", cliente: "Eva", valor: 100, status: "PENDENTE" },
{ codigo: "P11", cliente: "Felipe", valor: 0, status: "APROVADO" },{ codigo: "P12", cliente: "Gabi", valor: -20, status: "APROVADO" }]));
/* Resultado esperado:
{
  totalPedidos: 3,
  pedidosValidos: 0,
  valorTotal: 0,
  clientesComPedidoValido: [],
  maiorPedido: null
}
*/