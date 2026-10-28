/* 🧩 Desafio 1 — Analisador de identificadores
Um sistema recebe identificadores de usuários. Cada identificador deveria seguir um padrão simples.
Crie analisarIdentificadores(identificadores).
Regras:
Remova os espaços das extremidades para analisar cada identificador.
Conte os identificadores válidos: devem ter entre 5 e 10 caracteres e conter somente letras e números.
Conte quantos identificadores válidos começam com uma letra.
Retorne o primeiro identificador válido em letras minúsculas, preservando a ordem. Se nenhum for válido, retorne null.
A validação deve aceitar letras de A a Z, de a a z, e números de 0 a 9. */
function analisarIdentificadores(identificadores) {
  let validos = 0;
  let comecamComLetra = 0;
  let primeiroValido = null;

  for (let palavra of identificadores) {
    palavra = palavra.trim();

    let apenasLetraseNums = true;

    for (let p of palavra) {
      if (
        !(
          (p >= "0" && p <= "9") ||
          (p >= "a" && p <= "z") ||
          (p >= "A" && p <= "Z")
        )
      ) {
        apenasLetraseNums = false;
        break;
      }
    }

    if (
      palavra.length >= 5 &&
      palavra.length <= 10 &&
      apenasLetraseNums
    ) {
      validos++;

      if (
        (palavra[0] >= "A" && palavra[0] <= "Z") ||
        (palavra[0] >= "a" && palavra[0] <= "z")
      ) {
        comecamComLetra++;
      }

      if (primeiroValido === null) {
        primeiroValido = palavra.toLowerCase();
      }
    }
  }


  return { validos, comecamComLetra, primeiroValido };
}

console.log(analisarIdentificadores([ " Ana123 ", "user01", "123456", "joao.silva", "AB12", "Carlos9" ]));
// Esperado: { validos: 3, comecamComLetra: 2, primeiroValido: "ana123" }

console.log(analisarIdentificadores([ "abc", "nome@1", "12345678901", "  " ]));
// Esperado: { validos: 0, comecamComLetra: 0, primeiroValido: null }

/* 🔢 Desafio 2 — Análise de diagonais
Uma matriz quadrada representa os resultados de um teste. O sistema precisa analisar suas diagonais.
Crie analisarDiagonais(matriz).
Regras:
Calcule a soma da diagonal principal.
Calcule a soma da diagonal secundária.
Conte quantos elementos são iguais nas mesmas posições das duas diagonais.
Se a matriz estiver vazia, todas as somas e contagens devem ser zero.
Não altere a matriz original. */
function analisarDiagonais(matriz) {
  let somaPrincipal = 0;
  let somaSecundaria = 0;
  let elementosIguais = 0;

  for (let i = 0; i < matriz.length; i++) {
    somaPrincipal += matriz[i][i]
    somaSecundaria += matriz[i][matriz.length - 1 - i]
    
    if (matriz[i][i] === matriz[i][matriz.length - 1 - i]) {
      elementosIguais ++ ;
    }
  }

  return { somaPrincipal, somaSecundaria, elementosIguais };
}

console.log(analisarDiagonais([ [2, 4, 6], [1, 5, 3], [7, 8, 2]  ]));
// Esperado: { somaPrincipal: 9, somaSecundaria: 18, elementosIguais: 1 }

console.log(analisarDiagonais([ [1, 2], [2, 1] ]));
// Esperado: { somaPrincipal: 2, somaSecundaria: 4, elementosIguais: 0 }

console.log(analisarDiagonais([]));
// Esperado: { somaPrincipal: 0, somaSecundaria: 0, elementosIguais: 0 }

/* 🧾 Desafio 3 — Consolidação de movimentações
Um sistema financeiro recebe uma lista de movimentações. Cada registro possui conta, tipo e valor.
Crie consolidarMovimentacoes(movimentacoes).
Regras:
"ENTRADA" soma o valor ao saldo da conta.
"SAIDA" subtrai o valor do saldo da conta.
Movimentações com tipos desconhecidos devem ser ignoradas.
Cada conta deve aparecer apenas uma vez no resultado, na ordem em que aparecer pela primeira vez em uma movimentação válida.
Retorne um array de objetos no formato { conta, saldo }.
Não altere os registros originais. */
function consolidarMovimentacoes(movimentacoes) {
  let validos = [];

  for (let { conta, tipo, valor } of movimentacoes) {
    if (tipo !== "ENTRADA" && tipo !== "SAIDA") {
      continue;
    }

    let registro = validos.find(item => item.conta === conta);

    if (registro) {
      if (tipo === "ENTRADA") {
        registro.saldo += valor;
      } else {
        registro.saldo -= valor;
      }
    } else {
      validos.push({
        conta,
        saldo: tipo === "ENTRADA" ? valor : -valor
      });
    }
  }

  return validos;
}

console.log(consolidarMovimentacoes([ { conta: "A", tipo: "ENTRADA", valor: 100 }, { conta: "B", tipo: "SAIDA", valor: 20 },
 { conta: "A", tipo: "SAIDA", valor: 30 }, { conta: "C", tipo: "INVALIDO", valor: 500 },
 { conta: "B", tipo: "ENTRADA", valor: 50 } ]));
// Esperado: [ { conta: "A", saldo: 70 }, { conta: "B", saldo: 30 } ]

console.log(consolidarMovimentacoes([ { conta: "X", tipo: "INVALIDO", valor: 10 }, { conta: "Y", tipo: "ENTRADA", valor: 0 } ]));
// Esperado: [{ conta: "Y", saldo: 0 }]

