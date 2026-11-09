/* Uma rede de cinemas precisa gerar um relatório de suas sessões.
Cada sessão possui:
- filme
- sala
- capacidade
- reservas: array contendo assento, valor e status.
Regras:
1. Considere somente reservas com status "confirmada".
2. Para cada sessão, calcule:
   - ingressosConfirmados
   - assentosDisponiveis
   - ocupacao (percentual inteiro)
   - receita
   - situacao
3. Classifique a situação:
   - ocupação >= 80: "lotada"
   - ocupação >= 40: "parcial"
   - ocupação < 40: "baixa"
4. Calcule:
   - quantidade total de ingressos confirmados;
   - receita total de todas as sessões;
   - filme com maior quantidade de ingressos confirmados.
Em caso de empate no filme mais assistido,
considere o primeiro filme.
Retorne um objeto com todas essas informações.
Não altere os dados originais.
*/

function gerarRelatorio(jsonSessoes) {
  let sessoesGeral = JSON.parse(jsonSessoes);
  let sessoes = [];
  let totalIngressos = 0;
  let receitaTotal = 0;
  let filmeMaisAssistido = null;
  let maiorQuantidade = -Infinity;

  for (let { filme, sala, capacidade, reservas } of sessoesGeral) {

    let ingressosConfirmados = 0;
    let assentosDisponiveis = 0;
    let ocupacao = 0;
    let receita = 0;
    let situacao = "";

    for (let { valor, status } of reservas) {

      if (status === "confirmada") {
        ingressosConfirmados++;

        receita += valor;
      }
    }

    assentosDisponiveis = capacidade - ingressosConfirmados;

    ocupacao = Math.round(
      (ingressosConfirmados / capacidade) * 100
    );

    if (ocupacao >= 80) {
      situacao = "lotada";
    } else if (ocupacao >= 40) {
      situacao = "parcial";
    } else {
      situacao = "baixa";
    }

    totalIngressos += ingressosConfirmados;
    receitaTotal += receita;

    if (ingressosConfirmados > maiorQuantidade) {
      maiorQuantidade = ingressosConfirmados;
      filmeMaisAssistido = filme;
    }

    sessoes.push({
      filme,
      sala,
      ingressosConfirmados,
      assentosDisponiveis,
      ocupacao,
      receita,
      situacao
    });
  }

  return {
    sessoes,
    totalIngressos,
    receitaTotal,
    filmeMaisAssistido
  };
}

console.log(gerarRelatorio(`[
  {
    "filme": "Interestelar",
    "sala": 1,
    "capacidade": 5,
    "reservas": [
      { "assento": "A1", "valor": 30, "status": "confirmada" },
      { "assento": "A2", "valor": 30, "status": "confirmada" },
      { "assento": "A3", "valor": 30, "status": "confirmada" },
      { "assento": "A4", "valor": 30, "status": "cancelada" }
    ]
  },
  {
    "filme": "Duna",
    "sala": 2,
    "capacidade": 4,
    "reservas": [
      { "assento": "B1", "valor": 40, "status": "confirmada" },
      { "assento": "B2", "valor": 40, "status": "confirmada" },
      { "assento": "B3", "valor": 40, "status": "confirmada" },
      { "assento": "B4", "valor": 40, "status": "confirmada" }
    ]
  },
  {
    "filme": "Avatar",
    "sala": 3,
    "capacidade": 10,
    "reservas": [
      { "assento": "C1", "valor": 25, "status": "confirmada" },
      { "assento": "C2", "valor": 25, "status": "confirmada" },
      { "assento": "C3", "valor": 25, "status": "cancelada" }
    ]
  }
]`));

// Esperado:
//
// {
//   sessoes: [
//     {
//       filme: "Interestelar",
//       sala: 1,
//       ingressosConfirmados: 3,
//       assentosDisponiveis: 2,
//       ocupacao: 60,
//       receita: 90,
//       situacao: "parcial"
//     },
//     {
//       filme: "Duna",
//       sala: 2,
//       ingressosConfirmados: 4,
//       assentosDisponiveis: 0,
//       ocupacao: 100,
//       receita: 160,
//       situacao: "lotada"
//     },
//     {
//       filme: "Avatar",
//       sala: 3,
//       ingressosConfirmados: 2,
//       assentosDisponiveis: 8,
//       ocupacao: 20,
//       receita: 50,
//       situacao: "baixa"
//     }
//   ],
//   totalIngressos: 9,
//   receitaTotal: 300,
//   filmeMaisAssistido: "Duna"
// }