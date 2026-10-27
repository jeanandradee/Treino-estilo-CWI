/* ==================================================
   DESAFIO 1 — ANALISADOR DE MENSAGENS
   ==================================================
Uma plataforma precisa analisar mensagens enviadas pelos usuários.
Crie a função analisarMensagens(mensagens).
Cada mensagem é uma string.
Retorne um objeto com:
- totalMensagens: quantidade de mensagens recebidas.
- mensagensLongas: quantidade de mensagens com mais de 10 caracteres.
- totalCaracteres: soma dos caracteres de todas as mensagens.
- primeiraComAlerta: primeira mensagem que contém a palavra
  "ALERTA", considerando letras maiúsculas e minúsculas.
  Se nenhuma mensagem contiver essa palavra, retorne null.
Considere espaços e pontuação como caracteres.
*/

function analisarMensagens(mensagens) {
  let totalMensagens = 0;
  let mensagensLongas = 0;
  let totalCaracteres = 0;
  let primeiraComAlerta = null;

  for (let mensagem of mensagens) {
    totalMensagens ++ ;

    if (mensagem.length > 10) {
      mensagensLongas ++ ;
    }

    totalCaracteres += mensagem.length;

    if (
      primeiraComAlerta === null &&
      mensagem.toUpperCase().includes("ALERTA")
    ) {
      primeiraComAlerta = mensagem;
    }
  }

  return { totalMensagens, mensagensLongas, totalCaracteres, primeiraComAlerta };
}

console.log(analisarMensagens([ "Tudo certo", "ALERTA: falha", "ok", "Novo alerta recebido" ]));
// Resultado esperado: { totalMensagens: 4, mensagensLongas: 2, totalCaracteres: 42, primeiraComAlerta: "ALERTA: falha" }

/* ==================================================
   DESAFIO 2 — LIMPEZA DE CÓDIGOS
   ==================================================
Um sistema recebe códigos que podem conter espaços
no começo ou no final.
Crie a função limparCodigos(codigos).
Retorne um novo array contendo os códigos sem espaços
nas extremidades.
Regras:
- Códigos vazios após a limpeza devem ser ignorados.
- Códigos repetidos devem aparecer apenas uma vez.
- Preserve a ordem da primeira aparição.
- A comparação entre códigos diferencia maiúsculas
  de minúsculas.
- Não altere o array original.
*/

function limparCodigos(codigos) {
  let codigosLimpos = [];

  for (let codigo of codigos) {
    codigo = codigo.trim();
    if (!codigosLimpos.includes(codigo) && codigo !== "") {
      codigosLimpos.push(codigo);
    }
  }

  return codigosLimpos;
}

console.log(limparCodigos([ " AB12 ", "XY90", " AB12", "   ", "xy90 ", " XY90 " ]));
// Resultado esperado: ["AB12", "XY90", "xy90"]

/* ==================================================
   DESAFIO 3 — LEITURA DE MATRIZ
   ==================================================
Uma escola armazena as notas dos alunos em uma matriz.
Cada linha representa um aluno, e cada número representa
uma nota desse aluno.
Crie a função analisarNotas(matriz).
Retorne um objeto com:
- totalNotas: quantidade total de notas.
- somaNotas: soma de todas as notas.
- notasAltas: quantidade de notas maiores ou iguais a 8.
- primeiraNotaBaixa: primeiro valor menor que 5 encontrado
  percorrendo a matriz linha por linha, da esquerda para
  a direita. Se não existir, retorne null.
Considere que a matriz pode estar vazia ou conter
linhas vazias.
*/

function analisarNotas(matriz) {
  let totalNotas = 0;
  let somaNotas = 0;
  let notasAltas = 0;
  let primeiraNotaBaixa = null;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      let nota = matriz[i][j];

      if (typeof nota === "number") {
        totalNotas++;
        somaNotas += nota;

        if (nota >= 8) {
          notasAltas++;
        }

        if (primeiraNotaBaixa === null && nota < 5) {
          primeiraNotaBaixa = nota;
        }
      }
    }
  }

  return {
    totalNotas,
    somaNotas,
    notasAltas,
    primeiraNotaBaixa
  };
}

console.log(analisarNotas([ [7, 9, 4], [8, 6], [], [3, 10] ]));
// Resultado esperado: { totalNotas: 7, somaNotas: 47, notasAltas: 3, primeiraNotaBaixa: 4 }

