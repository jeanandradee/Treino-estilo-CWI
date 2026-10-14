/* =========================================================
   QUESTÃO 1 — DETECTAR MUDANÇA DE DIREÇÃO
   Um sensor registra uma sequência de valores.
   A função deve contar quantas vezes a sequência muda
   de direção entre aumentos e diminuições.
   Considere apenas comparações entre valores consecutivos.
   Valores iguais não contam como aumento nem diminuição e
   não substituem a última direção válida.
   Exemplo:
   [2, 5, 8, 4, 4, 1, 6]
   Aumenta, aumenta, diminui, igual, diminui, aumenta.
   Existem duas mudanças de direção:
   aumento -> diminuição
   diminuição -> aumento
   Crie: contarMudancas(numeros)
   ========================================================= */

function contarMudancas(numeros) {
  let direcoes = [];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[i - 1]) {
      direcoes.push("aumenta");
    } else if (numeros[i] < numeros[i - 1]) {
      direcoes.push("diminui");
    }
  }

  let contador = 0;

  for (let i = 1; i < direcoes.length; i++) {
    if (direcoes[i] !== direcoes[i - 1]) {
      contador ++;
    }
  }

  return contador;
}

console.log(contarMudancas([2, 5, 8, 4, 4, 1, 6])); // 2
console.log(contarMudancas([1, 2, 3, 4]));           // 0
console.log(contarMudancas([9, 7, 5, 3]));           // 0
console.log(contarMudancas([1, 5, 2, 6, 3]));        // 3
console.log(contarMudancas([4, 4, 4, 4]));           // 0
console.log(contarMudancas([1, 3, 3, 2, 5]));        // 2


/**********************************************************
   QUESTÃO 2 — AGRUPAR VALORES CONSECUTIVOS
   Um sistema recebe números inteiros consecutivos em uma
   sequência de registros.
   A função deve agrupar os valores iguais que aparecem
   consecutivamente, retornando um objeto para cada grupo:
   - valor: o número encontrado;
   - quantidade: quantas vezes ele aparece seguidamente.
   A ordem dos grupos deve ser preservada.
   Crie: agruparSequencia(numeros)
   ========================================================= */

function agruparSequencia(numeros) {
  const grupos = [];

  for (let i = 0; i < numeros.length; i++) {
    if (i === 0 || numeros[i] !== numeros[i - 1]) {
      grupos.push({
        valor: numeros[i],
        quantidade: 1
      });
    } else {
      grupos[grupos.length - 1].quantidade++;
    }
  }

  return grupos;
}

console.log(JSON.stringify(agruparSequencia([2, 2, 5, 5, 5, 1])));
// [{"valor":2,"quantidade":2},{"valor":5,"quantidade":3},{"valor":1,"quantidade":1}]

console.log(JSON.stringify(agruparSequencia([7, 7, 7])));
// [{"valor":7,"quantidade":3}]

console.log(JSON.stringify(agruparSequencia([1, 2, 1])));
// [{"valor":1,"quantidade":1},{"valor":2,"quantidade":1},{"valor":1,"quantidade":1}]

console.log(JSON.stringify(agruparSequencia([])));
// []

console.log(JSON.stringify(agruparSequencia([0, 0, -1, -1, 0])));
// [{"valor":0,"quantidade":2},{"valor":-1,"quantidade":2},{"valor":0,"quantidade":1}]

console.log(JSON.stringify(agruparSequencia([3, 3, 2, 2, 3, 3])));
// [{"valor":3,"quantidade":2},{"valor":2,"quantidade":2},{"valor":3,"quantidade":2}]


/**********************************************************
   QUESTÃO 3 — CALCULAR TEMPO DE ATENDIMENTO
   Um sistema registra a duração de atendimentos em minutos.
   A função deve retornar um objeto contendo:
   - total: soma de todas as durações;
   - acimaDaMedia: quantidade de durações estritamente
     maiores que a média;
   - maior: maior duração registrada.
   Se o array estiver vazio, retorne os três campos com 0.
   Crie: analisarAtendimentos(duracoes)
   Você pode usar reduce() se considerar adequado.
   ========================================================= */

function analisarAtendimentos(duracoes) {
  if (duracoes.length === 0) {
    return {
      total: 0,
      acimaDaMedia: 0,
      maior: 0
    };
  }

  let total = duracoes.reduce((acc, d) => acc + d, 0);
  let media = total / duracoes.length;
  let acimaDaMedia = 0;
  let maior = duracoes[0];

  for (let duracao of duracoes) {
    if (duracao > maior) {
      maior = duracao;
    }

    if (duracao > media) {
      acimaDaMedia++;
    }
  }

  return { total, acimaDaMedia, maior };
}

