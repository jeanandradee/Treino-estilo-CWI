/* ========================================
   B4 — ROTINAS DO DIA A DIA
   ========================================
Q1 — Planejamento de gastos
Uma função recebe:
- saldo: dinheiro disponível.
- gasto: valor de uma compra.
Retorne um objeto contendo:
- saldoAnterior: saldo antes da compra.
- saldoAtual: saldo depois da compra.
- compraRealizada: true ou false.
Regras:
- Se o gasto for menor ou igual ao saldo,
  a compra será realizada.
- Caso contrário, a compra não será realizada
  e o saldo permanecerá igual.
*/

function planejarCompra(saldo, gasto) {
  let compraRealizada = gasto <= saldo;
  let saldoAtual = compraRealizada ? saldo - gasto : saldo;

  return {
    saldoAnterior: saldo,
    saldoAtual: saldoAtual,
    compraRealizada: compraRealizada
  };
}

console.log(planejarCompra(100, 30)); // { saldoAnterior: 100, saldoAtual: 70, compraRealizada: true }
console.log(planejarCompra(50, 80));  // { saldoAnterior: 50, saldoAtual: 50, compraRealizada: false }


/* ========================================
   Q2 — Organizando compromissos
Uma função recebe um array de compromissos.
Cada compromisso possui:
- nome: nome da atividade.
- concluido: true ou false.
Retorne um objeto contendo:
- total: quantidade de compromissos.
- concluidos: quantidade de compromissos concluídos.
- pendentes: quantidade de compromissos não concluídos.
*/

function analisarCompromissos(compromissos) {
  let concluidos = 0;
  let pendentes = 0;

  for (let i = 0; i < compromissos.length; i++) {

    if (compromissos[i].concluido === true) {
      concluidos++;
    } else {
      pendentes++;
    }
  }

  return {
    total: compromissos.length,
    concluidos: concluidos,
    pendentes: pendentes
  };
}

console.log(analisarCompromissos([
  { nome: "Estudar", concluido: true },
  { nome: "Limpar quarto", concluido: false },
  { nome: "Fazer compras", concluido: true }
])); // { total: 3, concluidos: 2, pendentes: 1 }

console.log(analisarCompromissos([])); // { total: 0, concluidos: 0, pendentes: 0 }


/* ========================================
   Q3 — Preparando a saída
Uma função recebe:
- horarioAtual: hora atual.
- horarioSaida: hora marcada para sair.
Retorne:
- "Atrasado" se o horário atual for maior
  que o horário de saída.
- "No horário" se os horários forem iguais.
- "Ainda dá tempo" se o horário atual
  for menor que o horário de saída.
*/

function verificarSaida(horarioAtual, horarioSaida) {
  return horarioAtual > horarioSaida ? "Atrasado"
    : horarioAtual === horarioSaida ? "No horário"
    : "Ainda dá tempo";
}

console.log(verificarSaida(15, 14));   // "Atrasado"
console.log(verificarSaida(10, 10));   // "No horário"
console.log(verificarSaida(8, 12));    // "Ainda dá tempo"