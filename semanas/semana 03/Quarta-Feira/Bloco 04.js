/*🧩 Q1 — Campeonato de robôs
Uma competição registra o resultado de cada rodada para um robô:
"V": vitória, ganha 3 pontos.
"E": empate, ganha 1 ponto.
"D": derrota, não ganha pontos.
"X": rodada cancelada, não altera a pontuação.
Crie resumirCampeonato(resultados), que retorna um objeto com:
pontos: total de pontos.
vitorias: quantidade de vitórias.
rodadasValidas: quantidade de rodadas que não foram canceladas.*/
function resumirCampeonato(resultados) {
  let pontos = 0;
  let vitorias = 0;
  let rodadasValidas = 0;

  for (let rodada of resultados) {
    if (rodada === "V") {
      vitorias ++;
      pontos += 3;
      rodadasValidas ++;
    } else if (rodada === "E") {
      pontos ++;
      rodadasValidas ++;
    } else if (rodada === "D") {
      rodadasValidas ++;
    }
  }

  return {pontos, vitorias, rodadasValidas};
}

console.log(resumirCampeonato(["V", "E", "D", "V"]));
// { pontos: 7, vitorias: 2, rodadasValidas: 4 }

console.log(resumirCampeonato(["D", "D", "D"]));
// { pontos: 0, vitorias: 0, rodadasValidas: 3 }

console.log(resumirCampeonato(["V", "X", "V", "E"]));
// { pontos: 7, vitorias: 2, rodadasValidas: 3 }

console.log(resumirCampeonato([]));
// { pontos: 0, vitorias: 0, rodadasValidas: 0 }

console.log(resumirCampeonato(["X", "X"]));
// { pontos: 0, vitorias: 0, rodadasValidas: 0 }

console.log(resumirCampeonato(["E", "V", "E", "D", "X"]));
// { pontos: 5, vitorias: 1, rodadasValidas: 4 }

/*🧩 Q2 — Distribuição de energia
Um laboratório possui uma quantidade de energia para distribuir entre equipamentos. Cada equipamento tem um consumo solicitado.
Crie distribuirEnergia(energia, consumos), que retorna um array com a energia efetivamente entregue a cada equipamento.
Regras:
Os equipamentos são atendidos na ordem recebida.
Cada equipamento recebe o consumo solicitado se houver energia suficiente.
Caso contrário, recebe toda a energia restante.
Depois que a energia acabar, os próximos recebem 0.
A energia nunca pode ficar negativa.
Não altere o array original.*/
function distribuirEnergia(energia, consumos) {
  let resultado = [];

  for (let i = 0; i < consumos.length; i++) {
    if (energia >= consumos[i]) {
      resultado.push(consumos[i]);
      energia -= consumos[i];
    } else {
      resultado.push(energia);
      energia = 0;
    }
  }

  return resultado;
}

console.log(distribuirEnergia(20, [5, 8, 4]));
// [5, 8, 4]

console.log(distribuirEnergia(10, [6, 7, 2]));
// [6, 4, 0]

console.log(distribuirEnergia(0, [3, 5]));
// [0, 0]

console.log(distribuirEnergia(8, [2, 2, 2]));
// [2, 2, 2]

console.log(distribuirEnergia(5, []));
// []

console.log(distribuirEnergia(12, [10, 5, 1, 2]));
// [10, 2, 0, 0]

/*🧩 Q3 — Auditoria de resultados
Uma plataforma compara as notas antigas e novas de participantes. Os dois arrays possuem os mesmos participantes na mesma ordem.
Crie auditarNotas(antigas, novas), que retorna um objeto com:
melhoraram: quantidade de participantes cuja nota aumentou.
pioraram: quantidade de participantes cuja nota diminuiu.
mantiveram: quantidade de participantes cuja nota permaneceu igual.
maiorVariacao: maior diferença absoluta entre uma nota antiga e uma nova. Se não houver participantes, deve ser 0.
Importante: não altere os arrays originais.*/
function auditarNotas(antigas, novas) {
  let melhoraram = 0;
  let pioraram = 0;
  let mantiveram = 0; 
  let maiorVariacao = 0

  for (let i = 0; i < antigas.length; i++) {
    if (antigas[i] > novas[i]) {
      pioraram ++;
    } else if ( antigas[i] < novas[i]) {
      melhoraram ++;
    } else {
      mantiveram ++;
    }

    let variacao = Math.abs(antigas[i] - novas[i]);

    if (variacao > maiorVariacao) {
      maiorVariacao = variacao;
    }
  }

  return {melhoraram, pioraram, mantiveram, maiorVariacao};
}

console.log(auditarNotas([5, 7, 8], [8, 6, 8]));
// { melhoraram: 1, pioraram: 1, mantiveram: 1, maiorVariacao: 3 }

console.log(auditarNotas([10, 4, 6], [10, 4, 6]));
// { melhoraram: 0, pioraram: 0, mantiveram: 3, maiorVariacao: 0 }

console.log(auditarNotas([2, 3, 4], [5, 6, 7]));
// { melhoraram: 3, pioraram: 0, mantiveram: 0, maiorVariacao: 3 }

console.log(auditarNotas([9, 8, 7], [4, 8, 2]));
// { melhoraram: 0, pioraram: 2, mantiveram: 1, maiorVariacao: 5 }

console.log(auditarNotas([], []));
// { melhoraram: 0, pioraram: 0, mantiveram: 0, maiorVariacao: 0 }

console.log(auditarNotas([1, 10, 5, 6], [3, 7, 5, 10]));
// { melhoraram: 2, pioraram: 1, mantiveram: 1, maiorVariacao: 4 }