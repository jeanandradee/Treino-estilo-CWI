/* 1️⃣ Conversor de coordenadas 🧭
Um sistema recebe uma posição representada por dois números:
{x, y}
Também recebe uma lista de deslocamentos.
Cada deslocamento pode ser:
- "D": aumenta x em 1;
- "E": diminui x em 1;
- "C": aumenta y em 1;
- "B": diminui y em 1.
A posição inicial pode ser diferente de zero.
Comandos desconhecidos devem ser ignorados.
Retorne a posição final no formato {x, y}.
Não altere o objeto de posição inicial.
*/

function calcularPosicao(posicaoInicial, comandos) {
  let x = posicaoInicial.x;
  let y = posicaoInicial.y;
  for (let comando of comandos) {
    if (comando === "D") {
      x ++;
    } else if (comando === "E") {
      x --;
    } else if (comando === "C") {
      y ++;
    } else if (comando === "B") {
      y --;
    }
  }

  return {x, y};
}

console.log(calcularPosicao({x: 0, y: 0}, ["D", "D", "C"])); // {x: 2, y: 1}

console.log(calcularPosicao({x: 5, y: 3}, ["E", "B", "B"])); // {x: 4, y: 1}

console.log(calcularPosicao({x: -2, y: 4}, ["D", "C", "X"])); // {x: -1, y: 5}

console.log(calcularPosicao({x: 0, y: 0}, ["E", "B", "D", "C"])); // {x: 0, y: 0}

console.log(calcularPosicao({x: 10, y: -5}, [])); // {x: 10, y: -5}

console.log(calcularPosicao({x: 1, y: 1}, ["C", "C", "B", "E", "E"])); // {x: -1, y: 2}

/* 2️⃣ Comparador de palavras 🔤
Uma função recebe duas palavras.
Retorne:
{
  iguais,
  tamanhoA,
  tamanhoB,
  diferencaTamanho
}
Regras:
- "iguais" deve ser true somente se as palavras forem
  exatamente iguais, incluindo maiúsculas e minúsculas;
- tamanhoA e tamanhoB representam a quantidade de caracteres;
- diferencaTamanho é a diferença absoluta entre os tamanhos.
Não use Math.abs().
*/

function compararPalavras(a, b) {
  let iguais = a === b;
  let tamanhoA = a.length;
  let tamanhoB = b.length;
  let diferencaTamanho = Math.abs(tamanhoA - tamanhoB);

  return {iguais, tamanhoA, tamanhoB, diferencaTamanho};
}

console.log(compararPalavras("casa", "casa")); // {iguais: true, tamanhoA: 4, tamanhoB: 4, diferencaTamanho: 0}

console.log(compararPalavras("Casa", "casa")); // {iguais: false, tamanhoA: 4, tamanhoB: 4, diferencaTamanho: 0}

console.log(compararPalavras("sol", "lua")); // {iguais: false, tamanhoA: 3, tamanhoB: 3, diferencaTamanho: 0}

console.log(compararPalavras("programacao", "JS")); // {iguais: false, tamanhoA: 11, tamanhoB: 2, diferencaTamanho: 9}

console.log(compararPalavras("", "abc")); // {iguais: false, tamanhoA: 0, tamanhoB: 3, diferencaTamanho: 3}

console.log(compararPalavras("teste", "TESTE")); // {iguais: false, tamanhoA: 5, tamanhoB: 5, diferencaTamanho: 0}

/* 3️⃣ Rotação de matriz 🔄
Uma função recebe uma matriz quadrada de números.
Retorne uma NOVA matriz girada 90 graus no sentido horário.
Exemplo:
[
  [1, 2],
  [3, 4]
]
Resultado:
[
  [3, 1],
  [4, 2]
]
Não altere a matriz original.
A matriz terá pelo menos uma linha e será quadrada.
*/

function girarMatriz(matriz) {
  let resultado = [];
  let n = matriz.length;

  for (let i = 0; i < n; i++) {
    let linha = [];

    for (let j = n - 1; j >= 0; j--) {
      linha.push(matriz[j][i]);
    }

    resultado.push(linha);
  }

  return resultado;
}

