/* ==================================================
   QUESTÃO 1 — Calculadora de Frete
   ==================================================
Uma transportadora calcula o frete conforme o peso:
- Até 5 kg: R$ 10 por kg.
- Acima de 5 kg: R$ 8 por kg.
O sistema deve retornar o valor total do frete.
Existe um erro no cálculo.
*/

function calcularFrete(peso) {
  let valor;
  if (peso <= 5) {
    valor = peso * 10;
  } else {
    // CORREÇÃO: Os primeiros 5 kg custam R$ 10 por kg.
    // Apenas o peso que ultrapassar 5 kg custa R$ 8 por kg.
    valor = (5 * 10) + ((peso - 5) * 8);
  }

  return valor;
}

console.log(calcularFrete(4));  // Esperado: 40
console.log(calcularFrete(8));  // Esperado: 74
console.log(calcularFrete(6));  // Esperado: 58


/* ==================================================
   QUESTÃO 2 — Contador de Letras
   ==================================================
Um sistema recebe uma frase e precisa contar quantas
vezes determinada letra aparece.
A comparação deve ignorar maiúsculas e minúsculas.
Existe um erro na implementação.
*/

function contarLetra(frase, letra) {
  let quantidade = 0;
  for (let i = 0; i < frase.length; i++) {
    // CORREÇÃO:
    // O operador original era <=.
    // Isso fazia o loop acessar uma posição inexistente.
    // O correto é utilizar apenas <.

    if (frase[i].toLowerCase() === letra.toLowerCase()) {
       quantidade++;
    }
  }

  return quantidade;
}

console.log(contarLetra("Banana", "a"));      // Esperado: 3
console.log(contarLetra("JavaScript", "A"));  // Esperado: 2


/* ==================================================
   QUESTÃO 3 — Conversor de Pontuação
   ==================================================
Uma plataforma converte pontuações em classificações:
- 90 ou mais: "Excelente"
- 70 até 89: "Bom"
- 50 até 69: "Regular"
- Abaixo de 50: "Insuficiente"
O sistema está classificando algumas pontuações
incorretamente.
*/

function classificarPontuacao(pontos) {
  // CORREÇÃO: A condição de 90 precisava vir antes da condição de 70.
  // Caso contrário, uma pontuação de 95 seria classificada
  // como "Bom", pois já satisfaz pontos >= 70.

  if (pontos >= 90) {
    return "Excelente";
  } else if (pontos >= 70) {
    return "Bom";
  } else if (pontos >= 50) {
    return "Regular";
  } else {
    return "Insuficiente";
  }
}

console.log(classificarPontuacao(95)); // Esperado: Excelente
console.log(classificarPontuacao(75)); // Esperado: Bom
console.log(classificarPontuacao(60)); // Esperado: Regular
console.log(classificarPontuacao(30)); // Esperado: Insuficiente


/* ==================================================
   QUESTÃO 4 — Organizador de Números
   ==================================================
Um sistema recebe números e precisa construir dois arrays:
- pares: números divisíveis por 2.
- impares: números não divisíveis por 2.
O sistema está apresentando resultados incorretos.
*/

function separarNumeros(numeros) {
  let pares = [];
  let impares = [];
  for (let numero of numeros) {
    if (numero % 2 === 0) {
      pares.push(numero);
    } else {
      // CORREÇÃO: Originalmente, os números ímpares também eram
      // adicionados ao array pares.
      // Agora utilizamos impares.push().
      impares.push(numero);
    }
  }

  return { pares, impares };
}

console.log(separarNumeros([2, 5, 8, 3, 10, 7]));
// Esperado: { pares: [2, 8, 10], impares: [5, 3, 7] }


/* ==================================================
   QUESTÃO 5 — Busca de Posição
   ==================================================
Um sistema recebe um array e um número.
Ele precisa retornar a posição da primeira ocorrência
desse número.
Se o número não existir, deve retornar -1.
Existe um erro na implementação.
*/

function encontrarPosicao(numeros, alvo) {

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === alvo) {
      return i;
    }

     // CORREÇÃO:
     // O return -1 estava dentro do else.
     // Isso fazia a função encerrar antes de verificar
     // todos os elementos do array.
    }

    // O return -1 precisa ficar fora do loop.
    // Assim, só será executado quando o número não for encontrado.

  return -1;
}

console.log(encontrarPosicao([4, 8, 12, 16], 12));  // Esperado: 2
console.log(encontrarPosicao([4, 8, 12, 16], 7));   // Esperado: -1


/* ==================================================
   QUESTÃO 6 — Calculadora de Despesas
   ==================================================
Um sistema recebe uma lista de despesas.
Ele deve:
1. Somar todas as despesas.
2. Contar quantas despesas são maiores que R$ 100.
3. Calcular a média de todas as despesas.
Existe um erro na implementação.
*/

function analisarDespesas(despesas) {
    let soma = 0;
    let quantidadeAltas = 0;

    for (let despesa of despesas) {
        soma += despesa;

        if (despesa > 100) {
            quantidadeAltas++;
        }
    }

    // CORREÇÃO:
    // Originalmente, a soma era dividida por quantidadeAltas.
    // Mas essa variável conta apenas despesas maiores que 100.
    // Para calcular a média, precisamos dividir pelo total
    // de despesas existentes no array.

    // Também verificamos se o array está vazio para evitar
    // uma divisão por zero.

    let media = despesas.length > 0
        ? soma / despesas.length
        : 0;

    return {
        soma,
        quantidadeAltas,
        media
    };
}

console.log(analisarDespesas([50, 150, 200, 100]));
// Esperado: { soma: 500, quantidadeAltas: 2, media: 125 }