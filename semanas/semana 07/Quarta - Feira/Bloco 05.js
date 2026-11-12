/* Uma rede de hotéis recebe os registros de hospedagem
em formato JSON e precisa gerar um relatório operacional.
Cada hóspede possui:
- nome
- cidade
- reservas: array contendo
  - hotel
  - noites
  - valorDiaria
  - status
O sistema deve:
1. Converter o JSON em objeto.
2. Considerar somente reservas com status "confirmada".
3. Para cada hóspede, calcular:
   - quantidade de reservas confirmadas;
   - total de noites reservadas;
   - valor total das hospedagens.
4. Gerar uma lista contendo somente hóspedes que possuem
   pelo menos uma reserva confirmada.
5. Calcular o faturamento geral de todas as reservas
   confirmadas.
6. Identificar o hóspede que gerou o maior valor em hospedagens.
7. Contar quantos hóspedes possuem faturamento individual
   superior a R$ 1.000.
Retorne um objeto com:
- hospedes: nome, cidade, reservasConfirmadas,
  totalNoites e faturamento.
- faturamentoGeral
- hospedeMaiorFaturamento
- quantidadeAcima1000
Não modifique os dados originais.
Em caso de empate no maior faturamento, considere
o primeiro hóspede encontrado.
*/

function gerarRelatorioHospedagem(json) {
  const dados = JSON.parse(json);

  let hospedes = [];
  let faturamentoGeral = 0;

  for (let { nome, cidade, reservas } of dados) {

    const confirmadas = reservas.filter(reserva => reserva.status.toLowerCase() === "confirmada");

    if (confirmadas.length === 0) {
      continue;
    }

    const reservasConfirmadas = confirmadas.length;

    const totalNoites = confirmadas.reduce( (acc, reserva) => acc + reserva.noites, 0 );

    const faturamento = confirmadas.reduce( (acc, reserva) => acc + (reserva.noites * reserva.valorDiaria), 0 );

    faturamentoGeral += faturamento;

    hospedes.push({
      nome,
      cidade,
      reservasConfirmadas,
      totalNoites,
      faturamento
    });
  }

  const maiorFaturamento = hospedes.length ? hospedes.reduce((maior, atual) =>
    atual.faturamento > maior.faturamento ? atual : maior ) : null;

  const quantidadeAcima1000 = hospedes.filter( hospede => hospede.faturamento > 1000 ).length;

  return {
    hospedes,
    faturamentoGeral,
    hospedeMaiorFaturamento: maiorFaturamento
      ? maiorFaturamento.nome
      : null,
    quantidadeAcima1000
  };
}

console.log(gerarRelatorioHospedagem(`[
  {
    "nome": "Mariana",
    "cidade": "Recife",
    "reservas": [
      {"hotel": "Solar", "noites": 3, "valorDiaria": 250, "status": "confirmada"},
      {"hotel": "Mar Azul", "noites": 2, "valorDiaria": 180, "status": "cancelada"}
    ]
  },
  {
    "nome": "Roberto",
    "cidade": "Natal",
    "reservas": [
      {"hotel": "Praia Bela", "noites": 5, "valorDiaria": 300, "status": "confirmada"},
      {"hotel": "Central", "noites": 2, "valorDiaria": 200, "status": "confirmada"}
    ]
  },
  {
    "nome": "Camila",
    "cidade": "João Pessoa",
    "reservas": [
      {"hotel": "Atlântico", "noites": 2, "valorDiaria": 400, "status": "confirmada"},
      {"hotel": "Jardim", "noites": 3, "valorDiaria": 150, "status": "pendente"}
    ]
  },
  {
    "nome": "Lucas",
    "cidade": "Maceió",
    "reservas": [
      {"hotel": "Dunas", "noites": 4, "valorDiaria": 200, "status": "cancelada"}
    ]
  },
  {
    "nome": "Beatriz",
    "cidade": "Fortaleza",
    "reservas": [
      {"hotel": "Costa", "noites": 3, "valorDiaria": 350, "status": "confirmada"},
      {"hotel": "Vista", "noites": 2, "valorDiaria": 200, "status": "confirmada"}
    ]
  }
]`));

// Resultado esperado:
// {
//   hospedes: [
//     {
//       nome: "Mariana",
//       cidade: "Recife",
//       reservasConfirmadas: 1,
//       totalNoites: 3,
//       faturamento: 750
//     },
//     {
//       nome: "Roberto",
//       cidade: "Natal",
//       reservasConfirmadas: 2,
//       totalNoites: 7,
//       faturamento: 1900
//     },
//     {
//       nome: "Camila",
//       cidade: "João Pessoa",
//       reservasConfirmadas: 1,
//       totalNoites: 2,
//       faturamento: 800
//     },
//     {
//       nome: "Beatriz",
//       cidade: "Fortaleza",
//       reservasConfirmadas: 2,
//       totalNoites: 5,
//       faturamento: 1450
//     }
//   ],
//   faturamentoGeral: 4900,
//   hospedeMaiorFaturamento: "Roberto",
//   quantidadeAcima1000: 2
// }