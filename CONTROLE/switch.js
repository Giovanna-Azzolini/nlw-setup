const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break  // usamos o break para impedir que os valores abaixo sejam todos gerados automaticamente
        case 8: case 7:    // Podemos colocar uma case em linhas separadas ou juntas, mas sem separar por virgulas
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperção')
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')        
    }
    console.log('Fim') //Aqui apenas colocamos uma mensagem no fim de cada resultado
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)