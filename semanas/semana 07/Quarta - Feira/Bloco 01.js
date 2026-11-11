/* Q1 — Controle de Entregas
Uma transportadora registra suas entregas.
Retorne:
1. Quantidade de entregas concluídas.
2. Soma das distâncias das entregas concluídas.
3. Média da distância das entregas concluídas.
4. Quantidade de entregas pendentes.
*/

function analisarEntregas(entregas) {
  const concluidas = entregas.filter(entrega => entrega.status.toLowerCase() === "entregue");

  const distanciaTotal = concluidas.reduce((acc, e) => acc + e.distancia ,0);

  const mediaDistancia = concluidas.length ? Number((distanciaTotal / concluidas.length).toFixed(2)) : 0;

  const pendentes = entregas.filter(entrega => entrega.status.toLowerCase() === "pendente").length;

  return {
    concluidas: concluidas.length,
    distanciaTotal,
    mediaDistancia,
    pendentes
  }
}

console.log(analisarEntregas([
    { codigo: 101, distancia: 12, status: "entregue" },
    { codigo: 102, distancia: 25, status: "pendente" },
    { codigo: 103, distancia: 8, status: "entregue" },
    { codigo: 104, distancia: 30, status: "entregue" },
    { codigo: 105, distancia: 15, status: "cancelada" }
]));

// Resultado esperado: { concluidas: 3, distanciaTotal: 50, mediaDistancia: 16.67, pendentes: 1 }

/* Q2 — Avaliação de Funcionários
Uma empresa armazena as avaliações de seus funcionários.
Retorne:
1. Nome e média de cada funcionário.
2. Quantidade de funcionários com média >= 7.
3. Nome do funcionário com a maior média.
*/

function avaliarFuncionarios(lista) {
  const funcionarios = lista.map(funcionario => {
    const soma = funcionario.notas.reduce((acc, n) => acc + n, 0);

    const media = Number((soma / funcionario.notas.length).toFixed(2));

    return {
      nome: funcionario.nome,
      media
    };
  });

  const aprovados = funcionarios.filter(funcionario => funcionario.media >= 7).length;

  const melhorFuncionario = funcionarios.reduce((maior, atual) =>
    atual.media > maior.media ? atual : maior
  );

  return {
    funcionarios,
    aprovados,
    maiorMedia: melhorFuncionario.nome
  };
}

console.log(avaliarFuncionarios([
    { nome: "Ana", notas: [8, 9, 7] },
    { nome: "Carlos", notas: [6, 5, 7] },
    { nome: "Julia", notas: [10, 9, 10] },
    { nome: "Pedro", notas: [7, 7, 8] }
]));
// Resultado esperado:
// {
//   funcionarios: [
//     { nome: "Ana", media: 8 },
//     { nome: "Carlos", media: 6 },
//     { nome: "Julia", media: 9.67 },
//     { nome: "Pedro", media: 7.33 }
//   ], aprovados: 3, maiorMedia: "Julia" }


/* Q3 — Monitoramento de Estoque
Uma loja acompanha a movimentação de seus produtos.
Retorne:
1. Lista dos produtos abaixo do estoque mínimo.
2. Quantidade de produtos nessa situação.
3. Quantidade total de unidades disponíveis.
4. Nome do produto com maior estoque.
*/

function verificarEstoque(estoque) {
  const abaixoMinimo = estoque.filter(p => p.estoque < p.minimo).map(p => p.nome);

  const quantidade = abaixoMinimo.length;

  const totalUnidades = estoque.reduce((acc, p) => acc + p.estoque ,0);

  const maiorEstoque = estoque.reduce((maior, atual) =>
    atual.estoque > maior.estoque ? atual : maior
  )

  return {
    abaixoMinimo,
    quantidade,
    totalUnidades,
    maiorEstoque: maiorEstoque.nome
  }
}

console.log(verificarEstoque([
    { nome: "Teclado", estoque: 12, minimo: 5 },
    { nome: "Mouse", estoque: 3, minimo: 5 },
    { nome: "Monitor", estoque: 8, minimo: 4 },
    { nome: "Headset", estoque: 2, minimo: 3 },
    { nome: "Webcam", estoque: 6, minimo: 6 }
]));
// Resultado esperado:
// {
//   abaixoMinimo: ["Mouse", "Headset"],
//   quantidade: 2,
//   totalUnidades: 31,
//   maiorEstoque: "Teclado"
// }
