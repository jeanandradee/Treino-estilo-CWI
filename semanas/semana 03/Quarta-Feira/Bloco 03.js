/*🐛 Q1 — Encontrar o primeiro valor válido
Um sistema recebe números e precisa retornar o índice do primeiro número que seja positivo e par. Se nenhum valor atender às condições, deve retornar -1.
O código apresenta um erro lógico.*/
function primeiroPositivoPar(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0 || numeros[i] % 2 === 0) {
      return i;
    }
  }

  return -1;
}

console.log(primeiroPositivoPar([3, 5, 8, 10]));  // 2
console.log(primeiroPositivoPar([-4, -2, 6]));     // 2
console.log(primeiroPositivoPar([1, 3, 5]));       // -1
console.log(primeiroPositivoPar([0, 2, 4]));       // 1
console.log(primeiroPositivoPar([-3, 7, 9]));      // -1
console.log(primeiroPositivoPar([11, 13, 14]));    // 2
//Sua missão: corrija a condição responsável pelo erro.

/*🐛 Q2 — Contar ocorrências sem duplicar a contagem
Uma função recebe um array de números e deve contar quantos são maiores que a média do próprio array.
O código abaixo apresenta um problema.*/
function contarAcimaDaMedia(numeros) {
  let soma = 0;

  for (let numero of numeros) {
    soma += numero;
  }

  let media = soma / numeros.length;
  let contador = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > media) {
      contador++;
      return contador;
    }
  }

  return contador;
}

console.log(contarAcimaDaMedia([1, 2, 3, 4, 5])); // 2
console.log(contarAcimaDaMedia([5, 5, 5]));       // 0
console.log(contarAcimaDaMedia([2, 8, 10]));      // 1
console.log(contarAcimaDaMedia([1, 9, 10, 20]));  // 2
console.log(contarAcimaDaMedia([-5, 0, 5]));      // 1
console.log(contarAcimaDaMedia([7]));             // 0
//Sua missão: faça a menor alteração necessária para que a função conte todos os valores que atendem à condição.
/*🐛 Q3 — Preservar o objeto original
Uma função recebe um objeto de usuário e uma nova idade. Ela deve retornar o objeto original e uma cópia atualizada, sem modificar o original.*/
function atualizarUsuario(usuario, novaIdade) {
  let copia = usuario;
  copia.idade = novaIdade;

  return {
    original: usuario,
    atualizado: copia
  };
}

let pessoa = { nome: "Ana", idade: 20 };
let resultado = atualizarUsuario(pessoa, 25);

console.log(resultado.original.idade);    // 20
console.log(resultado.atualizado.idade);  // 25
console.log(pessoa.idade);                // 20
console.log(resultado.original === pessoa); // true
console.log(resultado.atualizado === pessoa); // false
console.log(resultado.original.nome);    // "Ana"
//Sua missão: corrija o problema sem alterar o formato do objeto retornado.

/*🐛 Q4 — Validar uma operação
Um sistema só permite uma transferência quando:
O valor é positivo.
O saldo disponível é suficiente para cobrir a transferência.*/
function podeTransferir(saldo, valor) {
  if (valor > 0 || saldo >= valor) {
    return true;
  }

  return false;
}

console.log(podeTransferir(100, 40));  // true
console.log(podeTransferir(100, 100)); // true
console.log(podeTransferir(50, 80));   // false
console.log(podeTransferir(100, 0));   // false
console.log(podeTransferir(100, -5));  // false
console.log(podeTransferir(0, 1));     // false
//Sua missão: corrija a condição para exigir que os dois requisitos sejam atendidos.
/*🐛 Q5 — Encontrar um pico
Um pico é um elemento que é estritamente maior que seus dois vizinhos imediatos. As extremidades não podem ser consideradas picos.
A função deve retornar o índice do primeiro pico ou -1 se nenhum for encontrado.*/
function primeiroPico(numeros) {
  for (let i = 1; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i - 1] || numeros[i] > numeros[i + 1]) {
      return i;
    }
  }

  return -1;
}

console.log(primeiroPico([1, 5, 2, 7, 3])); // 1
console.log(primeiroPico([1, 2, 3, 4]));    // -1
console.log(primeiroPico([4, 2, 1]));       // -1
console.log(primeiroPico([1, 3, 3, 1]));    // -1
console.log(primeiroPico([2, 8, 4]));       // 1
console.log(primeiroPico([1, 2]));          // -1
//Sua missão: corrija a condição para que o elemento seja maior que ambos os vizinhos.

/*🐛 Q6 — Contar apenas valores positivos
Uma função deve contar quantos elementos de um array são estritamente positivos.*/
function contarPositivos(numeros) {
  let contador = 0;

  for (let numero of numeros) {
    if (numero >= 0) {
      contador++;
    }
  }

  return contador;
}

console.log(contarPositivos([1, 2, 3]));    // 3
console.log(contarPositivos([-1, 0, 2]));   // 1
console.log(contarPositivos([0, 0, 0]));    // 0
console.log(contarPositivos([-5, -2, -1])); // 0
console.log(contarPositivos([4, -3, 0, 8])); // 2
console.log(contarPositivos([]));            // 0