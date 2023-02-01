//Função FACTORY é uma função que retorna um objeto
//Usamos por exemplo, quando precisamos criar varios objetos com os mesmos parametros, para não enchermos o cod com as mesmas cooisas, usamos o factory

//Factory Simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva',
    }
}

console.log(criarPessoa())