//callback significa 'chamar de volta'

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //usar o comando forEach foi para chamar de volta o valor que seria impresso no console, baseado no array criado na const fabricantes
fabricantes.forEach(function(a) { //Aqui nós criamos um function que iria puxar apenas o valor de a, como inicialmente fizemos uma const ccom 2 parametros, onde nome é o 1 e indice o 2, naturalmente A significa nome, portanto irá imprimir apenas os nomes que constam dentro do array
    console.log(a)
})
fabricantes.forEach(function(fabricantes) {
    console.log(fabricantes)
} ) // Mesma coisa do exemplo de cima, mas apenas puxando o que tem na const fabricante, que são os nomes dentro do array

fabricantes.forEach(fabricantes => console.log(fabricantes))
//outro forma de chamar os elementos que constam no array