/* ==================================================
   DESAFIO 4 — RESUMO DE UMA MATRIZ
   ==================================================
Um depósito registra quantidades de produtos por setor.
Cada linha da matriz representa um setor.
Crie a função resumirSetores(matriz).
Retorne um objeto com:
- totalItens: soma de todas as quantidades.
- setoresVazios: quantidade de linhas sem nenhum item.
  Uma linha é considerada vazia quando está vazia ou
  quando todos os valores nela são zero.
- indicePrimeiroSetorMaior: índice da linha com a maior
  soma de quantidades. Se houver empate, mantenha a
  primeira linha. Se a matriz não tiver linhas, retorne null.
Uma linha vazia também tem soma zero.
Não altere a matriz original.
*/

function resumirSetores(matriz) {
  let totalItens = 0;
  let setoresVazios = 0;
  let indicePrimeiroSetorMaior = null;
  let maiorSetor = null;

  for (let i = 0; i < matriz.length; i++) {
    let setorAtual = 0;

    for (let j = 0; j < matriz[i].length; j++) {
      totalItens += matriz[i][j];
      setorAtual += matriz[i][j];
    }

    if (matriz[i].every(valor => valor === 0)) {
      setoresVazios++;
    }

    if (maiorSetor === null || setorAtual > maiorSetor) {
      maiorSetor = setorAtual;
      indicePrimeiroSetorMaior = i;
    }
  }

  return {
    totalItens,
    setoresVazios,
    indicePrimeiroSetorMaior
  };
}

console.log(resumirSetores([ [2, 3], [0, 0], [4], [], [2, 2] ]));
// Resultado esperado: { totalItens: 13, setoresVazios: 2, indicePrimeiroSetorMaior: 0 }

/* ==================================================
   DESAFIO 5 — CONTADOR DE PALAVRAS
   ==================================================
Uma ferramenta precisa identificar palavras em uma frase.
Crie a função analisarFrase(frase).
Considere uma palavra como uma sequência de caracteres
separada por espaços.
Retorne um objeto com:
- totalPalavras: quantidade de palavras.
- maiorPalavra: primeira palavra de maior comprimento.
- palavrasComA: quantidade de palavras que contêm a letra
  "a", independentemente de maiúsculas ou minúsculas.
Ignore espaços extras no começo, no final e entre palavras.
Se a frase não tiver palavras, retorne:
{
  totalPalavras: 0,
  maiorPalavra: null,
  palavrasComA: 0
}
*/

function analisarFrase(frase) {
  let totalPalavras = 0;
  let maiorPalavra = null;
  let palavrasComA = 0;

  let palavras = frase.trim() === ""
    ? []
    : frase.trim().split(/\s+/);

  for (let palavra of palavras) {
    totalPalavras++;

    if (maiorPalavra === null || palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra;
    }

    if (palavra.toLowerCase().includes("a")) {
      palavrasComA++;
    }
  }

  return {
    totalPalavras,
    maiorPalavra,
    palavrasComA
  };
}

console.log(analisarFrase("  JavaScript   exige atenção e prática  "));
// Resultado esperado: { totalPalavras: 5, maiorPalavra: "JavaScript", palavrasComA: 3 }

/* ==================================================
   DESAFIO 6 — DIAGONAL PRINCIPAL
   ==================================================
Uma matriz quadrada armazena valores para uma análise.
Crie a função analisarDiagonal(matriz).
A diagonal principal é formada pelos elementos
em que o índice da linha é igual ao índice da coluna.
Exemplo:
[
  [5, 2, 1],
  [4, 8, 3],
  [7, 6, 9]
]
Diagonal principal: 5, 8, 9.
Retorne um objeto com:
- valoresDiagonal: array com os elementos da diagonal principal.
- somaDiagonal: soma desses elementos.
- quantidadePares: quantidade de elementos pares na diagonal.
Se a matriz estiver vazia, retorne um array vazio,
soma zero e quantidade de pares zero.
Considere que a matriz será quadrada.
Não altere a matriz original.
*/

function analisarDiagonal(matriz) {
  let valoresDiagonal = [];
  let somaDiagonal = 0;
  let quantidadePares = 0;

  for (let i = 0; i < matriz.length; i++) {
    valoresDiagonal.push(matriz[i][i]) ;
  }
  for (let i = 0; i < valoresDiagonal.length; i++) {
    somaDiagonal += valoresDiagonal[i];

    if (valoresDiagonal[i] % 2 === 0) {
      quantidadePares ++ ;
    }
  }

  return { valoresDiagonal, somaDiagonal, quantidadePares };
}

console.log(analisarDiagonal([
  [5, 2, 1],
  [4, 8, 3],
  [7, 6, 9]
]));
// Resultado esperado: { valoresDiagonal: [5, 8, 9], somaDiagonal: 22, quantidadePares: 1 }