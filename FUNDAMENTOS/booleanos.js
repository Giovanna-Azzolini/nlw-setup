let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!1)
console.log(!1)
console.log('Os verdadeiro...')
console.log(!!-1)
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para Finalizar....')
console.log(!!('' || null || 0 || 'epa')) // este foi true pq as últimas aspas simples nao estavam vazias


let nome = '' // Caso eu tenha criado uma let vazia e agora queira imprimir com um nome, só fazer da forma abaixo:
console.log(nome || 'Desconhecido')
