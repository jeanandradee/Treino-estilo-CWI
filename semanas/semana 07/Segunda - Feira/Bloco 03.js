/*
Q1 — Sistema de Estoque
Habilidades: Variáveis, operadores e condicionais.

Uma loja precisa calcular o estoque disponível.

O estoque inicial é 50 unidades.
Foram vendidas 18 unidades e recebidas mais 12.

A função deve retornar:
- estoqueFinal
- estoqueBaixo (true quando estoqueFinal < 40)
*/

function calcularEstoque() {
  let estoque = 50;

  // CORREÇÃO: os operadores estavam apenas realizando
  // operações, mas o resultado não era armazenado.
  // Use -= e += para atualizar a variável.

  estoque -= 18; // Remove 18 unidades vendidas.
  estoque += 12; // Adiciona 12 unidades recebidas.

  const estoqueBaixo = estoque < 40;

  return {
    estoqueFinal: estoque,
    estoqueBaixo
  };
}

console.log(calcularEstoque());

// Esperado:
// {
//   estoqueFinal: 44,
//   estoqueBaixo: false
// }
/*
Q2 — Cadastro de Clientes
Habilidades: Arrays, objetos e strings.

Uma empresa recebe uma lista de clientes.

Retorne um array contendo somente os nomes
dos clientes ativos, todos em letras maiúsculas.
*/

function listarClientes(clientes) {
  return clientes
    // CORREÇÃO: aqui você usou = (atribuição).
    // Isso alterava o valor de cliente.ativo.
    // O correto é usar === para comparar.
    .filter(cliente => cliente.ativo === true)

    // CORREÇÃO: o método correto é toUpperCase(),
    // com U e C maiúsculos.
    .map(cliente => cliente.nome.toUpperCase());
}

console.log(listarClientes([
  { nome: "Ana", ativo: true },
  { nome: "Pedro", ativo: false },
  { nome: "Carlos", ativo: true }
]));

// Esperado:
// ["ANA", "CARLOS"]

/*
Q3 — Relatório de Vendas
Habilidades: Arrays, acumuladores e operadores.

Uma empresa precisa calcular o total de vendas.

Retorne:
- total
- quantidade
- media
*/

function gerarRelatorio(vendas) {
  let total = 0;

  for (let venda of vendas) {

    // CORREÇÃO: você estava substituindo o total
    // pelo valor da venda atual.
    // O correto é acumular usando +=.
    total += venda;
  }

  const quantidade = vendas.length;

  // CORREÇÃO: protegemos a divisão por zero
  // caso o array esteja vazio.
  const media = quantidade > 0 ? total / quantidade : 0;

  return {
    total,
    quantidade,
    media
  };
}

console.log(gerarRelatorio([100, 200, 300]));

// Esperado:
// {
//   total: 600,
//   quantidade: 3,
//   media: 200
// }

/*
Q4 — Controle de Notas
Habilidades: Matrizes, loops e condicionais.

Uma escola recebe as notas de vários alunos.

Retorne a quantidade de alunos aprovados.

A aprovação acontece quando a média das notas
é maior ou igual a 7.
*/

function contarAprovados(alunos) {
  let aprovados = 0;

  for (let aluno of alunos) {
    let soma = 0;

    for (let nota of aluno.notas) {
      soma += nota;
    }

    let media = soma / aluno.notas.length;

    // CORREÇÃO: o enunciado exige média maior
    // OU IGUAL a 7. Você utilizou apenas > 7.
    if (media >= 7) {
      aprovados++;
    }
  }

  return aprovados;
}

console.log(contarAprovados([
  { nome: "Ana", notas: [7, 7, 7] },
  { nome: "Pedro", notas: [6, 8, 7] },
  { nome: "Carlos", notas: [5, 6, 6] }
]));

// Esperado:
// 2

/*
Q5 — Histórico Financeiro
Habilidades: JSON, objetos e arrays.

Um sistema recebe registros financeiros em JSON.

Retorne:
- total de entradas
- total de saídas
- saldo final
*/

function calcularSaldo(jsonDados) {
  const dados = JSON.parse(jsonDados);

  const entradas = dados
    .filter(dado => dado.tipo === "entrada")
    .reduce((acc, dado) => acc + dado.valor, 0);

  const saidas = dados
    .filter(dado => dado.tipo === "saida")
    .reduce((acc, dado) => acc + dado.valor, 0);

  // CORREÇÃO: você inverteu a subtração.
  // O saldo é entradas MENOS saídas.
  const saldo = entradas - saidas;

  return {
    entradas,
    saidas,
    saldo
  };
}

console.log(calcularSaldo(`[
  { "tipo": "entrada", "valor": 500 },
  { "tipo": "saida", "valor": 100 },
  { "tipo": "entrada", "valor": 300 },
  { "tipo": "saida", "valor": 200 }
]`));

// Esperado:
// {
//   entradas: 800,
//   saidas: 300,
//   saldo: 500
// }

/*
Q6 — Classificação de Funcionários
Habilidades: Strings, arrays, funções e ordenação.

Uma empresa precisa organizar seus funcionários.

Retorne um array contendo os nomes dos funcionários
com salário igual ou superior a 3000.

Os nomes devem aparecer em ordem alfabética.
*/

function classificarFuncionarios(funcionarios) {
  return funcionarios

    // CORREÇÃO: você utilizou > 3000,
    // mas o enunciado exige salário igual OU superior.
    .filter(funcionario => funcionario.salario >= 3000)

    .map(funcionario => funcionario.nome)

    // CORREÇÃO: você inverteu a ordenação.
    // a.localeCompare(b) organiza em ordem crescente.
    .sort((a, b) => a.localeCompare(b));
}

console.log(classificarFuncionarios([
  { nome: "Carlos", salario: 3500 },
  { nome: "Ana", salario: 3000 },
  { nome: "Pedro", salario: 2500 },
  { nome: "Julia", salario: 4200 }
]));

// Esperado:
// ["Ana", "Carlos", "Julia"]