//Exeemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) { //Utilizando o onclick, significa que sempre que alguem clicar na tag 'body, irá retornar a function com 'O evento ocorreu!
    console.log('O Evento ocorreu!')
}