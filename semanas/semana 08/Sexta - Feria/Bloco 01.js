/* ========================================
   B1 — ROTINAS DO DIA A DIA
   ========================================
Q1 — Horário de acordar
Crie uma função que recebe uma hora
(entre 0 e 23).
Retorne:
- "Bom dia" se estiver entre 5 e 11.
- "Boa tarde" se estiver entre 12 e 17.
- "Boa noite" se estiver entre 18 e 23
  ou entre 0 e 4.
*/

function saudacao(hora) {
  return hora >= 5 && hora <= 11 ? "Bom dia" 
         : hora >= 12 && hora <= 17 ? "Boa tarde" : "Boa noite";
}

console.log(saudacao(8));    // "Bom dia"
console.log(saudacao(14));   // "Boa tarde"
console.log(saudacao(21));   // "Boa noite"


/* ========================================
   Q2 — Lista de tarefas
Crie uma função que recebe uma tarefa
como string.
Retorne:
- "Estudar" se a tarefa for "estudar".
- "Limpar" se a tarefa for "limpar".
- "Descansar" se a tarefa for "descansar".
- "Tarefa desconhecida" para qualquer
  outro valor.
A comparação deve ignorar maiúsculas
e minúsculas.
*/

function identificarTarefa(tarefa) {
  return tarefa.toUpperCase() === "ESTUDAR" ? "Estudar" 
         : tarefa.toUpperCase() === "LIMPAR" ? "Limpar"
         : tarefa.toUpperCase() === "DESCANSAR" ? "Descansar" : "Tarefa desconhecida";
}

console.log(identificarTarefa("ESTUDAR"));  // "Estudar"
console.log(identificarTarefa("limpar"));   // "Limpar"
console.log(identificarTarefa("jogar"));    // "Tarefa desconhecida"


/* ========================================
   Q3 — Tempo de estudo
Crie uma função que recebe a quantidade
de minutos estudados.
Retorne:
- "Estudo curto" se for menor que 30.
- "Bom estudo" se estiver entre 30 e 60,
  incluindo os dois limites.
- "Excelente dedicação" se for maior
  que 60.
*/

function avaliarEstudo(minutos) {
  return minutos < 30 ? "Estudo curto" 
         : minutos <= 60 ? "Bom estudo" 
         : "Excelente dedicação";
}

console.log(avaliarEstudo(20));   // "Estudo curto"
console.log(avaliarEstudo(45));   // "Bom estudo"
console.log(avaliarEstudo(90));   // "Excelente dedicação"

/* ========================================
   Q4 — Organizando a manhã
Crie uma função que recebe um array
com atividades realizadas pela manhã.
Retorne a quantidade de atividades
realizadas.
Exemplo:
["acordar", "tomar café", "estudar"]
Resultado: 3
Se o array estiver vazio, retorne 0.
*/

function contarAtividades(atividades) {
  return atividades.length;
}

console.log(contarAtividades([
  "acordar",
  "tomar café",
  "estudar"
]));
// 3

console.log(contarAtividades([]));
// 0