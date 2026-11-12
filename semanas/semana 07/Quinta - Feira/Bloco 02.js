/* Q1 — Sistema de Pontuação de Atividades
Uma plataforma registra as atividades realizadas por seus usuários.
Cada atividade possui um tipo e uma quantidade de pontos.
Regras:
"acerto": adiciona os pontos normalmente.
"erro": subtrai os pontos.
"bonus": adiciona o dobro dos pontos.
Retorne:
Pontuação final.
Quantidade de atividades processadas.
Se o usuário atingiu a meta de 10 pontos.
Analise as atividades e calcule a pontuação final.
A meta é atingir pelo menos 10 pontos.
*/

function calcularPontuacao(atividades) {
  let pontuacaoFinal = 0;
  let atividadesProcessadas = 0;
  let atingiuMeta = false;

  for (let { tipo, pontos } of atividades) {
    if (tipo.toLowerCase() === "acerto") {
      pontuacaoFinal += pontos;
      atividadesProcessadas ++;
    } else if (tipo.toLowerCase() === "erro") {
      pontuacaoFinal -= pontos;
      atividadesProcessadas ++;
    } else if (tipo.toLowerCase() === "bonus") {
      pontuacaoFinal += pontos * 2;
      atividadesProcessadas ++;
    }

    if (pontuacaoFinal >= 10) {
      atingiuMeta = true;
    }
  }

  return {
    pontuacaoFinal,
    atividadesProcessadas,
    atingiuMeta
  }
}

console.log(calcularPontuacao([
    { tipo: "acerto", pontos: 5 },
    { tipo: "erro", pontos: 2 },
    { tipo: "bonus", pontos: 3 },
    { tipo: "acerto", pontos: 4 },
    { tipo: "erro", pontos: 1 }
]));

// Resultado esperado: { pontuacaoFinal: 12, atividadesProcessadas: 5, atingiuMeta: true }

/* Q2 — Processamento de Relatórios
Uma empresa recebe títulos de relatórios que precisam ser padronizados antes de serem armazenados.
Crie uma função que retorne:
Texto completo sem espaços desnecessários nas extremidades.
Texto convertido para letras minúsculas.
Quantidade de palavras que possuem a letra "a".
Considere a letra "a" sem diferenciar maiúsculas de minúsculas. A letra "ã" não deve ser considerada igual a "a".
Padronize o texto e analise suas palavras.
*/

function processarRelatorio(texto) {
  let textoNormalizado = texto.trim().toLowerCase();
  let palavras = textoNormalizado.split(/\s+/);

  const palavrasComA = palavras.filter( p => p.includes("a") ).length;

  const totalPalavras = palavras.length;

  return {
    textoNormalizado,
    palavrasComA,
    totalPalavras
  };
}

console.log(processarRelatorio( "  Gestão de Projetos e Análise de Dados  "));

// Resultado esperado: { textoNormalizado: "gestão de projetos e análise de dados", palavrasComA: 2, totalPalavras: 7 }

/* Q3 — Monitoramento de Unidades (JSON)
Uma empresa recebe informações de suas unidades através de uma API.
Os dados chegam como uma string JSON.
Cada unidade possui um nome e um array de leituras.
Crie uma função que retorne:
Quantidade total de leituras.
Soma de todas as leituras.
Quantidade de leituras superiores a 20.
Receba os dados em formato JSON.
Converta-os e analise as leituras de todas as unidades.
*/

function analisarUnidades(dadosJSON) {
  let dados = JSON.parse(dadosJSON);

  const leituras = dados.flatMap(unidade => unidade.leituras);

  const totalLeituras = leituras.length;

  const somaLeituras = leituras.reduce( (acc, leitura) => acc + leitura, 0 );

  const leiturasAcima20 = leituras.filter( leitura => leitura > 20 ).length;

  return {
    totalLeituras,
    somaLeituras,
    leiturasAcima20
  };
}

console.log(analisarUnidades(
    '[{"nome":"Norte","leituras":[12,18,20]},{"nome":"Sul","leituras":[25,30]},{"nome":"Leste","leituras":[8,14,16,22]}]'
));

// Resultado esperado: { totalLeituras: 9, somaLeituras: 165, leiturasAcima20: 3 }

/* Q4 — Gerenciamento de Salas
Um centro de treinamento possui diversas salas disponíveis para agendamento.
Cada sala possui:
Número de identificação.
Capacidade.
Informação indicando se está ocupada.
Crie uma função que retorne:
Índice da primeira sala desocupada com capacidade igual ou superior a 4 pessoas.
Se todas as salas possuem capacidade maior que zero.
Se existe pelo menos uma sala desocupada.
Caso nenhuma sala atenda ao primeiro requisito, retorne -1.
Analise as salas e retorne as informações solicitadas.
Não modifique os objetos originais.
*/

function analisarSalas(salas) {
  const indiceSalaDisponivel = salas.findIndex(
    sala => sala.capacidade >= 4 && sala.ocupada === false
  );

  const capacidadesValidas = salas.every(
    sala => sala.capacidade > 0
  );

  const existeSalaLivre = salas.some(
    sala => sala.ocupada === false
  );

  return {
    indiceSalaDisponivel,
    capacidadesValidas,
    existeSalaLivre
  };
}

console.log(analisarSalas([
    { numero: 101, capacidade: 2, ocupada: false },
    { numero: 102, capacidade: 4, ocupada: true },
    { numero: 103, capacidade: 6, ocupada: false },
    { numero: 104, capacidade: 3, ocupada: false }
]));

// Resultado esperado: { indiceSalaDisponivel: 2, capacidadesValidas: true, existeSalaLivre: true }

/* Q5 — Controle de Presença
Uma instituição registra a presença dos participantes de um treinamento.
Os registros são armazenados em um array:
"P" representa presença.
"F" representa falta.
Crie uma função que retorne:
Quantidade total de presenças.
Quantidade total de faltas.
Maior sequência consecutiva de presenças.
Analise os registros de presença.
Considere a maior sequência consecutiva de "P".
*/

function analisarPresencas(registros) {
  const presencas = registros.filter(registro => registro === "P").length;

  const faltas = registros.filter(registro => registro === "F").length;

  let sequenciaAtual = 0;
  let maiorSequencia = 0;

  for (let registro of registros) {
    if (registro === "P") {
      sequenciaAtual++;

      if (sequenciaAtual > maiorSequencia) {
        maiorSequencia = sequenciaAtual;
      }
    } else {
      sequenciaAtual = 0;
    }
  }

  return {
    presencas,
    faltas,
    maiorSequencia
  };
}

console.log(analisarPresencas([
    "P", "P", "F", "P", "P",
    "P", "F", "F", "P"
]));

// Resultado esperado: { presencas: 6, faltas: 3, maiorSequencia: }