/* ============================================================
🟦 B2 — MECÂNICAS VARIADAS
6 questões
Estilo CWI: problema fechado, objetivo e com uma lógica central.
Aqui a ideia é variar o tipo de raciocínio:
- processamento de string
- reconstrução de dados
- matriz
- acumulação por regra
- comparação entre estruturas
- processamento em etapas
Faça sem solução/ajuda primeiro.
============================================================ */


/* ============================================================
1️⃣ DECODIFICADOR DE MENSAGEM
Uma mensagem usa o caractere "#" como marcador.
Quando "#" aparecer:
- o caractere imediatamente depois dele deve ser ignorado;
- o "#" também não entra no resultado.
Exemplo:
"A#BC" → "AC"
Porque "#" ignora o "B".
Se "#" estiver no último caractere, simplesmente ignore o "#".
Retorne a mensagem decodificada.
============================================================ */

function decodificarMensagem(texto) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "#") {
      if (texto[i + 1] === "#") {
        continue;
      }
      i++;
      continue;
    }

    resultado += texto[i];
  }

  return resultado;
}

console.log(decodificarMensagem("A#BC")); // "AC"

console.log(decodificarMensagem("ABC")); // "ABC"

console.log(decodificarMensagem("#ABC")); // "BC"

console.log(decodificarMensagem("AB#CD#EF")); // "ABDF"

console.log(decodificarMensagem("ABC#")); // "ABC"

console.log(decodificarMensagem("##ABC")); // "BC"


/* ============================================================
2️⃣ REORGANIZADOR DE MATRIZ
Receba uma matriz quadrada.
Crie um novo array contendo os elementos da DIAGONAL PRINCIPAL.
A diagonal principal é formada pelos elementos em que:
linha === coluna
Não altere a matriz original.
============================================================ */

function diagonalPrincipal(matriz) {
  let resultado = [];
  for (let i = 0; i < matriz.length; i++) {
    resultado.push(matriz[i][i]);
  }

  return resultado;
}

console.log(diagonalPrincipal([ [1, 2], [3, 4]])); // [1, 4]

