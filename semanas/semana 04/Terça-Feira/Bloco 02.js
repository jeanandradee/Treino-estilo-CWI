/* ==================================================
QUESTÃO 1 — Controle de Acesso
==================================================
Um sistema registra as tentativas de acesso dos usuários.
Cada tentativa possui o nome do usuário e uma informação
que indica se a senha foi validada corretamente.
Crie a função analisarAcessos(tentativas), que retorna
um objeto contendo:
- aprovados: quantidade de acessos aprovados;
- recusados: quantidade de acessos recusados;
- primeiroAprovado: nome do primeiro usuário aprovado.
  Se nenhum acesso for aprovado, deve retornar null.
Considere que a lista pode estar vazia.
*/

function analisarAcessos(tentativas) {
  let aprovados = 0;
  let recusados = 0;
  let primeiroAprovado = null;

  for (let { usuario, senhaCorreta } of tentativas) {
    if (senhaCorreta) {
      aprovados ++;

      if (primeiroAprovado === null) {
        primeiroAprovado = usuario;  
      }
    } else {
      recusados ++;
    }
  }

  return { aprovados, recusados, primeiroAprovado };
}

console.log(analisarAcessos([ { usuario: "Ana", senhaCorreta: false },
 { usuario: "Beto", senhaCorreta: true }, { usuario: "Caio", senhaCorreta: true } ]));
// Esperado: { aprovados: 2, recusados: 1, primeiroAprovado: "Beto" }

console.log(analisarAcessos([]));
// Esperado: { aprovados: 0, recusados: 0, primeiroAprovado: null }


/*==================================================
QUESTÃO 2 — Separação de Valores
==================================================
Um sistema financeiro recebe uma lista de valores positivos,
negativos e zeros.
Crie a função separarMovimentos(valores), que retorna
um objeto contendo:
- creditos: novo array com os valores positivos;
- debitos: novo array com os valores negativos;
- saldo: soma de todos os valores recebidos.
O zero deve ser ignorado nos arrays de créditos e débitos,
mas deve ser considerado normalmente no cálculo do saldo.
Preserve a ordem original dos valores e não modifique
o array recebido.
*/

function separarMovimentos(valores) {
  let creditos = [];
  let debitos = [];
  let saldo = 0;

  for (let valor of valores) {
    if (valor > 0) {
      creditos.push(valor);
    } else if (valor < 0) {
      debitos.push(valor);
    }

    saldo += valor;
  }

  return { creditos, debitos, saldo };
}

console.log(separarMovimentos([100, -30, 0, 50, -10]));
// Esperado: { creditos: [100, 50], debitos: [-30, -10], saldo: 110 }

console.log(separarMovimentos([-20, 0, 15]));
// Esperado: { creditos: [15], debitos: [-20], saldo: -5 }


/* ==================================================
QUESTÃO 3 — Validação de Códigos
==================================================
Um sistema recebe códigos de identificação e precisa
separar aqueles que não atendem aos critérios de validade.
Um código é válido somente quando:
- possui exatamente 5 caracteres;
- começa com a letra maiúscula "A".
Crie a função listarCodigosInvalidos(codigos), que retorna
um novo array contendo somente os códigos inválidos.
Preserve a ordem original e diferencie letras maiúsculas
de minúsculas. Não modifique o array recebido.
*/

function listarCodigosInvalidos(codigos) {
  let invalidos = [];

  for (let codigo of codigos) {
    if (codigo.length !== 5 || codigo[0] !== "A" ) {
      invalidos.push(codigo);
    }
  }

  return invalidos;
}

console.log(listarCodigosInvalidos([ "A1234", "B1234", "A123", "A5678", "a9999" ]));
// Esperado: ["B1234", "A123", "a9999"]

console.log(listarCodigosInvalidos(["A0000", "A12345"]));
// Esperado: ["A12345"]


