/*🟢 Questão 1 — Compactação de sequência
Nível 2,5/10
Uma função recebe um array de números e deve retornar um novo array sem valores repetidos consecutivos.
Regras:
Remova apenas as repetições que aparecem lado a lado.
Preserve a ordem dos elementos.
O mesmo número pode aparecer novamente se houver outro número entre eles.
Não altere o array original.
Q1 — Compactação de sequência
Exemplos:
[2, 2, 2, 5, 5, 3, 2, 2] => [2, 5, 3, 2]
[1, 4, 1, 1, 7, 7]       => [1, 4, 1, 7]
[6, 6, 6, 6]             => [6]
[3, 5, 8]                => [3, 5, 8]
[4, 4, 2, 2, 4]          => [4, 2, 4]
[]                        => []
*/

function compactarSequencia(numeros) {
  let sequenciaCompactada = numeros.length > 0 ? [numeros[0]] : [];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] !== numeros[i - 1]) {
      sequenciaCompactada.push(numeros[i]);
    }
  }

  return sequenciaCompactada;
}

console.log(compactarSequencia([2, 2, 2, 5, 5, 3, 2, 2])); // [2, 5, 3, 2]
console.log(compactarSequencia([1, 4, 1, 1, 7, 7]));       // [1, 4, 1, 7]
console.log(compactarSequencia([6, 6, 6, 6]));             // [6]
console.log(compactarSequencia([3, 5, 8]));                // [3, 5, 8]
console.log(compactarSequencia([4, 4, 2, 2, 4]));          // [4, 2, 4]
console.log(compactarSequencia([]));                        // []

/*🟡 Questão 2 — Validação de código
Um sistema recebe um código numérico representado por um array. A função deve verificar se ele é válido.
Um código é válido quando:
possui exatamente 5 números;
todos os números são diferentes de zero;
a soma dos números é par.
Retorne true se o código for válido e false caso contrário.
Atenção: números negativos são permitidos. A soma pode ser zero, pois zero é par.
Q2 — Validação de código
Exemplos:
[2, 4, 1, 3, 2]  => false (número repetido não é proibido)
[2, 4, 1, 3, 6]  => true  (5 números, nenhum zero, soma 16)
[2, 4, 1, 3]     => false (apenas 4 números)
[2, 4, 0, 3, 6]  => false (contém zero)
[1, 1, 1, 1, 1]  => false (soma ímpar)
[-2, 4, 1, 3, 2] => true  (soma 8)
*/

function validarCodigo(numeros) {
  let soma = 0;
  let temZero = false;

  for (let numero of numeros) {
    soma += numero;
    if (numero === 0) {
      temZero = true;
    }
  }
  if (numeros.length === 5 &&
    !temZero &&
    soma % 2 === 0
  ) {
    return true;
  }

  return false;
}

console.log(validarCodigo([2, 4, 1, 3, 2]));  // true
console.log(validarCodigo([2, 4, 1, 3, 6]));  // true
console.log(validarCodigo([2, 4, 1, 3]));     // false
console.log(validarCodigo([2, 4, 0, 3, 6]));  // false
console.log(validarCodigo([1, 1, 1, 1, 1]));   // false
console.log(validarCodigo([-2, 4, 1, 3, 2])); // true

/*🔴 Questão 3 — Simulação de movimentos
Um personagem se movimenta em uma linha numérica. Ele começa na posição 0 e recebe uma sequência de comandos:
"D": avança uma posição;
"E": recua uma posição;
"S": permanece na posição atual;
qualquer outro comando deve ser ignorado.
A função deve retornar a posição final do personagem.
Regras:
A posição pode ficar negativa.
Todos os comandos devem ser processados na ordem recebida.
Não altere o array de comandos.
Q3 — Simulação de movimentos
Exemplos:
["D", "D", "E"]          => 1
["E", "E", "S", "D"]     => -1
["X", "D", "Y", "D"]     => 2
["D", "S", "E", "E"]     => -1
["S", "S", "S"]          => 0
[]                        => 0
*/

function simularMovimentos(comandos) {
  let posicao = 0;
  for (let comando of comandos) {
    if (comando === "D") {
      posicao ++;
    } else if (comando === "E") {
      posicao --;
    }
  }

  return posicao;
}

console.log(simularMovimentos(["D", "D", "E"]));      // 1
console.log(simularMovimentos(["E", "E", "S", "D"])); // -1
console.log(simularMovimentos(["X", "D", "Y", "D"])); // 2
console.log(simularMovimentos(["D", "S", "E", "E"])); // -1
console.log(simularMovimentos(["S", "S", "S"]));      // 0
console.log(simularMovimentos([]));                    // 0