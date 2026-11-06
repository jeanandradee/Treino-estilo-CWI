/* Uma loja recebe os dados de seu estoque em formato JSON.
Cada produto possui:
- nome
- categoria
- preco
- quantidade
A função deve:
1. Converter o JSON em dados JavaScript.
2. Contar quantos produtos possuem quantidade maior que zero.
3. Calcular o valor total do estoque disponível
   (preco * quantidade).
4. Retornar os nomes dos produtos disponíveis
   que possuem pelo menos 6 caracteres,
   ignorando espaços nas extremidades.
   Os nomes devem ficar em letras maiúsculas.
5. Identificar o produto disponível com maior preço.
   Em caso de empate, manter o primeiro.
Se não houver produtos disponíveis:
- valorEstoque será 0;
- nomesLongos será [];
- produtoMaisCaro será null.
Não modificar os dados originais.
*/

function analisarEstoque(jsonEstoque) {
  const estoques = JSON.parse(jsonEstoque);

  const disponiveis = estoques.filter(produto =>
    produto.quantidade > 0
  );

  const valorEstoque = disponiveis.reduce((acc, p) =>
    acc + p.quantidade * p.preco, 0
  );

  const nomesLongos = disponiveis
    .filter(produto => produto.nome.trim().length >= 6)
    .map(produto => produto.nome.trim().toUpperCase());

  const produtoMaisCaro = disponiveis.reduce((acc, atual) =>
    acc === null || atual.preco > acc.preco
      ? atual
      : acc
  , null)?.nome.trim() ?? null;

  return {
    disponiveis: disponiveis.length,
    valorEstoque,
    nomesLongos,
    produtoMaisCaro
  };
}

console.log(analisarEstoque(`[
  { "nome": " Teclado ", "categoria": "Periféricos", "preco": 100, "quantidade": 2 },
  { "nome": "Mouse", "categoria": "Periféricos", "preco": 80, "quantidade": 5 },
  { "nome": "Monitor", "categoria": "Informática", "preco": 900, "quantidade": 0 },
  { "nome": "Cabo HDMI", "categoria": "Acessórios", "preco": 30, "quantidade": 4 }
]`));

// Esperado: { disponiveis: 3, valorEstoque: 720, nomesLongos: ["TECLADO", "CABO HDMI"], produtoMaisCaro: "Teclado" }