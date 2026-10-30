/* B4 — Integração de Skills
Questão 1 — Análise de desempenho
Uma plataforma registra as notas de alunos em uma avaliação. Cada aluno possui um nome e uma lista de notas.
Ela deve retornar um novo array de objetos contendo:
nome: nome do aluno;
media: média das notas;
situacao: "Aprovado" se a média for maior ou igual a 7; caso contrário, "Reprovado";
quantidadeNotas: quantidade de notas registradas. */
function analisarAlunos(alunos) {
  let resultado = [];

  for (let { nome, notas } of alunos) {
    let soma = 0;
    let quantidadeNotas = 0;
    for (let nota of notas) {
      soma += nota ;
      quantidadeNotas ++ ;
    }

    let media = soma / quantidadeNotas;
    let situacao = "";

    if (media >= 7) {
      situacao = "Aprovado";
    } else {
      situacao = "Reprovado";
    }

    resultado.push({ nome, media, situacao, quantidadeNotas});
  }

  return resultado;
}

console.log(analisarAlunos([ { nome: "Ana", notas: [8, 7, 9] },
 { nome: "Carlos", notas: [5, 6, 4] }, { nome: "Bia", notas: [10, 8] } ]))

/* Resultado esperado:
[
    { nome: "Ana", media: 8, situacao: "Aprovado", quantidadeNotas: 3 },
    { nome: "Carlos", media: 5, situacao: "Reprovado", quantidadeNotas: 3 },
    { nome: "Bia", media: 9, situacao: "Aprovado", quantidadeNotas: 2 }
] 
*/

/* Questão 2 — Processamento de códigos
Um sistema recebe códigos de identificação no formato "ABC-123".
A função deve analisar cada código e retornar um objeto com:
validos: quantidade de códigos válidos;
invalidos: quantidade de códigos inválidos;
listaValidos: array contendo os códigos válidos.
Um código é válido quando:
Possui exatamente 7 caracteres.
O quarto caractere é "-".
Os três primeiros caracteres são letras.
Os três últimos caracteres são números. */

function validarCodigos(codigos) {
  let validos = 0;
  let invalidos = 0;
  let listaValidos = [];

  for (let codigo of codigos) {
    let valido = true;

    if (codigo.length !== 7 || codigo[3] !== "-") {
      invalidos++;
      continue;
    }

    for (let i = 0; i <= 2; i++) {
      if (!(
          (codigo[i] >= "A" && codigo[i] <= "Z") ||
          (codigo[i] >= "a" && codigo[i] <= "z")
        )
      ) {
        valido = false;
        break;
      }
    }

    for (let j = 4; j <= 6; j++) {

      if (!(codigo[j] >= "0" && codigo[j] <= "9")) {
        valido = false;
        break;
      }
    }

    if (valido) {
      validos++;
      listaValidos.push(codigo);
    } else {
      invalidos++;
    }
  }

  return { validos, invalidos, listaValidos };
}

console.log(validarCodigos([ "ABC-123", "A1C-123", "XYZ-456", "AB-1234", "DEF-789" ]));
// Resultado esperado: { validos: 3, invalidos: 2, listaValidos: ["ABC-123", "XYZ-456", "DEF-789"] }

/* Questão 3 — Resumo de movimentações
Um sistema financeiro recebe uma lista de movimentações. Cada movimentação possui uma descrição, um tipo e um valor.
 A função deve retornar um objeto contendo:
totalEntradas: soma dos valores do tipo "entrada";
totalSaidas: soma dos valores do tipo "saida";
saldo: entradas menos saídas;
maiorMovimentacao: descrição da movimentação com maior valor absoluto.
Se a lista estiver vazia, os totais e o saldo devem ser 0, e maiorMovimentacao deve ser null.*/

function resumirMovimentacoes(movimentacoes) {
  let totalEntradas = 0;
  let totalSaidas = 0;
  let saldo = 0;
  let maiorMovimentacao = null;
  let valorMaiorMovimentacao = 0;

  for (let { descricao, tipo, valor } of movimentacoes) {
    if (tipo === "entrada") {
      totalEntradas += valor;
      saldo += valor;
    } else if (tipo === "saida") {
      totalSaidas += valor;
      saldo -= valor;
    }

    if ( maiorMovimentacao === null || Math.abs(valor) > valorMaiorMovimentacao) {
      valorMaiorMovimentacao = Math.abs(valor);
      maiorMovimentacao = descricao;
    }
  }

  return { 
    totalEntradas, 
    totalSaidas,
    saldo,
    maiorMovimentacao
  }
}

console.log(resumirMovimentacoes([ { descricao: "Salário", tipo: "entrada", valor: 2500 },
 { descricao: "Aluguel", tipo: "saida", valor: 900 }, { descricao: "Venda", tipo: "entrada", valor: 300 },
 { descricao: "Mercado", tipo: "saida", valor: 450 }
]));
// Resultado esperado: { totalEntradas: 2800, totalSaidas: 1350, saldo: 1450, maiorMovimentacao: "Salário" }