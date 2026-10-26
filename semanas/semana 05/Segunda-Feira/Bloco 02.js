/* ==================================================
   DESAFIO 1 — AUDITORIA DE ACESSOS
   ==================================================
Cada registro possui:
- usuario
- horario
- autorizado
Crie auditarAcessos(registros).
Retorne:
- totalAutorizados: quantidade de registros autorizados;
- usuariosNegados: nomes dos usuários negados, sem repetição,
  preservando a ordem da primeira aparição;
- primeiroHorarioNegado: horário da primeira tentativa negada,
  ou null se não houver nenhuma.
*/

function auditarAcessos(registros) {
  let totalAutorizados = 0;
  let usuariosNegados = [];
  let primeiroHorarioNegado = null;

  for (let { usuario, horario, autorizado } of registros) {
    if (autorizado) {
      totalAutorizados ++ ;
    } else {
      
      if (!usuariosNegados.includes(usuario)) {
        usuariosNegados.push(usuario);
      }

      if (primeiroHorarioNegado === null) {
        primeiroHorarioNegado = horario;
      }
    }
  }
  
  return { totalAutorizados, usuariosNegados, primeiroHorarioNegado };
}

console.log(auditarAcessos([
  { usuario: "Ana", horario: "08:00", autorizado: true },
  { usuario: "Beto", horario: "08:05", autorizado: false },
  { usuario: "Ana", horario: "08:10", autorizado: false },
  { usuario: "Caio", horario: "08:15", autorizado: true },
  { usuario: "Beto", horario: "08:20", autorizado: false }
]));

// Resultado esperado: { totalAutorizados: 2, usuariosNegados: ["Beto", "Ana"], primeiroHorarioNegado: "08:05" }

/* ==================================================
   DESAFIO 2 — FECHAMENTO DE CAIXA
   ==================================================
Cada movimentação possui:
- tipo: "ENTRADA" ou "SAIDA"
- valor
Crie fecharCaixa(movimentacoes).
Retorne:
- totalEntradas: soma das entradas;
- totalSaidas: soma das saídas;
- saldoFinal: entradas menos saídas;
- maiorSaida: maior valor entre as saídas, ou null
  se não houver nenhuma saída.
Considere os valores como não negativos.
*/

function fecharCaixa(movimentacoes) {
  let totalEntradas = 0;
  let totalSaidas = 0;
  let saldoFinal = 0;
  let maiorSaida = null;
  for (let { tipo, valor } of movimentacoes) {
    if (tipo === "ENTRADA") {
      totalEntradas += valor;
      saldoFinal += valor;
    } else if (tipo === "SAIDA") {
      totalSaidas += valor;
      saldoFinal -= valor;
      if (maiorSaida === null || valor > maiorSaida) {
        maiorSaida = valor;
      }
    }
  }

  return { totalEntradas, totalSaidas, saldoFinal, maiorSaida };
}

console.log(fecharCaixa([
  { tipo: "ENTRADA", valor: 200 },
  { tipo: "SAIDA", valor: 50 },
  { tipo: "ENTRADA", valor: 80 },
  { tipo: "SAIDA", valor: 120 },
  { tipo: "SAIDA", valor: 30 }
]));

// Resultado esperado: { totalEntradas: 280, totalSaidas: 200, saldoFinal: 80, maiorSaida: 120 }



/* ==================================================
   DESAFIO 3 — FILTRO DE SOLICITAÇÕES
   ==================================================
Cada solicitação possui:
- protocolo
- prioridade
- status
Crie selecionarSolicitacoes(solicitacoes).
Regras:
- Uma solicitação selecionada precisa ter prioridade >= 3
  E status igual a "ABERTA".
- Guarde os protocolos selecionados na ordem original.
- Conte quantas solicitações não foram selecionadas.
Retorne:
- protocolosSelecionados;
- totalIgnoradas.
*/

function selecionarSolicitacoes(solicitacoes) {
  let protocolosSelecionados = [];
  let totalIgnoradas = 0;

  for (let { protocolo, prioridade, status } of solicitacoes) {
    if (prioridade >= 3 && status === "ABERTA") {
      protocolosSelecionados.push(protocolo);
    } else {
      totalIgnoradas ++ ;
    }
  }

  return { protocolosSelecionados, totalIgnoradas };
}

console.log(selecionarSolicitacoes([
  { protocolo: "S1", prioridade: 4, status: "ABERTA" },
  { protocolo: "S2", prioridade: 2, status: "ABERTA" },
  { protocolo: "S3", prioridade: 5, status: "FECHADA" },
  { protocolo: "S4", prioridade: 3, status: "ABERTA" },
  { protocolo: "S5", prioridade: 1, status: "FECHADA" }
]));

// Resultado esperado: { protocolosSelecionados: ["S1", "S4"], totalIgnoradas: 3 }

