/* ==================================================
   DESAFIO 1 — RELATÓRIO DE ENTREGAS
   ==================================================
Uma transportadora precisa gerar um relatório das entregas.
Cada entrega possui:
- codigo
- status
- distancia
Regras:
1. Conte todas as entregas recebidas.
2. Conte somente as entregas com status "CONCLUIDA".
3. Some a distância APENAS das entregas concluídas.
4. Guarde os códigos das entregas concluídas em um array.
5. Identifique a maior distância entre as entregas concluídas.
   Se não houver nenhuma entrega concluída, use null.
Retorne um objeto com as propriedades:
totalEntregas, entregasConcluidas, distanciaTotal,
codigosConcluidos e maiorDistancia.
Não altere o array original.
*/

function gerarRelatorioEntregas(entregas) {
  let totalEntregas = 0;
  let entregasConcluidas = 0;
  let distanciaTotal = 0;
  let codigosConcluidos = [];
  let maiorDistancia = null;

  for (let { codigo, status, distancia } of entregas) {
    totalEntregas ++ ;
    if (status === "CONCLUIDA") {
      entregasConcluidas ++ ;
      distanciaTotal += distancia;
      codigosConcluidos.push(codigo);

      if (maiorDistancia === null || distancia > maiorDistancia) {
        maiorDistancia = distancia;
      }
    }
  }

  return { totalEntregas, entregasConcluidas, distanciaTotal, codigosConcluidos, maiorDistancia };
}

console.log(gerarRelatorioEntregas([{ codigo: "E1", status: "CONCLUIDA", distancia: 12 },
{ codigo: "E2", status: "PENDENTE", distancia: 30 },{ codigo: "E3", status: "CONCLUIDA", distancia: 8 },
{ codigo: "E4", status: "CANCELADA", distancia: 15 }]));
/* Resultado esperado: { totalEntregas: 4, entregasConcluidas: 2, distanciaTotal: 20,
codigosConcluidos: ["E1", "E3"], maiorDistancia: 12 }        */


/* ==================================================
   DESAFIO 2 — AUDITORIA DE PRODUTOS
   ==================================================
Uma loja precisa analisar os produtos cadastrados.
Cada produto possui:
- nome
- preco
- estoque
- ativo
Regras:
1. Conte todos os produtos recebidos.
2. Conte os produtos ativos com estoque maior que zero.
3. Some o valor em estoque APENAS desses produtos ativos
   com estoque positivo. Para cada produto, calcule:
   preco * estoque.
4. Guarde os nomes dos produtos inativos em um array,
   sem repetir nomes e preservando a ordem da primeira aparição.
5. Identifique o primeiro produto ativo com estoque zero.
   Retorne seu nome ou null se não existir.
Retorne um objeto com as propriedades:
totalProdutos, produtosDisponiveis, valorEmEstoque,
nomesInativos e primeiroAtivoZerado.
Não altere o array original.
*/

function auditarProdutos(produtos) {
  let totalProdutos = 0;
  let produtosDisponiveis = 0;
  let valorEmEstoque = 0;
  let nomesInativos = [];
  let primeiroAtivoZerado = null;

  for (let { nome, preco, estoque, ativo } of produtos) {
    totalProdutos ++ ;
    if (ativo && estoque > 0) {
      produtosDisponiveis ++ ;
      valorEmEstoque += estoque * preco;
    } else if (!ativo && !nomesInativos.includes(nome)) {
      nomesInativos.push(nome);
    }

    if (primeiroAtivoZerado === null && estoque === 0 && ativo) {
      primeiroAtivoZerado = nome;
    }

  }

  return { totalProdutos, produtosDisponiveis, valorEmEstoque, nomesInativos, primeiroAtivoZerado };
}

console.log(auditarProdutos([{ nome: "Teclado", preco: 100, estoque: 2, ativo: true },
{ nome: "Mouse", preco: 50, estoque: 0, ativo: true },{ nome: "Cabo", preco: 20, estoque: 5, ativo: false },
{ nome: "Monitor", preco: 500, estoque: 1, ativo: true },{ nome: "Cabo", preco: 25, estoque: 3, ativo: false }]));
/* Resultado esperado: { totalProdutos: 5, produtosDisponiveis: 2, valorEmEstoque: 700,
  nomesInativos: ["Cabo"], primeiroAtivoZerado: "Mouse" }  */


/* ==================================================
   DESAFIO 3 — ANÁLISE DE RESULTADOS
   ==================================================
Uma plataforma precisa analisar as notas dos participantes.
Cada participante possui:
- nome
- nota
- presente
Regras:
1. Conte todos os participantes recebidos.
2. Conte os participantes presentes com nota maior ou igual
   a 7.
3. Some as notas APENAS dos participantes presentes.
4. Guarde os nomes dos participantes ausentes em um array.
5. Identifique o primeiro participante presente com nota
   abaixo de 5. Retorne seu nome ou null se não existir.
Retorne um objeto com as propriedades:
totalParticipantes, aprovadosPresentes, somaNotasPresentes,
nomesAusentes e primeiroPresenteNotaBaixa.
Importante:
- Para a aprovação, o participante precisa estar presente
  E ter nota maior ou igual a 7.
- A soma das notas considera todos os presentes, aprovados
  ou não.
- Não altere o array original.
*/

function analisarResultados(participantes) {
  let totalParticipantes = 0;
  let aprovadosPresentes = 0;
  let somaNotasPresentes = 0;
  let nomesAusentes = [];
  let primeiroPresenteNotaBaixa = null;

  for (let { nome, nota, presente } of participantes) {
    totalParticipantes ++ ;
    if (!presente) {
      nomesAusentes.push(nome);
    } else {
      somaNotasPresentes += nota;
      if (nota >= 7) {
        aprovadosPresentes ++ ;
      }

      if (primeiroPresenteNotaBaixa === null && nota < 5) {
        primeiroPresenteNotaBaixa = nome;
      }
    }
  }

  return { totalParticipantes, aprovadosPresentes, somaNotasPresentes,nomesAusentes, primeiroPresenteNotaBaixa };
}

console.log(analisarResultados([{ nome: "Ana", nota: 8, presente: true },{ nome: "Beto", nota: 4, presente: true },
{ nome: "Caio", nota: 10, presente: false },{ nome: "Duda", nota: 6, presente: true }, { nome: "Eva", nota: 7, presente: true }]));
/* Resultado esperado: { totalParticipantes: 5, aprovadosPresentes: 2, somaNotasPresentes: 25,
 nomesAusentes: ["Caio"], primeiroPresenteNotaBaixa: "Beto" }    */