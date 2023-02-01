const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()
/*Neste ex mostramos que mesmo criando uma nova function, se chamarmos o mesmo valor da ´1 function que ja foi declarada, ele continuara validando ela
*/