console.log(JSON.stringify(analisarAtendimentos([10, 20, 30])));
// {"total":60,"acimaDaMedia":1,"maior":30}

console.log(JSON.stringify(analisarAtendimentos([5, 5, 5, 5])));
// {"total":20,"acimaDaMedia":0,"maior":5}

console.log(JSON.stringify(analisarAtendimentos([2, 8, 10])));
// {"total":20,"acimaDaMedia":1,"maior":10}

console.log(JSON.stringify(analisarAtendimentos([])));
// {"total":0,"acimaDaMedia":0,"maior":0}

console.log(JSON.stringify(analisarAtendimentos([1, 2, 3, 4, 5])));
// {"total":15,"acimaDaMedia":2,"maior":5}

console.log(JSON.stringify(analisarAtendimentos([12, 4, 8, 16])));
// {"total":40,"acimaDaMedia":2,"maior":16}


/**********************************************************
   QUESTÃO 4 — LOCALIZAR LINHA DOMINANTE
   Uma matriz representa medições feitas em diferentes
   horários. Cada linha contém os valores de um horário.
   A função deve retornar o índice da linha cuja soma
   seja a maior.
   Em caso de empate, retorne o índice da primeira linha.
   Se a matriz estiver vazia, retorne -1.
   Crie: linhaMaiorSoma(matriz)
   ========================================================= */

function linhaMaiorSoma(matriz) {
  if (matriz.length === 0) {
    return -1;
  }

  let maior = -Infinity;
  let indiceMaior = -1;

  for (let i = 0; i < matriz.length; i++) {
    let soma = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      soma += matriz[i][j];
    }

    if (soma > maior) {
      maior = soma;
      indiceMaior = i;
    }
  }

  return indiceMaior;
}

console.log(linhaMaiorSoma([[1, 2], [4, 5], [2, 2]])); // 1
console.log(linhaMaiorSoma([[10, 0], [5, 5]]));        // 0
console.log(linhaMaiorSoma([[1, 1], [3, 0], [2, 1]])); // 1
console.log(linhaMaiorSoma([]));                       // -1
console.log(linhaMaiorSoma([[0, 0], [0, 0]]));         // -1
console.log(linhaMaiorSoma([[-5, -2], [-1, -3]]));     // 1


/**********************************************************
   QUESTÃO 5 — RECONSTRUIR POSIÇÕES
   Um sistema recebe um array de comandos numéricos.
   Cada comando indica quantas posições um marcador deve
   avançar ou recuar em relação à posição atual.
   Entretanto, o marcador não pode ficar em posições
   negativas: se um comando fizer a posição ficar abaixo
   de zero, ela deve ser ajustada imediatamente para zero.
   Retorne a posição final após todos os comandos.
   Crie: calcularPosicao(comandos)
   ========================================================= */

function calcularPosicao(comandos) {
  let posicao = 0;

  for (let comando of comandos) {
    posicao += comando;

    if (posicao < 0) {
      posicao = 0;
    }
  }

  return posicao;
}

console.log(calcularPosicao([3, 2, -1]));       // 4
console.log(calcularPosicao([2, -5, 4]));       // 4
console.log(calcularPosicao([-3, 5]));          // 5
console.log(calcularPosicao([1, -1, -1, 3]));   // 3
console.log(calcularPosicao([]));               // 0
console.log(calcularPosicao([10, -4, -3, -8])); // 0


/**********************************************************
   QUESTÃO 6 — VALIDAR DISTRIBUIÇÃO
   Um sistema recebe um array de números inteiros.
   A distribuição é considerada válida quando:
   - existem pelo menos 2 elementos;
   - a soma dos elementos é divisível pela quantidade
     total de elementos;
   - nenhum elemento é igual a zero.
   Retorne true se todas as regras forem atendidas;
   caso contrário, retorne false.
   ========================================================= */

function validarDistribuicao(numeros) {
  let soma = numeros.reduce((acc , n) => acc + n ,0);
  if (numeros.length >= 2 &&
    soma % numeros.length === 0 &&
    !numeros.includes(0)
  ) {
    return true;
  }

  return false;
}

console.log(validarDistribuicao([2, 4, 6]));    // true
console.log(validarDistribuicao([1, 2]));       // false
console.log(validarDistribuicao([3, 3, 3]));    // true
console.log(validarDistribuicao([2, 0, 4]));    // false
console.log(validarDistribuicao([]));           // false
console.log(validarDistribuicao([-2, 2, 4, 4])); // true