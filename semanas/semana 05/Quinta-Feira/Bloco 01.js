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

/* 🧩 Desafio 4 — O detector de mensagens suspeitas
Um sistema de segurança analisa mensagens recebidas e precisa identificar possíveis tentativas de invasão.
Crie a função analisarMensagem(mensagem).
A mensagem é considerada suspeita quando:
contém a palavra "senha" em qualquer combinação de maiúsculas e minúsculas; ou
contém pelo menos três caracteres !.
O resultado deve conter:
quantidadeCaracteres: quantidade de caracteres da mensagem.
quantidadeExclamacoes: quantidade de caracteres !.
contemSenha: true se a palavra "senha" aparecer, ignorando maiúsculas e minúsculas.
suspeita: true se pelo menos uma das condições de suspeita for satisfeita.
Atenção: a palavra "senha" pode estar dentro de uma frase maior. Não é necessário que seja uma palavra isolada.*/
function analisarMensagem(mensagem) {
  mensagem = mensagem.toUpperCase();
  let quantidadeCaracteres = 0;
  let quantidadeExclamacoes = 0;
  let contemSenha = mensagem.includes("SENHA") ? true : false;
  let suspeita = false;

  for (let i = 0; i < mensagem.length; i++) {
    quantidadeCaracteres ++ ;
    if (mensagem[i] === "!") {
      quantidadeExclamacoes ++ ;
    }
  }
  
  if (contemSenha || quantidadeExclamacoes >= 3) {
    suspeita = true;
  }

  return { quantidadeCaracteres, quantidadeExclamacoes, contemSenha, suspeita };

}

console.log(analisarMensagem("A SENHA foi alterada!"));
// Esperado: { quantidadeCaracteres: 21, quantidadeExclamacoes: 1, contemSenha: true, suspeita: true }

console.log(analisarMensagem("Tudo certo!!!"));
// Esperado: { quantidadeCaracteres: 13, quantidadeExclamacoes: 3, contemSenha: false, suspeita: true }

console.log(analisarMensagem("Sistema iniciado"));
// Esperado: { quantidadeCaracteres: 16, quantidadeExclamacoes: 0, contemSenha: false, suspeita: false }

/* 🧩 Desafio 5 — O robô explorador
Um robô começa na posição (0, 0) de um mapa. Ele recebe comandos para se movimentar:
"N": aumenta y em 1.
"S": diminui y em 1.
"L": aumenta x em 1.
"O": diminui x em 1.
Comandos desconhecidos são ignorados.
Crie a função explorarMapa(comandos).
O resultado deve conter:
x: posição horizontal final.
y: posição vertical final.
distanciaManhattan: soma dos valores absolutos de x e y finais.
comandosIgnorados: quantidade de comandos desconhecidos.
Não é necessário calcular a distância percorrida pelo robô, mas sim sua distância em relação ao ponto inicial.*/
function explorarMapa(comandos) {
  let x = 0;
  let y = 0;
  let distanciaManhattan = 0;
  let comandosIgnorados = 0;

  for (let comando of comandos) {
    if (comando === "N") {
      y++;
    } else if (comando === "S") {
      y--;
    } else if (comando === "L") {
      x++;
    } else if (comando === "O") {
      x--;
    } else {
      comandosIgnorados++;
    }
  }

  distanciaManhattan = Math.abs(x) + Math.abs(y);

  return { x, y, distanciaManhattan, comandosIgnorados };
}

console.log(explorarMapa(["N", "N", "L", "S", "?", "O", "L"]));
// Esperado: { x: 1, y: 1, distanciaManhattan: 2, comandosIgnorados: 1 }

console.log(explorarMapa(["S", "S", "O", "O", "N"]));
// Esperado: { x: -2, y: -1, distanciaManhattan: 3, comandosIgnorados: 0 }

console.log(explorarMapa([]));
// Esperado: { x: 0, y: 0, distanciaManhattan: 0, comandosIgnorados: 0 }

/* 🧩 Desafio 6 — A sequência interrompida
Um equipamento deveria produzir uma sequência de números inteiros crescentes, começando em 1, sem saltos.
Por exemplo, [1, 2, 3, 4] está correta, mas [1, 2, 4] apresenta uma interrupção.
Crie a função verificarSequencia(valores).
A função deve retornar:
valida: true se a sequência começar em 1 e cada número seguinte for exatamente uma unidade maior que o anterior.
primeiraInterrupcao: índice do primeiro elemento que não segue a regra; se não houver interrupção, retorne null.
esperado: valor que deveria estar nessa posição.
Regras adicionais:
Uma sequência vazia é inválida; nesse caso, primeiraInterrupcao deve ser 0 e esperado deve ser 1.
Se o primeiro elemento não for 1, a interrupção está no índice 0.
Não ordene a sequência antes de verificá-la: a ordem recebida importa.*/
function verificarSequencia(valores) {
  let valida = true;
  let primeiraInterrupcao = null;
  let esperado = 1;

  if (valores.length === 0) {
    return {
      valida: false,
      primeiraInterrupcao: 0,
      esperado: 1
    };
  }

  for (let i = 0; i < valores.length; i++) {
    esperado = i + 1;

    if (valores[i] !== esperado) {
      valida = false;
      primeiraInterrupcao = i;
      break;
    }
  }

  if (!valida) {
    esperado = primeiraInterrupcao + 1;
  } else {
    esperado = null;
  }

  return { valida, primeiraInterrupcao, esperado };
}

console.log(verificarSequencia([1, 2, 3, 4]));
// Esperado:
// {
//   valida: true,
//   primeiraInterrupcao: null,
//   esperado: null
// }

console.log(verificarSequencia([1, 2, 4, 5]));
// Esperado:
// {
//   valida: false,
//   primeiraInterrupcao: 2,
//   esperado: 3
// }

console.log(verificarSequencia([2, 3, 4]));
// Esperado:
// {
//   valida: false,
//   primeiraInterrupcao: 0,
//   esperado: 1
// }

console.log(verificarSequencia([]));
// Esperado:
// {
//   valida: false,
//   primeiraInterrupcao: 0,
//   esperado: 1
// }

console.log(verificarSequencia([1, 2, 2, 3]));
// Esperado:
// {
//   valida: false,
//   primeiraInterrupcao: 2,
//   esperado: 3
// }