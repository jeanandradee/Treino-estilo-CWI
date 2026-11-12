/* Q1 — Gestão de Entregas
Uma empresa de entregas precisa gerar um relatório
sobre os pedidos concluídos.
Cada pedido possui:
- codigo
- valor
- distancia
- status
Regras:
- Considerar somente pedidos com status "entregue".
- Considerar somente entregas com distância menor ou igual a 10 km.
- Contar quantas entregas atendem aos requisitos.
- Calcular o valor total dessas entregas.
- Encontrar o maior valor entre as entregas consideradas.
- Se nenhuma entrega atender aos requisitos, o maior valor deve ser 0.
Retorne:
- totalEntregas
- valorTotal
- maiorValor
Analise os pedidos e gere o relatório.
*/

function analisarEntregas(pedidos) {
  let totalEntregas = 0;
  let valorTotal = 0;
  let maiorValor = 0;

  for (let { valor, distancia, status } of pedidos) {
    if (status.toLowerCase() !== "entregue") {
      continue;
    }
    if (distancia <= 10) {
      totalEntregas ++;
      valorTotal += valor;

      if (valor > maiorValor) {
        maiorValor = valor;
      }
    }
  }

  return {
    totalEntregas,
    valorTotal,
    maiorValor
  }
}

console.log(analisarEntregas([
  { codigo: 101, valor: 40, distancia: 5, status: "entregue" },
  { codigo: 102, valor: 80, distancia: 12, status: "entregue" },
  { codigo: 103, valor: 50, distancia: 3, status: "pendente" },
  { codigo: 104, valor: 60, distancia: 8, status: "entregue" },
  { codigo: 105, valor: 30, distancia: 10, status: "entregue" }
]));

// Resultado esperado: { totalEntregas: 3, valorTotal: 130, maiorValor: 60 }

/*Q2 — Gerenciamento de Cursos (JSON)
Uma instituição recebe informações dos cursos através
de uma API. Os dados chegam como uma string JSON.
Cada curso possui:
- nome
- ativo
- vagas
- inscritos
Regras:
- Converter a string JSON para um objeto JavaScript.
- Considerar somente cursos ativos.
- Um curso possui vagas disponíveis quando vagas > inscritos.
- Retornar os nomes dos cursos que possuem vagas disponíveis.
- Contar quantos cursos possuem vagas disponíveis.
- Calcular o total de vagas restantes desses cursos.
Retorne:
- cursosDisponiveis
- quantidadeDisponiveis
- vagasRestantes
Atenção:
Cursos inativos não devem ser considerados,
mesmo que possuam vagas disponíveis.
*/

function analisarCursos(dadosJSON) {
  let dados = JSON.parse(dadosJSON);

  let cursosDisponiveis = [];
  let quantidadeDisponiveis = 0;
  let vagasRestantes = 0;

  for (let {nome, ativo, vagas, inscritos } of dados.cursos) {
    if (ativo !== true) {
      continue;
    }

    if (vagas > inscritos) {
      cursosDisponiveis.push(nome);
      quantidadeDisponiveis++;

      vagasRestantes += vagas - inscritos;
    }
  }

  return {
    cursosDisponiveis,
    quantidadeDisponiveis,
    vagasRestantes
  };
}

console.log(analisarCursos(
  '{"cursos":[' +
    '{"nome":"JavaScript","ativo":true,"vagas":20,"inscritos":15},' +
    '{"nome":"React","ativo":true,"vagas":10,"inscritos":10},' +
    '{"nome":"Git","ativo":false,"vagas":30,"inscritos":10},' +
    '{"nome":"SQL","ativo":true,"vagas":12,"inscritos":8}' +
  ']}'
));

// Resultado esperado: { cursosDisponiveis: ["JavaScript", "SQL"], quantidadeDisponiveis: 2, vagasRestantes: 9 }

/*Q3 — Monitoramento de Vendas (Matrizes)
Uma empresa registra suas vendas diariamente.
Os registros são armazenados em uma matriz:
- Cada linha representa uma semana.
- Cada número representa o valor vendido em um dia.
A empresa precisa gerar um relatório.
Regras:
- Calcular o valor total de todas as vendas.
- Contar quantos dias tiveram vendas superiores a 100.
- Encontrar o maior valor de venda registrado.
- Caso não existam vendas, o maior valor deve ser null.
- Não modificar a matriz original.
Retorne:
- totalVendas
- diasAcimaDaMeta
- maiorVenda
Analise todas as semanas e gere o relatório.
*/

function analisarVendas(matriz) {
  let totalVendas = 0;
  let diasAcimaDaMeta = 0;
  let maiorVenda = null;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      totalVendas += matriz[i][j];

      if (matriz[i][j] > 100) {
        diasAcimaDaMeta ++ ;
      }

      if (maiorVenda === null || matriz[i][j] > maiorVenda) {
        maiorVenda = matriz[i][j];
      }
    }
  }

  return {
    totalVendas,
    diasAcimaDaMeta,
    maiorVenda
  }
}

console.log(analisarVendas([ [80, 120, 100], [150, 90, 130], [70, 110, 20] ]));

// Resultado esperado: { totalVendas: 870, diasAcimaDaMeta: 4, maiorVenda: 150 }