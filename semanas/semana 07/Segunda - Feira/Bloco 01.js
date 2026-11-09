/* Q1 — Controle de Entregas
Habilidades: Arrays, objetos, condicionais e contadores.
Uma transportadora registra entregas realizadas durante o dia.
Cada entrega possui:
- codigo
- valor
- status ("entregue" ou "pendente")
Crie uma função que receba a lista de entregas e retorne:
1. Quantidade de entregas realizadas.
2. Quantidade de entregas pendentes.
3. Valor total das entregas realizadas.
*/

function analisarEntregas(entregas) {
  let realizadas = 0;
  let pendentes = 0;
  let valorTotal = 0;

  for (let { valor, status } of entregas) {
    
    if (status.toLowerCase() === "entregue") {
      realizadas ++ ; 
      valorTotal += valor;
    } else if (status.toLowerCase() === "pendente") {
      pendentes ++ ;
    }
    
  } 

  return {
    realizadas,
    pendentes,
    valorTotal
  }
}

console.log(analisarEntregas([ { codigo: 101, valor: 50, status: "entregue" },
 { codigo: 102, valor: 80, status: "pendente" }, { codigo: 103, valor: 35, status: "entregue" },
 { codigo: 104, valor: 100, status: "pendente" } ]));
// Esperado: { realizadas: 2, pendentes: 2, valorTotal: 85 }

/* Q2 — Monitoramento de Temperatura
Habilidades: Arrays, operadores e lógica de comparação.
Uma empresa monitora a temperatura de seus equipamentos.
Receba um array de temperaturas.
Retorne:
1. A maior temperatura.
2. A menor temperatura.
3. Quantidade de temperaturas acima de 30.
4. Quantidade de temperaturas abaixo de 10.
*/

function analisarTemperaturas(temperaturas) {
  let maior = null;
  let menor = null;
  let acima30 = 0;
  let abaixo10 = 0;

  for (let temperatura of temperaturas) {
    if (maior === null || temperatura > maior) {
      maior = temperatura;
    }

    if (menor === null || temperatura < menor) {
      menor = temperatura;
    }

    if (temperatura > 30) {
      acima30 ++ ;
    }

    if (temperatura < 10) {
      abaixo10 ++ ;
    }
  }

  return {
    maior,
    menor,
    acima30,
    abaixo10
  }
}

console.log(analisarTemperaturas([12, 35, 8, 28, 42, 5]));
// Esperado: { maior: 42, menor: 5, acima30: 2, abaixo10: 2 }

/* Q3 — Cadastro de Funcionários
Habilidades: Strings, arrays, objetos e condicionais.
Um sistema recebe uma lista de funcionários.
Cada funcionário possui:
- nome
- idade
- setor
Retorne:
1. Quantidade de funcionários.
2. Quantidade de funcionários com idade >= 18.
3. Lista contendo somente os nomes dos funcionários
   do setor "TI".
*/

function analisarFuncionarios(funcionarios) {
  let total = 0;
  let maiores = 0;
  let funcionariosTI = [];

  for (let { nome, idade, setor } of funcionarios) {
    total ++ ;

    if (idade >= 18) {
      maiores ++ ;
    }

    if (setor.toLowerCase() === "ti") {
      funcionariosTI.push(nome);
    }
  }

  return {
    total,
    maiores,
    funcionariosTI
  }
}

console.log(analisarFuncionarios([ { nome: "Carlos", idade: 25, setor: "TI" },  { nome: "Ana", idade: 17, setor: "RH" },
 { nome: "Pedro", idade: 30, setor: "TI" }, { nome: "Julia", idade: 22, setor: "RH" } ]));
// Esperado: { total: 4, maiores: 3, funcionariosTI: ["Carlos", "Pedro"] }

/* Q4 — Histórico de Compras
Habilidades: Loops, acumuladores e condicionais.
Uma loja registra os valores das compras de seus clientes.
Receba um array com os valores das compras.
Retorne:
1. Valor total comprado.
2. Quantidade de compras acima de 100.
3. Média dos valores das compras.
*/

function analisarCompras(compras) {
  let total = 0;
  let acima100 = 0;
  let media = 0;

  for (let compra of compras) {
    total += compra;

    if (compra > 100) {
      acima100 ++ ;
    }
  }

  compras.length > 0 ? media = total / compras.length : media = 0;

  return {
    total,
    acima100,
    media
  }
}

console.log(analisarCompras([50, 150, 200, 80, 120]));
// Esperado: { total: 600, acima100: 3, media: 120 }

/* Q5 — Validador de Usuários
Habilidades: Strings, condicionais e funções.
Um sistema precisa validar nomes de usuários.
Regras:
- O nome deve possuir pelo menos 5 caracteres.
- Não pode conter espaços.
- Deve começar com uma letra maiúscula.
Receba um array de nomes.
Retorne:
1. Quantidade de nomes válidos.
2. Array contendo os nomes inválidos.
*/

function validarUsuarios(usuarios) {
  let validos = 0;
  let invalidos = [];

  for (let nome of usuarios) {
    if (
      nome.length >= 5 &&
      !nome.includes(" ") &&
      nome[0] >= "A" && nome[0] <= "Z"
    ) {
      validos ++ ;
    } else {
      invalidos.push(nome);
    }
  }

  return {
    validos,
    invalidos
  }
}

console.log(validarUsuarios([ "Carlos", "ana", "Pedro Silva", "Julia", "Marcos" ]));
// Esperado: { validos: 3, invalidos: ["ana", "Pedro Silva"] }

/* Q6 — Relatório de Notas
Habilidades: Matrizes, loops, condicionais e acumuladores.
Uma escola registra as notas de seus alunos.
Cada aluno possui:
- nome
- notas: array com três notas.
Retorne:
1. Nome de cada aluno e sua média.
2. Quantidade de alunos aprovados (média >= 7).
3. Quantidade de alunos reprovados (média < 7).
Não altere os dados originais.
*/

function gerarRelatorio(alunos) {
  let medias = [];
  let aprovados = 0;
  let reprovados = 0;

  for (let { nome, notas } of alunos) {
    let soma = 0;

    for (let nota of notas) {
      soma += nota;
    }

    let media = soma / notas.length;

    medias.push({ nome, media});

    if (media >= 7) {
      aprovados ++;
    } else {
      reprovados ++ ;
    }
  }

  return {
    medias,
    aprovados,
    reprovados
  }
}

console.log(gerarRelatorio([ { nome: "Lucas", notas: [8, 7, 9] },
 { nome: "Marina", notas: [5, 6, 4] }, { nome: "Rafael", notas: [10, 8, 9] } ]));
// Esperado: { medias: [ { nome: "Lucas", media: 8 }, { nome: "Marina", media: 5 }, { nome: "Rafael", media: 9 } ],
// aprovados: 2, reprovados: 1 }