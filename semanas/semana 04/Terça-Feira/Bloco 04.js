/*==================================================
QUESTÃO 1 — Relatório de Entregas
====================================================
Uma transportadora registra suas entregas. Cada entrega possui:
- codigo: identificação da entrega;
- status: situação atual;
- distancia: distância percorrida em quilômetros.
Crie a função resumirEntregas(entregas), que retorna um objeto com:
- concluidas: quantidade de entregas com status "CONCLUIDA";
- distanciaTotal: soma das distâncias de todas as entregas concluídas;
- codigoMaiorDistancia: código da entrega concluída com a maior distância.
Se não houver entregas concluídas, codigoMaiorDistancia deve ser null
e distanciaTotal deve ser zero.
Em caso de empate na maior distância, mantenha o código da primeira
entrega encontrada.
Não altere o array original.
*/

function resumirEntregas(entregas) {
  let concluidas = 0;
  let distanciaTotal = 0;
  let codigoMaiorDistancia = null;
  let maiorDistancia = 0;

  for (let { codigo, status, distancia } of entregas) {
    distanciaTotal += distancia
    if (status !== "CONCLUIDA") {
      continue ;
    }

    
    concluidas ++ ;

    if (codigoMaiorDistancia === null || distancia > maiorDistancia) {
      maiorDistancia = distancia;
      codigoMaiorDistancia = codigo;
    }
  }

  return { concluidas, distanciaTotal, codigoMaiorDistancia };
}


console.log(resumirEntregas([{ codigo: "E01", status: "CONCLUIDA", distancia: 12 },{ codigo: "E02", status: "PENDENTE", distancia: 20 },{ codigo: "E03", status: "CONCLUIDA", distancia: 18 },{ codigo: "E04", status: "CONCLUIDA", distancia: 18 }]));
// Esperado: { concluidas: 3, distanciaTotal: 48, codigoMaiorDistancia: "E03" }

console.log(resumirEntregas([{ codigo: "E05", status: "PENDENTE", distancia: 30 }]));
// Esperado: { concluidas: 0, distanciaTotal: 0, codigoMaiorDistancia: null }


/*==================================================
QUESTÃO 2 — Processamento de Reembolsos
==================================================
Uma plataforma recebe solicitações de reembolso.
Cada solicitação possui:
- cliente: nome do cliente;
- valor: valor solicitado;
- status: situação da solicitação.
Crie a função processarReembolsos(solicitacoes), que retorna
um objeto contendo:
- aprovados: novo array com os nomes dos clientes cujas solicitações
  foram aprovadas;
- totalAprovado: soma dos valores das solicitações aprovadas;
- recusados: quantidade de solicitações com status "RECUSADO".
Uma solicitação é aprovada somente quando:
- seu status é "PENDENTE";
- seu valor é menor ou igual a 200.
As solicitações com status "RECUSADO" devem ser contadas,
independentemente do valor.
Solicitações com status "PENDENTE" e valor superior a 200
não são aprovadas nem entram na contagem de recusados.
Preserve a ordem dos clientes aprovados e não altere os dados recebidos.
*/

function processarReembolsos(solicitacoes) {
  let aprovados = [];
  let totalAprovado = 0;
  let recusados = 0;

  for (let { cliente, valor,  status } of solicitacoes) {
    if (status === "PENDENTE" && valor <= 200) {
      aprovados.push(cliente);
      totalAprovado += valor;
    } else if (status === "RECUSADO"){
      recusados ++;
    }
  }

  return { aprovados, totalAprovado, recusados };
}

console.log(processarReembolsos([{ cliente: "Ana", valor: 150, status: "PENDENTE" },{ cliente: "Beto", valor: 250, status: "PENDENTE" },
{ cliente: "Caio", valor: 80, status: "RECUSADO" },{ cliente: "Duda", valor: 200, status: "PENDENTE" },
{ cliente: "Eva", valor: 50, status: "APROVADO" }]));
// Esperado: { aprovados: ["Ana", "Duda"], totalAprovado: 350, recusados: 1 }

console.log(processarReembolsos([]));
// Esperado: { aprovados: [], totalAprovado: 0, recusados: 0 }


/*==================================================
QUESTÃO 3 — Análise de Estoque
==================================================
Uma loja precisa identificar produtos que precisam de reposição.
Cada produto possui:
- nome: nome do produto;
- estoque: quantidade disponível;
- minimo: quantidade mínima exigida.
Crie a função analisarEstoque(produtos), que retorna um objeto com:
- reposicao: novo array com os nomes dos produtos cujo estoque
  seja menor que o mínimo;
- quantidadeCritica: quantidade de produtos cujo estoque seja zero;
- menorEstoque: nome do produto com a menor quantidade em estoque.
Se houver empate no menor estoque, mantenha o primeiro produto.
Se o array estiver vazio, reposicao deve ser [], quantidadeCritica
deve ser zero e menorEstoque deve ser null.
Não altere o array original nem seus objetos.
*/

function analisarEstoque(produtos) {
  let reposicao = [];
  let quantidadeCritica = 0;
  let menorEstoque = null;
  let quantidadeMenorEstoque = Infinity;
  for (let { nome, estoque, minimo } of produtos) {
    if (estoque < minimo) {
      reposicao.push(nome);
    }

    if (estoque === 0) {
      quantidadeCritica ++ ;
    }

    if (menorEstoque === null || estoque < quantidadeMenorEstoque) {
      quantidadeMenorEstoque = estoque;
      menorEstoque = nome;
    }
  }

  return { reposicao, quantidadeCritica, menorEstoque };
}

console.log(analisarEstoque([{ nome: "Caneta", estoque: 10, minimo: 5 },{ nome: "Caderno", estoque: 0, minimo: 8 },
{ nome: "Borracha", estoque: 3, minimo: 5 }, { nome: "Mochila", estoque: 0, minimo: 2 }]));
// Esperado: { reposicao: ["Caderno", "Borracha", "Mochila"], quantidadeCritica: 2, menorEstoque: "Caderno" }

console.log(analisarEstoque([{ nome: "Lápis", estoque: 8, minimo: 4 },{ nome: "Régua", estoque: 6, minimo: 3 }]));
// Esperado: { reposicao: [], quantidadeCritica: 0, menorEstoque: "Régua" }

console.log(analisarEstoque([]));
// Esperado: { reposicao: [], quantidadeCritica: 0, menorEstoque: null }