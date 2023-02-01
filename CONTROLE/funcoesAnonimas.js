//Uma função anonima é simplesmente uma função sem nome
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
     console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) { //Atenção: Aqui ele colocou uma function que irá retornar a diminuição do valor de x pelo de y, então ao inves de somar, será diminuido 
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) //Aqui ele fez uma arrow function passando para multiplicação, e como a function tem 2 parametros, o x e o y precisam permanecer entre os parenteses

const pessoa = { //Aqui nós acessamos a função anonima a partir do atrbuto que definimos no chave valor
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()