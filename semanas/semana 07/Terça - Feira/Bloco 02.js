/* Q1 — Sistema de Cadastro
Habilidades: Ambiente e Variáveis, Strings, Operadores e Funções.
Uma empresa recebe cadastros de funcionários.
Cada funcionário possui:
- nome
- idade
- salario
Regras:
- Padronize o nome com letras maiúsculas.
- Funcionários com idade >= 18 são maiores de idade.
- Funcionários com salário < 3000 recebem aumento de 10%.
Retorne uma lista com:
- nome
- idade
- salario atualizado
- maiorDeIdade
*/

function processarFuncionarios(funcionarios) {
  let resultado = [];

  for (let { nome, idade, salario } of funcionarios) {
    let maiorDeIdade = idade >= 18 ? true : false;
    nome = nome.toUpperCase();

    if (salario < 3000) {
      salario += salario * 0.10;
    }

    resultado.push({
      nome,
      idade,
      salario,
      maiorDeIdade
    });
  }

  return resultado;
}

console.log(processarFuncionarios([
  { nome: "Ana Silva", idade: 25, salario: 2500 },
  { nome: "Carlos", idade: 17, salario: 2800 },
  { nome: "Julia", idade: 30, salario: 4000 }
]));

// Esperado:
// [
//   { nome: "ANA SILVA", idade: 25, salario: 2750, maiorDeIdade: true },
//   { nome: "CARLOS", idade: 17, salario: 3080, maiorDeIdade: false },
//   { nome: "JULIA", idade: 30, salario: 4000, maiorDeIdade: true }
// ]

/* Q2 — Processamento de Pedidos
Habilidades: Entrada e Saída, Operadores, Condicionais e Algoritmos Básicos.
Uma loja precisa calcular o valor final dos pedidos.
Cada pedido possui:
- numero
- quantidade
- precoUnitario
Regras:
- Calcule o valor bruto.
- Se o valor bruto >= 200, aplique desconto de 10%.
- Caso contrário, não aplique desconto.
Retorne:
- numero
- valorBruto
- desconto
- valorFinal
*/

function calcularPedidos(pedidos) {
  let resultado = [];

  for (let { numero, quantidade, precoUnitario } of pedidos) {
    let valorBruto = quantidade * precoUnitario;
    let desconto = 0;
    let valorFinal = valorBruto;

    if (valorBruto >= 200) {
      valorFinal *= 0.9;
    }

    desconto = Math.abs(valorFinal - valorBruto);

    resultado.push({
      numero,
      valorBruto,
      desconto,
      valorFinal
    });
  }

  return resultado;
}

console.log(calcularPedidos([
  { numero: 1, quantidade: 2, precoUnitario: 80 },
  { numero: 2, quantidade: 3, precoUnitario: 100 },
  { numero: 3, quantidade: 1, precoUnitario: 50 }
]));

// Esperado: [ { numero: 1, valorBruto: 160, desconto: 0, valorFinal: 160 },
// { numero: 2, valorBruto: 300, desconto: 30, valorFinal: 270 },
// { numero: 3, valorBruto: 50, desconto: 0, valorFinal: 50 } ]

/* Q3 — Controle de Acesso
Habilidades: Estruturas de Controle, Operadores Lógicos e Condicionais.
Um sistema controla o acesso de usuários.
Cada usuário possui:
- nome
- idade
- ativo
Regras:
- Usuário pode acessar se idade >= 18 E ativo === true.
- Todos os demais usuários devem ser bloqueados.
Retorne:
- lista de autorizados;
- lista de bloqueados;
- quantidade de acessos autorizados.
*/

function controlarAcesso(usuarios) {
  const autorizados = usuarios.filter(usuario => usuario.idade >= 18 && usuario.ativo).map(usuario => usuario.nome);

  const bloqueados = usuarios.filter(usuario => !usuario.ativo || usuario.idade < 18).map(usuario => usuario.nome);

  const totalAutorizados = autorizados.length;

  return {
    autorizados,
    bloqueados,
    totalAutorizados
  }
}

console.log(controlarAcesso([
  { nome: "Ana", idade: 22, ativo: true },
  { nome: "Carlos", idade: 17, ativo: true },
  { nome: "Julia", idade: 30, ativo: false },
  { nome: "Pedro", idade: 19, ativo: true }
]));
// Esperado: { autorizados: ["Ana", "Pedro"], bloqueados: ["Carlos", "Julia"], totalAutorizados: 2 }

