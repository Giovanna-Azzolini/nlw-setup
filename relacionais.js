console.log('01)', '1' == 1) //o sinal de igual igual é usado para saber a igualdade dos operandos. Ele quer saber se 1 é igual ou não a 1
console.log('2)', '1' === 1)// tres sinais de igual significa se é estritamente igual
console.log('3)', '3' != 3) // aqui não estamos comparando otipo, e sim o valor
console.log('04)', '3' !== 3)

console.log('5)', 3 < 2)
console.log('6)', 3 > 2)
console.log('7)', 3 <= 2)
console.log('8)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 ===d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('12)', undefined === null)
/*
O ideal é usar === estritamente igual,
 pois ele não ignora os tipos ex. se é string, numeral, etc
*/