// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variávei externas á função

//Contexto Léxico em ação!!

const x =  'Global'

function fora() { //Como definimos essa função, ele irá imprimir 'Local' ao invés de 'Global', pois global é uma const externa
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())