/* =========================================================
   🐛 Q1 — ENCONTRAR O PRIMEIRO VALOR VÁLIDO
   Um sistema recebe números e precisa retornar o índice do
   primeiro número que seja positivo e par.
   Se nenhum valor atender às condições, deve retornar -1.
   O código apresenta um erro lógico.
   Sua missão: corrija a condição responsável pelo erro.
   ========================================================= */

function primeiroPositivoPar(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    // ERRO: foi usado || (OU).
    // Assim, basta o número ser positivo OU par para retornar.
    // O correto é && (E), pois ele precisa ser positivo E par.
    if (numeros[i] > 0 && numeros[i] % 2 === 0) {
      return i;
    }
  }

  return -1;
}

console.log(primeiroPositivoPar([3, 5, 8, 10])); // 2
console.log(primeiroPositivoPar([-4, -2, 6])); // 2
console.log(primeiroPositivoPar([1, 3, 5])); // -1
console.log(primeiroPositivoPar([0, 2, 4])); // 1
console.log(primeiroPositivoPar([-3, 7, 9])); // -1
console.log(primeiroPositivoPar([11, 13, 14])); // 2

/* =========================================================
   🐛 Q2 — CONTAR OCORRÊNCIAS SEM DUPLICAR A CONTAGEM
   Uma função recebe um array de números e deve contar quantos
   são maiores que a média do próprio array.
   O código abaixo apresenta um problema.
   Sua missão: faça a menor alteração necessária para que
   a função conte todos os valores que atendem à condição.
   ========================================================= */

function contarAcimaDaMedia(numeros) {
  let soma = 0;

  for (let numero of numeros) {
    soma += numero;
  }

  // Calcula a média dos números.
  // Se o array estiver vazio, a média será NaN, mas o contador
  // continuará sendo zero, que é o resultado esperado.
  let media = soma / numeros.length;
  let contador = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > media) {
      contador++;
      // ERRO: o return dentro do for encerra a função
      // na primeira ocorrência encontrada.
      // O correto é deixar o return depois do laço.
    }
  }

  return contador;
}

console.log(contarAcimaDaMedia([1, 2, 3, 4, 5])); // 2
console.log(contarAcimaDaMedia([5, 5, 5])); // 0
console.log(contarAcimaDaMedia([2, 8, 10])); // 1
console.log(contarAcimaDaMedia([1, 9, 10, 20])); // 2
console.log(contarAcimaDaMedia([-5, 0, 5])); // 1
console.log(contarAcimaDaMedia([7])); // 0

/* =========================================================
  🐛 Q3 — PRESERVAR O OBJETO ORIGINAL
  Uma função recebe um objeto de usuário e uma nova idade.
  Ela deve retornar o objeto original e uma cópia atualizada,
  sem modificar o original.
  Sua missão: corrija o problema sem alterar o formato
  do objeto retornado.
  ========================================================= */

function atualizarUsuario(usuario, novaIdade) {
  // ERRO: let copia = usuario não cria uma cópia.
  // As duas variáveis apontam para o mesmo objeto na memória.
  // Por isso, alterar copia.idade também altera usuario.idade.

  // CORREÇÃO: o spread (...) cria um novo objeto com as
  // propriedades do original.
  let copia = { ...usuario };

  copia.idade = novaIdade;

  return {
    original: usuario,
    atualizado: copia,
  };
}

let pessoa = { nome: "Ana", idade: 20 };
let resultado = atualizarUsuario(pessoa, 25);

console.log(resultado.original.idade); // 20
console.log(resultado.atualizado.idade); // 25
console.log(pessoa.idade); // 20
console.log(resultado.original === pessoa); // true
console.log(resultado.atualizado === pessoa); // false
console.log(resultado.original.nome); // "Ana"

/* =========================================================
  🐛 Q4 — VALIDAR UMA OPERAÇÃO
  Um sistema só permite uma transferência quando:
  - O valor é positivo.
  - O saldo disponível é suficiente para cobrir a transferência.
  Sua missão: corrija a condição para exigir que os dois
  requisitos sejam atendidos.
  ========================================================= */

function podeTransferir(saldo, valor) {
  // ERRO: o operador || (OU) permite que apenas uma condição
  // seja verdadeira. Isso pode autorizar uma transferência
  // mesmo quando o saldo é insuficiente.
  //
  // CORREÇÃO: usar && (E) exige que as duas condições
  // sejam verdadeiras ao mesmo tempo.
  if (valor > 0 && saldo >= valor) {
    return true;
  }

  return false;
}

console.log(podeTransferir(100, 40)); // true
console.log(podeTransferir(100, 100)); // true
console.log(podeTransferir(50, 80)); // false
console.log(podeTransferir(100, 0)); // false
console.log(podeTransferir(100, -5)); // false
console.log(podeTransferir(0, 1)); // false

/* =========================================================
  🐛 Q5 — ENCONTRAR UM PICO
  Um pico é um elemento que é estritamente maior que seus
  dois vizinhos imediatos. As extremidades não podem ser
  consideradas picos.
  A função deve retornar o índice do primeiro pico ou -1
  se nenhum for encontrado.
  Sua missão: corrija a condição para que o elemento seja
  maior que ambos os vizinhos.
  ========================================================= */

function primeiroPico(numeros) {
  for (let i = 1; i < numeros.length - 1; i++) {
   // ERRO: o operador || (OU) aceita que o número seja
   // maior que apenas um dos vizinhos.
   //
   // CORREÇÃO: usar && (E) exige que ele seja maior
   // que o vizinho da esquerda E o da direita.
    if (numeros[i] > numeros[i - 1] && numeros[i] > numeros[i + 1]) {
      return i;
    }
  }

  return -1;
}

console.log(primeiroPico([1, 5, 2, 7, 3])); // 1
console.log(primeiroPico([1, 2, 3, 4])); // -1
console.log(primeiroPico([4, 2, 1])); // -1
console.log(primeiroPico([1, 3, 3, 1])); // -1
console.log(primeiroPico([2, 8, 4])); // 1
console.log(primeiroPico([1, 2])); // -1

/* =========================================================
  🐛 Q6 — CONTAR APENAS VALORES POSITIVOS
  Uma função deve contar quantos elementos de um array
  são estritamente positivos.
  Sua missão: corrija a condição para que zero não seja
  contado como um valor positivo.
  ========================================================= */

function contarPositivos(numeros) {
  let contador = 0;

  for (let numero of numeros) {
    // ERRO: >= 0 inclui o zero na contagem.
    // Mas o enunciado pede valores estritamente positivos,
    // ou seja, números maiores que zero.
    //
    // CORREÇÃO: trocar >= por >.
    if (numero > 0) {
      contador++;
    }
  }

  return contador;
}

console.log(contarPositivos([1, 2, 3])); // 3
console.log(contarPositivos([-1, 0, 2])); // 1
console.log(contarPositivos([0, 0, 0])); // 0
console.log(contarPositivos([-5, -2, -1])); // 0
console.log(contarPositivos([4, -3, 0, 8])); // 2
console.log(contarPositivos([])); // 0