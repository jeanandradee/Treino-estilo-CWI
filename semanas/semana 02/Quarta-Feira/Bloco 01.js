/* ============================================================
🟨 B1 — TREINO DE QUARTA
REGRAS GERAIS:
- Resolva usando JavaScript.
- Tente primeiro sem solução/ajuda.
- Preserve os arrays/objetos originais quando solicitado.
- Cada desafio possui 6 testes.
============================================================ */

/* ============================================================
1️⃣ PRIMEIRO VALOR VÁLIDO
Encontre o primeiro número que seja:
- positivo
- e par
Retorne:
{valor, posicao}
Se não existir:
{valor: null, posicao: -1}
============================================================ */

function primeiroPositivoPar(nums) {
  let valor = null;
  let posicao = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums[i] % 2 === 0) {
      valor = nums[i];
      posicao = i;
      break;
    }
  }

  return{valor, posicao};
}

console.log(primeiroPositivoPar([-3, 5, -2, 7, 8, 10])); // {valor: 8, posicao: 4}

console.log(primeiroPositivoPar([-4, -2, 3, 5])); // {valor: null, posicao: -1}

console.log(primeiroPositivoPar([0, -6, 4, 8])); // {valor: 4, posicao: 2}

console.log(primeiroPositivoPar([2, 4, 6])); // {valor: 2, posicao: 0}

console.log(primeiroPositivoPar([-1, 3, 7, 9, 12])); // {valor: 12, posicao: 4}

console.log(primeiroPositivoPar([])); // {valor: null, posicao: -1}

/* ============================================================
2️⃣ MONTAGEM DE CÓDIGO
Receba um array de strings.
Para cada string:
- inverta os caracteres;
- depois coloque o resultado na sequência final.
Exemplo:
["AB", "CD", "EF"] → "BADCFE"
Regras:
- mantenha a ordem dos elementos;
- não use reverse();
- array vazio retorna "".
============================================================ */

function montarCodigo(partes) {
  let resultado = "";

  for (let parte of partes) {
    for (let i = parte.length -1; i >= 0; i--) {
       resultado += parte[i]; 
    }
  }

  return resultado;
}

console.log(montarCodigo(["AB", "CD", "EF"])); // "BADCFE"

console.log(montarCodigo(["JS"])); // "SJ"

console.log(montarCodigo(["ABC", "D"])); // "CBAD"

console.log(montarCodigo(["12", "34"])); // "2143"

console.log(montarCodigo(["A", "BC", "DEF"])); // "ACBFED"

console.log(montarCodigo([])); // ""

/* ============================================================
3️⃣ REGISTRO DE PONTUAÇÃO
Receba jogadores no formato:
{nome, pontos}
Retorne um NOVO array contendo somente os jogadores
que possuem a MAIOR pontuação.
Regras:
- descubra a maior pontuação;
- mantenha todos os empatados;
- preserve a ordem original;
- não altere os objetos originais;
- array vazio → [].
============================================================ */

function maioresPontuadores(jogadores) {
  let resultado = [];

  let maior = null;

  for (let {nome, pontos} of jogadores) {
    if (maior === null || pontos > maior.pontos) {
      maior = {nome, pontos};
    }
  }

  for (let {nome, pontos} of jogadores) {
    if (pontos === maior.pontos) {
      resultado.push({nome, pontos});
    }
  }

  return resultado;
}

console.log(maioresPontuadores([ {nome: "Ana", pontos: 80}, {nome: "Carlos", pontos: 95}, {nome: "Bia", pontos: 70}]));
// [ {nome: "Carlos", pontos: 95} ]

console.log(maioresPontuadores([ {nome: "Ana", pontos: 100}, {nome: "Carlos", pontos: 100}, {nome: "Bia", pontos: 80}]));
// [ {nome: "Ana", pontos: 100}, {nome: "Carlos", pontos: 100} ]

console.log(maioresPontuadores([ {nome: "Ana", pontos: 50}, {nome: "Bia", pontos: 90},
 {nome: "Carlos", pontos: 90}, {nome: "Davi", pontos: 90}]));
// [ {nome: "Bia", pontos: 90}, {nome: "Carlos", pontos: 90},  {nome: "Davi", pontos: 90} ]

console.log(maioresPontuadores([ {nome: "Ana", pontos: 0}, {nome: "Bia", pontos: -5}]));
// [ {nome: "Ana", pontos: 0} ]

console.log(maioresPontuadores([ {nome: "Ana", pontos: 10}]));
// [ {nome: "Ana", pontos: 10} ]

console.log(maioresPontuadores([]));
// []


