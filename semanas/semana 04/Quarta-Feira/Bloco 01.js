/* ==================================================
   QUESTÃO 1 — RELATÓRIO DE ACESSOS
   ==================================================
Uma plataforma registra tentativas de acesso dos usuários.
Cada registro possui:
- usuario: nome do usuário;
- resultado: "SUCESSO" ou "NEGADO".
Crie a função analisarAcessos(registros), que retorne um
objeto contendo:
1. aprovados: quantidade de acessos com resultado "SUCESSO".
2. negados: quantidade de acessos com resultado "NEGADO".
3. primeiroAprovado: nome do primeiro usuário que conseguiu
   acessar, ou null se ninguém conseguiu.
Não altere o array original.
Exemplo de retorno:
{
  aprovados: 2,
  negados: 2,
  primeiroAprovado: "Beto"
}
*/

function analisarAcessos(registros) {
  let aprovados = 0;
  let negados = 0;
  let primeiroAprovado = null;

  for (let { usuario, resultado } of registros) {
    if (resultado === "SUCESSO") {
      aprovados ++ ;

      if (primeiroAprovado === null ) {
        primeiroAprovado = usuario;
      }
    } else if (resultado === "NEGADO"){
      negados ++ ;
    }
  }

  return { aprovados, negados, primeiroAprovado };
}


console.log(analisarAcessos([{ usuario: "Ana", resultado: "NEGADO" },{ usuario: "Beto", resultado: "SUCESSO" },
{ usuario: "Caio", resultado: "SUCESSO" },{ usuario: "Duda", resultado: "NEGADO" }]));

console.log(analisarAcessos([
  { usuario: "Lia", resultado: "NEGADO" },
  { usuario: "Rui", resultado: "NEGADO" }
]));

console.log(analisarAcessos([]));


/* ==================================================
   QUESTÃO 2 — CONTROLE DE ESTOQUE
   ==================================================
Uma loja precisa identificar quais produtos devem ser repostos.
Cada produto possui:
- nome: nome do produto;
- estoque: quantidade disponível;
- minimo: quantidade mínima recomendada.
Crie a função verificarReposicao(produtos), que retorne
um objeto contendo:
1. produtosReposicao: array com os nomes dos produtos cujo
   estoque seja MENOR que o mínimo.
2. estoqueTotal: soma das quantidades em estoque de todos
   os produtos.
3. produtosZerados: quantidade de produtos cujo estoque
   seja exatamente zero.
ATENÇÃO:
- Estoque igual ao mínimo NÃO precisa de reposição.
- Não altere o array original.
- Se a lista estiver vazia, retorne os valores iniciais.
Exemplo de retorno:
{
  produtosReposicao: ["Teclado", "Monitor"],
  estoqueTotal: 15,
  produtosZerados: 1
}
*/

function verificarReposicao(produtos) {
  let produtosReposicao = [];
  let estoqueTotal = 0;
  let produtosZerados = 0;

  for (let { nome, estoque, minimo } of produtos) {
    if (estoque < minimo) {
      produtosReposicao.push(nome);
    }
    estoqueTotal += estoque;

    if (estoque === 0) {
      produtosZerados ++ ;
    }
  }

  return { produtosReposicao, estoqueTotal, produtosZerados };
}


console.log(verificarReposicao([{ nome: "Teclado", estoque: 3, minimo: 5 }, { nome: "Mouse", estoque: 10, minimo: 4 },
{ nome: "Monitor", estoque: 0, minimo: 2 }, { nome: "Webcam", estoque: 2, minimo: 2 }]));

console.log(verificarReposicao([{ nome: "Cabo", estoque: 0, minimo: 3 },{ nome: "Carregador", estoque: 0, minimo: 5 }]));

console.log(verificarReposicao([]));


/* ==================================================
   QUESTÃO 3 — RESUMO DE TRANSAÇÕES
   ==================================================
Um sistema financeiro registra movimentações de entrada
e saída. Cada transação possui:
- tipo: "ENTRADA" ou "SAIDA";
- valor: valor da movimentação.
Crie a função resumirTransacoes(transacoes), que retorne
um objeto contendo:
1. totalEntradas: soma dos valores das transações do tipo
   "ENTRADA".
2. totalSaidas: soma dos valores das transações do tipo
   "SAIDA".
3. saldo: total de entradas menos total de saídas.
Considere que todos os valores são positivos e que os tipos
serão sempre "ENTRADA" ou "SAIDA".
Não altere o array original.
Exemplo de retorno:
{
  totalEntradas: 150,
  totalSaidas: 50,
  saldo: 100
}
*/

function resumirTransacoes(transacoes) {
  let totalEntradas = 0;
  let totalSaidas = 0;
  let saldo = 0;

  for (let { tipo, valor } of transacoes) {
    if (tipo === "ENTRADA") {
      totalEntradas += valor;
      saldo += valor;
    } else if (tipo === "SAIDA") {
      totalSaidas += valor;
      saldo -= valor;
    }
  }

  return { totalEntradas, totalSaidas, saldo };
}

console.log(resumirTransacoes([{ tipo: "ENTRADA", valor: 100 },{ tipo: "SAIDA", valor: 30 },
{ tipo: "ENTRADA", valor: 50 },{ tipo: "SAIDA", valor: 20 }]));

console.log(resumirTransacoes([{ tipo: "SAIDA", valor: 40 },{ tipo: "SAIDA", valor: 10 }]));

console.log(resumirTransacoes([]));
