/* ========================================
   B2 — ROTINAS DO DIA A DIA
   ========================================
Q1 — Controle de sono
Uma função recebe a quantidade de horas
que uma pessoa dormiu.
Retorne:
- "Sono insuficiente" se dormir menos de 6 horas.
- "Sono adequado" se dormir entre 6 e 8 horas,
  incluindo os limites.
- "Sono prolongado" se dormir mais de 8 horas.
*/


function avaliarSono(horas) {
  return horas < 6 ? "Sono insuficiente"
    : horas <= 8 ? "Sono adequado"
    : "Sono prolongado";
}

console.log(avaliarSono(5));   // "Sono insuficiente"
console.log(avaliarSono(7));   // "Sono adequado"
console.log(avaliarSono(9));   // "Sono prolongado"

/* ========================================
   Q2 — Preparando o café
Uma função recebe uma string com o nome
de uma bebida.
Retorne o nome da bebida com a primeira
letra maiúscula e o restante minúsculo.
Considere que a entrada possui uma única palavra.
*/

function formatarBebida(bebida) {
  return bebida.charAt(0).toUpperCase() + bebida.slice(1).toLowerCase();
}

console.log(formatarBebida("CAFÉ"));  // "Café"
console.log(formatarBebida("suCo"));  // "Suco"
console.log(formatarBebida("LEITE"));  // "Leite"


/* ========================================
   Q3 — Gastos do dia
Uma função recebe dois valores:
- transporte
- alimentação
Retorne a soma dos dois gastos.
*/

function calcularGastos(transporte, alimentacao) {
  return transporte + alimentacao;
}

console.log(calcularGastos(12, 25)); // 37
console.log(calcularGastos(8, 15));  // 23
console.log(calcularGastos(0, 20));  // 20


/* ========================================
   Q4 — Interpretando a rotina
Analise o código abaixo e crie uma função
que retorne exatamente o resultado produzido
pelas variáveis ao final da execução.

*/

function interpretarRotina() {
  let energia = 10;
  let tarefas = 0;

  for (let hora = 1; hora <= 4; hora++) {
    energia -= 2;

    if (hora % 2 === 0) {
      tarefas++;
      energia += 1;
    }
  }

  return { energia, tarefas };
}

console.log(interpretarRotina());
// { energia: 4, tarefas: 2 }