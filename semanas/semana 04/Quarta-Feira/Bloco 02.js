// ==================================================
// BLOCO 2 —  LÓGICA EM MOVIMENTO
// ==================================================


/* ==================================================
   QUESTÃO 1 — CONTROLE DE ENTREGAS
   ==================================================
Uma empresa registra as entregas realizadas durante o dia.
Cada entrega possui:
- codigo: código da entrega;
- distancia: distância percorrida em quilômetros;
- status: "CONCLUIDA" ou "PENDENTE".
Crie a função analisarEntregas(entregas), que retorne um
objeto contendo:
1. codigosConcluidos: array com os códigos das entregas
   concluídas.
2. distanciaTotal: soma das distâncias das entregas
   concluídas.
3. maiorDistancia: maior distância entre as entregas
   concluídas. Retorne null se nenhuma estiver concluída.
ATENÇÃO:
- Entregas pendentes não entram nos cálculos de distância.
- Não altere o array original.
*/

function analisarEntregas(entregas) {
  let codigosConcluidos = [];
  let distanciaTotal = 0;
  let maiorDistancia = null;

  for (let { codigo, distancia, status } of entregas ) {
    if (status === "CONCLUIDA") {
      codigosConcluidos.push(codigo);
      distanciaTotal += distancia;

      if (maiorDistancia === null || distancia > maiorDistancia) {
        maiorDistancia = distancia;
      }
    }
  }

  return { codigosConcluidos, distanciaTotal, maiorDistancia };
}


console.log(analisarEntregas([{ codigo: "E10", distancia: 12, status: "CONCLUIDA" },
{ codigo: "E11", distancia: 20, status: "PENDENTE" },{ codigo: "E12", distancia: 8, status: "CONCLUIDA" },
{ codigo: "E13", distancia: 15, status: "CONCLUIDA" }]));
// RESULTADO ESPERADO: { codigosConcluidos: ["E10", "E12", "E13"], distanciaTotal: 35, maiorDistancia: 15 }

console.log(analisarEntregas([{ codigo: "E20", distancia: 30, status: "PENDENTE" }]));
// RESULTADO ESPERADO: { codigosConcluidos: [], distanciaTotal: 0, maiorDistancia: null }

console.log(analisarEntregas([]));
// RESULTADO ESPERADO: { codigosConcluidos: [], distanciaTotal: 0, maiorDistancia: null }

/* ==================================================
   QUESTÃO 2 — VALIDAÇÃO DE CÓDIGOS
   ==================================================
Um sistema recebe códigos de identificação de produtos.
Um código é considerado válido quando:
- possui exatamente 5 caracteres;
- começa com a letra maiúscula "A";
- não contém espaços.
Crie a função validarCodigos(codigos), que retorne um objeto
contendo:
1. validos: array com os códigos válidos.
2. invalidos: quantidade de códigos inválidos.
3. primeiroValido: primeiro código válido encontrado,
   ou null se nenhum for válido.
ATENÇÃO:
- Preserve a ordem original dos códigos.
- Não altere o array original.
*/

function validarCodigos(codigos) {
  let validos = [];
  let invalidos = 0;
  let primeiroValido = null;

  for (let codigo of codigos) {
    if (codigo.length === 5 && codigo[0] === "A" && !codigo.includes(" ")) {
      validos.push(codigo);

      if (primeiroValido === null) {
        primeiroValido = codigo;
      }
    } else {
      invalidos ++ ;
    }
  }

  return { validos, invalidos, primeiroValido };
}


console.log(validarCodigos([ "A1234", "B1234", "A123", "A 234", "A9876" ]));
// RESULTADO ESPERADO: { validos: ["A1234", "A9876"], invalidos: 3, primeiroValido: "A1234" }

console.log(validarCodigos([ "B9999", "A12", "ABCDE" ]));
// RESULTADO ESPERADO: { validos: ["ABCDE"], invalidos: 3, primeiroValido: "ABCDE" }

console.log(validarCodigos([]));
// RESULTADO ESPERADO: { validos: [], invalidos: 0, primeiroValido: null }


/* ==================================================
   QUESTÃO 3 — RESUMO DE VENDAS
   ==================================================
Uma loja registra as vendas realizadas.
Cada venda possui:
- vendedor: nome do vendedor;
- valor: valor da venda.
Crie a função resumirVendas(vendas), que retorne um objeto
contendo:
1. totalVendido: soma de todas as vendas.
2. vendasAcimaDe100: quantidade de vendas com valor
   estritamente maior que 100.
3. maiorVenda: valor da maior venda registrada.
   Retorne null se não houver vendas.
ATENÇÃO:
- Uma venda de exatamente 100 não entra em vendasAcimaDe100.
- Não altere o array original.
*/

function resumirVendas(vendas) {
  let totalVendido = 0;
  let vendasAcimaDe100 = 0;
  let maiorVenda = null;

  for (let { valor } of vendas) {
    totalVendido += valor;

    if (valor > 100) {
      vendasAcimaDe100 ++ ;
    }

    if (maiorVenda === null || valor > maiorVenda) {
      maiorVenda = valor;
    }
  }

  return { totalVendido, vendasAcimaDe100, maiorVenda };
}

console.log(resumirVendas([ { vendedor: "Ana", valor: 80 }, { vendedor: "Beto", valor: 150 },
  { vendedor: "Caio", valor: 100 }, { vendedor: "Duda", valor: 220 }]));
// RESULTADO ESPERADO: { totalVendido: 550, vendasAcimaDe100: 2, maiorVenda: 220 }

