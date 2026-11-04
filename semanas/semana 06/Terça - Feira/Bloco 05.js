/* Uma estação de comunicação recebe mensagens codificadas
em uma matriz de números.
Cada número representa um código de caractere da tabela ASCII.
O sistema precisa transformar esses números em texto e
analisar a mensagem resultante.
REGRAS:
1. Percorra a matriz e transforme cada número em seu
   caractere correspondente usando String.fromCharCode().
2. Construa uma única mensagem com todos os caracteres,
   respeitando a ordem das linhas e colunas.
3. Conte quantas vogais existem na mensagem.
   Considere A, E, I, O e U, ignorando maiúsculas
   e minúsculas.
4. Conte quantas palavras existem na mensagem.
   As palavras são separadas por espaços.
5. Retorne também a mensagem completamente em maiúsculas.
Retorne um objeto com:
- mensagem
- quantidadeVogais
- quantidadePalavras
- mensagemMaiuscula
Não modifique a matriz original.
Não utilize map(), filter() ou reduce().
*/

function decodificarMensagem(codigos) {
  let mensagem = "";
  let quantidadeVogais = 0;
  let quantidadePalavras = 0;
  let mensagemMaiuscula = "";

  for (let i = 0; i < codigos.length; i++) {
    for (let j = 0; j < codigos[i].length; j++) {
      mensagem += String.fromCharCode(codigos[i][j]);
    }
  }

  for (let i = 0; i < mensagem.length; i++) {
    let minusculas = mensagem[i].toLowerCase();
    if (
      minusculas === "a" ||
      minusculas === "e" ||
      minusculas === "i" ||
      minusculas === "o" ||
      minusculas === "u" 
    ) {
      quantidadeVogais ++;
    }
  }
 
  quantidadePalavras = mensagem.trim() === "" ? 0 : mensagem.trim().split(/\s+/).length;  
  mensagemMaiuscula = mensagem.toUpperCase();

  return {
    mensagem,
    quantidadeVogais,
    quantidadePalavras,
    mensagemMaiuscula
  };
}

console.log(decodificarMensagem([
    [79, 108, 97],
    [32, 109, 117, 110, 100, 111],
    [32, 74, 83]
]));

/*
Resultado esperado:

{
    mensagem: "Ola mundo JS",
    quantidadeVogais: 4,
    quantidadePalavras: 3,
    mensagemMaiuscula: "OLA MUNDO JS"
}
*/