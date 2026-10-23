/* ==================================================
   QUESTÃO 1 — AUDITORIA DE ACESSOS
   ==================================================
Um sistema registra tentativas de acesso a uma plataforma.
Cada registro possui:
- usuario: nome do usuário;
- autorizado: boolean indicando se o acesso foi autorizado;
- horario: horário registrado como string.
Crie a função auditarAcessos(registros), que retorne um objeto com:
- totalAutorizados: quantidade de acessos autorizados;
- usuariosBloqueados: array com os nomes dos usuários
  cujos acessos não foram autorizados, sem repetir nomes;
- primeiroHorarioNegado: horário da primeira tentativa negada
  encontrada no array, ou null se nenhuma foi negada.
Regras:
- Preserve a ordem dos usuários bloqueados.
- Não repita nomes em usuariosBloqueados.
- Não altere o array original.
*/

function auditarAcessos(registros) {
  let totalAutorizados = 0;
  let usuariosBloqueados = [];
  let primeiroHorarioNegado = null;

  for (let { usuario, autorizado, horario } of registros) {
    if (autorizado) {
      totalAutorizados ++ ;
    } else {
      if (!usuariosBloqueados.includes(usuario)) {
        usuariosBloqueados.push(usuario);
      }
      

      if (primeiroHorarioNegado === null) {
        primeiroHorarioNegado = horario;
      }
    }
  }

  return { totalAutorizados, usuariosBloqueados, primeiroHorarioNegado };
}

console.log(auditarAcessos([{ usuario: "Lia", autorizado: true, horario: "08:00" },
{ usuario: "Rui", autorizado: false, horario: "08:05" },{ usuario: "Lia", autorizado: false, horario: "08:10" },
{ usuario: "Bia", autorizado: true, horario: "08:15" },{ usuario: "Rui", autorizado: false, horario: "08:20" }]));
// Resultado esperado: { totalAutorizados: 2, usuariosBloqueados: ["Rui", "Lia"], primeiroHorarioNegado: "08:05" }


/* ==================================================
   QUESTÃO 2 — FECHAMENTO DE CAIXA
   ==================================================
Uma loja registra movimentações financeiras.
Cada movimentação possui:
- tipo: "ENTRADA" ou "SAIDA";
- valor: valor da movimentação.
Crie a função fecharCaixa(movimentacoes), que retorne:
- totalEntradas: soma dos valores das entradas;
- totalSaidas: soma dos valores das saídas;
- saldoFinal: totalEntradas menos totalSaidas;
- maiorSaida: valor da maior saída, ou null se não houver saídas.
Regras:
- Considere todas as movimentações recebidas.
- Não altere o array original.
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

console.log(fecharCaixa([{ tipo: "ENTRADA", valor: 200 },{ tipo: "SAIDA", valor: 50 },
{ tipo: "ENTRADA", valor: 80 },{ tipo: "SAIDA", valor: 90 },{ tipo: "SAIDA", valor: 30 }]));
// Resultado esperado: { totalEntradas: 280, totalSaidas: 170, saldoFinal: 110, maiorSaida: 90 }

/* ==================================================
   QUESTÃO 3 — TRIAGEM DE SOLICITAÇÕES
   ==================================================
Uma central recebe solicitações de atendimento.
Cada solicitação possui:
- protocolo: código da solicitação;
- prioridade: número inteiro;
- status: situação atual.
Crie a função selecionarSolicitacoes(solicitacoes), que retorne:
- protocolosSelecionados: array com os protocolos das solicitações
  que possuem prioridade maior ou igual a 3 e status "ABERTA";
- quantidadeIgnorada: quantidade de solicitações que não atendem
  simultaneamente aos dois critérios.
Regras:
- Preserve a ordem original dos protocolos selecionados.
- Não altere os dados recebidos.
*/

function selecionarSolicitacoes(solicitacoes) {
  let protocolosSelecionados = [];
  let quantidadeIgnorada = 0;

  for (let { protocolo, prioridade, status } of solicitacoes) {
    if (prioridade >= 3 && status === "ABERTA") {
      protocolosSelecionados.push(protocolo);
    } else {
      quantidadeIgnorada ++ ;
    }
  }

  return { protocolosSelecionados, quantidadeIgnorada };
}

console.log(selecionarSolicitacoes([{ protocolo: "S01", prioridade: 2, status: "ABERTA" },
  { protocolo: "S02", prioridade: 3, status: "ABERTA" },{ protocolo: "S03", prioridade: 5, status: "FECHADA" },
  { protocolo: "S04", prioridade: 4, status: "ABERTA" },{ protocolo: "S05", prioridade: 1, status: "FECHADA" }]));
// Resultado esperado: { protocolosSelecionados: ["S02", "S04"], quantidadeIgnorada: 3 }

/* ==================================================
   QUESTÃO 4 — COMPARAÇÃO DE ESTOQUE
   ==================================================
Um depósito compara o estoque atual com o estoque mínimo
de cada produto.
Cada produto possui:
- nome;
- estoqueAtual;
- estoqueMinimo.
Crie a função compararEstoque(produtos), que retorne:
- nomesReposicao: array com os nomes dos produtos cujo estoque
  atual seja menor que o estoque mínimo;
- quantidadeSuficiente: quantidade de produtos cujo estoque atual
  seja maior ou igual ao estoque mínimo;
- primeiroProdutoZerado: nome do primeiro produto com estoque
  exatamente igual a zero, ou null se nenhum estiver zerado.
Regras:
- Preserve a ordem dos produtos.
- Não altere o array original.
*/

