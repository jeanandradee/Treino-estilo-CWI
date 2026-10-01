/*🟦 B1 — FUNDAMENTO PROGRESSIVO
Hoje vamos começar leve, mas já treinando várias informações na mesma passagem pelo array. Sem map(), filter() ou reduce().
1️⃣ Analisador de Números 🔢
Um sistema recebe uma lista de números e precisa gerar um pequeno relatório.
A função deve percorrer o array e retornar um objeto com:
somaPares → soma de todos os números pares
somaImpares → soma de todos os números ímpares
quantidadePares → quantidade de números pares
quantidadeImpares → quantidade de números ímpares
maiorPar → maior número par encontrado
maiorImpar → maior número ímpar encontrado
Se não existir nenhum número par, maiorPar deve ser null.
Se não existir nenhum número ímpar, maiorImpar deve ser null.*/
function analisarNumeros(numeros) {
  let somaPares = 0;
  let somaImpares = 0;
  let quantidadePares = 0;
  let quantidadeImpares = 0;
  let maiorPar = null;
  let maiorImpar = null;

  for (let numero of numeros) {
    if (numero % 2 === 0) {
      somaPares += numero;
      quantidadePares ++;

      if (numero > maiorPar || maiorPar === null) {
        maiorPar = numero;
      }

    } else {
      somaImpares += numero;
      quantidadeImpares ++;
    
      if (numero > maiorImpar || maiorImpar === null) {
        maiorImpar = numero;
      }

    }
  }

  return {
    somaPares,
    somaImpares,
    quantidadePares,
    quantidadeImpares,
    maiorPar,
    maiorImpar
  }
}

console.log(analisarNumeros([2, 5, 8, 3, 10]));
/* {
   somaPares: 20,
   somaImpares: 8,
   quantidadePares: 3,
   quantidadeImpares: 2,
   maiorPar: 10,
   maiorImpar: 5
 }
*/
console.log(analisarNumeros([1, 3, 5, 7]));
/* {
   somaPares: 0,
   somaImpares: 16,
   quantidadePares: 0,
   quantidadeImpares: 4,
   maiorPar: null,
   maiorImpar: 7
 }
*/
console.log(analisarNumeros([4, 8, 12]));
/* {
   somaPares: 24,
   somaImpares: 0,
   quantidadePares: 3,
   quantidadeImpares: 0,
   maiorPar: 12,
   maiorImpar: null
 }
*/
console.log(analisarNumeros([-4, -7, 2, 9, -1]));
/* {
   somaPares: -2,
   somaImpares: 1,
   quantidadePares: 2,
   quantidadeImpares: 3,
   maiorPar: 2,
   maiorImpar: 9
 }
*/ 
console.log(analisarNumeros([0]));
/* {
   somaPares: 0,
   somaImpares: 0,
   quantidadePares: 1,
   quantidadeImpares: 0,
   maiorPar: 0,
   maiorImpar: null
 }
*/ 
console.log(analisarNumeros([]));
/* {
   somaPares: 0,
   somaImpares: 0,
   quantidadePares: 0,
   quantidadeImpares: 0,
   maiorPar: null,
   maiorImpar: null
 }
*/

/*2️⃣ Registro de Palavras 📝
Uma ferramenta recebe várias palavras e precisa gerar um relatório.
Retorne um objeto contendo:
quantidade → total de palavras
maior → palavra com maior quantidade de caracteres
menor → palavra com menor quantidade de caracteres
totalCaracteres → soma dos caracteres de todas as palavras
Se houver empate entre palavras de mesmo tamanho, mantenha a primeira que apareceu.*/
function analisarPalavras(palavras) {
  let quantidade = 0;
  let maior = null;
  let menor = null;
  let totalCaracteres = 0;

  for (let palavra of palavras) {
    quantidade ++;

    if (maior === null || palavra.length > maior.length ) {
      maior = palavra;
    }

    if (menor === null || palavra.length < menor.length ) {
      menor = palavra;
    }

    totalCaracteres += palavra.length;
  }

  return {
    quantidade,
    maior,
    menor,
    totalCaracteres
  }
}

console.log(analisarPalavras(["casa", "computador", "sol"]));
// { quantidade: 3, maior: "computador", menor: "sol", totalCaracteres: 17 }

console.log(analisarPalavras(["azul", "verde", "rosa"]));
// { quantidade: 3, maior: "verde", menor: "azul", totalCaracteres: 13 }

console.log(analisarPalavras(["java"]));
// { quantidade: 1, maior: "java", menor: "java", totalCaracteres: 4 }

console.log(analisarPalavras(["a", "bbb", "cc"]));
// { quantidade: 3, maior: "bbb", menor: "a", totalCaracteres: 6 }
 
console.log(analisarPalavras(["lua", "mar", "sol"]));
// { quantidade: 3, maior: "lua", menor: "lua", totalCaracteres: 9 }
 
console.log(analisarPalavras([]));
// { quantidade: 0, maior: null, menor: null, totalCaracteres: 0 }
 

/*3️⃣ Controle de Temperaturas 🌡️
Um sistema recebe as temperaturas registradas durante o dia e precisa gerar um relatório.
A função deve retornar:
maior → maior temperatura registrada
menor → menor temperatura registrada
soma → soma de todas as temperaturas
acimaDe25 → quantidade de temperaturas maiores que 25
abaixoDe15 → quantidade de temperaturas menores que 15
Se o array estiver vazio:
{
  maior: null,
  menor: null,
  soma: 0,
  acimaDe25: 0,
  abaixoDe15: 0
}*/
function analisarTemperaturas(temperaturas) {
  let maior = null;
  let menor = null;
  let soma = 0;
  let acimaDe25 = 0;
  let abaixoDe15 = 0;

  for (let temperatura of temperaturas) {
    soma += temperatura;

    if (maior === null || temperatura > maior) {
      maior = temperatura;
    }

    if (menor === null || temperatura < menor) {
      menor = temperatura;
    }

    if (temperatura > 25) {
      acimaDe25 ++;
    }

    if (temperatura < 15) {
      abaixoDe15 ++;
    }
  }

  return {
    maior,
    menor,
    soma,
    acimaDe25,
    abaixoDe15
  }
}

console.log(analisarTemperaturas([18, 27, 12, 30, 22]));
// { maior: 30, menor: 12, soma: 109, acimaDe25: 2, abaixoDe15: 1 }

console.log(analisarTemperaturas([10, 14, 20, 26]));
// { maior: 26, menor: 10, soma: 70, acimaDe25: 1, abaixoDe15: 2 }

console.log(analisarTemperaturas([25, 15, 20]));
// { maior: 25, menor: 15, soma: 60, acimaDe25: 0, abaixoDe15: 0 }
   
console.log(analisarTemperaturas([-5, 0, 8, -10]));
// { maior: 8, menor: -10, soma: -7, acimaDe25: 0, abaixoDe15: 4 }
   
console.log(analisarTemperaturas([30]));
// { maior: 30, menor: 30, soma: 30, acimaDe25: 1, abaixoDe15: 0 }

console.log(analisarTemperaturas([]));
// { maior: null, menor: null, soma: 0, acimaDe25: 0, abaixoDe15: 0 }