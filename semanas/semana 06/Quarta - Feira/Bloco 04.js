/* QUESTÃO 1 — Análise de Produção
Uma fábrica registra a produção diária de suas máquinas.
Cada máquina possui:
- nome
- producao: array com a quantidade produzida em cada dia.
O sistema deve retornar:
1. A produção total de cada máquina.
2. Quantas máquinas produziram pelo menos 100 unidades no total.
3. O nome da máquina com maior produção.
4. A produção geral da fábrica.
Em caso de empate na maior produção, manter a primeira máquina.
Não modificar o array original.
*/

function analisarProducao(maquinas) {
  let totais = [];
  let maquinasAcimaMeta = 0;
  let maiorProdutora = null;
  let quantidadeMaiorProdutora = 0;
  let producaoGeral = 0;
  
  for (let { nome, producao } of maquinas) {
    let soma = 0;

    for (let p of producao) {
      soma += p;
    }

    totais.push(soma);

    if (soma >= 100) {
      maquinasAcimaMeta ++ ;
    }

    if (maiorProdutora === null || soma > quantidadeMaiorProdutora) {
      quantidadeMaiorProdutora = soma;
      maiorProdutora = nome;
    }

    producaoGeral += soma;
  }

  return {
    totais,
    maquinasAcimaMeta,
    maiorProdutora,
    producaoGeral
  }
}

console.log(analisarProducao([ { nome: "Máquina A", producao: [30, 40, 35] }, { nome: "Máquina B", producao: [50, 60, 45] },
 { nome: "Máquina C", producao: [20, 25, 30] }, { nome: "Máquina D", producao: [40, 40, 40] } ]));
// Esperado: { totais: [105, 155, 75, 120], maquinasAcimaMeta: 3, maiorProdutora: "Máquina B", producaoGeral: 455 }


/* QUESTÃO 2 — Auditoria de Funcionários
Uma empresa precisa analisar os registros de seus funcionários.
Cada funcionário possui:
- nome
- setor
- horas: array com as horas trabalhadas durante a semana.
- ativo: booleano.
O sistema deve retornar:
1. Quantos funcionários estão ativos.
2. Quantos funcionários ativos trabalharam pelo menos 40 horas.
3. A quantidade total de horas dos funcionários ativos.
4. Um array com os nomes dos funcionários ativos que
   trabalharam menos de 40 horas.
5. A média de horas dos funcionários ativos.
Se não houver funcionários ativos, a média deve ser 0.
Não modificar os dados originais.
*/

function auditarFuncionarios(funcionarios) {
  let ativos = 0;
  let ativosCom40Horas = 0;
  let totalHoras = 0;
  let abaixoDe40 = [];
  let mediaHoras = 0;
  let somaHorasAtivos = 0;

  for (let { nome, setor, horas, ativo } of funcionarios) {
    if (!ativo) {
      continue;
    }
 
    let somaHoras = 0

    for (let hora of horas) {
      somaHoras += hora;
    }
    
    ativos ++;
    somaHorasAtivos += somaHoras;
    totalHoras += somaHoras;

    if (somaHoras >= 40) {
      ativosCom40Horas ++ ;
    }

    if (somaHoras < 40) {
      abaixoDe40.push(nome);
    }
  }

  if (ativos > 0) {
    mediaHoras = somaHorasAtivos / ativos;
  }

  return {
    ativos,
    ativosCom40Horas,
    totalHoras,
    abaixoDe40,
    mediaHoras
  }
}

console.log(auditarFuncionarios([ { nome: "Ana", setor: "TI", horas: [8, 8, 8, 8, 8], ativo: true },
 { nome: "Carlos", setor: "RH", horas: [6, 6, 6, 6, 6], ativo: true },
 { nome: "Marina", setor: "TI", horas: [8, 8, 8, 8, 8], ativo: false },
 { nome: "Pedro", setor: "Financeiro", horas: [7, 7, 7, 7, 7], ativo: true } ]));

// Esperado: { ativos: 3, ativosCom40Horas: 1, totalHoras: 105,
// abaixoDe40: ["Carlos", "Pedro"], mediaHoras: 35 }

/* QUESTÃO 3 — Processamento de Pedidos
Uma loja precisa processar os pedidos recebidos.
Cada pedido possui:
- codigo
- cliente
- produtos: array de objetos contendo nome e preco.
- status: "APROVADO", "PENDENTE" ou "CANCELADO".
O sistema deve retornar:
1. Quantidade de pedidos aprovados.
2. Quantidade de pedidos pendentes.
3. Quantidade de pedidos cancelados.
4. Valor total dos pedidos aprovados.
5. Nome do cliente que realizou o pedido aprovado
   de maior valor.
Em caso de empate, manter o primeiro cliente.
Pedidos sem produtos possuem valor total igual a 0.
Não modificar os dados originais.
*/

function processarPedidos(pedidos) {
  let aprovados = 0;
  let pendentes = 0;
  let cancelados = 0;
  let valorAprovado = 0;
  let maiorPedido = null;
  let valorMaiorPedido = 0;

  for (let { cliente, produtos, status } of pedidos) {
    if (status === "APROVADO") {
      aprovados ++ ;
      let somaProdutos = 0;
      for (let { preco } of produtos) {
        valorAprovado += preco;
        somaProdutos += preco;
      }
    
      if (maiorPedido === null || somaProdutos > valorMaiorPedido) {
        valorMaiorPedido = somaProdutos;
        maiorPedido = cliente;
      } 

    } else if (status === "PENDENTE") {
      pendentes ++ ;
    } else if (status === "CANCELADO") {
      cancelados ++ ;
    }
  }

  return {
    aprovados,
    pendentes,
    cancelados,
    valorAprovado,
    maiorPedido
  }
}

console.log(processarPedidos([ 
 { codigo: 101, cliente: "Lucas", produtos: [{ nome: "Teclado", preco: 100 }, { nome: "Mouse", preco: 50 }], status: "APROVADO" },
 { codigo: 102, cliente: "Mariana", produtos: [ { nome: "Monitor", preco: 500 } ], status: "PENDENTE" },
 { codigo: 103, cliente: "Pedro", produtos: [ { nome: "Notebook", preco: 1200 }, { nome: "Mouse", preco: 50 } ], status: "APROVADO" },
 { codigo: 104, cliente: "Carla", produtos: [], status: "CANCELADO" }, 
 { codigo: 105, cliente: "João", produtos: [ { nome: "Impressora", preco: 300 } ], status: "APROVADO" } ]));

// Esperado: { aprovados: 3, pendentes: 1, cancelados: 1, valorAprovado: 1700, maiorPedido: "Pedro" }