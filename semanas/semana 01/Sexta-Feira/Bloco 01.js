/*🟩 B1 — PROGRESSÃO: PRÓXIMO DEGRAU
1️⃣ Analisador de Sequência 📊
Um sistema recebe uma sequência de valores e precisa analisar cada elemento a partir do segundo, comparando-o com o anterior.
Para cada posição:
atual > anterior → "SUBIU"
atual < anterior → "DESCEU"
atual === anterior → "IGUAL"
Além disso, o sistema deve guardar:
posicao do primeiro "SUBIU"
posicao do primeiro "DESCEU"
quantidadeSubidas
quantidadeDescidas
Se nunca subir/descer, a posição correspondente deve ser null.*/
function analisarSequencia(valores) {
  let posicaoPrimeiraSubida = null;
  let posicaoPrimeiraDescida = null;
  let quantidadeSubidas = 0;
  let quantidadeDescidas = 0;

  for (let i = 1; i < valores.length; i++) {
    if (valores[i] > valores[i - 1] && posicaoPrimeiraSubida === null) {
      posicaoPrimeiraSubida = i;
    }

    if (valores[i] < valores[i - 1] && posicaoPrimeiraDescida === null) {
      posicaoPrimeiraDescida = i;
    }

    if (valores[i] > valores[i -1]) {
      quantidadeSubidas ++;
    } else if (valores[i] < valores[i - 1]) {
      quantidadeDescidas ++;
    }
  }

  return {
    posicaoPrimeiraSubida,
    posicaoPrimeiraDescida,
    quantidadeSubidas,
    quantidadeDescidas
  }
}

console.log(analisarSequencia([10, 15, 15, 8, 12]));
// { posicaoPrimeiraSubida: 1, posicaoPrimeiraDescida: 3, quantidadeSubidas: 2, quantidadeDescidas: 1 }

console.log(analisarSequencia([5, 4, 3, 2]));
// { posicaoPrimeiraSubida: null, posicaoPrimeiraDescida: 1, quantidadeSubidas: 0, quantidadeDescidas: 3 }

console.log(analisarSequencia([2, 2, 2]));
// { posicaoPrimeiraSubida: null, posicaoPrimeiraDescida: null, quantidadeSubidas: 0, quantidadeDescidas: 0 }

console.log(analisarSequencia([1, 5]));
// { posicaoPrimeiraSubida: 1, posicaoPrimeiraDescida: null, quantidadeSubidas: 1, quantidadeDescidas: 0 }

console.log(analisarSequencia([10, 8, 12, 7, 9]));
// { posicaoPrimeiraSubida: 2, posicaoPrimeiraDescida: 1, quantidadeSubidas: 2, quantidadeDescidas: 2 }

console.log(analisarSequencia([]));
// { posicaoPrimeiraSubida: null, posicaoPrimeiraDescida: null, quantidadeSubidas: 0, quantidadeDescidas: 0 }

/*2️⃣ Registro de Transições 🔄
Um sistema acompanha o estado de um equipamento ao longo do tempo.
Os estados possíveis são:
"LIGADO"
"DESLIGADO"
A partir do segundo estado, conte quantas vezes houve uma troca real de estado.
Além disso, retorne:
primeiraTroca: posição onde ocorreu a primeira mudança
quantidadeTrocas
estadoFinal
Se não houver nenhuma troca, primeiraTroca deve ser null.*/
function analisarEstados(estados) {
  let primeiraTroca = null;
  let quantidadeTrocas = 0;
  let estadoFinal = null;

  for (let i = 1; i < estados.length; i++) {
    if (estados[i] !== estados[i - 1]) {
      quantidadeTrocas ++;

      if (primeiraTroca === null) {
        primeiraTroca = i;
      }
      
    }

    estadoFinal = estados[i];
  }

  if (estados.length === 1) {
    estadoFinal = estados[0];
  }

  return {
    primeiraTroca,
    quantidadeTrocas,
    estadoFinal
  }
}

console.log(analisarEstados(["DESLIGADO", "LIGADO", "LIGADO", "DESLIGADO"]));
// { primeiraTroca: 1, quantidadeTrocas: 2, estadoFinal: "DESLIGADO" }

console.log(analisarEstados(["LIGADO", "LIGADO", "LIGADO"]));
// { primeiraTroca: null, quantidadeTrocas: 0,  estadoFinal: "LIGADO" }

console.log(analisarEstados(["DESLIGADO", "LIGADO"]));
// { primeiraTroca: 1, quantidadeTrocas: 1, estadoFinal: "LIGADO" }

console.log(analisarEstados([ "LIGADO", "DESLIGADO", "LIGADO", "DESLIGADO", "LIGADO"]));
// { primeiraTroca: 1, quantidadeTrocas: 4, estadoFinal: "LIGADO" }

console.log(analisarEstados(["DESLIGADO"]));
// { primeiraTroca: null, quantidadeTrocas: 0, estadoFinal: "DESLIGADO" }

console.log(analisarEstados([]));
// { primeiraTroca: null, quantidadeTrocas: 0, estadoFinal: null }

/*3️⃣ Seleção de Registro com Desempate 🏆
Um sistema recebe candidatos:
{
  nome: "Ana",
  pontos: 80,
  experiencia: 3
}
O sistema deve escolher um único candidato seguindo esta ordem:
maior pontos;
se empatar, maior experiencia;
se ainda empatar, permanece o primeiro que apareceu.
Retorne:
{
  nome,
  pontos,
  experiencia
}
Se a lista estiver vazia, retorne null.*/
function selecionarCandidato(candidatos) {
  let candidato = null;

  for (let atual of candidatos) {
    if (
      candidato === null ||
      atual.pontos > candidato.pontos ||
      (atual.pontos === candidato.pontos &&
        atual.experiencia > candidato.experiencia)
    ) {
      candidato = atual;
    }
  }


  return candidato;
}

console.log(selecionarCandidato([
  {nome: "Ana", pontos: 80, experiencia: 3},
  {nome: "Bruno", pontos: 90, experiencia: 1},
  {nome: "Carlos", pontos: 85, experiencia: 5}
]));
// {nome: "Bruno", pontos: 90, experiencia: 1}

console.log(selecionarCandidato([
  {nome: "Ana", pontos: 90, experiencia: 2},
  {nome: "Bruno", pontos: 90, experiencia: 5},
  {nome: "Carlos", pontos: 80, experiencia: 10}
]));
// {nome: "Bruno", pontos: 90, experiencia: 5}

console.log(selecionarCandidato([
  {nome: "Ana", pontos: 90, experiencia: 5},
  {nome: "Bruno", pontos: 90, experiencia: 5},
  {nome: "Carlos", pontos: 90, experiencia: 5}
]));
// {nome: "Ana", pontos: 90, experiencia: 5}

console.log(selecionarCandidato([
  {nome: "Ana", pontos: 70, experiencia: 10},
  {nome: "Bruno", pontos: 80, experiencia: 1}
]));
// {nome: "Bruno", pontos: 80, experiencia: 1}

console.log(selecionarCandidato([
  {nome: "Ana", pontos: 100, experiencia: 0},
  {nome: "Bruno", pontos: 99, experiencia: 20}
]));
// {nome: "Ana", pontos: 100, experiencia: 0}

console.log(selecionarCandidato([]));
// null