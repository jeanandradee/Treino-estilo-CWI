/* ==================================================
   DESAFIO 1 — PLACAR DE PALAVRAS
   ==================================================
Crie calcularPlacar(palavras).
Regras:
- Palavra com até 4 caracteres: 1 ponto.
- Palavra de 5 a 8 caracteres: 2 pontos.
- Palavra com mais de 8 caracteres: 3 pontos.
- Palavras vazias ou só com espaços: 0 pontos.
- Ignore espaços nas extremidades ao calcular o tamanho.
Retorne:
- pontos: pontuação total.
- palavraMaisValiosa: primeira palavra que recebeu a maior
  pontuação. Retorne null se todas forem vazias.
*/

function calcularPlacar(palavras) {
  let pontos = 0;
  let palavraMaisValiosa = null;
  let maiorPontuacao = 0;

  for (let palavra of palavras) {
    palavra = palavra.trim();

    if (palavra === "") {
      continue;
    }

    let pontuacaoAtual;

    if (palavra.length <= 4) {
      pontuacaoAtual = 1;
    } else if (palavra.length <= 8) {
      pontuacaoAtual = 2;
    } else {
      pontuacaoAtual = 3;
    }

    pontos += pontuacaoAtual;

    if (pontuacaoAtual > maiorPontuacao) {
      maiorPontuacao = pontuacaoAtual;
      palavraMaisValiosa = palavra;
    }
  }

  return { pontos, palavraMaisValiosa };
}

console.log("DESAFIO 1:", calcularPlacar([ "sol", " planeta ", "computador", "  ", "lua" ]));
// RESULTADO ESPERADO: { pontos: 7, palavraMaisValiosa: "computador" }

/* ==================================================
   DESAFIO 2 — DETECTOR DE MUDANÇAS
   ==================================================
Crie detectarMudancas(antigo, novo).
Retorne um array com os nomes das propriedades cujo valor
mudou ou que existem em apenas um dos objetos.
Regras:
- Considere as propriedades presentes nos dois objetos.
- Não repita nomes.
- Compare os valores com !==.
- Preserve a ordem: propriedades do objeto antigo primeiro,
  depois as propriedades exclusivas do objeto novo.
*/

function detectarMudancas(antigo, novo) {
  let mudancas = [];

  for (let propriedade in antigo) {
    if (
      !(propriedade in novo) ||
      antigo[propriedade] !== novo[propriedade]
    ) {
      mudancas.push(propriedade);
    }
  }

  for (let propriedade in novo) {
    if (!(propriedade in antigo) && !mudancas.includes(propriedade)) {
      mudancas.push(propriedade);
    }
  }

  return mudancas;
}

console.log("DESAFIO 2:", detectarMudancas( { nome: "Teclado", preco: 100, estoque: 5 },
 { nome: "Teclado", preco: 120, cor: "preto" } ));
// RESULTADO ESPERADO: ["preco", "estoque", "cor"]

/* ==================================================
   DESAFIO 3 — EQUILÍBRIO DE COLUNAS
   ==================================================
Crie analisarColunas(matriz).
Retorne:
- totaisPorColuna: soma dos valores de cada coluna.
- colunaMaisCarregada: índice da coluna com a maior soma.
- diferenca: diferença entre a maior e a menor soma.
Considere que todas as linhas têm o mesmo número de colunas.
Se a matriz estiver vazia ou não houver colunas, retorne:
{
  totaisPorColuna: [],
  colunaMaisCarregada: null,
  diferenca: 0
}
Em caso de empate na maior soma, escolha o primeiro índice.
*/

function analisarColunas(matriz) {
  let totaisPorColuna = [];
  let colunaMaisCarregada = null;
  let diferenca = 0;

  if (matriz.length === 0 || matriz[0].length === 0) {
    return {
      totaisPorColuna: [],
      colunaMaisCarregada: null,
      diferenca: 0
    };
  }

  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    let somaColuna = 0;

    for (let linha = 0; linha < matriz.length; linha++) {
      somaColuna += matriz[linha][coluna];
    }

    totaisPorColuna.push(somaColuna);
  }

  let maior = totaisPorColuna[0];
  let menor = totaisPorColuna[0];
  colunaMaisCarregada = 0;

  for (let i = 1; i < totaisPorColuna.length; i++) {
    if (totaisPorColuna[i] > maior) {
      maior = totaisPorColuna[i];
      colunaMaisCarregada = i;
    }

    if (totaisPorColuna[i] < menor) {
      menor = totaisPorColuna[i];
    }
  }

  diferenca = maior - menor;

  return { totaisPorColuna, colunaMaisCarregada, diferenca };
}

console.log("DESAFIO 3:", analisarColunas([
  [3, 1, 4],
  [2, 5, 1],
  [4, 2, 3]
]));
// RESULTADO ESPERADO: { totaisPorColuna: [9, 8, 8], colunaMaisCarregada: 0, diferenca: 1 }


