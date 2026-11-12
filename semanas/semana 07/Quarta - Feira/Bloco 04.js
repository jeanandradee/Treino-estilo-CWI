/*B4 — Desafios Integrados
Q1 — Gestão de Inscrições em Eventos
Uma empresa organiza eventos e precisa gerar um relatório
das inscrições recebidas.
Cada inscrição possui:
- participante
- categoria
- quantidade de ingressos
- valorUnitario
- status
O sistema deve:
1. Considerar somente inscrições confirmadas.
2. Calcular o valor total de cada inscrição.
3. Retornar os participantes e seus respectivos valores.
4. Calcular o faturamento total.
5. Calcular a quantidade total de ingressos vendidos.
Retorne um objeto com:
- inscricoes
- faturamento
- ingressosVendidos
*/

function gerarRelatorio(lista) {
  let inscricoes = [];
  let faturamento = 0;
  let ingressosVendidos = 0;

  for (let { participante, categoria, quantidade, valorUnitario, status } of lista) {
    if (status.toLowerCase() !== "confirmada") {
      continue;
    }
    let total = valorUnitario * quantidade;
    faturamento += total;
    ingressosVendidos += quantidade;
    inscricoes.push({ participante, total });
  }

  return {
    inscricoes,
    faturamento,
    ingressosVendidos
  }
}

console.log(gerarRelatorio([
  { participante: "Ana", categoria: "VIP", quantidade: 2, valorUnitario: 150, status: "confirmada" },
  { participante: "Carlos", categoria: "Comum", quantidade: 3, valorUnitario: 80, status: "pendente" },
  { participante: "Julia", categoria: "VIP", quantidade: 1, valorUnitario: 150, status: "confirmada" },
  { participante: "Pedro", categoria: "Comum", quantidade: 4, valorUnitario: 80, status: "confirmada" }
]));

// Resultado esperado:
// {
//   inscricoes: [
//     { participante: "Ana", total: 300 },
//     { participante: "Julia", total: 150 },
//     { participante: "Pedro", total: 320 }
//   ],
//   faturamento: 770,
//   ingressosVendidos: 7
// }


/* Q2 — Sistema de Manutenção Técnica
Uma empresa de manutenção registra os serviços realizados
por seus técnicos em formato JSON.
Cada técnico possui:
- nome
- servicos: array contendo descricao, horas e status.
O sistema deve:
1. Converter o JSON em objeto.
2. Contabilizar somente serviços concluídos.
3. Calcular a quantidade de serviços concluídos por técnico.
4. Calcular o total de horas trabalhadas em serviços concluídos.
5. Identificar os técnicos que concluíram pelo menos 2 serviços.
Retorne um objeto com:
- relatorio: nome, quantidadeServicos e horasTotais de cada técnico.
- horasGerais
- tecnicosDestaque
*/

function analisarManutencoes(json) {
  let fichas = JSON.parse(json);

  let relatorio = [];
  let horasGerais = 0;
  let tecnicosDestaque = [];

  for (let { nome, servicos } of fichas) {
    let quantidadeServicos = 0;
    let horasTotais = 0;
    for (let { descricao, horas, status } of servicos) {
      if (status.toLowerCase() !== "concluido") {
        continue;
      }
      quantidadeServicos ++;
      horasTotais += horas;

    }

    relatorio.push({ nome, quantidadeServicos, horasTotais });

    
    if (quantidadeServicos >= 2) {
      tecnicosDestaque.push(nome);
    }

    horasGerais += horasTotais;
  }

  return {
    relatorio,
    horasGerais,
    tecnicosDestaque
  }
}

console.log(analisarManutencoes(`[
  {
    "nome": "Marcos",
    "servicos": [
      {"descricao": "Revisão", "horas": 3, "status": "concluido"},
      {"descricao": "Instalação", "horas": 2, "status": "concluido"},
      {"descricao": "Inspeção", "horas": 1, "status": "pendente"}
    ]
  },
  {
    "nome": "Fernanda",
    "servicos": [
      {"descricao": "Reparo", "horas": 4, "status": "concluido"},
      {"descricao": "Teste", "horas": 2, "status": "pendente"}
    ]
  },
  {
    "nome": "Roberto",
    "servicos": [
      {"descricao": "Montagem", "horas": 2, "status": "concluido"},
      {"descricao": "Ajuste", "horas": 3, "status": "concluido"},
      {"descricao": "Revisão", "horas": 2, "status": "concluido"}
    ]
  }
]`));

// Resultado esperado:
// {
//   relatorio: [
//     { nome: "Marcos", quantidadeServicos: 2, horasTotais: 5 },
//     { nome: "Fernanda", quantidadeServicos: 1, horasTotais: 4 },
//     { nome: "Roberto", quantidadeServicos: 3, horasTotais: 7 }
//   ],
//   horasGerais: 16,
//   tecnicosDestaque: ["Marcos", "Roberto"]
// }

/* Q3 — Monitoramento de Transporte Público
Uma empresa de transporte monitora a quantidade de passageiros
registrada em diferentes linhas durante a semana.
Cada linha possui:
- nome
- passageiros: array com a quantidade de passageiros por dia.
O sistema deve:
1. Calcular o total de passageiros de cada linha.
2. Calcular o total geral de passageiros.
3. Identificar a linha com maior movimento.
4. Calcular a média diária de passageiros de cada linha.
5. Contar quantas linhas tiveram média diária superior a 100 passageiros.
Retorne um objeto com:
- linhas: nome, totalPassageiros e mediaDiaria.
- totalGeral
- linhaMaiorMovimento
- linhasAcimaDaMedia
*/

function analisarTransporte(linhas) {
  const resultado = linhas.map(linha => {
    const totalPassageiros = linha.passageiros.reduce(
      (acc, p) => acc + p, 0
    );

    const mediaDiaria = Number(
      (totalPassageiros / linha.passageiros.length).toFixed(2)
    );

    return {
      nome: linha.nome,
      totalPassageiros,
      mediaDiaria
    };
  });

  const totalGeral = resultado.reduce((acc, linha) => acc + linha.totalPassageiros, 0);

  const maiorMovimento = resultado.length ? resultado.reduce((maior, atual) =>
    atual.totalPassageiros > maior.totalPassageiros
      ? atual : maior ) : null;

  const linhasAcimaDaMedia = resultado.filter(linha => linha.mediaDiaria > 100).length;

  return {
    linhas: resultado,
    totalGeral,
    linhaMaiorMovimento: maiorMovimento
      ? maiorMovimento.nome
      : null,
    linhasAcimaDaMedia
  };
}

console.log(analisarTransporte([
  { nome: "Linha A", passageiros: [120, 100, 140, 110] },
  { nome: "Linha B", passageiros: [80, 90, 70, 100] },
  { nome: "Linha C", passageiros: [150, 160, 130, 180] },
  { nome: "Linha D", passageiros: [100, 110, 90, 120] }
]));

// Resultado esperado:
// {
//   linhas: [
//     { nome: "Linha A", totalPassageiros: 470, mediaDiaria: 117.5 },
//     { nome: "Linha B", totalPassageiros: 340, mediaDiaria: 85 },
//     { nome: "Linha C", totalPassageiros: 620, mediaDiaria: 155 },
//     { nome: "Linha D", totalPassageiros: 420, mediaDiaria: 105 }
//   ],
//   totalGeral: 1850,
//   linhaMaiorMovimento: "Linha C",
//   linhasAcimaDaMedia: 3
// }