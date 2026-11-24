/* Q1 — Validador de CPF simplificado
Crie uma função validarDocumento(documento).
Regras:
- O documento deve ser uma string.
- Deve possuir exatamente 11 dígitos.
- Não pode conter letras ou espaços.
- Não pode ser formado por um único dígito repetido.
Retorne true ou false.
*/

function validarDocumento(documento) {
  if (typeof documento !== "string" || documento.length !== 11) {
    return false;
  }

  for (const caractere of documento) {
    if (caractere < "0" || caractere > "9") {
      return false;
    }
  }

  if (documento.split("").every(digito => digito === documento[0])) {
    return false;
  }

  return true;
}

console.log(validarDocumento("12345678901")); // true
console.log(validarDocumento("11111111111")); // false
console.log(validarDocumento("1234567890"));  // false
console.log(validarDocumento("12345abc901")); // false
console.log(validarDocumento(12345678901));   // false

/* Q2 — Relatório de funcionários
Crie uma função gerarRelatorio(funcionarios).
Cada funcionário possui:
- nome
- salario
- departamento
- ativo
Regras:
- Considerar somente funcionários ativos.
- Considerar somente salários maiores que zero.
- Calcular a folha salarial total.
- Contar funcionários por departamento.
- Encontrar o funcionário com maior salário.
Retorne:
{
  totalFuncionarios,
  folhaSalarial,
  maiorSalario
}
maiorSalario deve conter o nome do funcionário
com maior salário ou null se ninguém for válido.
*/

function gerarRelatorio(funcionarios) {
  const totalFuncionarios = funcionarios.filter(
    funcionario => funcionario.ativo && funcionario.salario > 0
  );

  const folhaSalarial = totalFuncionarios.reduce(
    (acc, s) => acc + s.salario, 0
  );

  const maiorSalario = totalFuncionarios.reduce((maior, atual) => {
    if (maior === null || atual.salario > maior.salario) {
      return atual;
    }

    return maior;
  }, null);

  return {
    totalFuncionarios: totalFuncionarios.length,
    folhaSalarial,
    maiorSalario: maiorSalario === null ? null : maiorSalario.nome
  };
}

console.log(gerarRelatorio([
  { nome: "Ana", salario: 3000, departamento: "TI", ativo: true },
  { nome: "Carlos", salario: 2500, departamento: "RH", ativo: true },
  { nome: "Maria", salario: 5000, departamento: "TI", ativo: false },
  { nome: "João", salario: 4000, departamento: "TI", ativo: true }
]));

// {
//   totalFuncionarios: 3,
//   folhaSalarial: 9500,
//   maiorSalario: "João"
// }

/* Q3 — Conversor de dados
Crie uma função converterUsuarios(usuarios).
Cada usuário possui:
- nome
- idade
- email
A função deve retornar um NOVO array contendo
somente usuários com idade igual ou superior a 18.
Cada elemento do novo array deve possuir:
- nome em letras maiúsculas.
- idade original.
- dominioEmail: parte do email depois do @.
Regras:
- Não modificar o array original.
- Ignorar usuários com email inválido
  (sem @ ou com @ no início/fim).
- Não considerar usuários menores de 18.
*/

function converterUsuarios(usuarios) {
  const usuariosValidos = usuarios.filter(usuario =>
    usuario.idade >= 18 &&
    usuario.email.includes("@") &&
    usuario.email.indexOf("@") > 0 &&
    usuario.email.indexOf("@") < usuario.email.length - 1
  );

  const usuariosConvertidos = usuariosValidos.map(usuario => {
    const dominioEmail = usuario.email.split("@")[1];

    return {
      nome: usuario.nome.toUpperCase(),
      idade: usuario.idade,
      dominioEmail
    };
  });

  return usuariosConvertidos;
}
console.log(converterUsuarios([
  { nome: "Ana", idade: 22, email: "ana@gmail.com" },
  { nome: "Pedro", idade: 16, email: "pedro@gmail.com" },
  { nome: "João", idade: 30, email: "joao@empresa.com" },
  { nome: "Maria", idade: 25, email: "maria@" }
]));

// [
//   { nome: "ANA", idade: 22, dominioEmail: "gmail.com" },
//   { nome: "JOÃO", idade: 30, dominioEmail: "empresa.com" }
// ]