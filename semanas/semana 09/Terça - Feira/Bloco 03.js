/* Q1 — Validação de senha
A função deveria retornar true quando:
- A senha possuir pelo menos 8 caracteres.
- Contiver pelo menos uma letra maiúscula.
- Contiver pelo menos um número.
- Não possuir espaços.
Identifique e corrija os erros.
*/

function validarSenha(senha) {
  // Boa prática: validar o tipo antes de percorrer a string.
  if (typeof senha !== "string") return false;

  let possuiMaiuscula = false;
  let possuiNumero = false;

  for (const caractere of senha) {
    if (caractere >= "A" && caractere <= "Z") {
      possuiMaiuscula = true;
    }

    if (caractere >= "0" && caractere <= "9") {
      possuiNumero = true;
    }
  }

  return senha.length >= 8 &&
    possuiMaiuscula &&
    possuiNumero &&
    !senha.includes(" "); 
    // ERRO ORIGINAL:
    // Estava usando senha.length > 8.
    // O correto é >= 8, pois 8 caracteres já são suficientes.
    //
    // Também estava usando senha.includes(" "),
    // que retornava true quando existia espaço.
    // O correto é !senha.includes(" "), pois não pode possuir espaços.
}

console.log(validarSenha("Java1234"));  // true
console.log(validarSenha("java1234"));  // false
console.log(validarSenha("Java 1234")); // false
console.log(validarSenha("J123"));      // false


/* Q2 — Busca de produto
A função deveria:
- Encontrar o produto pelo nome.
- Ignorar diferenças entre maiúsculas e minúsculas.
- Retornar o objeto encontrado.
- Retornar null quando não encontrar.
Identifique e corrija os erros.
*/

function buscarProduto(produtos, nome) {
  for (const produto of produtos) {
    if (produto.nome.toLowerCase() === nome.toLowerCase()) {
      return produto;
    }
    // ERRO ORIGINAL:
    // Estava comparando produto.nome com nome diretamente.
    // Isso fazia "Mouse" ser diferente de "MOUSE".
    // Usamos toLowerCase() nos dois lados para padronizar.
    // Estava retornando produto.nome.
    // O enunciado pede o objeto completo, então retornamos produto.
  }

  return null;
  // ERRO ORIGINAL:
  // Estava retornando undefined.
  // O enunciado exige null quando não encontrar.
}

const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse", preco: 50 },
  { nome: "Monitor", preco: 800 }
];

console.log(buscarProduto(produtos, "MOUSE"));      // { nome: "Mouse", preco: 50 }
console.log(buscarProduto(produtos, "Notebook"));   // null


/* Q3 — Análise de notas
A função deveria:
- Considerar somente notas entre 0 e 10.
- Calcular a média das notas válidas.
- Retornar 0 quando não houver notas válidas.
- Aprovar quando a média for maior ou igual a 7.
Identifique e corrija os erros.
*/

function analisarNotas(notas) {
  const validas = notas.filter(nota => nota >= 0 && nota <= 10);
  // ERRO ORIGINAL:
  // Estava usando nota > 0 && nota < 10.
  // Isso excluía as notas 0 e 10.
  // O correto é >= 0 e <= 10.

  let soma = 0;

  for (const nota of validas) {
    soma += nota;
  }

  const media = validas.length === 0 ? 0 : soma / validas.length;
  // ERRO ORIGINAL:
  // Estava dividindo diretamente por validas.length.
  // Quando não existem notas válidas, ocorre divisão por zero,
  // resultando em NaN.
  // O ternário garante que a média seja 0 nesse caso.

  return {
    media,
    aprovado: media >= 7
    // ERRO ORIGINAL:
    // Estava usando media > 7.
    // O enunciado diz que a nota 7 também aprova.
    // Portanto, precisamos usar >= 7.
  };
}

console.log(analisarNotas([8, 7, 10, -2, 5]));      // { media: 7.5, aprovado: true }
console.log(analisarNotas([0, -5, 11]));            // { media: 0, aprovado: false }


/* Q4 — Contagem de ocorrências
A função deveria:
- Contar quantas vezes o valor procurado aparece.
- Considerar todas as posições do array.
- Retornar 0 quando não houver ocorrências.
Identifique e corrija os erros.
*/

function contarOcorrencias(numeros, procurado) {
  let quantidade = 0;

  for (let i = 0; i < numeros.length; i++) {
    // ERRO ORIGINAL:
    // Estava usando numeros.length - 1.
    // Isso fazia o loop parar antes de verificar o último elemento.
    // O correto é usar i < numeros.length.

    if (numeros[i] === procurado) {
      quantidade++;
    }
  }

  return quantidade;
}

console.log(contarOcorrencias([2, 5, 2, 8, 2], 2));     // 3
console.log(contarOcorrencias([1, 3, 5, 7], 4));        // 0
console.log(contarOcorrencias([9], 9));                 // 1