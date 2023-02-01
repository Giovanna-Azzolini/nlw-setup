function expoente (base, expoente) {
    //Pode ser feito de duas formas
    //Método Antigo
    let resultado = Math.pow(base, expoente) 

    //Método Moderno
    resultado = base ** expoente
    return resultado
}

console.log(expoente(2, 3))