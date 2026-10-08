/* ============================================================
🟥 B3 — CAÇA-BUG

6 questões
Regra:
- encontre o bug;
- faça a menor correção possível;
- não reescreva a função;
- não altere os testes.
============================================================ */


/* ============================================================
1️⃣ CONTROLE DE ACESSO

O sistema deve liberar somente quem:
- tem idade >= 18
- E possui ingresso ativo.

O código abaixo está permitindo pessoas que não deveriam entrar.

Corrija o bug.

============================================================ */

function podeEntrar(pessoa) {
  // ❌ ERRO: foi usado "||" (OU).
  // Isso permite a entrada se apenas UMA das condições for verdadeira.
  //
  // Exemplo:
  // idade 20 + ingresso falso → entraria, mas não deveria.
  //
  // ✅ CORREÇÃO: usar "&&" (E).
  if (pessoa.idade >= 18 && pessoa.ingressoAtivo === true) {
    return true;
  }

  return false;
}

console.log(podeEntrar({idade: 20, ingressoAtivo: true}));
// true

console.log(podeEntrar({idade: 20, ingressoAtivo: false}));
// false

console.log(podeEntrar({idade: 16, ingressoAtivo: true}));
// false

console.log(podeEntrar({idade: 16, ingressoAtivo: false}));
// false

console.log(podeEntrar({idade: 18, ingressoAtivo: true}));
// true

console.log(podeEntrar({idade: 17, ingressoAtivo: false}));
// false


/* ============================================================
2️⃣ PRIMEIRO RESULTADO

A função deve retornar o primeiro número que seja:

- maior ou igual a 50.

Caso nenhum número satisfaça a condição, retorne null.

Existe um erro no código.

Corrija apenas o necessário.

============================================================ */

function primeiroResultado(nums) {
  for (let numero of nums) {

    // ❌ ERRO: ">" significa MAIOR que 50.
    // Mas o enunciado pede MAIOR OU IGUAL a 50.
    //
    // Por isso, o número 50 estava sendo ignorado.
    //
    // ✅ CORREÇÃO: usar ">=".
    if (numero >= 50) {
      return numero;
    }
  }

  return null;
}

console.log(primeiroResultado([10, 20, 60, 80]));
// 60

console.log(primeiroResultado([50, 10, 20]));
// 50

console.log(primeiroResultado([49, 48, 47]));
// null

console.log(primeiroResultado([10, 50, 70]));
// 50

console.log(primeiroResultado([]));
// null

console.log(primeiroResultado([100, 50]));
// 100


/* ============================================================
3️⃣ ATUALIZAÇÃO DE CADASTRO

A função deve criar uma cópia do usuário e alterar somente
a idade da cópia.

O usuário original NÃO pode ser alterado.

Existe um bug relacionado à referência do objeto.

Corrija.

============================================================ */

function atualizarIdade(usuario, novaIdade) {

  // ❌ ERRO:
  // "resultado = usuario" não cria uma cópia.
  // As duas variáveis passam a apontar para o MESMO objeto.
  //
  // Por isso, alterar resultado.idade também altera usuario.idade.
  //
  // ✅ CORREÇÃO:
  // Criar um novo objeto copiando as propriedades de usuario.
  let resultado = {...usuario};

  resultado.idade = novaIdade;

  return resultado;
}

let usuario1 = {
  nome: "Ana",
  idade: 20
};

console.log(atualizarIdade(usuario1, 25));
// {nome: "Ana", idade: 25}

console.log(usuario1);
// {nome: "Ana", idade: 20}

let usuario2 = {
  nome: "Bruno",
  idade: 30
};

console.log(atualizarIdade(usuario2, 40));
// {nome: "Bruno", idade: 40}

console.log(usuario2);
// {nome: "Bruno", idade: 30}

console.log(atualizarIdade({nome: "Carlos", idade: 18}, 21));
// {nome: "Carlos", idade: 21}

console.log(atualizarIdade({nome: "Davi", idade: 50}, 51));
// {nome: "Davi", idade: 51}


/* ============================================================
4️⃣ CONTROLE DE SALDO

Uma retirada só pode acontecer se o saldo for suficiente.

O código está permitindo que o saldo fique negativo.

Corrija o bug.

============================================================ */

function retirar(saldo, valor) {

  // ❌ ERRO:
  // Aqui só está sendo verificado se o valor é maior que 0.
  // Isso permite retirar mais dinheiro do que existe no saldo.
  //
  // Exemplo:
  // saldo = 100
  // valor = 150
  //
  // Resultado atual: -50
  //
  // ✅ CORREÇÃO:
  // Além de valor > 0, o saldo precisa ser suficiente.
  if (valor > 0 && valor <= saldo) {
    saldo -= valor;
  }

  return saldo;
}

console.log(retirar(100, 30));
// 70

console.log(retirar(100, 100));
// 0

console.log(retirar(100, 150));
// 100

console.log(retirar(50, 20));
// 30

console.log(retirar(10, 11));
// 10

console.log(retirar(0, 5));
// 0


/* ============================================================
5️⃣ PRIMEIRO PICO

Um pico é um elemento que é:

- maior que o elemento anterior;
- E maior que o elemento seguinte.

A função deve retornar o primeiro pico encontrado.

Os extremos não podem ser considerados picos.

Existe um bug na condição.

Corrija.

============================================================ */

function primeiroPico(nums) {
  for (let i = 1; i < nums.length - 1; i++) {

    // ❌ ERRO: foi usado "||" (OU).
    //
    // O elemento precisa ser maior que o ANTERIOR
    // E também maior que o SEGUINTE.
    //
    // Com "||", basta ser maior que apenas um dos lados.
    //
    // ✅ CORREÇÃO: usar "&&".
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return {
        valor: nums[i],
        posicao: i
      };
    }
  }

  return null;
}

console.log(primeiroPico([1, 3, 1]));
// {valor: 3, posicao: 1}

console.log(primeiroPico([1, 2, 3, 2]));
// {valor: 3, posicao: 2}

console.log(primeiroPico([5, 3, 1]));
// null

console.log(primeiroPico([1, 2, 2, 1]));
// null

console.log(primeiroPico([4, 1, 5, 2]));
// {valor: 5, posicao: 2}

console.log(primeiroPico([1, 2, 3]));
// null


/* ============================================================
6️⃣ CONTADOR DE POSITIVOS

Conte somente os números estritamente positivos.

Zero NÃO é positivo.

Existe um erro na condição.

Corrija.

============================================================ */

function contarPositivos(nums) {
  let quantidade = 0;

  for (let numero of nums) {

    // ❌ ERRO: ">=" também considera o ZERO.
    //
    // Exemplo:
    // 0 >= 0 → true
    //
    // Mas o enunciado diz que zero NÃO é positivo.
    //
    // ✅ CORREÇÃO: usar ">".
    if (numero > 0) {
      quantidade++;
    }
  }

  return quantidade;
}

console.log(contarPositivos([1, 2, 3]));
// 3

console.log(contarPositivos([-1, -2, -3]));
// 0

console.log(contarPositivos([0, 1, -1, 2]));
// 2

console.log(contarPositivos([0, 0, 0]));
// 0

console.log(contarPositivos([]));
// 0

console.log(contarPositivos([-5, 10, 0, 20, -2]));
// 2
