//vamos fazer
//um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
//que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

function formatarValorDecimal(valorDecimal) { //1° nomeamos a função e damos um parametro a ela
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`//2° Criamos uma let dentro do escopo que nela terá todo o calculo
    //usamos toFixed para limitar a quantidade de casas decimais que passará após o ponto, e replace para SUBSTITUIR o ponto(em todo resultado numeral, as casas decimais sao separadas por pontos), pela virgula, por isso sao colocadas entre parenteses
    console.log(valorEmReais) //Aqui deixamos registrado que queremos imprimir o resultado que esta na let valorEmReais
}

formatarValorDecimal(0.1 + 0.2)
