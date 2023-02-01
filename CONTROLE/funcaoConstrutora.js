function Carro (velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0 //essa let só poderá ser consultada fazendo ref a function carro

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro //Utilizando o new podemos criar um obj referente a uma função
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)//Aqui criamos um novo obj, uma ferrari, referente a function Carro, e só alteramos os parametros, mas permanecendo com a mesma quantidade
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar( )
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)