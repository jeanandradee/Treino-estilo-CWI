/* Q1 — Monitoramento de Sensores
Habilidades: Ambiente e Variáveis; Vetores; Operadores; Algoritmos Básicos.
Uma empresa monitora sensores instalados em diferentes setores.
Cada sensor possui:
- nome
- leituras: array de valores numéricos
Retorne:
1. Quantidade total de leituras.
2. Média geral de todas as leituras.
3. Quantidade de sensores cuja média individual é >= 50.
4. Nome do sensor que registrou a maior leitura.
Em caso de empate na maior leitura, manter o primeiro sensor.
*/

function analisarSensores(sensores) {
  let totalLeituras = 0;
  let somaGeral = 0;
  let sensoresAcima = 0;
  let maiorLeitura = null;
  let maiorValor = -Infinity;

  for (let { nome, leituras } of sensores) {
    totalLeituras += leituras.length;

    let somaSensor = 0;

    for (let l of leituras) {
      somaGeral += l;
      somaSensor += l;

      if (l > maiorValor) {
        maiorValor = l;
        maiorLeitura = nome;
      }
    }

    const mediaSensor = leituras.length > 0 ? somaSensor / leituras.length : 0;

    if (leituras.length > 0 && mediaSensor >= 50) {
      sensoresAcima++;
    }
  }

  const mediaGeral = totalLeituras > 0 ? somaGeral / totalLeituras : 0;

  return {
    totalLeituras,
    mediaGeral,
    sensoresAcima,
    maiorLeitura,
  };
}

console.log(
  analisarSensores([
    { nome: "Sensor A", leituras: [20, 40] },
    { nome: "Sensor B", leituras: [60, 80] },
    { nome: "Sensor C", leituras: [50, 50, 90] },
  ]),
);

// Esperado: { totalLeituras: 7, mediaGeral: 55.714285714285715, sensoresAcima: 5, maiorLeitura: "Sensor C" }

/* Q2 — Central de Atendimento
Habilidades: Strings; Estruturas de Controle; Funções; Vetores.
Uma central recebe chamados com:
- id
- descricao
- status
Uma descrição é urgente quando começa com
"[URGENTE]", ignorando maiúsculas e minúsculas.
Retorne:
1. Quantidade de chamados abertos.
2. IDs dos chamados urgentes.
3. Quantidade de descrições com pelo menos
   20 caracteres após trim().
4. Descrição mais longa após trim().
Em caso de empate, manter a primeira.
*/

function analisarChamados(chamados) {
  let abertos = 0;
  let idsUrgentes = [];
  let descricoesLongas = 0;
  let descricaoMaisLonga = null;

  for (let { id, descricao, status } of chamados) {
    descricao = descricao.trim();

    if (status === "aberto") {
      abertos++;
    }

    if (descricao.toUpperCase().startsWith("[URGENTE]")) {
      idsUrgentes.push(id);
    }

    if (descricao.length >= 20) {
      descricoesLongas++;
    }

    if (
      descricaoMaisLonga === null ||
      descricao.length > descricaoMaisLonga.length
    ) {
      descricaoMaisLonga = descricao;
    }
  }

  return {
    abertos,
    idsUrgentes,
    descricoesLongas,
    descricaoMaisLonga
  };
}

console.log(
  analisarChamados([
    { id: 10, descricao: " [URGENTE] Falha no servidor ", status: "aberto" },
    { id: 11, descricao: "Atualizar cadastro", status: "fechado" },
    { id: 12, descricao: "[urgente] Sistema indisponível", status: "aberto" },
    { id: 13, descricao: "Erro", status: "aberto" },
  ]),
);
// Esperado: { abertos: 3, idsUrgentes: [10, 12], descricoesLongas: 2, descricaoMaisLonga: "[urgente] Sistema indisponível" }

/* Q3 — Processamento de Reservas
Habilidades: JSON; Objetos; Vetores; Estruturas de Controle; Operadores.
Um sistema recebe reservas em formato JSON.
Cada reserva possui:
- id
- status
- itens: array de objetos com produto e quantidade
Considere somente reservas com status "confirmada".
Retorne:
1. Quantidade de reservas confirmadas.
2. Total de unidades reservadas nessas reservas.
3. IDs das reservas confirmadas.
4. Nomes dos produtos dessas reservas em letras maiúsculas.
Preserve a ordem original dos dados.
*/

function processarReservas(jsonReservas) {
  let confirmadas = 0;
  let totalUnidades = 0;
  let ids = [];
  let produtos = [];
  let reservas = JSON.parse(jsonReservas);
  
  for (let { id, status, itens } of reservas) {
    if (status !== "confirmada") {
      continue;
    }

    confirmadas ++;
    ids.push(id);

    for (let { produto, quantidade } of itens) {
      totalUnidades += quantidade;
      produtos.push(produto.toUpperCase());
    }
    
  }

  return {
    confirmadas,
    totalUnidades,
    ids,
    produtos
  }
}

console.log(
  processarReservas(`[
  {
    "id": 101,
    "status": "confirmada",
    "itens": [
      { "produto": "Livro", "quantidade": 2 },
      { "produto": "Caneta", "quantidade": 3 }
    ]
  },
  {
    "id": 102,
    "status": "pendente",
    "itens": [
      { "produto": "Caderno", "quantidade": 5 }
    ]
  },
  {
    "id": 103,
    "status": "confirmada",
    "itens": [
      { "produto": "Caderno", "quantidade": 1 }
    ]
  }
]`),
);

// Esperado: { confirmadas: 2, totalUnidades: 6, ids: [101, 103], produtos: ["LIVRO", "CANETA", "CADERNO"] }