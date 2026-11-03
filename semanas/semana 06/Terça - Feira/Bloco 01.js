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
  let quantidadeRobos = 0;

  for (let { nome, pontuacoes } of robos) {
    let total = 0;
    quantidadeRobos ++;

    for (let pontuacao of pontuacoes) {
      total += pontuacao;
      
    }
      somaPontuacao += total;

    if (vencedor === null || total > pontuacaoVencedor) {
      vencedor = nome;
      pontuacaoVencedor = total;
    }

    resultados.push({ nome, total });
  }
  mediaPontuacao = somaPontuacao / quantidadeRobos;

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

/* ========================================
   QUESTÃO 4 — DECODIFICADOR DE MENSAGENS
   ========================================
Uma equipe de comunicação utiliza um sistema simples
para identificar mensagens recebidas.
Cada mensagem começa com uma identificação:
- [URGENTE]
- [NORMAL]
- [INFORMATIVO]
Crie a função classificarMensagens(mensagens).
A função deve retornar um objeto contendo:
- urgentes: quantidade de mensagens urgentes;
- normais: quantidade de mensagens normais;
- informativas: quantidade de mensagens informativas;
- desconhecidas: array com mensagens que não começam
  com nenhuma das três identificações.
A identificação deve ser reconhecida mesmo quando
estiver escrita em letras minúsculas.
Preserve o conteúdo original das mensagens
no array desconhecidas.
*/

function classificarMensagens(mensagens) {
  let urgentes = 0;
  let normais = 0;
  let informativas = 0;
  let desconhecidas = [];

  for (let mensagem of mensagens) {
    let texto = mensagem.toUpperCase();

    if (texto.startsWith("[URGENTE]")) {
      urgentes++;
    } else if (texto.startsWith("[NORMAL]")) {
      normais++;
    } else if (texto.startsWith("[INFORMATIVO]")) {
      informativas++;
    } else {
      desconhecidas.push(mensagem);
    }
  }

  return {
    urgentes,
    normais,
    informativas,
    desconhecidas
  };
}

console.log(classificarMensagens([
    "[URGENTE] Servidor fora do ar",
    "[normal] Atualização concluída",
    "[INFORMATIVO] Reunião às 15h",
    "[urgente] Falha no sistema",
    "Mensagem sem identificação"
]));
/* Resultado esperado:
{
    urgentes: 2,
    normais: 1,
    informativas: 1,
    desconhecidas: ["Mensagem sem identificação"]
}
*/

/* ========================================
   QUESTÃO 5 — BILHETERIA DO PARQUE
   ========================================
Um parque de diversões possui três tipos de ingresso:
- Infantil: R$ 15
- Adulto: R$ 30
- Idoso: R$ 20
Crie a função fecharCaixa(ingressos).
Cada ingresso possui:
- visitante;
- tipo;
- quantidade.
A função deve retornar:
- visitantes: quantidade total de visitantes;
- faturamento: valor total arrecadado;
- porTipo: objeto contendo a quantidade de ingressos
  vendidos de cada tipo.
Regras:
- Cada ingresso representa a quantidade informada.
- O faturamento deve considerar o preço de cada tipo.
- Não modifique o array original.
- Se não houver vendas, todos os valores devem ser 0.
*/

function fecharCaixa(ingressos) {
  let visitantes = 0;
  let faturamento = 0;
  let porTipo = {};
  
  for (let { visitante, tipo, quantidade } of ingressos) {
    visitantes += quantidade;

    if (tipo === "infantil") {
      faturamento += quantidade * 15;
    } else if (tipo === "adulto") {
      faturamento += quantidade * 30;
    } else if (tipo === "idoso") {
      faturamento += quantidade * 20;
    }

    if (porTipo[tipo] === undefined) {
      porTipo[tipo] = 0;
    }

    porTipo[tipo] += quantidade;
  }

  return {
    visitantes,
    faturamento,
    porTipo
  }
}

console.log(fecharCaixa([ { visitante: "Ana", tipo: "infantil", quantidade: 2 }, { visitante: "Carlos", tipo: "adulto", quantidade: 1 },
 { visitante: "Maria", tipo: "idoso", quantidade: 3 }, { visitante: "João", tipo: "adulto", quantidade: 2 } ]));
/* Resultado esperado:
{
    visitantes: 8,
    faturamento: 180,
    porTipo: {
        infantil: 2,
        adulto: 3,
        idoso: 3
    }
}
*/

/* ========================================
   QUESTÃO 6 — SISTEMA DE SENHAS
   ========================================
Uma clínica utiliza senhas para organizar o atendimento.
As senhas são recebidas em uma lista na ordem
em que os pacientes chegaram.
Cada senha possui:
- numero;
- prioridade.
As prioridades possíveis são:
- "normal";
- "preferencial".
Crie a função organizarAtendimento(senhas).
A função deve retornar um objeto contendo:
- preferenciais: array com os números das senhas
  preferenciais;
- normais: array com os números das senhas normais;
- proximaSenha: número da primeira senha preferencial,
  caso exista. Caso contrário, será o número da primeira
  senha normal.
- total: quantidade total de senhas recebidas.
Regras:
- Preserve a ordem original dentro de cada categoria.
- Não altere o array original.
- Se não houver senhas, proximaSenha será null.
*/

function organizarAtendimento(senhas) {
  let preferenciais = [];
  let normais = [];
  let proximaSenha = null;
  let total = 0;


  for (let { numero, prioridade } of senhas) {
    total++;

    if (prioridade === "preferencial") {
      preferenciais.push(numero);
    } else if (prioridade === "normal") {
      normais.push(numero);
    }
  }

  if (preferenciais.length > 0) {
    proximaSenha = preferenciais[0];
  } else if (normais.length > 0) {
    proximaSenha = normais[0];
  }

  return {
    preferenciais,
    normais,
    proximaSenha,
    total
  };
}

console.log(organizarAtendimento([
    { numero: 101, prioridade: "normal" },
    { numero: 102, prioridade: "preferencial" },
    { numero: 103, prioridade: "normal" },
    { numero: 104, prioridade: "preferencial" },
    { numero: 105, prioridade: "normal" }
]));

/* Resultado esperado:
{
    preferenciais: [102, 104],
    normais: [101, 103, 105],
    proximaSenha: 102,
    total: 5
}
*/