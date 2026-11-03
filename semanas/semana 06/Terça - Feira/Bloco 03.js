/* QUESTÃO 1 — Estoque Fantasma
Uma loja possui um sistema que verifica quantos produtos
ainda estão disponíveis no estoque.
Produtos com quantidade maior que zero estão disponíveis.
O sistema está apresentando uma contagem incorreta.
Encontre e corrija os erros.
*/

function contarDisponiveis(estoque) {
    let disponiveis = 0;

    // ERRO 1: era i <= estoque.length.
    // O correto é i < estoque.length, pois o último índice
    // do array é estoque.length - 1.
    for (let i = 0; i < estoque.length; i++) {

        // ERRO 2: era estoque[i] >= 0.
        // O enunciado diz que somente quantidades MAIORES
        // que zero estão disponíveis. Zero não conta.
        if (estoque[i] > 0) {
            disponiveis++;
        }
    }

    return disponiveis;
}

console.log(contarDisponiveis([5, 0, 3, 8, 0, 2]));

// Resultado esperado: 4


/* QUESTÃO 2 — Caixa da Livraria
Uma livraria oferece descontos conforme o valor da compra:
- Acima de R$ 300: desconto de 20%.
- Acima de R$ 150: desconto de 10%.
- Nos demais casos: sem desconto.
O sistema está aplicando descontos incorretos.
Encontre e corrija o erro.
*/

function calcularPrecoFinal(valor) {
    let desconto = 0;

    // ERRO: as condições estavam invertidas.
    // Como o primeiro if verifica valores acima de 150,
    // uma compra de 400 entrava nele e recebia apenas 10%.
    // Precisamos verificar primeiro o maior desconto.

    if (valor > 300) {
        desconto = 0.20;
    } else if (valor > 150) {
        desconto = 0.10;
    }

    return valor - (valor * desconto);
}

console.log(calcularPrecoFinal(400));
console.log(calcularPrecoFinal(200));
console.log(calcularPrecoFinal(100));

// Resultados esperados:
// 320
// 180
// 100


/* QUESTÃO 3 — Cadastro de Participantes
Um sistema recebe nomes de participantes e precisa
contar quantos possuem nomes com pelo menos 5 caracteres.
A comparação deve ignorar espaços externos e diferenças
entre letras maiúsculas e minúsculas.
O sistema está apresentando uma contagem incorreta.
Encontre e corrija os erros.
*/

function contarParticipantes(nomes) {
    let quantidade = 0;

    for (let nome of nomes) {

        // ERRO 1: faltaram os parênteses em trim().
        // trim() é um método e precisa ser executado.
        //
        // ERRO 2: faltaram os parênteses em toLowerCase().
        // Ele também precisa ser executado.
        let nomeFormatado = nome.trim().toLowerCase();

        // ERRO 3: era > 5.
        // O enunciado pede pelo menos 5 caracteres.
        // Portanto, precisamos utilizar >= 5.
        if (nomeFormatado.length >= 5) {
            quantidade++;
        }
    }

    return quantidade;
}

console.log(contarParticipantes([
    " Ana ",
    "CARLOS",
    " Beatriz ",
    "João",
    "Marina"
]));

// Resultado esperado: 3

/* QUESTÃO 4 — Mapa de Produção
Uma fábrica possui uma matriz que representa
a produção diária de suas máquinas.
O sistema precisa somar os valores da diagonal principal.
O resultado está incorreto.
Encontre e corrija o erro.
*/

function somarDiagonal(matriz) {
    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {

        // ERRO: era matriz[i][i + 1].
        // Isso acessava a diagonal acima da principal.
        //
        // Para acessar a diagonal principal, precisamos
        // utilizar o mesmo índice para linha e coluna.
        soma += matriz[i][i];
    }

    return soma;
}

console.log(somarDiagonal([
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]));
// Resultado esperado: 150

/* QUESTÃO 5 — Pesquisa de Produtos
Uma loja possui uma lista de produtos.
O cliente pode pesquisar pelo nome do produto,
independentemente de utilizar letras maiúsculas
ou minúsculas.
O sistema não está encontrando alguns produtos.
Encontre e corrija o erro.
*/

function procurarProduto(produtos, busca) {

    // Transformamos a busca em letras minúsculas
    // para permitir comparações sem diferenciar maiúsculas
    // e minúsculas.
    let buscaFormatada = busca.toLowerCase();

    for (let produto of produtos) {

        // ERRO: antes comparávamos diretamente:
        // produto.nome === busca
        //
        // Isso não funcionava quando as letras tinham
        // diferenças entre maiúsculas e minúsculas.
        //
        // Agora comparamos os dois nomes em minúsculas.
        if (produto.nome.toLowerCase() === buscaFormatada) {
            return produto;
        }
    }

    return null;
}

console.log(procurarProduto([
    { nome: "Notebook", preco: 3000 },
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 }
], "NOTEBOOK"));

// Resultado esperado:
// { nome: "Notebook", preco: 3000 }


/* QUESTÃO 6 — Relatório de Desempenho
Uma empresa precisa calcular a média de desempenho
dos funcionários que possuem pontuação positiva.
Funcionários com pontuação zero ou negativa
não devem participar da média.
O sistema está apresentando resultados incorretos.
Encontre e corrija os erros.
*/

function calcularMediaPositivos(pontuacoes) {
    let soma = 0;
    let quantidade = 0;

    for (let pontuacao of pontuacoes) {
        if (pontuacao > 0) {
            soma += pontuacao;

            // ERRO: antes o quantidade++ estava fora do if.
            // Assim, todas as pontuações eram contabilizadas,
            // inclusive zero e valores negativos.
            //
            // Agora contamos somente as pontuações positivas.
            quantidade++;
        }
    }

    // ERRO ADICIONAL: se nenhuma pontuação for positiva,
    // quantidade será zero.
    // Dividir por zero não produziria a média desejada.
    // Por isso, retornamos zero nesse caso.
    if (quantidade === 0) {
        return 0;
    }

    return soma / quantidade;
}

console.log(calcularMediaPositivos([10, 0, 20, -5, 30]));
console.log(calcularMediaPositivos([0, -10, -5]));

// Resultados esperados:
// 20
// 0