/* ==================================================
QUESTÃO 4 — Atualização de Pontos
==================================================
Um jogo precisa atualizar a pontuação dos jogadores
de acordo com um bônus que pode ser positivo ou negativo.
Cada jogador possui um nome e sua pontuação atual.
Crie a função atualizarPontos(jogadores, bonus), que
retorna um novo array de objetos contendo o nome e
a pontuação atualizada de cada jogador.
Regras:
- Adicione o bônus à pontuação de cada jogador.
- Se a pontuação resultante for negativa, considere zero.
- Preserve a ordem dos jogadores.
- Não modifique o array original nem os objetos recebidos.
*/

function atualizarPontos(jogadores, bonus) {
  let resultado = [];

  for (let { nome, pontos } of jogadores) {
    pontos += bonus;

    if (pontos < 0) {
      pontos = 0;
    }

    resultado.push({ nome, pontos });
  }

  return resultado;
}

console.log(atualizarPontos([ { nome: "Lia", pontos: 20 },
 { nome: "Rui", pontos: 5 }, { nome: "Bia", pontos: 12 }], -8));
// Esperado: [ { nome: "Lia", pontos: 12 }, { nome: "Rui", pontos: 0 }, { nome: "Bia", pontos: 4 } ]

console.log(atualizarPontos([ { nome: "Ivo", pontos: 10 } ], 5));
// Esperado: [{ nome: "Ivo", pontos: 15 }]


/* ==================================================
QUESTÃO 5 — Busca de Temperatura
==================================================
Um sistema registra as temperaturas ao longo do dia.
Crie a função encontrarPrimeiraQueda(temperaturas), que
retorna o índice da primeira temperatura que seja menor
que a temperatura imediatamente anterior.
Se nenhuma queda for encontrada, retorne -1.
Regras:
- Compare cada temperatura com a anterior.
- Retorne somente o índice da primeira queda.
- Se o array tiver menos de dois elementos, retorne -1.
*/

function encontrarPrimeiraQueda(temperaturas) {

  for (let i = 1; i < temperaturas.length; i++) {
    if (temperaturas[i] < temperaturas[i -1]) {
      return i;
    }
  }

  return -1;
}

console.log(encontrarPrimeiraQueda([18, 22, 25, 20, 19]));
// Esperado: 3

console.log(encontrarPrimeiraQueda([30, 28, 27]));
// Esperado: 1

console.log(encontrarPrimeiraQueda([10, 15, 20]));
// Esperado: -1

console.log(encontrarPrimeiraQueda([8]));
// Esperado: -1


/* ==================================================
QUESTÃO 6 — Relatório de Palavras
==================================================
Uma ferramenta precisa gerar um relatório sobre uma
lista de palavras.
Crie a função analisarPalavras(palavras), que retorna
um objeto contendo:
- quantidade: número total de palavras recebidas;
- maioresQueCinco: quantidade de palavras com mais
  de 5 caracteres;
- palavraMaisLonga: palavra com o maior comprimento.
Se duas ou mais palavras tiverem o mesmo comprimento
máximo, mantenha a primeira encontrada.
Se o array estiver vazio, palavraMaisLonga deve ser null.
Nesse caso, as quantidades devem ser zero.
Não modifique o array recebido.
*/

function analisarPalavras(palavras) {
  if (palavras.length === 0) {
    return {quantidade: 0, maioresQueCinco:0, palavraMaisLonga: null};
  }
  let quantidade = palavras.length;
  let maioresQueCinco = 0;
  let palavraMaisLonga = null;

  for (let palavra of palavras) {
    if (palavra.length > 5) {
      maioresQueCinco ++;
    }

    if (palavraMaisLonga === null || palavra.length > palavraMaisLonga.length) {
      palavraMaisLonga = palavra;
    }
  }

  return { quantidade, maioresQueCinco, palavraMaisLonga };
}

console.log(analisarPalavras([ "casa", "janela", "computador", "livro", "caneta" ]));
// Esperado: { quantidade: 5, maioresQueCinco: 3, palavraMaisLonga: "computador" }

console.log(analisarPalavras(["abacate", "banana", "laranja"]));
// Esperado: { quantidade: 3, maioresQueCinco: 3, palavraMaisLonga: "abacate" }

console.log(analisarPalavras([]));
// Esperado: { quantidade: 0, maioresQueCinco: 0, palavraMaisLonga: null }