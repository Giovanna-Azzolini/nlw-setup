const pessoa = {
    saudacao : 'Bom dia!!',
    falar() {
        console.log(this.saudacao) // Se não for colocado a palavra THIS , vai gerar um erro
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e orientado a objetos

const falarDePessoa = pessoa.falar.bind(pessoa) //Acionando o bind ele irá apontar para o this
falarDePessoa()