/* ==================================================
   DESAFIO 4 — COMPARAÇÃO DE ESTOQUE
   ==================================================
Cada produto possui:
- nome
- estoqueAtual
- estoqueMinimo
Crie compararEstoque(produtos).
Retorne:
- nomesReposicao: nomes dos produtos cujo estoque atual
  é menor que o mínimo;
- quantidadeSuficiente: quantidade de produtos cujo estoque
  atual é maior ou igual ao mínimo;
- primeiroProdutoZerado: nome do primeiro produto com estoque
  exatamente igual a zero, ou null se não houver.
*/

function compararEstoque(produtos) {
  let nomesReposicao = [];
  let quantidadeSuficiente = 0;
  let primeiroProdutoZerado = null;

  for (let { nome, estoqueAtual, estoqueMinimo } of produtos) {
    if (estoqueAtual < estoqueMinimo) {
      nomesReposicao.push(nome);
    } else {
      quantidadeSuficiente ++;
    }

    if (primeiroProdutoZerado === null && estoqueAtual === 0) {
      primeiroProdutoZerado = nome;
    }
  }

  return { nomesReposicao, quantidadeSuficiente, primeiroProdutoZerado };
}

console.log(compararEstoque([
  { nome: "Teclado", estoqueAtual: 5, estoqueMinimo: 3 },
  { nome: "Mouse", estoqueAtual: 0, estoqueMinimo: 4 },
  { nome: "Monitor", estoqueAtual: 6, estoqueMinimo: 6 },
  { nome: "Cabo", estoqueAtual: 2, estoqueMinimo: 5 }
]));

// Resultado esperado: { nomesReposicao: ["Mouse", "Cabo"], quantidadeSuficiente: 2, primeiroProdutoZerado: "Mouse" }

/* ==================================================
   DESAFIO 5 — ANÁLISE DE SEQUÊNCIA
   ==================================================
Crie analisarSequencia(valores).
Retorne:
- primeiroNegativo: primeiro valor negativo encontrado,
  ou null se não houver;
- indicePrimeiroPar: índice do primeiro número par,
  ou -1 se não houver;
- totalZeros: quantidade de valores iguais a zero.
As três regras devem ser analisadas independentemente.
*/

function analisarSequencia(valores) {
  let primeiroNegativo = null;
  let indicePrimeiroPar = -1;
  let totalZeros = 0;

  for (let i = 0; i < valores.length; i++) {
    if (primeiroNegativo === null && valores[i] < 0) {
      primeiroNegativo = valores[i];
    }

    if (indicePrimeiroPar === -1 && valores[i] %  2 === 0) {
      indicePrimeiroPar = i;
    }

    if (valores[i] === 0) {
      totalZeros ++ ;
    }
  }

  return { primeiroNegativo, indicePrimeiroPar, totalZeros };
}

console.log(analisarSequencia([3, 0, -4, 7, 8, 0, -2]));
// Resultado esperado: { primeiroNegativo: -4, indicePrimeiroPar: 1, totalZeros: 2 }


/* ==================================================
   DESAFIO 6 — RELATÓRIO DE AVALIAÇÕES
   ==================================================
Cada avaliação possui:
- produto
- nota
- publicada
Crie relatarAvaliacoes(avaliacoes).
Regras:
- Considere somente avaliações publicadas nos cálculos abaixo.
- Conte quantas avaliações estão publicadas.
- Some as notas das avaliações publicadas.
- Guarde os nomes dos produtos que receberam nota >= 8
  em avaliações publicadas, sem repetir nomes e preservando
  a ordem da primeira aparição.
- Identifique a primeira avaliação publicada com nota < 5.
  Retorne o nome do produto ou null se não houver.
Retorne:
- totalPublicadas;
- somaNotasPublicadas;
- produtosBemAvaliados;
- primeiroProdutoNotaBaixa.
*/

function relatarAvaliacoes(avaliacoes) {
  let totalPublicadas = 0;
  let somaNotasPublicadas = 0;
  let produtosBemAvaliados = [];
  let primeiroProdutoNotaBaixa = null;

  for (let { produto, nota, publicada } of avaliacoes) {
    if (publicada) {
      totalPublicadas ++ ;
      somaNotasPublicadas += nota;
      
      if (!produtosBemAvaliados.includes(produto) && nota >= 8) {
        produtosBemAvaliados.push(produto);
      }
    
      if (primeiroProdutoNotaBaixa === null && nota <= 4) {
        primeiroProdutoNotaBaixa = produto;
      }
    }
  }

  return { totalPublicadas, somaNotasPublicadas, produtosBemAvaliados, primeiroProdutoNotaBaixa };
}

console.log(relatarAvaliacoes([
  { produto: "Teclado", nota: 9, publicada: true },
  { produto: "Mouse", nota: 4, publicada: true },
  { produto: "Teclado", nota: 8, publicada: true },
  { produto: "Monitor", nota: 10, publicada: false },
  { produto: "Cabo", nota: 7, publicada: true },
  { produto: "Mouse", nota: 9, publicada: true }
]));

/* Resultado esperado: { totalPublicadas: 5, somaNotasPublicadas: 37, produtosBemAvaliados: ["Teclado", "Mouse"],
  primeiroProdutoNotaBaixa: "Mouse" }
*/