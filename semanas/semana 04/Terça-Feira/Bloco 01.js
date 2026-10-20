/* QUESTÃO 1 — Temperatura do Ambiente
Um sistema monitora a temperatura de uma sala.
Crie a função verificarTemperatura(temperatura), que retorna:
- "Frio" se a temperatura for menor que 18.
- "Agradavel" se estiver entre 18 e 26, inclusive.
- "Quente" se for maior que 26.
Exemplos:
verificarTemperatura(15) -> "Frio"
verificarTemperatura(22) -> "Agradavel"
verificarTemperatura(30) -> "Quente"
*/

function verificarTemperatura(temperatura) {
  return temperatura < 18 ? "Frio" : temperatura <= 26 ? "Agradavel" : "Quente";
}

console.log(verificarTemperatura(15)); // Frio
console.log(verificarTemperatura(22)); // Agradavel
console.log(verificarTemperatura(30)); // Quente



/* QUESTÃO 2 — Contagem de Ocorrências
Uma equipe precisa contar quantas vezes um código aparece
em uma lista de registros.
Crie a função contarCodigo(codigos, procurado), que retorna
a quantidade de ocorrências de procurado no array.
Exemplos:

*/

function contarCodigo(codigos, procurado) {
  let contador = 0;

  for (let codigo of codigos) {
    if (codigo === procurado) {
      contador ++;
    }
  }

  return contador;
}
console.log(contarCodigo([10, 20, 10, 30, 10], 10)) // 3
console.log(contarCodigo(["A", "B", "A"], "B")) // 1
console.log(contarCodigo([1, 2, 3], 9)) // 0

/* QUESTÃO 3 — Ajuste de Preços
Uma loja precisa aplicar um desconto fixo aos preços de seus produtos.
Crie a função aplicarDesconto(precos, desconto), que retorna
um novo array com o desconto subtraído de cada preço.
Regras:
- Se o resultado for menor que zero, considere zero.
- Não altere o array original.
*/

function aplicarDesconto(precos, desconto) {
  let resultado = [];

  for (let preco of precos) {
    let novoPreco = preco - desconto;

    if (novoPreco < 0) {
      novoPreco = 0;
    }

    resultado.push(novoPreco);
  }

  return resultado;
}
console.log(aplicarDesconto([100, 50, 20], 10)) // [90, 40, 10]
console.log(aplicarDesconto([15, 5], 10)) // [5, 0]

/* QUESTÃO 4 — Identificação de Usuários
Um sistema recebe uma lista de usuários e precisa identificar
quais estão ativos.
Cada objeto possui:
- nome
- ativo (boolean)
Crie a função listarUsuariosAtivos(usuarios), que retorna
um array contendo apenas os nomes dos usuários ativos,
mantendo a ordem original.
*/

function listarUsuariosAtivos(usuarios) {
  let ativos = [];

  for (let { nome, ativo } of usuarios) {
    if (ativo === true) {
      ativos.push(nome);
    }
  }

  return ativos;
}
console.log(listarUsuariosAtivos([ { nome: "Ana", ativo: true },
 { nome: "Bruno", ativo: false }, { nome: "Caio", ativo: true } ])) // ["Ana", "Caio"]

/* QUESTÃO 5 — Soma dos Dígitos
Um sistema recebe um número inteiro positivo e precisa
somar todos os seus dígitos.
Crie a função somarDigitos(numero).
Não transforme o número em string.
*/

function somarDigitos(numero) {
  let soma = 0;

  while (numero > 0) {
    let divisao = Math.floor(numero / 10);
    let digito = numero - divisao * 10;

    soma += digito;
    numero = divisao;
  }

  return soma;
}

console.log(somarDigitos(1234)) // 10
console.log(somarDigitos(508)) // 13
console.log(somarDigitos(7)) // 7


/* QUESTÃO 6 — Resumo de Pontuações
Um jogo precisa analisar as pontuações obtidas por um jogador.
Crie a função resumirPontuacoes(pontuacoes), que retorna
um objeto com:
- total: soma das pontuações.
- quantidade: número de pontuações.
- aprovadas: quantidade de pontuações maiores ou iguais a 60.
Se o array estiver vazio, retorne os três valores como zero.
*/

function resumirPontuacoes(pontuacoes) {
  let total = 0
  let quantidade = 0;
  let aprovadas = 0;

  for (let pontuacao of pontuacoes) {
    total += pontuacao;
    quantidade ++;

    if (pontuacao >= 60) {
      aprovadas ++;
    }
  }

  return { total, quantidade, aprovadas };
}

console.log(resumirPontuacoes([50, 60, 90, 40])) // { total: 240, quantidade: 4, aprovadas: 2 }