/* 🧾 Desafio 1 — Auditoria de acessos
Um sistema registra tentativas de acesso. Cada registro possui usuario, horario e sucesso.
Crie a função auditarAcessos(registros).
Regras:
Conte o total de tentativas.
Conte quantas tentativas falharam (sucesso === false).
Um usuário deve ser bloqueado quando acumular duas tentativas malsucedidas. Retorne cada usuário bloqueado apenas uma vez, na ordem em que atingir a segunda falha.
Retorne o primeiro registro malsucedido encontrado, ou null se não houver nenhum.
Não altere os registros originais. */
function auditarAcessos(registros) {
  let totalTentativas = 0;
  let tentativasFalhas = 0;
  let usuariosBloqueados = [];
  let primeiraFalha = null;

  const falhasPorUsuario = {};

  for (let { usuario, horario, sucesso } of registros) {
    totalTentativas++;

    if (sucesso === false) {
      tentativasFalhas++;

      if (primeiraFalha === null) {
        primeiraFalha = { usuario, horario, sucesso };
      }

      if (falhasPorUsuario[usuario] === undefined) {
        falhasPorUsuario[usuario] = 0;
      }

      falhasPorUsuario[usuario]++;

      if (falhasPorUsuario[usuario] === 2) {
        usuariosBloqueados.push(usuario);
      }
    }
  }


  return { totalTentativas, tentativasFalhas, usuariosBloqueados, primeiraFalha };
}

console.log(auditarAcessos([ { usuario: "Ana", horario: "08:00", sucesso: false },
  { usuario: "Beto", horario: "08:01", sucesso: false }, { usuario: "Ana", horario: "08:02", sucesso: true },
  { usuario: "Ana", horario: "08:03", sucesso: false }, { usuario: "Beto", horario: "08:04", sucesso: false },
  { usuario: "Ana", horario: "08:05", sucesso: false } ]));
// Esperado: { totalTentativas: 6, tentativasFalhas: 5, usuariosBloqueados: ["Beto", "Ana"],
//   primeiraFalha: { usuario: "Ana", horario: "08:00", sucesso: false } }

console.log(auditarAcessos([ { usuario: "Lia", horario: "09:00", sucesso: true },
  { usuario: "Rui", horario: "09:01", sucesso: true } ]));
// Esperado: { totalTentativas: 2, tentativasFalhas: 0, usuariosBloqueados: [], primeiraFalha: null }

/* 🔤 Desafio 2 — Gerador de palavras-chave
Um sistema recebe uma frase e precisa gerar palavras-chave para uma busca.
Crie a função gerarPalavrasChave(frase).
Regras:
Converta a frase para letras minúsculas.
Separe as palavras por espaços.
Ignore palavras com menos de quatro caracteres.
Ignore palavras que comecem com um número.
Elimine duplicatas, preservando a ordem da primeira ocorrência.
Retorne um objeto com o array palavrasChave e a propriedade total. */
function gerarPalavrasChave(frase) {
  let palavrasChave = [];

  let palavras = frase.toLowerCase().split(/\s+/);

  for (let palavra of palavras) {
    if (palavra.length < 4) {
      continue;
    }

    if (palavra[0] >= "0" && palavra[0] <= "9") {
      continue;
    }

    if (!palavrasChave.includes(palavra)) {
      palavrasChave.push(palavra);
    }
  }

  let total = palavrasChave.length;

  return { palavrasChave, total };
}

console.log(gerarPalavrasChave( "JavaScript ajuda a criar sistemas e sistemas web para 2026" ));
// Esperado: { palavrasChave: ["javascript", "ajuda", "criar", "sistemas"], total: 4 }

console.log(gerarPalavrasChave("API e SQL para 123dados"));
// Esperado: { palavrasChave: ["para"], total: 1 }

console.log(gerarPalavrasChave(""));
// Esperado: { palavrasChave: [], total: 0 }

/* 📊 Desafio 3 — Análise de vendas por dia
Uma loja registra as vendas em uma matriz. Cada linha representa um dia e cada coluna representa uma venda daquele dia.
Crie a função analisarVendas(vendas).
Regras:
Calcule o valor total de todas as vendas.
Retorne o índice do dia com o maior faturamento total. Em caso de empate, escolha o primeiro dia com esse faturamento.
Conte quantos dias tiveram faturamento igual a zero.
Conte quantos dias tiveram faturamento superior a 100.
Se não houver dias com vendas positivas, retorne null para diaMaiorFaturamento.
Não altere a matriz original.*/
function analisarVendas(vendas) {
  let faturamentoTotal = 0;
  let diaMaiorFaturamento = null;
  let maiorFaturamento = 0;
  let diasSemVendas = 0;
  let diasAcimaDe100 = 0;

  for (let i = 0; i < vendas.length; i++) {
    let vendaAtual = 0;

    for (let j = 0; j < vendas[i].length; j++) {
      vendaAtual += vendas[i][j];
    }

    faturamentoTotal += vendaAtual;

    if (vendaAtual > maiorFaturamento) {
      maiorFaturamento = vendaAtual;
      diaMaiorFaturamento = i;
    }

    if (vendaAtual === 0) {
      diasSemVendas++;
    }

    if (vendaAtual > 100) {
      diasAcimaDe100++;
    }
  }

  return { faturamentoTotal, diaMaiorFaturamento, diasSemVendas, diasAcimaDe100 };
}

console.log(analisarVendas([ [30, 40], [], [80, 50], [20, 20], [0, 0] ]));
// Esperado: { faturamentoTotal: 240, diaMaiorFaturamento: 2, diasSemVendas: 2, diasAcimaDe100: 1 }

console.log(analisarVendas([ [0, 0], [], [10, 5], [15] ]));
// Esperado: { faturamentoTotal: 30, diaMaiorFaturamento: 2, diasSemVendas: 2, diasAcimaDe100: 0 }

console.log(analisarVendas([[], [0], []]));
// Esperado: { faturamentoTotal: 0, diaMaiorFaturamento: null, diasSemVendas: 3, diasAcimaDe100: 0 }