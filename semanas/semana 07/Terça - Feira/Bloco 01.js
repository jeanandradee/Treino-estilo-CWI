/* B1 — Lógica Aplicada
Q1 — Controle de Entregas
Uma transportadora registra suas entregas.
Cada entrega possui:
- codigo
- destino
- valor
- status ("entregue" ou "pendente")
Retorne:
1. Quantidade de entregas concluídas.
2. Quantidade de entregas pendentes.
3. Valor total das entregas concluídas.
*/

function analisarEntregas(entregas) {
  const entregues = entregas.filter(entrega => entrega.status.toLowerCase() === "entregue");
  const pendentes = entregas.filter(entrega => entrega.status.toLowerCase() === "pendente").length;
  const valorTotal = entregues.reduce((acc, e) => acc + e.valor ,0);

  return {
    entregues: entregues.length,
    pendentes,
    valorTotal
  }
}

console.log(analisarEntregas([
  { codigo: 1, destino: "Recife", valor: 120, status: "entregue" },
  { codigo: 2, destino: "João Pessoa", valor: 80, status: "pendente" },
  { codigo: 3, destino: "Natal", valor: 200, status: "entregue" },
  { codigo: 4, destino: "Campina Grande", valor: 90, status: "pendente" }
])); // Esperado: { entregues: 2, pendentes: 2, valorTotal: 320 }

/* Q2 — Monitoramento de Temperatura
Uma empresa monitora a temperatura de seus equipamentos.
Receba um array de temperaturas.
Retorne:
1. Maior temperatura.
2. Menor temperatura.
3. Quantidade de temperaturas acima de 30.
4. Quantidade de temperaturas abaixo de 10.
*/

function analisarTemperaturas(temperaturas) {
  const maior = temperaturas.reduce((acc , n) =>
  acc > n ? acc : n 
  ,-Infinity );

  const menor = temperaturas.reduce((acc , n) =>
  acc < n ? acc : n 
  ,Infinity );

  const acimaDe30 = temperaturas.filter(temp => temp > 30).length;

  const abaixoDe10 = temperaturas.filter(temp => temp < 10).length;

  return {
    maior,
    menor,
    acimaDe30,
    abaixoDe10
  };
}

console.log(analisarTemperaturas([12, 35, 8, 42, 25, 5, 31]));
// Esperado: { maior: 42, menor: 5, acimaDe30: 3, abaixoDe10: 2 }

/* Q3 — Cadastro de Participantes
Um evento possui participantes cadastrados.
Cada participante possui:
- nome
- idade
- categoria
Retorne:
1. Total de participantes.
2. Quantidade de maiores de idade.
3. Lista com os nomes dos participantes da categoria "VIP".
*/

function analisarParticipantes(participantes) {
  const total = participantes.length;

  const maioresDeIdade = participantes.filter(p => p.idade >= 18 ).length;

  const participantesVIP = participantes.filter(p => p.categoria.toUpperCase() === "VIP").map(p => p.nome);

  return {
    total,
    maioresDeIdade,
    participantesVIP
  }
}

console.log(analisarParticipantes([
  { nome: "Ana", idade: 22, categoria: "VIP" },
  { nome: "Carlos", idade: 16, categoria: "Comum" },
  { nome: "Julia", idade: 30, categoria: "VIP" },
  { nome: "Pedro", idade: 17, categoria: "Comum" }
]));
// Esperado: { total: 4, maioresDeIdade: 2, participantesVIP: ["Ana", "Julia"] }

/* Q4 — Histórico de Consumo
Uma empresa registra o consumo mensal de energia
de seus clientes.
Cada registro possui:
- cliente
- consumo
Retorne:
1. Consumo total.
2. Quantidade de clientes com consumo >= 200.
3. Média de consumo.
*/

function analisarConsumo(registros) {
  const consumoTotal = registros.reduce((acc, c) => acc + c.consumo ,0);

  const clientesAcimaLimite = registros.filter(c => c.consumo >= 200).length;

  const media = registros.length > 0
    ? consumoTotal / registros.length
    : 0;


  return {
    consumoTotal,
    clientesAcimaLimite,
    media
  }
}

console.log(analisarConsumo([
  { cliente: "Ana", consumo: 150 },
  { cliente: "Carlos", consumo: 250 },
  { cliente: "Julia", consumo: 300 },
  { cliente: "Pedro", consumo: 100 }
]));

// Esperado: { consumoTotal: 800, clientesAcimaLimite: 2, media: 200 }

/* Q5 — Validação de Códigos
Um sistema recebe códigos de identificação.
Um código é válido quando:
- possui pelo menos 6 caracteres;
- não contém espaços;
- começa com uma letra maiúscula.
Retorne:
1. Quantidade de códigos válidos.
2. Lista dos códigos inválidos.
*/

function validarCodigos(codigos) {
  const validos = codigos.filter(codigo =>
    codigo.length >= 6 &&
    !codigo.includes(" ") &&
    /^[A-Z]/.test(codigo)
  );

  const invalidos = codigos.filter(codigo =>
    codigo.length < 6 ||
    codigo.includes(" ") ||
    !/^[A-Z]/.test(codigo)
  );

  return {
    validos: validos.length,
    invalidos
  };
}

console.log(validarCodigos([ "ABC123", "abc456", "AB 123", "XYZ7890", "CD12" ]));
// Esperado: { validos: 2, invalidos: ["abc456", "AB 123", "CD12"] }

/* Q6 — Relatório de Avaliações
Uma plataforma registra as notas de seus alunos.
Cada aluno possui:
- nome
- notas: array de avaliações.
Regras:
- Média >= 7: aprovado.
- Média < 7: reprovado.
Retorne:
1. Média de cada aluno.
2. Lista de aprovados.
3. Lista de reprovados.
4. Média geral da turma.
*/

function gerarRelatorio(alunos) {
  const medias = alunos.map(aluno => {
    const soma = aluno.notas.reduce(
      (acc, nota) => acc + nota, 0
    );

    const media = aluno.notas.length > 0
      ? soma / aluno.notas.length
      : 0;

    return {
      nome: aluno.nome,
      media: Number(media.toFixed(2))
    };
  });

  const aprovados = medias
    .filter(aluno => aluno.media >= 7)
    .map(aluno => aluno.nome);

  const reprovados = medias
    .filter(aluno => aluno.media < 7)
    .map(aluno => aluno.nome);

  const somaMedias = medias.reduce(
    (acc, aluno) => acc + aluno.media, 0
  );

  const mediaGeral = medias.length > 0
    ? Number((somaMedias / medias.length).toFixed(2))
    : 0;

  return {
    medias,
    aprovados,
    reprovados,
    mediaGeral
  };
}

console.log(gerarRelatorio([
  { nome: "Lucas", notas: [8, 7, 9] },
  { nome: "Marina", notas: [5, 6, 7] },
  { nome: "Rafael", notas: [9, 10, 8] }
]));

// Esperado: {
//  medias: [
//     { nome: "Lucas", media: 8 },
//     { nome: "Marina", media: 6 },
//     { nome: "Rafael", media: 9 }
//   ],
//   aprovados: ["Lucas", "Rafael"],
//   reprovados: ["Marina"],
//   mediaGeral: 7.67
// }