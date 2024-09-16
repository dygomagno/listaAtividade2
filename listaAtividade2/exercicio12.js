// Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

const pedidos = [
  { cliente: 'João', produto: 'X-Bacon', quantidade: 2 },
  { cliente: 'Maria', produto: 'X-Egg', quantidade: 1 },
  { cliente: 'João', produto: 'X-Burguer', quantidade: 3 },
  { cliente: 'Carlos', produto: 'X-Salada', quantidade: 2 }
];

const agrupados = {};

pedidos.forEach(pedido => {
  const { cliente, quantidade } = pedido;
  if (agrupados[cliente]) {
    agrupados[cliente] += quantidade;
  } else {
    agrupados[cliente] = quantidade;
  }
});

console.log(agrupados);
