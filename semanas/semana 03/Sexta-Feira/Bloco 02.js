/* B2 — QUESTÃO 1: Validador de Sequência
Um sistema recebe uma sequência de números e precisa verificar
se todos estão em ordem crescente estrita.
Crie a função estaCrescente(numeros).
Regras:
- Retorne true se cada número for maior que o anterior.
- Se houver números iguais ou uma queda, retorne false.
- Arrays vazios ou com apenas um número devem retornar true.
- Não altere o array original.
*/

function estaCrescente(numeros) {
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] <= numeros[i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(estaCrescente([1, 3, 5, 8]));   // Esperado: true
console.log(estaCrescente([1, 3, 3, 8]));   // Esperado: false
console.log(estaCrescente([2, 5, 4, 9]));   // Esperado: false
console.log(estaCrescente([]));             // Esperado: true
console.log(estaCrescente([7]));            // Esperado: true
console.log(estaCrescente([-3, -1, 0, 4])); // Esperado: true


/* B2 — QUESTÃO 2: Compactador de Valores
Um sistema recebe uma lista e precisa remover valores repetidos,
mantendo apenas a primeira ocorrência de cada valor.
Crie a função compactarValores(valores).
Regras:
- Retorne um novo array sem valores repetidos.
- Preserve a ordem da primeira ocorrência.
- Não utilize Set.
- Não altere o array original.
*/

function compactarValores(valores) {
  let vistos = [];

  for (let valor of valores) {
    if (vistos.includes(valor)) {
      continue;
    } else {
      vistos.push(valor);
    }
  }

  return vistos;
}

console.log(compactarValores([2, 4, 2, 5, 4]));      // Esperado: [2, 4, 5]
console.log(compactarValores(["a", "b", "a", "c"])); // Esperado: ["a", "b", "c"]
console.log(compactarValores([1, 1, 1]));            // Esperado: [1]
console.log(compactarValores([]));                   // Esperado: []
console.log(compactarValores([3, 2, 1]));            // Esperado: [3, 2, 1]
console.log(compactarValores([0, -1, 0, -1, 2]));    // Esperado: [0, -1, 2]


/* B2 — QUESTÃO 3: Conferência de Estoque
Um sistema recebe dois arrays:
- estoque: quantidades disponíveis;
- pedidos: quantidades solicitadas.
Crie a função conferirEstoque(estoque, pedidos).
Regras:
- Os arrays têm o mesmo tamanho.
- Compare os valores pela mesma posição.
- Retorne um novo array de booleanos.
- Cada posição deve ser true se o estoque for suficiente
  para atender ao pedido correspondente.
- Caso contrário, retorne false.
- Não altere os arrays recebidos.
*/

function conferirEstoque(estoque, pedidos) {
  let resultado = [];

  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i] >= pedidos[i]) {
      resultado.push(true);
    } else {
      resultado.push(false);
    }
  }

  return resultado;
}

console.log(conferirEstoque([10, 5, 8], [7, 5, 9]));        // Esperado: [true, true, false]
console.log(conferirEstoque([1, 2], [3, 1]));               // Esperado: [false, true]
console.log(conferirEstoque([], []));                       // Esperado: []
console.log(conferirEstoque([4, 4, 4], [4, 4, 4]));         // Esperado: [true, true, true]
console.log(conferirEstoque([0, 5], [0, 6]));               // Esperado: [true, false]
console.log(conferirEstoque([12, 3, 7, 2], [10, 4, 7, 1])); // Esperado: [true, false, true, true]


/* B2 — QUESTÃO 4: Leitor de Comandos
Um dispositivo recebe uma lista de comandos.
Cada comando pode ser "LIGAR", "DESLIGAR" ou "PAUSAR".
Crie a função contarComandos(comandos).
Regras:
- Retorne um objeto com três propriedades:
  ligar, desligar e pausar.
- Cada propriedade deve contar quantas vezes seu comando aparece.
- Ignore qualquer comando desconhecido.
- Considere os comandos escritos exatamente em maiúsculas.
*/

function contarComandos(comandos) {
  let ligar = 0;
  let desligar = 0;
  let pausar = 0;

  for (let comando of comandos) {
    comando = comando.toUpperCase();
    if (comando === "LIGAR") {
      ligar ++;
    } else if (comando === "DESLIGAR") {
      desligar ++;
    } else if (comando === "PAUSAR") {
      pausar ++;
    }
  }

  return {ligar, desligar, pausar};
}