console.log(diagonalPrincipal([ [1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1, 5, 9]

console.log(diagonalPrincipal([ [10] ])); // [10]

console.log(diagonalPrincipal([ [5, 8, 2, 1], [4, 7, 9, 3], [6, 0, 2, 8], [1, 5, 4, 6]])); // [5, 7, 2, 6]

console.log(diagonalPrincipal([ [2, 4, 6], [8, 10, 12], [14, 16, 18] ])); // [2, 10, 18]

console.log(diagonalPrincipal([])); // []


/* ============================================================
3️⃣ CALCULADORA DE SALDO
Um sistema recebe movimentações:
{
  tipo: "ENTRADA" ou "SAIDA",
  valor: número
}
O saldo começa em 0.
Regras:
- ENTRADA soma o valor;
- SAIDA subtrai o valor somente se houver saldo suficiente;
- uma SAIDA sem saldo suficiente deve ser ignorada.
Além do saldo final, conte quantas SAIDAS foram realmente
realizadas.
Retorne:
{
  saldo,
  saidasRealizadas
}
============================================================ */

function calcularSaldo(movimentos) {
  let saldo = 0;
  let saidasRealizadas = 0;

  for (let {tipo, valor } of movimentos) {
    if (tipo === "ENTRADA") {
       saldo += valor;
    } else if (tipo === "SAIDA" && saldo >= valor) {
       saldo -= valor;
       saidasRealizadas ++;
    }
  }

  return {saldo, saidasRealizadas};
}

console.log(calcularSaldo([ {tipo: "ENTRADA", valor: 100}, {tipo: "SAIDA", valor: 30}]));
// {saldo: 70, saidasRealizadas: 1}

console.log(calcularSaldo([ {tipo: "SAIDA", valor: 20}, {tipo: "ENTRADA", valor: 50}]));
// {saldo: 50, saidasRealizadas: 0}

console.log(calcularSaldo([ {tipo: "ENTRADA", valor: 100}, {tipo: "SAIDA", valor: 150}]));
// {saldo: 100, saidasRealizadas: 0}

console.log(calcularSaldo([ {tipo: "ENTRADA", valor: 100}, {tipo: "SAIDA", valor: 40}, {tipo: "SAIDA", valor: 30}]));
// {saldo: 30, saidasRealizadas: 2}

console.log(calcularSaldo([ {tipo: "ENTRADA", valor: 50}, {tipo: "X", valor: 100}, {tipo: "SAIDA", valor: 20}]));
// {saldo: 30, saidasRealizadas: 1}

console.log(calcularSaldo([]));
// {saldo: 0, saidasRealizadas: 0}


/* ============================================================
4️⃣ COMPARADOR DE LISTAS
Você recebe duas listas de números.
Retorne um objeto indicando:
{
  iguais,
  apenasPrimeira,
  apenasSegunda
}
Regras:
- "iguais" deve ser true somente se as duas listas tiverem
  exatamente os mesmos valores na mesma ordem;
- "apenasPrimeira" deve conter os valores que aparecem na
  primeira lista mas não aparecem na segunda;
- "apenasSegunda" deve conter os valores que aparecem na
  segunda lista mas não aparecem na primeira.
Mantenha a ordem de cada lista original.
Considere apenas a existência do valor, não a quantidade
de repetições.
============================================================ */

function compararListas(primeira, segunda) {
  let apenasPrimeira = [];
  let apenasSegunda = [];

  for (let i = 0; i < primeira.length; i++) {
    let existe = false;

    for (let j = 0; j < segunda.length; j++) {
      if (primeira[i] === segunda[j]) {
        existe = true;
      }
    }

    if (!existe) {
      apenasPrimeira.push(primeira[i]);
    }
  }

  for (let i = 0; i < segunda.length; i++) {
    let existe = false;

    for (let j = 0; j < primeira.length; j++) {
      if (segunda[i] === primeira[j]) {
        existe = true;
      }
    }

    if (!existe) {
      apenasSegunda.push(segunda[i]);
    }
  }

  let iguais = true;

  if (primeira.length !== segunda.length) {
    iguais = false;
  } else {
    for (let i = 0; i < primeira.length; i++) {
      if (primeira[i] !== segunda[i]) {
        iguais = false;
      }
    }
  }

  return { iguais, apenasPrimeira, apenasSegunda };
}

console.log(compararListas( [1, 2, 3], [1, 2, 3] )); // { iguais: true, apenasPrimeira: [], apenasSegunda: [] }

console.log(compararListas( [1, 2, 3], [1, 3, 4] )); // { iguais: false, apenasPrimeira: [2], apenasSegunda: [4] }

console.log(compararListas( [5, 5, 2], [5, 2] ));
// { iguais: false, apenasPrimeira: [], apenasSegunda: [] }

console.log(compararListas( [], [1, 2] ));
// { iguais: false, apenasPrimeira: [], apenasSegunda: [1, 2] }

console.log(compararListas( [1, 2], [] ));
// { iguais: false, apenasPrimeira: [1, 2], apenasSegunda: [] }

console.log(compararListas( [1, 2, 3], [1, 2] ));
// { iguais: false, apenasPrimeira: [3], apenasSegunda: [] }


/* ============================================================
5️⃣ PROCESSADOR DE NOTAS
Cada aluno possui:
{
  nome,
  notas: [nota1, nota2, nota3]
}
Para cada aluno:
1. calcule a média das três notas;
2. se a média for >= 7, situação = "APROVADO";
3. caso contrário, situação = "REPROVADO".
Retorne um novo array com:
{
  nome,
  media,
  situacao
}
A média deve ser arredondada para 2 casas decimais.
Não altere os objetos originais.
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

console.log(processarNotas([ {nome: "Ana", notas: [7, 8, 9]} ]));// [{nome: "Ana", media: 8, situacao: "APROVADO"}]

console.log(processarNotas([ {nome: "Bruno", notas: [5, 6, 7]} ])); // [{nome: "Bruno", media: 6, situacao: "REPROVADO"}]

console.log(processarNotas([ {nome: "Carlos", notas: [7, 7, 7]} ])); // [{nome: "Carlos", media: 7, situacao: "APROVADO"}]

console.log(processarNotas([ {nome: "Davi", notas: [10, 8, 9]}, {nome: "Eva", notas: [4, 5, 6]} ]));
// [ {nome: "Davi", media: 9, situacao: "APROVADO"}, {nome: "Eva", media: 5, situacao: "REPROVADO"} ]

console.log(processarNotas([ {nome: "Fabi", notas: [6.5, 7.5, 7]} ]));
// [{nome: "Fabi", media: 7, situacao: "APROVADO"}]

console.log(processarNotas([]));
// []


/* ============================================================
6️⃣ SIMULADOR DE ESTOQUE POR PRODUTO
Receba uma lista de movimentações:
{
  produto,
  tipo,
  quantidade
}
O estoque começa vazio.
Regras:
ENTRADA → soma a quantidade ao produto.
SAIDA → remove a quantidade somente se houver estoque
suficiente.
Se não houver estoque suficiente, ignore a movimentação.
Produtos ainda não existentes começam com estoque 0.
Retorne o objeto final de estoque.
Movimentações com tipo desconhecido devem ser ignoradas.
============================================================ */

function simularEstoque(movimentos) {
  let estoque = {};

  for (let { produto, tipo, quantidade } of movimentos) {

    if (estoque[produto] === undefined) {
      estoque[produto] = 0;
    }

    if (tipo === "ENTRADA") {
      estoque[produto] += quantidade;
    }

    if (tipo === "SAIDA") {
      if (estoque[produto] >= quantidade) {
        estoque[produto] -= quantidade;
      }
    }
  }

  return estoque;
}

console.log(simularEstoque([ {produto: "A", tipo: "ENTRADA", quantidade: 10}, {produto: "A", tipo: "SAIDA", quantidade: 3} ]));
// {A: 7}

console.log(simularEstoque([ {produto: "A", tipo: "SAIDA", quantidade: 5} ]));
// {A: 0}

console.log(simularEstoque([ {produto: "A", tipo: "ENTRADA", quantidade: 10}, {produto: "B", tipo: "ENTRADA", quantidade: 5} ]));
// {A: 10, B: 5}

console.log(simularEstoque([ {produto: "A", tipo: "ENTRADA", quantidade: 10}, {produto: "A", tipo: "SAIDA", quantidade: 15},
  {produto: "A", tipo: "SAIDA", quantidade: 4} ]));
// {A: 6}

console.log(simularEstoque([ {produto: "A", tipo: "ENTRADA", quantidade: 5}, {produto: "A", tipo: "X", quantidade: 100} ]));
// {A: 5}

console.log(simularEstoque([]));
// {}