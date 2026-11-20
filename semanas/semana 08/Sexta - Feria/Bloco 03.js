/* ========================================
   B3 — ROTINAS DO DIA A DIA
   ========================================
Q1 — Organizando o quarto
Uma função recebe um valor booleano
indicando se o quarto está organizado.
Retorne:
* "Quarto organizado" se for true.
* "Hora de organizar" se for false.
*/

function verificarQuarto(organizado) {
  return organizado ? "Quarto organizado" : "Hora de organizar";
}

console.log(verificarQuarto(true));   // "Quarto organizado"
console.log(verificarQuarto(false));  // "Hora de organizar"


/* ========================================
   Q2 — Tempo livre
Uma função recebe um array com atividades
de lazer realizadas durante o dia.
Retorne a primeira atividade do array.
Se não houver nenhuma atividade,
retorne "Sem atividades".
*/

function primeiraAtividade(atividades) {
  return atividades.length > 0 ? atividades[0] : "Sem atividades";
}

console.log(primeiraAtividade(["jogar", "assistir série"]));  // "jogar"
console.log(primeiraAtividade([]));                           // "Sem atividades"


/* ========================================
   Q3 — Consumo de água
Uma função recebe a quantidade de copos
de água que uma pessoa bebeu.
Cada copo contém 250 ml.
Retorne o total de água consumida em ml.
*/

function calcularAgua(copos) {
  return copos * 250;
}

console.log(calcularAgua(2));  // 500
console.log(calcularAgua(5));  // 1250
console.log(calcularAgua(0));  // 0

/* ========================================
   Q4 — Caça ao erro da rotina
O código abaixo deveria calcular o total
de minutos de três atividades.
Identifique e corrija o erro para que
a função retorne o total correto.
*/

function calcularTempoRotina(atividades) {
  let total = 0;

  // ERRO CORRIGIDO:
  // Antes estava i <= atividades.length.
  // Isso fazia o loop acessar uma posição
  // que não existe no array.
  //
  // O correto é i < atividades.length,
  // pois os índices começam em 0.

  for (let i = 0; i < atividades.length; i++) {
    total += atividades[i];
  }

  return total;
}

console.log(calcularTempoRotina([20, 30, 15]));  // 65
console.log(calcularTempoRotina([10, 10, 10]));  // 30