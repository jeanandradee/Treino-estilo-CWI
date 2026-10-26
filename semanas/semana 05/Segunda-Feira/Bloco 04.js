/* ==================================================
   DESAFIO 1 — RELATÓRIO DE ENTREGAS
   ==================================================
Uma transportadora precisa analisar suas entregas.
Crie a função gerarRelatorioEntregas(entregas).
Cada entrega possui:
- codigo: string
- distancia: número
- status: string ("CONCLUIDA" ou "PENDENTE")
A função deve retornar um objeto com:
- totalEntregas: quantidade total de entregas.
- entregasConcluidas: quantidade com status "CONCLUIDA".
- distanciaTotal: soma das distâncias somente das entregas concluídas.
- codigoPrimeiraPendente: código da primeira entrega pendente,
  ou null se não houver nenhuma.
Não altere o array original.
*/
function gerarRelatorioEntregas(entregas) {
  let totalEntregas = 0;
  let entregasConcluidas = 0;
  let distanciaTotal = 0;
  let codigoPrimeiraPendente = null;

  for (let { codigo, distancia, status } of entregas) {
    totalEntregas ++ ;
    if (status === "CONCLUIDA") {
      entregasConcluidas ++ ;
      distanciaTotal += distancia ;
    } else {
      if (codigoPrimeiraPendente === null) {
        codigoPrimeiraPendente = codigo;
      }
    }
  }

  return { totalEntregas, entregasConcluidas, distanciaTotal, codigoPrimeiraPendente };
}


console.log(gerarRelatorioEntregas( [ { codigo: "E01", distancia: 10, status: "CONCLUIDA" },
 { codigo: "E02", distancia: 25, status: "PENDENTE" }, { codigo: "E03", distancia: 15, status: "CONCLUIDA" },
 { codigo: "E04", distancia: 8, status: "PENDENTE" }]));
// Resultado esperado: { totalEntregas: 4, entregasConcluidas: 2, distanciaTotal: 25, codigoPrimeiraPendente: "E02" }

/* ==================================================
   DESAFIO 2 — AUDITORIA DE PRODUTOS
   ==================================================
Uma loja precisa identificar produtos que exigem atenção.
Crie a função auditarProdutos(produtos).
Cada produto possui:
- nome: string
- estoque: número
- preco: número
A função deve retornar um objeto com:
- totalProdutos: quantidade total de produtos.
- baixoEstoque: nomes dos produtos com estoque menor que 5.
- valorEstoque: soma do estoque multiplicado pelo preço
  de cada produto.
- primeiroSemEstoque: nome do primeiro produto com estoque
  igual a zero, ou null se não houver nenhum.
Considere baixo estoque qualquer quantidade menor que 5,
inclusive zero.
Não altere o array original.
*/

function auditarProdutos(produtos) {
  let totalProdutos = 0;
  let baixoEstoque = [];
  let valorEstoque = 0;
  let primeiroSemEstoque = null;

  for (let { nome, estoque, preco } of produtos) {
    totalProdutos ++ ;
    if (estoque < 5) {
      baixoEstoque.push(nome);
    }
    valorEstoque += estoque * preco;

    if (primeiroSemEstoque === null && estoque === 0) {
      primeiroSemEstoque = nome;
    }
  }

  return { totalProdutos, baixoEstoque, valorEstoque, primeiroSemEstoque };
}

console.log(auditarProdutos([ { nome: "Teclado", estoque: 8, preco: 50 }, { nome: "Mouse", estoque: 3, preco: 30 },
 { nome: "Monitor", estoque: 0, preco: 600 }, { nome: "Cabo", estoque: 4, preco: 10 } ]));

// Resultado esperado: { totalProdutos: 4, baixoEstoque: ["Mouse", "Monitor", "Cabo"], 
// valorEstoque: 520, primeiroSemEstoque: "Monitor" }

/* ==================================================
   DESAFIO 3 — ANÁLISE DE RESULTADOS
   ==================================================
Uma plataforma de avaliações precisa gerar um resumo.
Crie a função analisarResultados(resultados).
Cada resultado possui:
- participante: string
- nota: número
- status: string ("VALIDO" ou "INVALIDO")
A função deve retornar um objeto com:
- totalResultados: quantidade total de registros.
- resultadosValidos: quantidade de registros com status "VALIDO".
- somaNotasValidas: soma das notas somente dos registros válidos.
- participantesAprovados: nomes dos participantes com nota maior
  ou igual a 7 e status "VALIDO", sem nomes duplicados,
  mantendo a ordem da primeira aparição.
- primeiroReprovado: nome do primeiro participante com status
  "VALIDO" e nota menor que 5, ou null se não existir.
Não altere o array original.
*/

function analisarResultados(resultados) {
  let totalResultados = 0;
  let resultadosValidos = 0;
  let somaNotasValidas = 0;
  let participantesAprovados = [];
  let primeiroReprovado = null;

  for (let { participante, nota, status } of resultados) {
    totalResultados++;

    if (status === "VALIDO") {
      resultadosValidos++;
      somaNotasValidas += nota;

      if (nota >= 7) {
        if (!participantesAprovados.includes(participante)) {
          participantesAprovados.push(participante);
        }
      }

      if (primeiroReprovado === null && nota < 5) {
        primeiroReprovado = participante;
      }
    }
  }

  return { totalResultados, resultadosValidos, somaNotasValidas, participantesAprovados, primeiroReprovado };
}

console.log(analisarResultados([ { participante: "Ana", nota: 8, status: "VALIDO" },{ participante: "Beto", nota: 4, status: "VALIDO" },
 { participante: "Caio", nota: 9, status: "INVALIDO" }, { participante: "Duda", nota: 7, status: "VALIDO" },
 { participante: "Ana", nota: 6, status: "VALIDO" }, { participante: "Eva", nota: 3, status: "VALIDO" } ]));

// Resultado esperado: { totalResultados: 6, resultadosValidos: 5, somaNotasValidas: 28,
// participantesAprovados: ["Ana", "Duda"], primeiroReprovado: "Beto" }