// Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

const pedidos = [
  { cliente: 'João', produto: 'Xbox', quantidade: 2 },
  { cliente: 'Maria', produto: 'Playstation', quantidade: 3 },
  { cliente: 'João', produto: 'Switch', quantidade: 1 },
  { cliente: 'Maria', produto: 'Xbox', quantidade: 1 },
  { cliente: 'João', produto: 'Playstation', quantidade: 2 }
];

const pedidosAgrupados = {};

pedidos.forEach(pedido => {
  const { cliente, produto, quantidade } = pedido;
  if (!pedidosAgrupados[cliente]) {
    pedidosAgrupados[cliente] = {};
  }
  if (!pedidosAgrupados[cliente][produto]) {
    pedidosAgrupados[cliente][produto] = 0;
  }
  pedidosAgrupados[cliente][produto] += quantidade;
});

console.log(pedidosAgrupados);
