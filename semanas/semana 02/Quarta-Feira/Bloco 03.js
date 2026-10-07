/* ============================================================
🟥 B3 — CAÇA-BUG — TREINO DE QUARTA
REGRAS:
- Cada código possui UM erro lógico.
- Faça a menor correção possível.
- Não reescreva a solução inteira.
- Não altere os testes.
============================================================ */

/* ============================================================
1️⃣ CONTROLE DE ACESSO
REGRA:
Uma pessoa pode entrar somente se:
- idade >= 18
- e cadastro === true
O código abaixo possui um erro.
============================================================ */

function podeEntrar(pessoa) {

  // ❌ ERRO:
  // Foi usado "||" (OU).
  // Com OU, basta UMA das condições ser verdadeira.
  // Exemplo:
  // idade = 20
  // cadastro = false
  // idade >= 18 é true
  // cadastro === true é false
  // true || false = true
  // Mas a pessoa NÃO deveria entrar.
  // As DUAS condições precisam ser verdadeiras.
  // ✅ Correção mínima:
  // trocar || por &&

  if (pessoa.idade >= 18 && pessoa.cadastro === true) {
    return true;
  }

  return false;
}

console.log(podeEntrar({idade: 20, cadastro: true})); // true

console.log(podeEntrar({idade: 20, cadastro: false})); // false
 
console.log(podeEntrar({idade: 17, cadastro: true})); // false

console.log(podeEntrar({idade: 17, cadastro: false})); // false

console.log(podeEntrar({idade: 18, cadastro: true})); // true

console.log(podeEntrar({idade: 18, cadastro: false})); // false


/* ============================================================
2️⃣ PRIMEIRO VALOR
REGRA:
Retorne o primeiro número que seja:
- maior ou igual a 50
Se não existir, retorne -1.
============================================================ */

function primeiroValido(nums) {

  for (let i = 0; i < nums.length; i++) {

    // ❌ ERRO:
    // O código original usava:
    // nums[i] > 50
    // Isso significa "maior que 50".
    // Porém, a regra diz:
    // "maior OU IGUAL a 50".
    // Portanto, o número 50 precisa ser aceito.
    // Exemplo:
    // [10, 30, 50, 70]
    // O resultado esperado é 50.
    // ✅ Correção mínima:
    // trocar > por >=

    if (nums[i] >= 50) {
      return nums[i];
    }
  }

  return -1;
}

console.log(primeiroValido([10, 30, 50, 70]));// 50

console.log(primeiroValido([1, 2, 49])); // -1

console.log(primeiroValido([60, 70, 80])); // 60

console.log(primeiroValido([20, 50, 90])); // 50

console.log(primeiroValido([0, 10, 40])); // -1

console.log(primeiroValido([])); // -1


/* ============================================================
3️⃣ ATUALIZAÇÃO DE CADASTRO
REGRA:
A função deve retornar um NOVO objeto com o novo nome.
O objeto original NÃO pode ser alterado.
============================================================ */

function atualizarNome(usuario, novoNome) {

  // ❌ ERRO:
  // let resultado = usuario;
  // Isso NÃO cria um novo objeto.
  // "resultado" e "usuario" apontam para o mesmo objeto.
  // Então, quando fazemos:
  // resultado.nome = novoNome;
  // também estamos alterando "usuario".
  // ✅ Correção mínima:
  // criar uma cópia do objeto usando o spread (...).

  let resultado = {
    ...usuario
  };

  resultado.nome = novoNome;
  return resultado;
}

let usuario = {
  nome: "Ana",
  idade: 25
};

console.log(atualizarNome(usuario, "Bia"));
// {nome: "Bia", idade: 25}

console.log(usuario);
// {nome: "Ana", idade: 25}

console.log(atualizarNome( {nome: "Carlos", idade: 30}, "Davi"));
// {nome: "Davi", idade: 30}

console.log(atualizarNome( {nome: "Eva", idade: 20}, "Fabi"));
// {nome: "Fabi", idade: 20}

console.log(atualizarNome( {nome: "Gabi", idade: 18}, "Hugo"));
// {nome: "Hugo", idade: 18}

console.log(atualizarNome( {nome: "Iara", idade: 40}, "João"));
// {nome: "João", idade: 40}


/* ============================================================
4️⃣ CONTROLE DE SALDO
REGRA:
- ENTRADA → adiciona.
- SAIDA → só pode retirar se houver saldo suficiente.
- Se não houver saldo suficiente, ignore.
============================================================ */

