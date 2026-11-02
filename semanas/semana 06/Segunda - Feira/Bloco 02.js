/*  B2 — ROTINA DE LÓGICA
QUESTÃO 1 — Números múltiplos
Crie a função encontrarMultiplos(numeros, divisor).
Retorne um objeto contendo:
- multiplos: array com os números divisíveis pelo divisor;
- quantidade: quantidade de múltiplos encontrados;
- soma: soma desses números.
*/

function encontrarMultiplos(numeros, divisor) {
  let multiplos = [];
  let quantidade = 0;
  let soma = 0;

  for (let num of numeros) {
    if (num % divisor === 0) {
      multiplos.push(num);
      quantidade ++ ;
      soma += num;
    }
  }

  return { multiplos, quantidade, soma };
}

console.log(encontrarMultiplos([4, 9, 12, 15, 20, 7], 3));
// Resultado esperado: { multiplos: [9, 12, 15], quantidade: 3, soma: 36 }


/* QUESTÃO 2 — Remover espaços extras
Crie a função limparTexto(texto).
- Remova espaços do início e do final.
- Substitua sequências de espaços consecutivos por apenas um espaço.
*/

function limparTexto(texto) {
  return texto.trim().replace(/\s+/g, " ");
}

console.log(limparTexto("  JavaScript    é   muito   legal  "));
// Resultado esperado: "JavaScript é muito legal"


/* QUESTÃO 3 — Frequência de números
Crie a função contarOcorrencias(numeros, alvo).
Retorne quantas vezes o número alvo aparece no array.
*/

function contarOcorrencias(numeros, alvo) {
  let contador = 0;
  for (let num of numeros) {
    if (num === alvo) {
      contador ++ ;
    }
  }

  return contador;
}

console.log(contarOcorrencias([2, 5, 2, 8, 2, 9, 5], 2));
// Resultado esperado: 3



/* QUESTÃO 4 — Separar palavras
Crie a função separarPalavras(frase).
Retorne um array contendo cada palavra separadamente.
Considere espaços extras no início, no final e entre as palavras.
*/

function separarPalavras(frase) {
  return frase.trim().split(/\s+/);
}

console.log(separarPalavras("  estudar   JavaScript é legal "));
// Resultado esperado: ["estudar", "JavaScript", "é", "legal"]

/* QUESTÃO 5 — Aprovação de candidatos
Crie a função avaliarCandidatos(candidatos).
Retorne:
- aprovados: nomes com nota maior ou igual a 7;
- reprovados: nomes com nota menor que 7;
- mediaGeral: média de todas as notas.
Se não houver candidatos, a média será 0.
*/

function avaliarCandidatos(candidatos) {
  if (candidatos.length === 0) {
    return {aprovados:[], reprovados:[], mediaGeral:0}
  }

  let aprovados = [];
  let reprovados = [];
  let soma = 0;
  let mediaGeral = 0;
  for (let { nome, nota } of candidatos) {
    if (nota >= 7) {
      aprovados.push(nome);
    } else {
      reprovados.push(nome);
    }
    soma += nota;
  }

  mediaGeral = soma / candidatos.length;

  return { 
    aprovados,
    reprovados,
    mediaGeral
  }
}

console.log(avaliarCandidatos([ { nome: "Ana", nota: 8 }, { nome: "Carlos", nota: 5 }, { nome: "Bia", nota: 9 } ]));
// Resultado esperado: { aprovados: ["Ana", "Bia"], reprovados: ["Carlos"], mediaGeral: 7.33 }



/* QUESTÃO 6 — Verificar palíndromo
Crie a função verificarPalindromo(texto).
Retorne true se o texto puder ser lido igualmente
da esquerda para a direita e da direita para a esquerda.
Ignore espaços e diferenças entre maiúsculas e minúsculas.
*/

function verificarPalindromo(texto) {
  texto = texto.toLowerCase().replace(/\s/g, "");

  let invertido = "";

  for (let i = texto.length -1; i >=0; i --) {
    invertido += texto[i];
  }

  return invertido === texto;
}

console.log(verificarPalindromo("Ame a ema")); // Resultado esperado: true