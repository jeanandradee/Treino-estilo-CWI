/* Q1 — Controle de Funcionários
Uma empresa precisa listar seus funcionários ativos
com seus nomes em letras maiúsculas.
O código deveria:
1. Selecionar funcionários ativos.
2. Transformar seus nomes em maiúsculas.
3. Retornar a lista de nomes.
Identifique e corrija os erros.
*/

function listarFuncionarios(lista) {
  return lista
    // ERRO: = é atribuição. Para comparar, usamos ===.
    .filter(funcionario => funcionario.ativo === true)

    // ERRO: O método correto é toUpperCase(), com C maiúsculo.
    .map(funcionario => funcionario.nome.toUpperCase());
}

console.log(listarFuncionarios([
    { nome: "Ana", ativo: true },
    { nome: "Carlos", ativo: false },
    { nome: "Julia", ativo: true }
]));

// Resultado esperado:
// ["ANA", "JULIA"]

/* Q2 — Cálculo de Frete
Uma transportadora calcula o faturamento dos fretes entregues.
Regras:
- Considere somente fretes com status "entregue".
- Some o valor de todos os fretes entregues.
- Retorne o faturamento total.
Identifique e corrija os erros.
*/

function calcularFaturamento(fretes) {
  let total = 0;

  fretes.forEach(frete => {
    if (frete.status === "entregue") {

      // ERRO: = substituía o total anterior.
      // CORREÇÃO: += acumula os valores dos fretes.
      total += frete.valor;
    }
  });

  return total;
}

console.log(calcularFaturamento([
    { codigo: 101, valor: 150, status: "entregue" },
    { codigo: 102, valor: 200, status: "pendente" },
    { codigo: 103, valor: 300, status: "entregue" },
    { codigo: 104, valor: 100, status: "entregue" }
]));

// Resultado esperado: 550


/* Q3 — Controle de Temperatura
Uma indústria monitora a temperatura de suas máquinas.
O sistema deve:
1. Identificar temperaturas acima de 80.
2. Contar quantas máquinas ultrapassaram esse limite.
3. Retornar os nomes das máquinas que precisam de atenção.
Identifique e corrija os erros.
*/

function monitorarTemperaturas(maquinas) {

  // ERRO: O sinal estava invertido (<).
  // CORREÇÃO: O enunciado pede temperaturas acima de 80 (>).
  const criticas = maquinas.filter(
    maquina => maquina.temperatura > 80
  );

  const quantidade = criticas.length;

  const nomes = criticas.map(maquina => maquina.nome);

  return {
    quantidade,
    nomes
  };
}

console.log(monitorarTemperaturas([
    { nome: "Máquina A", temperatura: 75 },
    { nome: "Máquina B", temperatura: 90 },
    { nome: "Máquina C", temperatura: 85 },
    { nome: "Máquina D", temperatura: 70 }
]));

// Resultado esperado:
// {
//   quantidade: 2,
//   nomes: ["Máquina B", "Máquina C"]
// }


/* Q4 — Processamento de Notas
Uma escola recebe um JSON com os resultados dos alunos.
O sistema deve:
1. Converter o JSON em objeto.
2. Calcular a média das notas de cada aluno.
3. Retornar nome e média.
4. Não modificar os dados originais.
Identifique e corrija os erros.
*/

function processarNotas(json) {
  const alunos = JSON.parse(json);

  return alunos.map(aluno => {

    // ERRO: A soma estava correta, mas faltava dividir
    // pela quantidade de notas para calcular a média.
    const soma = aluno.notas.reduce(
      (acc, nota) => acc + nota, 0
    );

    const media = Number(
      (soma / aluno.notas.length).toFixed(2)
    );

    return {
      nome: aluno.nome,
      media
    };
  });
}

console.log(processarNotas(`[
    {"nome": "Ana", "notas": [8, 9, 7]},
    {"nome": "Carlos", "notas": [6, 5, 7]},
    {"nome": "Julia", "notas": [10, 9, 10]}
]`));

// Resultado esperado:
// [
//   { nome: "Ana", media: 8 },
//   { nome: "Carlos", media: 6 },
//   { nome: "Julia", media: 9.67 }
// ]


/* Q5 — Relatório de Pedidos
Uma loja precisa gerar um relatório de pedidos.
O sistema deve:
1. Considerar somente pedidos aprovados.
2. Calcular o valor total de cada pedido (quantidade * preço).
3. Retornar os pedidos com seus respectivos valores.
4. Calcular o faturamento total dos pedidos aprovados.
Identifique e corrija os erros.
*/

function gerarRelatorio(pedidos) {

  // ERRO: = estava modificando o status dos pedidos.
  // CORREÇÃO: === compara sem modificar os dados.
  const aprovados = pedidos.filter(
    pedido => pedido.status === "aprovado"
  );

  let faturamento = 0;

  const resultado = aprovados.map(pedido => {

    // ERRO: Estava somando quantidade + preço.
    // CORREÇÃO: O enunciado pede quantidade * preço.
    const total = pedido.quantidade * pedido.preco;

    faturamento += total;

    return {
      codigo: pedido.codigo,
      total
    };
  });

  return {
    pedidos: resultado,
    faturamento
  };
}

console.log(gerarRelatorio([
    { codigo: 101, quantidade: 2, preco: 100, status: "aprovado" },
    { codigo: 102, quantidade: 3, preco: 50, status: "pendente" },
    { codigo: 103, quantidade: 1, preco: 300, status: "aprovado" },
    { codigo: 104, quantidade: 4, preco: 25, status: "aprovado" }
]));

// Resultado esperado:
// {
//   pedidos: [
//     { codigo: 101, total: 200 },
//     { codigo: 103, total: 300 },
//     { codigo: 104, total: 100 }
//   ],
//   faturamento: 600
// }