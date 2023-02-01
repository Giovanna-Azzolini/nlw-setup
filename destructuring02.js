const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] /*
Aqui criamos uma const pulando duas colocações, que teriam sido o n2 e o n4
Por isso que quando formos imprimir o código, será "10, 9, undefined, 0" , 10 é associado ao n1,
7 ao n2 que foi ignorado, 9 ao n3, 8 ao n4 que tbm foi pulado, o n5 esta fora do array por isso não é impresso, o n6 0
*/
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] /* Aqui temos um código de dificil leitura, mas ignoramos o primeiro elemento do 
primeiro colchete, e tambem ignoramos o 1 elemento do segundo colchete, então quando formos ler os valores associados, 
o único valor que precisamos é o de 'notas', que é o segundo valor do segundo colchete, que seria 6
*/
console.log(nota)