/* Q4 — Análise de Matriz
Habilidades: Funções, Vetores, Matrizes, Laços e Acumuladores.
Uma empresa registra as vendas de seus vendedores
durante três dias.
Cada linha representa um vendedor.
Cada posição representa um dia.
Retorne:
1. Total vendido por vendedor.
2. Total geral.
3. Quantidade de vendas acima de 100.
Não altere a matriz original.
*/

function analisarVendas(matriz) {
  const totalPorVendedor = matriz.map(venda =>
    venda.reduce((acc, v) => acc + v ,0)
  )

  const totalGeral = matriz.flat().reduce((acc, v) => acc + v ,0)

  const vendasAcimaDe100 = matriz.flat().filter(venda => venda > 100).length;

  return {
    totalPorVendedor,
    totalGeral,
    vendasAcimaDe100
  }
}

console.log(analisarVendas([ [100, 150, 80], [200, 50, 120], [90, 110, 130] ]));
// Esperado: { totalPorVendedor: [330, 370, 330], totalGeral: 1030, vendasAcimaDe100: 5 }

/* Q5 — Análise de Palavras
Habilidades: Strings, Vetores, Condicionais e Algoritmos Básicos.
Um sistema recebe uma lista de palavras.
Retorne:
1. A maior palavra.
2. Quantidade total de caracteres de todas as palavras.
3. Quantidade de palavras que começam com a letra A.
Em caso de empate na maior palavra,
considere a primeira.
*/

function analisarPalavras(palavras) {
  const maiorPalavra = palavras.reduce(
    (acc , p) => p.length > acc.length ? p : acc ,
   ""
  );

  const totalCaracteres = palavras.reduce((acc, p) => acc + p.length ,0);

  const comecaComA = palavras.filter(palavra => palavra[0].toUpperCase() === "A").length;

  return {
    maiorPalavra,
    totalCaracteres,
    comecaComA
  }
}

console.log(analisarPalavras([ "Abacaxi", "Casa", "Avião", "Computador", "Amor" ]));
// Esperado: { maiorPalavra: "Computador", totalCaracteres: 30, iniciadasComA: 3 }

/* Q6 — Processamento de Dados JSON
Habilidades: JSON, Objetos, Arrays, Operadores e Algoritmos.
Um sistema recebe movimentações financeiras em JSON.
Cada movimentação possui:
- descricao
- categoria
- tipo ("entrada" ou "saida")
- valor
Retorne:
1. Total de entradas.
2. Total de saídas.
3. Saldo final.
4. Lista de categorias que tiveram saídas,
   sem repetir nomes.
Considere todas as movimentações.
*/

function processarMovimentacoes(jsonDados) {
  const movimentacoes = JSON.parse(jsonDados);

  const entradas = movimentacoes
    .filter(m => m.tipo === "entrada")
    .reduce((acc, m) => acc + m.valor, 0);

  const saidas = movimentacoes
    .filter(m => m.tipo === "saida")
    .reduce((acc, m) => acc + m.valor, 0);

  const saldo = entradas - saidas;

  const categoriasSaida = [
    ...new Set(
      movimentacoes
        .filter(m => m.tipo === "saida")
        .map(m => m.categoria)
    )
  ];

  return {
    entradas,
    saidas,
    saldo,
    categoriasSaida
  };
}

console.log(processarMovimentacoes(`[
  {
    "descricao": "Salario",
    "categoria": "Trabalho",
    "tipo": "entrada",
    "valor": 3000
  },
  {
    "descricao": "Mercado",
    "categoria": "Alimentacao",
    "tipo": "saida",
    "valor": 500
  },
  {
    "descricao": "Freelance",
    "categoria": "Trabalho",
    "tipo": "entrada",
    "valor": 800
  },
  {
    "descricao": "Combustivel",
    "categoria": "Transporte",
    "tipo": "saida",
    "valor": 200
  },
  {
    "descricao": "Restaurante",
    "categoria": "Alimentacao",
    "tipo": "saida",
    "valor": 100
  }
]`));
// Esperado: { entradas: 3800, saidas: 800, saldo: 3000, categoriasSaida: ["Alimentacao", "Transporte"] }