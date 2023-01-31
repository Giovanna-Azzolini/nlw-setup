//Tipos de dados : Informações que podem ser em textos, numeros, booleanos(valores logicos: verdadeiro ou falso) ou dados mais estruturado.
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add) //Sempre que eu clicar nesse botão ele vai ouvir o nome de click, ele irá disparar a function abaixo
form.addEventListener("change", save)
function add() {
  //Aqui fizemos uma function para descobrir se o numero ja existe ou nao
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia ja incluso⛔")
    return
  }

  alert("Dia Adicionado com sucesso✔️")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
//   takePills: ["01-03"],
//   journal: ["01-02"],
// }
// nlwSeptup.setData(data)
// nlwSeptup.load()