/* 🔤 Desafio 4 — Comparador de palavras
Uma ferramenta compara duas frases para descobrir palavras que aparecem em ambas.
Crie compararPalavras(fraseA, fraseB).
Regras:
Ignore diferenças entre maiúsculas e minúsculas.
Considere palavras separadas por espaços.
Remova pontuação apenas do início e do fim das palavras.
Retorne as palavras que aparecem nas duas frases, sem duplicatas e na ordem em que aparecem pela primeira vez em fraseA.
As palavras retornadas devem estar em letras minúsculas.
Ignore tokens vazios. */

function compararPalavras(fraseA, fraseB) {
  fraseA = fraseA.toLowerCase().split(/\s+/);
  fraseB = fraseB.toLowerCase().split(/\s+/);

  let resultado = [];
  let palavrasB = [];

  for (let palavra of fraseB) {
    palavra = palavra.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");

    if (palavra !== "" && !palavrasB.includes(palavra)) {
      palavrasB.push(palavra);
    }
  }

  for (let palavra of fraseA) {
    palavra = palavra.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");

    if (
      palavra !== "" &&
      palavrasB.includes(palavra) &&
      !resultado.includes(palavra)
    ) {
      resultado.push(palavra);
    }
  }

  return resultado;
}


console.log(compararPalavras( "JavaScript é útil, rápido e útil!", "ÚTIL para aprender JavaScript; e lógica." ));
// Esperado: ["javascript", "útil", "e"]

console.log(compararPalavras( "Casa, carro; árvore.", "CASA! ÁRVORE?" ));
// Esperado: ["casa", "árvore"]

console.log(compararPalavras("!!! ...", "???"));
// Esperado: []

/* 📊 Desafio 5 — Auditoria de resultados por equipe
Uma empresa registra a pontuação de cada equipe em diferentes rodadas. Cada linha da matriz representa uma equipe.
Crie auditarEquipes(matriz).
Regras:
Calcule a soma de cada equipe.
Conte quantas equipes tiveram soma maior ou igual a 100.
Retorne o índice da equipe com a menor soma. Em caso de empate, escolha a primeira.
Se a matriz estiver vazia, o índice da menor soma deve ser -1.
Não altere a matriz original. */
function auditarEquipes(matriz) {
  let totais = [];
  let equipesCom100OuMais = 0;
  let indiceMenorTotal = -1;

  for (let i = 0 ; i < matriz.length; i++) {
    let soma = 0;
    for (let j = 0 ; j < matriz[i].length; j++) {
      soma += matriz[i][j];
    }

    if (soma >= 100) {
      equipesCom100OuMais ++;
    }

    totais.push(soma);
  }

  let menor = Infinity;

  for (let i = 0; i < totais.length; i++) {
    if (totais[i] < menor) {
      menor = totais[i];
      indiceMenorTotal = i;
    }
  }

  return { totais, equipesCom100OuMais, indiceMenorTotal };
}

console.log(auditarEquipes([ [30, 40, 35], [20, 20, 20], [50, 25, 30], [10, 10, 10] ]));
// Esperado: { totais: [105, 60, 105, 30], equipesCom100OuMais: 2, indiceMenorTotal: 3 }

console.log(auditarEquipes([ [40, 10], [20, 30], [25, 25] ]));
// Esperado: { totais: [50, 50, 50], equipesCom100OuMais: 0, indiceMenorTotal: 0 }

console.log(auditarEquipes([]));
// Esperado: { totais: [], equipesCom100OuMais: 0, indiceMenorTotal: -1 }

/* 🎮 Desafio 6 — Processador de eventos
Um sistema recebe eventos que alteram o estado de um dispositivo.
Crie processarEventos(eventos).
O estado inicial é "DESLIGADO".
Regras:
"LIGAR" muda o estado para "LIGADO".
"DESLIGAR" muda o estado para "DESLIGADO".
"ALTERNAR" inverte o estado atual.
Eventos desconhecidos devem ser ignorados.
Conte quantas vezes o estado realmente mudou. Por exemplo, executar "LIGAR" quando já está "LIGADO" não conta como mudança.
Retorne o estado final, o total de mudanças e o índice do primeiro evento que deixou o dispositivo ligado. Se isso nunca acontecer, retorne -1.
Os índices começam em zero.*/

function processarEventos(eventos) {
  let estadoFinal = "DESLIGADO";
  let totalMudancas = 0;
  let primeiroIndiceLigado = -1;

  for (let i = 0; i < eventos.length; i++) {
    let evento = eventos[i];

    if (evento === "LIGAR") {
      if (estadoFinal !== "LIGADO") {
        estadoFinal = "LIGADO";
        totalMudancas++;
      }
    } else if (evento === "DESLIGAR") {
      if (estadoFinal !== "DESLIGADO") {
        estadoFinal = "DESLIGADO";
        totalMudancas++;
      }
    } else if (evento === "ALTERNAR") {
      if (estadoFinal === "LIGADO") {
        estadoFinal = "DESLIGADO";
      } else {
        estadoFinal = "LIGADO";
      }

      totalMudancas++;
    } else {
      continue;
    }

    if (
      estadoFinal === "LIGADO" &&
      primeiroIndiceLigado === -1
    ) {
      primeiroIndiceLigado = i;
    }
  }

  return { estadoFinal, totalMudancas, primeiroIndiceLigado };
}


console.log(processarEventos([ "LIGAR", "LIGAR", "ALTERNAR", "DESLIGAR", "ALTERNAR", "IGNORAR" ]));
// Esperado: { estadoFinal: "LIGADO", totalMudancas: 4, primeiroIndiceLigado: 0 }

console.log(processarEventos([ "IGNORAR", "DESLIGAR", "DESLIGAR" ]));
// Esperado: { estadoFinal: "DESLIGADO", totalMudancas: 0, primeiroIndiceLigado: -1 }