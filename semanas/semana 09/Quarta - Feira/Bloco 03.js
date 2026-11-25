/* ========================================
   B3 — CAÇA-BUG CWI
   INSTRUÇÕES:
   - Todos os códigos possuem pelo menos um erro.
   - Identifique e corrija os erros.
   - Preserve a finalidade de cada função.
   - Não reescreva tudo sem necessidade.
   - Teste também os casos ocultos.
*/


/* ========================================
   Q1 — CALCULADORA DE DESCONTO
   ========================================
Uma loja oferece descontos conforme o valor da compra:
- Abaixo de R$ 100: sem desconto.
- De R$ 100 até R$ 199,99: 5% de desconto.
- R$ 200 ou mais: 10% de desconto.
A função deve retornar o valor final da compra.
*/

function calcularDesconto(valor) {
  let desconto = 0;

  if (valor >= 200) {
    desconto = 0.10;
    // ERRO: antes estava 0.05.
    // O correto é 10% para compras de 200 ou mais.

  } else if (valor >= 100) {
    desconto = 0.05;
    // ERRO: antes estava 0.10.
    // O correto é 5% para compras a partir de 100.
  }

  // ERRO: antes retornava valor - desconto.
  // Isso subtraía apenas 0.05 ou 0.10.
  // Agora calculamos o desconto sobre o valor total.
  return valor - (valor * desconto);
}

console.log("========== Q1 ==========");

console.log(calcularDesconto(80));     // 80
console.log(calcularDesconto(100));    // 95
console.log(calcularDesconto(150));    // 142.5
console.log(calcularDesconto(200));    // 180
// Casos extras
console.log(calcularDesconto(99.99));  // 99.99
console.log(calcularDesconto(199.99)); // 189.9905
console.log(calcularDesconto(200));    // 180


/* ========================================
   Q2 — BUSCADOR DE PALAVRAS
   ========================================
Crie uma correção para que a função retorne
a posição da primeira palavra encontrada em um texto.
REGRAS:
- Ignorar maiúsculas e minúsculas.
- Se encontrar a palavra, retornar seu índice.
- Se não encontrar, retornar -1.
- A posição começa em zero.
*/

function buscarPalavra(texto, palavra) {
  let palavras = texto.split(" ");

  // ERRO: antes estava i <= palavras.length.
  // Isso fazia o laço ultrapassar o último índice.
  // O correto é utilizar apenas <.
  for (let i = 0; i < palavras.length; i++) {

    // ERRO: antes só a palavra do texto era convertida
    // para minúscula. A palavra procurada também precisa
    // ser convertida para permitir comparar corretamente.
    if (palavras[i].toLowerCase() === palavra.toLowerCase()) {
      return i;
    }
  }

  // ERRO: antes retornava 0.
  // O enunciado exige -1 quando não encontra a palavra.
  return -1;
}

console.log("========== Q2 ==========");
console.log(buscarPalavra("JavaScript é legal", "javascript")); // 0
console.log(buscarPalavra("Eu gosto de JavaScript", "JAVASCRIPT")); // 3
console.log(buscarPalavra("Hoje está ensolarado", "chuva")); // -1
// Casos extras
console.log(buscarPalavra("Eu gosto muito de JavaScript", "JavaScript")); // 4
console.log(buscarPalavra("JavaScript", "javascript")); // 0
console.log(buscarPalavra("Hoje está ensolarado", "HOJE")); // 0
console.log(buscarPalavra("Eu gosto de programação", "Python")); // -1


/* ========================================
   Q3 — CONTROLE DE SENHAS
   ========================================
Uma função recebe uma senha e deve classificá-la.
REGRAS:
- Menos de 6 caracteres: "Fraca".
- De 6 até 9 caracteres: "Média".
- 10 caracteres ou mais: "Forte".
A função deve considerar o tamanho da senha,
sem modificar seu conteúdo.
*/

