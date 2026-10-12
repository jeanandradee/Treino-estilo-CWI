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

/*  4️⃣ Simulador de elevador 🛗
Um elevador começa no andar 0.
Recebe uma lista de comandos:
- "SUBIR": sobe um andar;
- "DESCER": desce um andar;
- outros comandos são ignorados.
O elevador não pode:
- ficar abaixo do andar 0;
- ultrapassar o andar máximo informado.
Retorne:
{ andarFinal, movimentosRealizados }
Um movimento só conta se realmente mudar o andar.

*/

function simularElevador(comandos, andarMaximo) {
  let andarFinal = 0;
  let movimentosRealizados = 0;

  for (let comando of comandos) {
    if (comando === "SUBIR" && andarFinal < andarMaximo) {
      andarFinal ++;
      movimentosRealizados ++;
    } else if (comando === "DESCER" && andarFinal > 0) {
      andarFinal --;
      movimentosRealizados ++;
    }
  }

  return {andarFinal, movimentosRealizados};
}

console.log(simularElevador(["SUBIR", "SUBIR", "DESCER"], 5)); // { andarFinal: 1, movimentosRealizados: 3 }

console.log(simularElevador(["DESCER", "DESCER"], 4)); // { andarFinal: 0, movimentosRealizados: 0 }

console.log(simularElevador(["SUBIR", "SUBIR", "SUBIR"], 2)); // { andarFinal: 2, movimentosRealizados: 2 }

console.log(simularElevador(["SUBIR", "X", "DESCER"], 3)); // { andarFinal: 0, movimentosRealizados: 2 }

console.log(simularElevador(["SUBIR", "SUBIR", "SUBIR", "DESCER"], 2)); // { andarFinal: 1, movimentosRealizados: 3 }

console.log(simularElevador([], 10)); // { andarFinal: 0, movimentosRealizados: 0 }

/* 5️⃣ Analisador de notas 📚
Uma função recebe um array de notas.
Calcule:
- maiorNota;
- menorNota;
- quantidadeAcimaDaMedia.
A média deve ser calculada usando todas as notas.
Conte quantas notas são ESTRITAMENTE maiores que a média.
Atenção:
- uma nota igual à média não entra na contagem;
- o array terá pelo menos um elemento.
Retorne:
{ maiorNota, menorNota, quantidadeAcimaDaMedia }
*/

function analisarNotas(notas) {
  let maiorNota = notas[0];
  let menorNota = notas[0];
  let quantidadeAcimaDaMedia = 0;
  let media = notas.reduce((acc, n) => acc + n ,0) / notas.length;

  for (let nota of notas) {
    if (nota > maiorNota) {
      maiorNota = nota;
    }

    if (nota < menorNota) {
      menorNota = nota;
    }

    if (nota > media) {
      quantidadeAcimaDaMedia ++;
    }
  }

  return {maiorNota, menorNota, quantidadeAcimaDaMedia};
}

console.log(analisarNotas([6, 8, 10])); // { maiorNota: 10, menorNota: 6, quantidadeAcimaDaMedia: 1 }

console.log(analisarNotas([5, 5, 5])); // { maiorNota: 5, menorNota: 5, quantidadeAcimaDaMedia: 0 }

console.log(analisarNotas([2, 4, 6, 8])); // { maiorNota: 8, menorNota: 2, quantidadeAcimaDaMedia: 2 }

console.log(analisarNotas([10, 0])); // { maiorNota: 10, menorNota: 0, quantidadeAcimaDaMedia: 1 }

console.log(analisarNotas([7])); // { maiorNota: 7, menorNota: 7, quantidadeAcimaDaMedia: 0 }

console.log(analisarNotas([3, 6, 9, 12])); // { maiorNota: 12, menorNota: 3, quantidadeAcimaDaMedia: 2 }

/* 6️⃣ Compactador de espaços 📝
Uma função recebe um texto que pode conter vários espaços
consecutivos entre palavras.
Retorne uma nova string com:
- apenas um espaço entre palavras;
- nenhum espaço no início;
- nenhum espaço no final.
Não use trim(), split() ou expressões regulares.
Exemplo:
"  ola   mundo  "
Resultado:
"ola mundo"
Considere que o texto contém apenas letras e espaços.
*/

function compactarEspacos(texto) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " ") {
      resultado += texto[i];
    } else if (resultado !== "" && resultado[resultado.length -1] !== " ") {
      resultado += " ";
    }
  }

  if (resultado[resultado.length - 1] === " ") {
    resultado = resultado.slice(0, -1);
  }

  return resultado;
}

console.log(compactarEspacos("  ola   mundo  ")); // "ola mundo"

console.log(compactarEspacos("javascript")); // "javascript"

console.log(compactarEspacos("a  b")); // "a b"

console.log(compactarEspacos("    teste    final    ")); // "teste final"

console.log(compactarEspacos("")); // ""

console.log(compactarEspacos("   ")); // ""