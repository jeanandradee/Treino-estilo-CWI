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