/* ==================================================
   DESAFIO 4 — CLASSIFICADOR DE FRASES
   ==================================================
Crie classificarFrases(frases).
Regras:
- Se terminar com "?", classifique como "PERGUNTA".
- Se terminar com "!", classifique como "EXCLAMACAO".
- Se terminar com ".", classifique como "AFIRMACAO".
- Caso contrário, classifique como "OUTRA".
- Ignore espaços no final para decidir a classificação.
- Preserve a frase original no resultado.
Retorne um array de objetos:
{ frase, classificacao }
*/

function classificarFrases(frases) {
  let resultado = [];

  for (let frase of frases) {
    let texto = frase.trim();
    let classificacao;

    if (texto.endsWith("?")) {
      classificacao = "PERGUNTA";
    } else if (texto.endsWith("!")) {
      classificacao = "EXCLAMACAO";
    } else if (texto.endsWith(".")) {
      classificacao = "AFIRMACAO";
    } else {
      classificacao = "OUTRA";
    }

    resultado.push({ frase, classificacao });
  }

  return resultado;
}

console.log("DESAFIO 4:", classificarFrases([ "Tudo certo?  ", "Que surpresa!", "Hoje é terça.", "Sem pontuação", "" ]));
/*  RESULTADO ESPERADO: [ { frase: "Tudo certo?  ", classificacao: "PERGUNTA" },
  { frase: "Que surpresa!", classificacao: "EXCLAMACAO" }, { frase: "Hoje é terça.", classificacao: "AFIRMACAO" },
  { frase: "Sem pontuação", classificacao: "OUTRA" }, { frase: "", classificacao: "OUTRA" } ]
*/

/* ==================================================
   DESAFIO 5 — CAMINHO NO TABULEIRO
   ==================================================
Um tabuleiro é representado por uma matriz de números.
Você recebe uma posição inicial [linha, coluna] e uma lista
de movimentos: "D", "E", "C", "B".
Significados:
D = direita
E = esquerda
C = cima
B = baixo
Crie percorrerTabuleiro(tabuleiro, inicio, movimentos).
Retorne:
- posicaoFinal: [linha, coluna] após os movimentos válidos.
- movimentosInvalidos: quantidade de movimentos que tentariam
  sair dos limites do tabuleiro.
Um movimento inválido não altera a posição.
Não altere o tabuleiro original.
*/

function percorrerTabuleiro(tabuleiro, inicio, movimentos) {
  let linha = inicio[0];
  let coluna = inicio[1];
  let movimentosInvalidos = 0;

  for (let movimento of movimentos) {
    let novaLinha = linha;
    let novaColuna = coluna;

    if (movimento === "D") {
      novaColuna++;
    } else if (movimento === "E") {
      novaColuna--;
    } else if (movimento === "C") {
      novaLinha--;
    } else if (movimento === "B") {
      novaLinha++;
    }

    if (
      novaLinha < 0 ||
      novaLinha >= tabuleiro.length ||
      novaColuna < 0 ||
      novaColuna >= tabuleiro[novaLinha].length
    ) {
      movimentosInvalidos++;
    } else {
      linha = novaLinha;
      coluna = novaColuna;
    }
  }

  return {
    posicaoFinal: [linha, coluna],
    movimentosInvalidos
  };
}

console.log("DESAFIO 5:", percorrerTabuleiro( [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ], [1, 1], ["D", "D", "B", "B", "E", "C"] ));
// RESULTADO ESPERADO: { posicaoFinal: [1, 1], movimentosInvalidos: 2 }


/* ==================================================
   DESAFIO 6 — COMPARADOR DE VERSÕES
   ==================================================
Crie compararVersoes(versaoA, versaoB).
Compare os três números da esquerda para a direita.
O primeiro componente diferente determina o resultado.
Retorne:
- -1 se a versão A for menor que a versão B.
-  1 se a versão A for maior que a versão B.
-  0 se forem equivalentes.
A comparação deve ser numérica, não textual.
*/

function compararVersoes(versaoA, versaoB) {
  let partesA = versaoA.split(".").map(Number);
  let partesB = versaoB.split(".").map(Number);

  for (let i = 0; i < 3; i++) {
    if (partesA[i] < partesB[i]) {
      return -1;
    } else if (partesA[i] > partesB[i]) {
      return 1;
    }
  }

  return 0;
}

console.log("DESAFIO 6.1:", compararVersoes("2.10.1", "2.9.9"));  // 1
console.log("DESAFIO 6.2:", compararVersoes("1.4.0", "1.4.2"));   // -1
console.log("DESAFIO 6.3:", compararVersoes("3.2.1", "3.2.1"));   // 0
console.log("DESAFIO 6.4:", compararVersoes("1.12.0", "1.12.0")); // 0