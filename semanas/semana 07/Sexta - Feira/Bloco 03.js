/* Q1 — Controle de Estoque
Uma loja precisa atualizar seu estoque.
A função recebe:
- estoque: quantidade atual.
- vendidos: quantidade vendida.
Retorne a quantidade restante.
O estoque nunca pode ficar negativo.
*/

function atualizarEstoque(estoque, vendidos) {
  // CORREÇÃO:
  // Math.max() garante que o resultado nunca seja menor que zero.
  // O estoque restante é calculado subtraindo os produtos vendidos.

  return Math.max(0, estoque - vendidos);
}

console.log(atualizarEstoque(20, 5));  // 15
console.log(atualizarEstoque(10, 15)); // 0

/* Q2 — Média de Notas
Uma escola precisa calcular a média de um aluno.
A função recebe um array de notas e retorna:
- media: média das notas.
- situacao: "Aprovado" se a média for maior ou igual a 7.
- "Reprovado" caso contrário.
Se não houver notas, retornar média 0 e situação "Sem notas".
*/

function calcularMedia(notas) {
  // CORREÇÃO:
  // Primeiro verificamos se o array está vazio.
  // Isso evita uma divisão por zero.

  if (notas.length === 0) {
    return {
      media: 0,
      situacao: "Sem notas"
    };
  }

  // Soma todas as notas usando reduce().
  const soma = notas.reduce((acc, nota) => acc + nota, 0);

  // Calcula a média.
  const media = soma / notas.length;

  // CORREÇÃO:
  // O enunciado exige média MAIOR OU IGUAL a 7.
  // Por isso usamos >= em vez de >.

  return {
    media,
    situacao: media >= 7 ? "Aprovado" : "Reprovado"
  };
}

console.log(calcularMedia([8, 7, 9]));  // { media: 8, situacao: "Aprovado" }
console.log(calcularMedia([7, 6, 8]));  // { media: 7, situacao: "Aprovado" }
console.log(calcularMedia([]));         // { media: 0, situacao: "Sem notas" }

/* Q3 — Busca de Produtos
Uma loja precisa verificar se um produto existe.
A função recebe:
- produtos: array de objetos.
- nome: nome procurado.
Retorne true se encontrar o produto e false caso contrário.
A comparação deve ignorar maiúsculas e minúsculas.
*/

function produtoExiste(produtos, nome) {

  // CORREÇÃO:
  // toLowerCase() transforma os dois nomes em minúsculas.
  // Assim, "Mouse", "MOUSE" e "mouse" são considerados iguais.

  return produtos.some(
    p => p.nome.toLowerCase() === nome.toLowerCase()
  );
}

console.log(produtoExiste([
  { nome: "Mouse" },
  { nome: "Teclado" },
  { nome: "Monitor" }
], "mouse"));
// true

console.log(produtoExiste([
  { nome: "Mouse" },
  { nome: "Teclado" }
], "Headset"));
// false

/* Q4 — Processamento de Pedidos
Uma empresa precisa calcular o valor total dos pedidos aprovados.
Cada pedido possui:
- numero
- valor
- status
A função deve retornar a soma dos valores
dos pedidos com status "aprovado".
A comparação deve ignorar maiúsculas e minúsculas.
*/

function calcularPedidos(pedidos) {
  let total = 0;

  for (let pedido of pedidos) {

    // CORREÇÃO:
    // Convertemos o status para minúsculas antes de comparar.
    // Assim, "APROVADO", "Aprovado" e "aprovado"
    // são reconhecidos da mesma maneira.

    if (pedido.status.toLowerCase() === "aprovado") {
      total += pedido.valor;
    }
  }

  return total;
}

console.log(calcularPedidos([
  { numero: 1, valor: 100, status: "aprovado" },
  { numero: 2, valor: 200, status: "PENDENTE" },
  { numero: 3, valor: 150, status: "APROVADO" },
  { numero: 4, valor: 50, status: "aprovado" }
]));
// 300

/* Q5 — Análise de Temperaturas
Uma estação meteorológica registra temperaturas em uma matriz.
Crie uma função que retorna um objeto contendo:
- maiorTemperatura: maior temperatura registrada.
- diasAcimaDe30: quantidade de temperaturas superiores a 30.
Se a matriz não possuir temperaturas, maiorTemperatura deve ser null.
A matriz pode conter várias linhas.
*/

function analisarTemperaturas(matriz) {

  // CORREÇÃO:
  // Começamos com null porque ainda não encontramos
  // nenhuma temperatura.
  // Isso também permite trabalhar com temperaturas negativas.

  let maiorTemperatura = null;
  let diasAcimaDe30 = 0;

  // Percorre cada linha da matriz.
  for (let linha of matriz) {

    // Percorre cada temperatura da linha.
    for (let temperatura of linha) {

      // CORREÇÃO:
      // O enunciado pede temperaturas SUPERIORES a 30.
      // Portanto, usamos > 30 e não >= 30.

      if (temperatura > 30) {
        diasAcimaDe30++;
      }

      // CORREÇÃO:
      // Se ainda não existe uma maior temperatura,
      // a primeira encontrada será a maior inicialmente.
      // Depois comparamos os próximos valores.

      if (
        maiorTemperatura === null ||
        temperatura > maiorTemperatura
      ) {
        maiorTemperatura = temperatura;
      }
    }
  }

  return {
    maiorTemperatura,
    diasAcimaDe30
  };
}

console.log(analisarTemperaturas([
  [22, 31, 28],
  [35, 29, 30],
  [18, 32, 25]
]));
// { maiorTemperatura: 35, diasAcimaDe30: 3 }

console.log(analisarTemperaturas([
  [-5, -2],
  [-8, -1]
]));
// { maiorTemperatura: -1, diasAcimaDe30: 0 }

console.log(analisarTemperaturas([
  [],
  []
]));
// { maiorTemperatura: null, diasAcimaDe30: 0 }