const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado') 
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') /*uidado, aqui ele dará reprovado 
pois esta se tratando de uma string, e não será comparável com o 7
portanto ficará como reprovada
*/