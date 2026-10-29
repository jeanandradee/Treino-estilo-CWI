/* 🛰️ Desafio 1 — Central de monitoramento
Uma central recebe registros numéricos de sensores. Cada número representa uma leitura:
Negativo: leitura inválida.
Zero: sensor sem atividade.
Positivo: leitura válida.
Crie a função analisarLeituras(leituras), que deve retornar um objeto com:
validas: quantidade de leituras positivas.
inativas: quantidade de leituras iguais a zero.
invalidas: quantidade de leituras negativas.
maiorValida: maior leitura positiva encontrada. Se não houver nenhuma, retornar 0. */

function analisarLeituras(leituras) {
  let validas = 0;
  let inativas = 0;
  let invalidas = 0;
  let maiorValida = 0;

  for (let leitura of leituras) {
    if (leitura > 0) {
      validas ++ ;

      if (leitura > maiorValida) {
        maiorValida = leitura ;
      }
    } else if (leitura === 0) {
      inativas ++ ;
    } else {
      invalidas ++ ;
    }
  }

  return { validas, inativas, invalidas, maiorValida };
}

console.log(analisarLeituras([12, 0, -3, 8, 0, 15]));
// { validas: 3, inativas: 2, invalidas: 1, maiorValida: 15 }

console.log(analisarLeituras([-5, 0, -2]));
// { validas: 0, inativas: 1, invalidas: 2, maiorValida: 0 }

console.log(analisarLeituras([4, 9, 2]));
// { validas: 3, inativas: 0, invalidas: 0, maiorValida: 9 }

/* 🎮 Desafio 2 — Resultado da partida
Um jogo registra o histórico de pontos de um jogador ao longo de várias rodadas.
Crie a função analisarPartida(pontos), que deve retornar um objeto com:
total: soma de todos os pontos.
rodadasPositivas: quantidade de rodadas com pontuação maior que zero.
melhorRodada: maior pontuação registrada.
venceu: true se o total for maior ou igual a 100, ou false caso contrário.
Considere que o array pode estar vazio. Nesse caso, os valores numéricos devem ser 0 e venceu deve ser false. */

function analisarPartida(pontos) {
  let total = 0;
  let rodadasPositivas = 0;
  let melhorRodada = 0;
  let venceu = false;

  for (let ponto of pontos) {
    total += ponto;

    if (ponto > 0) {
      rodadasPositivas ++ ;
    }

    if (ponto > melhorRodada) {
      melhorRodada = ponto;
    }
  }

  if (total >= 100) {
    venceu = true;
  }

  return { total, rodadasPositivas, melhorRodada, venceu };
}

console.log(analisarPartida([20, 35, 0, 50]));
// { total: 105, rodadasPositivas: 3, melhorRodada: 50, venceu: true }

console.log(analisarPartida([10, -5, 20, 15]));
// { total: 40, rodadasPositivas: 3, melhorRodada: 20, venceu: false }

console.log(analisarPartida([]));
// { total: 0, rodadasPositivas: 0, melhorRodada: 0, venceu: false }

/* 🔐 Desafio 3 — Validador de códigos
Um sistema recebe códigos de acesso e precisa identificar quais atendem às regras.
Um código é válido quando:
Possui pelo menos 5 caracteres.
Começa com a letra "X" ou "Y", considerando maiúsculas e minúsculas como equivalentes.
Termina com um número entre "0" e "9".
Crie a função validarAcessos(codigos), que deve retornar um objeto com:
validos: array contendo os códigos válidos, preservando a ordem original.
invalidos: quantidade de códigos inválidos. */

function validarAcessos(codigos) {
  let validos = [];
  let invalidos = 0;

  for (let codigo of codigos) {
    let primeiraLetra = codigo[0].toUpperCase();

    let ultimoCaractere = codigo[codigo.length - 1];

    if (
      codigo.length >= 5 &&
      (primeiraLetra === "X" || primeiraLetra === "Y") &&
      ultimoCaractere >= "0" &&
      ultimoCaractere <= "9"
    ) {
      validos.push(codigo);
    } else {
      invalidos++;
    }
  }

  return { validos, invalidos };
}

console.log(validarAcessos(["Xabc1", "Y123", "zteste2", "yporta8", "Xcasa9"]));
// { validos: ["Xabc1", "yporta8", "Xcasa9"], invalidos: 2 }

console.log(validarAcessos(["X1234", "Yabcd5", "Y12a3", "Zcasa7"]));
// { validos: ["X1234", "Yabcd5", "Y12a3"], invalidos: 1 }

console.log(validarAcessos([]));
// { validos: [], invalidos: 0 }