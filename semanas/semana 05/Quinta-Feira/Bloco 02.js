/* 🔥 B2 — Interpretação e lógica aplicada
1. 🧭 O percurso do entregador
Um entregador registra o tempo gasto em cada trecho da rota. Tempos iguais a 0 representam trechos cancelados.
Implemente analisarRota(tempos). Calcule o tempo total positivo, a quantidade de trechos válidos, o maior tempo positivo (ou 0 se não houver nenhum) e rotaAtrasada, que será true se o total ultrapassar 60 minutos. */
function analisarRota(tempos) {
  let tempoTotal = 0;
  let trechosValidos = 0;
  let trechoMaisDemorado = 0;
  let rotaAtrasada = false;
  
  for (let tempo of tempos) {
    tempoTotal += tempo;

    if (tempo > 0) {
      trechosValidos ++ ;
    }

    if (tempo > trechoMaisDemorado) {
      trechoMaisDemorado = tempo;
    }
  }

  if (tempoTotal > 60) {
    rotaAtrasada = true;
  }

  return { tempoTotal, trechosValidos, trechoMaisDemorado, rotaAtrasada };
}

console.log(analisarRota([15, 0, 20, 35]));
// { tempoTotal: 70, trechosValidos: 3, trechoMaisDemorado: 35, rotaAtrasada: true }

console.log(analisarRota([0, 0, 0]));
// { tempoTotal: 0, trechosValidos: 0, trechoMaisDemorado: 0, rotaAtrasada: false }

console.log(analisarRota([20, 25, 15]));
// { tempoTotal: 60, trechosValidos: 3, trechoMaisDemorado: 25, rotaAtrasada: false }

/* 2. 🎮 A máquina de energia
Uma máquina começa com 50 unidades de energia e recebe comandos:
"CARREGAR": adiciona 20.
"USAR": consome 15.
"EMERGENCIA": consome 30.
"DESLIGAR": encerra a operação imediatamente.
A energia nunca pode ficar abaixo de zero. Comandos desconhecidos são ignorados e contabilizados. Após "DESLIGAR", nenhum comando posterior deve ser processado.
Implemente operarMaquina(comandos). Retorne a energia final, a quantidade de comandos desconhecidos processados e desligada, indicando se a máquina recebeu o comando de desligamento.*/
function operarMaquina(comandos) {
  let energiaFinal = 50;
  let comandosIgnorados = 0;
  let desligada = false;

  for (let comando of comandos) {
    if (comando === "CARREGAR") {
      energiaFinal += 20;
    } else if (comando === "USAR") {
      energiaFinal -= 15;
    } else if (comando === "EMERGENCIA") {
      energiaFinal -= 30;
    } else if (comando === "DESLIGAR") {
      desligada = true;
      break;
    } else {
      comandosIgnorados ++ ;
    }

    if (energiaFinal < 0) {
      energiaFinal = 0;
    }
  }

  return { energiaFinal, comandosIgnorados, desligada };
}

console.log(operarMaquina(["CARREGAR", "USAR", "EMERGENCIA", "??", "DESLIGAR", "CARREGAR"]));
// { energiaFinal: 25, comandosIgnorados: 1, desligada: true }

console.log(operarMaquina(["USAR", "EMERGENCIA", "USAR"]));
// { energiaFinal: 0, comandosIgnorados: 0, desligada: false }

console.log(operarMaquina(["??", "DESLIGAR", "???"]));
// { energiaFinal: 50, comandosIgnorados: 1, desligada: true }

/* 3. 🔎 O código de acesso
Um código é válido quando possui pelo menos 6 caracteres, começa com "A" ou "B" e termina com um algarismo de 0 a 9.
Implemente validarCodigos(codigos). Retorne um array validos, preservando a ordem original, e invalidos, com a quantidade de códigos inválidos. Todos os elementos são strings.*/
function validarCodigos(codigos) {
  let validos = [];
  let invalidos = 0;

  for (let codigo of codigos) {
    if (codigo.length >= 6 &&
      (codigo[0] === "A" || codigo[0] === "B") &&
      (codigo[codigo.length -1] >= "0" && codigo[codigo.length - 1] <= "9")
    ) {
      validos.push(codigo);
    } else {
      invalidos ++ ;
    }
  }

  return { validos, invalidos };
}

