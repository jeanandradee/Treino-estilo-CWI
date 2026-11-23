/* ========================================
   Q1 — Classificador de idade
O código deveria classificar:
- Menor de 18: "Menor de idade".
- De 18 até 59: "Adulto".
- 60 ou mais: "Idoso".
Identifique e corrija o erro.
*/

function classificarIdade(idade) {
  // ERRO: a condição idade >= 18 vinha antes de idade >= 60.
  // Assim, uma pessoa com 70 anos também seria classificada como adulto.
  // CORREÇÃO: verificar primeiro se a idade é igual ou superior a 60.

  if (idade >= 60) {
    return "Idoso";
  } else if (idade >= 18) {
    return "Adulto";
  } else {
    return "Menor de idade";
  }
}

console.log(classificarIdade(15)); // "Menor de idade"
console.log(classificarIdade(35)); // "Adulto"
console.log(classificarIdade(70)); // "Idoso"


/* ========================================
   Q2 — Contagem de caracteres
A função deveria contar quantas vezes
a letra "a" aparece em uma palavra.
Identifique e corrija o erro.
*/

function contarLetra(palavra) {
  let contador = 0;

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === "a") {
      // ERRO: contador = 1 sempre atribui o valor 1.
      // Assim, mesmo que a letra apareça várias vezes,
      // o contador nunca passa de 1.
      // CORREÇÃO: utilizar contador++ para incrementar
      // o contador a cada ocorrência da letra "a".

      contador++;
    }
  }

  return contador;
}

console.log(contarLetra("banana"));  // 3
console.log(contarLetra("abacaxi")); // 3
console.log(contarLetra("teste"));   // 0


/* ========================================
   Q3 — Atualização de saldo
A função recebe um saldo e um valor de saque.
Regras:
- Se houver saldo suficiente, realize o saque.
- Se não houver, retorne "Saldo insuficiente".
- O saque pode ser exatamente igual ao saldo.
Identifique e corrija o erro.
*/

function sacar(saldo, valor) {

  // ERRO: valor < saldo não permite sacar exatamente
  // o valor total disponível na conta.
  // Por exemplo: 100 < 100 é falso.
  // CORREÇÃO: utilizar valor <= saldo,
  // permitindo que o saque seja igual ao saldo.

  if (valor <= saldo) {
    return saldo - valor;
  }

  return "Saldo insuficiente";
}

console.log(sacar(100, 50));  // 50
console.log(sacar(100, 100)); // 0
console.log(sacar(100, 150)); // "Saldo insuficiente"


/* ========================================
   Q4 — Encontrando o maior número
A função deveria retornar o maior número
de um array não vazio.
Identifique e corrija o erro para funcionar
também com números negativos.
*/

function encontrarMaior(numeros) {

  // ERRO: começar com maior = 0 faz com que
  // arrays contendo somente números negativos
  // retornem 0, mesmo que esse número não exista no array.
  //
  // CORREÇÃO: iniciar a variável com o primeiro número
  // do array, garantindo que a comparação funcione
  // também quando todos os números forem negativos.

  let maior = numeros[0];

  for (let numero of numeros) {
    if (numero > maior) {
      maior = numero;
    }
  }

  return maior;
}

console.log(encontrarMaior([3, 8, 2]));       // 8
console.log(encontrarMaior([-5, -2, -10]));   // -2
console.log(encontrarMaior([-8, -3, -1]));    // -1