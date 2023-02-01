//FUNÇÃO em JS é Firts-Class Object ou (Citizens)
// Higher-order function

//criar de forma literal
function fun1() { }

//Armazenas em uma variável , mas lembrando que para chamar o valor da function, precisa por entre parênteses
const fun2 = function() { }

//Armazenar em um array - como a function ainda sim é um dado, é possivel por de ntro de um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar()) // Lembrar de colocar os parenteses dentro para que o computador saiba que vc quer o valor que esta dentro da function

//Passar função como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Executando....') })

//Função pode retornar/conter uma função
function soma(a, b) {
 return function (c) {
    console.log(a + b + c)
 }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3) /*Desta forma tbm iremos ter o mesmo resultado
criando uma variavel const com o valor de 4, que seria o valor de c
*/
cincoMais(4)