console.log(resumirVendas([ { vendedor: "Lia", valor: 100 }, { vendedor: "Rui", valor: 50 }]));
// RESULTADO ESPERADO: { totalVendido: 150, vendasAcimaDe100: 0, maiorVenda: 100 }

console.log(resumirVendas([]));
// RESULTADO ESPERADO: { totalVendido: 0, vendasAcimaDe100: 0, maiorVenda: null }


/* ==================================================
   QUESTÃO 4 — AJUSTE DE PONTUAÇÃO
   ==================================================
Um jogo precisa atualizar a pontuação dos participantes.
Cada participante possui:
- nome: nome do participante;
- pontos: pontuação atual.
Crie a função atualizarPontuacoes(participantes, bonus), que
retorne um NOVO array de objetos com as mesmas propriedades,
mas com a pontuação atualizada pelo bônus recebido.
REGRAS:
- Se bonus for positivo, some-o aos pontos.
- Se bonus for negativo, subtraia pontos conforme o valor
  do bônus.
- A pontuação final nunca pode ser menor que zero.
- Não altere os objetos nem o array original.
Exemplo:
Participante: { nome: "Ana", pontos: 10 }
Bônus: -15
Resultado:
[{ nome: "Ana", pontos: 0 }]
*/

function atualizarPontuacoes(participantes, bonus) {
  let resultado = [];

  for (let { nome, pontos } of participantes) {
    pontos += bonus;

    if (pontos < 0) {
      pontos = 0;
    }

    resultado.push({ nome, pontos });
  }

  return resultado;
}

console.log(atualizarPontuacoes([{ nome: "Ana", pontos: 10 },{ nome: "Beto", pontos: 25 },
  { nome: "Caio", pontos: 5 }], 8));
// RESULTADO ESPERADO: [ { nome: "Ana", pontos: 18 }, { nome: "Beto", pontos: 33 }, { nome: "Caio", pontos: 13 } ]

console.log(atualizarPontuacoes([ { nome: "Lia", pontos: 10 }, { nome: "Rui", pontos: 4 }], -7));
// RESULTADO ESPERADO: [ { nome: "Lia", pontos: 3 }, { nome: "Rui", pontos: 0 } ]

console.log(atualizarPontuacoes([], 5));
// RESULTADO ESPERADO: []


/* ==================================================
   QUESTÃO 5 — IDENTIFICANDO QUEDAS
   ==================================================
Um sistema monitora a quantidade de acessos recebidos a
cada hora. Os valores estão organizados em ordem cronológica.
Crie a função encontrarPrimeiraQueda(acessos), que retorne
o índice da primeira posição em que o valor atual é menor
que o valor da posição anterior.
Se não houver queda, retorne -1.
Exemplos:
[10, 15, 12, 20] -> 2
[5, 8, 10, 12]   -> -1
ATENÇÃO:
- O índice retornado é o índice do valor que caiu.
- Se o array tiver menos de 2 elementos, retorne -1.
- Não altere o array original.
*/

function encontrarPrimeiraQueda(acessos) {
  for (let i = 1; i < acessos.length; i++) {
    if (acessos[i] < acessos[i - 1]) {
      return i;
    }
  }

  return -1;
}

console.log(encontrarPrimeiraQueda([10, 15, 12, 20, 8]));
// RESULTADO ESPERADO: 2
console.log(encontrarPrimeiraQueda([5, 8, 10, 12]));
// RESULTADO ESPERADO: -1
console.log(encontrarPrimeiraQueda([9]));
// RESULTADO ESPERADO: -1
console.log(encontrarPrimeiraQueda([]));
// RESULTADO ESPERADO: -1


/* ==================================================
   QUESTÃO 6 — ANÁLISE DE NOMES
   ==================================================
Uma plataforma precisa analisar os nomes cadastrados.
Crie a função analisarNomes(nomes), que retorne um objeto
contendo:
1. quantidade: quantidade total de nomes.
2. nomesLongos: array com os nomes que possuem mais de
   5 caracteres.
3. maiorNome: nome com o maior número de caracteres.
   Se houver empate, mantenha o primeiro.
   Se o array estiver vazio, retorne null.
ATENÇÃO:
- Considere os nomes exatamente como foram recebidos.
- Não altere o array original.
*/

function analisarNomes(nomes) {
  if (nomes.length === 0) {
    return { quantidade:0, nomesLongos:[], maiorNome: null };
  }

  let quantidade = nomes.length;
  let nomesLongos = [];
  let maiorNome = null;

  for (let nome of nomes) {
    if (nome.length > 5) {
      nomesLongos.push(nome);
    }

    if (maiorNome === null || nome.length > maiorNome.length) {
      maiorNome = nome;
    }
  }

  return { quantidade, nomesLongos, maiorNome };
}

console.log(analisarNomes([ "Ana", "Roberto", "Lucas", "Fernanda", "Marcos" ]));
// RESULTADO ESPERADO: { quantidade: 5, nomesLongos: ["Roberto", "Fernanda", "Marcos"], maiorNome: "Fernanda" }

console.log(analisarNomes([ "Carlos", "Mariana", "Ricardo" ]));
// RESULTADO ESPERADO: { quantidade: 3, nomesLongos: ["Carlos", "Mariana", "Ricardo"], maiorNome: "Mariana" }

console.log(analisarNomes([]));
// RESULTADO ESPERADO: { quantidade: 0, nomesLongos: [], maiorNome: null }