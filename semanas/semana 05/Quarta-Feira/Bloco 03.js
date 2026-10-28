
/*
🐛 DESAFIO 1 — Validador de códigos

Um sistema recebe códigos e precisa contar quantos são válidos.

Regras:
Um código é válido quando, após remover espaços das extremidades,
possui entre 4 e 8 caracteres e contém apenas letras e números.
*/

function contarCodigosValidos(codigos) {
  let total = 0;

  for (let codigo of codigos) {
    // 🐛 ERRO: trim() sozinho não altera a variável original.
    // CORREÇÃO: guardamos o resultado na variável codigo.
    codigo = codigo.trim();

    if (
      codigo.length >= 4 &&
      codigo.length <= 8 &&
      /^[a-zA-Z0-9]+$/.test(codigo)
    ) {
      total++;
    }
  }

  return total;
}

console.log(contarCodigosValidos([
  " AB12 ",
  "abc",
  "USER99",
  "abc@12",
  " 1234 "
]));

// Esperado: 3


/*
🐛 DESAFIO 2 — Atualização de usuários

Um sistema precisa atualizar a pontuação de alguns usuários
sem modificar os objetos originais.

Regras:
Atualize somente os usuários cujo id esteja na lista de atualizações.
Preserve os demais dados de cada usuário.
*/

function atualizarUsuarios(usuarios, atualizacoes) {
  let resultado = [];

  for (let usuario of usuarios) {
    let atualizacao = atualizacoes.find(
      item => item.id === usuario.id
    );

    if (atualizacao) {
      // 🐛 ERRO: Object.assign(usuario, atualizacao)
      // modificaria o objeto original.
      //
      // CORREÇÃO: usamos {} como primeiro argumento
      // para criar um novo objeto, sem alterar o original.
      usuario = Object.assign({}, usuario, atualizacao);
    }

    resultado.push(usuario);
  }

  return resultado;
}

const usuarios = [
  { id: 1, nome: "Ana", pontos: 10 },
  { id: 2, nome: "Bruno", pontos: 20 },
  { id: 3, nome: "Caio", pontos: 15 }
];

const atualizacoes = [
  { id: 1, pontos: 30 },
  { id: 3, pontos: 25 }
];

console.log(atualizarUsuarios(usuarios, atualizacoes));
// Esperado:
// [
//   { id: 1, nome: "Ana", pontos: 30 },
//   { id: 2, nome: "Bruno", pontos: 20 },
//   { id: 3, nome: "Caio", pontos: 25 }
// ]

console.log(usuarios[0].pontos, usuarios[2].pontos);
// Esperado: 10 15


/*
🐛 DESAFIO 3 — Primeira nota abaixo da média

Uma escola precisa localizar a primeira nota inferior a 5.

Regra:
Se nenhuma nota for inferior a 5, retorne -1.
*/

function primeiraNotaBaixa(notas) {
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 5) {
      return i;
    }

    // 🐛 ERRO: return -1 estava dentro do for.
    // Isso encerraria a função logo após verificar
    // a primeira nota, caso ela não fosse menor que 5.
  }

  // CORREÇÃO: só retorna -1 depois de verificar todas as notas.
  return -1;
}

console.log(primeiraNotaBaixa([8, 7, 3, 9]));
// Esperado: 2

console.log(primeiraNotaBaixa([6, 8, 5, 7]));
// Esperado: -1

console.log(primeiraNotaBaixa([]));
// Esperado: -1


/*
🐛 DESAFIO 4 — Soma das bordas

Uma matriz representa os valores de um painel.
O sistema precisa somar os elementos que ficam nas bordas,
sem contar duas vezes os cantos.

Regra:
Considere como borda a primeira e a última linha,
além da primeira e da última coluna.
*/

function somarBordas(matriz) {
  let soma = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (
        i === 0 ||
        i === matriz.length - 1 ||
        j === 0 ||
        // 🐛 ERRO original: length - 2 indicava
        // a penúltima coluna.
        //
        // CORREÇÃO: length - 1 indica a última coluna.
        j === matriz[i].length - 1
      ) {
        // O elemento é somado uma única vez,
        // mesmo quando pertence a duas bordas.
        soma += matriz[i][j];
      }
    }
  }

  return soma;
}

console.log(somarBordas([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 1, 2, 3]
]));

// 🐛 ATENÇÃO: o resultado esperado original era 35,
// mas a soma correta dessa matriz é 38.
// 1 + 2 + 3 + 4 + 5 + 8 + 9 + 1 + 2 + 3 = 38


/*
🐛 DESAFIO 5 — Normalização de nomes

Um sistema precisa armazenar nomes sem espaços nas extremidades
e em letras minúsculas.

Regra:
Devolva um novo array, sem modificar o array original.
*/

function normalizarNomes(nomes) {
  let resultado = [];

  for (let nome of nomes) {
    // 🐛 ERRO: trim() e toLowerCase() retornam novas strings,
    // mas o resultado não estava sendo utilizado.
    //
    // CORREÇÃO: adicionamos a string transformada ao array.
    resultado.push(nome.trim().toLowerCase());
  }

  return resultado;
}

const nomes = [" Ana ", "BRUNO", "  Caio"];

console.log(normalizarNomes(nomes));
// Esperado: ["ana", "bruno", "caio"]

console.log(nomes);
// Esperado: [" Ana ", "BRUNO", "  Caio"]


/*
🐛 DESAFIO 6 — Alerta de estoque

Uma loja precisa identificar produtos cujo estoque atual
está abaixo do mínimo recomendado.

Regras:
Um produto deve gerar alerta quando estoque < minimo.
Retorne os nomes dos produtos que precisam de reposição.
Preserve a ordem original.
*/

function produtosEmAlerta(produtos) {
  let resultado = [];

  for (let produto of produtos) {
    // 🐛 ERRO original: a condição usava >,
    // identificando produtos com estoque acima do mínimo.
    //
    // CORREÇÃO: usamos < para encontrar estoque insuficiente.
    if (produto.estoque < produto.minimo) {
      resultado.push(produto.nome);
    }
  }

  return resultado;
}

console.log(produtosEmAlerta([
  { nome: "Teclado", estoque: 3, minimo: 5 },
  { nome: "Mouse", estoque: 8, minimo: 4 },
  { nome: "Monitor", estoque: 2, minimo: 2 },
  { nome: "Cabo", estoque: 1, minimo: 6 }
]));

// Esperado: ["Teclado", "Cabo"]