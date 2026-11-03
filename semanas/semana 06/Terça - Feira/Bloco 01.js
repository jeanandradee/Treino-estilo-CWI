/* ========================================
   QUESTÃO 1 — CENTRAL DE MONITORAMENTO
   ========================================
Uma empresa instalou sensores em uma fábrica para
monitorar a temperatura das máquinas.
Durante o expediente, cada sensor registra uma
temperatura em determinados momentos.
Crie a função analisarTemperaturas(temperaturas).
A função deve retornar um objeto contendo:
- maiorTemperatura: maior temperatura registrada;
- menorTemperatura: menor temperatura registrada;
- alertas: quantidade de registros acima de 80 graus;
- temperaturaCritica: array com temperaturas iguais
  ou superiores a 90 graus.
Se não houver registros:
- maiorTemperatura deve ser null;
- menorTemperatura deve ser null;
- alertas deve ser 0;
- temperaturaCritica deve ser um array vazio.
*/

function analisarTemperaturas(temperaturas) {
  let maiorTemperatura = null;
  let menorTemperatura = null;
  let alertas = 0;
  let temperaturaCritica = [];

  for (let temperatura of temperaturas) {
    if (maiorTemperatura === null || temperatura > maiorTemperatura) {
      maiorTemperatura = temperatura;
    }

    if (menorTemperatura === null || temperatura < menorTemperatura) {
      menorTemperatura = temperatura;
    }

    if (temperatura > 80) {
      alertas ++ ;
    } 
    
    if (temperatura >= 90) {
      temperaturaCritica.push(temperatura);
    }
  }

  return {
    maiorTemperatura,
    menorTemperatura,
    alertas,
    temperaturaCritica
  }
}

console.log(analisarTemperaturas([65, 82, 91, 75, 88, 95, 70]));
/* Resultado esperado:
{
    maiorTemperatura: 95,
    menorTemperatura: 65,
    alertas: 4,
    temperaturaCritica: [91, 95]
}
*/

/* ========================================
   QUESTÃO 2 — CAMPEONATO DE ROBÔS
   ========================================
Uma competição de robótica está avaliando o desempenho
de diferentes robôs.
Cada robô participa de várias rodadas e recebe uma
pontuação em cada uma delas.
Crie a função avaliarRobos(robos).
Cada robô possui:
- nome;
- pontuacoes (array de números).
A função deve retornar:
- resultados: array de objetos contendo nome e total
  de pontos de cada robô;
- vencedor: nome do robô com maior pontuação total;
- mediaPontuacao: média dos pontos totais de todos
  os robôs.
Regras:
- Em caso de empate, mantenha o primeiro robô.
- Não modifique os dados originais.
- Se não houver robôs, resultados será vazio,
  vencedor será null e mediaPontuacao será 0.
*/

function avaliarRobos(robos) {
  if (robos.length === 0) {
    return {resultados : [], vencedor: null, mediaPontuacao:0 }
  }
  let resultados = [];
  let vencedor = null;
  let pontuacaoVencedor = 0;
  let mediaPontuacao = 0;
  let somaPontuacao = 0;
  let quantidadePontuacoes = 0;

  for (let { nome, pontuacoes } of robos) {
    let total = 0;
    quantidadePontuacoes ++;

    for (let pontuacao of pontuacoes) {
      total += pontuacao;
      somaPontuacao += pontuacao;
      
    }

    if (vencedor === null || total > pontuacaoVencedor) {
      vencedor = nome;
      pontuacaoVencedor = total;
    }

    resultados.push({ nome, total });
  }
  mediaPontuacao = somaPontuacao / quantidadePontuacoes;

  return {
    resultados,
    vencedor,
    mediaPontuacao
  }
}

console.log(avaliarRobos([
    { nome: "Atlas", pontuacoes: [10, 20, 15] },
    { nome: "Titan", pontuacoes: [15, 15, 15] },
    { nome: "Neo", pontuacoes: [20, 20, 10] }
]));
/* Resultado esperado:
{
    resultados: [
        { nome: "Atlas", total: 45 },
        { nome: "Titan", total: 45 },
        { nome: "Neo", total: 50 }
    ],
    vencedor: "Neo",
    mediaPontuacao: 46.666666666666664
}
*/

/* ========================================
   QUESTÃO 3 — EXPEDIÇÃO NA MONTANHA
   ========================================
Uma equipe de exploradores está analisando um mapa
de altitude de uma montanha.
O mapa é representado por uma matriz, onde cada número
representa a altitude de uma região em metros.
Crie a função analisarMapa(mapa).
A função deve retornar um objeto contendo:
- totalRegioes: quantidade total de regiões;
- regioesAltas: quantidade de regiões com altitude
  superior a 1000 metros;
- maiorAltitude: maior altitude encontrada;
- posicaoMaior: objeto com linha e coluna da primeira
  ocorrência da maior altitude.
Considere que a primeira linha e a primeira coluna
possuem índice 0.
Se a matriz estiver vazia, retorne:
- totalRegioes: 0;
- regioesAltas: 0;
- maiorAltitude: null;
- posicaoMaior: null.
*/

function analisarMapa(mapa) {
  let totalRegioes = 0;
  let regioesAltas = 0;
  let maiorAltitude = null;
  let posicaoMaior = null;

  for (let i = 0; i < mapa.length; i++) {
    for (let j = 0; j < mapa[i].length; j++) {
      totalRegioes ++ ;

      if (mapa[i][j] > 1000) {
        regioesAltas ++ ;
      }

      if (maiorAltitude === null || mapa[i][j] > maiorAltitude) {
        maiorAltitude = mapa[i][j];
        posicaoMaior = {linha:i, coluna: j};
      }
    }
  }

  return {
    totalRegioes,
    regioesAltas,
    maiorAltitude,
    posicaoMaior
  }
}

console.log(analisarMapa([
    [500, 1200, 800],
    [1500, 900, 1100],
    [700, 1800, 1000]
]));

/*
Resultado esperado:

{
    totalRegioes: 9,
    regioesAltas: 4,
    maiorAltitude: 1800,
    posicaoMaior: { linha: 2, coluna: 1 }
}
*/
