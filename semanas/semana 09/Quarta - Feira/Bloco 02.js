/* ========================================
   Q1 — DECOMPOSITOR DE NÚMEROS
   ========================================
Crie uma função analisarNumero(numero).
A função recebe um número inteiro positivo e
deve retornar um objeto contendo:
- quantidadeDigitos: quantidade de algarismos.
- somaDigitos: soma de todos os algarismos.
- maiorDigito: maior algarismo encontrado.
- numeroInvertido: número com os algarismos invertidos.
REGRAS:
- Não transforme o número em string.
- Resolva utilizando operações matemáticas.
- Considere que o número recebido será inteiro e positivo.
- O número invertido deve ser retornado como número.
*/

function analisarNumero(numero) {
  let quantidadeDigitos = 0;
  let somaDigitos = 0;
  let maiorDigito = 0;
  let numeroInvertido = 0;

  while (numero > 0) {
    let digito = numero % 10;

    quantidadeDigitos++;

    somaDigitos += digito;

    if (digito > maiorDigito) {
      maiorDigito = digito;
    }

    numeroInvertido = numeroInvertido * 10 + digito;

    numero = Math.floor(numero / 10);
  }

  return {
    quantidadeDigitos,
    somaDigitos,
    maiorDigito,
    numeroInvertido
  };
}

console.log(analisarNumero(5832));
// Resultado esperado:{ quantidadeDigitos: 4, somaDigitos: 18, maiorDigito: 8, numeroInvertido: 2385 }

console.log(analisarNumero(7));
// Resultado esperado: { quantidadeDigitos: 1, somaDigitos: 7, maiorDigito: 7, numeroInvertido: 7 }

console.log(analisarNumero(900));
// Resultado esperado: { quantidadeDigitos: 3, somaDigitos: 9, maiorDigito: 9, numeroInvertido: 9 }

/* ========================================
   Q2 — CLASSIFICADOR DE RANKING
   ========================================
Uma competição possui participantes com nome e pontuação.
Crie uma função organizarRanking(participantes).
Cada participante possui:
- nome
- pontos
A função deve retornar um NOVO array ordenado
seguindo estas regras:
1. Maior pontuação aparece primeiro.
2. Em caso de empate, o nome deve aparecer
   em ordem alfabética.
3. O array original não pode ser modificado.
DICA:
Pesquise mentalmente como funciona o método sort()
e como sua função de comparação deve se comportar.
*/

function organizarRanking(participantes) {
  return [...participantes].sort((a, b) => {
    if (b.pontos !== a.pontos) {
      return b.pontos - a.pontos;
    }

    return a.nome.localeCompare(b.nome);
  });
}
console.log(organizarRanking([
{ nome: "Carlos", pontos: 80 },
{ nome: "Ana", pontos: 95 },
{ nome: "Bruno", pontos: 95 },
{ nome: "Daniel", pontos: 70 }
]));

// Resultado esperado: [ { nome: "Ana", pontos: 95 }, { nome: "Bruno", pontos: 95 },
// { nome: "Carlos", pontos: 80 }, { nome: "Daniel", pontos: 70 } ]

console.log(organizarRanking([ { nome: "Lucas", pontos: 50 }, { nome: "Lucas", pontos: 90 } ]));
// Resultado esperado: [ { nome: "Lucas", pontos: 90 }, { nome: "Lucas", pontos: 50 } ]

/* ========================================
   Q3 — SISTEMA DE HISTÓRICO
   ========================================
Crie uma função executarHistorico(acoes).
O sistema começa com o valor 0 e recebe uma sequência
de ações.
Cada ação pode ser:
- { tipo: "adicionar", valor: 10 }
- { tipo: "remover", valor: 5 }
- { tipo: "desfazer" }
REGRAS:
1. "adicionar": soma o valor atual.
2. "remover": subtrai o valor atual.
3. "desfazer": cancela a última ação de adicionar
   ou remover realizada.
4. Se não houver ação para desfazer, ignore.
5. Um desfazer não pode desfazer outro desfazer.
6. O valor atual pode ficar negativo.
Retorne um objeto contendo:
- valorFinal: valor após todas as ações.
- acoesExecutadas: quantidade de adicionar e remover
  efetivamente realizadas.
- desfazerRealizados: quantidade de operações
  de desfazer realizadas.
EXPLICAÇÃO:
10 + 5 - 3 = 12.
O desfazer cancela a última ação, que foi remover 3.
Logo, o valor volta para 15.

ATENÇÃO:
Se uma ação for desfeita, ela deixa de fazer parte
do histórico que pode ser desfeito novamente.
*/

function executarHistorico(acoes) {
  let valorAtual = 0;
  let acoesExecutadas = 0;
  let desfazerRealizados = 0;

  let historico = [];

  for (let acao of acoes) {

    if (acao.tipo === "adicionar") {
      valorAtual += acao.valor;

      historico.push({
        tipo: "adicionar",
        valor: acao.valor
      });

      acoesExecutadas++;

    } else if (acao.tipo === "remover") {
      valorAtual -= acao.valor;

      historico.push({
        tipo: "remover",
        valor: acao.valor
      });

      acoesExecutadas++;

    } else if (acao.tipo === "desfazer") {

      if (historico.length > 0) {
        let ultimaAcao = historico.pop();

        if (ultimaAcao.tipo === "adicionar") {
          valorAtual -= ultimaAcao.valor;
        } else {
          valorAtual += ultimaAcao.valor;
        }

        acoesExecutadas--;
        desfazerRealizados++;
      }
    }
  }

  return {
    valorFinal: valorAtual,
    acoesExecutadas,
    desfazerRealizados
  };
}

console.log(executarHistorico([
{ tipo: "adicionar", valor: 10 },
{ tipo: "adicionar", valor: 5 },
{ tipo: "remover", valor: 3 },
{ tipo: "desfazer" }
]));

// Resultado esperado: { valorFinal: 12, acoesExecutadas: 2, desfazerRealizados: 1 }

/* ========================================
   Q4 — CONTAGEM RECURSIVA
   ========================================
Crie uma função contarOcorrencias(numero, digito).
A função deve contar quantas vezes determinado
algarismo aparece em um número.
REGRAS:
- Resolva obrigatoriamente utilizando recursividade.
- Não transforme o número em string.
- Não utilize laços de repetição.
- O número recebido será inteiro e não negativo.
- O dígito será um número entre 0 e 9.
DICA:
Pense em como obter o último algarismo de um número
e como reduzir o número para continuar a análise.
*/

function contarOcorrencias(numero, digito) {
  if (numero === 0) {
    return digito === 0 ? 1 : 0;
  }

  if (numero < 10) {
    return numero === digito ? 1 : 0;
  }

  let ultimoDigito = numero % 10;

  let contador = ultimoDigito === digito ? 1 : 0;

  return contador + contarOcorrencias(
    Math.floor(numero / 10),
    digito
  );
}
console.log(contarOcorrencias(122333, 3));   // 3
console.log(contarOcorrencias(55555, 5));    // 5
console.log(contarOcorrencias(123456, 9));   // 0
console.log(contarOcorrencias(10020, 0));    // 2