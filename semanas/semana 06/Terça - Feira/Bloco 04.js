/* QUESTÃO 1 — Monitoramento de Sensores
Uma empresa monitora sensores instalados em diferentes salas.
Cada sala possui um conjunto de medições.
O sistema precisa identificar:
1. Quantas medições são consideradas normais (entre 20 e 80,
   incluindo os limites).
2. Quantas medições estão fora dessa faixa.
3. Qual foi a maior medição registrada.
4. Em qual sala ocorreu essa maior medição.
Retorne um objeto com essas informações.
Não modifique a matriz original.
*/

function analisarSensores(salas) {
  let normais = 0;
  let foraDaFaixa = 0;
  let maiorMedicao = null;
  let salaMaiorMedicao = -1;

  for (let i = 0; i < salas.length; i++) {
    for (let j = 0; j < salas[i].length; j++) {
      if (salas[i][j] >= 20 && salas[i][j] <= 80) {
        normais ++ ;
      } else {
        foraDaFaixa ++ ;
      }

      if (maiorMedicao === null || salas[i][j] > maiorMedicao) {
        maiorMedicao = salas[i][j];
        salaMaiorMedicao = i;
      }
    }
  }

  return { 
    normais,
    foraDaFaixa,
    maiorMedicao,
    salaMaiorMedicao
  }
}

console.log(analisarSensores([
    [25, 90, 40],
    [15, 60, 85],
    [70, 30, 100]
]));

/* Resultado esperado:
{
    normais: 5,
    foraDaFaixa: 4,
    maiorMedicao: 100,
    salaMaiorMedicao: 2
}
*/

/* QUESTÃO 2 — Análise de Documentos
Um sistema recebe uma lista de documentos enviados por usuários.
Cada documento possui:
- nome
- tamanho
- formato
O sistema deve:
1. Contar quantos documentos possuem formato PDF.
2. Somar o tamanho de todos os documentos.
3. Identificar o documento com o maior tamanho.
4. Retornar os nomes dos documentos que possuem tamanho
   superior a 100.
A identificação do formato deve ignorar maiúsculas
e minúsculas.
Retorne um objeto com os resultados.
Não modifique a lista original.
*/

function analisarDocumentos(documentos) {
  let totalPDF = 0;
  let tamanhoTotal = 0;
  let maiorDocumento = null;
  let tamanhoMaiorDocumento = 0;
  let documentosGrandes = [];

  for (let { nome, formato, tamanho } of documentos) {
    formato = formato.toUpperCase();
    if (formato === "PDF") {
      totalPDF ++ ;
    }

    tamanhoTotal += tamanho;

    if (maiorDocumento === null || tamanho > tamanhoMaiorDocumento) {
      tamanhoMaiorDocumento = tamanho;
      maiorDocumento = nome;
    }

    if (tamanho > 100) {
      documentosGrandes.push(nome);
    }
  }

  return {
    totalPDF,
    tamanhoTotal,
    maiorDocumento,
    documentosGrandes
  }
}

console.log(analisarDocumentos([
    { nome: "relatorio", formato: "PDF", tamanho: 150 },
    { nome: "foto", formato: "JPG", tamanho: 80 },
    { nome: "contrato", formato: "pdf", tamanho: 200 },
    { nome: "resumo", formato: "TXT", tamanho: 50 },
    { nome: "manual", formato: "PDF", tamanho: 120 }
]));

/* Resultado esperado:
{
    totalPDF: 3,
    tamanhoTotal: 600,
    maiorDocumento: "contrato",
    documentosGrandes: ["relatorio", "contrato", "manual"]
}
*/

/* QUESTÃO 3 — Controle de Avaliações
Uma plataforma recebe avaliações de produtos.
Cada avaliação possui:
- produto
- nota
- comentario
O sistema precisa gerar um relatório com:
1. A quantidade de avaliações com nota maior ou igual a 4.
2. A quantidade de avaliações com nota menor que 4.
3. A média de todas as notas.
4. O nome do produto que recebeu a menor nota.
5. Uma lista com os comentários que possuem pelo menos
   10 caracteres, desconsiderando espaços externos.
Se houver empate na menor nota, considere o primeiro
produto encontrado.
Retorne todas as informações em um objeto.
Não modifique a lista original.
*/

function gerarRelatorio(avaliacoes) {
  let positivas = 0;
  let negativas = 0;
  let mediaNotas = 0;
  let soma = 0;
  let produtoMenorNota = null;
  let menorNota = Infinity;
  let comentariosValidos = [];

  for (let { produto, nota, comentario } of avaliacoes) {
    if (nota >= 4) {
      positivas ++ ;
    } else {
      negativas ++ ;  
    }

    soma += nota;
  
    if (produtoMenorNota === null || nota < menorNota) {
      menorNota = nota;
      produtoMenorNota = produto;
    }

    if (comentario.trim().length >= 10) {
      comentariosValidos.push(comentario);
    }

  }

  mediaNotas = avaliacoes.length > 0 ? soma / avaliacoes.length : 0;


  return {
    positivas,
    negativas,
    mediaNotas,
    produtoMenorNota,
    comentariosValidos
  }
}

console.log(gerarRelatorio([
    { produto: "Teclado", nota: 5, comentario: "Muito bom!" },
    { produto: "Mouse", nota: 2, comentario: "Ruim" },
    { produto: "Monitor", nota: 4, comentario: "Imagem excelente" },
    { produto: "Headset", nota: 2, comentario: "Não recomendo" },
    { produto: "Webcam", nota: 3, comentario: "Funciona bem" }
]));

/* Resultado esperado:
{
    positivas: 2,
    negativas: 3,
    mediaNotas: 3.2,
    produtoMenorNota: "Mouse",
    comentariosValidos: [
        "Muito bom!",
        "Imagem excelente",
        "Não recomendo",
        "Funciona bem"
    ]
}
*/