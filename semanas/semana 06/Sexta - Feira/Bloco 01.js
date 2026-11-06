/* B1 — Operação: Lógica em Movimento
   Q1 — Controle de Temperatura
Um sistema registra temperaturas de diferentes ambientes.
Retorne:
1. Quantidade de temperaturas abaixo de 18.
2. Quantidade entre 18 e 30, inclusive.
3. Quantidade acima de 30.
4. A maior temperatura registrada (ou null se vazio).
Não modificar o array original.
*/

function analisarTemperaturas(temperaturas) {
  const abaixo = temperaturas.filter(temp => temp < 18).length;

  const normais = temperaturas.filter(temp => temp <= 30 && temp >= 18).length;

  const acima = temperaturas.filter(temp => temp > 30).length;

  const maior = temperaturas.reduce((acc , t) => 
  acc === null || t > acc ? t : acc
  , null);


  return {
    abaixo,
    normais,
    acima,
    maior
  }
}

console.log(analisarTemperaturas([12, 18, 25, 31, 28, 35, 16]));
// Esperado: { abaixo: 2, normais: 3, acima: 2, maior: 35 }

/* Q2 — Separação de Valores
Um caixa recebe valores de pagamentos.
Retorne:
1. Um array com os valores inteiros.
2. Um array com os valores que possuem casas decimais.
3. A soma dos valores inteiros.
4. A quantidade de pagamentos iguais a zero.
Não modificar o array original.
*/

function separarPagamentos(valores) {
  const inteiros = valores.filter(valor => Number.isInteger(valor));

  const decimais = valores.filter(valor => !Number.isInteger(valor));

  const somaInteiros = inteiros.reduce((acc, valor) => acc + valor, 0);

  const zeros = valores.filter(valor => valor === 0).length;

  return {
    inteiros,
    decimais,
    somaInteiros,
    zeros
  };
}

console.log(separarPagamentos([10, 15.5, 0, 8, 22.75, 0, 4]));
// Esperado: { inteiros: [10, 0, 8, 0, 4], decimais: [15.5, 22.75], somaInteiros: 22, zeros: 2 }


/* Q3 — Análise de Palavras
Uma aplicação recebe uma frase.
Retorne:
1. Quantidade de palavras.
2. Quantidade de palavras com mais de 6 caracteres.
3. A primeira palavra da frase.
4. A última palavra da frase.
Considere espaços extras no início, no final
e entre as palavras.
Se a frase estiver vazia, retorne null para
primeira e última palavra.
*/

function analisarFrase(frase) {
  const palavras = frase.trim().split(/\s+/).filter(p => p !== "");

  const quantidade = palavras.length;

  const longas = palavras.filter(p => p.length > 6).length;

  const primeira = palavras.length > 0 ? palavras[0] : null;

  const ultima = palavras.length > 0 ? palavras[palavras.length - 1] : null;

  return {
    quantidade,
    longas,
    primeira,
    ultima
  };
}

console.log(analisarFrase("  JavaScript   exige bastante prática diária  "));
// Esperado: { quantidade: 5, longas: 3, primeira: "JavaScript", ultima: "diária" }
