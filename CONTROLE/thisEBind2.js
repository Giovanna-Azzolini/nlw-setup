function pessoa() {
    this.idade = 0

    const self = this
    setInterval (function() { //setInterval serve para executar uma função ou instrução varias vezes
        self.idade++
        console.log(self.idade)
    }, 1000) //Para interromper ou reiniciar a contagem é só utilizar Ctrl + Alt + M
}

new pessoa