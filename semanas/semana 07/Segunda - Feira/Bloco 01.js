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
