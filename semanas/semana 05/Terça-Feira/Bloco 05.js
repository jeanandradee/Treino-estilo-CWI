/* ==================================================
   B5 — CENTRAL DE MONITORAMENTO 
   ==================================================
Um sistema monitora os resultados de diferentes setores de uma empresa. Cada registro contém o nome do setor, o responsável, o status da operação e a quantidade de ocorrências.
Sua missão é criar uma função que gere um relatório consolidado.
Regras
Implemente gerarRelatorio(registros).
Cada registro possui este formato:
{
  setor: "Financeiro",
  responsavel: "Ana",
  status: "CONCLUIDO",
  ocorrencias: 3
}
A função deve retornar um objeto com:
totalRegistros: quantidade total de registros recebidos.
registrosConcluidos: quantidade de registros cujo status é "CONCLUIDO".
totalOcorrencias: soma das ocorrências de todos os registros concluídos.
setoresComProblemas: array com os nomes dos setores que possuem pelo menos um registro com status "ERRO", sem duplicatas e preservando a ordem da primeira ocorrência.
responsavelComMaisOcorrencias: nome do responsável com a maior soma de ocorrências nos registros concluídos. Em caso de empate, mantenha o primeiro responsável que atingiu esse total. Se não houver registros concluídos, retorne null.
Importante:
Considere os nomes dos setores e responsáveis exatamente como estão escritos.
Não modifique o array original nem seus objetos.
Todos os registros devem ser contabilizados em totalRegistros, independentemente do status.
As ocorrências só entram nos cálculos de totalOcorrencias e do responsável quando o status for "CONCLUIDO".
*/

function gerarRelatorio(registros) {
  let totalRegistros = 0;
  let registrosConcluidos = 0;
  let totalOcorrencias = 0;
  let setoresComProblemas = [];
  let responsavelComMaisOcorrencias = null;
  let ocorrenciasPorResponsavel = {};
  let ordemResponsaveis = [];

  for (let { setor, responsavel, status, ocorrencias } of registros) {
    totalRegistros++;

    if (status === "CONCLUIDO") {
      registrosConcluidos++;
      totalOcorrencias += ocorrencias;

      if (ocorrenciasPorResponsavel[responsavel] === undefined) {
        ocorrenciasPorResponsavel[responsavel] = 0;
        ordemResponsaveis.push(responsavel);
      }

      ocorrenciasPorResponsavel[responsavel] += ocorrencias;

    } else if (status === "ERRO") {
      if (!setoresComProblemas.includes(setor)) {
        setoresComProblemas.push(setor);
      }
    }
  }

  let maiorTotal = -1;

  for (let responsavel of ordemResponsaveis) {
    let totalResponsavel = ocorrenciasPorResponsavel[responsavel];

    if (totalResponsavel > maiorTotal) {
      maiorTotal = totalResponsavel;
      responsavelComMaisOcorrencias = responsavel;
    }
  }

  return { totalRegistros, registrosConcluidos, totalOcorrencias, setoresComProblemas, responsavelComMaisOcorrencias };
}

const registrosTeste = [
  {
    setor: "Financeiro",
    responsavel: "Ana",
    status: "CONCLUIDO",
    ocorrencias: 4
  },
  {
    setor: "Logística",
    responsavel: "Bruno",
    status: "ERRO",
    ocorrencias: 7
  },
  {
    setor: "Financeiro",
    responsavel: "Ana",
    status: "CONCLUIDO",
    ocorrencias: 3
  },
  {
    setor: "Tecnologia",
    responsavel: "Caio",
    status: "CONCLUIDO",
    ocorrencias: 5
  },
  {
    setor: "Logística",
    responsavel: "Bruno",
    status: "ERRO",
    ocorrencias: 2
  },
  {
    setor: "Atendimento",
    responsavel: "Diana",
    status: "PENDENTE",
    ocorrencias: 9
  },
  {
    setor: "Tecnologia",
    responsavel: "Caio",
    status: "CONCLUIDO",
    ocorrencias: 2
  },
  {
    setor: "Financeiro",
    responsavel: "Eva",
    status: "ERRO",
    ocorrencias: 6
  }
];

console.log("B5:", gerarRelatorio(registrosTeste));

/*
RESULTADO ESPERADO:

{
  totalRegistros: 8,
  registrosConcluidos: 4,
  totalOcorrencias: 14,
  setoresComProblemas: ["Logística", "Financeiro"],
  responsavelComMaisOcorrencias: "Ana"
}
*/