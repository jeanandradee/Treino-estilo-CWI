/* Q1 — Sistema de Pedidos e Faturamento
Habilidades: JSON, objetos, arrays, operadores, condicionais e acumuladores.
Uma loja recebe pedidos em formato JSON.
Cada pedido possui:
- cliente
- itens: array de produtos
- cada produto possui nome, quantidade e preco.
Regras:
- Calcule o valor total de cada pedido.
- Pedidos com total >= 500 recebem desconto de 10%.
- Pedidos com total < 500 não recebem desconto.
Retorne:
1. Lista de pedidos contendo:
   cliente, valorBruto, desconto e valorFinal.
2. Faturamento total após os descontos.
3. Nome do cliente que realizou o pedido de maior valor final.
Em caso de empate no maior valor final,
considere o primeiro pedido.
*/

function processarPedidos(jsonPedidos) {
  let pedidosObj = JSON.parse(jsonPedidos);
  let pedidos = [];
  let faturamentoTotal = 0;
  let maiorPedido = null;
  let maiorValorFinal = -Infinity;

  for (let { cliente, itens } of pedidosObj) {
    let valorBruto = 0;
    let desconto = 0;
    let valorFinal = 0;

    for (let { quantidade, preco } of itens) {
      valorBruto += quantidade * preco;
    }

    if (valorBruto >= 500) {
      valorFinal = valorBruto * 0.9;
      desconto = Math.abs(valorFinal - valorBruto);
    } else {
      valorFinal = valorBruto;
    }

    faturamentoTotal += valorFinal;

    pedidos.push({
      cliente,
      valorBruto,
      desconto,
      valorFinal
    });

    if (valorFinal > maiorValorFinal) {
      maiorValorFinal = valorFinal;
      maiorPedido = cliente;
    }
  }

  return {
    pedidos,
    faturamentoTotal,
    maiorPedido
  };
}

console.log(processarPedidos(`[
  {
    "cliente": "Ana",
    "itens": [
      { "nome": "Teclado", "quantidade": 2, "preco": 150 },
      { "nome": "Mouse", "quantidade": 1, "preco": 80 }
    ]
  },
  {
    "cliente": "Carlos",
    "itens": [
      { "nome": "Monitor", "quantidade": 2, "preco": 300 }
    ]
  },
  {
    "cliente": "Julia",
    "itens": [
      { "nome": "Headset", "quantidade": 2, "preco": 100 }
    ]
  }
]`));

// Esperado:
// {
//   pedidos: [
//     { cliente: "Ana", valorBruto: 380, desconto: 0, valorFinal: 380 },
//     { cliente: "Carlos", valorBruto: 600, desconto: 60, valorFinal: 540 },
//     { cliente: "Julia", valorBruto: 200, desconto: 0, valorFinal: 200 }
//   ],
//   faturamentoTotal: 1120,
//   maiorPedido: "Carlos"
// }

/* Q2 — Monitoramento de Desempenho
Habilidades: Matrizes, funções, strings, algoritmos e condicionais.
Uma plataforma registra o desempenho de seus alunos.
Cada aluno possui:
- nome
- notas: array com suas avaliações.
Regras:
- A média é calculada com todas as notas.
- Média >= 7: aprovado.
- Média >= 5 e < 7: recuperação.
- Média < 5: reprovado.
Retorne:
1. Lista contendo nome, média e situação de cada aluno.
2. Quantidade de aprovados.
3. Quantidade de alunos em recuperação.
4. Quantidade de reprovados.
5. Nome do aluno com a maior média.
Em caso de empate, mantenha o primeiro aluno.
Não altere os dados originais.
*/

function analisarDesempenho(alunos) {
  let resultados = [];
  let aprovados = 0;
  let recuperacao = 0;
  let reprovados = 0;
  let melhorAluno = null;
  let mediaMelhorAluno = 0;

  for (let { nome, notas } of alunos) {
    let media = notas.reduce((acc, n) => acc + n ,0) / notas.length;
    media = Number(media.toFixed(2));
    let situacao = "";

    if ( media >= 7 ) {
      situacao = "aprovado";
      aprovados ++;
    } else if (media >= 5) {
      situacao = "recuperacao";
      recuperacao ++;
    } else {
      situacao = "reprovado";
      reprovados ++;
    }

    if (melhorAluno === null || media > mediaMelhorAluno) {
      mediaMelhorAluno = media;
      melhorAluno = nome;
    }

    resultados.push({
      nome,
      media,
      situacao
    });

  }

  return {
    resultados,
    aprovados,
    recuperacao,
    reprovados,
    melhorAluno
  }
}