console.log(girarMatriz([ [1, 2], [3, 4] ]));
// [[3, 1], [4, 2]]

console.log(girarMatriz([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]));
// [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

console.log(girarMatriz([ [5] ]));
// [[5]]

console.log(girarMatriz([ [1, 2], [3, 4] ]));
// [[3, 1], [4, 2]]

console.log(girarMatriz([ [0, 0], [0, 1] ]));
// [[0, 0], [1, 0]]

console.log(girarMatriz([ [-1, -2], [-3, -4] ]));
// [[-3, -1], [-4, -2]]

/* 4️⃣ Cálculo de viagem espacial 🚀
Uma nave percorre uma distância em linha reta.
Receba:
- distancia: distância total em quilômetros;
- velocidade: velocidade constante em km/h.
Calcule:
- tempoHoras: tempo total em horas;
- tempoMinutos: o mesmo tempo convertido para minutos;
- distanciaMetade: metade da distância;
- distanciaRestanteAposMetade: distância que falta depois
  de percorrer metade do trajeto.
Retorne:
{
  tempoHoras,
  tempoMinutos,
  distanciaMetade,
  distanciaRestanteAposMetade
}
Arredonde tempoHoras para duas casas decimais.
Não arredonde os demais valores.
Considere velocidade maior que zero.
*/

function calcularViagemEspacial(distancia, velocidade) {
  const tempoHoras = Number((distancia / velocidade).toFixed(2));

  const tempoMinutos = (distancia / velocidade) * 60;

  const distanciaMetade = distancia / 2;

  const distanciaRestanteAposMetade = distancia - distanciaMetade;

  return {
    tempoHoras,
    tempoMinutos,
    distanciaMetade,
    distanciaRestanteAposMetade
  };
}

console.log(calcularViagemEspacial(1000, 500));
// { tempoHoras: 2, tempoMinutos: 120, distanciaMetade: 500, distanciaRestanteAposMetade: 500 }

console.log(calcularViagemEspacial(300, 100));
// { tempoHoras: 3, tempoMinutos: 180, distanciaMetade: 150, distanciaRestanteAposMetade: 150 }

console.log(calcularViagemEspacial(150, 200));
// { tempoHoras: 0.75, tempoMinutos: 45, distanciaMetade: 75, distanciaRestanteAposMetade: 75 }

console.log(calcularViagemEspacial(100, 40));
// { tempoHoras: 2.5, tempoMinutos: 150, distanciaMetade: 50, distanciaRestanteAposMetade: 50 }

console.log(calcularViagemEspacial(1, 4));
// { tempoHoras: 0.25, tempoMinutos: 15, distanciaMetade: 0.5, distanciaRestanteAposMetade: 0.5 }

console.log(calcularViagemEspacial(0, 10));
// { tempoHoras: 0, tempoMinutos: 0, distanciaMetade: 0, distanciaRestanteAposMetade: 0 }

/* 5️⃣ Simulador de bateria 🔋
Um dispositivo começa com um nível de bateria informado.
Recebe uma lista de ações:
- "USAR": diminui a bateria em 15 pontos;
- "CARREGAR": aumenta a bateria em 20 pontos;
- qualquer outra ação é ignorada.
A bateria nunca pode ficar abaixo de 0 nem acima de 100.
Se uma ação ultrapassar os limites, ajuste o nível para
o limite correspondente.
Retorne:
{
  bateriaFinal,
  vezesEsgotada
}
"vezesEsgotada" aumenta quando uma ação faz a bateria chegar
a 0. Se ela já estiver em 0 e outra ação "USAR" ocorrer,
conte novamente, pois a ação também termina com bateria zero.
*/