function compararEstoque(produtos) {
  let nomesReposicao = [];
  let quantidadeSuficiente = 0;
  let primeiroProdutoZerado = null;

  for (let { nome, estoqueAtual, estoqueMinimo } of produtos) {
    if (estoqueAtual < estoqueMinimo) {
      nomesReposicao.push(nome);
    } else {
      quantidadeSuficiente++;
    }

    if (primeiroProdutoZerado === null && estoqueAtual === 0) {
      primeiroProdutoZerado = nome;
    }
  }

  return { nomesReposicao, quantidadeSuficiente, primeiroProdutoZerado };
}

console.log(compararEstoque([{ nome: "Teclado", estoqueAtual: 8, estoqueMinimo: 5 },
  { nome: "Mouse", estoqueAtual: 2, estoqueMinimo: 6 },{ nome: "Monitor", estoqueAtual: 0, estoqueMinimo: 3 },
  { nome: "Cabo", estoqueAtual: 12, estoqueMinimo: 4 },{ nome: "Adaptador", estoqueAtual: 0, estoqueMinimo: 2 }]));
// Resultado esperado: { nomesReposicao: ["Mouse", "Monitor", "Adaptador"],quantidadeSuficiente: 2, primeiroProdutoZerado: "Monitor" }

/* ==================================================
   QUESTÃO 5 — ANÁLISE DE SEQUÊNCIA
   ==================================================
Um equipamento registra valores em sequência.
Crie a função analisarSequencia(valores), que retorne:
- primeiroNegativo: primeiro número negativo encontrado,
  ou null se não existir;
- indicePrimeiroPar: índice do primeiro número par,
  ou -1 se não existir;
- quantidadeZeros: quantidade de valores iguais a zero.
Regras:
- Os índices começam em zero.
- Um número par pode ser negativo.
- Analise todos os valores necessários para preencher
  as três propriedades.
- Não altere o array original.
*/

function analisarSequencia(valores) {
  let primeiroNegativo = null;
  let indicePrimeiroPar = -1;
  let quantidadeZeros = 0;

  for (let i = 0; i < valores.length; i++) {
    if (primeiroNegativo === null && valores[i] < 0) {
      primeiroNegativo = valores[i];
    }

    if (indicePrimeiroPar === -1 && valores[i] % 2 === 0) {
      indicePrimeiroPar = i;
    }

    if (valores[i] === 0) {
      quantidadeZeros ++ ;
    }
  }

  return { primeiroNegativo, indicePrimeiroPar, quantidadeZeros };
}

console.log(analisarSequencia([5, 0, 7, -3, 8, 0, -2]));
// Resultado esperado: { primeiroNegativo: -3, indicePrimeiroPar: 1, quantidadeZeros: 2 }


/* ==================================================
   QUESTÃO 6 — RELATÓRIO DE AVALIAÇÕES
   ==================================================
Uma plataforma recebe avaliações de produtos.
Cada avaliação possui:
- produto: nome do produto;
- nota: número de 0 a 10;
- publicada: boolean.
Crie a função relatarAvaliacoes(avaliacoes), que retorne:
- quantidadePublicada: quantidade de avaliações publicadas;
- somaNotasPublicadas: soma das notas das avaliações publicadas;
- produtosBemAvaliados: array com os nomes dos produtos que possuem
  avaliação publicada com nota maior ou igual a 8, sem repetir nomes;
- primeiraNotaBaixa: nota da primeira avaliação publicada com nota
  menor que 5, ou null se nenhuma atender ao critério.
Regras:
- Avaliações não publicadas não entram nas somas nem nas buscas.
- Preserve a ordem dos produtos bem avaliados.
- Não repita nomes em produtosBemAvaliados.
- Não altere os dados recebidos.
*/

function relatarAvaliacoes(avaliacoes) {
  let quantidadePublicada = 0;
  let somaNotasPublicadas = 0;
  let produtosBemAvaliados = [];
  let primeiraNotaBaixa = null;

  for (let { produto, nota, publicada } of avaliacoes) {
    if (publicada) {
      quantidadePublicada ++ ;
      somaNotasPublicadas += nota;

      if (nota >= 8 && !produtosBemAvaliados.includes(produto)) {
        produtosBemAvaliados.push(produto);
      }

      if (primeiraNotaBaixa === null && nota < 5) {
      primeiraNotaBaixa = nota;
      }
    }
  }

  return { quantidadePublicada, somaNotasPublicadas, produtosBemAvaliados, primeiraNotaBaixa };
}

console.log(relatarAvaliacoes([{ produto: "Fone", nota: 9, publicada: true },{ produto: "Teclado", nota: 4, publicada: false },
{ produto: "Mouse", nota: 3, publicada: true },{ produto: "Fone", nota: 8, publicada: true },
{ produto: "Monitor", nota: 7, publicada: true },{ produto: "Caixa", nota: 10, publicada: false }]));
// Resultado esperado: { quantidadePublicada: 4, somaNotasPublicadas: 27, produtosBemAvaliados: ["Fone"], primeiraNotaBaixa: 3 }