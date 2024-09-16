// Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
  titulo: "O Senhor dos Anéis",    // Aqui, um objeto chamado livro é criado com quatro propriedades: titulo, autor,
  autor: "J.R.R. Tolkien",         // anoPublicacao, e genero. Cada uma dessas propriedades tem um valor associado.
  anoPublicacao: 1954,
  genero: "Fantasia"

};


let editoraExiste = false;  //É criada uma variável chamada editoraExiste,
//que começa com o valor false. Essa variável vai indicar se a propriedade
//editora já existe no objeto livro.

for (let propriedade in livro) {    //Este laço for...in percorre todas as propriedades do objeto livro:
  if (propriedade === "editora") {  //A variável propriedade recebe, uma a uma, o nome de cada propriedade do objeto.
    editoraExiste = true;           //O if dentro do laço verifica se o nome da propriedade atual é "editora"
    break;                          //Se encontrar a propriedade editora, a variável editoraExiste é definida como true e o laço é interrompido com break, pois não há necessidade de continuar.
  }
}
if (!editoraExiste) {       //Se editoraExiste ainda for false (ou seja, a propriedade editora não foi encontrada no objeto), o código dentro do if será executado.
  livro.editora = "HarperCollins";//ele adiciona a propriedade editora ao objeto livro com o valor "HarperCollins"
}
console.log(livro);
