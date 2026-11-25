/* ========================================
   Q1 — CALCULADORA DE HORÁRIO
   ========================================
Crie uma função calcularHorarioChegada(horario, minutos).
A função recebe:
- horario: uma string no formato "HH:MM".
- minutos: quantidade de minutos que serão adicionados.
Retorne o horário final no formato "HH:MM".
REGRAS:
- O relógio utiliza o formato de 24 horas.
- Se ultrapassar 23:59, continue a contagem a partir de 00:00.
- Não utilize Date.
- O resultado deve sempre apresentar dois dígitos
  para horas e minutos.
  */

function calcularHorarioChegada(horario, minutos) {

  let partes = horario.split(":");
  let horas = Number(partes[0]);
  let minutosAtuais = Number(partes[1]);
  let totalMinutos = horas * 60 + minutosAtuais;

  totalMinutos += minutos;
  totalMinutos = totalMinutos % 1440;

  let horasFinais = Math.floor(totalMinutos / 60);
  let minutosFinais = totalMinutos % 60;

  horasFinais = String(horasFinais).padStart(2, "0");
  minutosFinais = String(minutosFinais).padStart(2, "0");

  return `${horasFinais}:${minutosFinais}`;
}

console.log(calcularHorarioChegada("10:30", 45));   // "11:15"
console.log(calcularHorarioChegada("23:50", 20));   // "00:10"
console.log(calcularHorarioChegada("08:00", 120));  // "10:00"
console.log(calcularHorarioChegada("22:45", 150));  // "01:15"
console.log(calcularHorarioChegada("00:00", 5));    // "00:05"

/* ========================================
   Q2 — CONSULTA DE OBJETOS ANINHADOS
   ========================================
Crie uma função buscarCaminho(objeto, caminho).
O caminho utiliza pontos para separar os níveis.
REGRAS:
- Percorra cada nível do caminho.
- Retorne o valor da propriedade encontrada.
- Se algum nível não existir, retorne undefined.
- Não modifique o objeto original.
- Não utilize eval().
- O caminho sempre será uma string não vazia.
 */

const usuario = {
nome: "Carlos",
endereco: {
cidade: "Recife",
estado: "PE",
detalhes: {
cep: "50000-000"
}
},
ativo: true
};

function buscarCaminho(objeto, caminho) {
  let partes = caminho.split(".");
  for (let parte of partes) {
    if (objeto === undefined || objeto === null) {
      return undefined;
    }

    objeto = objeto[parte];
  }

  return objeto;
}

console.log(buscarCaminho(usuario, "nome"));                    // "Carlos"
console.log(buscarCaminho(usuario, "endereco.cidade"));         // "Recife"
console.log(buscarCaminho(usuario, "endereco.detalhes.cep"));   // "50000-000"
console.log(buscarCaminho(usuario, "endereco.numero"));         // undefined
console.log(buscarCaminho(usuario, "endereco.detalhes.rua"));   // undefined

/* ========================================
   Q3 — DISTRIBUIDOR DE PARCELAS
   ========================================
Crie uma função distribuirParcelas(valorTotal, quantidade).
A função deve dividir um valor em parcelas,
considerando que os valores precisam ser representados
em centavos inteiros.
REGRAS:
- O valorTotal será positivo, com no máximo duas casas decimais.
- A quantidade será um número inteiro positivo.
- As parcelas devem ter valores o mais iguais possível.
- Quando a divisão não for exata, distribua os centavos
  restantes nas primeiras parcelas.
- A soma das parcelas deve ser exatamente igual
  ao valor original.
- Retorne um array com os valores em reais.
*/

function distribuirParcelas(valorTotal, quantidade) {

  let centavos = Math.round(valorTotal * 100);

  let valorParcela = Math.floor(centavos / quantidade);

  let resto = centavos % quantidade;

  let parcelas = [];

  for (let i = 0; i < quantidade; i++) {

    if (i < resto) {
      parcelas.push((valorParcela + 1) / 100);
    } else {
      parcelas.push(valorParcela / 100);
    }

  }

  return parcelas;
}

console.log(distribuirParcelas(100, 3));    // [33.34, 33.33, 33.33]
console.log(distribuirParcelas(10, 4));     // [2.5, 2.5, 2.5, 2.5]
console.log(distribuirParcelas(50, 2));     // [25, 25]
console.log(distribuirParcelas(1, 4));      // [0.25, 0.25, 0.25, 0.25]
console.log(distribuirParcelas(12.50, 3));  // [4.17, 4.17, 4.16]

// ========================================
// TESTES EXTRAS
// ========================================

/*
Q1:

- Somar exatamente 24 horas.
- Passar da meia-noite.
- Adicionar zero minutos.
- Adicionar mais de 24 horas.

Q2:

- Buscar uma propriedade com valor false.
- Buscar uma propriedade com valor 0.
- Buscar um nível intermediário inexistente.

Q3:

- Valores com centavos.
- Quantidade maior que o número de reais.
- Verificar se a soma das parcelas permanece exata.
*/