function classificarSenha(senha) {

  // ERRO: antes estava > 10.
  // Uma senha com exatamente 10 caracteres
  // também deve ser considerada forte.
  if (senha.length >= 10) {
    return "Forte";

  // ERRO: antes a condição seguinte era >= 6,
  // mas também existia uma condição <= 6 para fraca.
  // Agora, com a primeira condição resolvida,
  // de 6 até 9 caracteres será média.
  } else if (senha.length >= 6) {
    return "Média";

  // ERRO: antes estava <= 6.
  // Uma senha com exatamente 6 caracteres
  // não pode ser fraca. Por isso usamos else.
  } else {
    return "Fraca";
  }
}

console.log("========== Q3 ==========");
console.log(classificarSenha("abc"));          // Fraca
console.log(classificarSenha("abcdef"));       // Média
console.log(classificarSenha("abcdefghij"));   // Forte
console.log(classificarSenha("abcdefghijk"));  // Forte
// Casos extras
console.log(classificarSenha("12345"));        // Fraca
console.log(classificarSenha("123456"));       // Média
console.log(classificarSenha("123456789"));    // Média
console.log(classificarSenha("1234567890"));   // Forte


/* ========================================
   Q4 — ANALISADOR DE TEMPERATURAS
   ========================================
Uma função recebe um array de temperaturas.
Deve retornar um objeto contendo:
- maiorTemperatura: maior valor encontrado.
- menorTemperatura: menor valor encontrado.
- quantidadeAgradaveis: quantidade de temperaturas
  entre 20 e 30 graus, incluindo os limites.
REGRAS:
- Se o array estiver vazio, retorne null.
- Não utilize Math.max() nem Math.min().
- Resolva percorrendo o array.
*/

function analisarTemperaturas(temperaturas) {

  if (temperaturas.length === 0) {
    return null;
  }

  // ERRO: antes as duas variáveis começavam em zero.
  // Isso causava resultados errados quando todos
  // os números eram negativos.
  // Agora começam com o primeiro elemento do array.
  let maiorTemperatura = temperaturas[0];
  let menorTemperatura = temperaturas[0];

  let quantidadeAgradaveis = 0;

  for (let temperatura of temperaturas) {

    if (temperatura > maiorTemperatura) {
      maiorTemperatura = temperatura;
    }

    if (temperatura < menorTemperatura) {
      menorTemperatura = temperatura;
    }

    // ERRO: antes utilizava || (OU).
    // Assim, praticamente qualquer temperatura
    // passava na condição.
    // O correto é && (E), pois precisa estar
    // entre 20 e 30 ao mesmo tempo.
    if (temperatura >= 20 && temperatura <= 30) {
      quantidadeAgradaveis++;
    }
  }

  return {
    maiorTemperatura,
    menorTemperatura,
    quantidadeAgradaveis
  };
}

console.log("========== Q4 ==========");
console.log(analisarTemperaturas([15, 22, 28, 35]));
// { maiorTemperatura: 35, menorTemperatura: 15, quantidadeAgradaveis: 2 }
console.log(analisarTemperaturas([-5, -2, -10]));
// { maiorTemperatura: -2, menorTemperatura: -10, quantidadeAgradaveis: 0 }
console.log(analisarTemperaturas([])); // null
// Casos extras
console.log(analisarTemperaturas([25]));
// { maiorTemperatura: 25, menorTemperatura: 25, quantidadeAgradaveis: 1 }
console.log(analisarTemperaturas([5, 10, 15, 40]));
// { maiorTemperatura: 40, menorTemperatura: 5, quantidadeAgradaveis: 0 }
console.log(analisarTemperaturas([-20, -10, -5]));
// { maiorTemperatura: -5, menorTemperatura: -20, quantidadeAgradaveis: 0 }
console.log(analisarTemperaturas([20, 25, 30, 35]));
// { maiorTemperatura: 35, menorTemperatura: 20, quantidadeAgradaveis: 3 }
console.log(analisarTemperaturas([22, 22, 22]));
// { maiorTemperatura: 22, menorTemperatura: 22, quantidadeAgradaveis: 3 }