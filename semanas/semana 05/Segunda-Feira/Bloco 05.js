/* ==================================================
   B5 — CENTRAL DE PEDIDOS
   ==================================================
Uma loja precisa gerar um relatório dos pedidos recebidos.
Crie a função gerarRelatorioPedidos(pedidos).
Cada pedido possui:
- codigo: string
- cliente: string
- valor: número
- status: string ("APROVADO" ou "PENDENTE")
A função deve retornar um objeto com:
1. totalPedidos:
   Quantidade total de pedidos recebidos.
2. pedidosValidos:
   Quantidade de pedidos com status "APROVADO"
   E valor maior que zero.
3. valorTotal:
   Soma dos valores somente dos pedidos válidos.
4. clientesComPedidoValido:
   Array com os nomes dos clientes que possuem
   pelo menos um pedido válido.
   Não pode haver nomes duplicados.
   Preserve a ordem da primeira aparição.
5. maiorPedido:
   O objeto completo do pedido válido com maior valor.
   Se não existir nenhum pedido válido, retorne null.
   Em caso de empate, mantenha o primeiro pedido.
REGRAS:
- Não altere o array original.
- Pedidos pendentes não são válidos.
- Pedidos com valor zero ou negativo não são válidos.
- Um pedido só é válido se atender às duas condições:
  status "APROVADO" e valor maior que zero.
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
        maiorPedido = { codigo, cliente, valor, status };
      }
    }
  }

  return { totalPedidos, pedidosValidos, valorTotal, clientesComPedidoValido, maiorPedido };
}

console.log(gerarRelatorioPedidos([
  { codigo: "P01", cliente: "Ana", valor: 120, status: "APROVADO" },
  { codigo: "P02", cliente: "Beto", valor: 80, status: "PENDENTE" },
  { codigo: "P03", cliente: "Ana", valor: 200, status: "APROVADO" },
  { codigo: "P04", cliente: "Duda", valor: 0, status: "APROVADO" },
  { codigo: "P05", cliente: "Duda", valor: 150, status: "APROVADO" },
  { codigo: "P06", cliente: "Bruno", valor: 50, status: "APROVADO" }
]));

// Resultado esperado: { totalPedidos: 6, pedidosValidos: 4, valorTotal: 520, clientesComPedidoValido: ["Ana", "Duda", "Bruno"],
//  maiorPedido: { codigo: "P03", cliente: "Ana", valor: 200, status: "APROVADO" } }




console.log(gerarRelatorioPedidos([{ codigo: "P07", cliente: "Carlos", valor: 0, status: "APROVADO" },
{ codigo: "P08", cliente: "Eva", valor: -20, status: "APROVADO" },{ codigo: "P09", cliente: "Lia", valor: 100, status: "PENDENTE" }]));
// Resultado esperado: { totalPedidos: 3, pedidosValidos: 0, valorTotal: 0, clientesComPedidoValido: [], maiorPedido: null }