console.log(analisarDesempenho([
  { nome: "Lucas", notas: [8, 9, 7] },
  { nome: "Marina", notas: [5, 6, 5] },
  { nome: "Rafael", notas: [3, 4, 5] },
  { nome: "Julia", notas: [9, 9, 9] }
]));

// Esperado:
// {
//   resultados: [
//     { nome: "Lucas", media: 8, situacao: "aprovado" },
//     { nome: "Marina", media: 5.33, situacao: "recuperacao" },
//     { nome: "Rafael", media: 4, situacao: "reprovado" },
//     { nome: "Julia", media: 9, situacao: "aprovado" }
//   ],
//   aprovados: 2,
//   recuperacao: 1,
//   reprovados: 1,
//   melhorAluno: "Julia"
// }


/* Q3 — Sistema de Transações
Habilidades: JSON, arrays, objetos, strings, operadores, estruturas de controle e algoritmos básicos.
Um sistema financeiro recebe uma lista de transações em JSON.
Cada transação possui:
- id
- categoria
- tipo ("entrada" ou "saida")
- valor
- status ("confirmada" ou "cancelada")
Regras:
- Considere somente transações confirmadas.
- Calcule o total de entradas.
- Calcule o total de saídas.
- Calcule o saldo final.
- Identifique as categorias que tiveram transações
  confirmadas de saída, sem repetir nomes.
- Identifique o ID da transação confirmada de maior valor.
Em caso de empate, mantenha a primeira transação.
Retorne todas essas informações em um objeto.
*/

function analisarTransacoes(jsonTransacoes) {
  let transacoes = JSON.parse(jsonTransacoes);
  let entradas = 0;
  let saidas = 0;
  let saldo = 0;
  let categoriasComSaida = [];
  let maiorTransacao = null;
  let maiorValor = -Infinity;

  for (let { id, categoria, tipo, valor, status } of transacoes) {

    if (status.toLowerCase() !== "confirmada") {
      continue;
    }

    if (tipo.toLowerCase() === "entrada") {
      entradas += valor;

    } else if (tipo.toLowerCase() === "saida") {
      saidas += valor;

      if (!categoriasComSaida.includes(categoria)) {
        categoriasComSaida.push(categoria);
      }
    }

    if (maiorTransacao === null || valor > maiorValor) {
      maiorValor = valor;
      maiorTransacao = id;
    }
  }

  saldo = entradas - saidas;

  return {
    entradas,
    saidas,
    saldo,
    categoriasComSaida,
    maiorTransacao
  };
}

console.log(analisarTransacoes(`[
  {
    "id": 101,
    "categoria": "Salario",
    "tipo": "entrada",
    "valor": 3000,
    "status": "confirmada"
  },
  {
    "id": 102,
    "categoria": "Alimentacao",
    "tipo": "saida",
    "valor": 400,
    "status": "confirmada"
  },
  {
    "id": 103,
    "categoria": "Freelance",
    "tipo": "entrada",
    "valor": 800,
    "status": "confirmada"
  },
  {
    "id": 104,
    "categoria": "Transporte",
    "tipo": "saida",
    "valor": 200,
    "status": "cancelada"
  },
  {
    "id": 105,
    "categoria": "Alimentacao",
    "tipo": "saida",
    "valor": 150,
    "status": "confirmada"
  },
  {
    "id": 106,
    "categoria": "Moradia",
    "tipo": "saida",
    "valor": 1000,
    "status": "confirmada"
  }
]`));

// Esperado:
// {
//   entradas: 3800,
//   saidas: 1550,
//   saldo: 2250,
//   categoriasComSaida: ["Alimentacao", "Moradia"],
//   maiorTransacao: 101
// }