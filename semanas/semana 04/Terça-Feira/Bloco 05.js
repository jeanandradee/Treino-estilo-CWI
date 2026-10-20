/*==================================================
DESAFIO FINAL — Central de Processamento de Pedidos
==================================================
Uma loja virtual precisa gerar um relatório dos pedidos
recebidos durante o dia.
Cada pedido possui:
- codigo: identificação do pedido;
- cliente: nome do cliente;
- valor: valor total do pedido;
- status: situação atual do pedido.
Crie a função gerarRelatorio(pedidos), que retorna um objeto
com as seguintes propriedades:
1. totalPedidos:
   Quantidade total de pedidos recebidos.
2. pedidosValidos:
   Novo array contendo os códigos dos pedidos que atendem
   simultaneamente às seguintes condições:
   - status igual a "APROVADO";
   - valor maior que zero.
3. valorTotal:
   Soma dos valores dos pedidos válidos.
4. clientesComPedidoValido:
   Novo array com os nomes dos clientes que possuem pedidos
   válidos, sem repetir nomes.
   Preserve a ordem em que cada cliente aparece pela primeira vez
   entre os pedidos válidos.
5. maiorPedido:
   Código do pedido válido com o maior valor.
   Se não houver pedidos válidos, retorne null.
   Se houver empate no maior valor, mantenha o primeiro pedido.
REGRAS:
- Não altere o array original nem seus objetos.
- Um pedido só é válido quando atende às duas condições.
- Pedidos inválidos não entram em valorTotal.
- totalPedidos considera todos os pedidos, inclusive os inválidos.
- Se a lista estiver vazia, retorne os valores iniciais apropriados.
*/

function gerarRelatorio(pedidos) {
  if (pedidos.length === 0) {
    return {totalPedidos: 0, pedidosValidos: [], valorTotal: 0, clientesComPedidoValido: [], maiorPedido: null }
  }

  let totalPedidos = pedidos.length;
  let pedidosValidos = [];
  let valorTotal = 0;
  let clientesComPedidoValido = [];
  let maiorPedido = null;
  let valorMaiorPedido = 0;

  for (let { codigo, cliente, valor, status } of pedidos) {
    if (status === "APROVADO" && valor > 0) {
      pedidosValidos.push(codigo);
      valorTotal += valor;
      if (!clientesComPedidoValido.includes(cliente)) {
        clientesComPedidoValido.push(cliente);
      }

      if (maiorPedido === null || valor > valorMaiorPedido ) {
        valorMaiorPedido = valor;
        maiorPedido = codigo;
      }
    }


  }

  return { totalPedidos, pedidosValidos, valorTotal, clientesComPedidoValido, maiorPedido };
}


console.log(gerarRelatorio([
  { codigo: "P01", cliente: "Ana", valor: 150, status: "APROVADO" },
  { codigo: "P02", cliente: "Beto", valor: 300, status: "PENDENTE" },
  { codigo: "P03", cliente: "Ana", valor: 200, status: "APROVADO" },
  { codigo: "P04", cliente: "Caio", valor: 0, status: "APROVADO" },
  { codigo: "P05", cliente: "Bia", valor: 250, status: "APROVADO" },
  { codigo: "P06", cliente: "Beto", valor: 100, status: "APROVADO" }
]));

// Esperado:
// {
//   totalPedidos: 6,
//   pedidosValidos: ["P01", "P03", "P05", "P06"],
//   valorTotal: 700,
//   clientesComPedidoValido: ["Ana", "Bia", "Beto"],
//   maiorPedido: "P05"
// }


console.log(gerarRelatorio([
  { codigo: "P10", cliente: "Lia", valor: -20, status: "APROVADO" },
  { codigo: "P11", cliente: "Rui", valor: 50, status: "CANCELADO" }
]));

// Esperado:
// {
//   totalPedidos: 2,
//   pedidosValidos: [],
//   valorTotal: 0,
//   clientesComPedidoValido: [],
//   maiorPedido: null
// }


console.log(gerarRelatorio([]));

// Esperado:
// {
//   totalPedidos: 0,
//   pedidosValidos: [],
//   valorTotal: 0,
//   clientesComPedidoValido: [],
//   maiorPedido: null
// }