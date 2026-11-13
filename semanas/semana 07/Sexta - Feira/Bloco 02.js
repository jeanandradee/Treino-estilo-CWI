/* Q1 — Conversor de Tempo
Crie uma função que recebe um número inteiro representando
uma quantidade de segundos.
Retorne um objeto contendo:
- horas
- minutos
- segundos
O tempo deve ser convertido corretamente.
Exemplo:
3665 segundos = 1 hora, 1 minuto e 5 segundos.
*/

function converterTempo(totalSegundos) {
  const horas = Math.floor(totalSegundos / 3600);

  const minutos = Math.floor((totalSegundos % 3600) / 60);

  const segundos = totalSegundos % 60;

  return {
    horas,
    minutos,
    segundos
  };
}

console.log(converterTempo(3665));  // { horas: 1, minutos: 1, segundos: 5 }
console.log(converterTempo(59));    // { horas: 0, minutos: 0, segundos: 59 }
console.log(converterTempo(7200));  // { horas: 2, minutos: 0, segundos: 0 }

/* Q2 — Validador de Senha
Crie uma função que recebe uma senha e retorna true ou false.
A senha será considerada válida quando cumprir TODAS
as condições:
1. Possuir pelo menos 8 caracteres.
2. Possuir pelo menos uma letra maiúscula.
3. Possuir pelo menos uma letra minúscula.
4. Possuir pelo menos um número.
5. Não possuir espaços.
Não é necessário exigir caracteres especiais.
*/

function validarSenha(senha) {
  let temMaiusc = false;
  let temMinusc = false;
  let temNum = false;

  for (let caracter of senha) {
    if (caracter >= "A" && caracter <= "Z") {
      temMaiusc = true;
    }

    if (caracter >= "a" && caracter <= "z") {
      temMinusc = true;
    }

    if (caracter >= "0" && caracter <= "9") {
      temNum = true;
    }
  }

  return senha.length >= 8 &&
         temMaiusc &&
         temMinusc &&
         temNum &&
         !senha.includes(" ");
}

console.log(validarSenha("JavaScript123")); // true
console.log(validarSenha("javascript123")); // false
console.log(validarSenha("Java 123"));      // false
console.log(validarSenha("Abc123"));        // false

/* Q3 — Análise de Matriz
Crie uma função que recebe uma matriz quadrada de números.
Retorne um objeto contendo:
- diagonalPrincipal: array com os elementos da diagonal principal.
- somaDiagonal: soma dos elementos da diagonal principal.
- maiorElemento: maior número encontrado na matriz.
A diagonal principal é formada pelos elementos em que
o índice da linha é igual ao índice da coluna.
*/

function analisarMatriz(matriz) {
  let diagonalPrincipal = [];
  let somaDiagonal = 0;
  let maiorElemento = null;

  for (let i = 0; i < matriz.length; i++) {
    diagonalPrincipal.push(matriz[i][i]);
    somaDiagonal += matriz[i][i];

    for (let j = 0; j < matriz[i].length; j++) {
      if (maiorElemento === null || matriz[i][j] > maiorElemento) {
        maiorElemento = matriz[i][j];
      }
    }
  }

  return {
    diagonalPrincipal,
    somaDiagonal,
    maiorElemento
  }
}

console.log(analisarMatriz([ [5, 2, 8], [1, 9, 4], [7, 3, 6] ]));
// { diagonalPrincipal: [5, 9, 6], somaDiagonal: 20, maiorElemento: 9 }

console.log(analisarMatriz([ [10] ]));
// { diagonalPrincipal: [10], somaDiagonal: 10, maiorElemento: 10 }

/* Q4 — Organização de Biblioteca
Uma biblioteca possui uma lista de livros.
Cada livro contém:
- titulo
- autor
- ano
- disponivel
Crie uma função que recebe a lista e um ano.
Retorne um array contendo os títulos dos livros que:
1. Foram publicados a partir do ano informado,
   incluindo o próprio ano.
2. Estão disponíveis.
A ordem original deve ser preservada.
*/

function buscarLivros(livros, ano) {
  return livros.filter(livro => livro.disponivel && livro.ano >= ano).map(livro => livro.titulo);
}

console.log(buscarLivros([
  { titulo: "Livro A", autor: "Ana", ano: 2020, disponivel: true },
  { titulo: "Livro B", autor: "Carlos", ano: 2018, disponivel: true },
  { titulo: "Livro C", autor: "Pedro", ano: 2022, disponivel: false },
  { titulo: "Livro D", autor: "Marina", ano: 2021, disponivel: true }
], 2020));
// ["Livro A", "Livro D"]

/* Q5 — Campeonato de Pontuação
Um campeonato possui vários participantes.
Cada participante contém:
- nome
- vitorias
- empates
- derrotas
A pontuação é calculada assim:
- Vitória: 3 pontos.
- Empate: 1 ponto.
- Derrota: 0 pontos.
Crie uma função que recebe os participantes e retorna
um objeto contendo:
- classificacao: array com os participantes e suas pontuações.
- campeao: nome do participante com maior pontuação.
REGRAS:
1. A classificação deve ser ordenada da maior para a menor pontuação.
2. Em caso de empate, manter a ordem original dos participantes.
3. Se não houver participantes, campeao deve ser null.
4. Não modificar o array original.
Cada elemento de classificacao deve conter:
- nome
- pontos
*/

function gerarClassificacao(participantes) {
  const classificacao = participantes.map(p => ({
    nome: p.nome,
    pontos: p.vitorias * 3 + p.empates
  }));

  classificacao.sort((a, b) => b.pontos - a.pontos);

  const campeao = classificacao.length > 0
    ? classificacao[0].nome
    : null;

  return {
    classificacao,
    campeao
  };
}

console.log(gerarClassificacao([
  { nome: "Ana", vitorias: 3, empates: 1, derrotas: 0 },
  { nome: "Carlos", vitorias: 2, empates: 2, derrotas: 0 },
  { nome: "Pedro", vitorias: 3, empates: 1, derrotas: 1 },
  { nome: "Marina", vitorias: 1, empates: 2, derrotas: 2 }
]));

// {
//   classificacao: [
//     { nome: "Ana", pontos: 10 },
//     { nome: "Carlos", pontos: 8 },
//     { nome: "Pedro", pontos: 10 },
//     { nome: "Marina", pontos: 5 }
//   ],
//   campeao: "Ana"
// }