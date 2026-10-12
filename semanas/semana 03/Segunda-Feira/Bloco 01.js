/* Uma função recebe uma duração total em segundos.
Converta essa duração para horas, minutos e segundos.
Regras:
- horas: quantidade de horas completas;
- minutos: minutos restantes depois de retirar as horas completas;
- segundos: segundos restantes depois de retirar horas e minutos.
Retorne:
{ horas, minutos, segundos }
Não use métodos de biblioteca para fazer a conversão.
*/

function converterDuracao(totalSegundos) {
  const horas = Math.floor(totalSegundos / 3600);

  const minutos = Math.floor((totalSegundos % 3600) / 60);

  const segundos = totalSegundos % 60;

  return { horas, minutos, segundos };
}

console.log(converterDuracao(3665)); // { horas: 1, minutos: 1, segundos: 5 }

console.log(converterDuracao(59)); // { horas: 0, minutos: 0, segundos: 59 }

console.log(converterDuracao(3600)); // { horas: 1, minutos: 0, segundos: 0 }

console.log(converterDuracao(7200)); // { horas: 2, minutos: 0, segundos: 0 }

console.log(converterDuracao(125)); // { horas: 0, minutos: 2, segundos: 5 }

console.log(converterDuracao(0)); // { horas: 0, minutos: 0, segundos: 0 }

/* 2️⃣ Reconstrutor de texto 🔤
Uma função recebe uma palavra e deve construir outra
palavra usando apenas os caracteres das posições pares.
As posições começam em zero.
Exemplo:
"COMPUTADOR"
Índices:  0123456789
Resultado: "CMUADR"
Atenção:
- posição 0 entra;
- posição 1 não entra;
- posição 2 entra;
- continue seguindo essa regra até o final.
Não use filter().
*/

function reconstruirTexto(texto) {
  let resultado = "";
  
  for (let i = 0; i < texto.length; i++) {
    if (i % 2 === 0) {
      resultado += texto[i];
    }
  }

  return resultado;
}

console.log(reconstruirTexto("COMPUTADOR")); // "CMUAO"

console.log(reconstruirTexto("ABCDE")); // "ACE"

console.log(reconstruirTexto("JS")); // "J"

console.log(reconstruirTexto("PROGRAMACAO")); // "PORMCO"

console.log(reconstruirTexto("A")); // "A"

console.log(reconstruirTexto("")); // "" 

/* 3️⃣ Comparador de despesas 💰
Uma função recebe dois arrays de despesas.
Cada posição representa o gasto de um dia.
Calcule:
- totalA: soma dos valores do primeiro array;
- totalB: soma dos valores do segundo array;
- diferenca: diferença absoluta entre os totais;
- quemGastouMais: "A", "B" ou "EMPATE".
Os arrays podem ter tamanhos diferentes.
Valores negativos não serão utilizados.
Retorne:
{ totalA, totalB, diferenca, quemGastouMais }
*/

function compararDespesas(despesasA, despesasB) {
  let totalA = despesasA.reduce((acc, n) => acc + n ,0);
  let totalB = despesasB.reduce((acc , n) => acc + n ,0);
  let diferenca = Math.abs(totalA - totalB);
  let quemGastouMais = totalA > totalB ? "A" : totalB > totalA ? "B" : "EMPATE";

  return {totalA, totalB, diferenca, quemGastouMais};
}

console.log(compararDespesas([10, 20, 30], [15, 15, 20])); // { totalA: 60, totalB: 50, diferenca: 10, quemGastouMais: "A" }

console.log(compararDespesas([5, 5], [20])); // { totalA: 10, totalB: 20, diferenca: 10, quemGastouMais: "B" }

console.log(compararDespesas([10, 10], [5, 15])); // { totalA: 20, totalB: 20, diferenca: 0, quemGastouMais: "EMPATE" }

console.log(compararDespesas([], [8, 2])); // { totalA: 0, totalB: 10, diferenca: 10, quemGastouMais: "B" }

console.log(compararDespesas([100], [])); // { totalA: 100, totalB: 0, diferenca: 100, quemGastouMais: "A" }

console.log(compararDespesas([], [])); // { totalA: 0, totalB: 0, diferenca: 0, quemGastouMais: "EMPATE" }
