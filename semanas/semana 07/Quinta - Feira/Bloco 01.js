/* 🔥 B1 — LÓGICA APLICADA
Tema: Interpretação + Implementação
Q1 — Análise de temperaturas
Uma estação meteorológica registra temperaturas durante vários dias.
Crie uma função que retorne:
Quantidade de temperaturas acima de 30 graus.
Soma de todas as temperaturas.
Maior temperatura registrada.
Analise as temperaturas e retorne as três informações.
*/

function analisarTemperaturas(temperaturas) {
  const acima30 = temperaturas.filter(temp => temp > 30).length;

  const soma = temperaturas.reduce((acc, temp) => acc + temp ,0);

  const maior = temperaturas.reduce((atual, maior) => 
    atual > maior ? atual : maior
  );

  return {
    acima30,
    soma,
    maior
  }
}

console.log(analisarTemperaturas([22, 35, 28, 40, 19, 33]));
// Resultado esperado: { acima30: 3, soma: 177, maior: 40 }

/* Q2 — Controle de participantes
Uma organização possui uma lista de participantes de um evento.
Cada participante possui nome e status de inscrição.
Crie uma função que retorne:
Quantidade de participantes confirmados.
Array contendo os nomes dos participantes confirmados.
Quantidade de inscrições pendentes.
Analise os participantes e retorne as informações solicitadas.
Não modifique o array original.
*/

function analisarParticipantes(participantes) {
  const confirmados = participantes.filter(p => p.status.toLowerCase() === "confirmado");

  const nomesConfirmados = confirmados.map(p => p.nome);

  const pendentes = participantes.filter(p => p.status.toLowerCase() === "pendente").length;

  return {
    confirmados: confirmados.length,
    nomesConfirmados,
    pendentes
  }
}

console.log(analisarParticipantes([
    { nome: "Ana", status: "confirmado" },
    { nome: "Carlos", status: "pendente" },
    { nome: "Marina", status: "confirmado" },
    { nome: "Pedro", status: "cancelado" },
    { nome: "Lucas", status: "pendente" }
]));

// Resultado esperado: { confirmados: 2, nomesConfirmados: ["Ana", "Marina"],' pendentes: 2 }

/* Q3 — Processamento de códigos
Uma empresa utiliza códigos de identificação para seus equipamentos.
Cada código precisa estar em letras maiúsculas e possuir pelo menos 5 caracteres.
Crie uma função que retorne:
Array com os códigos padronizados em maiúsculas.
Quantidade de códigos válidos.
Array contendo somente os códigos válidos.
Padronize e valide os códigos.
Não modifique o array original.
*/

function processarCodigos(codigos) {
  const codigosPadronizados = codigos.map(
    codigo => codigo.toUpperCase()
  );

  const codigosValidos = codigosPadronizados.filter(
    codigo => codigo.length >= 5
  );

  return {
    codigosPadronizados,
    quantidadeValidos: codigosValidos.length,
    codigosValidos
  };
}

console.log(processarCodigos([ "abc123", "XY", "motor45", "AB123", "pc" ]));

// Resultado esperado:
// {
//   codigosPadronizados: ["ABC123", "XY", "MOTOR45", "AB123", "PC"],
//   quantidadeValidos: 3,
//   codigosValidos: ["ABC123", "MOTOR45", "AB123"]
// }

/* Q4 — Análise de desempenho
Uma escola registra as notas dos alunos em diferentes disciplinas.
Cada aluno possui nome e um array de notas.
Crie uma função que retorne:
Média geral de todas as notas.
Quantidade de alunos com média igual ou superior a 7.
Nome do aluno com a maior média.
Analise o desempenho dos alunos.
A média geral deve considerar todas as notas.
*/

function analisarDesempenho(alunos) {
  const todasNotas = alunos.flatMap(aluno => aluno.notas);

  const somaNotas = todasNotas.reduce((acc, nota) => acc + nota, 0);

  const mediaGeral = Number((somaNotas / todasNotas.length).toFixed(2));

  const mediasAlunos = alunos.map(aluno => ({
    nome: aluno.nome,
    media: aluno.notas.reduce((acc, nota) => acc + nota, 0)
      / aluno.notas.length
  }));

  const aprovados = mediasAlunos.filter(aluno => aluno.media >= 7).length;

  const melhorAluno = mediasAlunos.reduce((melhor, aluno) =>
      aluno.media > melhor.media ? aluno : melhor
  );

  return {
    mediaGeral,
    aprovados,
    melhorAluno: melhorAluno.nome
  };
}

console.log(analisarDesempenho([
    { nome: "Ana", notas: [8, 9, 7] },
    { nome: "Carlos", notas: [5, 6, 7] },
    { nome: "Marina", notas: [10, 9, 10] },
    { nome: "Pedro", notas: [6, 7, 8] }
]));

// Resultado esperado: { mediaGeral: 7.67, aprovados: 2, melhorAluno: "Marina" }

/* Q5 — Análise de matriz
Uma empresa monitora o consumo de energia de suas unidades durante três meses.
Cada linha representa uma unidade e cada posição representa um mês.
Crie uma função que retorne:
Consumo total de todas as unidades.
Quantidade de meses em que o consumo foi superior a 100.
Índice da unidade com maior consumo acumulado.

Analise a matriz de consumo.
Não modifique os dados originais.
*/

function analisarConsumo(matriz) {
  const consumoTotal = matriz.flat().reduce( (acc, consumo) => acc + consumo, 0 );

  const mesesAcima100 = matriz.flat().filter( consumo => consumo > 100 ).length;

  const consumosUnidades = matriz.map( unidade => unidade.reduce((acc, consumo) => acc + consumo, 0) );

  const unidadeMaiorConsumo = consumosUnidades.indexOf( Math.max(...consumosUnidades) );

  return {
    consumoTotal,
    mesesAcima100,
    unidadeMaiorConsumo
  };
}

console.log(analisarConsumo([
    [80, 120, 90],
    [150, 130, 110],
    [70, 85, 95],
    [100, 105, 90]
]));

// Resultado esperado: { consumoTotal: 1225, mesesAcima100: 6, unidadeMaiorConsumo: 1 }