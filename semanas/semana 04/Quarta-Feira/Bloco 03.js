// ==================================================
// BLOCO 3 — CAÇA-BUG
// ==================================================


// ==================================================
// QUESTÃO 1 — VALIDAÇÃO DE ACESSO
// ==================================================

/*
Um sistema deve permitir o acesso somente quando o usuário
estiver ativo.

A função verificarAcesso(usuario) deve retornar:
- true, se ativo for true;
- false, caso contrário.

Encontre e corrija o erro sem reescrever a função.
*/

function verificarAcesso(usuario) {
  // ERRO: Usava o operador de atribuição (=) em vez de comparação (===).
  if (usuario.ativo === true) {
    return true;
  }

  return false;
}

// TESTES
console.log(verificarAcesso({ nome: "Ana", ativo: true }));
// RESULTADO ESPERADO: true

console.log(verificarAcesso({ nome: "Beto", ativo: false }));
// RESULTADO ESPERADO: false


// ==================================================
// QUESTÃO 2 — CÁLCULO DE TAXA
// ==================================================

/*
Uma loja cobra uma taxa fixa de 5 reais sobre o valor
de cada pedido.

A função calcularTotal(valor) deve retornar o valor
do pedido somado à taxa.

Exemplos:
100 -> 105
40  -> 45

Encontre e corrija o erro.
*/

function calcularTotal(valor) {
  let taxa = 5;
  // ERRO: Estava subtraindo a taxa (-) em vez de somar (+).
  return valor + taxa;
}

// TESTES
console.log(calcularTotal(100));
// RESULTADO ESPERADO: 105

console.log(calcularTotal(40));
// RESULTADO ESPERADO: 45


// ==================================================
// QUESTÃO 3 — PRIMEIRO NOME
// ==================================================

/*
Uma plataforma recebe uma lista de nomes e precisa retornar
o primeiro nome cadastrado.

A função obterPrimeiroNome(nomes) deve:
- retornar o primeiro nome do array;
- retornar null se o array estiver vazio.

Encontre e corrija o erro.
*/

function obterPrimeiroNome(nomes) {
  if (nomes.length === 0) {
    return null;
  }

  // ERRO: Retornava o último elemento do array (length - 1) em vez do primeiro (índice 0).
  return nomes[0];
}

// TESTES
console.log(obterPrimeiroNome(["Ana", "Beto", "Caio"]));
// RESULTADO ESPERADO: "Ana"

console.log(obterPrimeiroNome(["Lia"]));
// RESULTADO ESPERADO: "Lia"

console.log(obterPrimeiroNome([]));
// RESULTADO ESPERADO: null


// ==================================================
// QUESTÃO 4 — TOTAL DE PRODUTOS
// ==================================================

/*
Um sistema precisa calcular a quantidade total de unidades
disponíveis em um estoque.

Cada produto possui:
- nome;
- quantidade.

A função calcularUnidades(produtos) deve retornar a soma
das quantidades de todos os produtos.

Encontre e corrija o erro.
*/

function calcularUnidades(produtos) {
  let total = 0;

  for (let produto of produtos) {
    // ERRO: Atribuía o valor diretamente (=) sobrescrevendo a cada volta, em vez de acumular (+=).
    total += produto.quantidade;
  }

  return total;
}

// TESTES
console.log(calcularUnidades([
  { nome: "Teclado", quantidade: 3 },
  { nome: "Mouse", quantidade: 5 },
  { nome: "Monitor", quantidade: 2 }
]));
// RESULTADO ESPERADO: 10

console.log(calcularUnidades([
  { nome: "Cabo", quantidade: 4 }
]));
// RESULTADO ESPERADO: 4

console.log(calcularUnidades([]));
// RESULTADO ESPERADO: 0


// ==================================================
// QUESTÃO 5 — CLASSIFICAÇÃO DE IDADE
// ==================================================

/*
Um sistema classifica uma pessoa como adulta quando ela
tem 18 anos ou mais.

A função verificarMaioridade(idade) deve retornar:
- "ADULTO", se idade for maior ou igual a 18;
- "MENOR", se idade for menor que 18.

Encontre e corrija o erro.
*/

function verificarMaioridade(idade) {
  // ERRO: A condição usava apenas maior que (> 18) em vez de maior ou igual (>= 18).
  if (idade >= 18) {
    return "ADULTO";
  }

  return "MENOR";
}

// TESTES
console.log(verificarMaioridade(20));
// RESULTADO ESPERADO: "ADULTO"

console.log(verificarMaioridade(18));
// RESULTADO ESPERADO: "ADULTO"

console.log(verificarMaioridade(16));
// RESULTADO ESPERADO: "MENOR"


// ==================================================
// QUESTÃO 6 — CADASTRO DE PARTICIPANTES
// ==================================================

/*
Uma plataforma recebe participantes com nome e idade.

A função cadastrarParticipantes(participantes) deve retornar
um novo array contendo objetos com:
- nome;
- idade.

Os objetos retornados devem preservar essas duas informações.
Não altere o array nem os objetos originais.

Encontre e corrija o erro.
*/

function cadastrarParticipantes(participantes) {
  let resultado = [];

  for (let participante of participantes) {
    // ERRO: Adicionava apenas a string 'nome' (participante.nome) em vez de adicionar o objeto completo.
    resultado.push(participante);
  }

  return resultado;
}

// TESTES
console.log(cadastrarParticipantes([
  { nome: "Ana", idade: 22 },
  { nome: "Beto", idade: 17 }
]));
// RESULTADO ESPERADO:
// [
//   { nome: "Ana", idade: 22 },
//   { nome: "Beto", idade: 17 }
// ]

console.log(cadastrarParticipantes([]));
// RESULTADO ESPERADO: []