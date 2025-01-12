// Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

const transacoes = [
  { tipo: "entrada", valor: 1000 },
  { tipo: "saída", valor: 500 },
  { tipo: "entrada", valor: 2000 },
  { tipo: "saída", valor: 100 },
  { tipo: "entrada", valor: 1500 },
];

let saldo = 0;

transacoes.forEach((transacao) => {
  if (transacao.tipo === "entrada") {
    saldo += transacao.valor;
  } else if (transacao.tipo === "saída") {
    saldo -= transacao.valor;
  }
});

console.log(saldo);
