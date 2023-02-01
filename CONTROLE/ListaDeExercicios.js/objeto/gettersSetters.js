// Getters - para ler o valor de uma variavel
// Setters - para alterar o valor de uma variavel
const sequencia = {
    _valor: 1, //Esse anderlaine nao significa que ele esta privando , mas esta mostrando aos programadores que acessarem esse codigo, que a pretenção é acessao apenas internamente
    get valor() { return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
