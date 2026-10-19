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

/*🟢 Questão 4 — Remove Duplicates from Sorted Array
Dado um array de inteiros nums em ordem crescente, remova os valores duplicados sem criar outro array para armazenar os valores únicos.
A função deve retornar a quantidade de elementos únicos.
Os primeiros k elementos de nums devem conter os valores únicos em ordem crescente. Os elementos que ficarem depois dessas primeiras k posições podem ser ignorados.
Exemplos
Entrada: nums = [1, 1, 2]
Saída: 2
Os dois primeiros elementos ficam [1, 2].
Entrada: nums = [0, 0, 1, 1, 2, 2, 3]
Saída: 4
Os quatro primeiros elementos ficam [0, 1, 2, 3].
Entrada: nums = [-3, -3, -1, 0, 0, 5]
Saída: 4
Os quatro primeiros elementos ficam [-3, -1, 0, 5].
Restrições:
1 <= nums.length <= 30000
O array já está ordenado em ordem crescente.
Faça a alteração diretamente no array recebido.*/
function removeDuplicates(nums) {
  let contador = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[contador - 1]) {
      nums[contador] = nums[i];
      contador ++;
    }
  }

  return contador;
}

let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1)); // 2
console.log(nums1.slice(0, 2));       // [1, 2]

let nums2 = [0, 0, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums2)); // 4
console.log(nums2.slice(0, 4));       // [0, 1, 2, 3]

let nums3 = [-3, -3, -1, 0, 0, 5];
console.log(removeDuplicates(nums3)); // 4
console.log(nums3.slice(0, 4));       // [-3, -1, 0, 5]

let nums4 = [1];
console.log(removeDuplicates(nums4)); // 1
console.log(nums4.slice(0, 1));       // [1]

let nums5 = [1, 2, 3, 4];
console.log(removeDuplicates(nums5)); // 4
console.log(nums5.slice(0, 4));       // [1, 2, 3, 4]

let nums6 = [5, 5, 5, 5];
console.log(removeDuplicates(nums6)); // 1
console.log(nums6.slice(0, 1));       // [5]

/*🟢 Questão 5 — Valid Parentheses
Dada uma string s contendo apenas os caracteres (, ), {, }, [ e ], determine se os parênteses estão válidos.
Uma string é válida quando:
Cada abertura é fechada pelo tipo correto.
Os fechamentos ocorrem na ordem correta.
Todo fechamento possui uma abertura correspondente.
Exemplos
Entrada: s = "()"
Saída: true
Entrada: s = "()[]{}"
Saída: true
Entrada: s = "(]"
Saída: false
Entrada: s = "([])"
Saída: true
Entrada: s = "([)]"
Saída: false
Restrições:
1 <= s.length <= 10000
A string contém somente os seis caracteres especificados.*/
function isValid(s) {
  let pilha = [];

  for (let i = 0; i < s.length; i++) {
    let caractere = s[i];

    if (
      caractere === "(" ||
      caractere === "[" ||
      caractere === "{"
    ) {
      pilha.push(caractere);
    } else {
      if (pilha.length === 0) {
        return false;
      }

      let ultimo = pilha.pop();

      if (
        (caractere === ")" && ultimo !== "(") ||
        (caractere === "]" && ultimo !== "[") ||
        (caractere === "}" && ultimo !== "{")
      ) {
        return false;
      }
    }
  }

  return pilha.length === 0;
}

console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([])"));     // true
console.log(isValid("([)]"));     // false
console.log(isValid("{[]}"));     // true

/*🟢 Questão 6 — Length of Last Word
Dada uma string s composta por palavras e espaços, retorne o comprimento da última palavra.
Uma palavra é uma sequência máxima de caracteres que não são espaços.
Exemplos
Entrada: s = "Hello World"
Saída: 5
Entrada: s = "   fly me   to   the moon  "
Saída: 4
Entrada: s = "luffy is still joyboy"
Saída: 6
Restrições:
1 <= s.length <= 10000
A string contém letras inglesas e espaços.
Existe pelo menos uma palavra.*/
function lengthOfLastWord(s) {
  s = s.split(" ");
  let palavras = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i].length > 0) {
      palavras.push(s[i]);
    }
  }

  return palavras[palavras.length -1].length;
}

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
console.log(lengthOfLastWord("JavaScript")); // 10
console.log(lengthOfLastWord("programar   ")); // 9
console.log(lengthOfLastWord("um teste final")); // 5