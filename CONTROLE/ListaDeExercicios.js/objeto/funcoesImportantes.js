const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//Usando o comando keys, fará com que seja impresso apenas as chaves do objetos, como se fosse um filtro
console.log(Object.values(pessoa))//Aqui é da mesma forma, só que puxando os valores
console.log(Object.entries(pessoa))//Aqui ele irá colocar as informações em arrays, um maior abrangendo tudo e os menores com as chaves e os valores respectivos

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{ //Definir uma Propriedad
enumerable: true,
writable: false, //Significa que nao aceitará ser alterada
value: '01/01/2019'
}) 
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)

const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj) // No resultado o valor de a será 4 pois ecaso tenham atributos iguais, ele ira considerar o valor do ultimo que ele ler

