/* B4 — Sistemas Integrados
Q1 — Monitoramento de Máquinas
Uma fábrica registra o funcionamento de suas máquinas.
Cada máquina possui:
- nome
- setor
- temperaturas (array de medições)
O sistema deve retornar:
1. Um array com o nome de cada máquina e sua temperatura média.
2. Quantas máquinas possuem média superior a 70.
3. A maior temperatura registrada entre todas as máquinas.
4. O nome da máquina com a maior média.
   Em caso de empate, manter a primeira.
5. A média geral de todas as medições.
Não modificar os registros originais.
*/

function analisarMaquinas(maquinas) {
  let medias = [];
  let acimaDe70 = 0;
  let maiorTemperatura = null;
  let maquinaMaiorMedia = null;
  let maiorMedia = 0;
  let mediaGeral = 0;

  for (let { nome, setor, temperaturas } of maquinas) {
    let soma = 0;

    for (let temperatura of temperaturas) {
      soma += temperatura;

      if (maiorTemperatura === null || temperatura > maiorTemperatura) {
        maiorTemperatura = temperatura;
      }
    }
    let media = soma / temperaturas.length;
    medias.push({ nome, media });

    if (media > 70) {
      acimaDe70++;
    }

    if (maquinaMaiorMedia === null || media > maiorMedia) {
      maiorMedia = media;
      maquinaMaiorMedia = nome;
    }
  }
  mediaGeral = medias.reduce((acc, m) => acc + m.media, 0) / medias.length;

  return {
    medias,
    acimaDe70,
    maiorTemperatura,
    maquinaMaiorMedia,
    mediaGeral,
  };
}

console.log(
  analisarMaquinas([
    { nome: "M1", setor: "A", temperaturas: [60, 70, 80] },
    { nome: "M2", setor: "B", temperaturas: [90, 85, 95] },
    { nome: "M3", setor: "A", temperaturas: [50, 60, 70] },
    { nome: "M4", setor: "C", temperaturas: [75, 80, 85] },
  ]),
);

// Esperado: { medias: [ { nome: "M1", media: 70 }, { nome: "M2", media: 90 },
// { nome: "M3", media: 60 }, { nome: "M4", media: 80 } ], acimaDe70: 2,
//  maiorTemperatura: 95, maquinaMaiorMedia: "M2", mediaGeral: 75 }

/* Q2 — Auditoria de Pedidos
Uma loja recebe pedidos com os seguintes dados:
- numero
- cliente
- itens (array de objetos)
- status
Cada item possui:
- produto
- quantidade
- preco
O sistema deve retornar:
1. Quantos pedidos estão com status "aprovado".
2. O valor total de todos os pedidos aprovados.
3. Quantos produtos diferentes aparecem nos pedidos aprovados.
   Considere cada ocorrência de item como um produto,
   mesmo que o nome se repita.
4. O cliente que realizou o pedido aprovado de maior valor.
   Em caso de empate, manter o primeiro.
5. Um array com os números dos pedidos que possuem
   pelo menos um item com quantidade superior a 5.
O valor de cada item é quantidade * preco.
Não modificar os dados originais.
*/

function auditarPedidos(pedidos) {
  let aprovados = 0;
  let valorTotal = 0;
  let produtosDiferentes = 0;
  let clienteMaiorPedido = null;
  let pedidosComGrandeQuantidade = [];
  let maiorSoma = 0;

  for (let { numero, cliente, status, itens } of pedidos) {
    if (status !== "aprovado") {
      continue;
    }

    aprovados++;
    let somaClienteAtual = 0;
    let possuiGrandeQuantidade = false;

    for (let { produto, quantidade, preco } of itens) {
      valorTotal += quantidade * preco;
      somaClienteAtual += quantidade * preco;

      produtosDiferentes++;

      if (quantidade > 5) {
        possuiGrandeQuantidade = true;
      }
    }

    if (possuiGrandeQuantidade) {
      pedidosComGrandeQuantidade.push(numero);
    }

    if (clienteMaiorPedido === null || somaClienteAtual > maiorSoma) {
      maiorSoma = somaClienteAtual;
      clienteMaiorPedido = cliente;
    }
  }

  return {
    aprovados,
    valorTotal,
    produtosDiferentes,
    clienteMaiorPedido,
    pedidosComGrandeQuantidade,
  };
}

