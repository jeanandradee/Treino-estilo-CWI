/* B5 — Plataforma de Cursos
Habilidades: JSON, objetos, arrays, matrizes, funções, strings, operadores, condicionais e acumuladores.
Uma plataforma de ensino precisa gerar um relatório
de desempenho dos alunos.
O sistema recebe os dados em formato JSON.
Cada aluno possui:
- nome
- curso
- notaFinal
- aulas (array de objetos)
Cada aula possui:
- titulo
- duracao (em minutos)
- concluida (boolean)
Regras:
1. Converta os dados JSON em uma estrutura JavaScript.
2. Para cada aluno:
   - Calcule a quantidade de aulas concluídas.
   - Calcule o percentual de conclusão do curso.
   - Calcule o total de minutos das aulas concluídas.
3. Um aluno recebe certificado quando:
   - Possui percentual de conclusão >= 80%.
   - Possui notaFinal >= 7.
4. Os nomes dos alunos que recebem certificado
   devem ser apresentados em letras maiúsculas.
5. Retorne também:
   - Quantidade total de alunos.
   - Quantidade de certificados emitidos.
   - Total de minutos de aulas concluídas por todos.
   - Média geral dos percentuais de conclusão.
A média geral deve ser apresentada com duas casas decimais.
Retorne um objeto contendo:
- alunos
- certificados
- totalAlunos
- totalCertificados
- minutosConcluidos
- mediaConclusao
*/

function gerarRelatorio(jsonDados) {
  const dados = JSON.parse(jsonDados);

  let alunos = [];
  let certificados = [];
  let minutosConcluidos = 0;
  let somaConclusao = 0;

  for (let { nome, curso, notaFinal, aulas } of dados) {

    let aulasConcluidas = 0;
    let conclusao = 0;
    let minutos = 0;

    for (let aula of aulas) {

      if (aula.concluida === true) {

        aulasConcluidas++;

        minutos += aula.duracao;
      }
    }

    if (aulas.length > 0) {
      conclusao = (aulasConcluidas / aulas.length) * 100;
    }

    minutosConcluidos += minutos;

    somaConclusao += conclusao;

    if (conclusao >= 80 && notaFinal >= 7) {
      certificados.push(nome.toUpperCase());
    }

    alunos.push({
      nome,
      aulasConcluidas,
      conclusao: Number(conclusao.toFixed(2)),
      minutos
    });
  }

  const totalAlunos = alunos.length;

  const totalCertificados = certificados.length;

  const mediaConclusao = totalAlunos > 0
    ? Number((somaConclusao / totalAlunos).toFixed(2))
    : 0;

  return {
    alunos,
    certificados,
    totalAlunos,
    totalCertificados,
    minutosConcluidos,
    mediaConclusao
  };
}

console.log(gerarRelatorio(`[
  {
    "nome": "Ana",
    "curso": "JavaScript",
    "notaFinal": 9,
    "aulas": [
      { "titulo": "Variaveis", "duracao": 30, "concluida": true },
      { "titulo": "Condicionais", "duracao": 40, "concluida": true },
      { "titulo": "Funcoes", "duracao": 50, "concluida": true },
      { "titulo": "Arrays", "duracao": 60, "concluida": true },
      { "titulo": "JSON", "duracao": 45, "concluida": false }
    ]
  },
  {
    "nome": "Carlos",
    "curso": "Python",
    "notaFinal": 8,
    "aulas": [
      { "titulo": "Variaveis", "duracao": 30, "concluida": true },
      { "titulo": "Condicionais", "duracao": 40, "concluida": false },
      { "titulo": "Funcoes", "duracao": 50, "concluida": false },
      { "titulo": "Listas", "duracao": 60, "concluida": true }
    ]
  },
  {
    "nome": "Julia",
    "curso": "Java",
    "notaFinal": 6,
    "aulas": [
      { "titulo": "Introducao", "duracao": 30, "concluida": true },
      { "titulo": "Classes", "duracao": 40, "concluida": true },
      { "titulo": "Objetos", "duracao": 50, "concluida": true },
      { "titulo": "Heranca", "duracao": 60, "concluida": true },
      { "titulo": "Interfaces", "duracao": 45, "concluida": true }
    ]
  },
  {
    "nome": "Pedro",
    "curso": "JavaScript",
    "notaFinal": 7,
    "aulas": [
      { "titulo": "Variaveis", "duracao": 30, "concluida": true },
      { "titulo": "Condicionais", "duracao": 40, "concluida": true },
      { "titulo": "Funcoes", "duracao": 50, "concluida": true },
      { "titulo": "Arrays", "duracao": 60, "concluida": false }
    ]
  }
]`));

// Esperado:
// {
//   alunos: [
//     { nome: "Ana", aulasConcluidas: 4, conclusao: 80, minutos: 180 },
//     { nome: "Carlos", aulasConcluidas: 2, conclusao: 50, minutos: 90 },
//     { nome: "Julia", aulasConcluidas: 5, conclusao: 100, minutos: 225 },
//     { nome: "Pedro", aulasConcluidas: 3, conclusao: 75, minutos: 120 }
//   ],
//   certificados: ["ANA"],
//   totalAlunos: 4,
//   totalCertificados: 1,
//   minutosConcluidos: 615,
//   mediaConclusao: 76.25
// }