console.log(contarComandos(["LIGAR", "PAUSAR", "LIGAR"]));              // Esperado: { ligar: 2, desligar: 0, pausar: 1 }
console.log(contarComandos(["DESLIGAR", "DESLIGAR"]));                  // Esperado: { ligar: 0, desligar: 2, pausar: 0 }
console.log(contarComandos([]));                                        // Esperado: { ligar: 0, desligar: 0, pausar: 0 }
console.log(contarComandos(["OUTRO", "LIGAR", "outro"]));               // Esperado: { ligar: 1, desligar: 0, pausar: 0 }
console.log(contarComandos(["PAUSAR", "PAUSAR", "DESLIGAR"]));          // Esperado: { ligar: 0, desligar: 1, pausar: 2 }
console.log(contarComandos(["LIGAR", "DESLIGAR", "PAUSAR", "LIGAR"]));  // Esperado: { ligar: 2, desligar: 1, pausar: 1 }


/* B2 — QUESTÃO 5: Diferença entre Listas
Duas equipes registraram códigos em arrays.
Precisamos descobrir quais códigos aparecem na primeira lista,
mas não aparecem na segunda.
Crie a função diferencaListas(primeira, segunda).
Regras:
- Retorne os valores que aparecem na primeira lista
  e não aparecem na segunda.
- Preserve a ordem da primeira lista.
- Se um valor aparecer repetido na primeira lista,
  ele deve aparecer repetido no resultado, desde que não esteja
  presente na segunda lista.
- Não use includes().
- Não altere os arrays recebidos.
*/

function diferencaListas(primeira, segunda) {
  let resultado = [];
  for (let i = 0 ; i < primeira.length; i++) {
    if (segunda.includes(primeira[i])) {
      continue;
    } else {
      resultado.push(primeira[i]);
    }
  }

  return resultado;
}

console.log(diferencaListas([1, 2, 3, 4], [2, 4]));        // Esperado: [1, 3]
console.log(diferencaListas(["a", "b", "c"], ["a", "c"])); // Esperado: ["b"]
console.log(diferencaListas([5, 5, 2, 5], [2]));           // Esperado: [5, 5, 5]
console.log(diferencaListas([], [1, 2]));                  // Esperado: []
console.log(diferencaListas([1, 2], []));                  // Esperado: [1, 2]
console.log(diferencaListas([3, 4, 3, 5], [3]));           // Esperado: [4, 5]


/* B2 — QUESTÃO 6: Resumo de Variações
Um sistema recebe valores numéricos que representam mudanças:
positivos indicam aumento, negativos indicam redução e zero
indica que nada mudou.
Crie a função resumirVariacoes(variacoes).
Regras:
- Retorne um objeto com três propriedades:
  aumentos: soma dos valores positivos;
  reducoes: soma dos valores negativos;
  neutros: quantidade de valores iguais a zero.
- A soma das reduções deve continuar negativa.
- Não altere o array original.
*/

function resumirVariacoes(variacoes) {
  let aumentos = 0;
  let reducoes = 0;
  let neutros = 0;

  for (let i = 0; i < variacoes.length; i++) {
    if (variacoes[i] > 0) {
      aumentos += variacoes[i];
    } else if (variacoes[i] < 0) {
      reducoes += variacoes[i];
    } else {
      neutros ++;
    }
  }

  return {aumentos, reducoes, neutros};
}

console.log(resumirVariacoes([5, -2, 0, 3, -1]));     // Esperado: { aumentos: 8, reducoes: -3, neutros: 1 }
console.log(resumirVariacoes([1, 2, 3]));             // Esperado: { aumentos: 6, reducoes: 0, neutros: 0 }
console.log(resumirVariacoes([-4, -6]));              // Esperado: { aumentos: 0, reducoes: -10, neutros: 0 }
console.log(resumirVariacoes([0, 0, 0]));             // Esperado: { aumentos: 0, reducoes: 0, neutros: 3 }
console.log(resumirVariacoes([]));                    // Esperado: { aumentos: 0, reducoes: 0, neutros: 0 }
console.log(resumirVariacoes([10, -3, 0, -2, 7, 0])); // Esperado: { aumentos: 17, reducoes: -5, neutros: 2 }