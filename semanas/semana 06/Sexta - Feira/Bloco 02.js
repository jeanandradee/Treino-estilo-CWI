/* Q1 — Consumo de Energia
Habilidades: Ambiente e Variáveis; Entrada, Saída e Operadores.
Uma empresa monitora o consumo de energia de seus aparelhos.
Cada aparelho possui:
- nome
- potencia (em watts)
- horasLigado
O consumo individual deve ser calculado em kWh:
(potencia * horasLigado) / 1000
Retorne:
1. Um array com o nome e o consumo de cada aparelho.
2. O consumo total.
3. Quantos aparelhos consumiram mais de 1 kWh.
4. O nome do aparelho com maior consumo.
Em caso de empate, manter o primeiro.
*/

function calcularConsumo(aparelhos) {
  const consumos = aparelhos.map(aparelho => ({
    nome: aparelho.nome,
    consumo: (aparelho.potencia * aparelho.horasLigado) / 1000
  }));

  const total = consumos.reduce((acc, c) => acc + c.consumo ,0);

  const acimaDe1 = consumos.filter(aparelho => aparelho.consumo > 1).length;

  let maiorConsumo = null;
  let maiorValor = -1;

  for (let i = 0; i < consumos.length; i++) {
    if (consumos[i].consumo > maiorValor) {
      maiorValor = consumos[i].consumo;
      maiorConsumo = consumos[i].nome;
    }
  }


  return {
    consumos,
    total,
    acimaDe1,
    maiorConsumo
  }
}

console.log(calcularConsumo([ { nome: "Lâmpada", potencia: 60, horasLigado: 5 },
 { nome: "Ventilador", potencia: 100, horasLigado: 8 }, { nome: "Televisão", potencia: 150, horasLigado: 4 },
 { nome: "Aquecedor", potencia: 1200, horasLigado: 2 } ]));
// Esperado: { consumos: [ { nome: "Lâmpada", consumo: 0.3 }, { nome: "Ventilador", consumo: 0.8 },
// { nome: "Televisão", consumo: 0.6 }, { nome: "Aquecedor", consumo: 2.4 } ], total: 4.1, acimaDe1: 1,
// maiorConsumo: "Aquecedor" }

/* Q2 — Controle de Entregas
Habilidades: Estruturas de Controle; Funções; Algoritmos Básicos.
Uma transportadora registra o prazo previsto e o dia
em que cada entrega realmente aconteceu.
Cada entrega possui:
- codigo
- prazo
- diaEntrega
Uma entrega é considerada atrasada quando
diaEntrega > prazo.
Retorne:
1. Quantidade de entregas realizadas no prazo.
2. Quantidade de entregas atrasadas.
3. Total de dias de atraso somados.
4. Código da entrega com maior atraso.
Em caso de empate, manter a primeira.
*/

function analisarEntregas(entregas) {
  const noPrazo = entregas.filter(entrega => entrega.prazo >= entrega.diaEntrega).length;

  const atrasadas = entregas.filter(entrega => entrega.prazo < entrega.diaEntrega);

  const totalAtraso = atrasadas.reduce((acc , d) => acc + (d.diaEntrega - d.prazo), 0)

  let maiorAtraso = null;
  let maiorDias = -1;

  for (let i = 0; i < atrasadas.length; i++) {
    const dias = atrasadas[i].diaEntrega - atrasadas[i].prazo;

    if (dias > maiorDias) {
      maiorDias = dias;
      maiorAtraso = atrasadas[i].codigo;
    }
  }

  return {
    noPrazo,
    atrasadas: atrasadas.length,
    totalAtraso,
    maiorAtraso
  }
}

console.log(analisarEntregas([ { codigo: "A10", prazo: 5, diaEntrega: 5 },
 { codigo: "B20", prazo: 8, diaEntrega: 11 }, { codigo: "C30", prazo: 10, diaEntrega: 12 },
 { codigo: "D40", prazo: 7, diaEntrega: 6 }, { codigo: "E50", prazo: 4, diaEntrega: 9 }]));
// Esperado: { noPrazo: 2, atrasadas: 3, totalAtraso: 10, maiorAtraso: "E50" }

/* Q3 — Organização de Assentos
Habilidades: Funções; Vetores e Matrizes; Estruturas de Controle.
Um cinema utiliza uma matriz para representar seus assentos.
Cada posição contém:
true = ocupado
false = disponível
Retorne:
1. Quantidade total de assentos.
2. Quantidade de assentos ocupados.
3. Quantidade de assentos disponíveis.
4. Índice da fileira com mais assentos ocupados.
Em caso de empate, manter a primeira fileira.
Os índices começam em zero.
*/

function analisarCinema(assentos) {
  const total = assentos.flat().length;

  const ocupado = assentos.flat().filter(assento => assento === true).length;

  const disponiveis = assentos.flat().filter(assento => assento === false).length;

  let fileiraMaisOcupada = 0;
  let maiorQuantidade = -1;

  for (let i = 0; i < assentos.length; i++) {
    const ocupados = assentos[i].filter(assento => assento === true).length;

    if (ocupados > maiorQuantidade) {
      maiorQuantidade = ocupados;
      fileiraMaisOcupada = i;
    }
  }

  return {
    total,
    ocupados: ocupado,
    disponiveis,
    fileiraMaisOcupada
  }
}

