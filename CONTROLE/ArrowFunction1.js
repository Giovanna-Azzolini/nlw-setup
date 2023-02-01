let dobro = function(a) { //Se colocarmos o bloco, precisamos colocar o return, só nao precisa quando colocamos sem bloco
    return 2 * a
}

dobro = (a) => {
    return 2* a
}

dobro = a => 2 * a //Aqui é um exemplo da sintaxe bem mais reduzida que as outras anteriores, o RETURN esta implicto
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //o anderlaine funciona como um parametro, tem uma sintaxe ainda menor
console.log(ola())