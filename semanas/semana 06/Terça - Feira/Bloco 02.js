/* ========================================
   QUESTÃO 1 — RASTREAMENTO DE ENTREGAS
   ========================================
Uma transportadora deseja analisar as entregas realizadas
durante o dia.
Cada entrega possui:
- codigo;
- distancia (em quilômetros);
- status.
Os status possíveis são:
- "entregue";
- "em_transito";
- "devolvida".
Crie a função analisarEntregas(entregas).
Retorne um objeto contendo:
- concluidas: códigos das entregas com status "entregue";
- pendentes: códigos das entregas com status "em_transito";
- devolvidas: quantidade de entregas devolvidas;
- distanciaConcluida: soma das distâncias das entregas
  concluídas.
Regras:
- Entregas devolvidas não entram na soma das distâncias.
- Preserve a ordem original dos códigos.
- Não modifique o array original.
- Se não houver entregas, retorne os valores vazios ou zero.
*/

function analisarEntregas(entregas) {
  let concluidas = [];
  let pendentes = [];
  let devolvidas = 0;
  let distanciaConcluida = 0;

  for (let { codigo, distancia, status } of entregas) {
    if (status === "entregue") {
      concluidas.push(codigo);
      distanciaConcluida += distancia;
    } else if (status === "em_transito") {
      pendentes.push(codigo);
    } else if (status === "devolvida") {
      devolvidas ++;
    }
  }

  return {
    concluidas,
    pendentes,
    devolvidas,
    distanciaConcluida
  }
}

console.log(analisarEntregas([ { codigo: "E01", distancia: 15, status: "entregue" },
 { codigo: "E02", distancia: 30, status: "em_transito" }, { codigo: "E03", distancia: 20, status: "devolvida" },
 { codigo: "E04", distancia: 12, status: "entregue" }, { codigo: "E05", distancia: 25, status: "devolvida" }]));

/* Resultado esperado:
{
    concluidas: ["E01", "E04"],
    pendentes: ["E02"],
    devolvidas: 2,
    distanciaConcluida: 27
}
*/

/* ========================================
   QUESTÃO 2 — COFRE DIGITAL
   ========================================
Um banco utiliza um sistema de segurança para validar
tentativas de acesso a uma conta.
Crie a função verificarAcessos(tentativas).
Cada tentativa possui:
- usuario;
- senhaCorreta (boolean);
- horario (string).
Retorne um objeto contendo:
- acessosPermitidos: nomes dos usuários que acertaram
  a senha;
- acessosNegados: quantidade de tentativas com senha
  incorreta;
- primeiroAcesso: horário da primeira tentativa
  bem-sucedida;
- usuariosBloqueados: nomes dos usuários que tiveram
  pelo menos duas tentativas incorretas.
Regras:
- Um usuário só deve aparecer uma vez em usuariosBloqueados.
- Preserve a ordem da primeira ocorrência.
- Se não houver acesso permitido, primeiroAcesso será null.
- Não modifique os dados originais.
Considere que as tentativas já estão organizadas
cronologicamente.
*/

function verificarAcessos(tentativas) {
  let acessosPermitidos = [];
  let acessosNegados = 0;
  let primeiroAcesso = null;
  let usuariosBloqueados = [];
  let errosPorUsuario = {};

  for (let { usuario, senhaCorreta, horario } of tentativas) {
    if (senhaCorreta) {
      acessosPermitidos.push(usuario);

      if (primeiroAcesso === null) {
        primeiroAcesso = horario;
      }

    } else {
      acessosNegados++;

      if (errosPorUsuario[usuario] === undefined) {
        errosPorUsuario[usuario] = 0;
      }

      errosPorUsuario[usuario]++;
    }
  }

  for (let usuario in errosPorUsuario) {
    if (errosPorUsuario[usuario] >= 2) {
      usuariosBloqueados.push(usuario);
    }
  }

  return {
    acessosPermitidos,
    acessosNegados,
    primeiroAcesso,
    usuariosBloqueados
  };
}

console.log(verificarAcessos([
    { usuario: "Ana", senhaCorreta: false, horario: "08:00" },
    { usuario: "Carlos", senhaCorreta: true, horario: "08:05" },
    { usuario: "Ana", senhaCorreta: false, horario: "08:10" },
    { usuario: "Bruno", senhaCorreta: false, horario: "08:15" },
    { usuario: "Ana", senhaCorreta: true, horario: "08:20" },
    { usuario: "Bruno", senhaCorreta: false, horario: "08:25" }
]));
/* Resultado esperado:
{
    acessosPermitidos: ["Carlos", "Ana"],
    acessosNegados: 4,
    primeiroAcesso: "08:05",
    usuariosBloqueados: ["Ana", "Bruno"]
}
*/

