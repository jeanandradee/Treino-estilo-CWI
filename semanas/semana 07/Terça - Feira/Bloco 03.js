/* ==================================================
   B3 — CAÇA-BUG
   ==================================================
Q1 — Controle de Reservas
Habilidades: Arrays, condicionais e acumuladores.
Um hotel registra suas reservas.
Cada reserva possui:
- hospede
- noites
- valorDiaria
Retorne:
1. Quantidade de reservas.
2. Valor total de todas as reservas.
3. Quantidade de reservas com 3 noites ou mais.
*/

function analisarReservas(reservas) {
  let total = 0;
  let reservasLongas = 0;

  // Percorre cada reserva do array
  for (let reserva of reservas) {

    // Acumula o valor de cada reserva
    total += reserva.noites * reserva.valorDiaria;

    // Verifica se possui 3 noites ou mais
    if (reserva.noites >= 3) {
      reservasLongas++;
    }
  }

  return {
    quantidade: reservas.length,
    valorTotal: total,
    reservasLongas
  };
}

console.log(analisarReservas([
  { hospede: "Ana", noites: 2, valorDiaria: 150 },
  { hospede: "Carlos", noites: 4, valorDiaria: 200 },
  { hospede: "Julia", noites: 3, valorDiaria: 180 }
]));

// Esperado:
// {
//   quantidade: 3,
//   valorTotal: 1410,
//   reservasLongas: 2
// }


/* ==================================================
Q2 — Cadastro de Eventos
Habilidades: Strings, arrays e operadores.
Uma plataforma recebe nomes de eventos.
Retorne uma lista contendo apenas os eventos
com nomes de pelo menos 5 caracteres.
Os nomes devem ser convertidos para maiúsculas.
*/

function filtrarEventos(eventos) {

  // Seleciona eventos com pelo menos 5 caracteres
  return eventos
    .filter(evento => evento.nome.length >= 5)

    // Converte os nomes selecionados para maiúsculas
    .map(evento => evento.nome.toUpperCase());
}

console.log(filtrarEventos([
  { nome: "Feira" },
  { nome: "Tecnologia" },
  { nome: "Musica" },
  { nome: "Arte" }
]));

// Esperado:
// ["FEIRA", "TECNOLOGIA", "MUSICA"]


/* ==================================================
Q3 — Controle de Equipamentos
Habilidades: Objetos, operadores e condicionais.
Uma empresa controla seus equipamentos.
Cada equipamento possui:
- nome
- quantidade
- minimo
Um equipamento precisa de reposição quando
quantidade <= minimo.
Retorne os nomes dos equipamentos que precisam
de reposição.
*/

function verificarEquipamentos(equipamentos) {

  // Filtra equipamentos que precisam de reposição
  const reposicao = equipamentos.filter(equipamento =>
    equipamento.quantidade <= equipamento.minimo
  );

  // Retorna somente os nomes dos equipamentos
  return reposicao.map(equipamento => equipamento.nome);
}

console.log(verificarEquipamentos([
  { nome: "Notebook", quantidade: 8, minimo: 5 },
  { nome: "Mouse", quantidade: 3, minimo: 10 },
  { nome: "Teclado", quantidade: 4, minimo: 4 }
]));

// Esperado:
// ["Mouse", "Teclado"]


/* ==================================================
Q4 — Resultado de Avaliações
Habilidades: Funções, arrays e operadores relacionais.
Uma escola registra as notas dos alunos.
Cada aluno possui:
- nome
- notas (array)
Calcule a média de cada aluno.
Aprovado: média >= 7.
Reprovado: média < 7.
Retorne os nomes dos aprovados.
*/

function listarAprovados(alunos) {
  // Percorre os alunos e calcula a média individual
  return alunos
    .map(aluno => {

      // Soma todas as notas do aluno
      const soma = aluno.notas.reduce(
        (acc, nota) => acc + nota, 0
      );

      // Calcula a média, evitando divisão por zero
      const media = aluno.notas.length > 0
        ? soma / aluno.notas.length
        : 0;

      // Retorna um objeto com nome e média
      return {
        nome: aluno.nome,
        media
      };
    })

    // Seleciona alunos com média maior ou igual a 7
    .filter(aluno => aluno.media >= 7)

    // Retorna somente os nomes dos aprovados
    .map(aluno => aluno.nome);
}

console.log(listarAprovados([
  { nome: "Ana", notas: [7, 8, 9] },
  { nome: "Carlos", notas: [5, 6, 7] },
  { nome: "Julia", notas: [8, 8, 9] }
]));

// Esperado:
// ["Ana", "Julia"]


/* ==================================================
Q5 — Relatório de Transporte
Habilidades: Acumuladores, arrays e estruturas de controle.

Uma transportadora registra os quilômetros percorridos
por seus veículos.
Retorne:
1. Total de quilômetros.
2. Maior distância registrada.
3. Quantidade de viagens acima de 100 km.
*/

function analisarViagens(distancias) {
  let total = 0;
  let maior = -Infinity;
  let acimaDe100 = 0;

  // Percorre todas as distâncias
  for (let distancia of distancias) {

    // Acumula os quilômetros percorridos
    total += distancia;

    // Verifica se encontrou uma distância maior
    if (distancia > maior) {
      maior = distancia;
    }

    // Conta viagens acima de 100 km
    if (distancia > 100) {
      acimaDe100++;
    }
  }

  return {
    total,
    maior: distancias.length > 0 ? maior : 0,
    acimaDe100
  };
}

console.log(analisarViagens([80, 150, 60, 200, 90]));

// Esperado:
// {
//   total: 580,
//   maior: 200,
//   acimaDe100: 2
// }


/* ==================================================
Q6 — Processamento de Inscrições JSON
Habilidades: JSON, objetos, arrays e condicionais.
Uma plataforma recebe inscrições em formato JSON.
Cada inscrição possui:
- nome
- idade
- status
Considere aprovadas as inscrições com:
- status === "aprovado"
- idade >= 18
Retorne:
1. Quantidade de aprovados.
2. Lista com os nomes dos aprovados.
*/

function processarInscricoes(jsonDados) {
  // Converte o texto JSON em um array de objetos
  const inscricoes = JSON.parse(jsonDados);

  // Filtra inscrições que atendem às DUAS condições
  const aprovados = inscricoes.filter(inscricao =>
    inscricao.status === "aprovado" &&
    inscricao.idade >= 18
  );

  // Extrai somente os nomes dos aprovados
  const nomes = aprovados.map(inscricao => inscricao.nome);

  return {
    quantidade: nomes.length,
    nomes
  };
}

console.log(processarInscricoes(`[
  { "nome": "Ana", "idade": 22, "status": "aprovado" },
  { "nome": "Carlos", "idade": 17, "status": "aprovado" },
  { "nome": "Julia", "idade": 25, "status": "pendente" },
  { "nome": "Pedro", "idade": 19, "status": "aprovado" }
]`));

// Esperado:
// {
//   quantidade: 2,
//   nomes: ["Ana", "Pedro"]
// }