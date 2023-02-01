function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)} `
}
const produto = {
    nome: 'Notbook',
    preco: 4589,
    desc: 0.15,
    getPreco //colocando getPreco ele irá associar a function feita acima
}

console.log(getPreco())
console.log(produto.getPreco())