/* 🟢 Questão 1 — Two Sum (Soma de Dois)
Dado um array de inteiros nums e um inteiro target, retorne os índices de dois números cuja soma seja igual a target.
Você pode assumir que cada entrada possui exatamente uma solução válida.
Regras:
Você não pode utilizar o mesmo elemento duas vezes.
Os índices podem ser retornados em qualquer ordem.
Não modifique o array original.
Exemplos
Entrada: nums = [2, 7, 11, 15], target = 9
Saída esperada: [0, 1]
Entrada: nums = [3, 2, 4], target = 6
Saída esperada: [1, 2]
Entrada: nums = [3, 3], target = 6
Saída esperada: [0, 1]
Restrições:
2 <= nums.length <= 100 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));      // [1, 2]
console.log(twoSum([3, 3], 6));         // [0, 1]
console.log(twoSum([1, 5, 3, 7], 8));   // [0, 3]
console.log(twoSum([-1, -2, -3, -4], -6)); // [1, 3]
console.log(twoSum([0, 4, 3, 0], 0));   // [0, 3]

/* 🟢 Questão 2 — Palíndromo numérico
Dado um número inteiro x, retorne true se ele for um palíndromo e false caso contrário.
Um palíndromo é um número que permanece igual quando seus algarismos são lidos da esquerda para a direita ou da direita para a esquerda.
Exemplos
Entrada: x = 121
Saída esperada: true
Entrada: x = -121
Saída esperada: false
Entrada: x = 10
Saída esperada: false
Restrições:
-2147483648 <= x <= 2147483647*/
function isPalindrome(x) {
  let string = String(x);
  let invertida = "";
  for (let i = string.length -1; i >= 0; i--) {
    invertida += string[i];
  }

  return invertida === string;
}

console.log(isPalindrome(121));       // true
console.log(isPalindrome(-121));      // false
console.log(isPalindrome(10));        // false
console.log(isPalindrome(0));         // true
console.log(isPalindrome(1221));      // true
console.log(isPalindrome(12321));     // true

/*🟢 Questão 3 — Prefixo comum mais longo
Escreva uma função que encontre o prefixo comum mais longo entre todas as strings de um array strs.
Se não houver um prefixo comum, retorne uma string vazia "".
Um prefixo é uma sequência de caracteres que aparece no início de uma string.
Exemplos
Entrada: strs = ["flower", "flow", "flight"]
Saída esperada: "fl"
Entrada: strs = ["dog", "racecar", "car"]
Saída esperada: ""
Entrada: strs = ["interview", "internet", "internal"]
Saída esperada: "inter"
Restrições:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
As strings contêm letras minúsculas do alfabeto inglês.*/
function longestCommonPrefix(strs) {
  let prefixo = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (! strs[i].startsWith(prefixo)) {
      prefixo = prefixo.slice(0,-1);
    }

    if (prefixo === "") {
      return "";
    }
  }

  return prefixo;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""
console.log(longestCommonPrefix(["interview", "internet", "internal"])); // "inter"
console.log(longestCommonPrefix(["casa", "casamento", "casaco"])); // "casa"
console.log(longestCommonPrefix(["abc"])); // "abc"
console.log(longestCommonPrefix(["", "abc"])); // ""