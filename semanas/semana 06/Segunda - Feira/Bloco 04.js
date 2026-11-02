/* ========================================
   QUESTÃO 1 — ANÁLISE DE DESEMPENHO
   ========================================
Uma escola deseja gerar um relatório das notas dos alunos.
Crie a função analisarTurma(alunos).
Cada aluno possui:
- nome
- notas (array com três notas)
A função deve retornar um objeto contendo:
- aprovados: nomes dos alunos com média >= 7;
- reprovados: nomes dos alunos com média < 7;
- maiorMedia: nome do aluno com a maior média;
- mediaTurma: média geral das notas de todos os alunos.
Em caso de empate na maior média, mantenha o primeiro aluno.
Se não houver alunos, retorne arrays vazios, maiorMedia null
e mediaTurma 0.
*/

function analisarTurma(alunos) {
  let aprovados = [];
  let reprovados = [];
  let maiorMedia = null;
  let mediaTurma = 0;
  let somaMediaGeral = 0;
  let maiorNota = -Infinity;

  if (alunos.length === 0) {
    return {
      aprovados: [],
      reprovados: [],
      maiorMedia: null,
      mediaTurma: 0
    };
  }

  for (let { nome, notas } of alunos) {
    let soma = 0;

    for (let nota of notas) {
      soma += nota;
    }

    let mediaAtual = soma / notas.length;

    somaMediaGeral += mediaAtual;

    if (mediaAtual >= 7) {
      aprovados.push(nome);
    } else {
      reprovados.push(nome);
    }

    if (mediaAtual > maiorNota) {
      maiorNota = mediaAtual;
      maiorMedia = nome;
    }
  }

  mediaTurma = somaMediaGeral / alunos.length;


  return { 
    aprovados,
    reprovados,
    maiorMedia,
    mediaTurma
  }
}

console.log(analisarTurma([ { nome: "Ana", notas: [8, 7, 9] },
 { nome: "Bruno", notas: [5, 6, 7] }, { nome: "Carlos", notas: [9, 10, 8] } ]));
// Resultado esperado: { aprovados: ["Ana", "Carlos"], reprovados: ["Bruno"],
//  maiorMedia: "Carlos", mediaTurma: 7.666666666666667 }


/* ========================================
   QUESTÃO 2 — VALIDAÇÃO DE IDENTIFICADORES
   ========================================
Um sistema recebe identificadores de produtos.
Crie a função validarIdentificadores(codigos).
Um identificador é válido quando:
- Possui exatamente 7 caracteres;
- Os três primeiros caracteres são letras;
- Os quatro últimos caracteres são números.
A função deve retornar um objeto contendo:
- validos: array com os códigos válidos;
- invalidos: array com os códigos inválidos;
- quantidadeValidos: quantidade de códigos válidos.
A comparação deve aceitar letras maiúsculas e minúsculas.
Preserve os códigos originais nos arrays.
*/

function validarIdentificadores(codigos) {
  let validos = [];
  let invalidos = [];
  let quantidadeValidos = 0;

  for (let codigo of codigos) {

    if (/^[a-z]{3}[0-9]{4}$/i.test(codigo)) {
      validos.push(codigo);
      quantidadeValidos++;
    } else {
      invalidos.push(codigo);
    }
  }

  return {
    validos,
    invalidos,
    quantidadeValidos
  };
}

console.log(validarIdentificadores([ "ABC1234", "abC5678", "AB12345", "XYZ9876", "A1C1234", "DEF12A4" ]));
// Resultado esperado: { validos: ["ABC1234", "abC5678", "XYZ9876"], invalidos: ["AB12345", "A1C1234", "DEF12A4"],
// quantidadeValidos: 3 }


/* ========================================
   QUESTÃO 3 — CONTROLE DE DESPESAS
   ========================================
Um aplicativo precisa organizar as despesas de um usuário.
Crie a função analisarDespesas(despesas).
Cada despesa possui:
- descricao
- categoria
- valor
A função deve retornar um objeto contendo:
- total: soma de todas as despesas;
- quantidade: quantidade de despesas;
- maiorDespesa: descrição da despesa de maior valor;
- categorias: array com os nomes das categorias sem repetição.
Regras:
- Não altere o array original;
- Em caso de empate, mantenha a primeira maior despesa;
- Se não houver despesas, maiorDespesa será null;
- Se não houver despesas, total será 0.
Preserve a ordem em que as categorias aparecem.
*/

function analisarDespesas(despesas) {
  let total = 0;
  let quantidade = 0;
  let maiorDespesa = null;
  let valorMaiorDespesa = 0;
  let categorias = [];

  for (let { descricao, categoria, valor } of despesas) {
    total += valor ;
    quantidade ++ ;

    if (maiorDespesa === null || valor > valorMaiorDespesa ) {
      valorMaiorDespesa = valor;
      maiorDespesa = descricao;
    }

    if (!categorias.includes(categoria)) {
      categorias.push(categoria);
    }
  }

  return {
    total,
    quantidade,
    maiorDespesa,
    categorias
  }
}

console.log(analisarDespesas([ { descricao: "Mercado", categoria: "Alimentação", valor: 250 },
 { descricao: "Ônibus", categoria: "Transporte", valor: 80 }, { descricao: "Farmácia", categoria: "Saúde", valor: 120 },
 { descricao: "Lanche", categoria: "Alimentação", valor: 40 }, { descricao: "Combustível", categoria: "Transporte", valor: 250 } ]));
// Resultado esperado: { total: 740, quantidade: 5, maiorDespesa: "Mercado",
// categorias: ["Alimentação", "Transporte", "Saúde"] }