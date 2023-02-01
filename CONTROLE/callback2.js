//Iremos puxar todos os numeros menores do que 7 de dentro do array

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem Callback

let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]) //lembrando que usamos o push para unificar
    }
}

console.log(notasBaixas1)

//Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
}) //Filter é um coando que ira filtrar os componentes de um array

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)