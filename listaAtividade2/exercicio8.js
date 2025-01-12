// Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

const filmes = [
  {
    titulo: "O Senhor do Aneis: A Sociedade do Anel",
    diretor: "Peter Jackson",
    anoLancamento: 2001,
  },
  {
    titulo: "Harry Potter e a Pedra Filosofal",
    diretor: "Chris Columbus",
    anoLancamento: 2001,
  },
  {
    titulo: "Matrix",
    diretor: "Lana Wachowski",
    anoLancamento: 1999,
  },
];

const titulos = [];

filmes.forEach((filme) => {
  titulos.push(filme.titulo);
});

console.log(titulos);
