// novo recurso do ES2015
/*
O Destructuring serve para extrairmos atributos especificos de dentro do corpo de um object
*/

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // Conseguimos extrair apenas os atributos nome e idade do object pessoa dessa forma
console.log(nome, idade)

const {nome: n, idade:i} = pessoa // Aqui nós conseguimos extrair apenas esses dois atributos de outra forma, associando o nome a letra n e a idade a letra i, assim, quando formos gerar o código, podemos imprimir apena n e i
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa // Nesse caso não existem esses atributos dentro do object pessoa, mas podemos associar um valor unico, como o true, para não gerar em todos o undefined
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa // Aqui ele puxará logradouro e numero, e cep será undefined pois não é um atributo citado dentro do corpo
console.log(logradouro, numero, cep)

//const {conta: {ag, num}} = pessoa
//console.log(ag, num)
/*
Nesse caso gerou um erro pois tentamos puxar atributos inexistentes do objeto
só é possivel gerar o undefined no ultimo atributo, mas em todos não
*/