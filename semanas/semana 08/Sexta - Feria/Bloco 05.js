/* ========================================
   B5 — ORGANIZANDO O DIA
   ========================================
Uma função recebe um array de atividades.
Cada atividade possui:
- nome: nome da atividade.
- minutos: tempo necessário para realizá-la.
- concluida: indica se a atividade foi concluída.
A função deve gerar um relatório contendo:
1. totalAtividades:
   Quantidade total de atividades.
2. atividadesConcluidas:
   Quantidade de atividades concluídas.
3. atividadesPendentes:
   Quantidade de atividades não concluídas.
4. tempoPendente:
   Soma dos minutos das atividades
   que ainda não foram concluídas.
5. proximaAtividade:
   Nome da primeira atividade pendente.
   Se todas estiverem concluídas ou o array
   estiver vazio, retorne "Dia livre".
========================================
*/

function organizarDia(atividades) {

  let atividadesConcluidas = 0;
  let atividadesPendentes = 0;
  let tempoPendente = 0;

  let proximaAtividade = "Dia livre";

  for (let i = 0; i < atividades.length; i++) {

    if (atividades[i].concluida === true) {
      atividadesConcluidas++;
    } else {

      atividadesPendentes++;
      tempoPendente += atividades[i].minutos;

      if (proximaAtividade === "Dia livre") {
        proximaAtividade = atividades[i].nome;
      }
    }
  }

  return {
    totalAtividades: atividades.length,
    atividadesConcluidas: atividadesConcluidas,
    atividadesPendentes: atividadesPendentes,
    tempoPendente: tempoPendente,
    proximaAtividade: proximaAtividade
  };
}

console.log(organizarDia([
  { nome: "Estudar", minutos: 60, concluida: true },
  { nome: "Limpar quarto", minutos: 30, concluida: false },
  { nome: "Fazer compras", minutos: 45, concluida: false },
  { nome: "Caminhar", minutos: 20, concluida: true }
]));

/* Resultado esperado: { totalAtividades: 4, atividadesConcluidas: 2, 
 atividadesPendentes: 2, tempoPendente: 75, proximaAtividade: "Limpar quarto" } */


console.log(organizarDia([
  { nome: "Estudar", minutos: 40, concluida: true },
  { nome: "Treinar", minutos: 30, concluida: true }
]));

/* Resultado esperado: { totalAtividades: 2, atividadesConcluidas: 2, atividadesPendentes: 0,
  tempoPendente: 0, proximaAtividade: "Dia livre" }  */


console.log(organizarDia([]));
/* Resultado esperado: { totalAtividades: 0, atividadesConcluidas: 0, atividadesPendentes: 0,
  tempoPendente: 0, proximaAtividade: "Dia livre" }  */