/* Q1 — Validação de Cadastro
Habilidades: Strings, condicionais, operadores e funções.
Uma plataforma recebe cadastros de usuários.
Cada cadastro possui nome, email e idade.
Crie uma função que retorne uma lista de objetos contendo:
1. Nome do usuário com a primeira letra de cada palavra maiúscula.
2. Email convertido para letras minúsculas.
3. Situação do cadastro.
Regras:
- Idade deve ser >= 18.
- Email deve conter "@".
- Nome deve possuir pelo menos 3 caracteres.
- Se todas as condições forem atendidas, situação = "válido".
- Caso contrário, situação = "inválido".
*/

function validarCadastros(cadastros) {
  let resultado = [];

  for (let { nome, email, idade } of cadastros) {
    email = email.toLowerCase();

    nome = nome
      .toLowerCase()
      .split(" ")
      .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(" ");

    let situacao = "";

    if (
      idade >= 18 &&
      email.includes("@") &&
      nome.length >= 3
    ) {
      situacao = "válido";
    } else {
      situacao = "inválido";
    }

    resultado.push({
      nome,
      email,
      situacao
    });
  }

  return resultado;
}

console.log(validarCadastros([
    { nome: "ana silva", email: "ANA@EMAIL.COM", idade: 22 },
    { nome: "jo", email: "joemail.com", idade: 25 },
    { nome: "carlos souza", email: "carlos@email.com", idade: 16 },
    { nome: "MARIA COSTA", email: "MARIA@EMAIL.COM", idade: 30 }
]));

// Resultado esperado:
// [
//   { nome: "Ana Silva", email: "ana@email.com", situacao: "válido" },
//   { nome: "Jo", email: "joemail.com", situacao: "inválido" },
//   { nome: "Carlos Souza", email: "carlos@email.com", situacao: "inválido" },
//   { nome: "Maria Costa", email: "maria@email.com", situacao: "válido" }
// ]

/* Q2 — Análise de Matriz de Produção
Habilidades: Matrizes, loops, condicionais e algoritmos básicos.
Uma fábrica registra a quantidade de peças produzidas por máquina
durante quatro períodos do dia.
Cada linha representa uma máquina.
Retorne:
1. Produção total de cada máquina.
2. Quantidade total de peças produzidas.
3. Quantidade de máquinas que produziram pelo menos 100 peças.
4. Posição (índice) da máquina com maior produção.
*/

function analisarProducao(matriz) {
  const producaoPorMaquina = matriz.map(maquina => 
    maquina.reduce((acc , m) => acc + m ,0)
  );

  const totalGeral = producaoPorMaquina.reduce((acc, m) => acc + m ,0);

  const maquinasAcima100 = producaoPorMaquina.filter(maquina => maquina >= 100).length;

  let indiceMaiorProducao = 0;
  let maiorProducao = null;

  for (let i = 0;i < producaoPorMaquina.length; i++) {
    if (maiorProducao === null || producaoPorMaquina[i] > maiorProducao) {
      maiorProducao = producaoPorMaquina[i];
      indiceMaiorProducao = i;
    }
  }

  return {
    producaoPorMaquina,
    totalGeral,
    maquinasAcima100,
    indiceMaiorProducao
  }
}

console.log(analisarProducao([
    [20, 25, 30, 15],
    [40, 35, 30, 25],
    [10, 15, 20, 15],
    [50, 45, 40, 35]
]));

// Resultado esperado:
// {
//   producaoPorMaquina: [90, 130, 60, 170],
//   totalGeral: 450,
//   maquinasAcima100: 2,
//   indiceMaiorProducao: 3
// }

/* Q3 — Processamento de Transações
Habilidades: JSON, objetos, operadores e estruturas de controle.
Um sistema recebe transações financeiras em formato JSON.
Cada transação possui:
- id
- tipo ("entrada" ou "saida")
- valor
- status ("aprovada" ou "recusada")
Converta o JSON utilizando JSON.parse.
Retorne:
1. Quantidade de transações aprovadas.
2. Soma das entradas aprovadas.
3. Soma das saídas aprovadas.
4. Saldo final (entradas - saídas).
5. Lista dos IDs das transações recusadas.
*/

function processarTransacoes(json) {
  let transacoes = JSON.parse(json);

  const aprovadas = transacoes.filter( t => t.status.toLowerCase() === "aprovada" );

  const totalEntradas = aprovadas
    .filter(t => t.tipo.toLowerCase() === "entrada")
    .reduce((acc, t) => acc + t.valor, 0);

  const totalSaidas = aprovadas
    .filter(t => t.tipo.toLowerCase() === "saida")
    .reduce((acc, t) => acc + t.valor, 0);

  const saldoFinal = totalEntradas - totalSaidas;

  const recusadas = transacoes
    .filter(t => t.status.toLowerCase() === "recusada")
    .map(t => t.id);

  return {
    aprovadas: aprovadas.length,
    totalEntradas,
    totalSaidas,
    saldoFinal,
    recusadas
  };
}