console.log(analisarCinema([ [true, false, true, true], [true, true, true, false],
 [false, false, true, false], [true, true, false, true] ]));
// Esperado: { total: 16, ocupados: 10, disponiveis: 6, fileiraMaisOcupada: 0 }

/* Q4 — Sequência Crescente
Habilidades: Algoritmos Básicos; Estruturas de Controle; Operadores.
Um sistema recebe uma sequência de números.
Identifique a maior sequência de números
estritamente crescentes e consecutivos no array.
Retorne:
1. O tamanho da maior sequência.
2. Um array contendo os elementos dessa sequência.
3. O índice inicial da sequência.
Em caso de empate, manter a primeira sequência.
Considere que o array possui pelo menos um elemento.
*/

function encontrarSequencia(numeros) {
  let sequenciaAtual = [numeros[0]];
  let maiorSequencia = [numeros[0]];

  let indiceInicial = 0;
  let melhorIndice = 0;

  for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] > numeros[i - 1]) {
      sequenciaAtual.push(numeros[i]);
    } else {
      sequenciaAtual = [numeros[i]];
      indiceInicial = i;
    }

    if (sequenciaAtual.length > maiorSequencia.length) {
      maiorSequencia = [...sequenciaAtual];
      melhorIndice = indiceInicial;
    }
  }

  return {
    tamanho: maiorSequencia.length,
    sequencia: maiorSequencia,
    indiceInicial: melhorIndice
  };
}

console.log(encontrarSequencia([4, 6, 8, 3, 5, 7, 9, 2]));
// Esperado: { tamanho: 4, sequencia: [3, 5, 7, 9], indiceInicial: 3 }

/* Q5 — Validação de Códigos
Habilidades: Strings; Entrada e Saída; Estruturas de Controle.
Uma empresa recebe códigos de identificação de produtos.
Um código válido deve:
- Começar com "BR-".
- Possuir pelo menos 7 caracteres depois de trim().
- Ignorar diferenças entre maiúsculas e minúsculas.
Retorne:
1. Um array com todos os códigos normalizados
   (trim e letras maiúsculas).
2. Quantidade de códigos válidos.
3. Quantidade de códigos inválidos.
4. O primeiro código válido normalizado.
Se nenhum for válido, retornar null no último item.
*/

function validarCodigos(codigos) {
  const normalizados = codigos.map(codigo => codigo.trim().toUpperCase());
  
  const validos = normalizados.filter(codigo =>
   codigo.startsWith("BR-") && codigo.length >= 10 );

   const invalidos = normalizados.filter(codigo =>
   !codigo.startsWith("BR-") || codigo.length < 10 ).length;

   const primeiroValido = validos.length > 0 ? validos[0] : null;

  return {
    normalizados,
    validos: validos.length,
    invalidos,
    primeiroValido
  }
}

console.log(validarCodigos([ " br-1234567 ", "US-9876543", "BR-123", "Br-ABCDEFG", "   BR-7654321   " ]));
// Esperado: { normalizados: [ "BR-1234567", "US-9876543", "BR-123", "BR-ABCDEFG", "BR-7654321" ],
// validos: 3, invalidos: 2, primeiroValido: "BR-1234567" }

/* Q6 — Relatório de Transações JSON
Habilidades: JSON; Objetos; Vetores; Algoritmos Básicos.
Uma aplicação recebe transações em formato JSON.
Cada transação possui:
- id
- cliente
- valor
- status
O sistema deve:
1. Converter o JSON em dados JavaScript.
2. Contar as transações com status "confirmada".
3. Somar os valores das transações confirmadas.
4. Criar um array com os IDs das transações confirmadas.
5. Identificar o cliente da transação confirmada
   de maior valor.

Em caso de empate, manter a primeira.
Se não houver transações confirmadas:
- total será 0;
- ids será [];
- maiorCliente será null.
*/

function gerarRelatorio(jsonTransacoes) {
  const Transacoes = JSON.parse(jsonTransacoes);

  const confirmadas = Transacoes.filter(transacao => transacao.status === "confirmada");

  const total = confirmadas.reduce((acc , t) => acc + t.valor ,0);

  const ids = confirmadas.map(transacao => transacao.id);

  let maiorCliente = null;
  let maiorValor = -1;

  for (let i = 0; i < confirmadas.length; i++) {
    if (confirmadas[i].valor > maiorValor) {
      maiorValor = confirmadas[i].valor;
      maiorCliente = confirmadas[i].cliente;
    }
  }

  return {
    confirmadas: confirmadas.length,
    total,
    ids,
    maiorCliente
  };
}

console.log(gerarRelatorio(`[ { "id": 101, "cliente": "Ana", "valor": 250, "status": "confirmada" },
 { "id": 102, "cliente": "Carlos", "valor": 500, "status": "pendente" },
 { "id": 103, "cliente": "Marina", "valor": 700, "status": "confirmada" },
 { "id": 104, "cliente": "Pedro", "valor": 150, "status": "confirmada" },
 { "id": 105, "cliente": "Lucas", "valor": 300, "status": "cancelada" }
]`));
// Esperado: { confirmadas: 3, total: 1100, ids: [101, 103, 104], maiorCliente: "Marina" }