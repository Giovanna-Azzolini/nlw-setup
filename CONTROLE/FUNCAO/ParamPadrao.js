// estrategia 1 para gerar valor padrao
function soma1(a, b, c) { // esta é a versão mais famosa entre os programadores
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b+ c
}
/*a function soma tem os parametros a, b, c , que recebem eles mesmos como valor caso sejam verdadeiros
ou 1 caso no console.log não coloquemos nenhum valor, ou seja, caso seja falso*/
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

//estratégia 2, 3 e 4 para gerar valor padrãp
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //se a for estritamente diferente de undefined ele recebe o proprio valor de a, se não, assumirá o valor 1
    b = 1 in arguments ? b : 1 //aqui ele esta perguntando se exite o indice 1 in arguments, se existir pegue o valor de b, se nao, pegue o valor 1
    c = isNaN(c) ? 1 : c //Aqui ele esta dizendo que se c for um NaN É PARA RETORNAR o valor padrão 1, mas se for um numero, retornar o valor de c
   // a versão NaN É A MAIS RECOMENDADA POIS EVITA BEM MAIS OS BUGS
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//Valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) { // Esta seria a versão mais adequada e mais rapida de se usar
    return a + b + c
}

console.log(soma3(), soma3 (3), soma3(1, 2, 3), soma3(0, 0, 0))