/* ========================================
   QUESTÃO 3 — BIBLIOTECA MUNICIPAL
   ========================================
Uma biblioteca está organizando seus empréstimos.
Cada registro possui:
- livro;
- leitor;
- diasEmprestado.
Crie a função analisarEmprestimos(emprestimos).
Retorne um objeto contendo:
- totalEmprestimos: quantidade de registros;
- atrasados: nomes dos leitores com empréstimos
  superiores a 7 dias;
- livrosDisponiveis: array com os nomes dos livros
  que foram emprestados por exatamente 7 dias
  ou menos;
- maiorAtraso: objeto contendo livro e diasEmprestado
  do empréstimo com maior duração.
Regras:
- Em caso de empate no maior atraso, mantenha o primeiro.
- Não modifique os dados originais.
- Se não houver empréstimos, maiorAtraso será null.
*/

function analisarEmprestimos(emprestimos) {
  let totalEmprestimos = 0;
  let atrasados =[];
  let livrosDisponiveis = [];
  let maiorAtraso = null;

  for (let { livro, leitor, diasEmprestado } of emprestimos) {
    totalEmprestimos ++ ;

    if (diasEmprestado > 7) {
      atrasados.push(leitor);
    } else {
      livrosDisponiveis.push(livro);
    }

    if (maiorAtraso === null || diasEmprestado > maiorAtraso.diasEmprestado) {
      maiorAtraso = { livro, diasEmprestado };
    }
  }

  return {
    totalEmprestimos,
    atrasados,
    livrosDisponiveis,
    maiorAtraso
  }
}

console.log(analisarEmprestimos([
    { livro: "Dom Casmurro", leitor: "Ana", diasEmprestado: 5 },
    { livro: "O Hobbit", leitor: "Carlos", diasEmprestado: 12 },
    { livro: "1984", leitor: "Marina", diasEmprestado: 8 },
    { livro: "A Revolução dos Bichos", leitor: "João", diasEmprestado: 4 }
]));

/* Resultado esperado:
{
    totalEmprestimos: 4,
    atrasados: ["Carlos", "Marina"],
    livrosDisponiveis: ["Dom Casmurro", "A Revolução dos Bichos"],
    maiorAtraso: {
        livro: "O Hobbit",
        diasEmprestado: 12
    }
}
*/

/* ========================================
   QUESTÃO 4 — ANALISADOR DE ARQUIVOS 
   ========================================
Um servidor recebe arquivos e precisa organizá-los
de acordo com suas extensões.
Crie a função analisarArquivos(arquivos).
Cada arquivo possui:
- nome;
- tamanho (em KB).
Considere as extensões:
- .pdf
- .jpg
- .txt
Retorne um objeto contendo:
- pdf: quantidade de arquivos PDF;
- imagens: quantidade de arquivos JPG;
- textos: quantidade de arquivos TXT;
- desconhecidos: nomes dos arquivos com outras extensões;
- maiorArquivo: nome do arquivo com maior tamanho.
Regras:
- A extensão deve ser reconhecida sem diferenciar
  maiúsculas e minúsculas.
- Em caso de empate, mantenha o primeiro arquivo.
- Se não houver arquivos, maiorArquivo será null.
- Não altere os dados originais.
*/

function analisarArquivos(arquivos) {
  let pdf = 0;
  let imagens = 0;
  let textos = 0;
  let desconhecidos = [];
  let maiorArquivo = null;
  let tamanhoMaiorArquivo = 0;

  for (let { nome, tamanho } of arquivos) {
    let novoNome = nome.toLowerCase();
    if (novoNome.endsWith(".pdf")) {
      pdf ++;
    } else if (novoNome.endsWith(".jpg")) {
      imagens ++;
    } else if (novoNome.endsWith(".txt")) {
      textos ++;
    } else {
      desconhecidos.push(nome)
    }

    if (maiorArquivo === null || tamanho > tamanhoMaiorArquivo) {
      tamanhoMaiorArquivo = tamanho;
      maiorArquivo = nome;
    }
  }

  return {
    pdf,
    imagens,
    textos,
    desconhecidos,
    maiorArquivo
  }
}

console.log(analisarArquivos([
    { nome: "relatorio.PDF", tamanho: 500 },
    { nome: "foto.jpg", tamanho: 1200 },
    { nome: "anotacoes.txt", tamanho: 100 },
    { nome: "video.mp4", tamanho: 2500 },
    { nome: "documento.pdf", tamanho: 800 }
]));
/* Resultado esperado:
{
    pdf: 2,
    imagens: 1,
    textos: 1,
    desconhecidos: ["video.mp4"],
    maiorArquivo: "video.mp4"
}
*/

