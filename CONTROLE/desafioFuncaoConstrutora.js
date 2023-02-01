//Neste exemplo vamos mostrar como transformar o ex do arquivo 'classVsFactory'  que é uma classe pessoa, em uma classe construtora
function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('jOÃO')
p1.falar()