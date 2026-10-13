// 1. Busca do primeiro elemento 🔎
/*
Uma função deve retornar o índice do primeiro número
negativo de um array.

Se não houver números negativos, retorne -1.
*/

function primeiroNegativo(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    // ERRO: estava usando > 0, que verifica números positivos.
    // CORREÇÃO: usar < 0 para encontrar números negativos.
    if (numeros[i] < 0) {
      return i;
    }
  }

  return -1;
}

console.log(primeiroNegativo([3, 2, -5, -8])); // 2
console.log(primeiroNegativo([1, 4, 7])); // -1
console.log(primeiroNegativo([-2, 5, -1])); // 0
console.log(primeiroNegativo([0, 0, -3])); // 2
console.log(primeiroNegativo([8, -4, 2])); // 1
console.log(primeiroNegativo([])); // -1


// 2. Controle de acesso 🔐
/*
O acesso só deve ser liberado quando:
- idade for maior ou igual a 18;
- cadastroAtivo for true.
*/

function podeEntrar(idade, cadastroAtivo) {
  // ERRO: || significa OU, permitindo entrar quando apenas
  // uma das condições é verdadeira.
  // CORREÇÃO: usar &&, pois as duas condições devem ser verdadeiras.
  if (idade >= 18 && cadastroAtivo === true) {
    return true;
  }

  return false;
}

console.log(podeEntrar(20, true)); // true
console.log(podeEntrar(17, true)); // false
console.log(podeEntrar(20, false)); // false
console.log(podeEntrar(18, true)); // true
console.log(podeEntrar(18, false)); // false
console.log(podeEntrar(15, false)); // false


// 3. Cópia de objeto 📋
/*
A função deve criar uma cópia independente do objeto,
alterar a idade da cópia e preservar o objeto original.
*/

function atualizarIdade(pessoa, novaIdade) {
  // ERRO: let copia = pessoa não cria outro objeto.
  // As duas variáveis apontam para o mesmo objeto.
  // CORREÇÃO: usar {...pessoa} para criar uma cópia independente.
  let copia = { ...pessoa };

  copia.idade = novaIdade;

  return {
    original: pessoa,
    atualizado: copia
  };
}

const pessoa1 = { nome: "Ana", idade: 20 };

console.log(atualizarIdade(pessoa1, 25));
// { original: { nome: "Ana", idade: 20 },
//   atualizado: { nome: "Ana", idade: 25 } }

console.log(atualizarIdade({ nome: "Bia", idade: 17 }, 18));
// { original: { nome: "Bia", idade: 17 },
//   atualizado: { nome: "Bia", idade: 18 } }

console.log(atualizarIdade({ nome: "Caio", idade: 30 }, 31));
// { original: { nome: "Caio", idade: 30 },
//   atualizado: { nome: "Caio", idade: 31 } }

console.log(atualizarIdade({ nome: "Duda", idade: 0 }, 1));
// { original: { nome: "Duda", idade: 0 },
//   atualizado: { nome: "Duda", idade: 1 } }

console.log(atualizarIdade({ nome: "Eva", idade: 45 }, 40));
// { original: { nome: "Eva", idade: 45 },
//   atualizado: { nome: "Eva", idade: 40 } }

console.log(atualizarIdade({ nome: "Leo", idade: 10 }, 10));
// { original: { nome: "Leo", idade: 10 },
//   atualizado: { nome: "Leo", idade: 10 } }


// 4. Saque bancário 💰
/*
O saque só pode acontecer se:
- o valor for maior que zero;
- o saldo for suficiente para cobrir o saque.

Se o saque for inválido, mantenha o saldo original.
*/

function sacar(saldo, valor) {
  // ERRO: verificava apenas se o valor era positivo,
  // permitindo que o saldo ficasse negativo.
  // CORREÇÃO: também verificar se há saldo suficiente.
  if (valor > 0 && saldo >= valor) {
    saldo -= valor;
  }

  return saldo;
}

console.log(sacar(100, 30)); // 70
console.log(sacar(100, 100)); // 0
console.log(sacar(100, 120)); // 100
console.log(sacar(50, 0)); // 50
console.log(sacar(50, -10)); // 50
console.log(sacar(0, 5)); // 0


// 5. Pico da sequência 📈
/*
Retorne o índice do primeiro pico de um array.

Um pico é um elemento estritamente maior que
seus dois vizinhos.

As extremidades nunca podem ser consideradas picos.
Se não houver pico, retorne -1.
*/

function primeiroPico(numeros) {
  for (let i = 1; i < numeros.length - 1; i++) {
    // ERRO: || verifica se o elemento é maior que apenas
    // um dos vizinhos, o que não caracteriza um pico.
    // CORREÇÃO: usar && para exigir que seja maior que ambos.
    if (
      numeros[i] > numeros[i - 1] &&
      numeros[i] > numeros[i + 1]
    ) {
      return i;
    }
  }

  return -1;
}

console.log(primeiroPico([1, 3, 2])); // 1
console.log(primeiroPico([1, 2, 3, 2])); // 2
console.log(primeiroPico([1, 2, 2, 1])); // -1
console.log(primeiroPico([5, 1, 4])); // -1
console.log(primeiroPico([1, 4, 2, 5, 1])); // 1
console.log(primeiroPico([7, 6, 5, 4])); // -1


// 6. Contagem de positivos ➕
/*
Conte quantos números são estritamente positivos.

Zero e números negativos não devem ser contados.
*/

function contarPositivos(numeros) {
  let contador = 0;

  for (let numero of numeros) {
    // ERRO: >= 0 também conta os zeros.
    // CORREÇÃO: usar > 0 para contar somente positivos.
    if (numero > 0) {
      contador++;
    }
  }

  return contador;
}

console.log(contarPositivos([1, 2, 3])); // 3
console.log(contarPositivos([-1, 0, 1])); // 1
console.log(contarPositivos([0, 0, 0])); // 0
console.log(contarPositivos([-5, -2, -1])); // 0
console.log(contarPositivos([10, -10, 20, 0])); // 2
console.log(contarPositivos([])); // 0