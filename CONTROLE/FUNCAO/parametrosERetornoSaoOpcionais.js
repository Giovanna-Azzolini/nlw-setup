function area(altura, largura) {
    const area = altura * largura
    if ( area > 20) { //if é para caso o valor for verdadeiro
        console.log(`Valor acima do permitido: ${area} m2.`) // quando quisermos calcular um valor ou puxar uma palvra dentro de um bloco, sempre colocar a crase ao inves das aspas simples, e de por o sifrão$ e a const dentro de colchetes{S}
    } else { //else é para caso o valor seja falso
        return area
    }
}

console.log(area(2, 3))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 44, 77, 50))//Aqui ele só leu os dois primeiro numeros, ja que são apenas dois parametros, e ignorou os outros
console.log(area(5, 5))
