// Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

const produto = {        //Este é um objeto chamado produto com várias propriedades,
  nome: 'Caneta',         //como nome, preco, cor, tamanho, quantidade, e emEstoque.
  preco: 1.99,            //Cada propriedade tem um valor associado:
  cor: 'Azul',
  tamanho: 'Grande',
  quantidade: 10,
  emEstoque: true


}

function filtrarPropriedades(objeto, valor) {  //Este trecho de código é uma função chamada filtrarPropriedades,
  const novoObjeto = {};                       //que filtra as propriedades de um objeto com base em
  //um valor numérico e retorna um novo objeto contendo
  //apenas as propriedades que satisfazem a condição de serem maiores que o valor fornecido.
  for (let propriedade in objeto) {
    if (objeto[propriedade] > valor) {
      novoObjeto[propriedade] = objeto[propriedade];
    }
  }
  return novoObjeto;

}

const novoProduto = filtrarPropriedades(produto, 1.99);
console.log(novoProduto);

//O valor retornado pela função (o novo objeto filtrado) é
//armazenado na variável novoProduto. Esse novo objeto conterá
//somente as propriedades de produto que atenderem à condição de terem um valor maior que 1.99.

