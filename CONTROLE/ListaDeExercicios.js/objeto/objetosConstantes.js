// pessoa -> 123 {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> {...}
// pessoa = { nome: 'Ana} - Preicamos lembrar que nao conseguimos alterar o endereço que uma const aponta após criarmos, mas podemos mudar o que a dentro dela

Object.freeze(pessoa) //usando freeze, iremos congelar o objeto PESSOA, ele nao poderá ser alterado
//Ou seja, antes podiamos alterar o nome(atributo) que constava dentro da const pessoa, mas após o congelamento não poderemos mais
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC' //Após congelar tbm nao conseguimos adicionar outros atributos
delete pessoa.nome//Tambem nao conseguimos excluir nada referente ao obj
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Carlos'})//Aqui é só um ex de que desde o inicio podiamos ter congelado este obj, nao permitindo nenhum alteração
console.log(pessoaConstante)