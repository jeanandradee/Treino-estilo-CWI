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
