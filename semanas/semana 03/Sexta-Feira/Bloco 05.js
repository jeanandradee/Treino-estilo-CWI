/* Uma plataforma de desafios de programação recebe um array com
as pontuações obtidas por um participante em várias tentativas.
Crie a função analisarResultados(pontuacoes), que deve retornar
um objeto com as seguintes propriedades:
- total: quantidade de tentativas registradas;
- validas: quantidade de pontuações maiores ou iguais a 50;
- invalidas: quantidade de pontuações menores que 50;
- somaValidas: soma das pontuações maiores ou iguais a 50;
- maiorValida: maior pontuação válida encontrada;
- aprovado: true se houver pelo menos 3 pontuações válidas
  E a soma das pontuações válidas for maior ou igual a 200.
REGRAS:
1. Pontuação válida é aquela maior ou igual a 50.
2. Se não houver nenhuma pontuação válida, maiorValida deve ser null.
3. Se o array estiver vazio, os contadores e a soma devem ser 0,
   maiorValida deve ser null e aprovado deve ser false.
4. Não modifique o array recebido.
5. Não use sort(), find(), map(), filter() ou reduce().
6. Retorne exatamente as propriedades solicitadas.
Implemente a função e confira os resultados nos seis testes.
*/

function analisarResultados(pontuacoes) {
  let total = pontuacoes.length > 0 ? pontuacoes.length : 0;
  let validas = 0;
  let invalidas = 0;
  let somaValidas = 0;
  let maiorValida = null;

  for (let pontuacao of pontuacoes) {
    if (pontuacao >= 50) {
      validas ++;
      somaValidas += pontuacao;

      if (maiorValida === null || pontuacao > maiorValida) {
        maiorValida = pontuacao;
      }
    } else {
      invalidas ++;
    }
  }

  let aprovado = validas >= 3 && somaValidas >= 200 ? true : false;


  return { total, validas, invalidas, somaValidas, maiorValida, aprovado };

}

console.log(analisarResultados([60, 70, 80]));
// { total: 3, validas: 3, invalidas: 0, somaValidas: 210, maiorValida: 80, aprovado: true }
console.log(analisarResultados([100, 40, 30, 50]));
// { total: 4, validas: 2, invalidas: 2, somaValidas: 150, maiorValida: 100, aprovado: false }
console.log(analisarResultados([50, 50, 50, 50]));
// { total: 4, validas: 4, invalidas: 0, somaValidas: 200, maiorValida: 50, aprovado: true }
console.log(analisarResultados([10, 20, 30]));
// { total: 3, validas: 0, invalidas: 3, somaValidas: 0, maiorValida: null, aprovado: false }
console.log(analisarResultados([]));
// { total: 0, validas: 0, invalidas: 0, somaValidas: 0, maiorValida: null, aprovado: false }
console.log(analisarResultados([90, 45, 80, 20, 60]));
// { total: 5, validas: 3, invalidas: 2, somaValidas: 230, maiorValida: 90, aprovado: true }