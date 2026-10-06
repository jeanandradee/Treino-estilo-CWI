/* ============================================================
1️⃣ REGISTRO DE NOTAS
Dado um array de alunos:
{
  nome,
  notas: [nota1, nota2, nota3]
}
Crie um NOVO array contendo:
{
  nome,
  media,
  situacao
}
Regras:
- calcule a média das 3 notas
- média >= 7 → "APROVADO"
- média < 7 → "REPROVADO"
- a média deve ser retornada como número
- preserve a ordem
- não altere os objetos originais

============================================================ */

function processarNotas(alunos) {
  let resultado = [];

  for (let { nome, notas } of alunos) {
    let situacao;
    let soma = 0;
    for (let nota of notas) {
      soma += nota;
    }
    let media = soma / notas.length;

    if (media >= 7) {
      situacao = "APROVADO";
    } else {
      situacao = "REPROVADO";
    }

    resultado.push({nome, media, situacao});
  }

  return resultado;
}

console.log(processarNotas([{nome: "Ana", notas: [8, 7, 9]}, {nome: "Carlos", notas: [5, 6, 7]}]));
// [ {nome: "Ana", media: 8, situacao: "APROVADO"}, {nome: "Carlos", media: 6, situacao: "REPROVADO"} ]

console.log(processarNotas([{nome: "João", notas: [7, 7, 7]}]));
// [ {nome: "João", media: 7, situacao: "APROVADO"} ]

console.log(processarNotas([{nome: "Bia", notas: [10, 10, 9]}]));
// [ {nome: "Bia", media: 9.666666666666666, situacao: "APROVADO"} ]

console.log(processarNotas([]));
// []

console.log(processarNotas([{nome: "Rui", notas: [4, 5, 6]}, {nome: "Lia", notas: [9, 8, 7]}]));
// [ {nome: "Rui", media: 5, situacao: "REPROVADO"}, {nome: "Lia", media: 8, situacao: "APROVADO"} ]

console.log(processarNotas([{nome: "Leo", notas: [6, 7, 8]}]));
// [ {nome: "Leo", media: 7, situacao: "APROVADO"} ]

/* ============================================================
2️⃣ PRIMEIRO VALOR ACIMA DO LIMITE

Dado um array de números e um limite, encontre o primeiro
valor que seja MAIOR que esse limite.

Retorne um objeto:

{
  valor,
  posicao
}

Regras:
- "valor" é o primeiro número que satisfaz a condição
- "posicao" é o índice desse número
- se nenhum valor for maior que o limite, retorne:
  {
    valor: null,
    posicao: -1
  }
- se houver empate com o limite, não conta
- preserve o array original

============================================================ */

function primeiroAcima(nums, limite) {
  let valor = null;
  let posicao = -1;
  
  for (let i = 0 ; i < nums.length; i++) {
    if (valor === null && nums[i] > limite) {
      valor = nums[i];
      posicao = i;
    }
  }

  return {
    valor,
    posicao
  }
}

console.log(primeiroAcima([5, 8, 12, 20], 10));
// {valor: 12, posicao: 2}

console.log(primeiroAcima([10, 15, 20], 10));
// {valor: 15, posicao: 1}

console.log(primeiroAcima([5, 7, 9], 10));
// {valor: null, posicao: -1}

console.log(primeiroAcima([20, 5, 30], 10));
// {valor: 20, posicao: 0}

console.log(primeiroAcima([1, 10, 10, 11], 10));
// {valor: 11, posicao: 3}

console.log(primeiroAcima([], 10));
// {valor: null, posicao: -1}

/* ============================================================
3️⃣ DECODIFICADOR DE MENSAGEM
Uma mensagem possui palavras separadas por espaço.
Crie uma função que retorne uma NOVA string contendo somente
as palavras que começam com a letra "A" ou "a".
Regras:
- preserve a ordem das palavras
- a comparação deve ignorar maiúsculas/minúsculas
- palavras que não começam com A devem ser descartadas
- se nenhuma palavra atender, retorne uma string vazia
- não use filter()
- não use join()
============================================================ */

function filtrarMensagem(mensagem) {
  let palavras = mensagem.split(" ");
  let resultado = "";

  for (let palavra of palavras) {
    if (palavra[0] === "A" || palavra[0] === "a") {
      resultado += " " + palavra;
    }
  }

  return resultado.trim();
}

console.log(filtrarMensagem("Ana foi ao mercado ontem"));
// "Ana ao"

console.log(filtrarMensagem("casa azul amarela"));
// "azul amarela"

console.log(filtrarMensagem("Hoje teremos aula"));
// "aula"

console.log(filtrarMensagem("teste exemplo final"));
// ""

console.log(filtrarMensagem("Amanhã Alice vai ao aeroporto"));
// "Amanhã Alice ao aeroporto"

console.log(filtrarMensagem(""));
// ""