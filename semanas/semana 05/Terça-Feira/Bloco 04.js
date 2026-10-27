/* ==================================================
   DESAFIO 1 — HISTÓRICO DE ACESSOS
   ==================================================
Um sistema registra acessos de usuários.
Cada registro possui:
{ usuario, horario, sucesso }
Crie analisarAcessos(registros).
Retorne:
- totalAcessos: quantidade total de registros.
- acessosFalhos: quantidade de registros com sucesso === false.
- usuariosBloqueados: usuários que tiveram 2 ou mais acessos
  falhos, sem repetição e na ordem em que atingiram o segundo erro.
- primeiroAcessoFalho: objeto completo do primeiro registro
  com sucesso === false, ou null se não existir.
Regras:
- Considere o nome do usuário exatamente como está escrito.
- Não modifique o array original nem seus objetos.
*/

function analisarAcessos(registros) {
  let totalAcessos = 0;
  let acessosFalhos = 0;
  let usuariosBloqueados = [];
  let primeiroAcessoFalho = null;

  let falhasPorUsuario = {};

  for (let { usuario, horario, sucesso } of registros) {
    totalAcessos++;

    if (sucesso === false) {
      acessosFalhos++;

      if (primeiroAcessoFalho === null) {
        primeiroAcessoFalho = { usuario, horario, sucesso };
      }

      if (falhasPorUsuario[usuario] === undefined) {
        falhasPorUsuario[usuario] = 0;
      }

      falhasPorUsuario[usuario]++;

      if (
        falhasPorUsuario[usuario] === 2 &&
        !usuariosBloqueados.includes(usuario)
      ) {
        usuariosBloqueados.push(usuario);
      }
    }
  }

  return { totalAcessos, acessosFalhos, usuariosBloqueados, primeiroAcessoFalho };
}

console.log("B4.1:", analisarAcessos([ { usuario: "ana", horario: "08:00", sucesso: true },
  { usuario: "bia", horario: "08:05", sucesso: false }, { usuario: "caio", horario: "08:10", sucesso: false },
  { usuario: "bia", horario: "08:15", sucesso: false }, { usuario: "ana", horario: "08:20", sucesso: false },
  { usuario: "caio", horario: "08:25", sucesso: true }, { usuario: "ana", horario: "08:30", sucesso: false } ]));
// RESULTADO ESPERADO: { totalAcessos: 7, acessosFalhos: 5, usuariosBloqueados: ["bia", "ana"],
//  primeiroAcessoFalho: { usuario: "bia", horario: "08:05", sucesso: false } }



/* ==================================================
   DESAFIO 2 — ORGANIZADOR DE PALAVRAS-CHAVE
   ==================================================
Um editor recebe uma frase e precisa gerar palavras-chave.
Crie gerarPalavrasChave(frase).
Regras:
- Considere as palavras separadas por espaços.
- Converta todas para letras minúsculas.
- Ignore palavras com menos de 4 caracteres.
- Ignore palavras que começam com números.
- Não repita palavras, preservando a primeira ocorrência.
- Retorne também a quantidade de palavras-chave encontradas.
Considere que as palavras podem conter letras e números,
mas não possuem pontuação.
Retorne:
{
  palavrasChave: [...],
  total: quantidade
}
*/

function gerarPalavrasChave(frase) {
  let palavrasChave = [];
  let total = 0;

  let palavras = frase.trim().split(/\s+/);

  if (frase.trim() === "") {
    return { palavrasChave, total };
  }

  for (let palavra of palavras) {
    palavra = palavra.toLowerCase();

    if (palavra.length < 4) {
      continue;
    }

    if (palavra[0] >= "0" && palavra[0] <= "9") {
      continue;
    }

    if (!palavrasChave.includes(palavra)) {
      palavrasChave.push(palavra);
      total++;
    }
  }

  return { palavrasChave, total };
}

console.log("B4.2:", gerarPalavrasChave("Java código Java 123teste lógica CWI sistema código 2026 dados"));
// RESULTADO ESPERADO: { palavrasChave: ["java", "código", "lógica", "sistema", "dados"], total: 5 }

/* ==================================================
   DESAFIO 3 — ANÁLISE DE VENDAS POR DIA
   ==================================================
Uma loja registra as vendas em uma matriz:
- Cada linha representa um dia.
- Cada número representa o valor de uma venda.
- Linhas vazias representam dias sem vendas.
Crie analisarVendas(vendas).
Retorne:
- faturamentoTotal: soma de todas as vendas.
- diaMaiorFaturamento: índice do dia com maior faturamento.
- diasSemVendas: quantidade de linhas vazias.
- diasAcimaDaMeta: quantidade de dias com faturamento
  estritamente maior que 100.
Regras:
- Se a matriz estiver vazia, diaMaiorFaturamento deve ser null.
- Se houver dias, mas todos estiverem vazios, diaMaiorFaturamento
  deve ser null.
- Em caso de empate no maior faturamento positivo, escolha
  o primeiro dia.
- Não modifique a matriz original.
*/

function analisarVendas(vendas) {
  let faturamentoTotal = 0;
  let diaMaiorFaturamento = null;
  let maiorFaturamento = 0;
  let diasSemVendas = 0;
  let diasAcimaDaMeta = 0;

  for (let i = 0; i < vendas.length; i++) {
    let faturamentoAtual = 0;

    if (vendas[i].length === 0) {
      diasSemVendas++;
    }

    for (let j = 0; j < vendas[i].length; j++) {
      let venda = vendas[i][j];

      faturamentoTotal += venda;
      faturamentoAtual += venda;
    }

    if (
      faturamentoAtual > 0 &&
      (diaMaiorFaturamento === null ||
        faturamentoAtual > maiorFaturamento)
    ) {
      maiorFaturamento = faturamentoAtual;
      diaMaiorFaturamento = i;
    }

    if (faturamentoAtual > 100) {
      diasAcimaDaMeta++;
    }
  }

  return { faturamentoTotal, diaMaiorFaturamento, diasSemVendas, diasAcimaDaMeta };
}

console.log("B4.3:", analisarVendas([ [40, 30], [], [60, 50], [20, 20, 20], [], [80, 30] ]));
// RESULTADO ESPERADO: { faturamentoTotal: 350, diaMaiorFaturamento: 2, diasSemVendas: 2, diasAcimaDaMeta: 2 }