function simularBateria(bateriaInicial, acoes) {
  let bateriaFinal = bateriaInicial;
  let vezesEsgotada = 0;

  for (let acao of acoes) {
    if (acao === "USAR") {
      bateriaFinal -= 15;

      if (bateriaFinal < 0) {
        bateriaFinal = 0;
      }

      if (bateriaFinal === 0) {
        vezesEsgotada++;
      }

    } else if (acao === "CARREGAR") {
      bateriaFinal += 20;

      if (bateriaFinal > 100) {
        bateriaFinal = 100;
      }
    }
  }

  return { bateriaFinal, vezesEsgotada };
}

console.log(simularBateria(50, ["USAR", "CARREGAR"])); // {bateriaFinal: 55, vezesEsgotada: 0}

console.log(simularBateria(10, ["USAR"])); // {bateriaFinal: 0, vezesEsgotada: 1}

console.log(simularBateria(100, ["CARREGAR", "USAR"])); // {bateriaFinal: 85, vezesEsgotada: 0}

console.log(simularBateria(15, ["USAR", "USAR", "CARREGAR"])); // {bateriaFinal: 20, vezesEsgotada: 2}

console.log(simularBateria(90, ["CARREGAR", "CARREGAR"])); // {bateriaFinal: 100, vezesEsgotada: 0}

console.log(simularBateria(0, ["USAR", "X", "USAR"])); // {bateriaFinal: 0, vezesEsgotada: 2}

/* 6️⃣ Analisador de partidas ⚽
Uma função recebe uma lista de partidas.
Cada partida contém:
{
  timeA,
  timeB,
  golsA,
  golsB
}
Calcule, para o timeA de cada partida:
- vitorias: quantidade de vitórias;
- empates: quantidade de empates;
- derrotas: quantidade de derrotas;
- golsMarcados: soma dos gols de timeA;
- golsSofridos: soma dos gols de timeA sofridos para timeB.
Retorne:
{
  vitorias,
  empates,
  derrotas,
  golsMarcados,
  golsSofridos
}
Considere apenas os gols de timeA para os cálculos.
*/

function analisarPartidas(partidas) {
  let vitorias = 0;
  let empates = 0;
  let derrotas = 0;
  let golsMarcados = 0;
  let golsSofridos = 0;

  for (let partida of partidas) {
    golsMarcados += partida.golsA;
    golsSofridos += partida.golsB;

    if (partida.golsA > partida.golsB) {
      vitorias++;
    } else if (partida.golsA === partida.golsB) {
      empates++;
    } else {
      derrotas++;
    }
  }

  return {
    vitorias,
    empates,
    derrotas,
    golsMarcados,
    golsSofridos
  };
}

console.log(analisarPartidas([ {timeA: "A", timeB: "B", golsA: 2, golsB: 1}, {timeA: "A", timeB: "C", golsA: 0, golsB: 0}]));
// {vitorias: 1, empates: 1, derrotas: 0, golsMarcados: 2, golsSofridos: 1}

console.log(analisarPartidas([ {timeA: "A", timeB: "B", golsA: 0, golsB: 3}]));
// {vitorias: 0, empates: 0, derrotas: 1, golsMarcados: 0, golsSofridos: 3}

console.log(analisarPartidas([ {timeA: "A", timeB: "B", golsA: 1, golsB: 1},
  {timeA: "A", timeB: "C", golsA: 2, golsB: 2}, {timeA: "A", timeB: "D", golsA: 3, golsB: 3}]));
// {vitorias: 0, empates: 3, derrotas: 0, golsMarcados: 6, golsSofridos: 6}

console.log(analisarPartidas([]));
// {vitorias: 0, empates: 0, derrotas: 0, golsMarcados: 0, golsSofridos: 0}

console.log(analisarPartidas([ {timeA: "A", timeB: "B", golsA: 4, golsB: 0}, {timeA: "A", timeB: "C", golsA: 1, golsB: 2}]));
// {vitorias: 1, empates: 0, derrotas: 1, golsMarcados: 5, golsSofridos: 2}

console.log(analisarPartidas([ {timeA: "A", timeB: "B", golsA: 0, golsB: 0}, {timeA: "A", timeB: "C", golsA: 0, golsB: 1}]));
// {vitorias: 0, empates: 1, derrotas: 1, golsMarcados: 0, golsSofridos: 1}