console.log(
  auditarPedidos([
    {
      numero: 101,
      cliente: "Ana",
      status: "aprovado",
      itens: [
        { produto: "Mouse", quantidade: 2, preco: 80 },
        { produto: "Teclado", quantidade: 1, preco: 150 },
      ],
    },
    {
      numero: 102,
      cliente: "Carlos",
      status: "aprovado",
      itens: [{ produto: "Monitor", quantidade: 6, preco: 500 }],
    },
    {
      numero: 103,
      cliente: "Marina",
      status: "pendente",
      itens: [{ produto: "Cabo", quantidade: 10, preco: 20 }],
    },
    {
      numero: 104,
      cliente: "Pedro",
      status: "aprovado",
      itens: [
        { produto: "Mouse", quantidade: 3, preco: 80 },
        { produto: "Headset", quantidade: 2, preco: 200 },
      ],
    },
  ]),
);

/*
Esperado:
{
  aprovados: 3,
  valorTotal: 3860,
  produtosDiferentes: 5,
  clienteMaiorPedido: "Carlos",
  pedidosComGrandeQuantidade: [ 102 ]
}
*/

/* Q3 — Processamento de Avaliações
Uma plataforma recebe avaliações de usuários.
Cada avaliação possui:
- usuario
- nota
- comentario
- categoria
O sistema deve retornar:
1. Quantidade de avaliações positivas (nota >= 7).
2. Quantidade de avaliações negativas (nota < 5).
3. Média geral das notas.
4. Um array com os comentários que possuem pelo menos
   15 caracteres depois de aplicar trim().
5. A categoria com maior quantidade de avaliações.
   Em caso de empate, manter a primeira categoria
   que atingiu essa quantidade na ordem original.
6. Verificar se todas as avaliações possuem comentário
   não vazio depois de aplicar trim().

Não modificar o array original.
*/

function processarAvaliacoes(avaliacoes) {
  let positivas = 0;
  let negativas = 0;
  let somaNotas = 0;
  let mediaGeral = 0;
  let comentariosLongos = [];
  let categoriaMaisAvaliada = null;
  let todosPossuemComentario = true;

  let categorias = {};
  let maiorQuantidade = 0;

  for (let avaliacao of avaliacoes) {
    const { usuario, nota, comentario, categoria } = avaliacao;

    if (nota >= 7) {
      positivas++;
    }

    if (nota < 5) {
      negativas++;
    }

    somaNotas += nota;

    const comentarioLimpo = comentario.trim();

    if (comentarioLimpo.length >= 15) {
      comentariosLongos.push(comentarioLimpo);
    }

    if (comentarioLimpo === "") {
      todosPossuemComentario = false;
    }

    if (categorias[categoria] === undefined) {
      categorias[categoria] = 1;
    } else {
      categorias[categoria]++;
    }

    if (categorias[categoria] > maiorQuantidade) {
      maiorQuantidade = categorias[categoria];
      categoriaMaisAvaliada = categoria;
    }
  }

  if (avaliacoes.length > 0) {
    mediaGeral = somaNotas / avaliacoes.length;
  }

  return {
    positivas,
    negativas,
    mediaGeral,
    comentariosLongos,
    categoriaMaisAvaliada,
    todosPossuemComentario,
  };
}

console.log(
  processarAvaliacoes([
    {
      usuario: "Ana",
      nota: 9,
      comentario: "Excelente serviço!",
      categoria: "Atendimento",
    },
    {
      usuario: "Carlos",
      nota: 4,
      comentario: "Muito demorado",
      categoria: "Entrega",
    },
    {
      usuario: "Marina",
      nota: 8,
      comentario: "Gostei bastante do produto",
      categoria: "Produto",
    },
    { usuario: "Pedro", nota: 3, comentario: "Ruim", categoria: "Entrega" },
    {
      usuario: "Lucas",
      nota: 7,
      comentario: "Funcionou perfeitamente",
      categoria: "Atendimento",
    },
  ]),
);

/*
Esperado:
{
  positivas: 3,
  negativas: 2,
  mediaGeral: 6.2,
  comentariosLongos: [
    "Excelente serviço!",
    "Gostei bastante do produto",
    "Funcionou perfeitamente"
  ],
  categoriaMaisAvaliada: "Atendimento",
  todosPossuemComentario: true
}
*/