/* ========================================
   QUESTÃO 5 — CONTROLE DE COMBUSTÍVEL
   ========================================
Uma empresa de transporte deseja analisar o consumo
de combustível de seus veículos.
Cada abastecimento possui:
- veiculo;
- litros;
- quilometrosRodados.
Crie a função analisarConsumo(abastecimentos).
Para cada abastecimento, calcule:
consumo = quilometrosRodados / litros
Retorne um objeto contendo:
- consumoMedio: média dos consumos calculados;
- melhorConsumo: nome do veículo com maior consumo;
- consumoBaixo: nomes dos veículos cujo consumo
  foi inferior a 8 km/l.
Regras:
- Ignore abastecimentos com litros iguais a zero.
- Não modifique o array original.
- Em caso de empate no melhor consumo, mantenha
  o primeiro veículo.
- Se nenhum abastecimento for válido,
  consumoMedio será 0 e melhorConsumo será null.
- Preserve a ordem dos veículos em consumoBaixo.
*/

function analisarConsumo(abastecimentos) {
  let consumoMedio = 0;
  let melhorConsumo = null;
  let consumoBaixo = [];

  let maiorConsumo = null;
  let somaConsumos = 0;
  let quantidadeAbastecimentos = 0;

  for (let { veiculo, litros, quilometrosRodados } of abastecimentos) {
    if (litros === 0) {
      continue;
    }

    let consumo = quilometrosRodados / litros;

    somaConsumos += consumo;
    quantidadeAbastecimentos++;

    if (maiorConsumo === null || consumo > maiorConsumo) {
      maiorConsumo = consumo;
      melhorConsumo = veiculo;
    }

    if (consumo < 8) {
      consumoBaixo.push(veiculo);
    }
  }

  if (quantidadeAbastecimentos > 0) {
    consumoMedio = somaConsumos / quantidadeAbastecimentos;
  }

  return {
    consumoMedio,
    melhorConsumo,
    consumoBaixo
  };
}

console.log(analisarConsumo([
    { veiculo: "Van", litros: 10, quilometrosRodados: 100 },
    { veiculo: "Caminhão", litros: 20, quilometrosRodados: 120 },
    { veiculo: "Carro", litros: 5, quilometrosRodados: 75 },
    { veiculo: "Moto", litros: 0, quilometrosRodados: 50 }
]));
/* Resultado esperado:
{
  consumoMedio: 10.333333333333334,
  melhorConsumo: "Carro",
  consumoBaixo: ["Caminhão"]
}
*/

/* ========================================
   QUESTÃO 6 — PAINEL DE FUNCIONÁRIOS
   ========================================
Uma empresa deseja gerar um resumo do desempenho
de seus funcionários.
Cada funcionário possui:
- nome;
- setor;
- horasTrabalhadas;
- faltas.
Crie a função gerarRelatorio(funcionarios).
Retorne um objeto contendo:
- setores: array com os nomes dos setores sem repetição;
- funcionariosRegulares: nomes dos funcionários
  com pelo menos 160 horas trabalhadas e no máximo
  2 faltas;
- horasTotais: soma das horas trabalhadas por todos;
- maiorCarga: nome do funcionário com mais horas trabalhadas.
Regras:
- Preserve a ordem original dos nomes e setores.
- Em caso de empate na maior carga, mantenha o primeiro.
- Não modifique os dados originais.
- Se não houver funcionários, os arrays serão vazios,
  horasTotais será 0 e maiorCarga será null.
*/

function gerarRelatorio(funcionarios) {
  let setores = [];
  let funcionariosRegulares = [];
  let horasTotais = 0;
  let maiorCarga = null;
  let quantidadeMaiorCarga = 0;

  for (let { nome, setor, horasTrabalhadas, faltas } of funcionarios) {
    if (!setores.includes(setor)) {
      setores.push(setor);
    }

    if (horasTrabalhadas >= 160 && faltas <= 2) {
      funcionariosRegulares.push(nome);
    }

    horasTotais += horasTrabalhadas;

    if (maiorCarga === null || horasTrabalhadas > quantidadeMaiorCarga) {
      quantidadeMaiorCarga = horasTrabalhadas;
      maiorCarga = nome;
    }
  }

  return {
    setores,
    funcionariosRegulares,
    horasTotais,
    maiorCarga
  }
}

console.log(gerarRelatorio([
    { nome: "Ana", setor: "TI", horasTrabalhadas: 170, faltas: 1 },
    { nome: "Bruno", setor: "RH", horasTrabalhadas: 150, faltas: 0 },
    { nome: "Carlos", setor: "TI", horasTrabalhadas: 180, faltas: 3 },
    { nome: "Marina", setor: "Financeiro", horasTrabalhadas: 180, faltas: 1 }
]));

/*
Resultado esperado:

{
    setores: ["TI", "RH", "Financeiro"],
    funcionariosRegulares: ["Ana", "Marina"],
    horasTotais: 680,
    maiorCarga: "Carlos"
}
*/