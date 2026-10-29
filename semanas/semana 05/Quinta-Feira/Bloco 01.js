/* 🕵️ Desafio 1 — O elevador em pane
Um elevador registra a sequência de andares pelos quais passou durante um teste. Ele começa no térreo, representado pelo andar 0.
O técnico quer descobrir se o elevador respeitou as restrições do teste.
Crie a função analisarElevador(movimentos).
A função recebe um array de números, em que cada número representa o próximo andar visitado.
O relatório deve conter:
andarFinal: o último andar visitado. Se não houver movimentos, será 0.
maiorAndar: o andar mais alto alcançado, considerando também o térreo como ponto de partida.
subidas: quantas vezes o elevador foi para um andar superior ao anterior.
violacoes: quantidade de vezes em que o elevador visitou um andar negativo.
Exemplo para interpretar: ir do andar 3 para o 2 não é uma subida; ir do 2 para o 5 é.*/
function analisarElevador(movimentos) {
  let andarFinal = 0;
  let maiorAndar = 0;
  let subidas = 0;
  let violacoes = 0;
  let andarAnterior = 0;

  for (let i = 0; i < movimentos.length; i++) {
    let andarAtual = movimentos[i];

    andarFinal = andarAtual;

    if (andarAtual > maiorAndar) {
      maiorAndar = andarAtual;
    }

    if (andarAtual > andarAnterior) {
      subidas++;
    }

    if (andarAtual < 0) {
      violacoes++;
    }

    andarAnterior = andarAtual;
  }

  return { andarFinal, maiorAndar, subidas, violacoes };
}

console.log(analisarElevador([2, 5, 3, 7, -1, 4]));
// Esperado: { andarFinal: 4, maiorAndar: 7, subidas: 3, violacoes: 1 }

console.log(analisarElevador([]));
// Esperado: { andarFinal: 0, maiorAndar: 0, subidas: 0, violacoes: 0 }

console.log(analisarElevador([-2, -1, 0]));
// Esperado: { andarFinal: 0, maiorAndar: 0, subidas: 2, violacoes: 2 }

/*🎮 Desafio 2 — A fase secreta
Em um jogo, o personagem coleta pontos e pode encontrar uma passagem secreta.
Você recebe um array de eventos:
"PONTO": soma 10 pontos.
"BONUS": soma 25 pontos.
"DANO": perde 15 pontos.
"PORTA": tenta abrir a passagem secreta.
A passagem só pode ser aberta se o jogador tiver pelo menos 30 pontos naquele momento.
Crie a função simularFase(eventos).
O resultado deve conter:
pontuacaoFinal: pontuação ao terminar a sequência.
portaAberta: true se a porta foi aberta em algum momento; caso contrário, false.
eventosIgnorados: quantidade de eventos desconhecidos.
A pontuação nunca pode ficar abaixo de zero. Eventos desconhecidos não alteram a pontuação.
Importante: se a porta for encontrada quando o jogador tiver menos de 30 pontos, ela permanece fechada. O jogador poderá tentar novamente se encontrar outra "PORTA" depois.*/
function simularFase(eventos) {
  let pontuacaoFinal = 0;
  let portaAberta = false;
  let eventosIgnorados = 0;

  for (let evento of eventos) {
    if (evento === "PONTO") {
      pontuacaoFinal += 10;
    } else if (evento === "BONUS") {
      pontuacaoFinal += 25;
    } else if (evento === "DANO") {
      pontuacaoFinal -= 15;

      if (pontuacaoFinal < 0) {
        pontuacaoFinal = 0;
      }
    } else if (evento === "PORTA") {
      if (pontuacaoFinal >= 30) {
        portaAberta = true;
      }
    } else {
      eventosIgnorados++;
    }
  }

  return { pontuacaoFinal, portaAberta, eventosIgnorados };
}

console.log(simularFase([ "PONTO", "PONTO", "DANO", "PORTA", "BONUS", "PORTA", "PONTO", "???" ]));
// Esperado: { pontuacaoFinal: 45, portaAberta: true, eventosIgnorados: 1 }

console.log(simularFase([ "DANO", "PONTO", "PORTA", "???" ]));
// Esperado: { pontuacaoFinal: 10, portaAberta: false, eventosIgnorados: 1 }

console.log(simularFase([]));
// Esperado: { pontuacaoFinal: 0, portaAberta: false, eventosIgnorados: 0 }

/* 🔍 Desafio 3 — O arquivo corrompido
Um sistema recebe uma sequência de números que deveria representar uma leitura válida.
A leitura é considerada suspeita quando:
há pelo menos dois números negativos consecutivos; ou
a soma dos números positivos é maior que 100.
Crie a função investigarLeitura(valores).
O resultado deve conter:
somaPositivos: soma somente dos valores maiores que zero.
negativosConsecutivos: true se houver pelo menos dois negativos seguidos.
suspeita: true se pelo menos uma das duas condições de suspeita for satisfeita.
O zero não é positivo nem negativo e interrompe uma sequência de negativos.*/
function investigarLeitura(valores) {
  let somaPositivos = 0;
  let negativosConsecutivos = false;
  let suspeita = false;
  let numAnterior = 0;

  for (let i = 0; i < valores.length; i++) {
    let numAtual = valores[i];
    
    if (numAtual > 0) {
      somaPositivos += numAtual;
    }

    if (numAtual < 0 && numAnterior < 0) {
      negativosConsecutivos = true;
    }
    numAnterior = numAtual;
  }
  if (negativosConsecutivos || somaPositivos > 100) {
    suspeita = true;
  }

  return { somaPositivos, negativosConsecutivos, suspeita };
}

console.log(investigarLeitura([10, -2, -5, 20]));
// Esperado: { somaPositivos: 30, negativosConsecutivos: true, suspeita: true }

console.log(investigarLeitura([60, 50, -1, 0, -2]));
// Esperado: { somaPositivos: 110, negativosConsecutivos: false, suspeita: true }

console.log(investigarLeitura([10, -1, 0, -3, 20]));
// Esperado: { somaPositivos: 30, negativosConsecutivos: false, suspeita: false }