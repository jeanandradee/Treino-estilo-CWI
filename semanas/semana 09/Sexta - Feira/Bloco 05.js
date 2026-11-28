/* ========================================
   B5 — DESAFIO FINAL | PREPARAÇÃO CWI
   ========================================
   Q1 — ANALISADOR DE TRANSAÇÕES
   ========================================
Crie uma função "analisarTransacoes(transacoes)".
A função recebe um array de objetos. Cada objeto
representa uma transação e possui:
- "codigo": identificador da transação.
- "tipo": tipo da operação ("credito" ou "debito").
- "valor": valor da transação.
- "status": situação ("aprovada" ou "recusada").
A função deve retornar um objeto contendo:
- "totalAprovadas": quantidade de transações aprovadas.
- "saldoFinal": resultado dos créditos menos os débitos aprovados.
- "maiorCredito": maior valor entre os créditos aprovados,
  ou 0 se não existir.
- "codigoMaiorDebito": código do maior débito aprovado,
  ou null se não existir.
- "totalRecusadas": quantidade de transações recusadas.
REGRAS:
1. Somente transações com status "aprovada"
   devem alterar o saldo.
2. Créditos aumentam o saldo.
3. Débitos diminuem o saldo.
4. Transações recusadas devem ser contabilizadas,
   mas não podem alterar nenhum outro resultado.
5. Se houver empate no maior débito,
   mantenha o código da primeira ocorrência.
6. Não modifique o array original.
7. Se o array estiver vazio, retorne os valores iniciais adequados.
========================================
*/

function analisarTransacoes(transacoes) {

  let totalAprovadas = 0;
  let saldoFinal = 0;
  let maiorCredito = 0;
  let codigoMaiorDebito = null;
  let maiorDebito = 0;
  let totalRecusadas = 0;

  for (let i = 0; i < transacoes.length; i++) {

    const transacao = transacoes[i];

    if (transacao.status === "recusada") {
      totalRecusadas++;
    }

    if (transacao.status !== "aprovada") {
      continue;
    }

    totalAprovadas++;

    if (transacao.tipo === "credito") {

      saldoFinal += transacao.valor;

      if (transacao.valor > maiorCredito) {
        maiorCredito = transacao.valor;
      }
    } else if (transacao.tipo === "debito") {
      saldoFinal -= transacao.valor;

      if (transacao.valor > maiorDebito) {
        maiorDebito = transacao.valor;
        codigoMaiorDebito = transacao.codigo;
      }
    }
  }

  return {
    totalAprovadas,
    saldoFinal,
    maiorCredito,
    codigoMaiorDebito,
    totalRecusadas
  };
}


/* ========================================
   TESTES PRINCIPAIS
======================================== */

// TESTE 1 — Operações variadas

console.log(analisarTransacoes([
  { codigo: "T1", tipo: "credito", valor: 500, status: "aprovada" },
  { codigo: "T2", tipo: "debito", valor: 100, status: "aprovada" },
  { codigo: "T3", tipo: "credito", valor: 200, status: "recusada" },
  { codigo: "T4", tipo: "debito", valor: 150, status: "aprovada" },
  { codigo: "T5", tipo: "credito", valor: 300, status: "aprovada" }
]));

// {
//   totalAprovadas: 4,
//   saldoFinal: 550,
//   maiorCredito: 500,
//   codigoMaiorDebito: "T4",
//   totalRecusadas: 1
// }


// TESTE 2 — Somente recusadas

console.log(analisarTransacoes([
  { codigo: "A1", tipo: "credito", valor: 100, status: "recusada" },
  { codigo: "A2", tipo: "debito", valor: 50, status: "recusada" }
]));

// {
//   totalAprovadas: 0,
//   saldoFinal: 0,
//   maiorCredito: 0,
//   codigoMaiorDebito: null,
//   totalRecusadas: 2
// }


// TESTE 3 — Empate no maior débito

console.log(analisarTransacoes([
  { codigo: "B1", tipo: "debito", valor: 200, status: "aprovada" },
  { codigo: "B2", tipo: "debito", valor: 200, status: "aprovada" },
  { codigo: "B3", tipo: "credito", valor: 100, status: "aprovada" }
]));

// {
//   totalAprovadas: 3,
//   saldoFinal: -300,
//   maiorCredito: 100,
//   codigoMaiorDebito: "B1",
//   totalRecusadas: 0
// }


// TESTE 4 — Array vazio

console.log(analisarTransacoes([]));

// {
//   totalAprovadas: 0,
//   saldoFinal: 0,
//   maiorCredito: 0,
//   codigoMaiorDebito: null,
//   totalRecusadas: 0
// }


// TESTE 5 — Valores variados

console.log(analisarTransacoes([
  { codigo: "C1", tipo: "credito", valor: 50, status: "aprovada" },
  { codigo: "C2", tipo: "debito", valor: 20, status: "aprovada" },
  { codigo: "C3", tipo: "debito", valor: 80, status: "recusada" },
  { codigo: "C4", tipo: "debito", valor: 10, status: "aprovada" },
  { codigo: "C5", tipo: "credito", valor: 70, status: "aprovada" }
]));

// {
//   totalAprovadas: 4,
//   saldoFinal: 90,
//   maiorCredito: 70,
//   codigoMaiorDebito: "C2",
//   totalRecusadas: 1
// }