
/* 🔥 B1 — LÓGICA APLICADA

Q1 — Análise de estoque

Uma loja precisa calcular o estoque disponível de seus produtos.
Cada produto possui:
- nome
- quantidade
- quantidadeVendida

Regras:
- O estoque disponível é a quantidade inicial menos a quantidade vendida.
- Produtos com estoque disponível igual a zero também devem ser contabilizados.
- Retorne a quantidade total de produtos e o estoque total disponível.

*/

// Q1 — RESOLUÇÃO

function analisarEstoque(produtos) {
  let totalProdutos = 0;
  let estoqueTotal = 0;

  for (let produto of produtos) {
    // Correção: era +, mas o correto é subtrair.
    let disponivel = produto.quantidade - produto.quantidadeVendida;

    // Correção: era > 0. Agora inclui estoque igual a zero.
    if (disponivel >= 0) {
      totalProdutos++;
      estoqueTotal += disponivel;
    }
  }

  return {
    totalProdutos,
    estoqueTotal
  };
}

console.log(analisarEstoque([
  { nome: "Teclado", quantidade: 20, quantidadeVendida: 5 },
  { nome: "Mouse", quantidade: 10, quantidadeVendida: 10 },
  { nome: "Monitor", quantidade: 15, quantidadeVendida: 3 }
]));

// Resultado esperado:
// { totalProdutos: 3, estoqueTotal: 27 }


/* Q2 — Análise de Notas

Uma escola precisa analisar as notas dos alunos.

Regras:
- Calcular a média das notas.
- Contar quantos alunos foram aprovados.
- A aprovação exige nota maior ou igual a 7.
- Se o array estiver vazio, a média deve ser zero.

Retorne:
- media
- aprovados

*/

// Q2 — RESOLUÇÃO

function analisarNotas(notas) {
  let soma = 0;
  let aprovados = 0;

  for (let nota of notas) {
    soma += nota;

    // Correção: era > 7. O correto é >= 7.
    if (nota >= 7) {
      aprovados++;
    }
  }

  // Correção: evita divisão por zero quando o array está vazio.
  let media = notas.length > 0 ? soma / notas.length : 0;

  return {
    media,
    aprovados
  };
}

console.log(analisarNotas([8, 6, 7, 10, 5]));

// Resultado esperado:
// { media: 7.2, aprovados: 3 }


/* Q3 — Cadastro de Funcionários (Objetos)

Uma empresa precisa gerar um relatório dos funcionários ativos.

Cada funcionário possui:
- nome
- salario
- ativo

Regras:
- Considerar somente funcionários ativos.
- Calcular a soma dos salários dos funcionários ativos.
- Retornar os nomes dos funcionários ativos.
- Não modificar os objetos originais.

Retorne:
- nomes
- totalSalarios

*/

// Q3 — RESOLUÇÃO

function gerarRelatorio(funcionarios) {
  let nomes = [];
  let totalSalarios = 0;

  for (let funcionario of funcionarios) {

    // Correção: era = true, que alterava o objeto.
    // Usamos === para comparar sem modificar o valor.
    if (funcionario.ativo === true) {
      nomes.push(funcionario.nome);
      totalSalarios += funcionario.salario;
    }
  }

  return {
    nomes,
    totalSalarios
  };
}

console.log(gerarRelatorio([
  { nome: "Ana", salario: 3000, ativo: true },
  { nome: "Carlos", salario: 2500, ativo: false },
  { nome: "Marina", salario: 4000, ativo: true }
]));

// Resultado esperado:
// { nomes: ["Ana", "Marina"], totalSalarios: 7000 }


/* Q4 — Processamento de Pedidos (Arrays e Condicionais)

Uma loja virtual precisa analisar seus pedidos.

Cada pedido possui:
- numero
- valor
- status

Regras:
- Considerar somente pedidos com status "aprovado".
- Somar os valores desses pedidos.
- Contar quantos pedidos foram aprovados.
- O status deve ser comparado sem diferenciar maiúsculas de minúsculas.
- Não modificar os objetos originais.

Retorne:
- totalAprovados
- valorTotal

*/

// Q4 — RESOLUÇÃO

function processarPedidos(pedidos) {
  let totalAprovados = 0;
  let valorTotal = 0;

  for (let pedido of pedidos) {

    // Correção: usamos toLowerCase() para padronizar
    // o status antes de fazer a comparação.
    if (pedido.status.toLowerCase() === "aprovado") {
      totalAprovados++;
      valorTotal += pedido.valor;
    }
  }

  return {
    totalAprovados,
    valorTotal
  };
}

console.log(processarPedidos([
  { numero: 101, valor: 150, status: "aprovado" },
  { numero: 102, valor: 200, status: "PENDENTE" },
  { numero: 103, valor: 300, status: "APROVADO" },
  { numero: 104, valor: 100, status: "Aprovado" }
]));

// Resultado esperado:
// { totalAprovados: 3, valorTotal: 550 }


/* Q5 — Monitoramento de Temperaturas (Matrizes)

Uma empresa monitora temperaturas registradas em diferentes setores.

Os dados são armazenados em uma matriz:
- Cada linha representa um setor.
- Cada número representa uma temperatura registrada.

Regras:
- Calcular a soma de todas as temperaturas.
- Contar quantas temperaturas são superiores a 30.
- Encontrar a maior temperatura registrada.
- Se a matriz estiver vazia ou não possuir temperaturas, a maior temperatura deve ser null.
- Não modificar a matriz original.

Retorne:
- soma
- acimaDe30
- maiorTemperatura

*/

// Q5 — RESOLUÇÃO

function analisarTemperaturas(matriz) {
  let soma = 0;
  let acimaDe30 = 0;

  // Correção: começa com null porque ainda não encontramos
  // nenhuma temperatura para comparar.
  let maiorTemperatura = null;

  for (let linha of matriz) {
    for (let temperatura of linha) {
      soma += temperatura;

      // Correção: era >= 30. O enunciado pede superior a 30.
      if (temperatura > 30) {
        acimaDe30++;
      }

      // Correção: considera o primeiro valor encontrado
      // e depois compara com os próximos.
      if (maiorTemperatura === null || temperatura > maiorTemperatura) {
        maiorTemperatura = temperatura;
      }
    }
  }

  return {
    soma,
    acimaDe30,
    maiorTemperatura
  };
}

console.log(analisarTemperaturas([
  [22, 28, 31],
  [35, 19, 30],
  [26, 33, 24]
]));

// Resultado esperado:
// { soma: 248, acimaDe30: 3, maiorTemperatura: 35 }