function atualizarSaldo(saldo, movimentos) {

  for (let movimento of movimentos) {

    if (movimento.tipo === "ENTRADA") {
      saldo += movimento.valor;
    } else if (movimento.tipo === "SAIDA") {

      // ❌ ERRO:
      // O código original fazia:
      // saldo -= movimento.valor;
      // sem verificar se havia saldo suficiente.
      // Exemplo:
      // saldo = 100
      // saída = 150
      // 100 - 150 = -50
      // Isso é proibido pela regra.
      // A saída deve ser ignorada.
      // ✅ Correção mínima:
      // adicionar uma condição verificando o saldo.

      if (saldo >= movimento.valor) {
        saldo -= movimento.valor;
      }
    }
  }

  return saldo;
}

console.log(atualizarSaldo(100, [ {tipo: "SAIDA", valor: 30}]));
// 70

console.log(atualizarSaldo(100, [ {tipo: "SAIDA", valor: 150}]));
// 100

console.log(atualizarSaldo(50, [ {tipo: "ENTRADA", valor: 50}, {tipo: "SAIDA", valor: 70}]));
// 100

console.log(atualizarSaldo(0, [ {tipo: "SAIDA", valor: 10}, {tipo: "ENTRADA", valor: 20}]));
// 20

console.log(atualizarSaldo(200, [ {tipo: "SAIDA", valor: 100}, {tipo: "SAIDA", valor: 150}]));
// 100

console.log(atualizarSaldo(50, [ {tipo: "ENTRADA", valor: 30}, {tipo: "SAIDA", valor: 80}]));
// 80


/* ============================================================
5️⃣ PRIMEIRO PICO
REGRA:
Retorne o primeiro valor que seja MAIOR que os dois
vizinhos.
O primeiro e o último elemento nunca podem ser considerados
picos.
Se não existir, retorne -1.
============================================================ */

function primeiroPico(nums) {

  for (let i = 1; i < nums.length - 1; i++) {

    // ❌ ERRO:
    // O código original usava:
    // nums[i] > nums[i - 1] || nums[i] > nums[i + 1]
    // O "||" significa OU.
    // Mas um pico precisa ser MAIOR que os DOIS vizinhos.
    // Portanto, as duas comparações precisam ser verdadeiras.
    // Exemplo:
    // [1, 2, 3, 2, 1]
    // O 2 da posição 1:
    // 2 > 1 → true
    // 2 > 3 → false
    // true || false = true
    // O código errado consideraria 2 como pico.
    // Mas ele não é.
    // Precisamos usar &&.
    // ✅ Correção mínima:
    // trocar || por &&

    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return nums[i];
    }
  }

  return -1;
}

console.log(primeiroPico([1, 3, 2])); // 3

console.log(primeiroPico([1, 2, 3, 2, 1])); // 3

console.log(primeiroPico([5, 4, 3, 2, 1])); // -1

console.log(primeiroPico([1, 2, 2, 1])); // -1

console.log(primeiroPico([1, 5, 3, 4, 2])); // 5

console.log(primeiroPico([7, 7, 7])); // -1


/* ============================================================
6️⃣ CONTADOR DE POSITIVOS
REGRA:
Conte quantos números são ESTRITAMENTE positivos.
Zero e números negativos NÃO entram na contagem.
============================================================ */

function contarPositivos(nums) {
  let contador = 0;

  for (let num of nums) {

    // ❌ ERRO:
    //
    // O código original usava:
    //
    // num >= 0
    //
    // Isso considera o ZERO como positivo.
    //
    // Mas a regra diz:
    // "ESTRITAMENTE positivos".
    //
    // Estritamente positivo significa:
    //
    // num > 0
    //
    // Portanto:
    //
    // 5  → entra
    // 1  → entra
    // 0  → NÃO entra
    // -1 → NÃO entra
    //
    // ✅ Correção mínima:
    // trocar >= por >

    if (num > 0) {
      contador++;
    }
  }

  return contador;
}

console.log(contarPositivos([1, 2, 3]));// 3

console.log(contarPositivos([-1, 0, 1])); // 1

console.log(contarPositivos([0, 0, 0])); // 0

console.log(contarPositivos([-5, -2, -1])); // 0

console.log(contarPositivos([10, -2, 0, 4])); // 2

console.log(contarPositivos([])); // 0