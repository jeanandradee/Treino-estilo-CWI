/* B4 — Lógica Integrada
Q1 — Gestão de Quartos de Hotel
Habilidades: Objetos, arrays, operadores, condicionais, funções e acumuladores.
Um hotel precisa gerar um relatório sobre seus quartos.
Cada quarto possui:
- numero
- categoria
- diaria
- ocupado (boolean)
Regras:
1. Considere disponíveis os quartos com ocupado === false.
2. Retorne os números dos quartos disponíveis.
3. Calcule o valor total das diárias dos quartos disponíveis.
4. Conte quantos quartos disponíveis possuem diária <= 200.
5. Retorne o nome da categoria do quarto disponível mais caro.
Em caso de empate no valor da diária, considere o primeiro.
*/

function analisarQuartos(quartos) {
  const disponiveis = quartos.filter(quarto => quarto.ocupado === false);

  const totalDiarias = disponiveis.reduce((acc, q) => acc + q.diaria ,0);

  const economicos = disponiveis.filter(quartos => quartos.diaria <= 200).length;

  const quartoMaisCaro = disponiveis.reduce(
    (acc, q) => q.diaria > acc.diaria ? q : acc,
    disponiveis[0]
  );

  const categoriaMaisCara = quartoMaisCaro
    ? quartoMaisCaro.categoria
    : null;


  return {
    disponiveis: disponiveis.map(quarto => quarto.numero),
    totalDiarias,
    economicos,
    categoriaMaisCara
  }
}

console.log(analisarQuartos([
  { numero: 101, categoria: "Standard", diaria: 150, ocupado: false },
  { numero: 102, categoria: "Luxo", diaria: 350, ocupado: true },
  { numero: 103, categoria: "Executivo", diaria: 220, ocupado: false },
  { numero: 104, categoria: "Premium", diaria: 400, ocupado: false },
  { numero: 105, categoria: "Standard", diaria: 180, ocupado: false }
]));

// Esperado:
// {
//   disponiveis: [101, 103, 104, 105],
//   totalDiarias: 950,
//   economicos: 2,
//   categoriaMaisCara: "Premium"
// }

/* Q2 — Sistema de Inscrições em Eventos
Habilidades: JSON, Strings, arrays, operadores lógicos, condicionais e algoritmos.
Uma plataforma recebe inscrições de participantes
em diferentes eventos, no formato JSON.
Cada inscrição possui:
- nome
- evento
- idade
- status
- valor
Regras:
1. Considere válidas as inscrições com status === "confirmado".
2. Os nomes dos participantes válidos devem ficar em maiúsculas.
3. Calcule o valor arrecadado com inscrições confirmadas.
4. Conte quantos participantes confirmados são maiores de idade.
5. Retorne os nomes dos participantes confirmados
   que possuem idade inferior a 18 anos.
Retorne:
- participantes
- arrecadacao
- maioresDeIdade
- menores
*/

function processarInscricoes(jsonDados) {
  let dados = JSON.parse(jsonDados);

  const participantes = dados.filter(inscricao => inscricao.status.toLowerCase() === "confirmado")
  
  const arrecadacao = participantes.reduce((acc, i) => acc + i.valor ,0);

  const maioresDeIdade = participantes.filter(p => p.idade >= 18).length;

  const menores = participantes.filter(p => p.idade < 18).map(p => p.nome);


  return {
    participantes: participantes.map(inscricao => inscricao.nome.toUpperCase()),
    arrecadacao,
    maioresDeIdade,
    menores
  }
}

console.log(processarInscricoes(`[
  {
    "nome": "Ana",
    "evento": "Tecnologia",
    "idade": 22,
    "status": "confirmado",
    "valor": 100
  },
  {
    "nome": "Carlos",
    "evento": "Musica",
    "idade": 16,
    "status": "confirmado",
    "valor": 50
  },
  {
    "nome": "Julia",
    "evento": "Tecnologia",
    "idade": 25,
    "status": "pendente",
    "valor": 100
  },
  {
    "nome": "Pedro",
    "evento": "Esportes",
    "idade": 19,
    "status": "confirmado",
    "valor": 80
  },
  {
    "nome": "Marina",
    "evento": "Musica",
    "idade": 17,
    "status": "cancelado",
    "valor": 50
  }
]`));

// Esperado:
// {
//   participantes: ["ANA", "CARLOS", "PEDRO"],
//   arrecadacao: 230,
//   maioresDeIdade: 2,
//   menores: ["Carlos"]
// }

/* Q3 — Acompanhamento de Oficinas
Habilidades: Matrizes, arrays, strings, funções, acumuladores, operadores e estruturas de controle.
Uma instituição oferece oficinas para participantes.
Cada participante possui:
- nome
- oficina
- presencas (array de valores booleanos)
Cada posição do array representa uma aula:
true = presente
false = ausente
Regras:
1. Calcule a quantidade de presenças de cada participante.
2. Calcule a frequência percentual de cada participante.
3. Considere aprovado quem tiver frequência >= 75%.
4. Retorne os nomes dos aprovados em letras maiúsculas.
5. Calcule a quantidade total de ausências de todos
   os participantes.
Retorne:
- participantes (array de objetos com nome e frequencia)
- aprovados
- totalAusencias
A frequência deve ser apresentada com duas casas decimais.
*/

function analisarOficinas(participantes) {
  let nomeEFrequencia = [];
  let aprovados = [];
  let totalAusencias = 0;

  for (let { nome, oficina, presencas } of participantes) {
    const quantidadePresencas = presencas.filter(
      presenca => presenca === true
    ).length;

    const frequencia = presencas.length > 0
      ? (quantidadePresencas / presencas.length) * 100
      : 0;

    const ausencias = presencas.filter(
      presenca => presenca === false
    ).length;

    totalAusencias += ausencias;

    nomeEFrequencia.push({
      nome,
      frequencia: Number(frequencia.toFixed(2))
    });

    if (frequencia >= 75) {
      aprovados.push(nome.toUpperCase());
    }
  }

  return {
    participantes: nomeEFrequencia,
    aprovados,
    totalAusencias
  }
}

console.log(analisarOficinas([
  {
    nome: "Ana",
    oficina: "Programacao",
    presencas: [true, true, false, true]
  },
  {
    nome: "Carlos",
    oficina: "Design",
    presencas: [true, false, false, true]
  },
  {
    nome: "Julia",
    oficina: "Programacao",
    presencas: [true, true, true, true]
  },
  {
    nome: "Pedro",
    oficina: "Design",
    presencas: [false, true, true, false]
  }
]));

// Esperado:
// {
//   participantes: [
//     { nome: "Ana", frequencia: 75 },
//     { nome: "Carlos", frequencia: 50 },
//     { nome: "Julia", frequencia: 100 },
//     { nome: "Pedro", frequencia: 50 }
//   ],
//   aprovados: ["ANA", "JULIA"],
//   totalAusencias: 5
// }