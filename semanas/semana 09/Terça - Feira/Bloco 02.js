/* ========================================
   Q1 — Analisador de texto
Crie uma função analisarTexto(texto).
Retorne um objeto contendo:
- quantidadeCaracteres: tamanho do texto.
- quantidadePalavras: quantidade de palavras.
- textoInvertido: texto escrito de trás para frente.
Regras:
- Espaços no início e no final não devem contar
  como palavras.
- Se houver vários espaços entre palavras,
  considere como separação única.
- Se o texto estiver vazio ou possuir somente
  espaços, quantidadePalavras deve ser 0.
*/

function analisarTexto(texto) {
  const textoLimpo = texto.trim().replace(/\s+/g, " ");

  const palavras = textoLimpo === "" ? [] : textoLimpo.split(" ");

  const quantidadeCaracteres = textoLimpo.length;
  const quantidadePalavras = palavras.length;
  const textoInvertido = textoLimpo.split("").reverse().join("");

  return {
    quantidadeCaracteres,
    quantidadePalavras,
    textoInvertido
  };
}
console.log(analisarTexto("  JavaScript   é incrível  "));
// { quantidadeCaracteres: 21, quantidadePalavras: 3, textoInvertido: "levírcni é tpircSavaJ" }

/* Q2 — Atualização de configurações
Crie uma função atualizarConfiguracoes(config, novasConfig).
A função deve retornar um NOVO objeto contendo:
- Todas as propriedades de config.
- As propriedades de novasConfig devem substituir
  as propriedades correspondentes de config.
- Nenhum dos objetos originais pode ser alterado.
*/

function atualizarConfiguracoes(config, novasConfig) {
  return {
    ...config,
    ...novasConfig
  }
}
console.log(atualizarConfiguracoes( { tema: "claro", idioma: "pt", notificacoes: true },
 { tema: "escuro", notificacoes: false }));
// { tema: "escuro", idioma: "pt", notificacoes: false }

/* Q3 — Sequência numérica
Crie uma função analisarSequencia(numeros).
Retorne um objeto contendo:
- maior: maior número da sequência.
- menor: menor número da sequência.
- diferenca: diferença entre o maior e o menor.
- quantidadeNegativos: quantidade de números negativos.
Se o array estiver vazio:
- maior deve ser null.
- menor deve ser null.
- diferenca deve ser 0.
- quantidadeNegativos deve ser 0.
*/

function analisarSequencia(numeros) {
  let maior = null;
  let menor = null;
  let diferenca = 0;
  
  const quantidadeNegativos = numeros.filter(num => num < 0).length;

  for (let num of numeros) {
    if (maior === null || num > maior) {
      maior = num;
    }

    if (menor === null || num < menor) {
      menor = num;
    }
  }

  maior !== null ? diferenca = maior - menor : diferenca = 0;

  return {
    maior,
    menor,
    diferenca,
    quantidadeNegativos
  }
}

console.log(analisarSequencia([4, -8, 12, 3, -2]));
// { maior: 12, menor: -8, diferenca: 20, quantidadeNegativos: 2 }

console.log(analisarSequencia([]));
// { maior: null, menor: null, diferenca: 0, quantidadeNegativos: 0 }


/* Q4 — Controle de acesso
Crie uma função verificarPermissao(usuario).
O objeto possui:
- idade
- nivel
- bloqueado
Regras:
- Se bloqueado for true, negar acesso.
- Se idade for menor que 18, negar acesso.
- Se nivel for "admin", liberar acesso.
- Se nivel for "moderador", liberar acesso somente
  se idade for pelo menos 21.
- Qualquer outro nível deve ter acesso negado.
Retorne exatamente:
"Acesso liberado" ou "Acesso negado".
*/

function verificarPermissao(usuario) {
  const { idade, nivel, bloqueado } = usuario;
  
  return  bloqueado || idade < 18 ? "Acesso negado"
    : nivel.toLowerCase() === "admin" ? "Acesso liberado" 
    : nivel.toLowerCase() === "moderador" && idade >= 21 ? "Acesso liberado"
    : "Acesso negado";
}

console.log(verificarPermissao({ idade: 25, nivel: "admin", bloqueado: false }));       // "Acesso liberado"
console.log(verificarPermissao({ idade: 19, nivel: "moderador", bloqueado: false }));   // "Acesso negado"
console.log(verificarPermissao({ idade: 30, nivel: "admin", bloqueado: true }));        // "Acesso negado"
console.log(verificarPermissao({ idade: 22, nivel: "moderador", bloqueado: false }));   // "Acesso liberado"