console.log(processarTransacoes(`[
    {"id": 101, "tipo": "entrada", "valor": 500, "status": "aprovada"},
    {"id": 102, "tipo": "saida", "valor": 150, "status": "aprovada"},
    {"id": 103, "tipo": "entrada", "valor": 300, "status": "recusada"},
    {"id": 104, "tipo": "saida", "valor": 80, "status": "aprovada"},
    {"id": 105, "tipo": "entrada", "valor": 200, "status": "aprovada"}
]`));

// Resultado esperado:
// {
//   aprovadas: 4,
//   totalEntradas: 700,
//   totalSaidas: 230,
//   saldoFinal: 470,
//   recusadas: [103]
// }

/* Q4 — Rastreamento de Palavras
Habilidades: Strings, arrays, funções e condicionais.
Um sistema recebe uma frase e precisa analisar suas palavras.
Crie uma função que:
1. Separe as palavras da frase.
2. Conte quantas palavras possuem mais de 5 caracteres.
3. Identifique a palavra mais longa.
4. Conte quantas palavras começam com a letra "a",
   independentemente de maiúsculas ou minúsculas.
5. Retorne todas as palavras em letras maiúsculas.
Considere palavras separadas por espaços.
*/

function analisarFrase(frase) {
  let palavras = frase.trim().split(/\s+/);

  const quantidadeLongas = palavras.filter(p => p.length > 5).length;

  const maiorPalavra = palavras.reduce((atual, maior) =>
    atual.length >= maior.length ? atual : maior
  );

  const comecaComA = palavras.filter(p => p[0].toLowerCase() === "a").length;

  const palavrasMaiusculas = palavras.map(p => p.toUpperCase());

  return {
    quantidadeLongas,
    maiorPalavra,
    comecaComA,
    palavrasMaiusculas
  }
}

console.log(analisarFrase("A tecnologia transforma grandes ideias em soluções"));

// Resultado esperado:
// {
//   quantidadeLongas: 5,
//   maiorPalavra: "tecnologia",
//   comecaComA: 1,
//   palavrasMaiusculas: [
//     "A", "TECNOLOGIA", "TRANSFORMA",
//     "GRANDES", "IDEIAS", "EM", "SOLUÇÕES"
//   ]
// }

/* Q5 — Controle de Aprovação
Habilidades: Funções, arrays, operadores, condicionais e algoritmos básicos.
Uma instituição utiliza três avaliações para calcular o resultado
final dos alunos.
Cada aluno possui:
- nome
- notas (array com três notas)
- faltas
A média é calculada utilizando as três notas.
Regras:
- Aprovado: média >= 7 e faltas <= 5.
- Recuperação: média >= 5 e < 7, com faltas <= 5.
- Reprovado: média < 5 ou faltas > 5.
Retorne:
1. Nome e média de cada aluno.
2. Situação de cada aluno.
3. Quantidade de aprovados.
4. Quantidade de alunos em recuperação.
5. Quantidade de reprovados.
*/

function gerarResultados(lista) {
  let alunos = [];
  let aprovados = 0;
  let recuperacao = 0;
  let reprovados = 0;

  for (let { nome, notas, faltas } of lista) {
    let media = notas.reduce((acc, n) => acc + n ,0) / notas.length;
    let situacao;

    if (faltas > 5 || media < 5) {
      situacao = "Reprovado";
      reprovados ++ ;
    } else if (media >= 7) {
      situacao = "Aprovado";
      aprovados ++ ;
    } else if (media >= 5) {
      recuperacao ++ ;
      situacao = "Recuperação";
    }

    media = Number(media.toFixed(2));

    alunos.push({
      nome,
      media,
      situacao
    }); 
  }


  return {
    alunos,
    aprovados,
    recuperacao,
    reprovados
  }
}

console.log(gerarResultados([
    { nome: "Ana", notas: [8, 9, 7], faltas: 2 },
    { nome: "Bruno", notas: [6, 5, 6], faltas: 3 },
    { nome: "Carla", notas: [4, 5, 3], faltas: 1 },
    { nome: "Diego", notas: [9, 8, 10], faltas: 7 },
    { nome: "Elisa", notas: [7, 7, 8], faltas: 5 }
]));

// Resultado esperado:
// {
//   alunos: [
//     { nome: "Ana", media: 8, situacao: "Aprovado" },
//     { nome: "Bruno", media: 5.67, situacao: "Recuperação" },
//     { nome: "Carla", media: 4, situacao: "Reprovado" },
//     { nome: "Diego", media: 9, situacao: "Reprovado" },
//     { nome: "Elisa", media: 7.33, situacao: "Aprovado" }
//   ],
//   aprovados: 2,
//   recuperacao: 1,
//   reprovados: 2
// }