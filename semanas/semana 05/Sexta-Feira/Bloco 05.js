/* B5 — Sistema de Controle de Pedidos
Uma loja virtual precisa processar os pedidos recebidos durante o dia. Cada pedido possui um código, o nome do cliente, o valor da compra e o status. 
Regras do sistema
Pedidos com status "cancelado" devem ser ignorados completamente.
Pedidos com status "aprovado" devem entrar no cálculo do faturamento.
Pedidos com status "pendente" devem ser contabilizados separadamente.
Compras aprovadas com valor igual ou superior a R$ 500 recebem um desconto de 10%.
Compras aprovadas abaixo de R$ 500 não recebem desconto.
Retorno esperado
A função deve retornar um objeto contendo:
totalAprovados: quantidade de pedidos aprovados.
totalPendentes: quantidade de pedidos pendentes.
faturamento: soma dos valores aprovados após os descontos.
clientesPremium: array com os nomes dos clientes cujos pedidos aprovados tiveram valor original igual ou superior a R$ 500.
maiorPedido: código do pedido aprovado com maior valor original.
Se nenhum pedido for aprovado, maiorPedido deverá ser null. */

function processarPedidos(pedidos) {
  let totalAprovados = 0;
  let totalPendentes = 0;
  let faturamento = 0; 
  let clientesPremium = [];
  let maiorPedido = null;
  let valorMaiorPedido = 0;

  for (let { codigo, cliente, valor, status } of pedidos) {
    if (status === "cancelado") {
      continue;
    } else if ( status === "aprovado") {
      totalAprovados ++ ;

      if (valor >= 500) {
        faturamento += valor * 0.90;
        clientesPremium.push(cliente);
      } else {
        faturamento += valor;
      }

      if (maiorPedido === null || valor > valorMaiorPedido) {
        maiorPedido = codigo;
        valorMaiorPedido = valor;
      }
    } else if (status === "pendente") {
      totalPendentes ++ ;
    }

  }

  return {
    totalAprovados,
    totalPendentes,
    faturamento,
    clientesPremium,
    maiorPedido
  }
}

console.log(processarPedidos([ { codigo: "P01", cliente: "Ana", valor: 700, status: "aprovado" },
{ codigo: "P02", cliente: "Carlos", valor: 300, status: "aprovado" },{ codigo: "P03", cliente: "Bia", valor: 900, status: "pendente" },
{ codigo: "P04", cliente: "João", valor: 500, status: "aprovado" },{ codigo: "P05", cliente: "Maria", valor: 1000, status:"cancelado" }]))
// Resultado esperado { totalAprovados: 3, totalPendentes: 1, faturamento: 1380, 
// clientesPremium: ["Ana", "João"], maiorPedido: "P01" }