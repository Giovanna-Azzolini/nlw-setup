function criarProduto(nome, preco) {  
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notbook', 2199.49))
console.log(criarProduto('iPad', 1199.49))

/*Este é um exemplo usando o factory, para nao criar uma nova function com o nome do meu produto, apenas
criamos uma geral e colocamos os parametros que os produtos terão, nesse caso apenas nome, peco, mas podeos ver que dentro do escopo
podemos adicionar um novo parametro caso desejado, como mostra o desconto. Assim é só ir para o console e colocar as caracteristicas dos produtos
*/