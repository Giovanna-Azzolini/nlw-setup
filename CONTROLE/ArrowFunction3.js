let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)
 
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //Aqui vai dar falso pois o this continua apontando para a functions, pois uma vez colocada, nap muda
comparaComThisArrow(module.exports)
/*O this de uma função arrow éum this associado a um contexto no qual a função foi escrita
Mesmo com o bind, vc nao vai conseguir alterar o contexto
*/