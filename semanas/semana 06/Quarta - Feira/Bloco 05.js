/* Uma empresa possui um sistema que registra o desempenho
de seus funcionários durante um período.
Cada funcionário possui:
- nome
- setor
- avaliacoes: array com notas de 0 a 10.
- ativo: booleano.
O sistema deve gerar um relatório considerando
somente os funcionários ativos.
A função deve retornar:
1. quantidadeAtivos:
   Quantidade de funcionários ativos.
2. aprovados:
   Quantidade de funcionários ativos cuja média
   das avaliações seja maior ou igual a 7.
3. reprovados:
   Quantidade de funcionários ativos cuja média
   seja menor que 7.
4. mediaGeral:
   Média de todas as avaliações dos funcionários ativos.
   Não é a média das médias individuais.
5. melhorFuncionario:
   Nome do funcionário ativo com a maior média individual.
   Em caso de empate, manter o primeiro funcionário.
6. setores:
   Array com os nomes dos setores dos funcionários ativos,
   sem repetir nomes.
REGRAS:
- Funcionários inativos devem ser ignorados.
- Se um funcionário ativo não possuir avaliações,
  sua média individual será 0.
- Se não houver funcionários ativos, mediaGeral será 0
  e melhorFuncionario será null.
- Não modificar os dados originais.
- Não utilizar map(), filter() ou reduce().
*/

function gerarRelatorio(funcionarios) {
  let quantidadeAtivos = 0;
  let aprovados = 0;
  let reprovados = 0;

  let somaNotas = 0;
  let quantidadeNotas = 0;

  let melhorFuncionario = null;
  let maiorMedia = -1;

  let setores = [];

  for (let i = 0; i < funcionarios.length; i++) {
    let funcionario = funcionarios[i];

    if (!funcionario.ativo) {
      continue;
    }

    quantidadeAtivos++;

    let soma = 0;

    for (let j = 0; j < funcionario.avaliacoes.length; j++) {
      soma += funcionario.avaliacoes[j];
    }

    let media = 0;

    if (funcionario.avaliacoes.length > 0) {
      media = soma / funcionario.avaliacoes.length;
    }

    if (media >= 7) {
      aprovados++;
    } else {
      reprovados++;
    }

    somaNotas += soma;
    quantidadeNotas += funcionario.avaliacoes.length;

    if (melhorFuncionario === null || media > maiorMedia) {
      maiorMedia = media;
      melhorFuncionario = funcionario.nome;
    }

    let setorExiste = false;

    for (let j = 0; j < setores.length; j++) {
      if (setores[j] === funcionario.setor) {
        setorExiste = true;
        break;
      }
    }

    if (!setorExiste) {
      setores.push(funcionario.setor);
    }
  }

  let mediaGeral = 0;

  if (quantidadeNotas > 0) {
    mediaGeral = somaNotas / quantidadeNotas;
  }

  return {
    quantidadeAtivos,
    aprovados,
    reprovados,
    mediaGeral,
    melhorFuncionario,
    setores,
  };
}

const funcionarios = [
  {
    nome: "Ana",
    setor: "TI",
    avaliacoes: [8, 9, 7, 10],
    ativo: true,
  },
  {
    nome: "Carlos",
    setor: "RH",
    avaliacoes: [5, 6, 7],
    ativo: true,
  },
  {
    nome: "Marina",
    setor: "TI",
    avaliacoes: [9, 10, 9, 8],
    ativo: false,
  },
  {
    nome: "Pedro",
    setor: "Financeiro",
    avaliacoes: [6, 7, 5],
    ativo: true,
  },
  {
    nome: "Julia",
    setor: "RH",
    avaliacoes: [9, 9, 10],
    ativo: true,
  },
  {
    nome: "Roberto",
    setor: "Marketing",
    avaliacoes: [],
    ativo: true,
  },
];

console.log(gerarRelatorio(funcionarios));

/*
RESULTADO ESPERADO:

{
    quantidadeAtivos: 5,
    aprovados: 2,
    reprovados: 3,
    mediaGeral: 7.2,
    melhorFuncionario: "Ana",
    setores: ["TI", "RH", "Financeiro", "Marketing"]
}
*/
