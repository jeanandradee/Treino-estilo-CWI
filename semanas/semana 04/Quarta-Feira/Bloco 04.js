/* ==================================================
   QUESTÃO 1 — RELATÓRIO DE CHAMADOS
   ==================================================
Uma empresa registra chamados de suporte.
Cada chamado possui:
- codigo;
- prioridade ("ALTA", "MEDIA" ou "BAIXA");
- resolvido (boolean).

Crie a função analisarChamados(chamados), que retorne um objeto com:

1. totalResolvidos: quantidade de chamados resolvidos;
2. codigosAltaPrioridade: códigos dos chamados de prioridade
   "ALTA" que ainda NÃO foram resolvidos;
3. primeiroPendente: código do primeiro chamado não resolvido,
   ou null se todos estiverem resolvidos.

Não altere o array original.
*/

function analisarChamados(chamados) {
  let totalResolvidos = 0;
  let codigosAltaPrioridade = [];
  let primeiroPendente = null;

  for (let { codigo, prioridade, resolvido } of chamados) {
    if (resolvido) {
      totalResolvidos ++ ;
    } else {
      if (prioridade === "ALTA") {
        codigosAltaPrioridade.push(codigo);
      }

      if (primeiroPendente === null) {
        primeiroPendente = codigo;
      }
    }
  }

  return { totalResolvidos, codigosAltaPrioridade, primeiroPendente };
}

console.log(analisarChamados([
  { codigo: "C01", prioridade: "ALTA", resolvido: false },
  { codigo: "C02", prioridade: "BAIXA", resolvido: true },
  { codigo: "C03", prioridade: "ALTA", resolvido: false },
  { codigo: "C04", prioridade: "MEDIA", resolvido: true }
]));

// RESULTADO ESPERADO: { totalResolvidos: 2, codigosAltaPrioridade: ["C01", "C03"], primeiroPendente: "C01" }

console.log(analisarChamados([{ codigo: "C10", prioridade: "BAIXA", resolvido: true },
  { codigo: "C11", prioridade: "MEDIA", resolvido: true }]));
// RESULTADO ESPERADO: { totalResolvidos: 2, codigosAltaPrioridade: [], primeiroPendente: null }

console.log(analisarChamados([]));
// RESULTADO ESPERADO: { totalResolvidos: 0, codigosAltaPrioridade: [], primeiroPendente: null }


/* ==================================================
   QUESTÃO 2 — EXTRATO DE CARTEIRA
   ==================================================
Uma carteira digital registra movimentações.
Cada movimentação possui:
- tipo ("ENTRADA" ou "SAIDA");
- valor (número positivo).
Crie a função analisarCarteira(movimentacoes), que retorne:
1. saldo: soma das entradas menos a soma das saídas;
2. totalEntradas: soma dos valores de entrada;
3. quantidadeSaidas: quantidade de movimentações do tipo "SAIDA";
4. maiorEntrada: maior valor de entrada ou null se não houver
   nenhuma entrada.
A carteira começa com saldo zero.
Não altere o array original.
*/

function analisarCarteira(movimentacoes) {
  let saldo = 0;
  let totalEntradas = 0;
  let quantidadeSaidas = 0;
  let maiorEntrada = null;

  for (let { tipo, valor } of movimentacoes) {
    

    if (tipo === "ENTRADA") {
      saldo += valor;
      totalEntradas += valor;

      if (maiorEntrada === null || valor > maiorEntrada) {
        maiorEntrada = valor;
      }
    } else if (tipo === "SAIDA") {
      saldo -= valor;
      quantidadeSaidas ++ ;
    }
  }

  return { saldo, totalEntradas, quantidadeSaidas, maiorEntrada };
}

console.log(analisarCarteira([{ tipo: "ENTRADA", valor: 100 },{ tipo: "SAIDA", valor: 30 },
{ tipo: "ENTRADA", valor: 50 },{ tipo: "SAIDA", valor: 20 }]));
// RESULTADO ESPERADO: { saldo: 100, totalEntradas: 150, quantidadeSaidas: 2, maiorEntrada: 100 }

console.log(analisarCarteira([{ tipo: "SAIDA", valor: 15 }, { tipo: "SAIDA", valor: 5 }]));
// RESULTADO ESPERADO: { saldo: -20, totalEntradas: 0, quantidadeSaidas: 2, maiorEntrada: null }

console.log(analisarCarteira([]));
// RESULTADO ESPERADO: { saldo: 0, totalEntradas: 0, quantidadeSaidas: 0, maiorEntrada: null }

/* ==================================================
   QUESTÃO 3 — ORGANIZAÇÃO DE TURMAS
   ==================================================
Uma escola recebe uma lista de alunos.
Cada aluno possui:
- nome;
- turma;
- nota.
Crie a função resumirTurma(alunos, turmaEscolhida), que retorne:
1. quantidade: número de alunos da turma escolhida;
2. nomesAprovados: nomes dos alunos dessa turma com nota >= 7;
3. mediaNotas: média das notas dos alunos dessa turma;
   se não houver alunos na turma, retornar 0;
4. primeiroAprovado: nome do primeiro aluno aprovado da turma,
   ou null se ninguém for aprovado.
Não altere o array nem os objetos originais.
Não arredonde a média.
Importante: alunos de outras turmas não podem entrar em nenhuma
das contagens ou cálculos.
*/

function resumirTurma(alunos, turmaEscolhida) {
  let quantidade = 0;
  let nomesAprovados = [];
  let mediaNotas = 0;
  let soma = 0;
  let primeiroAprovado = null;

  for (let { nome, turma, nota } of alunos) {
    if (turma !== turmaEscolhida) {
      continue;
    }

    quantidade ++;

    if (nota >= 7) {
      nomesAprovados.push(nome);

      if (primeiroAprovado === null) {
        primeiroAprovado = nome;
      }
    }

    soma += nota;

  }
  
  if (quantidade > 0 ) {
    mediaNotas = soma / quantidade;
  }

  return { quantidade, nomesAprovados, mediaNotas, primeiroAprovado };
}

console.log(resumirTurma([
  { nome: "Ana", turma: "A", nota: 8 },
  { nome: "Beto", turma: "B", nota: 9 },
  { nome: "Caio", turma: "A", nota: 6 },
  { nome: "Duda", turma: "A", nota: 10 },
  { nome: "Eva", turma: "B", nota: 5 }
], "A"));

// RESULTADO ESPERADO:
// {
//   quantidade: 3,
//   nomesAprovados: ["Ana", "Duda"],
//   mediaNotas: 8,
//   primeiroAprovado: "Ana"
// }


// TESTE 2
console.log(resumirTurma([
  { nome: "Lia", turma: "C", nota: 6 },
  { nome: "Rui", turma: "C", nota: 4 }
], "C"));

// RESULTADO ESPERADO:
// {
//   quantidade: 2,
//   nomesAprovados: [],
//   mediaNotas: 5,
//   primeiroAprovado: null
// }


// TESTE 3
console.log(resumirTurma([
  { nome: "Mia", turma: "A", nota: 10 }
], "Z"));

// RESULTADO ESPERADO:
// {
//   quantidade: 0,
//   nomesAprovados: [],
//   mediaNotas: 0,
//   primeiroAprovado: null
// }