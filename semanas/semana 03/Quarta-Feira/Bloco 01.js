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
