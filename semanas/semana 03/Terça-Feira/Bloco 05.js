/*🏆 B5 — Análise de partidas
Um sistema recebe os resultados de várias partidas de um jogador. Cada resultado é representado por um número inteiro:
1 significa vitória;
0 significa empate;
-1 significa derrota.
Sua tarefa é criar uma função que analise os resultados e retorne um objeto com as estatísticas do jogador.
Regras
A função analisarPartidas(resultados) deve retornar um objeto com:
vitorias: quantidade de vitórias;
empates: quantidade de empates;
derrotas: quantidade de derrotas;
pontos: pontuação total, considerando 3 pontos por vitória, 1 por empate e 0 por derrota;
melhorSequencia: maior quantidade de vitórias consecutivas.
Importante:
Uma derrota ou um empate interrompe a sequência de vitórias.
Se não houver vitórias, melhorSequencia será 0.
Se o array estiver vazio, todas as quantidades e a pontuação serão 0.
Não altere o array original.
Código para resolver
B5 — Análise de partidas
Exemplo:
[1, 1, 0, -1, 1, 1, 1]
Resultado:
{
  vitorias: 5? 
  empates: 1,
  derrotas: 1,
  pontos: 16,
  melhorSequencia: 3
}
Regras:
1  = vitória
0  = empate
-1 = derrota
Vitória: 3 pontos
Empate: 1 ponto
Derrota: 0 pontos
*/

function analisarPartidas(resultados) {
  let vitorias = 0;
  let empates = 0;
  let derrotas = 0;
  let pontos = 0;
  let melhorSequencia = 0;
  let sequenciaAtual = 0;

  for (let partida of resultados) {
    if (partida === 1) {
      vitorias++;
      pontos += 3;
      sequenciaAtual++;
    } else if (partida === 0) {
      empates++;
      pontos++;
      sequenciaAtual = 0;
    } else {
      derrotas++;
      sequenciaAtual = 0;
    }

    if (sequenciaAtual > melhorSequencia) {
      melhorSequencia = sequenciaAtual;
    }
  }

  return { vitorias, empates, derrotas, pontos, melhorSequencia };
}

console.log(analisarPartidas([1, 1, 0, -1, 1, 1, 1]));
// { vitorias: 5, empates: 1, derrotas: 1, pontos: 16, melhorSequencia: 3 }

console.log(analisarPartidas([1, 1, 1, 1]));
// { vitorias: 4, empates: 0, derrotas: 0, pontos: 12, melhorSequencia: 4 }

console.log(analisarPartidas([0, -1, 0, -1]));
// { vitorias: 0, empates: 2, derrotas: 2, pontos: 2, melhorSequencia: 0 }

console.log(analisarPartidas([-1, 1, 0, 1, 1]));
// { vitorias: 3, empates: 1, derrotas: 1, pontos: 10, melhorSequencia: 2 }

console.log(analisarPartidas([]));
// { vitorias: 0, empates: 0, derrotas: 0, pontos: 0, melhorSequencia: 0 }

console.log(analisarPartidas([1, 0, 1, 1, -1, 1, 1]));
// { vitorias: 5, empates: 1, derrotas: 1, pontos: 16, melhorSequencia: 2 }