/* 🟢 Questão 1 — Fizz Buzz
Dado um inteiro positivo n, retorne um array de strings de tamanho n.
Para cada número de 1 até n:
- Se for divisível por 3 e por 5, coloque "FizzBuzz".
- Se for divisível apenas por 3, coloque "Fizz".
- Se for divisível apenas por 5, coloque "Buzz".
- Caso contrário, coloque o próprio número convertido em string.
Exemplos:
fizzBuzz(3)  -> ["1", "2", "Fizz"]
fizzBuzz(5)  -> ["1", "2", "Fizz", "4", "Buzz"]
fizzBuzz(15) -> o último elemento será "FizzBuzz"
Crie um array com os resultados de 1 até n,
seguindo as regras do enunciado.
*/

function fizzBuzz(n) {
  let resultado = [];
  for (let i  = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultado.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultado.push("Fizz"); 
    } else if (i % 5 === 0) {
      resultado.push("Buzz");
    } else {
      resultado.push(i);
    }
  }

  return resultado;
}

console.log(fizzBuzz(3));  // Resultado esperado: ["1", "2", "Fizz"]
console.log(fizzBuzz(5));  // Resultado esperado: ["1", "2", "Fizz", "4", "Buzz"]
console.log(fizzBuzz(15)); // Resultado esperado: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]


/* 🟢 Questão 2 — Contar Elementos Menores
Dado um array de números nums, retorne um novo array em que
cada posição contenha a quantidade de elementos de nums
que são estritamente menores que o elemento daquela posição.
Exemplos:
smallerNumbersThanCurrent([8, 1, 2, 2, 3]) -> [4, 0, 1, 1, 3]
smallerNumbersThanCurrent([6, 5, 4, 8])    -> [2, 1, 0, 3]
smallerNumbersThanCurrent([7, 7, 7])       -> [0, 0, 0]
Regras:
- Não altere o array original.
- Considere todos os elementos, inclusive os repetidos.
Para cada número, conte quantos elementos do array são
menores que ele. Retorne os totais em um novo array.
*/

function smallerNumbersThanCurrent(nums) {
  let resultado = [];

  for (let i = 0; i < nums.length; i++) {
    let contador = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        contador ++;
      }
    }
    resultado.push(contador);
  }


  return resultado;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // Resultado esperado: [4, 0, 1, 1, 3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));    // Resultado esperado: [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([7, 7, 7]));       // Resultado esperado: [0, 0, 0]


/* 🟢 Questão 3 — Verificar Anagrama
Dadas duas strings s e t, determine se elas são anagramas.
Duas strings são anagramas quando possuem exatamente os mesmos
caracteres, com a mesma quantidade de cada caractere,
mas podem estar em ordens diferentes.
Exemplos:
isAnagram("amor", "roma")             -> true
isAnagram("ovo", "voo")               -> true
isAnagram("abc", "abb")               -> false
isAnagram("aacc", "ccac")             -> false
isAnagram("javascript", "scriptjava") -> false
Retorne true se s e t tiverem os mesmos caracteres
com as mesmas quantidades; caso contrário, false.
*/

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let contador = {};

  for (let i = 0; i < s.length; i++) {
    let caractere = s[i];

    if (contador[caractere] === undefined) {
      contador[caractere] = 1;
    } else {
      contador[caractere]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    let caractere = t[i];

    if (contador[caractere] === undefined || contador[caractere] === 0) {
      return false;
    }

    contador[caractere]--;
  }


  return true;
}

console.log(isAnagram("amor", "roma"));             // Resultado esperado: true
console.log(isAnagram("ovo", "voo"));               // Resultado esperado: true
console.log(isAnagram("abc", "abb"));               // Resultado esperado: false
console.log(isAnagram("aacc", "ccac"));             // Resultado esperado: false
console.log(isAnagram("javascript", "scriptjava")); // Resultado esperado: false


/* 🟢 Questão 4 — Mesclar Dois Arrays Ordenados
Você recebe dois arrays de números, nums1 e nums2,
ambos já ordenados em ordem crescente.
Retorne um novo array contendo todos os números dos dois arrays,
também em ordem crescente.
Exemplos:
mergeSortedArrays([1, 3, 5], [2, 4, 6]) -> [1, 2, 3, 4, 5, 6]
mergeSortedArrays([1, 2, 7], [3, 4])    -> [1, 2, 3, 4, 7]
mergeSortedArrays([], [2, 5])           -> [2, 5]
mergeSortedArrays([1, 1, 3], [1, 2])   -> [1, 1, 1, 2, 3]
Combine os dois arrays ordenados em um novo array,
mantendo a ordem crescente e todos os elementos.
*/

function mergeSortedArrays(nums1, nums2) {
  let arr = [...nums1, ...nums2];
  return arr.sort((a, b) => a - b);
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Resultado esperado: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2, 7], [3, 4]));    // Resultado esperado: [1, 2, 3, 4, 7]
console.log(mergeSortedArrays([], [2, 5]));            // Resultado esperado: [2, 5]
console.log(mergeSortedArrays([1, 1, 3], [1, 2]));   // Resultado esperado: [1, 1, 1, 2, 3]


/* 🟢 Questão 5 — Compactar Caracteres Consecutivos
Dada uma string s, retorne uma nova string em que cada sequência
de caracteres iguais e consecutivos seja substituída pelo
caractere seguido da quantidade de repetições.
Se o caractere aparecer apenas uma vez consecutivamente,
mantenha somente o caractere.
Exemplos:
compressString("aaabbc")   -> "a3b2c"
compressString("abcd")     -> "abcd"
compressString("wwwwaaad") -> "w4a3d"
compressString("")         -> ""
compressString("aaa")      -> "a3"
Regras:
- Diferencie maiúsculas de minúsculas.
- Não use expressões regulares.
Percorra a string e agrupe caracteres iguais que estejam
lado a lado. Acrescente a quantidade somente quando
o caractere se repetir.
*/

function compressString(s) {
  let resultado = "";
  let contador = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      contador++;
    } else {
      resultado += s[i];

      if (contador > 1) {
        resultado += contador;
      }

      contador = 1;
    }
  }

  return resultado;
}

console.log(compressString("aaabbc"));   // Resultado esperado: "a3b2c"
console.log(compressString("abcd"));     // Resultado esperado: "abcd"
console.log(compressString("wwwwaaad")); // Resultado esperado: "w4a3d"
console.log(compressString(""));         // Resultado esperado: ""
console.log(compressString("aaa"));      // Resultado esperado: "a3"


/* 🟢 Questão 6 — Encontrar o Número que Falta
Você recebe um array nums com números distintos de um intervalo
que começa em 0 e termina em n.
O array possui n números, portanto exatamente um número
desse intervalo está faltando.
Retorne o número ausente.
Exemplos:
missingNumber([3, 0, 1])                -> 2
missingNumber([0, 1])                   -> 2
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) -> 8
missingNumber([0])                      -> 1
missingNumber([1])                      -> 0
Encontre o único número que deveria estar no intervalo
de 0 até n, mas não aparece no array.
*/

function missingNumber(nums) {
  let n = nums.length;
  let esperado = n * (n + 1) / 2;
  let soma = 0;

  for (let i = 0; i < nums.length; i++) {
    soma += nums[i];
  }

  return esperado - soma;
}

console.log(missingNumber([3, 0, 1]));                  // Resultado esperado: 2
console.log(missingNumber([0, 1]));                     // Resultado esperado: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));// Resultado esperado: 8
console.log(missingNumber([0]));                        // Resultado esperado: 1
console.log(missingNumber([1]));                        // Resultado esperado: 0