console.log(validarCodigos(["AB1234", "BETA9", "A12345", "CX1239"]));
// { validos: ["AB1234", "A12345"], invalidos: 2 }

console.log(validarCodigos(["B12345", "AABCDE7", "A1234X"]));
// { validos: ["B12345", "AABCDE7"], invalidos: 1 }

console.log(validarCodigos([]));
// { validos: [], invalidos: 0 }

/* 4. 🧩 O texto embaralhado
Um programa precisa preparar frases para armazenamento, sem remover os espaços entre as palavras.
Implemente prepararTexto(texto). Retorne textoPreparado, sem espaços nas extremidades e convertido para minúsculas, e quantidadePalavras, contando as palavras separadas por espaços. Se o texto preparado ficar vazio, a quantidade será 0.*/
function prepararTexto(texto) {
  let textoPreparado = texto.trim().toLowerCase();
  let quantidadePalavras = 0;

  if (textoPreparado !== "") {
    let palavras = textoPreparado.split(" ");

    for (let i = 0; i < palavras.length; i++) {
      if (palavras[i] !== "") {
        quantidadePalavras++;
      }
    }
  }

  return { textoPreparado, quantidadePalavras };
}

console.log(prepararTexto("  O SISTEMA Está ON  "));
// { textoPreparado: "o sistema está on", quantidadePalavras: 4 }

console.log(prepararTexto("   "));
// { textoPreparado: "", quantidadePalavras: 0 }

console.log(prepararTexto("JavaScript   é legal"));
// { textoPreparado: "javascript   é legal", quantidadePalavras: 3 }

/* 5. 🗺️ O mapa de obstáculos
Um mapa é representado por uma matriz: 0 indica caminho livre e 1 indica obstáculo.
Implemente analisarMapa(mapa). Retorne obstaculos, a quantidade de células com 1; caminhosLivres, a quantidade de células com 0; e temLinhaBloqueada, que será true se alguma linha inteira contiver apenas obstáculos. A matriz será retangular e não vazia.*/
function analisarMapa(mapa) {
  let obstaculos = 0;
  let caminhosLivres = 0;
  let temLinhaBloqueada = false;

  for (let i = 0; i < mapa.length; i++) {
    let obstaculosNaLinha = 0;

    for (let j = 0; j < mapa[i].length; j++) {
      if (mapa[i][j] === 1) {
        obstaculos++;
        obstaculosNaLinha++;
      } else if (mapa[i][j] === 0) {
        caminhosLivres++;
      }
    }

    if (obstaculosNaLinha === mapa[i].length) {
      temLinhaBloqueada = true;
    }
  }

  return { obstaculos, caminhosLivres, temLinhaBloqueada };
}

console.log(analisarMapa([[0, 1, 0], [1, 1, 1], [0, 0, 1]]));
// { obstaculos: 5, caminhosLivres: 4, temLinhaBloqueada: true }

console.log(analisarMapa([[0, 0], [1, 0], [0, 1]]));
// { obstaculos: 2, caminhosLivres: 4, temLinhaBloqueada: false }

console.log(analisarMapa([[1, 1], [1, 1]]));
// { obstaculos: 4, caminhosLivres: 0, temLinhaBloqueada: true }

/* 6. 🐛 O relatório com defeito
Um sistema precisa contar quantos números de um array são estritamente maiores que a média aritmética. Considere arrays não vazios.
Implemente contarAcimaDaMedia(numeros).*/
function contarAcimaDaMedia(numeros) {
  let soma = 0;
  
  for (let num of numeros) {
    soma += num;
  }

  let media = soma / numeros.length;
  let contador = 0;

  for (let num of numeros) {
    if (num > media) {
      contador ++ ;
    }
  }

  return contador;
}

console.log(contarAcimaDaMedia([2, 4, 6, 8]));
// 2

console.log(contarAcimaDaMedia([5, 5, 5]));
// 0

console.log(contarAcimaDaMedia([10, 20]));
// 1