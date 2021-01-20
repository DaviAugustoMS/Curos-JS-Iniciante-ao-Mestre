const pesso = {
  nome: "Davi",
  idade: 26,
  email: "davi@gmail.com"
}

  console.log(pesso)

  for(let prop in pesso) {
    console.log(prop)
    console.log(pesso[prop])
  }