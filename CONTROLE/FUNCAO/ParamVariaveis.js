function soma() { //Incialmente a function não recebeu nenhum parâmetro, mas ela pode receber depois
  let soma = 0 //Aqui a function soma que não havia recebido nenhum valor, ja foi associada ao valor zero 0
  for ( i in arguments) {
    soma += arguments[i]
  }
  return soma
}  

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste" ))
console.log(soma('a', 'b', 'c'))



