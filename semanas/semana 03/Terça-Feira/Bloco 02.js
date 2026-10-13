/* 1. Decodificador de caracteres 🔐
Uma mensagem contém letras e o caractere "*".
Sempre que encontrar "*", ignore esse caractere e
também o caractere imediatamente seguinte.
Se "*" for o último caractere, ignore apenas ele.
Os demais caracteres devem permanecer na ordem original.
Não use replaceAll() nem expressões regulares.
*/

function decodificarMensagem(texto) {
    let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "*") {
      if (texto[i + 1] === "*") {
        continue;
      }
      i++;
      continue;
    }

    resultado += texto[i];
  }

  return resultado;
}

console.log(decodificarMensagem("ab*cd")); // "abd"
console.log(decodificarMensagem("A*BC")); // "AC"
console.log(decodificarMensagem("teste")); // "teste"
console.log(decodificarMensagem("a*b*c")); // "ac"
console.log(decodificarMensagem("abc*")); // "abc"
console.log(decodificarMensagem("**ABC")); // "BC"

/* 2. Primeiro valor que atende à condição 🎯
Receba um array de números e um valor limite.
Retorne o índice do primeiro número que seja
maior que o limite e também seja par.
Se nenhum número atender às duas condições,
retorne -1.
Os índices começam em zero.
Não altere o array original.
*/

function localizarValor(numeros, limite) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > limite && numeros[i] % 2 === 0) {
      return i;
    }
  }

  return -1;
}

console.log(localizarValor([3, 5, 8, 10], 6)); // 2
console.log(localizarValor([2, 4, 6], 6)); // -1
console.log(localizarValor([7, 9, 11, 12], 10)); // 3
console.log(localizarValor([8, 10, 12], 7)); // 0
console.log(localizarValor([-4, -2, 1, 6], 0)); // 3
console.log(localizarValor([3, 5, 7], 2)); // -1

/* 3. Percurso em espiral simplificado 🌀
Receba uma matriz retangular de números.
Retorne os elementos da primeira linha, da esquerda
para a direita, seguidos pelos elementos da última
coluna, de cima para baixo, sem repetir o elemento
do canto superior direito.
A matriz terá pelo menos uma linha e uma coluna.
Não altere a matriz original.
*/

function percorrerBorda(matriz) {
  let resultado = [];
  let ultimaLinha = matriz.length - 1;
  let ultimaColuna = matriz[0].length - 1;

  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    resultado.push(matriz[0][coluna]);
  }

  for (let linha = 1; linha <= ultimaLinha; linha++) {
    resultado.push(matriz[linha][ultimaColuna]);
  }

  return resultado;
}

console.log(percorrerBorda([[1, 2, 3], [4, 5, 6]])); // [1, 2, 3, 6]
console.log(percorrerBorda([[7]])); // [7]
console.log(percorrerBorda([[1, 2, 3, 4]])); // [1, 2, 3, 4]
console.log(percorrerBorda([[1], [2], [3]])); // [1, 2, 3]
console.log(percorrerBorda([[1, 2], [3, 4], [5, 6]])); // [1, 2, 4, 6]
console.log(percorrerBorda([[9, 8, 7], [6, 5, 4], [3, 2, 1]])); // [9, 8, 7, 4, 1]

/* 4. Simulador de comandos de texto 📝
Comece com uma string vazia.
Comandos:
- "A": acrescenta a letra "A" ao texto.
- "B": acrescenta a letra "B" ao texto.
- "APAGAR": remove o último caractere, se houver.
- "LIMPAR": apaga todo o texto.
- Comandos desconhecidos são ignorados.

Retorne o texto final.
*/

function executarComandos(comandos) {
  let texto = "";

  for (let comando of comandos) {
    if (comando === "A") {
      texto += "A";
    } else if (comando === "B") {
      texto += "B";
    } else if (comando === "APAGAR") {
      texto = texto.slice(0, -1);
    } else if (comando === "LIMPAR") {
      texto = "";
    }
  }

  return texto;
}

console.log(executarComandos(["A", "B", "A"])); // "ABA"
console.log(executarComandos(["A", "APAGAR"])); // ""
console.log(executarComandos(["B", "A", "APAGAR"])); // "B"
console.log(executarComandos(["A", "B", "LIMPAR", "B"])); // "B"
console.log(executarComandos(["APAGAR", "X", "A"])); // "A"
console.log(executarComandos([])); // ""

/* 5. Analisador de resultados 📊
Receba um array de notas numéricas.
Retorne:
- maior: maior nota;
- menor: menor nota;
- acimaMedia: quantidade de notas estritamente
  maiores que a média;
- soma: soma de todas as notas.

A média é a soma dividida pela quantidade de notas.
O array terá pelo menos um elemento.
Não arredonde a média antes de fazer a comparação.
*/

function analisarNotas(notas) {
  let maior = notas[0];
  let menor = notas[0];
  let acimaMedia = 0;
  let soma = 0;

  for (let nota of notas) {
    soma += nota;

    if (nota > maior) {
      maior = nota;
    }

    if (nota < menor) {
      menor = nota;
    }
  }

  let media = soma / notas.length;

  for (let nota of notas) {
    if (nota > media) {
      acimaMedia++;
    }
  }

  return {maior, menor, acimaMedia, soma};
}

console.log(analisarNotas([5, 5, 5]));
// {maior: 5, menor: 5, acimaMedia: 0, soma: 15}

console.log(analisarNotas([2, 4, 6]));
// {maior: 6, menor: 2, acimaMedia: 1, soma: 12}

console.log(analisarNotas([10]));
// {maior: 10, menor: 10, acimaMedia: 0, soma: 10}

console.log(analisarNotas([1, 2, 3, 10]));
// {maior: 10, menor: 1, acimaMedia: 1, soma: 16}

console.log(analisarNotas([-2, 0, 2]));
// {maior: 2, menor: -2, acimaMedia: 0, soma: 0}

console.log(analisarNotas([6, 7, 8, 9]));
// {maior: 9, menor: 6, acimaMedia: 2, soma: 30}

/* 6. Comparador de palavras 🔤
Receba duas strings.
Retorne:
- iguais: true se forem exatamente iguais;
- tamanhoA: tamanho da primeira string;
- tamanhoB: tamanho da segunda string;
- diferenca: diferença absoluta entre os tamanhos.

A comparação diferencia letras maiúsculas de minúsculas.
Não altere as strings.
*/

function compararPalavras(a, b) {
  let iguais = a === b;
  let tamanhoA = a.length;
  let tamanhoB = b.length;
  let diferenca = Math.abs(tamanhoA - tamanhoB);

  return {iguais, tamanhoA, tamanhoB, diferenca};
}

console.log(compararPalavras("casa", "casa"));
// {iguais: true, tamanhoA: 4, tamanhoB: 4, diferenca: 0}

console.log(compararPalavras("Java", "java"));
// {iguais: false, tamanhoA: 4, tamanhoB: 4, diferenca: 0}

console.log(compararPalavras("sol", "lua"));
// {iguais: false, tamanhoA: 3, tamanhoB: 3, diferenca: 0}

console.log(compararPalavras("programa", "JS"));
// {iguais: false, tamanhoA: 8, tamanhoB: 2, diferenca: 6}

console.log(compararPalavras("", "abc"));
// {iguais: false, tamanhoA: 0, tamanhoB: 3, diferenca: 3}

console.log(compararPalavras("abc", "abcd"));
// {iguais: false, tamanhoA: 3, tamanhoB: 4, diferenca: 1}