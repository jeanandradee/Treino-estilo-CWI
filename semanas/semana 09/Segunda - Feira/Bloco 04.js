/* ========================================
   B4 — SIMULAÇÃO PRÁTICA CWI
   ========================================
   Q1 — Validador de senha
Crie uma função que recebe uma senha.
A senha será válida quando atender
a TODOS os critérios:
- Possuir pelo menos 8 caracteres.
- Possuir pelo menos uma letra maiúscula.
- Possuir pelo menos um número.
- Não possuir espaços.
Retorne true se for válida e false caso contrário.
*/

function validarSenha(senha) {

  let temMaiuscula = false;
  let temNumero = false;
  let temEspaco = false;

  for (let letra of senha) {

    if (letra >= "A" && letra <= "Z") {
      temMaiuscula = true;
    }

    if (letra >= "0" && letra <= "9") {
      temNumero = true;
    }

    if (letra === " ") {
      temEspaco = true;
    }
  }


  return senha.length >= 8 &&
    temMaiuscula &&
    temNumero &&
    temEspaco === false;
}

console.log(validarSenha("JavaScript8"));   // true
console.log(validarSenha("javascript8"));   // false
console.log(validarSenha("Java Script8"));  // false
console.log(validarSenha("Java8"));         // false 

/* ========================================
   Q2 — Busca de produtos
Uma função recebe um array de produtos
e o nome de um produto procurado.
Cada produto possui:
- nome
- preco
- disponivel
Retorne o objeto completo do primeiro produto
que atender às duas condições:
- O nome deve corresponder ao nome procurado,
  ignorando maiúsculas e minúsculas.
- O produto deve estar disponível (true).
Se nenhum produto atender às condições,
retorne null.
*/

function buscarProduto(produtos, nomeProcurado) {

  for (let produto of produtos) {

    if (
      produto.nome.toLowerCase() === nomeProcurado.toLowerCase() &&
      produto.disponivel === true
    ) {
      return produto;
    }
  }

  return null;
}

console.log(buscarProduto([
  { nome: "Teclado", preco: 100, disponivel: false },
  { nome: "Mouse", preco: 50, disponivel: true },
  { nome: "MOUSE", preco: 45, disponivel: true }
], "mouse")); // { nome: "Mouse", preco: 50, disponivel: true }

console.log(buscarProduto([
  { nome: "Monitor", preco: 800, disponivel: false }
], "Monitor")); // null


/* ========================================
   Q3 — Relatório de desempenho
Uma função recebe um array de notas
de um estudante.
Regras:
- Considere somente notas entre 0 e 10,
  incluindo os limites.
- Notas inválidas devem ser ignoradas.
- Calcule a média das notas válidas.
- Se não existir nenhuma nota válida,
  a média deve ser 0.
- O estudante será aprovado se a média
  for maior ou igual a 7.
Retorne um objeto contendo:
- notasValidas: quantidade de notas válidas.
- media: média das notas válidas.
- aprovado: true ou false.
Não arredonde a média.
*/

function analisarDesempenho(notas) {

  let soma = 0;
  let notasValidas = 0;

  for (let nota of notas) {

    if (nota >= 0 && nota <= 10) {
      soma += nota;
      notasValidas++;
    }
  }

  let media = notasValidas === 0
    ? 0
    : soma / notasValidas;

  let aprovado = media >= 7;

  return {
    notasValidas,
    media,
    aprovado
  };
}

console.log(analisarDesempenho([8, 7, 9, 11, -2]));   // { notasValidas: 3, media: 8, aprovado: true }
console.log(analisarDesempenho([5, 6, 7]));           // { notasValidas: 3, media: 6, aprovado: false }
console.log(analisarDesempenho([12, -1, 15]));        // { notasValidas: 0, media: 0, aprovado: false }