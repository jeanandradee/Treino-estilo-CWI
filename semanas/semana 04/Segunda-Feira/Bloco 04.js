/*============================================================
🟢 QUESTÃO 1 — RESUMO DE NOTAS
============================================================
Uma plataforma de ensino precisa gerar um resumo das notas
de uma turma.
Crie a função resumirNotas(notas), que recebe um array de
notas e retorna um objeto com as seguintes propriedades:
- total: quantidade de notas recebidas.
- aprovados: quantidade de notas maiores ou iguais a 7.
- reprovados: quantidade de notas menores que 7.
- media: média de todas as notas.
- maiorNota: maior nota encontrada.
Regras:
- Se o array estiver vazio, todos os contadores devem ser 0.
- Se o array estiver vazio, media e maiorNota devem ser 0.
- A média deve ser calculada com duas casas decimais.
- Não altere o array original.
*/

function resumirNotas(notas) {
  if (notas.length === 0) {
    return { total: 0, aprovados: 0, reprovados:0, media: 0, maiorNota: 0 };
  }
  let total = 0;
  let aprovados = 0;
  let reprovados = 0;
  let soma = 0;
  let maiorNota = null;

  for (let nota of notas) {
    soma += nota;
    total ++;

    if (nota >= 7) {
      aprovados ++;
    } else {
      reprovados ++;
    }

    if (maiorNota === null || nota > maiorNota) {
      maiorNota = nota;
    }
  }
  let media = soma / total;

  return { total, aprovados, reprovados, media, maiorNota };
}

console.log(resumirNotas([8, 6, 10, 4])); // Resultado esperado: { total: 4, aprovados: 2, reprovados: 2, media: 7, maiorNota: 10 }

console.log(resumirNotas([5, 7, 9])); // Resultado esperado: { total: 3, aprovados: 2, reprovados: 1, media: 7, maiorNota: 9 }

console.log(resumirNotas([])); // Resultado esperado: { total: 0, aprovados: 0, reprovados: 0, media: 0, maiorNota: null }


/* ============================================================
🟢 QUESTÃO 2 — FILTRAR PRODUTOS
============================================================
Uma loja precisa selecionar produtos disponíveis para
uma promoção.
Cada produto é representado por um objeto com:
- nome: string.
- preco: número.
- estoque: quantidade disponível.
Crie a função selecionarProdutos(produtos, limite), que
retorna um novo array contendo apenas os produtos que:
- Tenham preço menor ou igual a limite.
- Tenham estoque maior que zero.
Regras:
- Preserve a ordem original dos produtos.
- Não altere o array original.
- Retorne os objetos completos, não apenas os nomes.
*/

function selecionarProdutos(produtos, limite) {
  let resultado = [];

  for (let { nome, preco, estoque } of produtos) {
    if (preco <= limite && estoque > 0) {
      resultado.push({nome, preco, estoque});
    }
  }

  return resultado;
}

console.log(selecionarProdutos([ { nome: "Teclado", preco: 100, estoque: 5 },
 { nome: "Mouse", preco: 50, estoque: 0 }, { nome: "Monitor", preco: 700, estoque: 2 }], 100));
// Resultado esperado: [{ nome: "Teclado", preco: 100, estoque: 5 }]

console.log(selecionarProdutos([ { nome: "Cabo", preco: 20, estoque: 10 },
 { nome: "Adaptador", preco: 35, estoque: 3 }], 30));
// Resultado esperado: [{ nome: "Cabo", preco: 20, estoque: 10 }]

console.log(selecionarProdutos([], 100));
// Resultado esperado: []


/*============================================================
🟢 QUESTÃO 3 — PROCESSAR TRANSAÇÕES
============================================================
Um sistema financeiro recebe uma lista de transações.
Cada transação é um objeto com:
- tipo: "entrada" ou "saida".
- valor: número positivo.
Crie a função processarTransacoes(transacoes), que retorna
um objeto contendo:
- totalEntradas: soma dos valores das entradas.
- totalSaidas: soma dos valores das saídas.
- saldoFinal: totalEntradas menos totalSaidas.
- quantidade: quantidade total de transações.
Regras:
- Os valores recebidos são sempre positivos.
- Uma transação do tipo "saida" deve diminuir o saldo.
- Se não houver transações, os totais e o saldo devem ser 0.
- Não altere o array original.
*/

function processarTransacoes(transacoes) {
  if (transacoes.length === 0) {
    return { totaEntradas: 0, totalSaidas:0, saldoFinal:0, quantidade:0 };
  }

  let totaEntradas = 0;
  let totalSaidas = 0;
  let saldoFinal = 0;
  let quantidade = 0;

  for (let { tipo, valor } of transacoes) {
    if (tipo === "entrada") {
      totaEntradas += valor;
      saldoFinal += valor;
      quantidade ++;
    } else if (tipo === "saida") {
      totalSaidas += valor
      saldoFinal -= valor;
      quantidade ++;
    }  
  }

  return { totaEntradas, totalSaidas, saldoFinal, quantidade };
}

console.log(processarTransacoes([ { tipo: "entrada", valor: 100 }, { tipo: "saida", valor: 30 }, { tipo: "entrada", valor: 50 } ]));
// Resultado esperado: { totalEntradas: 150, totalSaidas: 30, saldoFinal: 120, quantidade: 3 }

console.log(processarTransacoes([ { tipo: "saida", valor: 20 }, { tipo: "saida", valor: 10 } ]));
// Resultado esperado: { totalEntradas: 0, totalSaidas: 30, saldoFinal: -30, quantidade: 2 }

console.log(processarTransacoes([]));
// Resultado esperado: { totalEntradas: 0, totalSaidas: 0, saldoFinal: 0, quantidade: 0 }