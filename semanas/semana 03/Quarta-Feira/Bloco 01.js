/* Questão 1 — Busca em matriz
Um sistema recebe uma matriz de números inteiros. A função deve retornar a posição [linha, coluna] do primeiro número negativo, percorrendo as linhas de cima para baixo e cada linha da esquerda para a direita.
Se não houver número negativo, retorne [-1, -1].
Q1 — Busca em matriz
Exemplos:
[[4, 8], [3, -2]]       => [1, 1]
[[1, -5, -3], [-2, 4]]  => [0, 1]
[[1, 2], [3, 4]]        => [-1, -1]
[[-7, 2], [-1, -3]]     => [0, 0]
[[5]]                   => [-1, -1]
[]                      => [-1, -1]
*/

function localizarNegativo(matriz) {
  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      if (matriz[linha][coluna] < 0) {
        return [linha, coluna];
      }
    }
  }

  return [-1, -1];
}

console.log(localizarNegativo([[4, 8], [3, -2]]));      // [1, 1]
console.log(localizarNegativo([[1, -5, -3], [-2, 4]])); // [0, 1]
console.log(localizarNegativo([[1, 2], [3, 4]]));       // [-1, -1]
console.log(localizarNegativo([[-7, 2], [-1, -3]]));    // [0, 0]
console.log(localizarNegativo([[5]]));                  // [-1, -1]
console.log(localizarNegativo([]));                     // [-1, -1]

/*Questão 2 — Reconstrução de texto
Uma função recebe uma string e deve retornar outra string contendo apenas a primeira ocorrência de cada caractere, preservando a ordem.
A comparação diferencia letras maiúsculas de minúsculas.
Q2 — Reconstrução de texto
Exemplos:
"banana"     => "ban"
"abacaxi"    => "abcxi"
"JavaScript" => "JavScript"
"AAAA"       => "A"
"123123"     => "123"
""           => ""
*/

function removerRepetidos(texto) {
  let resultado = "";
  let vistos = [];

  for (let caracter of texto) {
    if (vistos.includes(caracter)) {
      continue;
    } else {
      vistos.push(caracter);        
      resultado += caracter;
    }
  }

  return resultado;
}

console.log(removerRepetidos("banana"));     // "ban"
console.log(removerRepetidos("abacaxi"));    // "abcxi"
console.log(removerRepetidos("JavaScript")); // "JavScript"
console.log(removerRepetidos("AAAA"));       // "A"
console.log(removerRepetidos("123123"));     // "123"
console.log(removerRepetidos(""));           // ""

/* Questão 3 — Interpretação de comandos
Um robô começa com energia 100. Ele recebe uma sequência de comandos numéricos:
Valor positivo: consome essa quantidade de energia.
Valor negativo: recupera energia pelo valor absoluto.
Valor 0: não altera a energia.
A energia nunca pode ultrapassar 100 nem ficar abaixo de 0.
Retorne a energia final após processar todos os comandos.
Q3 — Energia do robô
Exemplos:
[20, 30, -10]    => 60
[-30, 50]        => 80
[80, 50]         => 0
[-50, -70]       => 100
[100, -40, 20]   => 20
[]                => 100
*/

function calcularEnergia(comandos) {
  let energiaFinal = 100;

  for (let comando of comandos) {
    if (comando > 0 ) {
      energiaFinal -= comando;
        if (energiaFinal < 0) {
          energiaFinal = 0;
        }
    } else if (comando < 0 ) {
      energiaFinal += Math.abs(comando);
        if (energiaFinal > 100) {
          energiaFinal = 100;
        }  
    }
  }
 

  return energiaFinal;
}

console.log(calcularEnergia([20, 30, -10]));   // 60
console.log(calcularEnergia([-30, 50]));       // 80
console.log(calcularEnergia([80, 50]));        // 0
console.log(calcularEnergia([-50, -70]));      // 100
console.log(calcularEnergia([100, -40, 20]));  // 20
console.log(calcularEnergia([]));              // 100

/* Questão 4 — Intervalos sobrepostos
Um sistema recebe dois intervalos, cada um representado por um array [início, fim].
A função deve retornar o tamanho da interseção entre eles. Se não houver sobreposição, retorne 0.
Considere intervalos numéricos contínuos: a interseção entre [2, 8] e [5, 10] tem tamanho 3, pois vai de 5 a 8.
Q4 — Interseção de intervalos
Exemplos:
[2, 8], [5, 10]   => 3
[1, 4], [4, 7]    => 0
[3, 6], [1, 9]    => 3
[5, 8], [1, 3]    => 0
[2, 2], [1, 5]    => 0
[0, 10], [3, 6]   => 3
*/

function tamanhoIntersecao(intervaloA, intervaloB) {
  let inicio = Math.max(intervaloA[0], intervaloB[0]);
  let fim = Math.min(intervaloA[1], intervaloB[1]);

  if (fim <= inicio) {
    return 0;
  }

  return fim - inicio;
}

console.log(tamanhoIntersecao([2, 8], [5, 10]));  // 3
console.log(tamanhoIntersecao([1, 4], [4, 7]));   // 0
console.log(tamanhoIntersecao([3, 6], [1, 9]));   // 3
console.log(tamanhoIntersecao([5, 8], [1, 3]));   // 0
console.log(tamanhoIntersecao([2, 2], [1, 5]));   // 0
console.log(tamanhoIntersecao([0, 10], [3, 6]));  // 3

/* Questão 5 — Agrupamento de caracteres
Uma função recebe uma string e deve retornar um objeto contendo a quantidade de ocorrências de cada caractere.
Considere maiúsculas e minúsculas como caracteres diferentes. Espaços também devem ser contados.
Q5 — Frequência de caracteres
Exemplos:
"aba"  => { a: 2, b: 1 }
"AaA"  => { A: 2, a: 1 }
"1122" => { "1": 2, "2": 2 }
""     => {}
" a "  => { " ": 2, a: 1 }
"abc"  => { a: 1, b: 1, c: 1 }
*/

function contarCaracteres(texto) {
  return [...texto].reduce((acc, c) => {
    acc[c] = (acc[c] || 0) +1;

    return acc;
  }, {});
}

console.log(contarCaracteres("aba"));  // { a: 2, b: 1 }
console.log(contarCaracteres("AaA"));  // { A: 2, a: 1 }
console.log(contarCaracteres("1122")); // { "1": 2, "2": 2 }
console.log(contarCaracteres(""));     // {}
console.log(contarCaracteres(" a "));  // { " ": 2, a: 1 }
console.log(contarCaracteres("abc"));  // { a: 1, b: 1, c: 1 }

/* Questão 6 — Validação de sequência
Uma sequência de números é considerada válida quando todo número, a partir do segundo, é maior que o anterior.
A função deve retornar true se a sequência for estritamente crescente e false caso contrário.
Uma sequência vazia ou com apenas um elemento é válida.
Q6 — Sequência crescente
Exemplos:
[1, 3, 5, 8] => true
[1, 2, 2, 4] => false
[5, 4, 3]    => false
[-3, 0, 7]   => true
[10]         => true
[]           => true
*/

function validarCrescente(numeros) {
  if (numeros.length <= 1) {
    return true;
  }

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] <= numeros[i -1]) {
      return false;
    }
  }

  return true;
}

console.log(validarCrescente([1, 3, 5, 8])); // true
console.log(validarCrescente([1, 2, 2, 4])); // false
console.log(validarCrescente([5, 4, 3]));    // false
console.log(validarCrescente([-3, 0, 7]));   // true
console.log(validarCrescente([10]));         // true
console.log(validarCrescente([]));           // true