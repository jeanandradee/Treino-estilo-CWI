/* 🏁 B5 — Processamento de Pedidos
Nível 6,5/10 | Desafio final | Estilo CWI
Uma loja recebe uma lista de pedidos. Cada pedido contém id, cliente, valor e status.
Crie a função gerarRelatorioPedidos(pedidos).
Regras
Calcule o valor total dos pedidos com status "aprovado".
Conte quantos pedidos foram "cancelado".
Agrupe o valor dos pedidos aprovados por cliente, mantendo a ordem em que cada cliente apareceu pela primeira vez entre os pedidos aprovados.
Identifique o pedido aprovado de maior valor. Retorne seu id; em caso de empate, mantenha o primeiro. Se não houver pedidos aprovados, retorne null.
Crie uma lista com os IDs dos pedidos aprovados cujo valor seja maior ou igual a 100, mantendo a ordem original.
Ignore pedidos com status diferente de "aprovado" e "cancelado" nos cálculos.
Não modifique o array original nem os objetos dentro dele.
Código inicial e testes
Copie tudo e implemente apenas a função:*/
function gerarRelatorioPedidos(pedidos) {
  let totalAprovado = 0;
  let totalCancelado = 0;
  let totalPorCliente = [];
  let idMaiorPedido = null;
  let pedidosAcimaDe100 = [];
  let valorMaiorPedido = 0;

  for (let { id, cliente, valor, status } of pedidos) {

    if (status === "aprovado") {
      totalAprovado += valor;

      if (idMaiorPedido === null || valor > valorMaiorPedido) {
        idMaiorPedido = id;
        valorMaiorPedido = valor;
      }

      if (valor >= 100) {
        pedidosAcimaDe100.push(id);
      }

      let clienteEncontrado = totalPorCliente.find(
        item => item.cliente === cliente
      );

      if (clienteEncontrado) {
        clienteEncontrado.total += valor;
      } else {
        totalPorCliente.push({
          cliente: cliente,
          total: valor
        });
      }

    } else if (status === "cancelado") {

      totalCancelado++;
    }

  }

  return { totalAprovado, totalCancelado, totalPorCliente, idMaiorPedido, pedidosAcimaDe100 };
}

console.log(gerarRelatorioPedidos([ { id: 101, cliente: "Ana", valor: 120, status: "aprovado" },
  { id: 102, cliente: "Beto", valor: 80, status: "cancelado" }, { id: 103, cliente: "Ana", valor: 50, status: "aprovado" },
  { id: 104, cliente: "Caio", valor: 200, status: "aprovado" }, { id: 105, cliente: "Beto", valor: 150, status: "aprovado" },
  { id: 106, cliente: "Ana", valor: 120, status: "aprovado" },  { id: 107, cliente: "Duda", valor: 300, status: "em análise" }]));

// Esperado: { totalAprovado: 640, totalCancelado: 1,
// totalPorCliente: [   { cliente: "Ana", total: 290 }, { cliente: "Caio", total: 200 }, { cliente: "Beto", total: 150 } ],
// idMaiorPedido: 104, pedidosAcimaDe100: [101, 104, 105, 106] }

console.log(gerarRelatorioPedidos([ { id: 201, cliente: "Lia", valor: 40, status: "aprovado" },
  { id: 202, cliente: "Rui", valor: 40, status: "aprovado" }, { id: 203, cliente: "Lia", valor: 90, status: "cancelado" },
  { id: 204, cliente: "Lia", valor: 40, status: "aprovado" } ]));
// Esperado: { totalAprovado: 80, totalCancelado: 1,
// totalPorCliente: [ { cliente: "Lia", total: 80 }, { cliente: "Rui", total: 40 } ],
// idMaiorPedido: 201, pedidosAcimaDe100: [] }

console.log(gerarRelatorioPedidos([ { id: 301, cliente: "Nina", valor: 50, status: "cancelado" },
  { id: 302, cliente: "Otto", valor: 200, status: "em análise" }]));
// Esperado: { totalAprovado: 0, totalCancelado: 1, totalPorCliente: [], idMaiorPedido: null, pedidosAcimaDe100: [] }