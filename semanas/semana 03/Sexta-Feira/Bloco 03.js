/* 1. Última página visitada — Nível 1/10
Uma aplicação guarda as páginas visitadas por uma pessoa.
A função deve retornar a última página visitada.
Se o histórico estiver vazio, deve retornar null.
Encontre e corrija o bug.
*/

function ultimaPagina(historico) {
    if (historico.length === 0) {
        return null;
    }

    // ERRO CORRIGIDO:
    // historico.length acessa uma posição inexistente,
    // pois os índices do array começam em 0.
    // O correto é usar length - 1 para acessar
    // o último elemento do array.
    return historico[historico.length - 1];
}

console.log(ultimaPagina(["inicio", "perfil"])); // "perfil"
console.log(ultimaPagina(["loja"])); // "loja"
console.log(ultimaPagina([])); // null
console.log(ultimaPagina(["inicio", "loja", "carrinho"])); // "carrinho"
console.log(ultimaPagina(["login", "painel"])); // "painel"
console.log(ultimaPagina(["ajuda", "contato", "suporte"])); // "suporte"
  
/* 2. Validação de senha
Um sistema exige que a senha tenha pelo menos 8 caracteres.
A função deve retornar true quando a senha for válida
e false quando não for.
Encontre e corrija o bug.
*/

function senhaValida(senha) {
    // ERRO CORRIGIDO:
    // O operador > exige mais de 8 caracteres.
    // Como a senha pode ter exatamente 8 caracteres,
    // devemos usar >= 8.
    return senha.length >= 8;
}

console.log(senhaValida("javascript")); // true
console.log(senhaValida("12345678")); // true
console.log(senhaValida("abc")); // false
console.log(senhaValida("1234567")); // false
console.log(senhaValida("123456789")); // true
console.log(senhaValida("abcdefgh")); // true

/* 3. Distribuição de vagas  
Um evento possui uma quantidade de vagas disponíveis.
A função recebe a quantidade de vagas e o número de pessoas
que querem participar.
Deve retornar true se houver vagas suficientes
e false caso contrário.
Encontre e corrija o bug.
*/

function temVagas(vagas, pessoas) {
    // ERRO CORRIGIDO:
    // O operador > não considera o caso em que
    // vagas e pessoas possuem a mesma quantidade.
    // Usamos >= para permitir que todas as vagas
    // sejam preenchidas sem ultrapassar o limite.
    return vagas >= pessoas;
}

console.log(temVagas(10, 5)); // true
console.log(temVagas(5, 5)); // true
console.log(temVagas(3, 8)); // false
console.log(temVagas(0, 1)); // false
console.log(temVagas(1, 1)); // true
console.log(temVagas(20, 19)); // true

/* 4. Resumo de notas 
Uma plataforma recebe as notas de um aluno.
A função deve calcular a média das notas.
Se o array estiver vazio, deve retornar 0.
Encontre e corrija o bug.
*/

function calcularMedia(notas) {
    if (notas.length === 0) {
        return 0;
    }

    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        // ERRO CORRIGIDO:
        // O código original substituía a soma pela nota atual.
        // Assim, apenas a última nota era armazenada.
        // Usamos += para acumular todas as notas.
        soma += notas[i];
    }

    return soma / notas.length;
}

console.log(calcularMedia([6, 8])); // 7
console.log(calcularMedia([10, 10, 10])); // 10
console.log(calcularMedia([2, 4, 6])); // 4
console.log(calcularMedia([])); // 0
console.log(calcularMedia([7])); // 7
console.log(calcularMedia([5, 9, 10, 8])); // 8

/* 5. Controle de tentativas
Um sistema registra quantas tentativas uma pessoa realizou.
A função recebe o número atual de tentativas e uma quantidade
que representa novas tentativas.
Ela deve retornar o total após adicionar as novas tentativas.
Encontre e corrija o bug.
*/

function atualizarTentativas(atual, novas) {
    atual += novas;

    // ERRO CORRIGIDO:
    // O código original retornava apenas "novas",
    // ignorando o total calculado em "atual".
    // Devemos retornar "atual" após a soma.
    return atual;
}

console.log(atualizarTentativas(2, 3)); // 5
console.log(atualizarTentativas(0, 4)); // 4
console.log(atualizarTentativas(10, 2)); // 12
console.log(atualizarTentativas(5, 0)); // 5
console.log(atualizarTentativas(7, 1)); // 8
console.log(atualizarTentativas(20, 5)); // 25

/* 6. Separação de resultados 
Um sistema recebe uma lista de números e precisa separar
os números pares dos ímpares.
A função deve retornar um objeto com dois arrays:
{
    pares: [...],
    impares: [...]
}
A ordem original dos números deve ser mantida.
Encontre e corrija o bug sem modificar o array recebido.
*/

function separarParesImpares(numeros) {
    const pares = [];
    const impares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            // ERRO CORRIGIDO:
            // Os números pares estavam sendo adicionados
            // ao array "impares".
            // O correto é adicioná-los ao array "pares".
            pares.push(numeros[i]);
        } else {
            // ERRO CORRIGIDO:
            // Os números ímpares estavam sendo adicionados
            // ao array "pares".
            // O correto é adicioná-los ao array "impares".
            impares.push(numeros[i]);
        }
    }

    // Retornamos os dois arrays sem modificar
    // o array original recebido pela função.
    return { pares, impares };
}

console.log(separarParesImpares([1, 2, 3, 4])); // { pares: [2, 4], impares: [1, 3] }
console.log(separarParesImpares([2, 4, 6])); // { pares: [2, 4, 6], impares: [] }
console.log(separarParesImpares([1, 3, 5])); // { pares: [], impares: [1, 3, 5] }
console.log(separarParesImpares([])); // { pares: [], impares: [] }
console.log(separarParesImpares([0, -2, -3])); // { pares: [0, -2], impares: [-3] }
console.log(separarParesImpares([7, 8, 9, 10, 11])); // { pares: [8, 10], impares: [7, 9, 11] }