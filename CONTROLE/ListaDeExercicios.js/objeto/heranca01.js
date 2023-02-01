const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)//Usar o __proto__ faz com que caso eu tente acessar o atributo de algum obj e nao tiver, ele irá procurar no meu prototipo pai
console.log(ferrari.__proto__===Object.prototype) // um obj criado aponta para o Object
 console.log(Object.prototype.__proto__)//O object de prototype, que é [[prototype]] sempre aponta para o null